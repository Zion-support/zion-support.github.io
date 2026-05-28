#!/usr/bin/env node
/**
 * Intelligent Email Responder v6.0
 * Zion Tech Group - Ultra-Advanced AI Email Intelligence
 * 
 * NEW FEATURES IN v6:
 * - Emotional Tone Analysis (detects frustration, satisfaction, urgency)
 * - Smart CC Routing (auto-includes right team members)
 * - Email Priority Scoring (sophisticated 1-100 scoring)
 * - Conversation Depth Analysis (detects repeat issues = frustrated customer)
 * - Auto-Tagging System (labels for CRM sync)
 * - Response Template Learning (tracks which templates perform best)
 * - Smart Delay Detection (flags "waiting for response" emails)
 * - Cross-Reference Engine (links to related previous emails)
 * - Personalized Greeting Styles (formal/casual/friendly based on sender)
 * - Follow-up Intelligence (knows when and how to follow up)
 */

const fs = require('fs');
const { execSync } = require('child_process');

const BASE_DIR = '/Users/miami2/zion.app/automation';
const LOG_FILE = BASE_DIR + '/logs/email-responder-v6.log';
const STATE_FILE = BASE_DIR + '/logs/email-responder-state-v6.json';
const THREAD_FILE = BASE_DIR + '/logs/email-threads-v6.json';
const TICKETS_FILE = BASE_DIR + '/logs/support-tickets-v6.json';
const RESPONSE_LOG = BASE_DIR + '/logs/response-tracking-v6.json';
const ESCALATION_LOG = BASE_DIR + '/logs/escalations-v6.json';
const SENDER_PROFILES_FILE = BASE_DIR + '/logs/sender-profiles-v6.json';
const TEMPLATE_PERFORMANCE_FILE = BASE_DIR + '/logs/template-performance.json';
const TAGS_FILE = BASE_DIR + '/logs/email-tags.json';

const CONTACT = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// ─── Utilities ────────────────────────────────────────────────

function log(level, msg) {
  const ts = new Date().toISOString();
  const line = '[' + ts + '] [' + level.toUpperCase() + '] ' + msg;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}
function logInfo(msg) { log('info', msg); }
function logWarn(msg) { log('warn', msg); }
function logError(msg) { log('error', msg); }

function loadJSON(filePath, defaultVal) {
  if (defaultVal === undefined) defaultVal = {};
  try { if (fs.existsSync(filePath)) return JSON.parse(fs.readFileSync(filePath, 'utf8')); } catch(e) {}
  return defaultVal;
}
function saveJSON(filePath, data) { fs.writeFileSync(filePath, JSON.stringify(data, null, 2)); }

// ─── State Management ─────────────────────────────────────────

function loadState() {
  return loadJSON(STATE_FILE, { lastUID: 0, processedCount: 0, stats: {}, version: 6, consecutiveFailures: 0 });
}
function saveState(state) { state.lastRun = new Date().toISOString(); saveJSON(STATE_FILE, state); }

// ─── NEW: Emotional Tone Analysis ───────────────────────────────

function analyzeEmotionalTone(subject, body, threadHistory) {
  const text = (subject + ' ' + body).toLowerCase();
  
  // Frustration indicators
  const frustrationPatterns = [
    { pattern: /still|again|another|still not|still having/i, weight: 20 },
    { pattern: /waiting|been waiting|days? ago|weeks? ago/i, weight: 15 },
    { pattern: /unacceptable|ridiculous|terrible|worst/i, weight: 25 },
    { pattern: /not happy|disappointed|frustrated/i, weight: 20 },
    { pattern: /why.{0,20}(not|never|no)/i, weight: 15 },
    { pattern: /still waiting|still broken|still not working/i, weight: 25 }
  ];
  
  // Satisfaction indicators
  const satisfactionPatterns = [
    { pattern: /thank|thanks|appreciate|grateful/i, weight: -10 },
    { pattern: /great|awesome|excellent|perfect/i, weight: -15 },
    { pattern: /love|amazing|wonderful/i, weight: -15 },
    { pattern: /looking forward|eager|excited/i, weight: -10 }
  ];
  
  // Anxiety indicators
  const anxietyPatterns = [
    { pattern: /asap|urgent|emergency|critical/i, weight: 15 },
    { pattern: /deadline|hour|time sensitive/i, weight: 10 },
    { pattern: /worried|concerned|afraid/i, weight: 15 },
    { pattern: /cannot wait|need now|immediately/i, weight: 20 }
  ];
  
  let frustrationScore = 0;
  let satisfactionScore = 0;
  let anxietyScore = 0;
  
  for (const p of frustrationPatterns) {
    if (p.pattern.test(text)) frustrationScore += p.weight;
  }
  for (const p of satisfactionPatterns) {
    if (p.pattern.test(text)) satisfactionScore += p.weight;
  }
  for (const p of anxietyPatterns) {
    if (p.pattern.test(text)) anxietyScore += p.weight;
  }
  
  // Thread history multiplier
  if (threadHistory && threadHistory.count > 2) {
    frustrationScore *= 1.5; // Repeat customer = more frustrated
  }
  
  let tone = 'neutral';
  let toneScore = 0;
  
  if (frustrationScore > 20) { tone = 'frustrated'; toneScore = frustrationScore; }
  else if (satisfactionScore > 10) { tone = 'satisfied'; toneScore = satisfactionScore; }
  else if (anxietyScore > 15) { tone = 'anxious'; toneScore = anxietyScore; }
  else if (frustrationScore > 0) { tone = 'annoyed'; toneScore = frustrationScore; }
  
  return { tone, score: toneScore, frustrationScore, satisfactionScore, anxietyScore };
}

