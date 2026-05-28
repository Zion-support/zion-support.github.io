#!/usr/bin/env node
/**
 * Intelligent Email Responder v4.0
 * Zion Tech Group - AI-Powered Email Intelligence System
 * 
 * Features:
 * - Intent Classification (6 categories + sub-types)
 * - AI Sentiment & Urgency Analysis (Gemini)
 * - Smart Reply-All with CC preservation
 * - Multi-language Detection & Response
 * - Email-to-Task Auto-Conversion
 * - Knowledge Base Integration
 * - Smart Escalation Engine
 * - Sender Profile Learning
 * - Response Verification & Tracking
 * - Conversation Thread Tracking
 */

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const BASE_DIR = '/Users/miami2/zion.app/automation';
const LOG_FILE = BASE_DIR + '/logs/email-responder-v4.log';
const STATE_FILE = BASE_DIR + '/logs/email-responder-state-v4.json';
const TASKS_FILE = BASE_DIR + '/logs/email-tasks.json';
const SENDER_PROFILES_FILE = BASE_DIR + '/logs/sender-profiles.json';
const KB_ARTICLES_FILE = BASE_DIR + '/logs/kb-articles.json';
const ESCALATION_LOG = BASE_DIR + '/logs/escalations.json';
const RESPONSE_LOG = BASE_DIR + '/logs/response-tracking.json';

const CONTACT = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// ═══════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════

