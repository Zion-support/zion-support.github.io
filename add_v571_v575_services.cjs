const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, 'app/data/servicesData.json');
const services = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));

const newServices = [
  // AI/ML Services (5)
  {
    id: "ai-knowledge-graph-builder",
    title: "AI Knowledge Graph Builder",
    description: "Automatically builds relationship maps from email communications and identifies key stakeholders",
    icon: "🕸️",
    features: ["Relationship mapping", "Stakeholder identification", "Communication pattern analysis", "Influence scoring"],
    pricing: { basic: "299", pro: "799", enterprise: "1999" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/ai-knowledge-graph-builder",
    category: "ai",
    popular: true
  },
  {
    id: "ai-multilingual-assistant",
    title: "AI Multilingual Email Assistant",
    description: "Real-time translation for 100+ languages with cultural context awareness and tone adaptation",
    icon: "🌐",
    features: ["100+ language support", "Cultural context awareness", "Tone adaptation", "Locale-specific formatting"],
    pricing: { basic: "199", pro: "499", enterprise: "1299" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/ai-multilingual-assistant",
    category: "ai",
    popular: true
  },
  {
    id: "ai-negotiation-assistant",
    title: "AI Email Negotiation Assistant",
    description: "Analyzes negotiation patterns and suggests optimal counter-offers with leverage point identification",
    icon: "🤝",
    features: ["Negotiation style detection", "Counter-offer suggestions", "Leverage point identification", "Concession tracking"],
    pricing: { basic: "399", pro: "999", enterprise: "2499" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/ai-negotiation-assistant",
    category: "ai",
    popular: false
  },
  {
    id: "ai-email-summarizer-pro",
    title: "AI Email Summarizer Pro",
    description: "Advanced email summarization with key action items and decision extraction",
    icon: "📝",
    features: ["Multi-level summarization", "Action item extraction", "Decision tracking", "Priority highlighting"],
    pricing: { basic: "149", pro: "399", enterprise: "999" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/ai-email-summarizer-pro",
    category: "ai",
    popular: false
  },
  {
    id: "ai-smart-categorizer",
    title: "AI Smart Email Categorizer",
    description: "Automatically categorizes emails by priority, project, and urgency using machine learning",
    icon: "🏷️",
    features: ["Auto-categorization", "Priority detection", "Project-based grouping", "Custom rules"],
    pricing: { basic: "129", pro: "349", enterprise: "899" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/ai-smart-categorizer",
    category: "ai",
    popular: false
  },

  // Compliance & Security (5)
  {
    id: "email-accessibility-checker",
    title: "Email Accessibility Checker",
    description: "Ensures emails meet WCAG 2.1 standards with screen reader compatibility and color contrast optimization",
    icon: "♿",
    features: ["WCAG 2.1 compliance", "Screen reader compatibility", "Color contrast optimization", "Alternative text generation"],
    pricing: { basic: "179", pro: "449", enterprise: "1149" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/email-accessibility-checker",
    category: "compliance",
    popular: true
  },
  {
    id: "gdpr-compliance-scanner",
    title: "GDPR Compliance Scanner",
    description: "Automatically scans emails for GDPR compliance issues and personal data handling",
    icon: "🇪🇺",
    features: ["GDPR violation detection", "Personal data scanning", "Consent tracking", "Data retention alerts"],
    pricing: { basic: "249", pro: "649", enterprise: "1599" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/gdpr-compliance-scanner",
    category: "compliance",
    popular: false
  },
  {
    id: "hipaa-email-guardian",
    title: "HIPAA Email Guardian",
    description: "Protects healthcare communications with HIPAA compliance monitoring and PHI detection",
    icon: "🏥",
    features: ["PHI detection", "HIPAA compliance monitoring", "Encryption enforcement", "Audit trail generation"],
    pricing: { basic: "299", pro: "799", enterprise: "1999" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/hipaa-email-guardian",
    category: "compliance",
    popular: false
  },
  {
    id: "email-phishing-detector",
    title: "Advanced Phishing Detector",
    description: "AI-powered phishing detection with real-time threat analysis and automated protection",
    icon: "🎣",
    features: ["Real-time threat detection", "URL analysis", "Sender verification", "Automated quarantine"],
    pricing: { basic: "199", pro: "499", enterprise: "1249" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/email-phishing-detector",
    category: "security",
    popular: true
  },
  {
    id: "email-encryption-suite",
    title: "Email Encryption Suite",
    description: "End-to-end email encryption with automatic key management and secure file sharing",
    icon: "🔐",
    features: ["End-to-end encryption", "Automatic key management", "Secure file sharing", "Digital signatures"],
    pricing: { basic: "229", pro: "599", enterprise: "1499" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/email-encryption-suite",
    category: "security",
    popular: false
  },

  // Productivity & Automation (5)
  {
    id: "email-workflow-automator",
    title: "Email Workflow Automator",
    description: "Create automated email workflows with triggers, conditions, and multi-step actions",
    icon: "⚡",
    features: ["Visual workflow builder", "Conditional logic", "Multi-step actions", "Integration with 500+ apps"],
    pricing: { basic: "279", pro: "699", enterprise: "1799" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/email-workflow-automator",
    category: "automation",
    popular: true
  },
  {
    id: "smart-email-scheduler",
    title: "Smart Email Scheduler",
    description: "AI-powered email scheduling that finds optimal send times based on recipient behavior",
    icon: "📅",
    features: ["Optimal send time prediction", "Timezone awareness", "Recipient behavior analysis", "Calendar integration"],
    pricing: { basic: "159", pro: "399", enterprise: "999" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/smart-email-scheduler",
    category: "automation",
    popular: false
  },
  {
    id: "email-template-generator",
    title: "AI Email Template Generator",
    description: "Generate professional email templates based on context, tone, and purpose",
    icon: "📋",
    features: ["Context-aware generation", "Tone customization", "Industry templates", "A/B testing support"],
    pricing: { basic: "139", pro: "349", enterprise: "899" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/email-template-generator",
    category: "automation",
    popular: false
  },
  {
    id: "email-followup-tracker",
    title: "Email Follow-up Tracker",
    description: "Automatically tracks sent emails and reminds you to follow up at the right time",
    icon: "🔔",
    features: ["Automatic tracking", "Smart reminders", "Response prediction", "Custom follow-up sequences"],
    pricing: { basic: "119", pro: "299", enterprise: "749" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/email-followup-tracker",
    category: "automation",
    popular: false
  },
  {
    id: "email-batch-processor",
    title: "Email Batch Processor",
    description: "Process hundreds of emails simultaneously with bulk actions and parallel processing",
    icon: "📦",
    features: ["Bulk processing", "Parallel execution", "Custom batch rules", "Progress tracking"],
    pricing: { basic: "189", pro: "479", enterprise: "1199" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/email-batch-processor",
    category: "automation",
    popular: false
  },

  // Analytics & Insights (5)
  {
    id: "email-carbon-footprint-tracker",
    title: "Email Carbon Footprint Tracker",
    description: "Calculates environmental impact of email communications and suggests optimization strategies",
    icon: "🌱",
    features: ["CO2 calculation", "Optimization suggestions", "Sustainability reporting", "Green email tips"],
    pricing: { basic: "99", pro: "249", enterprise: "649" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/email-carbon-footprint-tracker",
    category: "analytics",
    popular: true
  },
  {
    id: "email-engagement-analytics",
    title: "Email Engagement Analytics",
    description: "Track email open rates, response times, and engagement patterns with detailed insights",
    icon: "📊",
    features: ["Open rate tracking", "Response time analysis", "Engagement scoring", "Trend visualization"],
    pricing: { basic: "169", pro: "429", enterprise: "1099" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/email-engagement-analytics",
    category: "analytics",
    popular: false
  },
  {
    id: "email-sentiment-dashboard",
    title: "Email Sentiment Dashboard",
    description: "Real-time sentiment analysis dashboard with trend tracking and emotional insights",
    icon: "😊",
    features: ["Real-time sentiment analysis", "Trend tracking", "Emotional insights", "Custom dashboards"],
    pricing: { basic: "219", pro: "549", enterprise: "1399" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/email-sentiment-dashboard",
    category: "analytics",
    popular: false
  },
  {
    id: "email-productivity-metrics",
    title: "Email Productivity Metrics",
    description: "Measure and optimize email productivity with time tracking and efficiency scores",
    icon: "⏱️",
    features: ["Time tracking", "Efficiency scoring", "Productivity trends", "Optimization recommendations"],
    pricing: { basic: "149", pro: "379", enterprise: "949" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/email-productivity-metrics",
    category: "analytics",
    popular: false
  },
  {
    id: "email-campaign-analyzer",
    title: "Email Campaign Analyzer",
    description: "Analyze email marketing campaigns with performance metrics and ROI tracking",
    icon: "📈",
    features: ["Campaign performance tracking", "ROI calculation", "A/B test analysis", "Conversion tracking"],
    pricing: { basic: "259", pro: "649", enterprise: "1649" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/email-campaign-analyzer",
    category: "analytics",
    popular: false
  },

  // Integration & Collaboration (5)
  {
    id: "email-crm-integrator",
    title: "Email CRM Integrator",
    description: "Seamlessly integrate emails with popular CRM platforms for unified customer management",
    icon: "🔗",
    features: ["CRM integration", "Contact sync", "Activity logging", "Deal tracking"],
    pricing: { basic: "199", pro: "499", enterprise: "1249" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/email-crm-integrator",
    category: "integration",
    popular: true
  },
  {
    id: "email-project-management",
    title: "Email Project Management",
    description: "Convert emails to tasks and manage projects directly from your inbox",
    icon: "📋",
    features: ["Email-to-task conversion", "Project tracking", "Team collaboration", "Deadline management"],
    pricing: { basic: "179", pro: "449", enterprise: "1129" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/email-project-management",
    category: "integration",
    popular: false
  },
  {
    id: "email-calendar-sync",
    title: "Email Calendar Sync",
    description: "Automatically sync emails with calendar events and schedule meetings from emails",
    icon: "📆",
    features: ["Calendar integration", "Meeting scheduling", "Event extraction", "Time blocking"],
    pricing: { basic: "129", pro: "329", enterprise: "829" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/email-calendar-sync",
    category: "integration",
    popular: false
  },
  {
    id: "email-slack-bridge",
    title: "Email-Slack Bridge",
    description: "Bridge email and Slack communications for seamless team collaboration",
    icon: "💬",
    features: ["Email-to-Slack forwarding", "Slack-to-email replies", "Thread synchronization", "Notification management"],
    pricing: { basic: "109", pro: "279", enterprise: "699" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/email-slack-bridge",
    category: "integration",
    popular: false
  },
  {
    id: "email-api-gateway",
    title: "Email API Gateway",
    description: "Unified API gateway for email integrations with webhooks and automation",
    icon: "🔌",
    features: ["Unified API", "Webhook support", "Custom integrations", "Rate limiting"],
    pricing: { basic: "299", pro: "749", enterprise: "1899" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008 Middletown DE 19709" },
    href: "/services/email-api-gateway",
    category: "integration",
    popular: false
  }
];

services.push(...newServices);
fs.writeFileSync(servicesPath, JSON.stringify(services, null, 2));
console.log(`Added ${newServices.length} new services. Total: ${services.length}`);