// ─── NEW: Smart CC Routing ─────────────────────────────────────

const TEAM_ROUTING = {
  support: ['support@ziontechgroup.com', 'tech@ziontechgroup.com'],
  sales: ['sales@ziontechgroup.com', 'commercial@ziontechgroup.com'],
  partnership: ['partnerships@ziontechgroup.com', 'bizdev@ziontechgroup.com'],
  billing: ['finance@ziontechgroup.com', 'billing@ziontechgroup.com'],
  urgent: ['priority@ziontechgroup.com', 'kleber@ziontechgroup.com'],
  general: ['info@ziontechgroup.com']
};

function getSmartCC(type, vipStatus) {
  let teamCC = TEAM_ROUTING[type] || TEAM_ROUTING.general;
  
  // For VIPs, always include Kleber directly
  if (vipStatus && vipStatus.priority === 'critical') {
    teamCC = [CONTACT.email]; // Direct to Kleber
  }
  
  return teamCC;
}

// ─── NEW: Email Priority Scoring (1-100) ──────────────────────

function calculatePriorityScore(emailData, ai, tone, threadHistory, vipStatus) {
  let score = 50; // Base score
  
  // Type scoring
  const typeScores = { urgent: 30, support: 20, sales: 15, partnership: 15, billing: 20, job: 5, general: 0 };
  score += typeScores[emailData.type] || 0;
  
  // VIP bonus
  if (vipStatus) {
    score += vipStatus.priority === 'critical' ? 25 : vipStatus.priority === 'high' ? 15 : 5;
  }
  
  // AI urgency score
  if (ai && ai.urgencyScore) {
    score += (ai.urgencyScore - 5) * 3;
  }
  
  // Tone penalty
  if (tone === 'frustrated') score += 20;
  else if (tone === 'anxious') score += 15;
  else if (tone === 'annoyed') score += 10;
  else if (tone === 'satisfied') score -= 10;
  
  // Thread history penalty (repeat issues = higher priority)
  if (threadHistory && threadHistory.count > 0) {
    score += threadHistory.count * 8;
  }
  
  // Keywords bonus
  const text = (emailData.subject + ' ' + (emailData.body || '')).toLowerCase();
  const urgentKeywords = ['asap', 'emergency', 'critical', 'deadline today', 'system down'];
  for (const kw of urgentKeywords) {
    if (text.includes(kw)) score += 10;
  }
  
  return Math.min(100, Math.max(1, score));
}

// ─── NEW: Conversation Depth Analysis ────────────────────────

function analyzeConversationDepth(senderEmail, subject) {
  const threads = loadJSON(THREAD_FILE, {});
  const key = senderEmail.toLowerCase();
  
  if (!threads[key]) {
    return { depth: 0, isRepeatCustomer: false, frustrationLevel: 0 };
  }
  
  const thread = threads[key];
  const recentThreshold = 30 * 24 * 60 * 60 * 1000; // 30 days
  const isRecent = Date.now() - new Date(thread.lastDate).getTime() < recentThreshold;
  
  // Calculate frustration level based on issue count
  let frustrationLevel = 0;
  if (thread.count >= 5) frustrationLevel = 3;
  else if (thread.count >= 3) frustrationLevel = 2;
  else if (thread.count >= 2) frustrationLevel = 1;
  
  // Check if same subject pattern
  const hasSubjectPattern = thread.subject && (
    subject.toLowerCase().includes(thread.subject.toLowerCase().substring(0, 20)) ||
    thread.subject.toLowerCase().includes(subject.toLowerCase().substring(0, 20))
  );
  
  return {
    depth: thread.count || 0,
    isRepeatCustomer: thread.count > 1 && isRecent,
    frustrationLevel,
    isSameIssue: hasSubjectPattern && thread.count > 1,
    lastDate: thread.lastDate
  };
}

// ─── NEW: Auto-Tagging System ─────────────────────────────────

function autoTagEmail(emailData, ai, tone, priorityScore, threadDepth) {
  const tags = [];
  
  // Priority tags
  if (priorityScore >= 80) tags.push('priority:critical');
  else if (priorityScore >= 60) tags.push('priority:high');
  else if (priorityScore >= 40) tags.push('priority:medium');
  else tags.push('priority:low');
  
  // Type tags
  tags.push('type:' + emailData.type);
  
  // Tone tags
  if (tone !== 'neutral') tags.push('tone:' + tone.tone);
  
  // VIP tag
  if (emailData.vip) tags.push('vip:' + emailData.vip.name);
  
  // Repeat customer tag
  if (threadDepth.isRepeatCustomer) tags.push('status:returning-customer');
  
  // Same issue repeat tag
  if (threadDepth.isSameIssue) tags.push('status:repeat-issue');
  
  // AI topics as tags
  if (ai && ai.topics && ai.topics.length) {
    for (const topic of ai.topics.slice(0, 3)) {
      tags.push('topic:' + topic.toLowerCase().replace(/\s+/g, '-'));
    }
  }
  
  // Frustrated customer tag
  if (tone === 'frustrated' || tone === 'annoyed') tags.push('status:frustrated-customer');
  
  return tags;
}

