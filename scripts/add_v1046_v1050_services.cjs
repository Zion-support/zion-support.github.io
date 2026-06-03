const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'app', 'data', 'servicesData.json');
const services = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown DE 19709'
};

const newServices = [
  // V1046: AI Email Tone Adapter
  {
    id: 'ai-email-tone-adapter',
    name: "AI Email Tone Adapter",
    category: "AI Services",
    description: "Automatically adjusts email tone based on recipient seniority, relationship history, and cultural context. Detects when you're too formal/informal and suggests adjustments for optimal communication.",
    price: "$199/month",
    features: ["Real-time tone analysis", "Recipient seniority detection", "Cultural context adaptation", "Relationship history tracking", "Formality level optimization", "Tone consistency scoring"],
    icon: '🎭',
    link: '/services/ai-email-tone-adapter',
    contactInfo
  },
  {
    id: 'executive-communication-optimizer',
    name: "Executive Communication Optimizer",
    category: "AI Services",
    description: "Specialized tone adaptation for C-suite and executive communications. Ensures appropriate formality, conciseness, and strategic messaging for high-stakes conversations.",
    price: "$299/month",
    features: ["C-suite communication patterns", "Strategic messaging optimization", "Executive presence enhancement", "Board-level tone calibration", "Stakeholder-specific adaptation", "Power dynamics awareness"],
    icon: '👔',
    link: '/services/executive-communication-optimizer',
    contactInfo
  },
  {
    id: 'cross-cultural-email-assistant',
    name: "Cross-Cultural Email Assistant",
    category: "AI Services",
    description: "Navigate cultural nuances in international business communications. Adapts tone, formality, and messaging for 50+ cultural contexts to avoid misunderstandings.",
    price: "$249/month",
    features: ["50+ cultural context profiles", "Regional business etiquette", "Cultural sensitivity alerts", "Localized greeting/closing suggestions", "Hierarchy-aware communication", "Cultural faux pas prevention"],
    icon: '🌍',
    link: '/services/cross-cultural-email-assistant',
    contactInfo
  },
  {
    id: 'sales-tone-intelligence',
    name: "Sales Tone Intelligence",
    category: "AI Services",
    description: "Optimize sales email tone based on prospect stage, industry, and buyer persona. Balances professionalism with approachability to maximize conversion rates.",
    price: "$279/month",
    features: ["Sales stage tone adaptation", "Industry-specific language", "Buyer persona matching", "Urgency calibration", "Objection handling tone", "Closing signal optimization"],
    icon: '💼',
    link: '/services/sales-tone-intelligence',
    contactInfo
  },
  {
    id: 'customer-support-tone-manager',
    name: "Customer Support Tone Manager",
    category: "AI Services",
    description: "Maintain consistent, empathetic tone across all customer support interactions. Adapts based on customer sentiment, issue severity, and resolution stage.",
    price: "$219/month",
    features: ["Empathy level optimization", "Frustration de-escalation", "Resolution stage adaptation", "Brand voice consistency", "Sentiment-aware responses", "Customer satisfaction focus"],
    icon: '🎧',
    link: '/services/customer-support-tone-manager',
    contactInfo
  },

  // V1047: Email Revenue Attribution Engine
  {
    id: 'email-revenue-attribution-engine',
    name: "Email Revenue Attribution Engine",
    category: "AI Services",
    description: "Track which emails lead to closed deals, renewals, and upsells. Connect email conversations to CRM pipeline stages and calculate ROI per email thread.",
    price: "$599/month",
    features: ["Revenue signal detection", "Pipeline stage tracking", "Deal value extraction", "Attribution scoring", "Close probability prediction", "CRM integration ready"],
    icon: '💰',
    link: '/services/email-revenue-attribution-engine',
    contactInfo
  },
  {
    id: 'sales-pipeline-email-tracker',
    name: "Sales Pipeline Email Tracker",
    category: "AI Services",
    description: "Monitor email conversations throughout your sales pipeline. Identify which emails move deals forward and which stall progress.",
    price: "$449/month",
    features: ["Pipeline velocity tracking", "Deal progression analysis", "Stalled deal detection", "Email effectiveness scoring", "Conversion rate optimization", "Sales cycle insights"],
    icon: '📊',
    link: '/services/sales-pipeline-email-tracker',
    contactInfo
  },
  {
    id: 'email-roi-calculator',
    name: "Email ROI Calculator",
    category: "AI Services",
    description: "Calculate the true return on investment for your email communications. Track revenue generated per email, per thread, and per campaign.",
    price: "$399/month",
    features: ["Revenue per email metrics", "Thread ROI analysis", "Campaign performance tracking", "Cost-benefit calculations", "Revenue attribution models", "ROI trend reporting"],
    icon: '📈',
    link: '/services/email-roi-calculator',
    contactInfo
  },
  {
    id: 'deal-acceleration-intelligence',
    name: "Deal Acceleration Intelligence",
    category: "AI Services",
    description: "Identify email patterns that accelerate deal closure. Get real-time recommendations to move prospects through your sales funnel faster.",
    price: "$529/month",
    features: ["Deal velocity optimization", "Acceleration pattern detection", "Real-time recommendations", "Bottleneck identification", "Closing trigger alerts", "Sales funnel analytics"],
    icon: '🚀',
    link: '/services/deal-acceleration-intelligence',
    contactInfo
  },
  {
    id: 'renewal-upsell-predictor',
    name: "Renewal & Upsell Predictor",
    category: "AI Services",
    description: "Predict which customer email threads indicate renewal risk or upsell opportunities. Proactively engage before contracts expire.",
    price: "$479/month",
    features: ["Renewal risk scoring", "Upsell opportunity detection", "Churn prediction alerts", "Customer health monitoring", "Expansion signal tracking", "Retention strategy recommendations"],
    icon: '🔄',
    link: '/services/renewal-upsell-predictor',
    contactInfo
  },

  // V1048: AI Email Crisis Detection System
  {
    id: 'ai-email-crisis-detection-system',
    name: "AI Email Crisis Detection System",
    category: "Security Services",
    description: "Detect emerging PR crises, customer escalations, and legal risks in real-time. Auto-escalate to legal/PR teams with severity scoring and response strategies.",
    price: "$799/month",
    features: ["Real-time crisis detection", "Multi-category risk analysis", "Severity scoring (0-100)", "Auto-escalation workflows", "Response strategy generation", "Communication guidelines"],
    icon: '🚨',
    link: '/services/ai-email-crisis-detection-system',
    contactInfo
  },
  {
    id: 'legal-risk-email-scanner',
    name: "Legal Risk Email Scanner",
    category: "Security Services",
    description: "Identify emails with potential legal implications including lawsuits, compliance violations, and contractual disputes. Route to legal counsel before responding.",
    price: "$699/month",
    features: ["Legal threat detection", "Compliance violation alerts", "Contractual risk assessment", "Liability exposure analysis", "Legal counsel routing", "Document preservation triggers"],
    icon: '⚖️',
    link: '/services/legal-risk-email-scanner',
    contactInfo
  },
  {
    id: 'pr-crisis-early-warning',
    name: "PR Crisis Early Warning",
    category: "Security Services",
    description: "Detect negative press mentions, viral complaints, and reputation threats in email communications. Coordinate PR response before issues escalate.",
    price: "$649/month",
    features: ["Media mention tracking", "Viral complaint detection", "Reputation threat alerts", "PR team coordination", "Crisis communication templates", "Stakeholder notification"],
    icon: '📰',
    link: '/services/pr-crisis-early-warning',
    contactInfo
  },
  {
    id: 'customer-escalation-manager',
    name: "Customer Escalation Manager",
    category: "Security Services",
    description: "Automatically detect and prioritize customer escalations. Route to appropriate teams with severity assessment and resolution recommendations.",
    price: "$549/month",
    features: ["Escalation severity scoring", "Priority routing", "Resolution recommendations", "SLA breach prevention", "Customer satisfaction protection", "Escalation trend analysis"],
    icon: '🔥',
    link: '/services/customer-escalation-manager',
    contactInfo
  },
  {
    id: 'security-incident-email-alert',
    name: "Security Incident Email Alert",
    category: "Security Services",
    description: "Detect security breaches, data leaks, and cyber threats mentioned in emails. Trigger immediate incident response protocols and notifications.",
    price: "$749/month",
    features: ["Security breach detection", "Data leak alerts", "Cyber threat identification", "Incident response triggers", "CISO notification", "Compliance reporting"],
    icon: '🔐',
    link: '/services/security-incident-email-alert',
    contactInfo
  },

  // V1049: Email-to-Project Auto-Creator
  {
    id: 'email-to-project-auto-creator',
    name: "Email-to-Project Auto-Creator",
    category: "IT Services",
    description: "Parse project requirements from emails and auto-create tasks in Jira/Asana/Linear. Extract deadlines, assignees, and dependencies automatically.",
    price: "$349/month",
    features: ["Task extraction from emails", "Deadline detection", "Assignee identification", "Dependency mapping", "Story point estimation", "Multi-platform integration"],
    icon: '📋',
    link: '/services/email-to-project-auto-creator',
    contactInfo
  },
  {
    id: 'jira-email-integration',
    name: "Jira Email Integration",
    category: "IT Services",
    description: "Automatically create Jira tickets from email conversations. Extract requirements, assign to team members, and track project progress.",
    price: "$299/month",
    features: ["Jira ticket auto-creation", "Requirement parsing", "Team assignment", "Sprint planning support", "Progress tracking", "Bidirectional sync"],
    icon: '🎫',
    link: '/services/jira-email-integration',
    contactInfo
  },
  {
    id: 'asana-email-automation',
    name: "Asana Email Automation",
    category: "IT Services",
    description: "Transform emails into Asana tasks and projects. Maintain project context, deadlines, and team assignments from email conversations.",
    price: "$289/month",
    features: ["Asana task creation", "Project structure generation", "Deadline extraction", "Team member assignment", "Subtask breakdown", "Progress synchronization"],
    icon: '✅',
    link: '/services/asana-email-automation',
    contactInfo
  },
  {
    id: 'linear-issue-generator',
    name: "Linear Issue Generator",
    category: "IT Services",
    description: "Convert email bug reports and feature requests into Linear issues. Auto-assign to engineering teams with priority and story point estimates.",
    price: "$319/month",
    features: ["Linear issue creation", "Bug report parsing", "Feature request extraction", "Priority assignment", "Story point estimation", "Engineering team routing"],
    icon: '🔧',
    link: '/services/linear-issue-generator',
    contactInfo
  },
  {
    id: 'project-health-monitor',
    name: "Project Health Monitor",
    category: "IT Services",
    description: "Track project health based on email communications. Detect scope creep, deadline risks, and resource constraints before they derail projects.",
    price: "$379/month",
    features: ["Project health scoring", "Scope creep detection", "Deadline risk alerts", "Resource constraint warnings", "Stakeholder alignment tracking", "Risk mitigation recommendations"],
    icon: '💚',
    link: '/services/project-health-monitor',
    contactInfo
  },

  // V1050: AI Email Localization Engine
  {
    id: 'ai-email-localization-engine',
    name: "AI Email Localization Engine",
    category: "AI Services",
    description: "Auto-translate emails while preserving tone, idioms, and business context. Support 50+ languages with cultural adaptation and quality scoring.",
    price: "$449/month",
    features: ["50+ language support", "Tone-preserving translation", "Cultural adaptation", "Business context awareness", "Quality scoring", "Real-time translation"],
    icon: '🌐',
    link: '/services/ai-email-localization-engine',
    contactInfo
  },
  {
    id: 'global-business-translator',
    name: "Global Business Translator",
    category: "AI Services",
    description: "Professional-grade email translation for international business. Maintains formality levels, business terminology, and cultural appropriateness.",
    price: "$399/month",
    features: ["Business-grade translation", "Formality level matching", "Industry terminology", "Cultural appropriateness", "Professional tone preservation", "Multi-language support"],
    icon: '🌏',
    link: '/services/global-business-translator',
    contactInfo
  },
  {
    id: 'multilingual-customer-support',
    name: "Multilingual Customer Support",
    category: "AI Services",
    description: "Provide seamless customer support in 50+ languages. Auto-detect customer language and respond in their preferred language with cultural sensitivity.",
    price: "$429/month",
    features: ["Auto language detection", "Customer language preference", "Cultural sensitivity", "Support terminology", "Empathy preservation", "Multi-language responses"],
    icon: '🗣️',
    link: '/services/multilingual-customer-support',
    contactInfo
  },
  {
    id: 'international-sales-localization',
    name: "International Sales Localization",
    category: "AI Services",
    description: "Localize sales communications for global markets. Adapt messaging, cultural references, and business practices for maximum international conversion.",
    price: "$469/month",
    features: ["Market-specific localization", "Cultural reference adaptation", "Local business practices", "Currency and date formatting", "Regional compliance", "Conversion optimization"],
    icon: '💱',
    link: '/services/international-sales-localization',
    contactInfo
  },
  {
    id: 'cross-border-compliance-translator',
    name: "Cross-Border Compliance Translator",
    category: "Compliance Services",
    description: "Ensure email translations meet regional compliance requirements. Handle GDPR, data residency, and industry-specific regulations across jurisdictions.",
    price: "$519/month",
    features: ["Regional compliance checking", "GDPR-aware translation", "Data residency compliance", "Industry regulation support", "Legal terminology accuracy", "Audit trail generation"],
    icon: '🛡️',
    link: '/services/cross-border-compliance-translator',
    contactInfo
  }
];

// Add new services
services.push(...newServices);

fs.writeFileSync(dataPath, JSON.stringify(services, null, 2));
console.log(`Added ${newServices.length} new services. Total: ${services.length}`);
