const fs = require('fs');
const path = require('path');

const servicesFile = path.join(__dirname, '../app/data/servicesData.json');
const services = JSON.parse(fs.readFileSync(servicesFile, 'utf8'));

const newServices = [
  {
    id: 'v144-tone-analyzer',
    title: 'V144: Tone Analyzer & Adapter',
    category: 'email-intelligence',
    description: 'Detect emotional tone in emails and automatically adapt replies to match or de-escalate. Includes empathy scoring, cultural tone adjustment, and de-escalation strategies for frustrated or urgent emails.',
    longDescription: 'The Tone Analyzer & Adapter engine uses advanced NLP to detect the emotional tone of incoming emails (formal, casual, urgent, frustrated, enthusiastic, apologetic, assertive) and automatically adapts your response to match the appropriate tone or de-escalate when needed. It includes empathy scoring to gauge emotional intensity, cultural tone adjustment for global communications, and specialized de-escalation strategies for frustrated or urgent emails. All responses enforce reply-all for team communications.',
    icon: '🎭',
    features: [
      'Emotional tone detection (formal, casual, urgent, frustrated, enthusiastic, apologetic, assertive)',
      'Empathy scoring and emotional intensity analysis',
      'Cultural tone adjustment for global communications',
      'De-escalation strategies for frustrated/urgent emails',
      'Automatic tone matching for response generation',
      'Reply-all enforcement for team communications',
      'Tone adaptation learning from feedback'
    ],
    benefits: [
      'Improve customer satisfaction with tone-matched responses',
      'Reduce escalation through smart de-escalation',
      'Maintain professional tone across all communications',
      'Adapt to cultural communication preferences',
      'Ensure team visibility with reply-all enforcement'
    ],
    useCases: [
      'Customer support teams handling frustrated customers',
      'Sales teams adapting to prospect communication styles',
      'Global teams communicating across cultures',
      'Management handling sensitive communications'
    ],
    pricing: {
      basic: 299,
      professional: 599,
      enterprise: 1299
    },
    tier: 'professional',
    status: 'active',
    releaseDate: '2025-01-20',
    version: '1.0.0',
    relatedEngines: ['v109', 'v110', 'v111']
  },
  {
    id: 'v145-auto-responder-context',
    title: 'V145: Auto-Responder with Context Memory',
    category: 'email-intelligence',
    description: 'Smart auto-responder that remembers previous conversations with each contact, generates contextually relevant responses, and routes urgent emails to appropriate delegates based on case-by-case analysis.',
    longDescription: 'The Auto-Responder with Context Memory maintains a comprehensive memory of all previous conversations with each contact, enabling it to generate contextually relevant auto-responses that reference past interactions. It performs case-by-case urgency analysis to route critical emails to appropriate delegates, learns from response patterns to improve over time, and ensures reply-all enforcement for team communications. The system intelligently determines when to auto-respond, when to escalate, and when to wait for human intervention.',
    icon: '🧠',
    features: [
      'Context memory per contact with full conversation history',
      'Urgency-based routing to appropriate delegates',
      'Learning from response patterns and feedback',
      'Case-by-case routing decisions',
      'Contextual auto-response generation',
      'Reply-all enforcement for team communications',
      'Escalation rules based on content and sender'
    ],
    benefits: [
      'Never lose context of previous conversations',
      'Always route urgent emails to the right person',
      'Improve response quality over time through learning',
      'Maintain team visibility with reply-all',
      'Reduce response time for routine inquiries'
    ],
    useCases: [
      'Executive assistants managing high-volume inboxes',
      'Support teams handling recurring customer issues',
      'Sales teams following up on long sales cycles',
      'Project managers coordinating multiple stakeholders'
    ],
    pricing: {
      basic: 349,
      professional: 699,
      enterprise: 1499
    },
    tier: 'professional',
    status: 'active',
    releaseDate: '2025-01-20',
    version: '1.0.0',
    relatedEngines: ['v109', 'v112', 'v113']
  },
  {
    id: 'v146-attachment-intelligence',
    title: 'V146: Attachment Intelligence',
    category: 'email-intelligence',
    description: 'Automatically analyze, summarize, and extract data from email attachments including PDFs, spreadsheets, presentations, and images. Includes OCR, contract clause extraction, financial data parsing, and malware scanning.',
    longDescription: 'The Attachment Intelligence engine provides comprehensive analysis of all email attachments. It performs OCR and extracts key clauses from PDF contracts, parses financial data from spreadsheets, generates descriptions for images, and scans all attachments for malware. The system can summarize long documents, extract action items, and flag security risks. All attachment insights are shared via reply-all to ensure team visibility and collaborative decision-making.',
    icon: '📎',
    features: [
      'OCR and text extraction from PDFs',
      'Contract clause extraction and analysis',
      'Financial data parsing from spreadsheets',
      'Image description generation using AI',
      'Malware scanning and security alerts',
      'Document summarization and key point extraction',
      'Reply-all for attachment insights sharing'
    ],
    benefits: [
      'Extract insights from attachments automatically',
      'Identify contract risks and obligations',
      'Parse financial data without manual entry',
      'Protect against malware in attachments',
      'Share attachment insights with entire team'
    ],
    useCases: [
      'Legal teams reviewing contract attachments',
      'Finance teams processing invoice attachments',
      'Procurement teams analyzing vendor proposals',
      'Security teams scanning for malicious attachments'
    ],
    pricing: {
      basic: 399,
      professional: 799,
      enterprise: 1699
    },
    tier: 'professional',
    status: 'active',
    releaseDate: '2025-01-20',
    version: '1.0.0',
    relatedEngines: ['v112', 'v113', 'v115']
  },
  {
    id: 'v147-meeting-minutes',
    title: 'V147: Meeting Minutes Generator',
    category: 'email-intelligence',
    description: 'Generate structured meeting minutes from email threads and meeting recordings, extracting action items, decisions, owners, deadlines, and automatically sending follow-up emails to all participants.',
    longDescription: 'The Meeting Minutes Generator analyzes email threads and meeting recordings to produce comprehensive, structured meeting minutes. It automatically extracts action items with assigned owners and deadlines, key decisions made, discussion topics, and follow-up tasks. The system generates professional follow-up emails with all minutes and sends them via reply-all to all meeting participants, ensuring everyone has the same understanding and accountability. Integration with calendar and task management systems allows automatic scheduling and task creation.',
    icon: '📝',
    features: [
      'Action items extraction with owners and deadlines',
      'Key decisions documentation',
      'Discussion topics summarization',
      'Follow-up email drafts to all participants',
      'Reply-all to all meeting participants',
      'Calendar integration for scheduling',
      'Task management system integration'
    ],
    benefits: [
      'Never miss an action item or deadline',
      'Ensure all participants receive meeting minutes',
      'Maintain accountability with clear ownership',
      'Automate follow-up communications',
      'Integrate with existing workflow tools'
    ],
    useCases: [
      'Project managers documenting sprint planning',
      'Executive teams recording board meetings',
      'Sales teams tracking client meetings',
      'HR teams documenting interview debriefs'
    ],
    pricing: {
      basic: 299,
      professional: 599,
      enterprise: 1299
    },
    tier: 'professional',
    status: 'active',
    releaseDate: '2025-01-20',
    version: '1.0.0',
    relatedEngines: ['v113', 'v114', 'v115']
  },
  {
    id: 'v148-sla-enforcement',
    title: 'V148: SLA Enforcement Engine',
    category: 'email-intelligence',
    description: 'Track response time commitments per contact and customer tier, send escalation alerts before SLA breach, generate compliance reports, and auto-prioritize inbox based on SLA urgency.',
    longDescription: 'The SLA Enforcement Engine ensures you never miss a response time commitment. It tracks SLA requirements per contact and customer tier (premium, standard, basic), monitors response times in real-time, and sends escalation alerts before breaches occur. The system automatically prioritizes your inbox based on SLA urgency, generates comprehensive compliance reports for management, and enforces reply-all for escalation communications to ensure team visibility and accountability.',
    icon: '⏱️',
    features: [
      'Response time tracking per contact/customer tier',
      'Real-time SLA monitoring and alerts',
      'Escalation alerts before SLA breach',
      'SLA compliance reports and analytics',
      'Auto-prioritize inbox based on SLA urgency',
      'Reply-all enforcement for escalations',
      'Customer tier management (premium, standard, basic)'
    ],
    benefits: [
      'Meet every SLA commitment consistently',
      'Prevent costly SLA breaches',
      'Demonstrate compliance to customers and management',
      'Prioritize work based on urgency',
      'Ensure team visibility on escalations'
    ],
    useCases: [
      'Support teams with contractual SLAs',
      'Account managers managing premium clients',
      'IT teams with response time commitments',
      'Service providers with tiered customer agreements'
    ],
    pricing: {
      basic: 349,
      professional: 699,
      enterprise: 1499
    },
    tier: 'professional',
    status: 'active',
    releaseDate: '2025-01-20',
    version: '1.0.0',
    relatedEngines: ['v109', 'v110', 'v114']
  }
];

// Add new services
newServices.forEach(service => {
  if (!services.find(s => s.id === service.id)) {
    services.push(service);
    console.log(`✓ Added: ${service.title}`);
  } else {
    console.log(`- Skipped (already exists): ${service.title}`);
  }
});

// Save updated services
fs.writeFileSync(servicesFile, JSON.stringify(services, null, 2));
console.log(`\n✅ Total services: ${services.length}`);
console.log(`✅ Added ${newServices.length} new Email Intelligence V9 services`);
