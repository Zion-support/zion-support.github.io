const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'data', 'servicesData.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown, DE 19709"
};

const additionalServices = [
  {id: "ai-email-personalization-pro", name: "AI Email Personalization Pro", category: "AI Services", description: "Advanced AI personalization that learns recipient preferences and adapts every email for maximum engagement.", price: "$219/month", features: ["Deep learning", "Preference prediction", "Adaptive content", "Behavioral analysis", "Multi-channel sync", "ROI optimization"], icon: "🧬", link: "/services/ai-email-personalization-pro", contactInfo},
  {id: "sentiment-alert-system", name: "Sentiment Alert System", category: "AI Services", description: "Real-time sentiment alerts with escalation rules and automated response suggestions for critical situations.", price: "$149/month", features: ["Real-time alerts", "Escalation rules", "Response suggestions", "Priority scoring", "Team notifications", "Historical tracking"], icon: "🚨", link: "/services/sentiment-alert-system", contactInfo},
  {id: "workflow-integration-hub", name: "Workflow Integration Hub", category: "IT Services", description: "Connect email workflows with 100+ business tools including CRM, project management, and communication platforms.", price: "$279/month", features: ["100+ integrations", "Custom connectors", "API access", "Webhook support", "Data sync", "Automation chains"], icon: "🔗", link: "/services/workflow-integration-hub", contactInfo},
  {id: "template-ab-testing-suite", name: "Template A/B Testing Suite", category: "Micro SaaS", description: "Comprehensive A/B testing for email templates with statistical significance and automated winner selection.", price: "$119/month", features: ["Multi-variant testing", "Statistical analysis", "Auto-winner selection", "Performance tracking", "Sample size calculator", "Detailed reports"], icon: "🧪", link: "/services/template-ab-testing-suite", contactInfo},
  {id: "benchmark-reporting-suite", name: "Benchmark Reporting Suite", category: "Micro SaaS", description: "Generate comprehensive benchmark reports comparing your email performance against industry standards.", price: "$159/month", features: ["Custom reports", "Industry comparison", "Trend visualization", "Export formats", "Scheduled reports", "Executive summaries"], icon: "📋", link: "/services/benchmark-reporting-suite", contactInfo},
  {id: "email-conversion-optimizer", name: "Email Conversion Optimizer", category: "AI Services", description: "AI-powered conversion optimization that analyzes email performance and suggests improvements for higher ROI.", price: "$269/month", features: ["Conversion tracking", "Funnel analysis", "Optimization suggestions", "A/B testing", "Revenue attribution", "Performance forecasting"], icon: "🎯", link: "/services/email-conversion-optimizer", contactInfo},
  {id: "smart-email-scheduler", name: "Smart Email Scheduler", category: "AI Services", description: "AI determines optimal send times based on recipient behavior, timezone, and engagement patterns.", price: "$89/month", features: ["Timezone intelligence", "Behavioral analysis", "Engagement prediction", "Batch scheduling", "Performance tracking", "Auto-optimization"], icon: "⏰", link: "/services/smart-email-scheduler", contactInfo},
  {id: "email-content-optimizer", name: "Email Content Optimizer", category: "AI Services", description: "AI analyzes email content and suggests improvements for clarity, engagement, and conversion.", price: "$139/month", features: ["Content analysis", "Readability scoring", "Engagement tips", "SEO optimization", "A/B testing", "Performance tracking"], icon: "✍️", link: "/services/email-content-optimizer", contactInfo},
  {id: "email-segmentation-pro", name: "Email Segmentation Pro", category: "Micro SaaS", description: "Advanced email segmentation with AI-powered audience grouping and dynamic list management.", price: "$109/month", features: ["AI segmentation", "Dynamic lists", "Behavioral grouping", "Custom criteria", "Auto-updates", "Performance tracking"], icon: "🎯", link: "/services/email-segmentation-pro", contactInfo},
  {id: "email-compliance-checker", name: "Email Compliance Checker", category: "Security Services", description: "Automated compliance checking for GDPR, CAN-SPAM, and other email regulations with real-time alerts.", price: "$179/month", features: ["GDPR compliance", "CAN-SPAM checks", "Real-time alerts", "Audit trails", "Policy enforcement", "Documentation"], icon: "⚖️", link: "/services/email-compliance-checker", contactInfo},
  {id: "email-analytics-ai", name: "Email Analytics AI", category: "AI Services", description: "AI-powered email analytics that provides predictive insights, anomaly detection, and actionable recommendations.", price: "$239/month", features: ["Predictive analytics", "Anomaly detection", "Trend forecasting", "Custom dashboards", "Automated insights", "Export capabilities"], icon: "📊", link: "/services/email-analytics-ai", contactInfo},
  {id: "email-testing-suite", name: "Email Testing Suite", category: "IT Services", description: "Comprehensive email testing across 50+ email clients and devices with detailed rendering reports.", price: "$149/month", features: ["50+ client testing", "Device previews", "Spam testing", "Link validation", "Accessibility checks", "Performance reports"], icon: "🧪", link: "/services/email-testing-suite", contactInfo},
  {id: "email-archive-solution", name: "Email Archive Solution", category: "IT Services", description: "Enterprise email archiving with advanced search, compliance retention, and eDiscovery capabilities.", price: "$199/month", features: ["Unlimited storage", "Advanced search", "Compliance retention", "eDiscovery tools", "Audit trails", "Export capabilities"], icon: "🗄️", link: "/services/email-archive-solution", contactInfo},
];

let added = 0;
const existingIds = new Set(data.map(s => s.id));

for (const svc of additionalServices) {
  if (!existingIds.has(svc.id)) {
    data.push(svc);
    existingIds.add(svc.id);
    added++;
  }
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log("Added " + added + " additional services. Total: " + data.length);
