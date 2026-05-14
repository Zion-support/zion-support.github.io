#!/usr/bin/env node
/**
 * Smart Email Responder — Autonomous Email Processing Agent
 * Reads inbox via IMAP, classifies with LLM, takes smart actions
 * Zero cost, fully local, respects dry-run and confidence thresholds
 */

const { simpleParser } = require('mailparser');
const { Imap } = require('imap');
const { inspect } = require('util');

const fs = require('fs');
const path = require('path');

const CONFIG = {
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT) || 993,
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
  mailbox: process.env.EMAIL_MAILBOX || 'INBOX',
  dryRun: process.env.EMAIL_DRY_RUN !== 'false',
  confidenceThreshold: parseFloat(process.env.EMAIL_CONFIDENCE_THRESHOLD) || 0.8,
  llmEndpoint: process.env.EMAIL_LLM_ENDPOINT || 'http://localhost:3000/api/llm/chat',
  pollInterval: parseInt(process.env.EMAIL_POLL_INTERVAL) || 300000, // 5 min
};

const QUEUE_DIR = path.join(process.cwd(), 'automation', 'email-queue');
fs.mkdirSync(QUEUE_DIR, { recursive: true });

const PENDING = path.join(QUEUE_DIR, 'pending.json');
const PROCESSED = path.join(QUEUE_DIR, 'processed.json');
const FAILED = path.join(QUEUE_DIR, 'failed.json');

// Load queues
let pendingQueue = []; let processedLog = []; let failedLog = [];
if (fs.existsSync(PENDING)) pendingQueue = JSON.parse(fs.readFileSync(PENDING, 'utf8'));
if (fs.existsSync(PROCESSED)) processedLog = JSON.parse(fs.readFileSync(PROCESSED, 'utf8'));
if (fs.existsSync(FAILED)) failedLog = JSON.parse(fs.readFileSync(FAILED, 'utf8'));

// IMAP connection singleton
let imap = null;

function connectImap() {
  return new Promise((resolve, reject) => {
    imap = new Imap({
      host: CONFIG.host,
      port: CONFIG.port,
      tls: true,
      auth: { user: CONFIG.user, pass: CONFIG.pass }
    });

    imap.once('ready', () => resolve());
    imap.once('error', (err) => reject(err));
    imap.connect();
  });
}

function searchUnseen(cb) {
  imap.openBox(CONFIG.mailbox, false, (err, box) => {
    if (err) return cb(err);
    imap.search(['UNSEEN'], (err, results) => cb(err, results));
  });
}

function fetchMessages(ids, cb) {
  const f = imap.seq.fetch(ids, { bodies: '' });
  const messages = [];
  f.on('message', (msg) => {
    let raw = '';
    msg.on('body', (stream) => {
      stream.on('data', (chunk) => raw += chunk.toString('utf8'));
    });
    msg.once('end', async () => {
      try {
        const parsed = await simpleParser(raw);
        messages.push(parsed);
      } catch (e) { console.error('Parse error:', e.message); }
    });
  });
  f.once('error', cb);
  f.once('end', () => cb(null, messages));
}

// Classify email via LLM
async function classifyEmail(email) {
  const prompt = `Classify this email into exactly one intent: sales, support, partnership, feedback, spam, or unclassified.

Email:
From: ${email.from?.text || email.from?.value?.text || 'unknown'}
Subject: ${email.subject || '(no subject)'}
Body preview: ${(email.text || '').slice(0, 500)}

Respond with JSON: {"intent":"...","confidence":0.0-1.0,"reason":"...","suggested_action":"..."}`;

  try {
    const resp = await fetch(CONFIG.llmEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, temperature: 0.2, max_tokens: 200 })
    });
    const data = await resp.json();
    const text = data.text || data.response || '';
    const jsonMatch = text.match(/\{.*\}/s);
    if (jsonMatch) return JSON.parse(jsonMatch);
    return { intent: 'unclassified', confidence: 0, reason: 'LLM output unparseable', suggested_action: 'human_review' };
  } catch (e) {
    return { intent: 'unclassified', confidence: 0, reason: e.message, suggested_action: 'human_review' };
  }
}

