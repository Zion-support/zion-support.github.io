// Add V446-V450 services to servicesData.json
const fs = require('fs');
const path = require('path');

const newServices = [
  // V446 - Context Switching Detector Services
  {
    "id": "ai-email-context-switching-detector",
    "title": "AI Email Context Switching Detector",
    "description": "Intelligently detects when users switch between email threads and provides context summaries to prevent confusion. Tracks active conversations, identifies related threads, and warns about similar subjects to ensure you always reply to the correct thread.",
    "category": "AI Services",
    "icon": "🔄",
    "price": "$29/month",
    "features": ["Thread tracking", "Context summaries", "Confusion prevention", "Related thread detection", "Quick recall"],
    "contactInfo": { "phone": "+1 302 464 0950", "email": "kleber@ziontechgroup.com", "address": "364 E Main St STE 1008 Middletown DE 19709" }
  },
  {
    "id": "ai-thread-context-manager",
    "title": "AI Thread Context Manager",
    "description": "Manages context across multiple email conversations simultaneously. Provides instant summaries when switching threads, tracks action items per conversation, and ensures no important details are lost between conversations.",
    "category": "AI Services",
    "icon": "🧵",
    "price": "$34/month",
    "features": ["Multi-thread management", "Instant summaries", "Action item tracking", "Context preservation", "Thread linking"],
    "contactInfo": { "phone": "+1 302 464 0950", "email": "kleber@ziontechgroup.com", "address": "364 E Main St STE 1008 Middletown DE 19709" }
  },
  {
    "id": "ai-email-confusion-guard",
    "title": "AI Email Confusion Guard",
    "description": "Prevents costly email mistakes by detecting similar subjects, wrong thread replies, and context mismatches. Alerts you before sending to the wrong conversation and suggests the correct thread.",
    "category": "AI Services",
    "icon": "🛡️",
    "price": "$24/month",
    "features": ["Wrong thread detection", "Subject similarity alerts", "Context mismatch warnings", "Reply verification", "Thread history"],
    "contactInfo": { "phone": "+1 302 464 0950", "email": "kleber@ziontechgroup.com", "address": "364 E Main St STE 1008 Middletown DE 19709" }
  },
  // V447 - Email Energy Optimizer Services
  {
    "id": "ai-email-energy-optimizer",
    "title": "AI Email Energy Optimizer",
    "description": "Analyzes email writing patterns to reduce cognitive load and improve clarity. Scores readability (Flesch-Kincaid), detects passive voice, identifies corporate jargon, and suggests simpler alternatives for more effective communication.",
    "category": "AI Services",
    "icon": "⚡",
    "price": "$39/month",
    "features": ["Readability scoring", "Passive voice detection", "Jargon identification", "Sentence optimization", "Energy score"],
    "contactInfo": { "phone": "+1 302 464 0950", "email": "kleber@ziontechgroup.com", "address": "364 E Main St STE 1008 Middletown DE 19709" }
  },
  {
    "id": "ai-email-clarity-assistant",
    "title": "AI Email Clarity Assistant",
    "description": "Transforms complex, jargon-filled emails into clear, concise messages. Automatically replaces corporate buzzwords with plain language, simplifies sentence structure, and ensures your message is understood by all recipients.",
    "category": "AI Services",
    "icon": "💎",
    "price": "$29/month",
    "features": ["Jargon replacement", "Sentence simplification", "Clarity scoring", "Tone adjustment", "Multi-language support"],
    "contactInfo": { "phone": "+1 302 464 0950", "email": "kleber@ziontechgroup.com", "address": "364 E Main St STE 1008 Middletown DE 19709" }
  },
  {
    "id": "ai-writing-quality-analyzer",
    "title": "AI Writing Quality Analyzer",
    "description": "Comprehensive writing quality analysis for business emails. Evaluates readability, sentence complexity, vocabulary diversity, and provides actionable suggestions to improve your professional communication.",
    "category": "AI Services",
    "icon": "📊",
    "price": "$19/month",
    "features": ["Flesch-Kincaid scoring", "Complexity analysis", "Vocabulary diversity", "Improvement suggestions", "Historical trends"],
    "contactInfo": { "phone": "+1 302 464 0950", "email": "kleber@ziontechgroup.com", "address": "364 E Main St STE 1008 Middletown DE 19709" }
  },
  // V448 - Meeting Extractor Services
  {
    "id": "ai-email-meeting-extractor",
    "title": "AI Email Meeting Extractor",
    "description": "Automatically extracts meeting details from emails and creates calendar events. Detects dates, times, locations, attendees, and agendas from natural language. Supports Zoom, Teams, Google Meet links and detects scheduling conflicts.",
    "category": "AI Services",
    "icon": "📅",
    "price": "$44/month",
    "features": ["Date/time extraction", "Attendee identification", "Location detection", "Agenda extraction", "Conflict detection"],
    "contactInfo": { "phone": "+1 302 464 0950", "email": "kleber@ziontechgroup.com", "address": "364 E Main St STE 1008 Middletown DE 19709" }
  },
  {
    "id": "ai-calendar-automation-suite",
    "title": "AI Calendar Automation Suite",
    "description": "End-to-end calendar automation from email parsing. Automatically creates events, sends invites, handles timezone conversions, detects conflicts, and manages recurring meetings. Integrates with Google Calendar, Outlook, and Apple Calendar.",
    "category": "Micro-SaaS",
    "icon": "🗓️",
    "price": "$49/month",
    "features": ["Auto-event creation", "Timezone handling", "Conflict resolution", "Recurring meetings", "Calendar sync"],
    "contactInfo": { "phone": "+1 302 464 0950", "email": "kleber@ziontechgroup.com", "address": "364 E Main St STE 1008 Middletown DE 19709" }
  },
  {
    "id": "ai-meeting-notes-generator",
    "title": "AI Meeting Notes Generator",
    "description": "Generates structured meeting notes from email conversations. Extracts action items, decisions, deadlines, and follow-ups. Automatically distributes notes to all participants and tracks completion.",
    "category": "AI Services",
    "icon": "📝",
    "price": "$34/month",
    "features": ["Auto note generation", "Action item tracking", "Decision logging", "Deadline extraction", "Distribution"],
    "contactInfo": { "phone": "+1 302 464 0950", "email": "kleber@ziontechgroup.com", "address": "364 E Main St STE 1008 Middletown DE 19709" }
  },
  // V449 - Urgency Escalation Services
  {
    "id": "ai-email-urgency-escalation",
    "title": "AI Email Urgency Escalation Engine",
    "description": "Detects escalating urgency in email threads and alerts managers before issues become critical. Analyzes urgency trends, predicts SLA breaches, and automatically escalates to the right stakeholders. Prevents customer churn through early intervention.",
    "category": "AI Services",
    "icon": "🚨",
    "price": "$59/month",
    "features": ["Urgency trend analysis", "Escalation prediction", "Manager notification", "SLA monitoring", "Churn prevention"],
    "contactInfo": { "phone": "+1 302 464 0950", "email": "kleber@ziontechgroup.com", "address": "364 E Main St STE 1008 Middletown DE 19709" }
  },
  {
    "id": "ai-sla-monitoring-dashboard",
    "title": "AI SLA Monitoring Dashboard",
    "description": "Real-time SLA monitoring with predictive breach alerts. Tracks response times across all email threads, identifies at-risk SLAs before they breach, and provides actionable insights to maintain compliance.",
    "category": "Micro-SaaS",
    "icon": "⏱️",
    "price": "$69/month",
    "features": ["Real-time SLA tracking", "Predictive breach alerts", "Response time analytics", "Team performance", "Compliance reports"],
    "contactInfo": { "phone": "+1 302 464 0950", "email": "kleber@ziontechgroup.com", "address": "364 E Main St STE 1008 Middletown DE 19709" }
  },
  {
    "id": "ai-customer-escalation-manager",
    "title": "AI Customer Escalation Manager",
    "description": "Intelligent customer escalation management. Detects frustration patterns, identifies churn risk, routes to appropriate managers, and ensures timely resolution. Includes sentiment tracking and escalation playbooks.",
    "category": "AI Services",
    "icon": "🎯",
    "price": "$79/month",
    "features": ["Frustration detection", "Churn risk scoring", "Smart routing", "Escalation playbooks", "Resolution tracking"],
    "contactInfo": { "phone": "+1 302 464 0950", "email": "kleber@ziontechgroup.com", "address": "364 E Main St STE 1008 Middletown DE 19709" }
  },
  // V450 - Knowledge Graph Services
  {
    "id": "ai-email-knowledge-graph",
    "title": "AI Email Knowledge Graph Builder",
    "description": "Automatically builds a knowledge graph from email conversations. Extracts entities (people, projects, technologies), maps relationships, identifies experts, and enables natural language queries like 'Who knows about Kubernetes?' or 'What was decided about Project X?'",
    "category": "AI Services",
    "icon": "🕸️",
    "price": "$89/month",
    "features": ["Entity extraction", "Relationship mapping", "Expert identification", "Natural language queries", "Decision logging"],
    "contactInfo": { "phone": "+1 302 464 0950", "email": "kleber@ziontechgroup.com", "address": "364 E Main St STE 1008 Middletown DE 19709" }
  },
  {
    "id": "ai-organizational-intelligence",
    "title": "AI Organizational Intelligence Platform",
    "description": "Maps your organization's knowledge, expertise, and communication patterns from email data. Identifies subject matter experts, knowledge silos, and collaboration opportunities. Powers better decision-making through institutional knowledge.",
    "category": "AI Services",
    "icon": "🏛️",
    "price": "$99/month",
    "features": ["Expertise mapping", "Knowledge silo detection", "Collaboration insights", "Org intelligence", "Decision tracking"],
    "contactInfo": { "phone": "+1 302 464 0950", "email": "kleber@ziontechgroup.com", "address": "364 E Main St STE 1008 Middletown DE 19709" }
  },
  {
    "id": "ai-project-intelligence-hub",
    "title": "AI Project Intelligence Hub",
    "description": "Centralized intelligence for project communications. Tracks decisions, action items, stakeholders, and progress across all project-related emails. Provides instant answers about project status and history.",
    "category": "Micro-SaaS",
    "icon": "📋",
    "price": "$59/month",
    "features": ["Project tracking", "Decision history", "Stakeholder mapping", "Progress monitoring", "Instant Q&A"],
    "contactInfo": { "phone": "+1 302 464 0950", "email": "kleber@ziontechgroup.com", "address": "364 E Main St STE 1008 Middletown DE 19709" }
  },
  // Additional diversified services
  {
    "id": "ai-email-coaching-platform",
    "title": "AI Email Coaching Platform",
    "description": "Real-time email coaching that helps professionals improve their communication skills. Provides instant feedback on tone, clarity, professionalism, and effectiveness. Includes personalized learning paths and progress tracking.",
    "category": "AI Services",
    "icon": "🎓",
    "price": "$44/month",
    "features": ["Real-time coaching", "Tone feedback", "Skill tracking", "Learning paths", "Progress reports"],
    "contactInfo": { "phone": "+1 302 464 0950", "email": "kleber@ziontechgroup.com", "address": "364 E Main St STE 1008 Middletown DE 19709" }
  },
  {
    "id": "ai-email-data-loss-prevention",
    "title": "AI Email Data Loss Prevention",
    "description": "Advanced DLP for email communications. Detects sensitive data (PII, financial, credentials) before sending, enforces encryption policies, and prevents accidental data leaks through intelligent content scanning.",
    "category": "Security Services",
    "icon": "🔐",
    "price": "$79/month",
    "features": ["PII detection", "Financial data scanning", "Credential leak prevention", "Policy enforcement", "Audit logging"],
    "contactInfo": { "phone": "+1 302 464 0950", "email": "kleber@ziontechgroup.com", "address": "364 E Main St STE 1008 Middletown DE 19709" }
  },
  {
    "id": "ai-smart-email-routing",
    "title": "AI Smart Email Routing",
    "description": "Intelligent email routing that automatically directs emails to the right person or team based on content analysis, expertise matching, workload balancing, and historical patterns. Reduces response times by 60%.",
    "category": "IT Services",
    "icon": "🔀",
    "price": "$54/month",
    "features": ["Content-based routing", "Expertise matching", "Load balancing", "Pattern learning", "Response time optimization"],
    "contactInfo": { "phone": "+1 302 464 0950", "email": "kleber@ziontechgroup.com", "address": "364 E Main St STE 1008 Middletown DE 19709" }
  },
  {
    "id": "ai-email-analytics-suite",
    "title": "AI Email Analytics Suite",
    "description": "Comprehensive email analytics for teams. Track response times, email volume trends, busiest hours, communication patterns, and team productivity. AI-powered insights to optimize your email workflow.",
    "category": "Micro-SaaS",
    "icon": "📈",
    "price": "$39/month",
    "features": ["Response time tracking", "Volume analytics", "Pattern analysis", "Team productivity", "AI insights"],
    "contactInfo": { "phone": "+1 302 464 0950", "email": "kleber@ziontechgroup.com", "address": "364 E Main St STE 1008 Middletown DE 19709" }
  },
  {
    "id": "ai-email-backup-verification",
    "title": "AI Email Backup Verification",
    "description": "Automated email backup integrity verification. Validates backup completeness, detects corruption, ensures compliance with retention policies, and provides restore readiness reports. Never lose critical emails again.",
    "category": "IT Services",
    "icon": "💾",
    "price": "$49/month",
    "features": ["Integrity verification", "Corruption detection", "Compliance validation", "Restore readiness", "Retention tracking"],
    "contactInfo": { "phone": "+1 302 464 0950", "email": "kleber@ziontechgroup.com", "address": "364 E Main St STE 1008 Middletown DE 19709" }
  }
];

const servicesPath = path.join(__dirname, 'app/data/servicesData.json');
const services = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));

// Add only if not already present
let added = 0;
for (const svc of newServices) {
  if (!services.find(s => s.id === svc.id)) {
    services.push(svc);
    added++;
  }
}

fs.writeFileSync(servicesPath, JSON.stringify(services, null, 2));
console.log(`Added ${added} new services. Total: ${services.length}`);