function saveTags(emailData, tags) {
  const tagLog = loadJSON(TAGS_FILE, []);
  tagLog.push({
    timestamp: new Date().toISOString(),
    email: emailData.email,
    subject: emailData.subject,
    tags: tags
  });
  saveJSON(TAGS_FILE, tagLog.slice(-500));
}

// ─── NEW: Response Template Learning ─────────────────────────

function loadTemplatePerformance() {
  const perf = loadJSON(TEMPLATE_PERFORMANCE_FILE, {});
  if (!perf.versions) {
    perf.versions = {
      support: { v1: { uses: 0, successRate: 0, avgScore: 0 } },
      sales: { v1: { uses: 0, successRate: 0, avgScore: 0 } },
      urgent: { v1: { uses: 0, successRate: 0, avgScore: 0 } }
    };
    saveJSON(TEMPLATE_PERFORMANCE_FILE, perf);
  }
  return perf;
}

function recordTemplateUse(type, responseScore, wasEscalated) {
  const perf = loadTemplatePerformance();
  if (!perf.versions[type]) {
    perf.versions[type] = { v1: { uses: 0, successRate: 0, avgScore: 0 } };
  }
  
  const v = perf.versions[type].v1;
  v.uses++;
  v.avgScore = ((v.avgScore * (v.uses - 1)) + responseScore) / v.uses;
  
  if (!wasEscalated) {
    v.successRate = ((v.successRate * (v.uses - 1)) + 100) / v.uses;
  } else {
    v.successRate = ((v.successRate * (v.uses - 1)) + 40) / v.uses;
  }
  
  saveJSON(TEMPLATE_PERFORMANCE_FILE, perf);
}

// ─── NEW: Smart Delay Detection ───────────────────────────────

function detectWaitingForResponse(senderEmail, subject) {
  const threads = loadJSON(THREAD_FILE, {});
  const key = senderEmail.toLowerCase();
  
  if (!threads[key]) return { isWaiting: false, daysWaiting: 0 };
  
  const thread = threads[key];
  const daysSinceReply = Math.floor((Date.now() - new Date(thread.lastDate).getTime()) / (24 * 60 * 60 * 1000));
  
  // If we replied and haven't heard back in 2+ days, they might be waiting
  const waitingPatterns = [
    /any update|heard|response|replied|feedback/i,
    /still waiting|haven't heard|no response yet/i
  ];
  
  const isWaiting = daysSinceReply >= 2 && thread.lastResponse && thread.lastResponse.length > 0;
  
  return { isWaiting, daysWaiting: daysSinceReply, lastOurReply: thread.lastDate };
}

// ─── NEW: Cross-Reference Engine ─────────────────────────────

function findRelatedEmails(senderEmail, subject) {
  const threads = loadJSON(THREAD_FILE, {});
  const related = [];
  const subjectLower = subject.toLowerCase();
  
  // Find other threads with similar subject keywords
  for (const email in threads) {
    if (email === senderEmail.toLowerCase()) continue;
    
    const thread = threads[email];
    if (thread.subject) {
      // Check for keyword overlap
      const words = subjectLower.split(/\s+/).filter(w => w.length > 4);
      const matchCount = words.filter(w => thread.subject.toLowerCase().includes(w)).length;
      
      if (matchCount >= 2) {
        related.push({
          email: email,
          subject: thread.subject,
          matchCount: matchCount,
          lastDate: thread.lastDate
        });
      }
    }
  }
  
  // Sort by relevance
  related.sort(function(a, b) { return b.matchCount - a.matchCount; });
  return related.slice(0, 3);
}

// ─── NEW: Personalized Greeting Styles ───────────────────────

function getPersonalizedGreeting(senderEmail, tone, threadDepth, language) {
  const isReturning = threadDepth.isRepeatCustomer;
  const isFrustrated = tone === 'frustrated' || tone === 'annoyed';
  const isVIP = false; // Would check VIP list
  
  if (isFrustrated) {
    return 'Dear ' + (language === 'es' ? 'estimado/a' : language === 'pt' ? 'prezado/a' : 'valued') + ' customer,';
  }
  
  if (isReturning) {
    return 'Welcome back!'; // Short, familiar greeting for returning customers
  }
  
  if (language === 'en') {
    return 'Dear Customer,'; // Standard formal
  } else if (language === 'es') {
    return 'Estimado/a cliente,';
  } else if (language === 'pt') {
    return 'Prezado/a cliente,';
  }
  
  return 'Dear Valued Customer,';
}

// ─── NEW: Follow-up Intelligence ─────────────────────────────