// Action handlers
async function actionReply(email, classification, dryRun = true) {
  const templates = {
    sales: `Thank you for your interest in our services!\n\nWe offer a comprehensive catalog of AI and IT solutions. You can explore all services at ${CONFIG.baseURL || '/services'}.\n\nFor a custom proposal, reply with your requirements.\n\nBest,\nZion Team`,
    support: `We've received your support request (Ticket: auto-${Date.now()}). Our team will respond within 24 hours.\n\nIn the meantime, you can check our knowledge base or reply with more details.\n\nThank you,\nSupport Team`,
    partnership: `Thank you for reaching out about a partnership! Our partnerships team will review your proposal and get back to you within 2 business days.\n\nBest,\nZion Partnerships`,
    feedback: `Thank you for your feedback! We're always improving and appreciate your input.\n\nFeel free to share more details if you'd like.\n\n— Zion Team`,
    spam: null,
    unclassified: `Thank you for contacting us. We'll get back to you shortly.\n\n— Zion Team`
  };

  const replyText = templates[classification.intent] || templates.unclassified;
  if (!replyText) return { sent: false, reason: 'spam - no reply' };

  if (dryRun) {
    console.log(`[DRY-RUN] Would reply to ${email.from?.text}: ${classification.intent}`);
    return { sent: false, dryRun: true, intent: classification.intent };
  }

  // TODO: integrate with SMTP sender (nodemailer)
  console.log(`[SEND] Reply to ${email.from?.text} (${classification.intent}) - not yet implemented`);
  return { sent: false, reason: 'SMTP not configured' };
}


// === RECOMMENDER INTEGRATION ===
async function getRecommendations(answers) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const resp = await fetch(`${baseUrl}/api/recommend`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers })
    });
    if (!resp.ok) return null;
    const data = await resp.json();
    return data.top3 || [];
  } catch (e) {
    console.error('Recommendation error:', e.message);
    return null;
  }
}

async function actionReply(email, classification) {
  const templates = {
    sales: (recs) => {
      let body = `Thank you for your interest in our services!\n\nWe offer a comprehensive catalog of AI and IT solutions.`;
      if (recs && recs.length > 0) {
        body += '\n\nBased on your needs, here are our top recommendations:\n';
        recs.forEach((r, i) => {
          body += `\n${i+1}. **${r.title}** (${r.category}) — ${r.reason}\n`;
        });
        body += '\nReply with any questions or request a custom proposal!';
      }
      body += '\n\nExplore all services: /services\n\nBest,\nZion Team';
      return body;
    },
    support: `We've received your support request. Our team will respond within 24 hours.\n\nYou can also browse our knowledge base or reply with more details.\n\nThank you,\nSupport Team`,
    partnership: `Thank you for your partnership interest! Our team will review and respond within 2 business days.\n\nBest,\nZion Partnerships`,
    feedback: `Thank you for your feedback! We appreciate you taking the time to share your thoughts.\n\n— Zion Team`,
    spam: null,
    unclassified: `Thank you for contacting us. We'll get back to you shortly.\n\n— Zion Team`
  };

  const replyText = templates[classification.intent] || templates.unclassified;
  if (!replyText) return { sent: false, reason: 'spam - no reply' };

  if (CONFIG.dryRun) {
    console.log(`[DRY-RUN] Would reply to ${email.from?.text}: ${classification.intent}`);
    return { sent: false, dryRun: true, intent: classification.intent };
  }

  console.log(`[SEND] Reply to ${email.from?.text} (${classification.intent}) - SMTP not yet implemented`);
  return { sent: false, reason: 'SMTP pending' };
}

