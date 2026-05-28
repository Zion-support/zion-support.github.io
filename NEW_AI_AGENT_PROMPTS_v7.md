# ZION TECH GROUP - EMAIL AGENT PROMPTS v7 (SELF-EVOLVING AUTONOMOUS SYSTEM)
# Kleber Garcia Alcatrão | kleber@ziontechgroup.com | +1 302 464 0950

---

## ═══════════════════════════════════════════════════════════
## v7 EMAIL INTELLIGENCE SYSTEM - AUTONOMOUS SELF-EVOLVING AI AGENT
## ═══════════════════════════════════════════════════════════

---

## CORE PRINCIPLES

1. **Self-Evolution**: Agent learns from EVERY email and improves automatically
2. **Continuous Improvement**: No human intervention needed for optimization
3. **Proactive Intelligence**: Not just reactive - anticipates needs
4. **Multi-Channel Awareness**: Coordinates Email + Telegram + SMS
5. **Relationship Memory**: Builds comprehensive sender profiles over time

---

## AGENT 1: Self-Evolution Engine

**Purpose:** Continuously learn and improve from every email processed.

**Implementation:**
```javascript
// Record every email's outcome
function recordEvolution(type, qualityScore, responseTime, wasSuccessful) {
  // Track template performance
  // Detect patterns (e.g., "support emails with 'still' = low quality")
  // Update best-performing templates
  // Generate improvement suggestions automatically
}

// Self-improvement triggers
if (qualityScore < 70) {
  generateImprovement({
    type: 'quality_issue',
    trigger: emailType,
    suggestion: 'Template needs revision'
  });
}
```

**Learning Metrics:**
- Template scores by type (support, sales, urgent, etc.)
- Average quality score over time
- Response time optimization
- Pattern detection (what causes poor outcomes)

---

## AGENT 2: Sentiment Timeline Tracking

**Purpose:** Build emotional history for every contact to personalize interactions.

**What to Track:**
```javascript
sentimentTimeline = {
  email: 'alice@example.com',
  firstSeen: '2024-01-15',
  lastSeen: '2024-05-28',
  interactions: 23,
  sentimentHistory: [
    { date: '2024-01-15', tone: 'neutral', score: 0 },
    { date: '2024-03-10', tone: 'frustrated', score: 45 },
    { date: '2024-05-28', tone: 'satisfied', score: -10 }
  ],
  avgTone: 10,
  frustrationEvents: 2,
  satisfactionEvents: 5,
  trend: 'improving' // improving, declining, stable
}
```

**Actions Based on Timeline:**
- New contact (< 3 emails): Formal greeting, full explanation
- Returning satisfied customer: Warm greeting, brief response
- Frustrated customer (3+ frustration events): Extra empathy, priority handling
- Trend improving: Maintain positive momentum
- Trend declining: Proactive outreach to salvage relationship

---

## AGENT 3: Trust Score Calculation

**Purpose:** Score sender reliability and adjust communication approach.

**Trust Score Formula (0-100):**
```javascript
baseScore = 75

// Adjustments:
+ 10 points if 10+ interactions (established relationship)
+ 5 points if 5+ interactions
- 10 points if < 2 interactions (new/unknown)
- 20 points if email contains "noreply" or "no-reply"
+ 5 points if corporate email domain
+ 10 points if satisfaction > frustration
+ 5 points if trend improving
- 15 points if trend declining
- 15 points if positive outcomes < 50%
```

**Trust Actions:**
- Trust 80+: Full transparency, all channels active, detailed responses
- Trust 50-79: Standard approach, email + 1 secondary channel
- Trust < 50: Cautious approach, email only, shorter responses

---

## AGENT 4: Proactive Outreach Engine

**Purpose:** Identify opportunities to reach out BEFORE the contact reaches out.

**Detection Criteria:**
- Positive sentiment history
- No contact in 14-30 days
- Previously engaged but gone quiet
- Industry events/holidays approaching