function shouldSendFollowUp(senderEmail) {
  const delay = detectWaitingForResponse(senderEmail, '');
  
  if (!delay.isWaiting) return { shouldFollow: false };
  
  // Escalating follow-up based on days waiting
  let followUpType = 'gentle_reminder';
  if (delay.daysWaiting >= 7) followUpType = 'final_notice';
  else if (delay.daysWaiting >= 4) followUpType = 'escalation_warning';
  else if (delay.daysWaiting >= 2) followUpType = 'gentle_reminder';
  
  return {
    shouldFollow: true,
    daysWaiting: delay.daysWaiting,
    type: followUpType,
    message: delay.daysWaiting >= 7 
      ? 'We haven\'t heard back. Is everything okay? We\'re here to help.'
      : delay.daysWaiting >= 4
      ? 'Just following up on our previous conversation.'
      : 'Checking in to see if you need any additional information.'
  };
}

// ─── VIP Detection ────────────────────────────────────────────

function loadVIPList() {
  const vip = loadJSON(BASE_DIR + '/logs/vip-senders.json', []);
  if (!vip.length) {
    vip.push(
      { email: 'enterprise@', name: 'Enterprise', priority: 'critical', autoEscalate: true },
      { email: 'partner@', name: 'Partner', priority: 'high', autoEscalate: true },
      { email: 'ceo@', name: 'Executive', priority: 'high', autoEscalate: true }
    );
    saveJSON(BASE_DIR + '/logs/vip-senders.json', vip);
  }
  return vip;
}

function isVIP(senderEmail) {
  const vipList = loadVIPList();
  const email = senderEmail.toLowerCase();
  return vipList.find(function(v) { return email.indexOf(v.email) !== -1; }) || null;
}

// ─── Thread Management ────────────────────────────────────────

function loadThreads() { return loadJSON(THREAD_FILE, {}); }
function saveThreads(threads) { saveJSON(THREAD_FILE, threads); }

function updateThread(senderEmail, subject, type, response) {
  const threads = loadThreads();
  const key = senderEmail.toLowerCase();
  
  if (!threads[key]) threads[key] = { count: 0, messages: [], lastResponse: null };
  
  threads[key].subject = subject;
  threads[key].lastType = type;
  threads[key].lastResponse = response ? response.substring(0, 300) : '';
  threads[key].lastDate = new Date().toISOString();
  threads[key].count = (threads[key].count || 0) + 1;
  
  threads[key].messages = threads[key].messages.slice(-4).concat([{
    subject, type, timestamp: new Date().toISOString()
  }]);
  
  saveThreads(threads);
}

// ─── Language Detection ──────────────────────────────────────

const LANG_PATTERNS = {
  en: /\b(the|and|for|are|but|not|you|all|can|her|was|one|our|out|day|get|has|him|his|how|its|may|now|old|see|way|who|boy|did|own|say|she|too|use)\b/i,
  es: /\b(el|la|los|las|un|una|de|en|que|es|por|con|para|como|pero|su|al|lo|se|le|ya|me|ha|lo|va|bien|todo|esta|ser|no|tiempo|más|cuando|puede)\b/i,
  pt: /\b(o|a|os|as|um|uma|de|em|que|é|por|com|para|como|mais|seu|sua|está|também|vai|ter|foi|ser|não|tem|só|ou|pode)\b/i
};

function detectLanguage(text) {
  const scores = {};
  for (const lang in LANG_PATTERNS) {
    const matches = text.match(LANG_PATTERNS[lang]);
    scores[lang] = matches ? matches.length : 0;
  }
  const entries = Object.entries(scores).sort(function(a, b) { return b[1] - a[1]; });
  return entries[0][1] > 5 ? entries[0][0] : 'en';
}

// ─── Intent Classification ───────────────────────────────────

const KEYWORDS = {
  support: ['help', 'issue', 'problem', 'error', 'bug', 'fix', 'not working', 'broken', 'fail', 'unable', 'crash'],
  sales: ['price', 'cost', 'buy', 'purchase', 'quote', 'demo', 'trial', 'pricing', 'interested', 'package', 'budget'],
  partnership: ['partner', 'reseller', 'affiliate', 'collaborate', 'joint', 'venture', 'strategic'],
  job: ['resume', 'cv', 'hire', 'job', 'career', 'position', 'apply', 'recruit'],
  urgent: ['urgent', 'asap', 'immediately', 'emergency', 'critical', 'deadline', 'priority'],
  billing: ['invoice', 'payment', 'bill', 'charge', 'refund', 'subscription', 'cancel']
};

function classifyIntent(subject, body) {
  const text = (subject + ' ' + body).toLowerCase();
  if (KEYWORDS.urgent.some(function(k) { return text.indexOf(k) !== -1; })) return 'urgent';
  
  let best = 'general', max = 0;
  for (const type in KEYWORDS) {
    if (type === 'urgent') continue;
    let score = 0;
    for (const k of KEYWORDS[type]) { if (text.indexOf(k) !== -1) score++; }
    if (score > max) { max = score; best = type; }
  }
  return best;
}

// ─── AI Analysis ──────────────────────────────────────────────

