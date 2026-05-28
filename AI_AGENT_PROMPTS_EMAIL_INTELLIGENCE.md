# AI AGENT PROMPTS FOR EMAIL INTELLIGENCE REPLICATION
# Zion Tech Group - Kleber Garcia Alcatrão

## Agent 1: Email Intelligence Setup Agent

**Mission:** Implement intelligent email response system for any business.

**Instructions:**
1. Analyze incoming emails using keyword-based intent classification:
   - SUPPORT: help, issue, problem, error, bug, fix, not working, broken, fail
   - SALES: price, cost, buy, purchase, quote, demo, trial, pricing, interested, package, budget
   - PARTNERSHIP: partner, reseller, affiliate, collaborate, joint, venture, strategic
   - JOB: resume, cv, hire, job, career, position, apply, recruit
   - URGENT: urgent, asap, immediately, emergency, critical, deadline, priority
   - BILLING: invoice, payment, bill, charge, refund, subscription, cancel

2. Implement AI-powered analysis (use Gemini or similar):
   - Sentiment detection: positive/negative/neutral
   - Urgency scoring: 1-10 scale
   - Topic extraction
   - Smart escalation triggers

3. Smart Reply-All:
   - Preserve all CC recipients
   - Use In-Reply-To and References headers for threading
   - Send in recipient's language (detect: en/es/pt/fr/de)

4. Auto-task extraction:
   - Detect action items, deadlines, follow-ups from email body
   - Save tasks with sender info, due date, urgency

5. Knowledge Base integration:
   - Match email topics to relevant KB articles
   - Include helpful links in responses

6. Response tracking:
   - Log all responses with timestamp, type, success/failure
   - Track CC inclusion, AI usage, escalation status

**Contact Info:**
- Phone: +1 302 464 0950
- Email: kleber@ziontechgroup.com
- Address: 364 E Main St STE 1008 Middletown DE 19709

---

## Agent 2: Email Enhancement & Learning Agent

**Mission:** Continuously improve email responses based on patterns.

**Instructions:**
1. Track performance metrics:
   - Response rate (target: 95%+)
   - Escalation rate
   - AI usage rate
   - Task extraction rate

2. Pattern analysis:
   - Email type distribution
   - Failed response patterns
   - High-volume categories

3. Generate improvements:
   - Template enhancements based on volume
   - Health checks for SMTP issues
   - AI tone adjustments based on sentiment

4. Feature ideas to implement:
   - Email thread summarization
   - Predictive lead scoring
   - Auto-CRM sync
   - Smart response time optimization
   - Voice-to-email bridge

5. Escalation rules:
   - Negative sentiment + high urgency = immediate escalation
   - All URGENT type = immediate escalation
   - Critical urgency score (9-10) = immediate escalation

---

## Agent 3: Multi-Language Email Agent

**Mission:** Detect and respond in sender's native language.

**Instructions:**
1. Language detection patterns:
   - EN: the, and, for, are, but, not, you, all, can
   - ES: el, la, los, de, en, que, es, por, con, para, como
   - PT: o, a, os, as, um, de, em, que, é, por, com, para, um, uma
   - FR: le, la, les, un, de, du, en, que, et, est, pour, avec
   - DE: der, die, das, ein, eine, in, zu, und, ist, von, mit, auf

2. Response rules:
   - Detect language from body text (count keyword matches)
   - If >5 matches for a language, use that language
   - Fall back to English if no clear match
   - Use language-specific templates for support/sales/general

3. Include in response:
   - Original language acknowledgment
   - Relevant KB articles in detected language
   - Contact info in standard format

---

## Agent 4: Task Extraction & Follow-up Agent

**Mission:** Convert email action items into trackable tasks.

**Instructions:**
1. Pattern detection:
   - "call me back" / "contact me" / "reach me" → Contact sender (high urgency)
   - "by monday/tuesday/etc" → Follow up by deadline (high urgency)
   - "deadline/due date/before/asap" → Urgent task required
   - "send me/please send" → Send information (medium urgency)
   - "schedule/book/appointment/meeting" → Schedule meeting (medium urgency)
   - "pricing/quote/estimate/cost" → Prepare pricing (medium urgency)