**Outreach Templates:**
```javascript
// 14 days silent (positive history)
"Hi [Name], just checking in! Haven't heard from you in a bit. 
Is everything going well with [reference to previous topic]?"

// 21+ days silent (high value contact)
"[Name], I know you're busy! Just wanted to make sure you 
have everything you need from us. Happy to help with anything!"
```

---

## AGENT 5: Multi-Channel Integration

**Purpose:** Select optimal communication channel based on urgency and trust.

**Channel Selection Logic:**
```javascript
selectBestChannel(recipientEmail, urgency, trustScore) {
  // High urgency + high trust = all channels
  if (urgency >= 80 && trustScore >= 70) {
    return ['email', 'telegram', 'sms'];
  }
  
  // High urgency + low trust = email only (don't spam untrusted)
  if (urgency >= 80 && trustScore < 50) {
    return ['email'];
  }
  
  // Medium urgency = email + telegram
  if (urgency >= 50) {
    return ['email', 'telegram'];
  }
  
  // Low urgency = email only
  return ['email'];
}
```

**Channel Priority:**
1. Email (primary, formal, documentation)
2. Telegram (fast, conversational, escalation)
3. SMS (critical only, urgent notifications)

---

## AGENT 6: Conversation Outcome Prediction

**Purpose:** Predict whether each conversation will succeed or fail.

**Prediction Factors:**
```javascript
// Positive signals
if (tone === 'satisfied') score += 20;
if (hasExistingRelationship) score += 10;
if (contains('thank', 'appreciate', 'great')) score += 15;

// Negative signals
if (tone === 'frustrated') score -= 25;
if (contains('never', 'won\'t', 'don\'t want')) score -= 20;
if (tooManyInteractionsForSameIssue) score -= 15;

// Neutral
if (newContact) score -= 5;
```

**Prediction Actions:**
- Score >= 75 (likely_positive): Standard handling, maintain quality
- Score 35-74 (uncertain): Extra attention, monitor closely
- Score <= 35 (likely_negative): Escalate immediately, senior review

---

## AGENT 7: Dynamic Response Length

**Purpose:** Match response length to query complexity for efficiency.

**Length Rules:**
```javascript
calculateOptimalResponseLength(subject, body, type) {
  // Simple acknowledgment = brief (1-2 sentences)
  if (matches(/thank|confirm|received|ok thanks/i)) {
    return 'brief'; // "Thank you! We'll follow up within 24 hours."
  }
  
  // Standard question = standard (1-2 paragraphs)
  if (matches(/question|help|need|want to know/i)) {
    return 'standard';
  }
  
  // Complex issue or support/urgent = detailed
  if (type === 'support' || type === 'urgent' || matches(/problem|issue|error/)) {
    return 'detailed'; // Full explanation with steps, KB links, next actions
  }
  
  // Sales/partnership = moderate
  if (type === 'sales' || type === 'partnership') {
    return 'moderate';
  }
  
  return 'standard';
}
```

**Time Savings:** Brief responses take 5 seconds vs 2 minutes for detailed ones.

---

## AGENT 8: Semantic Email Grouping

**Purpose:** Cluster similar emails together for batch processing.

**Grouping Logic:**
```javascript
// Cluster emails by keyword overlap
emails.sort(bySubjectSimilarity);
clusters = [];
for each email:
  find other emails with 2+ shared keywords
  group them together
  process as batch if same type/urgency
```

**Benefits:**
- Faster response for similar queries
- Consistent handling across similar issues
- Pattern detection for systemic problems

---

## AGENT 9: Email Health Dashboard

**Purpose:** Real-time monitoring of email system health.

**Health Metrics:**
```javascript
health = {
  totalEmails: 150,
  avgQualityScore: 87,
  escalationRate: 15,  // % of emails escalated
  avgResponseTime: 250, // ms
  vipResponseRate: 98, // % VIPs responded within SLA
  topCategories: ['support', 'sales', 'partnership'],
  issues: [
    { severity: 'medium', message: 'Support quality dip detected' }
  ],
  status: 'warning' // healthy, warning, critical
}
```

**Automated Actions:**
- Healthy: Continue monitoring, log trends
- Warning: Alert for review, generate improvement suggestions
- Critical: Immediate alert, pause and investigate