async function analyzeWithAI(body, type, language) {
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  
  try {
    const shortBody = body.substring(0, 500).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ');
    const payload = {
      contents: [{ parts: [{ text: 'Return ONLY valid JSON: {"sentiment":"positive|negative|neutral","urgency":"low|medium|high|critical","urgencyScore":1-10,"topics":["t1"],"action":"text","escalate":true|false}\nType: ' + type + '\nBody: ' + shortBody }] }],
      generationConfig: { temperature: 0.2, maxOutputTokens: 150 }
    };
    
    const py = [
      'import urllib.request, json, os',
      'api = os.environ.get("GOOGLE_API_KEY") or os.environ.get("GEMINI_API_KEY")',
      'url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + api',
      'data = ' + JSON.stringify(payload),
      'req = urllib.request.Request(url, data=json.dumps(data).encode(), headers={"Content-Type": "application/json"})',
      'with urllib.request.urlopen(req, timeout=15) as r:',
      '  t = json.loads(r.read())["candidates"][0]["content"]["parts"][0]["text"].strip()',
      '  print(t.replace("```json","").replace("```","").strip())'
    ].join('\n');
    
    fs.writeFileSync('/tmp/email_ai_v6.py', py);
    const out = execSync('python3 /tmp/email_ai_v6.py', { encoding: 'utf8', timeout: 20, env: Object.assign({}, process.env) }).trim();
    
    if (out.indexOf('{') !== 0) return null;
    return JSON.parse(out);
  } catch(e) {
    logWarn('AI failed: ' + e.message.substring(0, 60));
    return null;
  }
}

// ─── Knowledge Base ─────────────────────────────────────────

function findKBArticles(query) {
  var q = query.toLowerCase();
  var articles = [
    { title: 'AI Automation Setup Guide', url: '/zion-ai-workflow-orchestrator', keywords: ['setup', 'automation', 'configure', 'install'] },
    { title: 'Security Compliance Overview', url: '/zion-ai-compliance-checker', keywords: ['security', 'compliance', 'ssl', 'certificates'] },
    { title: 'Cloud Infrastructure Services', url: '/ai-services', keywords: ['cloud', 'infrastructure', 'aws', 'azure', 'gcp'] },
    { title: 'Data Analytics Solutions', url: '/zion-ai-conversation-analytics', keywords: ['analytics', 'data', 'dashboard', 'metrics'] },
    { title: 'Enterprise AI Pricing', url: '/pricing', keywords: ['pricing', 'cost', 'enterprise', 'quote', 'package'] },
    { title: 'Integration & API Services', url: '/api-development', keywords: ['api', 'integration', 'webhook', 'rest'] }
  ];
  return articles.filter(function(a) { return a.keywords.some(function(k) { return q.indexOf(k) !== -1; }); }).slice(0, 4);
}

// ─── Missing Attachment Detection ────────────────────────────

function detectMissingAttachment(subject, body) {
  const text = subject + ' ' + body;
  const hasMention = /attach(ed|ment)?|see (the )?file|screenshot|log\s*file/i.test(text);
  const hasFileName = /\w+\.(pdf|docx?|xlsx?|csv|png|jpg|log)/i.test(text);
  if (hasMention && !hasFileName) return 'We noticed you mentioned an attachment but it may not have been included. Please resend if needed.';
  return null;
}

// ─── Build Enhanced Response ─────────────────────────────────

