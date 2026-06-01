const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'data', 'servicesData.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown, DE 19709"
};

const newServices = [
  // V1021 - Email Personalization Services
  {id: "email-personalization-engine", name: "Email Personalization Engine", category: "AI Services", description: "AI personalizes every email based on recipient profile, past interactions, and preferences for maximum engagement.", price: "$179/month", features: ["Recipient profiling", "Dynamic content", "Tone adaptation", "Interest-based personalization", "Engagement scoring", "Best send time analysis"], icon: "🎯", link: "/services/email-personalization-engine", contactInfo},
  {id: "dynamic-email-content", name: "Dynamic Email Content", category: "AI Services", description: "Automatically adapt email content based on recipient behavior, preferences, and interaction history.", price: "$149/month", features: ["Behavioral triggers", "Dynamic sections", "Personalized images", "Custom CTAs", "A/B testing", "Performance tracking"], icon: "🔄", link: "/services/dynamic-email-content", contactInfo},
  {id: "recipient-profiling-ai", name: "Recipient Profiling AI", category: "AI Services", description: "Build comprehensive recipient profiles from interaction history, preferences, and behavioral data.", price: "$199/month", features: ["Auto-profiling", "Preference learning", "Behavior tracking", "Interest extraction", "Engagement scoring", "Profile updates"], icon: "👤", link: "/services/recipient-profiling-ai", contactInfo},
  {id: "personalized-email-campaigns", name: "Personalized Email Campaigns", category: "Micro SaaS", description: "Create hyper-personalized email campaigns that adapt to each recipient for 40% higher engagement.", price: "$249/month", features: ["Campaign personalization", "Segment targeting", "Dynamic content", "Performance optimization", "A/B testing", "ROI tracking"], icon: "📧", link: "/services/personalized-email-campaigns", contactInfo},
  {id: "email-engagement-optimizer", name: "Email Engagement Optimizer", category: "AI Services", description: "Optimize email engagement with AI-powered personalization, timing, and content recommendations.", price: "$169/month", features: ["Engagement prediction", "Send time optimization", "Content recommendations", "Subject line testing", "Performance analytics", "Continuous learning"], icon: "📈", link: "/services/email-engagement-optimizer", contactInfo},

  // V1022 - Email Sentiment Tracker Services
  {id: "email-sentiment-tracker", name: "Email Sentiment Tracker", category: "AI Services", description: "Real-time sentiment analysis across email threads with trend detection, relationship health scoring, and alerts.", price: "$159/month", features: ["Sentiment analysis", "Trend detection", "Relationship health", "Alert system", "Thread tracking", "Emotional tone detection"], icon: "💭", link: "/services/email-sentiment-tracker", contactInfo},
  {id: "relationship-health-monitor", name: "Relationship Health Monitor", category: "AI Services", description: "Monitor and improve business relationships with AI-powered sentiment tracking and health scoring.", price: "$189/month", features: ["Health scoring", "Trend analysis", "Risk alerts", "Improvement suggestions", "Relationship mapping", "Historical tracking"], icon: "❤️", link: "/services/relationship-health-monitor", contactInfo},
  {id: "sentiment-trend-analyzer", name: "Sentiment Trend Analyzer", category: "AI Services", description: "Analyze sentiment trends across email conversations to identify patterns and predict relationship changes.", price: "$139/month", features: ["Trend visualization", "Pattern detection", "Predictive alerts", "Historical analysis", "Comparative reports", "Export capabilities"], icon: "📊", link: "/services/sentiment-trend-analyzer", contactInfo},
  {id: "emotional-intelligence-email", name: "Emotional Intelligence Email", category: "AI Services", description: "AI analyzes emotional tone and suggests empathetic responses to improve communication and relationships.", price: "$179/month", features: ["Emotion detection", "Empathy suggestions", "Tone matching", "Conflict prevention", "Relationship insights", "Communication coaching"], icon: "🧠", link: "/services/emotional-intelligence-email", contactInfo},
  {id: "customer-satisfaction-tracker", name: "Customer Satisfaction Tracker", category: "Micro SaaS", description: "Track customer satisfaction through email sentiment analysis with real-time alerts and trend reporting.", price: "$219/month", features: ["Satisfaction scoring", "Real-time alerts", "Trend tracking", "Customer segments", "Issue detection", "Improvement insights"], icon: "😊", link: "/services/customer-satisfaction-tracker", contactInfo},

  // V1023 - Email Workflow Automation Services
  {id: "email-workflow-automation", name: "Email Workflow Automation", category: "IT Services", description: "Build custom email workflows with triggers, conditions, and automated actions. Save 10+ hours/week.", price: "$299/month", features: ["Visual workflow builder", "Custom triggers", "Conditional logic", "Multi-step actions", "Integration hub", "Performance analytics"], icon: "⚙️", link: "/services/email-workflow-automation", contactInfo},
  {id: "smart-email-routing", name: "Smart Email Routing", category: "IT Services", description: "Automatically route emails to the right team or person based on content, sender, and priority.", price: "$199/month", features: ["Content analysis", "Priority routing", "Team assignment", "Escalation rules", "Performance tracking", "Custom rules"], icon: "🔀", link: "/services/smart-email-routing", contactInfo},
  {id: "email-auto-responder-pro", name: "Email Auto-Responder Pro", category: "AI Services", description: "Intelligent auto-responses that adapt to email content, sender, and context for professional replies.", price: "$149/month", features: ["Context-aware replies", "Custom templates", "Conditional responses", "Scheduling", "Performance tracking", "A/B testing"], icon: "🤖", link: "/services/email-auto-responder-pro", contactInfo},
  {id: "workflow-template-library", name: "Workflow Template Library", category: "IT Services", description: "50+ pre-built email workflow templates for common business scenarios. Customize and deploy in minutes.", price: "$129/month", features: ["50+ templates", "Easy customization", "Best practices", "Industry-specific", "Quick deployment", "Documentation"], icon: "📚", link: "/services/workflow-template-library", contactInfo},
  {id: "email-task-automation", name: "Email Task Automation", category: "IT Services", description: "Automatically create tasks, update CRMs, and trigger actions based on email content and rules.", price: "$229/month", features: ["Task creation", "CRM integration", "Custom actions", "Conditional triggers", "Multi-platform", "Audit trail"], icon: "✅", link: "/services/email-task-automation", contactInfo},

  // V1024 - Email Template Library Services
  {id: "email-template-library", name: "Email Template Library", category: "Micro SaaS", description: "500+ professional email templates with AI customization, A/B testing, and performance tracking.", price: "$99/month", features: ["500+ templates", "AI customization", "A/B testing", "Performance tracking", "Category filtering", "Easy editing"], icon: "📝", link: "/services/email-template-library", contactInfo},
  {id: "custom-template-builder", name: "Custom Template Builder", category: "Micro SaaS", description: "Build custom email templates with drag-and-drop editor, dynamic content, and responsive design.", price: "$149/month", features: ["Drag-and-drop editor", "Dynamic content", "Responsive design", "Brand customization", "Preview tools", "Export options"], icon: "🎨", link: "/services/custom-template-builder", contactInfo},
  {id: "template-performance-analytics", name: "Template Performance Analytics", category: "AI Services", description: "Track template performance with detailed analytics, A/B testing, and optimization recommendations.", price: "$129/month", features: ["Performance tracking", "A/B testing", "Optimization tips", "Comparative analysis", "ROI tracking", "Custom reports"], icon: "📊", link: "/services/template-performance-analytics", contactInfo},
  {id: "industry-template-packs", name: "Industry Template Packs", category: "Micro SaaS", description: "Industry-specific template packs with 50+ templates each for healthcare, finance, tech, retail, and more.", price: "$79/month", features: ["Industry-specific", "50+ templates each", "Best practices", "Compliance-ready", "Regular updates", "Customization"], icon: "🏭", link: "/services/industry-template-packs", contactInfo},
  {id: "template-personalization-ai", name: "Template Personalization AI", category: "AI Services", description: "AI automatically personalizes templates based on recipient data, behavior, and preferences.", price: "$169/month", features: ["Auto-personalization", "Dynamic tokens", "Behavioral triggers", "Preference learning", "Performance optimization", "A/B testing"], icon: "🎯", link: "/services/template-personalization-ai", contactInfo},

  // V1025 - Email Performance Benchmarking Services
  {id: "email-performance-benchmarking", name: "Email Performance Benchmarking", category: "AI Services", description: "Compare email metrics against industry benchmarks and competitors with actionable optimization insights.", price: "$199/month", features: ["Industry benchmarks", "Competitive analysis", "Performance scoring", "Gap analysis", "Optimization tips", "Trend tracking"], icon: "📈", link: "/services/email-performance-benchmarking", contactInfo},
  {id: "email-roi-tracker", name: "Email ROI Tracker", category: "Micro SaaS", description: "Track email campaign ROI with revenue attribution, cost analysis, and profitability optimization.", price: "$249/month", features: ["Revenue tracking", "Cost analysis", "ROI calculation", "Campaign attribution", "Profitability insights", "Custom reports"], icon: "💰", link: "/services/email-roi-tracker", contactInfo},
  {id: "email-analytics-dashboard", name: "Email Analytics Dashboard", category: "Micro SaaS", description: "Comprehensive email analytics dashboard with real-time metrics, trends, and actionable insights.", price: "$179/month", features: ["Real-time metrics", "Trend analysis", "Custom dashboards", "Automated reports", "Alert system", "Export capabilities"], icon: "📊", link: "/services/email-analytics-dashboard", contactInfo},
  {id: "email-deliverability-monitor", name: "Email Deliverability Monitor", category: "IT Services", description: "Monitor email deliverability with inbox placement tracking, spam detection, and authentication checks.", price: "$189/month", features: ["Inbox placement", "Spam detection", "Authentication checks", "Blacklist monitoring", "Deliverability scoring", "Alerts"], icon: "📬", link: "/services/email-deliverability-monitor", contactInfo},
  {id: "email-optimization-consultant", name: "Email Optimization Consultant", category: "AI Services", description: "AI-powered email optimization consultant that analyzes performance and provides actionable recommendations.", price: "$299/month", features: ["Performance analysis", "Optimization tips", "Best practices", "A/B testing", "Continuous improvement", "Custom strategies"], icon: "🎓", link: "/services/email-optimization-consultant", contactInfo},
];

let added = 0;
const existingIds = new Set(data.map(s => s.id));

for (const svc of newServices) {
  if (!existingIds.has(svc.id)) {
    data.push(svc);
    existingIds.add(svc.id);
    added++;
  }
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log("Added " + added + " new services. Total: " + data.length);
