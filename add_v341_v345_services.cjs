const fs = require('fs');
const path = require('path');

const servicesFile = path.join(__dirname, 'app', 'data', 'servicesData.json');
const services = JSON.parse(fs.readFileSync(servicesFile, 'utf8'));

const newServices = [
  // V341 - Tone Adaptation Engine Services
  {
    id: "tone-adaptation-engine",
    name: "Tone Adaptation Engine",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Automatically adapts email tone based on recipient relationship, cultural context, and communication history. Ensures appropriate formality levels and emotional resonance for every interaction.",
    features: [
      "Relationship-based tone matching",
      "Cultural context awareness",
      "Formality level adjustment",
      "Emotional tone calibration",
      "Historical communication pattern analysis",
      "Multi-language tone adaptation"
    ],
    benefits: [
      "Build stronger relationships through appropriate communication",
      "Avoid cultural miscommunications",
      "Maintain professional image across all interactions",
      "Increase response rates by 40%"
    ],
    price: 299,
    priceUnit: "month",
    icon: "🎭",
    badge: "NEW",
    link: "/services/tone-adaptation-engine"
  },
  {
    id: "cultural-intelligence-suite",
    name: "Cultural Intelligence Suite",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Advanced cultural context analysis for global communications. Detects cultural norms, communication styles, and provides real-time adaptation suggestions.",
    features: [
      "50+ cultural profiles",
      "Communication style detection",
      "Cultural sensitivity alerts",
      "Regional business etiquette",
      "Time zone awareness",
      "Holiday and observance tracking"
    ],
    benefits: [
      "Eliminate cross-cultural misunderstandings",
      "Build trust with international partners",
      "Respect cultural communication norms",
      "Expand global business reach"
    ],
    price: 349,
    priceUnit: "month",
    icon: "🌍",
    badge: "NEW",
    link: "/services/cultural-intelligence-suite"
  },
  {
    id: "relationship-scoring-system",
    name: "Relationship Scoring System",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Quantifies and tracks relationship strength with each contact based on interaction history, response patterns, and communication quality metrics.",
    features: [
      "Relationship strength scoring (0-100)",
      "Interaction frequency tracking",
      "Response time analysis",
      "Sentiment trend monitoring",
      "Relationship health alerts",
      "Engagement optimization suggestions"
    ],
    benefits: [
      "Identify at-risk relationships early",
      "Prioritize high-value contacts",
      "Improve customer retention by 35%",
      "Data-driven relationship management"
    ],
    price: 279,
    priceUnit: "month",
    icon: "🤝",
    badge: "NEW",
    link: "/services/relationship-scoring-system"
  },
  {
    id: "formality-calibrator",
    name: "Formality Calibrator",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Automatically adjusts formality levels from casual to highly formal based on recipient role, industry standards, and communication context.",
    features: [
      "5 formality levels (casual to formal)",
      "Industry-specific formality standards",
      "Role-based adjustments",
      "Context-aware calibration",
      "Formality consistency checking",
      "Custom formality rules"
    ],
    benefits: [
      "Always use appropriate formality",
      "Match industry communication standards",
      "Avoid overly casual or stiff communication",
      "Professional image maintenance"
    ],
    price: 249,
    priceUnit: "month",
    icon: "📏",
    badge: "NEW",
    link: "/services/formality-calibrator"
  },
  {
    id: "communication-history-analyzer",
    name: "Communication History Analyzer",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Deep analysis of past communications to identify patterns, preferences, and optimal communication strategies for each contact.",
    features: [
      "Historical pattern recognition",
      "Preferred communication style detection",
      "Response time preference learning",
      "Topic interest tracking",
      "Communication frequency optimization",
      "Long-term relationship insights"
    ],
    benefits: [
      "Personalize every interaction",
      "Learn from past communications",
      "Predict optimal communication timing",
      "Build deeper connections"
    ],
    price: 319,
    priceUnit: "month",
    icon: "📚",
    badge: "NEW",
    link: "/services/communication-history-analyzer"
  },

  // V342 - Analytics Dashboard Pro Services
  {
    id: "email-analytics-dashboard-pro",
    name: "Email Analytics Dashboard Pro",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Comprehensive email performance analytics with engagement metrics, response time tracking, and team performance benchmarking.",
    features: [
      "Real-time engagement metrics",
      "Response time analytics",
      "Open and click tracking",
      "Team performance dashboards",
      "Custom report generation",
      "Performance benchmarking"
    ],
    benefits: [
      "Data-driven email optimization",
      "Identify performance bottlenecks",
      "Improve team productivity by 45%",
      "Track ROI of email communications"
    ],
    price: 399,
    priceUnit: "month",
    icon: "📊",
    badge: "NEW",
    link: "/services/email-analytics-dashboard-pro"
  },
  {
    id: "engagement-metrics-tracker",
    name: "Engagement Metrics Tracker",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Track and analyze email engagement metrics including open rates, response rates, and interaction quality scores.",
    features: [
      "Open rate tracking",
      "Response rate monitoring",
      "Engagement quality scoring",
      "Trend analysis",
      "Engagement alerts",
      "Comparative analytics"
    ],
    benefits: [
      "Measure email effectiveness",
      "Identify high-engagement content",
      "Optimize send timing",
      "Increase engagement by 50%"
    ],
    price: 329,
    priceUnit: "month",
    icon: "📈",
    badge: "NEW",
    link: "/services/engagement-metrics-tracker"
  },
  {
    id: "team-performance-insights",
    name: "Team Performance Insights",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Analyze team email performance with productivity metrics, collaboration scores, and workload distribution analytics.",
    features: [
      "Individual performance tracking",
      "Team collaboration metrics",
      "Workload distribution analysis",
      "Productivity scoring",
      "Performance comparisons",
      "Team optimization recommendations"
    ],
    benefits: [
      "Identify top performers",
      "Balance team workload",
      "Improve collaboration efficiency",
      "Data-driven team management"
    ],
    price: 449,
    priceUnit: "month",
    icon: "👥",
    badge: "NEW",
    link: "/services/team-performance-insights"
  },
  {
    id: "response-time-optimizer",
    name: "Response Time Optimizer",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Optimize response times with predictive analytics, priority-based routing, and intelligent scheduling for maximum efficiency.",
    features: [
      "Response time prediction",
      "Priority-based optimization",
      "Intelligent scheduling",
      "Response time alerts",
      "Performance benchmarking",
      "Optimization recommendations"
    ],
    benefits: [
      "Reduce response times by 60%",
      "Meet SLA commitments",
      "Improve customer satisfaction",
      "Optimize team efficiency"
    ],
    price: 379,
    priceUnit: "month",
    icon: "⏱️",
    badge: "NEW",
    link: "/services/response-time-optimizer"
  },
  {
    id: "email-roi-calculator",
    name: "Email ROI Calculator",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Calculate and track the return on investment of email communications with cost analysis, conversion tracking, and revenue attribution.",
    features: [
      "Cost per email calculation",
      "Conversion tracking",
      "Revenue attribution",
      "ROI trend analysis",
      "Campaign performance metrics",
      "Financial impact reporting"
    ],
    benefits: [
      "Quantify email value",
      "Justify email investments",
      "Optimize resource allocation",
      "Demonstrate business impact"
    ],
    price: 499,
    priceUnit: "month",
    icon: "💰",
    badge: "NEW",
    link: "/services/email-roi-calculator"
  },

  // V343 - Workflow Automation Engine Services
  {
    id: "workflow-automation-engine",
    name: "Workflow Automation Engine",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Automate complex email workflows with trigger-based actions, intelligent routing, and approval workflows that save hours of manual work.",
    features: [
      "Trigger-based automation",
      "Intelligent email routing",
      "Approval workflows",
      "Conditional logic engine",
      "Workflow templates",
      "Performance monitoring"
    ],
    benefits: [
      "Automate 80% of repetitive tasks",
      "Reduce manual work by 10+ hours/week",
      "Eliminate routing errors",
      "Accelerate approval processes"
    ],
    price: 599,
    priceUnit: "month",
    icon: "⚙️",
    badge: "NEW",
    link: "/services/workflow-automation-engine"
  },
  {
    id: "intelligent-email-routing",
    name: "Intelligent Email Routing",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "AI-powered email routing that automatically directs emails to the right person or team based on content, context, and historical patterns.",
    features: [
      "Content-based routing",
      "Context-aware decisions",
      "Historical pattern learning",
      "Multi-level routing rules",
      "Fallback routing",
      "Routing analytics"
    ],
    benefits: [
      "Route emails with 95% accuracy",
      "Eliminate misdirected emails",
      "Reduce response delays",
      "Improve customer satisfaction"
    ],
    price: 449,
    priceUnit: "month",
    icon: "🔀",
    badge: "NEW",
    link: "/services/intelligent-email-routing"
  },
  {
    id: "approval-workflow-system",
    name: "Approval Workflow System",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Streamlined approval workflows with automated routing, status tracking, and escalation for faster decision-making.",
    features: [
      "Multi-level approvals",
      "Automated routing",
      "Status tracking",
      "Escalation rules",
      "Approval analytics",
      "Mobile approval access"
    ],
    benefits: [
      "Accelerate approval cycles by 70%",
      "Eliminate approval bottlenecks",
      "Maintain audit trails",
      "Improve decision transparency"
    ],
    price: 529,
    priceUnit: "month",
    icon: "✅",
    badge: "NEW",
    link: "/services/approval-workflow-system"
  },
  {
    id: "trigger-based-actions",
    name: "Trigger-Based Actions",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Create powerful automation rules that trigger actions based on email content, sender, timing, and custom conditions.",
    features: [
      "Custom trigger conditions",
      "Multi-action sequences",
      "Conditional logic",
      "Time-based triggers",
      "Event-driven actions",
      "Action logging"
    ],
    benefits: [
      "Automate complex workflows",
      "Respond instantly to events",
      "Eliminate manual monitoring",
      "Ensure consistent processes"
    ],
    price: 399,
    priceUnit: "month",
    icon: "⚡",
    badge: "NEW",
    link: "/services/trigger-based-actions"
  },
  {
    id: "workflow-templates-library",
    name: "Workflow Templates Library",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Pre-built workflow templates for common business processes that can be customized and deployed in minutes.",
    features: [
      "100+ pre-built templates",
      "Industry-specific workflows",
      "Custom template creation",
      "Template sharing",
      "Version control",
      "Template analytics"
    ],
    benefits: [
      "Deploy workflows in minutes",
      "Leverage best practices",
      "Standardize processes",
      "Reduce setup time by 90%"
    ],
    price: 299,
    priceUnit: "month",
    icon: "📋",
    badge: "NEW",
    link: "/services/workflow-templates-library"
  },

  // V344 - Learning System Services
  {
    id: "adaptive-learning-system",
    name: "Adaptive Learning System",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Self-improving email system that learns from every interaction to optimize response quality, timing, and personalization.",
    features: [
      "Continuous learning algorithms",
      "Pattern recognition",
      "Performance optimization",
      "Adaptive response generation",
      "Learning analytics",
      "Improvement tracking"
    ],
    benefits: [
      "System gets smarter over time",
      "Improve response quality by 55%",
      "Personalize at scale",
      "Reduce errors through learning"
    ],
    price: 699,
    priceUnit: "month",
    icon: "🧠",
    badge: "NEW",
    link: "/services/adaptive-learning-system"
  },
  {
    id: "pattern-recognition-engine",
    name: "Pattern Recognition Engine",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Advanced pattern recognition that identifies communication patterns, preferences, and trends to optimize email strategies.",
    features: [
      "Communication pattern detection",
      "Preference learning",
      "Trend analysis",
      "Anomaly detection",
      "Pattern visualization",
      "Predictive insights"
    ],
    benefits: [
      "Understand communication patterns",
      "Predict future behaviors",
      "Identify opportunities",
      "Optimize strategies proactively"
    ],
    price: 549,
    priceUnit: "month",
    icon: "🔍",
    badge: "NEW",
    link: "/services/pattern-recognition-engine"
  },
  {
    id: "continuous-optimization-platform",
    name: "Continuous Optimization Platform",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Automatically optimize email performance through A/B testing, machine learning, and real-time adjustments.",
    features: [
      "Automated A/B testing",
      "Performance optimization",
      "Real-time adjustments",
      "Optimization recommendations",
      "Performance tracking",
      "Continuous improvement"
    ],
    benefits: [
      "Improve performance continuously",
      "Data-driven optimization",
      "Eliminate guesswork",
      "Maximize email effectiveness"
    ],
    price: 629,
    priceUnit: "month",
    icon: "📈",
    badge: "NEW",
    link: "/services/continuous-optimization-platform"
  },
  {
    id: "predictive-response-timing",
    name: "Predictive Response Timing",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Predict optimal response timing based on recipient behavior patterns, time zones, and historical engagement data.",
    features: [
      "Response time prediction",
      "Engagement pattern analysis",
      "Time zone optimization",
      "Behavioral insights",
      "Timing recommendations",
      "Performance tracking"
    ],
    benefits: [
      "Increase response rates by 45%",
      "Send emails at optimal times",
      "Respect recipient schedules",
      "Maximize engagement"
    ],
    price: 479,
    priceUnit: "month",
    icon: "⏰",
    badge: "NEW",
    link: "/services/predictive-response-timing"
  },
  {
    id: "learning-analytics-dashboard",
    name: "Learning Analytics Dashboard",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Visualize learning progress, model performance, and improvement trends with comprehensive analytics dashboards.",
    features: [
      "Learning progress tracking",
      "Model performance metrics",
      "Improvement trend analysis",
      "Custom dashboards",
      "Export capabilities",
      "Real-time updates"
    ],
    benefits: [
      "Monitor AI learning",
      "Demonstrate improvement",
      "Identify optimization opportunities",
      "Data-driven decision making"
    ],
    price: 399,
    priceUnit: "month",
    icon: "📊",
    badge: "NEW",
    link: "/services/learning-analytics-dashboard"
  },

  // V345 - Collaboration Hub Services
  {
    id: "email-collaboration-hub",
    name: "Email Collaboration Hub",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Transform email into a collaborative workspace with shared drafts, comments, approvals, and real-time team coordination.",
    features: [
      "Shared email drafts",
      "Collaborative editing",
      "Team comments",
      "Approval workflows",
      "Real-time coordination",
      "Version control"
    ],
    benefits: [
      "Collaborate on emails seamlessly",
      "Reduce email back-and-forth by 60%",
      "Maintain consistent messaging",
      "Accelerate team responses"
    ],
    price: 549,
    priceUnit: "month",
    icon: "🤝",
    badge: "NEW",
    link: "/services/email-collaboration-hub"
  },
  {
    id: "shared-drafts-workspace",
    name: "Shared Drafts Workspace",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Collaborative email drafting with real-time editing, comments, and version control for team-written communications.",
    features: [
      "Real-time collaborative editing",
      "Comment threads",
      "Version history",
      "Draft sharing",
      "Approval workflows",
      "Template integration"
    ],
    benefits: [
      "Write emails as a team",
      "Maintain version control",
      "Streamline review process",
      "Improve email quality"
    ],
    price: 429,
    priceUnit: "month",
    icon: "📝",
    badge: "NEW",
    link: "/services/shared-drafts-workspace"
  },
  {
    id: "team-coordination-platform",
    name: "Team Coordination Platform",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Coordinate team email activities with task assignment, status tracking, and intelligent workload distribution.",
    features: [
      "Task assignment",
      "Status tracking",
      "Workload distribution",
      "Team availability",
      "Coordination alerts",
      "Performance metrics"
    ],
    benefits: [
      "Coordinate team efforts",
      "Balance workload",
      "Prevent duplicate responses",
      "Improve team efficiency by 50%"
    ],
    price: 499,
    priceUnit: "month",
    icon: "👥",
    badge: "NEW",
    link: "/services/team-coordination-platform"
  },
  {
    id: "collaborative-approval-system",
    name: "Collaborative Approval System",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Streamlined approval workflows with multi-level approvals, comments, and tracking for important communications.",
    features: [
      "Multi-level approvals",
      "Approval comments",
      "Status tracking",
      "Escalation rules",
      "Approval analytics",
      "Mobile approvals"
    ],
    benefits: [
      "Accelerate approval cycles",
      "Maintain approval audit trails",
      "Reduce approval delays by 65%",
      "Ensure compliance"
    ],
    price: 479,
    priceUnit: "month",
    icon: "✅",
    badge: "NEW",
    link: "/services/collaborative-approval-system"
  },
  {
    id: "real-time-team-chat",
    name: "Real-Time Team Chat",
    category: "AI Services",
    subcategory: "Email Intelligence",
    description: "Integrated team chat for discussing emails, coordinating responses, and making quick decisions without leaving your email platform.",
    features: [
      "Email-linked discussions",
      "Real-time messaging",
      "File sharing",
      "Decision tracking",
      "Chat history",
      "Integration with email threads"
    ],
    benefits: [
      "Discuss emails in context",
      "Make quick decisions",
      "Reduce meeting needs",
      "Improve team communication"
    ],
    price: 349,
    priceUnit: "month",
    icon: "💬",
    badge: "NEW",
    link: "/services/real-time-team-chat"
  },

  // Additional diversified services
  {
    id: "email-security-guardian",
    name: "Email Security Guardian",
    category: "IT Services",
    subcategory: "Security",
    description: "Advanced email security with phishing detection, malware scanning, and threat intelligence to protect your organization.",
    features: [
      "Phishing detection",
      "Malware scanning",
      "Threat intelligence",
      "Attachment sandboxing",
      "URL protection",
      "Security analytics"
    ],
    benefits: [
      "Block 99.9% of threats",
      "Protect sensitive data",
      "Prevent security breaches",
      "Maintain compliance"
    ],
    price: 799,
    priceUnit: "month",
    icon: "🛡️",
    badge: "SECURITY",
    link: "/services/email-security-guardian"
  }
];

services.push(...newServices);
fs.writeFileSync(servicesFile, JSON.stringify(services, null, 2));
console.log(`Added ${newServices.length} services. Total: ${services.length}`);