2. Task structure:
   ```json
   {
     "id": "unique_id",
     "created": "ISO_timestamp",
     "email": "sender@example.com",
     "subject": "original subject",
     "action": "extracted action",
     "urgency": "high/medium/low",
     "status": "pending",
     "dueDate": null or "ISO_date"
   }
   ```

3. Save tasks to: automation/logs/email-tasks.json
4. Track pending tasks count in dashboard

---

## Agent 5: Escalation Intelligence Agent

**Mission:** Identify and escalate critical emails immediately.

**Instructions:**
1. Escalation triggers (any of these):
   - AI analyze: escalate = true
   - email type = "urgent"
   - urgency = "critical"
   - urgencyScore >= 9

2. Escalation action:
   - Log to automation/logs/escalations.json
   - Include: timestamp, email, reason, sentiment, urgency
   - Mark as unhandled for review

3. Escalation response features:
   - 24/7 priority hotline mentioned
   - 2-4 hour response promise
   - Extra empathetic tone for negative sentiment

4. Track escalation rate:
   - Target: <20% of total emails
   - If >30%, review templates and detection

---

## Agent 6: Sender Profile Learning Agent

**Mission:** Build sender profiles for personalized future interactions.

**Instructions:**
1. Profile data to track:
   - email (lowercase)
   - firstSeen, lastSeen timestamps
   - interactionCount
   - preferredLanguage
   - categories (email type distribution)
   - lastSubject

2. Profile update triggers:
   - Every email processed
   - On response sent
   - On task extracted

3. Save to: automation/logs/sender-profiles.json

4. Use profile data:
   - Prefer sender's language in responses
   - Track communication patterns
   - Identify frequent contacts for priority

---

## Setup Commands

```bash
# Create required directories
mkdir -p automation/logs

# Make scripts executable
chmod +x automation/email-responder-v4-cron.sh

# Test the responder
node automation/email-responder-v4.cjs

# Check logs
tail -f automation/logs/email-responder-v4.log

# Monitor tasks
cat automation/logs/email-tasks.json | python3 -m json.tool

# Check escalations
cat automation/logs/escalations.json | python3 -m json.tool

# Run enhancer
node automation/email-responder-enhancer-v2.cjs
```

---

## Environment Variables Required

```bash
# Email credentials (Gmail with App Password)
export ZION_EMAIL_ADDRESS="your-email@gmail.com"
export ZION_EMAIL_PASSWORD="xxxx xxxx xxxx xxxx"

# SMTP settings
export ZION_SMTP_HOST="smtp.gmail.com"
export ZION_SMTP_PORT="587"

# IMAP settings
export ZION_IMAP_HOST="imap.gmail.com"
export ZION_IMAP_PORT="993"

# AI API (Gemini)
export GOOGLE_API_KEY="your-gemini-api-key"
# or
export GEMINI_API_KEY="your-gemini-api-key"

# Cron schedule: every 5 minutes
# */5 * * * * /Users/miami2/zion.app/automation/email-responder-v4-cron.sh
```

---

## Key Files

- `automation/email-responder-v4.cjs` - Main responder (35KB, 836 lines)
- `automation/email-responder-enhancer-v2.cjs` - Learning system (13KB)
- `automation/email-responder-v4-cron.sh` - Cron wrapper
- `automation/logs/email-responder-state-v4.json` - State tracking
- `automation/logs/email-tasks.json` - Task queue
- `automation/logs/escalations.json` - Escalation log
- `automation/logs/response-tracking.json` - Response history
- `automation/logs/sender-profiles.json` - Contact profiles

---

## Success Metrics

1. ✅ All email types classified correctly
2. ✅ Reply-All preserves CC recipients
3. ✅ AI analysis returns sentiment + urgency
4. ✅ Multi-language detection works (en/es/pt/fr/de)
5. ✅ Tasks extracted from action-oriented emails
6. ✅ Escalations logged for review
7. ✅ Response rate 95%+
8. ✅ Average processing time <5 seconds per email