#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, '../app/data/servicesData.json');
const services = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));

const newServices = [
  // V231 Email Intelligence Services
  {
    id: 'v231-sentiment-response-engine',
    title: 'V231 Sentiment Response Engine',
    category: 'ai',
    description: 'AI-powered email response generation that adapts tone and style based on sender emotion analysis',
    price: '$299/month',
    features: ['Emotion detection', 'Tone adaptation', 'Response templates', 'Multi-language support']
  },
  {
    id: 'v232-project-timeline-extractor',
    title: 'V232 Project Timeline Extractor',
    category: 'ai',
    description: 'Automatically extract project milestones, deadlines, and deliverables from email conversations',
    price: '$199/month',
    features: ['Milestone detection', 'Deadline extraction', 'Dependency mapping', 'Timeline visualization']
  },
  {
    id: 'v233-meeting-minutes-generator',
    title: 'V233 Meeting Minutes Generator',
    category: 'ai',
    description: 'Transform email threads into structured meeting minutes with decisions, action items, and attendees',
    price: '$249/month',
    features: ['Decision extraction', 'Action item tracking', 'Attendee identification', 'Agenda generation']
  },
  {
    id: 'v234-vendor-risk-scorer',
    title: 'V234 Vendor Risk Scorer',
    category: 'ai',
    description: 'Analyze vendor communications to assess risk levels and generate compliance scorecards',
    price: '$399/month',
    features: ['Risk assessment', 'Compliance scoring', 'Red flag detection', 'Vendor scorecards']
  },
  {
    id: 'v235-collaboration-hub',
    title: 'V235 Cross-Team Collaboration Hub',
    category: 'ai',
    description: 'Identify cross-functional discussions and suggest relevant team members to join conversations',
    price: '$349/month',
    features: ['Team detection', 'Cross-functional analysis', 'Participant suggestions', 'Knowledge sharing']
  },
  // AI Services
  {
    id: 'ai-content-moderation-platform',
    title: 'AI Content Moderation Platform',
    category: 'ai',
    description: 'Automated content moderation for user-generated content with multi-language support and custom policy enforcement',
    price: '$499/month',
    features: ['Multi-language support', 'Custom policies', 'Real-time moderation', 'Appeal workflow']
  },
  {
    id: 'ai-pricing-optimization-engine',
    title: 'AI Pricing Optimization Engine',
    category: 'ai',
    description: 'Dynamic pricing optimization using ML to maximize revenue while maintaining competitiveness',
    price: '$599/month',
    features: ['Dynamic pricing', 'Competitor analysis', 'Demand forecasting', 'A/B testing']
  },
  {
    id: 'ai-customer-journey-orchestration',
    title: 'AI Customer Journey Orchestration',
    category: 'ai',
    description: 'Orchestrate personalized customer journeys across all touchpoints with real-time decisioning',
    price: '$699/month',
    features: ['Journey mapping', 'Real-time decisions', 'Multi-channel', 'Personalization']
  },
  // IT Services
  {
    id: 'it-service-mesh-platform',
    title: 'IT Service Mesh Platform',
    category: 'it',
    description: 'Enterprise service mesh for microservices with traffic management, security, and observability',
    price: '$799/month',
    features: ['Traffic management', 'mTLS security', 'Observability', 'Load balancing']
  },
  {
    id: 'it-serverless-orchestration',
    title: 'IT Serverless Orchestration',
    category: 'it',
    description: 'Orchestrate serverless functions across multiple cloud providers with unified monitoring',
    price: '$549/month',
    features: ['Multi-cloud', 'Function orchestration', 'Cost optimization', 'Unified monitoring']
  },
  {
    id: 'it-api-gateway-pro',
    title: 'IT API Gateway Pro',
    category: 'it',
    description: 'Advanced API gateway with rate limiting, authentication, and comprehensive analytics',
    price: '$449/month',
    features: ['Rate limiting', 'OAuth2/OIDC', 'API analytics', 'Request transformation']
  },
  // Security Services
  {
    id: 'security-ransomware-protection',
    title: 'Security Ransomware Protection',
    category: 'security',
    description: 'Advanced ransomware protection with behavioral analysis, file backup, and automated recovery',
    price: '$899/month',
    features: ['Behavioral analysis', 'Automated backup', 'Recovery tools', 'Threat intelligence']
  },
  {
    id: 'security-browser-isolation',
    title: 'Security Browser Isolation',
    category: 'security',
    description: 'Isolate web browsing in secure containers to prevent malware and phishing attacks',
    price: '$649/month',
    features: ['Container isolation', 'Phishing protection', 'Zero-trust browsing', 'DLP integration']
  },
  // Data Services
  {
    id: 'data-lakehouse-platform',
    title: 'Data Lakehouse Platform',
    category: 'data',
    description: 'Unified lakehouse architecture combining data lake flexibility with data warehouse performance',
    price: '$1299/month',
    features: ['ACID transactions', 'Schema evolution', 'Time travel', 'Multi-engine support']
  },
  {
    id: 'data-mlops-pipeline',
    title: 'Data MLOps Pipeline',
    category: 'data',
    description: 'End-to-end MLOps platform for model training, deployment, and monitoring at scale',
    price: '$999/month',
    features: ['Model registry', 'Automated training', 'A/B deployment', 'Drift detection']
  },
  // Micro-SaaS Services
  {
    id: 'micro-saas-lightweight-crm',
    title: 'Lightweight CRM for Startups',
    category: 'micro-saas',
    description: 'Simple yet powerful CRM designed for startups and small teams with intuitive interface',
    price: '$49/month',
    features: ['Contact management', 'Deal pipeline', 'Email integration', 'Mobile app']
  },
  {
    id: 'micro-saas-smart-forms',
    title: 'Smart Form Builder',
    category: 'micro-saas',
    description: 'Drag-and-drop form builder with conditional logic, payments, and advanced analytics',
    price: '$39/month',
    features: ['Conditional logic', 'Payment integration', 'Analytics', 'Custom branding']
  },
  {
    id: 'micro-saas-link-analytics',
    title: 'Link Shortener with Analytics',
    category: 'micro-saas',
    description: 'Advanced link shortening with detailed click analytics, UTM tracking, and custom domains',
    price: '$29/month',
    features: ['Custom domains', 'UTM tracking', 'Click analytics', 'QR codes']
  },
  {
    id: 'micro-saas-time-invoicing',
    title: 'Time Tracking & Invoicing',
    category: 'micro-saas',
    description: 'Track time across projects and automatically generate professional invoices',
    price: '$59/month',
    features: ['Time tracking', 'Auto invoicing', 'Expense tracking', 'Client portal']
  },
  {
    id: 'micro-saas-social-proof-widgets',
    title: 'Social Proof Widgets',
    category: 'micro-saas',
    description: 'Display real-time social proof notifications to increase conversions and trust',
    price: '$35/month',
    features: ['Real-time notifications', 'Custom styling', 'A/B testing', 'Analytics']
  },
  {
    id: 'micro-saas-survey-platform',
    title: 'Survey & NPS Platform',
    category: 'micro-saas',
    description: 'Create beautiful surveys with advanced analytics, NPS tracking, and automated insights',
    price: '$69/month',
    features: ['Survey builder', 'NPS tracking', 'Automated insights', 'Integrations']
  },
  {
    id: 'micro-saas-waitlist-launchpad',
    title: 'Waitlist & Launch Platform',
    category: 'micro-saas',
    description: 'Build viral waitlists with referral tracking, leaderboards, and automated email campaigns',
    price: '$79/month',
    features: ['Referral tracking', 'Leaderboards', 'Email campaigns', 'Analytics']
  }
];

// Add new services
services.push(...newServices);

// Save back to file
fs.writeFileSync(servicesPath, JSON.stringify(services, null, 2));
console.log(`✓ Added ${newServices.length} new services. Total: ${services.length}`);