// Override processEmail to extract needs from email
async function processEmail(email) {
  const classification = await classifyEmail(email);

  // Try to extract needs for sales emails
  let needs = null;
  if (classification.intent === 'sales' && classification.confidence >= 0.7) {
    // Very rough extraction — LLM-based would be better but this is zero-cost
    const bodyPreview = (email.text || '').slice(0, 2000);
    needs = { budget: null, timeline: null, needs: [] };
    // Heuristic: look for budget keywords
    const budgetMatch = bodyPreview.match(/(?:budget|price|cost|under|max).{0,60}/i);
    if (budgetMatch) needs.budget = budgetMatch[0].trim();
    // Look for timeline keywords
    const timeMatch = bodyPreview.match(/(?:timeline|asap|urgent|within|next week|month|quarter).{0,60}/i);
    if (timeMatch) needs.timeline = timeMatch[0].trim();
  }

  let recommendations = null;
  if (needs && classification.confidence >= 0.7) {
    recommendations = await getRecommendations(needs);
  }

  const actionResult = await actionReply(email, classification, CONFIG.dryRun, recommendations);

  const record = {
    id: email.messageId || Date.now().toString(),
    from: email.from?.text || 'unknown',
    subject: email.subject || '(no subject)',
    intent: classification.intent,
    confidence: classification.confidence,
    reason: classification.reason,
    action: classification.suggested_action,
    reply: actionResult,
    receivedAt: email.date ? new Date(email.date).toISOString() : new Date().toISOString(),
    processedAt: new Date().toISOString(),
    dryRun: CONFIG.dryRun,
    hasRecommendations: !!recommendations
  };

  if (classification.confidence >= CONFIG.confidenceThreshold) {
    processedLog.unshift(record);
    if (processedLog.length > 1000) processedLog.pop();
    fs.writeFileSync(PROCESSED, JSON.stringify(processedLog, null, 2));
    console.log(`✅ ${record.from} → ${record.intent} (${(classification.confidence*100).toFixed(0)}%) ${recommendations ? '+recs' : ''}`);
  } else {
    pendingQueue.unshift(record);
    fs.writeFileSync(PENDING, JSON.stringify(pendingQueue, null, 2));
    console.log(`⏳ Pending: ${record.from} → ${record.intent} (${(classification.confidence*100).toFixed(0)}%)`);
  }
}

async function processEmail(email) {
  const classification = await classifyEmail(email);
  const actionResult = await actionReply(email, classification, CONFIG.dryRun);

  const record = {
    id: email.messageId || Date.now().toString(),
    from: email.from?.text || 'unknown',
    subject: email.subject || '(no subject)',
    intent: classification.intent,
    confidence: classification.confidence,
    reason: classification.reason,
    action: classification.suggested_action,
    reply: actionResult,
    receivedAt: email.date ? new Date(email.date).toISOString() : new Date().toISOString(),
    processedAt: new Date().toISOString(),
    dryRun: CONFIG.dryRun
  };

  if (classification.confidence >= CONFIG.confidenceThreshold) {
    processedLog.unshift(record);
    if (processedLog.length > 1000) processedLog.pop();
    fs.writeFileSync(PROCESSED, JSON.stringify(processedLog, null, 2));
    console.log(`✅ Processed: ${record.from} → ${record.intent} (${(classification.confidence*100).toFixed(0)}%)`);
  } else {
    pendingQueue.unshift(record);
    fs.writeFileSync(PENDING, JSON.stringify(pendingQueue, null, 2));
    console.log(`⏳ Pending (low confidence): ${record.from} → ${record.intent} (${(classification.confidence*100).toFixed(0)}%)`);
  }
}

async function runCycle() {
  if (!imap) await connectImap();
  searchUnseen((err, ids) => {
    if (err) return console.error('Search error:', err);
    if (!ids || ids.length === 0) return console.log('📭 No unread emails');

    console.log(`📬 Found ${ids.length} unread emails`);
    fetchMessages(ids, (err, messages) => {
      if (err) return console.error('Fetch error:', err);

      (async () => {
        for (const msg of messages) {
          try {
            await processEmail(msg);
            // Mark as seen only if processed or pending (skip spam routing? mark anyway)
            // imap.addFlags(msg.uid, '\\Seen', ()=>{}); // defer until after action
          } catch (e) {
            console.error('❌ Processing failed:', e.message);
            failedLog.unshift({ error: e.message, at: new Date().toISOString() });
            fs.writeFileSync(FAILED, JSON.stringify(failedLog, null, 2));
          }
        }
        console.log(`🔄 Cycle complete — sleeping ${CONFIG.pollInterval / 1000}s`);
      })();
    });
  });
}

// Daemon loop
async function startDaemon() {
  console.log(`🤖 Smart Email Responder starting...`);
  console.log(`📧 Config: ${CONFIG.user}@${CONFIG.host} | Dry-run: ${CONFIG.dryRun} | Threshold: ${CONFIG.confidenceThreshold}`);

  while (true) {
    try {
      await runCycle();
    } catch (e) {
      console.error('⚠️ Cycle error, reconnecting:', e.message);
      try { imap?.end(); } catch (_) {}
      imap = null;
    }
    await new Promise(r => setTimeout(r, CONFIG.pollInterval));
  }
}

// Single-run mode (for cron/manual trigger)
if (process.argv.includes('--once')) {
  runCycle().then(() => {
    try { imap?.end(); } catch (_) {}
    process.exit(0);
  }).catch(e => { console.error(e); process.exit(1); });
} else {
  startDaemon();
}