function log(level, msg) {
  const ts = new Date().toISOString();
  const line = '[' + ts + '] [' + level.toUpperCase() + '] ' + msg;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function logInfo(msg) { log('info', msg); }
function logWarn(msg) { log('warn', msg); }
function logError(msg) { log('error', msg); }

// ═══════════════════════════════════════════════════════════════
// STATE MANAGEMENT
// ═══════════════════════════════════════════════════════════════

function loadJSON(filePath, defaultVal) {
  if (defaultVal === undefined) defaultVal = {};
  try {
    if (fs.existsSync(filePath)) return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch(e) {}
  return defaultVal;
}

function saveJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function loadState() {
  return loadJSON(STATE_FILE, {
    lastUID: 0,
    processedCount: 0,
    stats: {},
    version: 4,
    lastRun: null,
    consecutiveFailures: 0
  });
}

function saveState(state) {
  state.lastRun = new Date().toISOString();
  saveJSON(STATE_FILE, state);
}

// ═══════════════════════════════════════════════════════════════
// SENDER PROFILE LEARNING
// ═══════════════════════════════════════════════════════════════

function loadSenderProfiles() {
  return loadJSON(SENDER_PROFILES_FILE, {});
}

function saveSenderProfiles(profiles) {
  saveJSON(SENDER_PROFILES_FILE, profiles);
}

function updateSenderProfile(email, data) {
  const profiles = loadSenderProfiles();
  const addr = email.toLowerCase();
  if (!profiles[addr]) {
    profiles[addr] = {
      email: addr,
      firstSeen: new Date().toISOString(),
      interactionCount: 0,
      preferredLanguage: 'en',
      avgResponseTime: null,
      lastSubject: null,
      categories: {}
    };
  }
  const p = profiles[addr];
  p.interactionCount++;
  p.lastSeen = new Date().toISOString();
  if (data.subject) p.lastSubject = data.subject;
  if (data.category) p.categories[data.category] = (p.categories[data.category] || 0) + 1;
  if (data.language) p.preferredLanguage = data.language;
  profiles[addr] = p;
  saveSenderProfiles(profiles);
  return p;
}

// ═══════════════════════════════════════════════════════════════
// KNOWLEDGE BASE
// ═══════════════════════════════════════════════════════════════

function loadKB() {
  return loadJSON(KB_ARTICLES_FILE, []);
}

function findKBArticles(query, limit) {
  if (limit === undefined) limit = 3;
  const kb = loadKB();
  if (!kb || !kb.length) {
    return [
      { title: 'AI Automation Setup Guide', url: '/zion-ai-workflow-orchestrator', keywords: ['setup', 'automation', 'configure', 'install'] },
      { title: 'Security Compliance Overview', url: '/zion-ai-compliance-checker', keywords: ['security', 'compliance', 'ssl', 'certificates'] },
      { title: 'Cloud Infrastructure Services', url: '/ai-services', keywords: ['cloud', 'infrastructure', 'aws', 'azure', 'gcp'] },
      { title: 'Data Analytics Solutions', url: '/zion-ai-conversation-analytics', keywords: ['analytics', 'data', 'dashboard', 'metrics'] },
      { title: 'Enterprise AI Pricing', url: '/pricing', keywords: ['pricing', 'cost', 'enterprise', 'quote', 'package'] },
      { title: 'Integration & API Services', url: '/api-development', keywords: ['api', 'integration', 'webhook', 'rest'] }
    ];
  }
  const q = query.toLowerCase();
  return kb.filter(function(a) { return a.keywords.some(function(k) { return q.indexOf(k) !== -1; }); }).slice(0, limit);
}

// ═══════════════════════════════════════════════════════════════
// EMAIL PARSING
// ═══════════════════════════════════════════════════════════════

function extractName(from) {
  const m = from.match(/^"?([^"<]+)"?\s*</);
  return m ? m[1].trim() : from.split('@')[0];
}

function extractEmailAddr(from) {
  const m = from.match(/<([^>]+)>/);
  return m ? m[1].trim() : from;
}

function extractCCList(cc) {
  if (!cc) return [];
  const emails = [];
  const matches = cc.matchAll(/<([^>]+)>/g);
  for (const m of matches) emails.push(m[1].trim());
  return emails;
}

// ═══════════════════════════════════════════════════════════════
// INTENT CLASSIFICATION
// ═══════════════════════════════════════════════════════════════

const TYPES = {
  SUPPORT: 'support',
  SALES: 'sales',
  PARTNERSHIP: 'partnership',
  JOB: 'job',
  URGENT: 'urgent',
  GENERAL: 'general',
  BILLING: 'billing',
  FEEDBACK: 'feedback'
};

const KEYWORDS = {
  support: ['help', 'issue', 'problem', 'error', 'bug', 'fix', 'not working', 'broken', 'fail', 'unable', 'exception', 'crash', 'slow', 'performance'],
  sales: ['price', 'cost', 'buy', 'purchase', 'quote', 'demo', 'trial', 'pricing', 'interested', 'package', 'budget', 'roi', 'save', 'discount'],
  partnership: ['partner', 'reseller', 'affiliate', 'collaborate', 'joint', 'venture', 'strategic', 'integration', 'referral'],
  job: ['resume', 'cv', 'hire', 'job', 'career', 'position', 'apply', 'recruit', 'experience', 'qualifications'],
  urgent: ['urgent', 'asap', 'immediately', 'emergency', 'critical', 'deadline', 'priority', 'now', 'important', 'serious'],
  billing: ['invoice', 'payment', 'bill', 'charge', 'refund', 'subscription', 'cancel', 'plan', 'upgrade'],
  feedback: ['feedback', 'suggestion', 'improve', 'review', 'recommend', 'great', 'awesome', 'terrible', 'opinion']
};

function classifyIntent(subject, body) {
  const text = (subject + ' ' + body).toLowerCase();
  
  if (KEYWORDS.urgent.some(function(k) { return text.indexOf(k) !== -1; })) return 'urgent';
  
  let best = 'general', max = 0;
  for (const type in KEYWORDS) {
    if (type === 'urgent') continue;
    const kws = KEYWORDS[type];
    let score = 0;
    for (const k of kws) { if (text.indexOf(k) !== -1) score++; }
    if (score > max) { max = score; best = type; }
  }
  return best;
}

// ═══════════════════════════════════════════════════════════════
// MULTI-LANGUAGE DETECTION
// ═══════════════════════════════════════════════════════════════

const LANG_PATTERNS = {
  en: /\b(the|and|for|are|but|not|you|all|can|her|was|one|our|out|day|get|has|him|his|how|its|may|now|old|see|way|who|boy|did|own|say|she|too|use)\b/i,
  es: /\b(el|la|los|las|un|una|de|en|que|es|por|con|para|como|pero|su|al|lo|se|le|ya|me|ha|lo|va|bien|todo|esta|ser|no|tiempo|más|cuando|puede)\b/i,
  pt: /\b(o|a|os|as|um|uma|de|em|que|é|por|com|para|como|mais|seu|sua|está|também|vai|ter|foi|ser|não|tem|só|ou|pode)\b/i,
  fr: /\b(le|la|les|un|une|de|du|des|en|que|et|est|pour|avec|sur|qui|dans|ce|pas|une|plus|par|a|ses|aux|ont|été|sont)\b/i,
  de: /\b(der|die|das|ein|eine|in|zu|und|ist|von|mit|auf|für|sich|als|auch|es|an|werden|aus|nur|kann|bei|nach|hat|sein|mehr)\b/i
};

function detectLanguage(text) {
  const scores = {};
  for (const lang in LANG_PATTERNS) {
    const pattern = LANG_PATTERNS[lang];
    const matches = text.match(pattern);
    scores[lang] = matches ? matches.length : 0;
  }
  const entries = Object.entries(scores).sort(function(a, b) { return b[1] - a[1]; });
  const best = entries[0];
  return best[1] > 5 ? best[0] : 'en';
}

// ═══════════════════════════════════════════════════════════════
// AI ANALYSIS
// ═══════════════════════════════════════════════════════════════

async function analyzeWithAI(body, type, language) {
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  
  try {
    const shortBody = body.substring(0, 600);
    const escapedBody = shortBody.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ');
    
    const langNames = { en: 'English', es: 'Spanish', pt: 'Portuguese', fr: 'French', de: 'German' };
    const langNote = language !== 'en' ? ' (respond in ' + (langNames[language] || 'English') + ')' : '';
    
    const promptText = 'Analyze and return ONLY valid JSON: {"sentiment":"positive|negative|neutral","urgency":"low|medium|high|critical","urgencyScore":1-10,"topics":["t1"],"action":"text","escalate":true|false}' + langNote + '\nType: ' + type + '\nBody: ' + escapedBody;
    
    const payload = {
      contents: [{ parts: [{ text: promptText }] }],
      generationConfig: { temperature: 0.2, maxOutputTokens: 200 }
    };
    const pyData = JSON.stringify(payload);
    
    const pyScript = [
      'import urllib.request, json, os',
      'api = os.environ.get("GOOGLE_API_KEY") or os.environ.get("GEMINI_API_KEY")',
      'url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + api',
      'data = ' + pyData,
      'req = urllib.request.Request(url, data=json.dumps(data).encode(), headers={"Content-Type": "application/json"})',
      'with urllib.request.urlopen(req, timeout=20) as r:',
      '  t = json.loads(r.read())["candidates"][0]["content"]["parts"][0]["text"].strip()',
      '  print(t.replace("```json","").replace("```","").strip())'
    ].join('\n');
    
    fs.writeFileSync('/tmp/email_ai_v4.py', pyScript);
    const out = execSync('python3 /tmp/email_ai_v4.py', { encoding: 'utf8', timeout: 25, env: Object.assign({}, process.env) }).trim();
    
    if (out.indexOf('ERROR') === 0 || out.indexOf('{') !== 0) return null;
    
    const result = JSON.parse(out);
    logInfo('AI: sentiment=' + result.sentiment + ', urgency=' + result.urgency + ' (score=' + result.urgencyScore + '), escalate=' + result.escalate);
    return result;
  } catch(e) {
    logWarn('AI analysis failed: ' + e.message.substring(0, 80));
    return null;
  }
}

// ═══════════════════════════════════════════════════════════════
// ESCALATION ENGINE
// ═══════════════════════════════════════════════════════════════

function shouldEscalate(aiResult, type) {
  if (aiResult && aiResult.escalate) return true;
  if (type === 'urgent') return true;
  if (aiResult && aiResult.urgency === 'critical') return true;
  if (aiResult && aiResult.urgencyScore >= 9) return true;
  return false;
}

function logEscalation(email, reason, aiResult) {
  const escalations = loadJSON(ESCALATION_LOG, []);
  escalations.push({
    timestamp: new Date().toISOString(),
    email: email,
    reason: reason,
    sentiment: aiResult ? aiResult.sentiment : 'unknown',
    urgency: aiResult ? aiResult.urgency : 'unknown',
    handled: false
  });
  saveJSON(ESCALATION_LOG, escalations);
  logWarn('ESCALATION: ' + reason + ' - ' + email);
}

// ═══════════════════════════════════════════════════════════════
// EMAIL-TO-TASK CONVERSION
// ═══════════════════════════════════════════════════════════════

var TASK_PATTERNS = [
  { pattern: /call me back|contact me|reach me|get in touch/i, action: 'Contact sender', urgency: 'high' },
  { pattern: /by (monday|tuesday|wednesday|thursday|friday|saturday|sunday)/i, action: 'Follow up by deadline', urgency: 'high' },
  { pattern: /deadline|due date|before|asap|urgent/i, action: 'Urgent task required', urgency: 'high' },
  { pattern: /send me|can you.*send|please.*send/i, action: 'Send information', urgency: 'medium' },
  { pattern: /schedule|book|appointment|meeting|call/i, action: 'Schedule meeting', urgency: 'medium' },
  { pattern: /review|check|look at|analyze/i, action: 'Review and respond', urgency: 'medium' },
  { pattern: /pricing|quote|estimate|cost/i, action: 'Prepare pricing', urgency: 'medium' },
  { pattern: /demo|trial|try|test/i, action: 'Schedule demo', urgency: 'medium' }
];

function extractTasks(subject, body, senderEmail) {
  const text = subject + ' ' + body;
  var tasks = [];
  
  for (var i = 0; i < TASK_PATTERNS.length; i++) {
    var tp = TASK_PATTERNS[i];
    if (tp.pattern.test(text)) {
      tasks.push({
        id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
        created: new Date().toISOString(),
        email: senderEmail,
        subject: subject,
        action: tp.action,
        urgency: tp.urgency,
        status: 'pending',
        dueDate: null
      });
      break;
    }
  }
  
  return tasks;
}

function saveTasks(tasks) {
  const existing = loadJSON(TASKS_FILE, []);
  var all = existing.concat(tasks);
  saveJSON(TASKS_FILE, all);
}

// ═══════════════════════════════════════════════════════════════
// RESPONSE TEMPLATES
// ═══════════════════════════════════════════════════════════════

function buildResponse(type, subject, name, kb, ai, language) {
  if (language === undefined) language = 'en';
  
  var n = name || 'Valued Contact';
  var contactLine = CONTACT.phone + ' | ' + CONTACT.email;
  
  var templates = {
    support: {
      en: function() {
        var kbLine = '';
        if (kb && kb.length) {
          kbLine = '\n\nRelated Resources:\n' + kb.map(function(a) { return '- ' + a.title + ': ' + CONTACT.website + a.url; }).join('\n');
        }
        return 'Dear ' + n + ',\n\nThank you for contacting Zion Tech Group Support regarding: "' + subject + '"\n\nOur technical team will provide diagnosis and resolution within 24-48 hours.' + kbLine + '\n\nFor critical issues, call us immediately: ' + CONTACT.phone + '\n\nBest regards,\nZion Tech Group Support Team\n' + contactLine;
      }
    },
    sales: {
      en: function() {
        var kbLine = '';
        if (kb && kb.length) {
          kbLine = '\n\nExplore Our Services:\n' + kb.map(function(a) { return '- ' + a.title; }).join('\n');
        }
        return 'Dear ' + n + ',\n\nThank you for your interest in Zion Tech Group AI-powered solutions!\n\nYour inquiry: "' + subject + '" has been forwarded to our sales team.\n\nYou will receive a personalized consultation within 24 hours including:\n- Custom pricing tailored to your needs\n- Free demo of relevant solutions\n- Technical architecture review' + kbLine + '\n\nContact us directly: ' + contactLine + '\n\nBest regards,\nZion Tech Group Sales Team';
      }
    },
    partnership: {
      en: function() {
        return 'Dear ' + n + ',\n\nThank you for exploring partnership opportunities with Zion Tech Group!\n\nWe have received your proposal: "' + subject + '"\n\nOur partnership team will analyze synergies and schedule a strategic discussion within 48 hours.\n\nWhy Partner With Zion?\n- 227+ AI-powered solutions\n- Global enterprise client network\n- Joint innovation opportunities\n- Revenue share programs\n\nLet\'s build the future together!\n\nBest regards,\nZion Tech Group Partnership Team\n' + contactLine;
      }
    },
    job: {
      en: function() {
        return 'Dear ' + n + ',\n\nThank you for your interest in career opportunities at Zion Tech Group!\n\nWe have received your application for: "' + subject + '"\n\nOur HR team reviews all applications (5-7 business days) and will contact qualified candidates.\n\nWhy Zion Tech Group?\n- Cutting-edge AI projects\n- Innovation-first culture\n- Professional development programs\n- Competitive compensation\n\nVisit ' + CONTACT.website + '/about to learn more.\n\nBest regards,\nZion Tech Group HR Team\n' + CONTACT.email;
      }
    },
    urgent: {
      en: function() {
        var extra = '';
        if (ai && ai.sentiment === 'negative') {
          extra = '\nWe understand the urgency and are treating this as our top priority.\n';
        }
        return 'Dear ' + n + ',\n\nWe have received your URGENT request: "' + subject + '"' + extra + '\nOur priority team is addressing your issue IMMEDIATELY.\n\nExpected response time: 2-4 hours\nFor immediate assistance: CALL NOW ' + CONTACT.phone + '\n\nBest regards,\nZion Tech Group Priority Support\n' + contactLine;
      }
    },
    billing: {
      en: function() {
        return 'Dear ' + n + ',\n\nThank you for reaching out regarding: "' + subject + '"\n\nYour billing inquiry has been forwarded to our finance team who will respond within 24 hours.\n\nFor immediate billing questions:\nEmail: ' + CONTACT.email + '\nPhone: ' + CONTACT.phone + '\n\nBest regards,\nZion Tech Group Finance Team';
      }
    },
    feedback: {
      en: function() {
        return 'Dear ' + n + ',\n\nThank you for your feedback on: "' + subject + '"\n\nWe value your input and will ensure your comments reach the appropriate team.\n\nYour feedback helps us improve!\n\nBest regards,\nZion Tech Group\n' + contactLine;
      }
    },
    general: {
      en: function() {
        var kbLine = '';
        if (kb && kb.length) {
          kbLine = '\n\nYou may find these helpful:\n' + kb.map(function(a) { return '- ' + a.title; }).join('\n');
        }
        return 'Dear ' + n + ',\n\nThank you for reaching out to Zion Tech Group!\n\nWe have received your message: "' + subject + '"\n\nOur team will respond within 24-48 hours.\n\nIn the meantime, explore our AI solutions:\n' + CONTACT.website + '/services' + kbLine + '\n\nBest regards,\nZion Tech Group Team\n' + contactLine;
      }
    }
  };
  
  // Spanish templates
  templates.es = {
    support: function() { return 'Estimado/a ' + n + ',\n\nGracias por contactar al Soporte de Zion Tech Group sobre: "' + subject + '"\n\nNuestro equipo técnico proporcionará diagnóstico y resolución en 24-48 horas.\n\nPara problemas críticos, llámenos inmediatamente: ' + CONTACT.phone + '\n\nSaludos cordiales,\nEquipo de Soporte Zion Tech Group'; },
    sales: function() { return 'Estimado/a ' + n + ',\n\nGracias por su interés en las soluciones de Zion Tech Group!\n\nSu consulta: "' + subject + '" ha sido enviada a nuestro equipo de ventas.\n\nRecibirá una consulta personalizada en 24 horas.\n\nContacto: ' + contactLine + '\n\nSaludos,\nEquipo de Ventas Zion Tech Group'; },
    general: function() { return 'Estimado/a ' + n + ',\n\nGracias por comunicarse con Zion Tech Group.\n\nHemos recibido su mensaje: "' + subject + '"\n\nNuestro equipo responderá en 24-48 horas.\n\nSaludos,\nEquipo Zion Tech Group'; }
  };
  
  // Portuguese templates
  templates.pt = {
    support: function() { return 'Prezado/a ' + n + ',\n\nObrigado por contatar o Suporte da Zion Tech Group sobre: "' + subject + '"\n\nNossa equipe técnica fornecerá diagnóstico e resolução em 24-48 horas.\n\nPara problemas críticos, ligue imediatamente: ' + CONTACT.phone + '\n\nAtenciosamente,\nEquipe de Suporte Zion Tech Group'; },
    sales: function() { return 'Prezado/a ' + n + ',\n\nObrigado pelo seu interesse nas soluções da Zion Tech Group!\n\nSua consulta: "' + subject + '" foi enviada à nossa equipe de vendas.\n\nVocê receberá uma consulta personalizada em 24 horas.\n\nContato: ' + contactLine + '\n\nAtenciosamente,\nEquipe de Vendas Zion Tech Group'; },
    general: function() { return 'Prezado/a ' + n + ',\n\nObrigado por entrar em contato com a Zion Tech Group.\n\nRecebemos sua mensagem: "' + subject + '"\n\nNossa equipe responderá em 24-48 horas.\n\nAtenciosamente,\nEquipe Zion Tech Group'; }
  };
  
  // Template access: templates[TYPE][LANGUAGE] or fall back to en or general
  var typeTemplates = templates[type] || templates.general;
  var templateFn = typeTemplates[language] || typeTemplates.en || typeTemplates.general;
  if (typeof templateFn !== 'function') templateFn = typeTemplates.en || typeTemplates.general;
  var response = templateFn();
  
  // Add AI insights
  if (ai) {
    var topicsStr = '';
    if (ai.topics && ai.topics.length) topicsStr = ' | Topics: ' + ai.topics.join(', ');
    response += '\n\n---\n[AI Analysis: ' + ai.sentiment + ' sentiment | ' + ai.urgency + ' urgency' + topicsStr + ']';
  }
  
  response += '\n\n---\nZion Tech Group\nAI-Powered Innovation Hub\n' + contactLine + ' | ' + CONTACT.website;
  
  return response;
}

// ═══════════════════════════════════════════════════════════════
// EMAIL SENDING
// ═══════════════════════════════════════════════════════════════

async function sendEmail(to, cc, subject, body, inReplyTo, references) {
  try {
    var ccStr = (cc && cc.length) ? cc.join(', ') : '';
    var bodyClean = body.split('\n').join('\\n').split('\r').join('').replace(/'/g, "\\'");
    var subjectClean = subject.replace(/"/g, '\\"');
    var toClean = to.replace(/"/g, '\\"');
    
    var pyLines = [
      'import smtplib, os, json',
      'from email.mime.text import MIMEText',
      'from email.mime.multipart import MIMEMultipart',
      'u = os.environ.get("ZION_EMAIL_ADDRESS", "")',
      'p = os.environ.get("ZION_EMAIL_PASSWORD", "")',
      'h = os.environ.get("ZION_SMTP_HOST", "smtp.gmail.com")',
      'port = int(os.environ.get("ZION_SMTP_PORT", "587"))',
      'if not u or not p: print(json.dumps({"error":"no_credentials"})); exit(0)',
      'm = MIMEMultipart()',
      'm["From"] = u',
      'm["To"] = "' + toClean + '"'
    ];
    
    if (ccStr) pyLines.push('m["Cc"] = "' + ccStr + '"');
    pyLines.push('m["Subject"] = "' + subjectClean + '"');
    if (inReplyTo) pyLines.push('m["In-Reply-To"] = "' + inReplyTo.replace(/"/g, '\\"') + '"');
    if (references) pyLines.push('m["References"] = "' + references.replace(/"/g, '\\"') + '"');
    
    pyLines.push('m.attach(MIMEText(\'' + bodyClean + '\', \'plain\', \'utf-8\'))');
    pyLines.push('s = smtplib.SMTP(h, port)');
    pyLines.push('s.starttls()');
    pyLines.push('s.login(u, p)');
    
    var rcptLine = 'rcpts = ["' + toClean + '"]';
    if (cc && cc.length) rcptLine += ' + ["' + cc.join('", "') + '"]';
    pyLines.push(rcptLine);
    
    pyLines.push('s.sendmail(u, rcpts, m.as_string())');
    pyLines.push('s.quit()');
    pyLines.push('print(json.dumps({"success": True, "recipients": len(rcpts)}))');
    
    var pyScript = pyLines.join('\n');
    fs.writeFileSync('/tmp/email_send_v4.py', pyScript);
    
    var out = execSync('python3 /tmp/email_send_v4.py', { encoding: 'utf8', timeout: 30, env: Object.assign({}, process.env) }).trim();
    
    var result = JSON.parse(out);
    logInfo('Email sent to ' + to + ' (' + (cc ? cc.length : 0) + ' CC) - ' + (result.success ? 'OK' : 'FAILED'));
    return result;
  } catch(e) {
    logError('Send failed: ' + e.message.substring(0, 80));
    return { error: e.message };
  }
}

// ═══════════════════════════════════════════════════════════════
// RESPONSE TRACKING
// ═══════════════════════════════════════════════════════════════

function trackResponse(emailData, responseData) {
  var tracking = loadJSON(RESPONSE_LOG, []);
  tracking.push({
    timestamp: new Date().toISOString(),
    email: {
      subject: emailData.subject,
      from: emailData.email,
      type: emailData.type,
      cc: emailData.cc
    },
    response: {
      sent: responseData.success !== false,
      to: responseData.to || emailData.email,
      ccIncluded: (emailData.cc && emailData.cc.length > 0),
      aiAnalyzed: !!responseData.ai,
      escalated: responseData.escalated || false
    },
    verification: {
      checked: false,
      opened: null,
      replied: null
    }
  });
  var trimmed = tracking.slice(-500);
  saveJSON(RESPONSE_LOG, trimmed);
}

// ═══════════════════════════════════════════════════════════════
// EMAIL FETCHING
// ═══════════════════════════════════════════════════════════════

async function fetchEmails() {
  var state = loadState();
  var configured = process.env.ZION_EMAIL_ADDRESS && process.env.ZION_EMAIL_PASSWORD;
  
  if (!configured) {
    logInfo('Demo mode - no email credentials configured');
    return runDemo(state);
  }
  
  var pyScript = [
    'import imaplib, email, json, os',
    'from email.header import decode_header',
    'e = os.environ.get("ZION_EMAIL_ADDRESS", "")',
    'p = os.environ.get("ZION_EMAIL_PASSWORD", "")',
    'h = os.environ.get("ZION_IMAP_HOST", "imap.gmail.com")',
    'port = int(os.environ.get("ZION_IMAP_PORT", "993"))',
    'if not e or not p: print(json.dumps({"error":"no_credentials"})); exit(0)',
    'try:',
    '  m = imaplib.IMAP4_SSL(h, port)',
    '  m.login(e, p)',
    '  m.select("INBOX")',
    '  s, ids = m.search(None, "UNSEEN")',
    '  results = []',
    '  for uid in list(ids[0].split())[-15:]:',
    '    try:',
    '      u = uid.decode() if isinstance(uid, bytes) else str(uid)',
    '      s, d = m.fetch(u, "(RFC822)")',
    '      if s != "OK": continue',
    '      msg = email.message_from_bytes(d[0][1])',
    '      sp = decode_header(msg.get("Subject", "No Subject"))',
    '      subject = "".join(p.decode(e or "utf-8", errors="ignore") if isinstance(p, bytes) else (p or "") for p, e in sp)',
    '      sender = msg.get("From", "Unknown")',
    '      cc = msg.get("Cc", "")',
    '      refs = msg.get("References", "") or msg.get("In-Reply-To", "")',
    '      msgId = msg.get("Message-ID", "")[:100]',
    '      body = ""',
    '      if msg.is_multipart():',
    '        for part in msg.walk():',
    '          if part.get_content_type() == "text/plain":',
    '            body = part.get_payload(decode=True).decode(part.get_content_charset() or "utf-8", errors="ignore")',
    '            break',
    '      else:',
    '        body = msg.get_payload(decode=True).decode(msg.get_content_charset() or "utf-8", errors="ignore")',
    '      results.append({"uid": u, "subject": subject[:250], "sender": sender[:150], "cc": cc[:200], "body": body[:2000], "messageId": msgId, "references": refs[:300]})',
    '    except: pass',
    '  m.logout()',
    '  print(json.dumps(results))',
    'except Exception as ex:',
    '  print(json.dumps({"error": str(ex)}))'
  ].join('\n');
  
  fs.writeFileSync('/tmp/email_fetch_v4.py', pyScript);
  
  try {
    var out = execSync('python3 /tmp/email_fetch_v4.py', { encoding: 'utf8', timeout: 60, env: Object.assign({}, process.env) }).trim();
    var emails = [];
    try {
      var parsed = JSON.parse(out);
      emails = parsed.error ? [] : parsed;
    } catch(e) {
      logError('Parse error: ' + e.message);
    }
    
    logInfo('Fetched ' + emails.length + ' emails from INBOX');
    var results = [];
    
    for (var idx = 0; idx < emails.length; idx++) {
      var em = emails[idx];
      var type = classifyIntent(em.subject, em.body);
      var name = extractName(em.sender);
      var addr = extractEmailAddr(em.sender);
      var cc = extractCCList(em.cc);
      var language = detectLanguage(em.body);
      var ai = await analyzeWithAI(em.body, type, language);
      var kb = findKBArticles(em.subject + ' ' + em.body.substring(0, 200));
      var response = buildResponse(type, em.subject, name, kb, ai, language);
      
      if (shouldEscalate(ai, type)) {
        logEscalation(addr, 'Type: ' + type + ', Urgency: ' + (ai ? ai.urgency : 'unknown'), ai);
      }
      
      var inReplyTo = em.messageId;
      var refs = em.references || em.messageId;
      var sr = await sendEmail(addr, cc, 'Re: ' + em.subject, response, inReplyTo, refs);
      
      var tasks = extractTasks(em.subject, em.body, addr);
      if (tasks.length) saveTasks(tasks);
      
      updateSenderProfile(addr, { subject: em.subject, category: type, language: language });
      
      trackResponse({ subject: em.subject, email: addr, type: type, cc: cc }, { success: !sr.error, ai: !!ai, escalated: shouldEscalate(ai, type) });
      
      var numUID = parseInt(em.uid) || 0;
      if (numUID > (state.lastUID || 0)) state.lastUID = numUID;
      state.processedCount = (state.processedCount || 0) + 1;
      state.stats = state.stats || {};
      state.stats[type] = (state.stats[type] || 0) + 1;
      
      results.push({ uid: em.uid, type: type, sender: name, responded: !sr.error, ai: !!ai, language: language, tasks: tasks.length });
      logInfo(type.toUpperCase() + ' from ' + name + ' <' + addr + '> - ' + (sr.error ? 'FAILED' : 'OK') + ' (CC: ' + cc.length + ', Tasks: ' + tasks.length + ', Lang: ' + language + ')');
    }
    
    saveState(state);
    return results;
  } catch(e) {
    logError('Fetch error: ' + e.message.substring(0, 80));
    state.consecutiveFailures++;
    saveState(state);
    return [];
  }
}

// ═══════════════════════════════════════════════════════════════
// DEMO MODE
// ═══════════════════════════════════════════════════════════════

async function runDemo(state) {
  logInfo('Running DEMO mode - simulating email processing');
  
  var demos = [
    { uid: 'd1', type: 'support', sender: 'Alice Johnson', email: 'alice@example.com', subject: 'Having issues with AI automation setup', cc: ['bob@example.com', 'charlie@example.com'] },
    { uid: 'd2', type: 'sales', sender: 'Bob Williams', email: 'bob@enterprise.com', subject: 'Pricing for Enterprise AI package', cc: [] },
    { uid: 'd3', type: 'urgent', sender: 'Carol Davis', email: 'carol@startup.io', subject: 'URGENT: System down, need help immediately', cc: [] },
    { uid: 'd4', type: 'partnership', sender: 'David Chen', email: 'david@partner.co', subject: 'Partnership for AI integration', cc: [] },
    { uid: 'd5', type: 'general', sender: 'Emma Thompson', email: 'emma@mail.com', subject: 'Question about your AI services', cc: [] },
    { uid: 'd6', type: 'billing', sender: 'Frank Miller', email: 'frank@corp.com', subject: 'Invoice question for recent purchase', cc: [] }
  ];
  
  for (var i = 0; i < demos.length; i++) {
    var d = demos[i];
    var language = detectLanguage(d.subject);
    var kb = findKBArticles(d.subject);
    var response = buildResponse(d.type, d.subject, d.sender, kb, null, language);
    
    logInfo('DEMO ' + d.type.toUpperCase() + ' from ' + d.sender + ' <' + d.email + '>');
    logInfo('  -> Reply-All to: ' + d.email + (d.cc.length ? ' CC: ' + d.cc.join(', ') : ''));
    logInfo('  -> Language: ' + language + ' | KB Articles: ' + kb.length + ' | Tasks: extracting...');
    logInfo('  -> Response preview: ' + response.substring(0, 120) + '...');
    
    state.processedCount = (state.processedCount || 0) + 1;
    state.stats = state.stats || {};
    state.stats[d.type] = (state.stats[d.type] || 0) + 1;
  }
  
  saveState(state);
  return demos;
}

// ═══════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════

async function main() {
  logInfo('============================================================');
  logInfo('INTELLIGENT EMAIL RESPONDER v4.0 - ZION TECH GROUP');
  logInfo('Features: Intent Classification | AI Analysis | Multi-Language');
  logInfo('          Email-to-Task | KB Integration | Smart Escalation');
  logInfo('============================================================');
  
  var state = loadState();
  logInfo('State: processed=' + state.processedCount + ', lastUID=' + state.lastUID + ', version=' + state.version);
  
  var results = await fetchEmails();
  
  logInfo('============================================================');
  logInfo('Processed ' + results.length + ' emails');
  logInfo('Stats: ' + JSON.stringify(state.stats || {}));
  logInfo('============================================================');
  
  return results;
}

if (require.main === module) {
  main().then(function() { process.exit(0); }).catch(function(e) { console.error(e); process.exit(1); });
}

module.exports = { main: main, classifyIntent: classifyIntent, buildResponse: buildResponse, detectLanguage: detectLanguage };