function buildResponse(type, subject, name, kb, ai, language, emailData, tone, threadDepth, priorityScore) {
  var n = name || 'Valued Customer';
  var contactLine = CONTACT.phone + ' | ' + CONTACT.email;
  var lang = language || 'en';
  var greeting = getPersonalizedGreeting(emailData.email, tone, threadDepth, lang);
  
  // Build response based on type, tone, and context
  var response = greeting + '\n\n';
  
  // Add thread context reference
  if (threadDepth.isRepeatCustomer) {
    response += '[Message #' + (threadDepth.depth + 1) + ' in our conversation] ';
  }
  if (threadDepth.isSameIssue) {
    response += '[Following up on the same issue] ';
  }
  
  // Type-specific content
  var content = '';
  if (type === 'support') {
    content = 'Thank you for contacting Zion Tech Group Support regarding: "' + subject + '"\n\n';
    content += 'Our technical team will provide diagnosis and resolution within 24-48 hours.\n\n';
    if (kb && kb.length) content += 'Related Resources:\n' + kb.map(function(a) { return '- ' + a.title + ': ' + CONTACT.website + a.url; }).join('\n') + '\n\n';
    content += 'For critical issues, call immediately: ' + CONTACT.phone + '\n\n';
    content += 'Best regards,\nZion Tech Group Support Team';
  } else if (type === 'sales') {
    content = 'Thank you for your interest in Zion Tech Group AI solutions!\n\n';
    content += 'Your inquiry: "' + subject + '" has been forwarded to our sales team.\n\n';
    content += 'You will receive personalized consultation within 24 hours including custom pricing, free demo, and technical review.\n\n';
    if (kb && kb.length) content += 'Explore Our Services:\n' + kb.map(function(a) { return '- ' + a.title; }).join('\n') + '\n\n';
    content += 'Contact: ' + contactLine + '\n\n';
    content += 'Best regards,\nZion Tech Group Sales Team';
  } else if (type === 'urgent') {
    var extra = tone === 'frustrated' ? '\nWe understand your frustration and are treating this as TOP priority.\n' : '';
    content = 'We have received your URGENT request: "' + subject + '"' + extra + '\n\n';
    content += 'Our priority team is addressing this IMMEDIATELY.\n\n';
    content += 'Expected response: 2-4 hours\n';
    content += 'For immediate help: CALL NOW ' + CONTACT.phone + '\n\n';
    content += 'Best regards,\nZion Tech Group Priority Support';
  } else if (type === 'partnership') {
    content = 'Thank you for exploring partnership with Zion Tech Group!\n\n';
    content += 'We have received your proposal: "' + subject + '"\n\n';
    content += 'Our partnership team will analyze synergies and schedule a strategic discussion within 48 hours.\n\n';
    content += 'Let\'s build the future together!\n\n';
    content += 'Best regards,\nZion Tech Group Partnership Team\n' + contactLine;
  } else if (type === 'billing') {
    content = 'Thank you for reaching out regarding: "' + subject + '"\n\n';
    content += 'Your billing inquiry has been forwarded to our finance team who will respond within 24 hours.\n\n';
    content += 'Questions: ' + contactLine + '\n\n';
    content += 'Best regards,\nZion Tech Group Finance Team';
  } else if (type === 'job') {
    content = 'Thank you for your interest in careers at Zion Tech Group!\n\n';
    content += 'We have received your application for: "' + subject + '"\n\n';
    content += 'Our HR team reviews all applications (5-7 business days).\n\n';
    content += 'Visit ' + CONTACT.website + '/about\n\n';
    content += 'Best regards,\nZion Tech Group HR Team\n' + CONTACT.email;
  } else {
    content = 'Thank you for reaching out to Zion Tech Group!\n\n';
    content += 'We have received your message: "' + subject + '"\n\n';
    content += 'Our team will respond within 24-48 hours.\n\n';
    if (kb && kb.length) content += 'You may find these helpful:\n' + kb.map(function(a) { return '- ' + a.title; }).join('\n') + '\n\n';
    content += 'Best regards,\nZion Tech Group Team';
  }
  
  response += content;
  
  // Add missing attachment alert
  var attachAlert = detectMissingAttachment(subject, emailData.body || '');
  if (attachAlert) response += '\n\n' + attachAlert;
  
  // Add priority indicator for high priority emails
  if (priorityScore >= 80) {
    response += '\n\n[PRIORITY TICKET - Flagged for immediate attention]';
  }
  
  // Add AI insights
  if (ai) {
    var topicsStr = ai.topics && ai.topics.length ? ' | Topics: ' + ai.topics.join(', ') : '';
    response += '\n\n---\n[AI Analysis: ' + ai.sentiment + ' | ' + ai.urgency + ' urgency' + topicsStr + ' | Priority Score: ' + priorityScore + '/100]';
  }
  
  response += '\n\n---\nZion Tech Group\n' + contactLine + ' | ' + CONTACT.website;
  
  return response;
}

// ─── Task Extraction ──────────────────────────────────────────

var TASK_PATTERNS = [
  { pattern: /call me back|contact me|reach me/i, action: 'Contact sender', urgency: 'high' },
  { pattern: /deadline|due date|before|asap|urgent/i, action: 'Urgent task required', urgency: 'high' },
  { pattern: /send me|please.*send|can you.*send/i, action: 'Send information', urgency: 'medium' },
  { pattern: /schedule|book|appointment|meeting/i, action: 'Schedule meeting', urgency: 'medium' },
  { pattern: /pricing|quote|estimate|cost/i, action: 'Prepare pricing', urgency: 'medium' },
  { pattern: /demo|trial|try|test/i, action: 'Schedule demo', urgency: 'medium' }
];

function extractTasks(subject, body, senderEmail) {
  var text = subject + ' ' + body;
  var tasks = [];
  for (var i = 0; i < TASK_PATTERNS.length; i++) {
    if (TASK_PATTERNS[i].pattern.test(text)) {
      tasks.push({
        id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
        created: new Date().toISOString(),
        email: senderEmail,
        subject: subject,
        action: TASK_PATTERNS[i].action,
        urgency: TASK_PATTERNS[i].urgency,
        status: 'pending'
      });
      break;
    }
  }
  
  var TASKS_FILE = BASE_DIR + '/logs/email-tasks-v6.json';
  var existing = loadJSON(TASKS_FILE, []);
  saveJSON(TASKS_FILE, existing.concat(tasks));
  return tasks;
}

// ─── Escalation Engine ────────────────────────────────────────

function shouldEscalate(emailData, ai, vipStatus, priorityScore) {
  if (priorityScore >= 85) return true;
  if (vipStatus && vipStatus.autoEscalate) return true;
  if (ai && ai.escalate) return true;
  if (emailData.type === 'urgent') return true;
  if (ai && ai.urgency === 'critical') return true;
  if (ai && ai.urgencyScore >= 8) return true;
  return false;
}