---

## ═══════════════════════════════════════════════════════════
## COMPLETE FILE STRUCTURE - v7 SYSTEM
## ═══════════════════════════════════════════════════════════

```
automation/
  email-responder-v7.cjs         # Main v7 (43KB, 1100+ lines)
  email-responder-v6.cjs         # v6 features
  email-responder-v5.cjs         # v5 features
  email-responder-v4.cjs         # v4 features
  email-responder-enhancer-v2.cjs # Learning system
  email-responder-v7-cron.sh      # Cron wrapper
  logs/
    email-responder-state-v7.json     # Processing state
    email-responder-state-v6.json      # v6 state
    self-evolution.json               # Learning data
    sentiment-timeline.json            # Contact sentiment history
    email-groups.json                  # Semantic clusters
    conversation-outcomes.json         # Predictions vs actual
    proactive-outreach.json            # Outreach opportunities
    trust-scores.json                  # Sender reliability
    email-dashboard.json                # Health metrics
    email-tags-v7.json                 # Auto-tags
    support-tickets-v7.json             # Tickets
    email-tasks-v7.json                 # Extracted tasks
    escalations-v7.json                 # Escalations
```

---

## CRON SETUP - v7

```bash
# Every 5 minutes - main responder
*/5 * * * * /Users/miami2/zion.app/automation/email-responder-v7-cron.sh

# After every 6 cycles (~30 min) - self-evolution check
# After every 12 cycles (~60 min) - proactive outreach generation
# After every 24 cycles (~2 hours) - dashboard health report
```

---

## ENVIRONMENT VARIABLES

```bash
# Email
export ZION_EMAIL_ADDRESS="your-email@gmail.com"
export ZION_EMAIL_PASSWORD="xxxx xxxx xxxx xxxx"
export ZION_SMTP_HOST="smtp.gmail.com"
export ZION_SMTP_PORT="587"
export ZION_IMAP_HOST="imap.gmail.com"
export ZION_IMAP_PORT="993"

# AI
export GOOGLE_API_KEY="your-gemini-api-key"
export GEMINI_API_KEY="your-gemini-api-key"

# Telegram (for multi-channel)
export ZION_TELEGRAM_BOT_TOKEN="your-telegram-bot-token"
```

---

## SUCCESS METRICS - v7

1. ✅ Self-Evolution: Quality improves 5% per week automatically
2. ✅ Sentiment Tracking: 100% of contacts have sentiment history
3. ✅ Trust Scores: Calculated for all senders
4. ✅ Proactive Outreach: Identifies 3+ opportunities per week
5. ✅ Multi-Channel: 100% of urgent emails reach via all channels
6. ✅ Dynamic Length: 30% faster response time with brief responses
7. ✅ Health Dashboard: Real-time monitoring with <5 min latency
8. ✅ Outcome Prediction: 70%+ accuracy on conversation success

---

## NEW IDEAS FOR NEXT AGENTS (v8)

### 1. Autonomous Email Triage Agent
- Uses AI to decide: respond now / schedule / escalate / ignore
- Learns from Kleber's behavior on similar emails

### 2. Email-to-Project Conversion Agent
- Detects project mentions in emails
- Automatically creates project tracker entries
- Assigns tasks to team members

### 3. Sentiment Escalation Prediction Agent
- Predicts which conversations will escalate to complaints
- Intercepts negative spiral before it happens

### 4. Email Marketing Intelligence Agent
- Analyzes which email topics get best engagement
- Suggests proactive content for nurturing campaigns
- Tracks conversion from email to customer

### 5. Language Detection + Translation Agent
- Automatically detects language (100+ languages)
- Translates to English for analysis
- Responds in sender's native language

### 6. Email Scheduling Optimizer Agent
- Learns when each recipient opens emails
- Sends at optimal times for maximum engagement
- A/B tests subject lines automatically

---

## CONTACT

**Zion Tech Group**
- Phone: +1 302 464 0950
- Email: kleber@ziontechgroup.com
- Address: 364 E Main St STE 1008 Middletown DE 19709
- Website: https://ziontechgroup.com