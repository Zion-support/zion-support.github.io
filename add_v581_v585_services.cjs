#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, 'app/data/servicesData.json');
const services = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));

const contactInfo = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown, DE 19709"
};

const newServices = [
  // AI & Intelligence Services (5)
  {
    id: "ai-email-tone-coach",
    title: "AI Email Tone Coach",
    description: "Real-time coaching on email tone, professionalism, and cultural sensitivity with passive-aggressive language detection",
    icon: "🎯",
    features: ["Tone analysis", "Passive-aggressive detection", "Professionalism scoring", "Cultural sensitivity", "Improvement suggestions"],
    pricing: { basic: "149", pro: "399", enterprise: "999" },
    contactInfo,
    href: "/services/ai-email-tone-coach",
    category: "ai",
    popular: true
  },
  {
    id: "ai-email-archive-search",
    title: "AI Email Archive Search",
    description: "Semantic search across email archives with natural language queries and smart filters",
    icon: "🔍",
    features: ["Natural language search", "Semantic matching", "Smart filters", "Date range queries", "Result ranking"],
    pricing: { basic: "179", pro: "449", enterprise: "1149" },
    contactInfo,
    href: "/services/ai-email-archive-search",
    category: "ai",
    popular: true
  },
  {
    id: "ai-email-context-analyzer",
    title: "AI Email Context Analyzer",
    description: "Analyze email context to provide relevant background information and relationship history",
    icon: "📊",
    features: ["Context extraction", "Relationship history", "Previous interactions", "Topic analysis", "Smart summaries"],
    pricing: { basic: "169", pro: "429", enterprise: "1099" },
    contactInfo,
    href: "/services/ai-email-context-analyzer",
    category: "ai",
    popular: false
  },
  {
    id: "ai-email-intent-detector",
    title: "AI Email Intent Detector",
    description: "Automatically detect email intent and suggest appropriate responses and actions",
    icon: "🎯",
    features: ["Intent classification", "Action suggestions", "Response templates", "Priority detection", "Workflow triggers"],
    pricing: { basic: "189", pro: "479", enterprise: "1199" },
    contactInfo,
    href: "/services/ai-email-intent-detector",
    category: "ai",
    popular: false
  },
  {
    id: "ai-email-language-polisher",
    title: "AI Email Language Polisher",
    description: "Enhance email language with grammar correction, style improvements, and clarity optimization",
    icon: "✨",
    features: ["Grammar correction", "Style enhancement", "Clarity optimization", "Vocabulary suggestions", "Readability scoring"],
    pricing: { basic: "129", pro: "329", enterprise: "849" },
    contactInfo,
    href: "/services/ai-email-language-polisher",
    category: "ai",
    popular: false
  },

  // Marketing & Communication Services (5)
  {
    id: "email-signature-optimizer",
    title: "Email Signature Optimizer",
    description: "A/B test email signatures, track engagement, and optimize for conversions with professional templates",
    icon: "✍️",
    features: ["A/B testing", "Engagement tracking", "Conversion optimization", "Professional templates", "Mobile responsive"],
    pricing: { basic: "99", pro: "249", enterprise: "649" },
    contactInfo,
    href: "/services/email-signature-optimizer",
    category: "marketing",
    popular: true
  },
  {
    id: "email-template-marketplace",
    title: "Email Template Marketplace",
    description: "Curated marketplace of professional email templates with performance analytics and ratings",
    icon: "🎨",
    features: ["Template marketplace", "Performance analytics", "User ratings", "Industry-specific", "Custom builder"],
    pricing: { basic: "79", pro: "199", enterprise: "499" },
    contactInfo,
    href: "/services/email-template-marketplace",
    category: "marketing",
    popular: true
  },
  {
    id: "email-campaign-optimizer",
    title: "Email Campaign Optimizer",
    description: "Optimize email marketing campaigns with AI-powered subject lines, content, and send time optimization",
    icon: "📈",
    features: ["Subject line optimization", "Content optimization", "Send time optimization", "A/B testing", "Performance tracking"],
    pricing: { basic: "199", pro: "499", enterprise: "1299" },
    contactInfo,
    href: "/services/email-campaign-optimizer",
    category: "marketing",
    popular: false
  },
  {
    id: "email-segmentation-tool",
    title: "Email Segmentation Tool",
    description: "Advanced email list segmentation with behavioral targeting and dynamic segments",
    icon: "👥",
    features: ["Behavioral segmentation", "Dynamic segments", "Custom rules", "Demographic targeting", "Engagement scoring"],
    pricing: { basic: "149", pro: "379", enterprise: "949" },
    contactInfo,
    href: "/services/email-segmentation-tool",
    category: "marketing",
    popular: false
  },
  {
    id: "email-personalization-engine",
    title: "Email Personalization Engine",
    description: "Personalize email content at scale with dynamic content blocks and behavioral triggers",
    icon: "🎯",
    features: ["Dynamic content", "Behavioral triggers", "Personalization tokens", "Conditional content", "Real-time customization"],
    pricing: { basic: "229", pro: "579", enterprise: "1449" },
    contactInfo,
    href: "/services/email-personalization-engine",
    category: "marketing",
    popular: false
  },

  // Deliverability & Infrastructure Services (5)
  {
    id: "email-blacklist-monitor",
    title: "Email Blacklist Monitor",
    description: "Monitor email blacklist status across 100+ databases with real-time alerts and delisting assistance",
    icon: "🛡️",
    features: ["100+ database monitoring", "Real-time alerts", "Delisting assistance", "Reputation tracking", "Improvement recommendations"],
    pricing: { basic: "179", pro: "449", enterprise: "1129" },
    contactInfo,
    href: "/services/email-blacklist-monitor",
    category: "infrastructure",
    popular: true
  },
  {
    id: "email-deliverability-suite",
    title: "Email Deliverability Suite",
    description: "Comprehensive deliverability optimization with authentication setup, spam testing, and inbox placement",
    icon: "📬",
    features: ["Authentication setup", "Spam testing", "Inbox placement", "Reputation monitoring", "Deliverability reports"],
    pricing: { basic: "249", pro: "649", enterprise: "1599" },
    contactInfo,
    href: "/services/email-deliverability-suite",
    category: "infrastructure",
    popular: false
  },
  {
    id: "email-warmup-service",
    title: "Email Warmup Service",
    description: "Gradually warm up new email domains and IPs to establish sender reputation",
    icon: "🔥",
    features: ["Gradual warmup", "Reputation building", "Volume ramping", "Monitoring", "Best practices"],
    pricing: { basic: "199", pro: "499", enterprise: "1249" },
    contactInfo,
    href: "/services/email-warmup-service",
    category: "infrastructure",
    popular: false
  },
  {
    id: "email-validation-service",
    title: "Email Validation Service",
    description: "Validate email addresses in real-time to reduce bounces and improve deliverability",
    icon: "✓",
    features: ["Real-time validation", "Syntax checking", "Domain verification", "Mailbox verification", "Risk scoring"],
    pricing: { basic: "89", pro: "229", enterprise: "579" },
    contactInfo,
    href: "/services/email-validation-service",
    category: "infrastructure",
    popular: false
  },
  {
    id: "email-dedicated-ip",
    title: "Dedicated IP Management",
    description: "Manage dedicated IP addresses with reputation monitoring and optimization",
    icon: "🌐",
    features: ["Dedicated IP allocation", "Reputation monitoring", "Warmup assistance", "Performance tracking", "IP rotation"],
    pricing: { basic: "299", pro: "749", enterprise: "1899" },
    contactInfo,
    href: "/services/email-dedicated-ip",
    category: "infrastructure",
    popular: false
  },

  // Productivity & Workflow Services (5)
  {
    id: "email-snooze-scheduler",
    title: "Email Snooze & Scheduler",
    description: "Snooze emails and schedule responses for optimal timing with smart reminders",
    icon: "⏰",
    features: ["Email snoozing", "Response scheduling", "Smart reminders", "Priority queues", "Time-based organization"],
    pricing: { basic: "79", pro: "199", enterprise: "499" },
    contactInfo,
    href: "/services/email-snooze-scheduler",
    category: "productivity",
    popular: true
  },
  {
    id: "email-rules-automation",
    title: "Email Rules & Automation",
    description: "Create custom email rules and automations to organize inbox and trigger actions",
    icon: "⚙️",
    features: ["Custom rules", "Automated actions", "Folder organization", "Label management", "Conditional logic"],
    pricing: { basic: "119", pro: "299", enterprise: "749" },
    contactInfo,
    href: "/services/email-rules-automation",
    category: "productivity",
    popular: false
  },
  {
    id: "email-quick-responses",
    title: "Email Quick Responses",
    description: "Pre-built quick response templates for common email scenarios with one-click sending",
    icon: "⚡",
    features: ["Quick response templates", "One-click sending", "Custom templates", "Scenario-based", "Personalization"],
    pricing: { basic: "69", pro: "179", enterprise: "449" },
    contactInfo,
    href: "/services/email-quick-responses",
    category: "productivity",
    popular: false
  },
  {
    id: "email-focus-mode",
    title: "Email Focus Mode",
    description: "Distraction-free email processing with batch processing and focus timers",
    icon: "🎯",
    features: ["Focus timers", "Batch processing", "Distraction blocking", "Pomodoro integration", "Productivity tracking"],
    pricing: { basic: "89", pro: "229", enterprise: "579" },
    contactInfo,
    href: "/services/email-focus-mode",
    category: "productivity",
    popular: false
  },
  {
    id: "email-inbox-zero-coach",
    title: "Email Inbox Zero Coach",
    description: "Coaching and tools to achieve and maintain inbox zero with smart organization strategies",
    icon: "✓",
    features: ["Inbox zero coaching", "Organization strategies", "Batch processing", "Automation setup", "Progress tracking"],
    pricing: { basic: "99", pro: "249", enterprise: "629" },
    contactInfo,
    href: "/services/email-inbox-zero-coach",
    category: "productivity",
    popular: false
  },

  // Analytics & Reporting Services (5)
  {
    id: "email-engagement-analytics",
    title: "Email Engagement Analytics",
    description: "Comprehensive email engagement analytics with open rates, click tracking, and engagement scoring",
    icon: "📊",
    features: ["Open rate tracking", "Click tracking", "Engagement scoring", "Behavioral analysis", "Custom reports"],
    pricing: { basic: "159", pro: "399", enterprise: "999" },
    contactInfo,
    href: "/services/email-engagement-analytics",
    category: "analytics",
    popular: true
  },
  {
    id: "email-response-analytics",
    title: "Email Response Analytics",
    description: "Track and analyze email response times, patterns, and team performance metrics",
    icon: "⏱️",
    features: ["Response time tracking", "Pattern analysis", "Team performance", "SLA monitoring", "Bottleneck identification"],
    pricing: { basic: "139", pro: "349", enterprise: "879" },
    contactInfo,
    href: "/services/email-response-analytics",
    category: "analytics",
    popular: false
  },
  {
    id: "email-sentiment-trends",
    title: "Email Sentiment Trends",
    description: "Track sentiment trends over time with customer satisfaction metrics and alert system",
    icon: "😊",
    features: ["Sentiment tracking", "Trend analysis", "Satisfaction metrics", "Alert system", "Customer health scores"],
    pricing: { basic: "169", pro: "429", enterprise: "1079" },
    contactInfo,
    href: "/services/email-sentiment-trends",
    category: "analytics",
    popular: false
  },
  {
    id: "email-volume-analytics",
    title: "Email Volume Analytics",
    description: "Analyze email volume patterns with forecasting and capacity planning",
    icon: "📈",
    features: ["Volume tracking", "Pattern analysis", "Forecasting", "Capacity planning", "Trend identification"],
    pricing: { basic: "129", pro: "329", enterprise: "829" },
    contactInfo,
    href: "/services/email-volume-analytics",
    category: "analytics",
    popular: false
  },
  {
    id: "email-roi-calculator",
    title: "Email ROI Calculator",
    description: "Calculate email marketing ROI with revenue attribution and conversion tracking",
    icon: "💰",
    features: ["ROI calculation", "Revenue attribution", "Conversion tracking", "Campaign comparison", "Performance benchmarking"],
    pricing: { basic: "149", pro: "379", enterprise: "949" },
    contactInfo,
    href: "/services/email-roi-calculator",
    category: "analytics",
    popular: false
  }
];

services.push(...newServices);
fs.writeFileSync(servicesPath, JSON.stringify(services, null, 2));
console.log(`✅ Added ${newServices.length} new services. Total: ${services.length}`);