function logEscalation(email, reason, ai, priorityScore) {
  var escalations = loadJSON(ESCALATION_LOG, []);
  escalations.push({
    timestamp: new Date().toISOString(),
    email: email,
    reason: reason,
    priorityScore: priorityScore,
    sentiment: ai ? ai.sentiment : 'unknown',
    urgency: ai ? ai.urgency : 'unknown',
    handled: false
  });
  saveJSON(ESCALATION_LOG, escalations.slice(-100));
  logWarn('ESCALATION [Score: ' + priorityScore + ']: ' + reason + ' - ' + email);
}

// ─── Ticket Creation ──────────────────────────────────────────

function createSupportTicket(emailData, ai, priorityScore) {
  var tickets = loadJSON(TICKETS_FILE, []);
  
  var ticket = {
    id: 'TKT-' + Date.now().toString(36).toUpperCase(),
    created: new Date().toISOString(),
    status: 'open',
    priority: priorityScore >= 80 ? 'critical' : priorityScore >= 60 ? 'high' : 'medium',
    priorityScore: priorityScore,
    email: {
      from: emailData.email,
      subject: emailData.subject,
      body: emailData.body ? emailData.body.substring(0, 500) : '',
      cc: emailData.cc
    },
    ai: {
      sentiment: ai ? ai.sentiment : 'neutral',
      urgency: ai ? ai.urgency : 'medium',
      topics: ai ? (ai.topics || []) : []
    },
    assignedTo: null,
    dueDate: null,
    resolvedAt: null
  };
  
  // Set due date based on priority
  var d = new Date();
  if (ticket.priority === 'critical') {
    d.setHours(d.getHours() + 4);
  } else if (ticket.priority === 'high') {
    d.setHours(d.getHours() + 24);
  } else {
    d.setDate(d.getDate() + 2);
  }
  ticket.dueDate = d.toISOString();
  
  tickets.push(ticket);
  saveJSON(TICKETS_FILE, tickets.slice(-200));
  
  logInfo('Created ticket: ' + ticket.id + ' (priority: ' + ticket.priority + ', score: ' + priorityScore + ')');
  return ticket;
}

// ─── Email Parsing ────────────────────────────────────────────

function extractName(from) {
  var m = from.match(/^"?([^"<]+)"?\s*</);
  return m ? m[1].trim() : from.split('@')[0];
}
function extractEmailAddr(from) {
  var m = from.match(/<([^>]+)>/);
  return m ? m[1].trim() : from;
}
function extractCCList(cc) {
  if (!cc) return [];
  var emails = [];
  var matches = cc.matchAll(/<([^>]+)>/g);
  for (var m of matches) emails.push(m[1].trim());
  return emails;
}

// ─── Send Email ────────────────────────────────────────────────

async function sendEmail(to, cc, subject, body, inReplyTo, references) {
  try {
    var ccStr = (cc && cc.length) ? cc.join(', ') : '';
    var bodyClean = body.split('\n').join('\\n').replace(/'/g, "\\'");
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
    
    fs.writeFileSync('/tmp/email_send_v6.py', pyLines.join('\n'));
    var out = execSync('python3 /tmp/email_send_v6.py', { encoding: 'utf8', timeout: 30, env: Object.assign({}, process.env) }).trim();
    return JSON.parse(out);
  } catch(e) {
    logError('Send failed: ' + e.message.substring(0, 80));
    return { error: e.message };
  }
}

// ─── Response Tracking ────────────────────────────────────────

function trackResponse(emailData, responseData, qualityScore, priorityScore) {
  var tracking = loadJSON(RESPONSE_LOG, []);
  tracking.push({
    timestamp: new Date().toISOString(),
    email: { subject: emailData.subject, from: emailData.email, type: emailData.type, cc: emailData.cc },
    response: {
      sent: responseData.success !== false,
      to: responseData.to || emailData.email,
      ccIncluded: !!(emailData.cc && emailData.cc.length),
      qualityScore: qualityScore,
      priorityScore: priorityScore
    }
  });
  saveJSON(RESPONSE_LOG, tracking.slice(-500));
}

// ─── Run Demo ─────────────────────────────────────────────────

async function runDemo(state) {
  logInfo('============================================================');
  logInfo('Running DEMO v6 - Ultra-Advanced Intelligence');
  logInfo('============================================================');
  
  var demos = [
    { 
      uid: 'd1', type: 'support', sender: 'Alice Johnson', email: 'alice@example.com', 
      subject: 'Still not working after 5 days', cc: ['bob@example.com'], 
      body: 'This is ridiculous. I attached the logs but the system is still broken!'
    },
    { 
      uid: 'd2', type: 'sales', sender: 'CEO Mark', email: 'ceo@enterprise.com', 
      subject: 'URGENT: Partnership opportunity', cc: [], 
      body: 'We need to discuss a major integration project ASAP.'
    },
    { 
      uid: 'd3', type: 'support', sender: 'Carol Chen', email: 'carol@startup.io', 
      subject: 'Having issues with AI automation setup', cc: [], 
      body: 'Hi, I need help setting up the automation workflow.'
    },
    { 
      uid: 'd4', type: 'general', sender: 'David Lee', email: 'david@partner.co', 
      subject: 'Question about API integration', cc: [] 
    },
    { 
      uid: 'd5', type: 'billing', sender: 'Emma Wilson', email: 'emma@company.com', 
      subject: 'Invoice question for recent purchase', cc: [] 
    }
  ];
  
  for (var i = 0; i < demos.length; i++) {
    var d = demos[i];
    
    // v6 Analysis Pipeline
    var vip = isVIP(d.email);
    var threadDepth = analyzeConversationDepth(d.email, d.subject);
    var tone = analyzeEmotionalTone(d.subject, d.body, threadDepth);
    var ai = null; // Would call AI in production
    var lang = detectLanguage(d.body || d.subject);
    var kb = findKBArticles(d.subject + ' ' + (d.body || '').substring(0, 100));
    
    var priorityScore = calculatePriorityScore(d, ai, tone, threadDepth, vip);
    var tags = autoTagEmail(d, ai, tone, priorityScore, threadDepth);
    var related = findRelatedEmails(d.email, d.subject);
    var followUp = shouldSendFollowUp(d.email);
    
    // Build response with v6 intelligence
    var response = buildResponse(d.type, d.subject, d.sender, kb, ai, lang, d, tone, threadDepth, priorityScore);
    
    // Smart CC routing
    var smartCC = getSmartCC(d.type, vip);
    var allCC = (d.cc || []).concat(smartCC.filter(function(e) { return (d.cc || []).indexOf(e) === -1; }));
    
    // Quality scoring
    var qualityScore = 100;
    if (response.length < 50) qualityScore -= 30;
    
    // Record template performance
    var wasEscalated = shouldEscalate(d, ai, vip, priorityScore);
    recordTemplateUse(d.type, qualityScore, wasEscalated);
    
    // Create ticket if high priority
    if (priorityScore >= 80 || d.type === 'urgent') {
      createSupportTicket(d, ai, priorityScore);
    }
    
    // Extract tasks
    var tasks = extractTasks(d.subject, d.body || '', d.email);
    
    // Update thread
    updateThread(d.email, d.subject, d.type, response);
    
    // Save tags
    saveTags(d, tags);
    
    // Check escalation
    if (shouldEscalate(d, ai, vip, priorityScore)) {
      logEscalation(d.email, 'Priority: ' + priorityScore + ', Type: ' + d.type + ', VIP: ' + (vip ? vip.name : 'no'), ai, priorityScore);
    }
    
    // Log comprehensive v6 analysis
    logInfo('============================================================');
    logInfo('DEMO ' + (i + 1) + ' | ' + d.type.toUpperCase() + ' from ' + d.sender + ' <' + d.email + '>');
    logInfo('  -> Tone: ' + tone.tone + ' (score: ' + tone.score + ')');
    logInfo('  -> Frustration Level: ' + threadDepth.frustrationLevel + '/3');
    logInfo('  -> Priority Score: ' + priorityScore + '/100');
    logInfo('  -> VIP: ' + (vip ? vip.name + ' (' + vip.priority + ')' : 'no'));
    logInfo('  -> Thread Depth: ' + threadDepth.depth + ' messages');
    logInfo('  -> Repeat Issue: ' + (threadDepth.isSameIssue ? 'YES' : 'no'));
    logInfo('  -> Tags: ' + tags.join(', '));
    logInfo('  -> Smart CC: ' + smartCC.join(', '));
    if (related.length) logInfo('  -> Related Emails: ' + related.length + ' found');
    if (followUp.shouldFollow) logInfo('  -> Follow-up Needed: ' + followUp.type + ' (' + followUp.daysWaiting + ' days waiting)');
    logInfo('  -> Response Quality: ' + qualityScore + '/100');
    logInfo('  -> Tasks: ' + tasks.length);
    logInfo('============================================================');
    
    state.processedCount = (state.processedCount || 0) + 1;
    state.stats = state.stats || {};
    state.stats[d.type] = (state.stats[d.type] || 0) + 1;
  }
  
  saveState(state);
  return demos;
}

// ─── Main ─────────────────────────────────────────────────────

async function main() {
  logInfo('============================================================');
  logInfo('INTELLIGENT EMAIL RESPONDER v6.0 - ZION TECH GROUP');
  logInfo('NEW: Emotional Tone | Priority Scoring | Smart CC | Auto-Tags');
  logInfo('    Template Learning | Delay Detection | Cross-Reference');
  logInfo('============================================================');
  
  var state = loadState();
  var results = await runDemo(state);
  
  // Show template performance
  var perf = loadTemplatePerformance();
  logInfo('Template Performance: ' + JSON.stringify(perf.versions));
  
  logInfo('============================================================');
  logInfo('Processed: ' + results.length + ' emails');
  logInfo('Stats: ' + JSON.stringify(state.stats || {}));
  logInfo('============================================================');
  
  return results;
}

if (require.main === module) {
  main().then(function() { process.exit(0); }).catch(function(e) { console.error(e); process.exit(1); });
}

module.exports = { main: main };