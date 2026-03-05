import Link from 'next/link';
import { Metadata } from 'next';
import ROIImpactEstimator from './components/ROIImpactEstimator';
import SolutionFinder from './components/home/SolutionFinder';
import LaunchReadinessAdvisor from './components/home/LaunchReadinessAdvisor';
import Testimonials from './components/home/Testimonials';
import FeaturedAppGrid from './components/home/FeaturedAppGrid';
import AppCollectionGrid from './components/home/AppCollectionGrid';

type FeaturedApp = {
  name: string;
  href: string;
  category: string;
  description: string;
  icon: string;
};

type ValueHighlight = {
  value: string;
  label: string;
  note: string;
};

type DeliveryStep = {
  title: string;
  description: string;
  duration: string;
};

type SpotlightPillar = {
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: string;
};

type AppCollectionLink = {
  name: string;
  href: string;
};

type AppCollection = {
  title: string;
  description: string;
  icon: string;
  links: AppCollectionLink[];
};

type DifferentiationPoint = {
  title: string;
  description: string;
  icon: string;
};

type InnovationBundle = {
  title: string;
  description: string;
  impact: string;
  href: string;
  cta: string;
  icon: string;
  modules: AppCollectionLink[];
};
type FAQItem = {
  question: string;
  answer: string;
};

type QuickJumpLink = {
  label: string;
  href: string;
  description: string;
};

type PlatformPageSpotlight = {
  title: string;
  href: string;
  description: string;
  tag: string;
};

const featuredApps: FeaturedApp[] = [
  {
    name: 'Zion AI Chatbot Builder',
    href: '/zion-ai-chatbot-builder',
    category: 'Customer Experience',
    description: 'Launch branded AI chat experiences for support, sales, and onboarding.',
    icon: '💬',
  },
  {
    name: 'Zion AI Customer Support Pro',
    href: '/zion-ai-customer-support-pro',
    category: 'Customer Experience',
    description: 'Automate tier-1 support while keeping escalation paths for your team.',
    icon: '🎧',
  },
  {
    name: 'Zion AI Email Assistant',
    href: '/zion-ai-email-assistant',
    category: 'Growth',
    description: 'Draft, summarize, and organize email workflows with AI assistance.',
    icon: '📧',
  },
  {
    name: 'Zion AI Marketing Automation',
    href: '/zion-ai-marketing-automation',
    category: 'Growth',
    description: 'Build campaign automations that adapt to user behavior in real time.',
    icon: '📈',
  },
  {
    name: 'Zion AI Social Media Manager',
    href: '/zion-ai-social-media-manager',
    category: 'Growth',
    description: 'Plan, schedule, and optimize social content with smart recommendations.',
    icon: '📱',
  },
  {
    name: 'Zion AI Sales Predictor',
    href: '/zion-ai-sales-predictor',
    category: 'Growth',
    description: 'Forecast demand and prioritize pipeline opportunities using AI models.',
    icon: '📊',
  },
  {
    name: 'Zion AI Predictive Analytics',
    href: '/zion-ai-predictive-analytics',
    category: 'Decision Intelligence',
    description: 'Turn historical signals into actionable forecasts for strategic planning.',
    icon: '🔮',
  },
  {
    name: 'Zion AI Code Assistant',
    href: '/zion-ai-code-assistant',
    category: 'Engineering',
    description: 'Speed up development cycles with AI code generation and refactoring help.',
    icon: '💻',
  },
  {
    name: 'Zion AI Code Reviewer',
    href: '/zion-ai-code-reviewer',
    category: 'Engineering',
    description: 'Catch quality issues quickly with automated reviews and best-practice checks.',
    icon: '🔍',
  },
  {
    name: 'Zion AI API Tester',
    href: '/zion-ai-api-tester',
    category: 'Engineering',
    description: 'Run API validation scenarios faster with intelligent test suggestions.',
    icon: '🧪',
  },
  {
    name: 'Zion AI Database Optimizer',
    href: '/zion-ai-database-optimizer',
    category: 'Engineering',
    description: 'Optimize query performance, indexing strategy, and data access patterns.',
    icon: '🗄️',
  },
  {
    name: 'Zion DevOps Automation',
    href: '/zion-devops-automation',
    category: 'Engineering',
    description: 'Automate release workflows, environment provisioning, and deployment tasks.',
    icon: '⚙️',
  },
  {
    name: 'Zion Performance Monitor',
    href: '/zion-performance-monitor',
    category: 'Engineering',
    description: 'Track application health and performance trends across critical services.',
    icon: '🚀',
  },
  {
    name: 'Zion Security Shield',
    href: '/zion-security-shield',
    category: 'Security',
    description: 'Protect digital assets with layered defense and continuous monitoring.',
    icon: '🛡️',
  },
  {
    name: 'Zion Cybersecurity Audit',
    href: '/zion-cybersecurity-audit',
    category: 'Security',
    description: 'Assess exposure and harden systems with security-first audit workflows.',
    icon: '🔐',
  },
  {
    name: 'Zion Cloud Vault',
    href: '/zion-cloud-vault',
    category: 'Security',
    description: 'Secure sensitive files with centralized storage, controls, and backup.',
    icon: '☁️',
  },
  {
    name: 'Zion Data Sync',
    href: '/zion-data-sync',
    category: 'Infrastructure',
    description: 'Synchronize business-critical data across tools and operational systems.',
    icon: '🔄',
  },
  {
    name: 'Zion AI Translation Service',
    href: '/zion-ai-translation-service',
    category: 'Productivity',
    description: 'Translate multilingual content at scale while preserving tone and context.',
    icon: '🌐',
  },
  {
    name: 'Zion AI Video Generator',
    href: '/zion-ai-video-generator',
    category: 'Productivity',
    description: 'Create short-form product and campaign videos with AI-powered workflows.',
    icon: '🎥',
  },
  {
    name: 'Zion AI Email Marketing Pro',
    href: '/zion-ai-email-marketing-pro',
    category: 'Growth',
    description: 'Orchestrate personalized lifecycle campaigns with AI-generated content and timing.',
    icon: '📬',
  },
  {
    name: 'Zion AI Lead Scoring',
    href: '/zion-ai-lead-scoring',
    category: 'Growth',
    description:
      'Prioritize high-intent opportunities automatically using behavioral and firmographic signals.',
    icon: '🎯',
  },
  {
    name: 'Zion Smart CRM Automation',
    href: '/zion-smart-crm-automation',
    category: 'Automation',
    description:
      'Automate deal routing, follow-ups, and lifecycle triggers across your CRM workflows.',
    icon: '🧲',
  },
  {
    name: 'Zion Workflow Automation',
    href: '/zion-workflow-automation',
    category: 'Automation',
    description:
      'Connect operational tasks across tools with resilient, event-driven workflow pipelines.',
    icon: '🛠️',
  },
  {
    name: 'Zion AI Document Processor',
    href: '/zion-ai-document-processor',
    category: 'Operations',
    description:
      'Extract structured data from contracts, invoices, and internal documents in seconds.',
    icon: '📄',
  },
  {
    name: 'Zion AI Document Analyzer',
    href: '/zion-ai-document-analyzer',
    category: 'Operations',
    description:
      'Summarize long-form files and surface risk points with intelligent document analysis.',
    icon: '📚',
  },
  {
    name: 'Zion AI Contract Analyzer',
    href: '/zion-ai-contract-analyzer',
    category: 'Compliance',
    description:
      'Review legal terms, obligations, and renewal risks with compliance-aware AI checks.',
    icon: '⚖️',
  },
  {
    name: 'Zion AI Meeting Assistant',
    href: '/zion-ai-meeting-assistant',
    category: 'Operations',
    description:
      'Capture meeting notes, action items, and follow-ups automatically for faster execution.',
    icon: '🗒️',
  },
  {
    name: 'Zion AI Voice Assistant',
    href: '/zion-ai-voice-assistant',
    category: 'Operations',
    description:
      'Deploy natural voice workflows for internal operations, support triage, and task updates.',
    icon: '🎙️',
  },
  {
    name: 'Zion Content Studio',
    href: '/zion-content-studio',
    category: 'Growth',
    description:
      'Produce campaign assets and repurpose content across channels with AI creative pipelines.',
    icon: '🧩',
  },
  {
    name: 'Zion Smart Analytics Dashboard',
    href: '/zion-smart-analytics-dashboard',
    category: 'Decision Intelligence',
    description:
      'Monitor KPI trends, pipeline health, and operational metrics in one executive dashboard.',
    icon: '📈',
  },
  {
    name: 'Zion AI Financial Forecaster',
    href: '/zion-ai-financial-forecaster',
    category: 'Decision Intelligence',
    description:
      'Project revenue, cash-flow scenarios, and margin outcomes with AI forecasting models.',
    icon: '💹',
  },
  {
    name: 'Zion AI CRM Optimizer',
    href: '/zion-ai-crm-optimizer',
    category: 'Growth',
    description:
      'Improve pipeline quality with cleaner CRM data, smarter scoring, and automated updates.',
    icon: '🗂️',
  },
  {
    name: 'Zion Email Automation',
    href: '/zion-email-automation',
    category: 'Growth',
    description:
      'Automate campaign sequences, follow-up timing, and lifecycle touchpoints across channels.',
    icon: '✉️',
  },
  {
    name: 'Zion Social Scheduler',
    href: '/zion-social-scheduler',
    category: 'Growth',
    description:
      'Schedule multi-channel social campaigns with calendar-based planning and content reuse.',
    icon: '📅',
  },
  {
    name: 'Zion Lead Magnet',
    href: '/zion-lead-magnet',
    category: 'Growth',
    description:
      'Capture inbound demand with AI-assisted lead magnets, forms, and nurture handoff flows.',
    icon: '🧲',
  },
  {
    name: 'Zion Project Master',
    href: '/zion-project-master',
    category: 'Operations',
    description:
      'Coordinate execution with project planning, milestone tracking, and delivery visibility.',
    icon: '📋',
  },
  {
    name: 'Zion Invoice Genius',
    href: '/zion-invoice-genius',
    category: 'Operations',
    description:
      'Streamline invoice generation, reconciliation, and collections with automation-first flows.',
    icon: '🧾',
  },
  {
    name: 'Zion Smart Inventory Manager',
    href: '/zion-smart-inventory-manager',
    category: 'Operations',
    description:
      'Track stock levels, replenish intelligently, and reduce supply-side interruptions.',
    icon: '📦',
  },
  {
    name: 'Zion Smart Expense Tracker',
    href: '/zion-smart-expense-tracker',
    category: 'Operations',
    description:
      'Capture and categorize expenses automatically with policy-aware, audit-friendly controls.',
    icon: '💼',
  },
  {
    name: 'Zion AI Recruitment Pro',
    href: '/zion-ai-recruitment-pro',
    category: 'Operations',
    description:
      'Accelerate hiring with AI-assisted candidate screening, interview notes, and coordination.',
    icon: '🧑‍💼',
  },
  {
    name: 'Zion Compliance Manager',
    href: '/zion-compliance-manager',
    category: 'Compliance',
    description:
      'Centralize policy workflows, evidence tracking, and compliance reporting for audits.',
    icon: '✅',
  },
  {
    name: 'Zion AI Fraud Detector',
    href: '/zion-ai-fraud-detector',
    category: 'Security',
    description:
      'Detect suspicious activity patterns early with adaptive AI-powered fraud monitoring.',
    icon: '🚨',
  },
  {
    name: 'Zion AI Knowledge Base',
    href: '/zion-ai-knowledge-base',
    category: 'Customer Experience',
    description:
      'Build intelligent, searchable knowledge bases that learn from user queries and surface relevant answers instantly.',
    icon: '📖',
  },
  {
    name: 'Zion AI Sentiment Analyzer',
    href: '/zion-ai-customer-sentiment-tracker',
    category: 'Decision Intelligence',
    description:
      'Analyze customer sentiment across support tickets, reviews, and social channels in real time.',
    icon: '🧠',
  },
  {
    name: 'Zion AI Report Generator',
    href: '/zion-ai-report-generator',
    category: 'Productivity',
    description:
      'Generate executive reports, investor updates, and team summaries from structured data automatically.',
    icon: '📑',
  },
  {
    name: 'Zion AI Data Pipeline',
    href: '/zion-ai-data-pipeline',
    category: 'Infrastructure',
    description:
      'Build, monitor, and orchestrate ETL pipelines with AI-optimized scheduling and error recovery.',
    icon: '🔗',
  },
  {
    name: 'Zion AI Quality Assurance',
    href: '/zion-ai-quality-assurance',
    category: 'Engineering',
    description:
      'Automate regression testing and QA cycles with AI-driven test generation and coverage analysis.',
    icon: '🧪',
  },
  {
    name: 'Zion AI Onboarding Pro',
    href: '/zion-ai-onboarding-pro',
    category: 'Customer Experience',
    description:
      'Create personalized onboarding flows that adapt to user behavior and accelerate time-to-value.',
    icon: '🚀',
  },
  {
    name: 'Zion AI Survey Builder',
    href: '/zion-ai-survey-builder',
    category: 'Growth',
    description:
      'Design, deploy, and analyze surveys with AI-generated questions and real-time response insights.',
    icon: '📝',
  },
  {
    name: 'Zion AI Risk Assessor',
    href: '/zion-ai-risk-assessor',
    category: 'Compliance',
    description:
      'Assess and monitor operational, financial, and regulatory risks with continuous AI-powered scoring.',
    icon: '⚠️',
  },
  {
    name: 'Zion AI Help Desk',
    href: '/zion-ai-help-desk',
    category: 'Customer Experience',
    description:
      'Full-service AI help desk with smart ticket routing, auto-responses, and escalation management.',
    icon: '🎫',
  },
  {
    name: 'Zion AI Content Moderator',
    href: '/zion-ai-content-moderator',
    category: 'Security',
    description:
      'Monitor and moderate user-generated content with AI-powered policy enforcement and review queues.',
    icon: '🛡️',
  },
  {
    name: 'Zion AI Pricing Optimizer',
    href: '/zion-ai-price-optimizer',
    category: 'Growth',
    description:
      'Optimize pricing strategies dynamically with AI-driven demand analysis and competitor benchmarking.',
    icon: '💲',
  },
  {
    name: 'Zion AI Accessibility Checker',
    href: '/zion-ai-accessibility-checker',
    category: 'Engineering',
    description:
      'Scan web applications for WCAG compliance issues and generate AI-powered remediation guides.',
    icon: '♿',
  },
  {
    name: 'Zion AI Image Generator',
    href: '/zion-ai-image-generator',
    category: 'Productivity',
    description:
      'Create on-brand product images, social assets, and campaign visuals with customizable AI models.',
    icon: '🎨',
  },
  {
    name: 'Zion AI Notification Hub',
    href: '/zion-ai-notification-hub',
    category: 'Operations',
    description:
      'Centralize multi-channel notifications with smart prioritization, batching, and delivery optimization.',
    icon: '🔔',
  },
  {
    name: 'Zion AI Talent Analytics',
    href: '/zion-ai-talent-analytics',
    category: 'Operations',
    description:
      'Track team performance, skill gaps, and retention signals with AI-powered workforce insights.',
    icon: '👥',
  },
  {
    name: 'Zion AI SEO Optimizer',
    href: '/zion-ai-seo-optimizer',
    category: 'Growth',
    description:
      'Optimize search visibility, content structure, and technical SEO with AI-driven recommendations.',
    icon: '🔍',
  },
  {
    name: 'Zion AI Predictive Maintenance',
    href: '/zion-ai-predictive-maintenance',
    category: 'Operations',
    description:
      'Predict equipment failures and schedule maintenance before downtime impacts operations.',
    icon: '🔧',
  },
  {
    name: 'Zion AI Supply Chain Optimizer',
    href: '/zion-ai-supply-chain-optimizer',
    category: 'Operations',
    description:
      'Optimize inventory, logistics, and procurement with AI-powered demand and supply forecasting.',
    icon: '📦',
  },
  {
    name: 'Zion AI Website Analyzer',
    href: '/zion-ai-website-analyzer',
    category: 'Engineering',
    description:
      'Audit site performance, accessibility, and SEO with automated scans and actionable reports.',
    icon: '🌐',
  },
  {
    name: 'Zion AI Meeting Transcriber',
    href: '/zion-ai-meeting-transcriber',
    category: 'Operations',
    description:
      'Transcribe meetings in real time with speaker identification and searchable archives.',
    icon: '📝',
  },
  {
    name: 'Zion AI Accounting Assistant',
    href: '/zion-ai-accounting-assistant',
    category: 'Operations',
    description:
      'Automate bookkeeping, reconciliation, and financial reporting with AI-assisted workflows.',
    icon: '📒',
  },
  {
    name: 'Zion AI Image Recognition',
    href: '/zion-ai-image-recognition',
    category: 'Productivity',
    description:
      'Accelerate creative production with AI-assisted design, visual analysis, and content creation.',
    icon: '🖼️',
  },
  {
    name: 'Zion AI Data Visualizer',
    href: '/zion-ai-data-visualizer',
    category: 'Decision Intelligence',
    description:
      'Transform raw data into actionable intelligence with real-time dashboards and predictive models.',
    icon: '📊',
  },
  {
    name: 'Zion AI Energy Manager',
    href: '/zion-ai-energy-manager',
    category: 'Operations',
    description:
      'Optimize energy consumption and asset performance with AI-driven demand forecasting.',
    icon: '⚡',
  },
  {
    name: 'Zion AI Scheduling Assistant',
    href: '/zion-ai-scheduling-assistant',
    category: 'Operations',
    description:
      'Automate appointment scheduling, resource allocation, and calendar coordination across teams.',
    icon: '📅',
  },
  {
    name: 'Zion AI Form Builder',
    href: '/zion-ai-form-builder',
    category: 'Growth',
    description:
      'Create smart forms with AI-powered validation, conditional logic, and seamless CRM handoff.',
    icon: '📋',
  },
  {
    name: 'Zion AI Video Editor',
    href: '/zion-ai-video-editor',
    category: 'Productivity',
    description:
      'Edit and produce video content faster with AI-assisted trimming, captions, and effects.',
    icon: '🎬',
  },
];

const spotlightPillars: SpotlightPillar[] = [
  {
    title: 'AI App Suite',
    description: 'Production-ready AI apps for growth, operations, and customer experience.',
    href: '/solutions',
    cta: 'Explore solutions',
    icon: '🤖',
  },
  {
    title: 'Engineering Services',
    description: 'AI, cloud, cybersecurity, and full-stack development from expert teams.',
    href: '/services',
    cta: 'View services',
    icon: '⚙️',
  },
  {
    title: 'Security & Compliance',
    description: 'Security-focused products to protect systems, data, and business continuity.',
    href: '/it-services/cybersecurity-audit',
    cta: 'Security audit',
    icon: '🔒',
  },
  {
    title: 'Scale-Ready Delivery',
    description: 'Architecture, engineering, and monitoring capabilities built for scale.',
    href: '/pricing',
    cta: 'See plans',
    icon: '📦',
  },
];

const appCollections: AppCollection[] = [
  {
    title: 'Customer & Growth',
    description: 'Improve conversion, customer support, and campaign execution with AI-powered flows.',
    icon: '📣',
    links: [
      { name: 'AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
      { name: 'AI Customer Support Pro', href: '/zion-ai-customer-support-pro' },
      { name: 'AI Knowledge Base', href: '/zion-ai-knowledge-base' },
      { name: 'AI Help Desk', href: '/zion-ai-help-desk' },
      { name: 'AI Onboarding Pro', href: '/zion-ai-onboarding-pro' },
      { name: 'AI Email Assistant', href: '/zion-ai-email-assistant' },
      { name: 'AI Email Marketing Pro', href: '/zion-ai-email-marketing-pro' },
      { name: 'AI Lead Scoring', href: '/zion-ai-lead-scoring' },
      { name: 'AI Marketing Automation', href: '/zion-ai-marketing-automation' },
      { name: 'AI Social Media Manager', href: '/zion-ai-social-media-manager' },
      { name: 'AI Sales Predictor', href: '/zion-ai-sales-predictor' },
      { name: 'AI CRM Optimizer', href: '/zion-ai-crm-optimizer' },
      { name: 'AI Pricing Optimizer', href: '/zion-ai-price-optimizer' },
      { name: 'AI Survey Builder', href: '/zion-ai-survey-builder' },
      { name: 'AI SEO Optimizer', href: '/zion-ai-seo-optimizer' },
      { name: 'AI Form Builder', href: '/zion-ai-form-builder' },
      { name: 'Email Automation', href: '/zion-email-automation' },
      { name: 'Social Scheduler', href: '/zion-social-scheduler' },
      { name: 'Lead Magnet', href: '/zion-lead-magnet' },
    ],
  },
  {
    title: 'Engineering & DevOps',
    description: 'Increase software velocity, quality, and release confidence across teams.',
    icon: '🧠',
    links: [
      { name: 'AI Code Assistant', href: '/zion-ai-code-assistant' },
      { name: 'AI Code Reviewer', href: '/zion-ai-code-reviewer' },
      { name: 'AI API Tester', href: '/zion-ai-api-tester' },
      { name: 'AI Database Optimizer', href: '/zion-ai-database-optimizer' },
      { name: 'AI Quality Assurance', href: '/zion-ai-quality-assurance' },
      { name: 'AI Accessibility Checker', href: '/zion-ai-accessibility-checker' },
      { name: 'AI Website Analyzer', href: '/zion-ai-website-analyzer' },
      { name: 'DevOps Automation', href: '/zion-devops-automation' },
      { name: 'Performance Monitor', href: '/zion-performance-monitor' },
      { name: 'Workflow Automation', href: '/zion-workflow-automation' },
    ],
  },
  {
    title: 'Security & Infrastructure',
    description: 'Protect operations and harden delivery with security-first architecture.',
    icon: '🛡️',
    links: [
      { name: 'Security Shield', href: '/zion-security-shield' },
      { name: 'Cybersecurity Audit', href: '/zion-cybersecurity-audit' },
      { name: 'Cloud Vault', href: '/zion-cloud-vault' },
      { name: 'Data Sync', href: '/zion-data-sync' },
      { name: 'AI Data Pipeline', href: '/zion-ai-data-pipeline' },
      { name: 'AI Content Moderator', href: '/zion-ai-content-moderator' },
      { name: 'Compliance Manager', href: '/zion-compliance-manager' },
      { name: 'AI Fraud Detector', href: '/zion-ai-fraud-detector' },
      { name: 'AI Predictive Analytics', href: '/zion-ai-predictive-analytics' },
      { name: 'AI Translation Service', href: '/zion-ai-translation-service' },
    ],
  },
  {
    title: 'Operations & Automation',
    description: 'Streamline documents, meetings, and CRM handoffs with always-on AI workflows.',
    icon: '⚙️',
    links: [
      { name: 'Smart CRM Automation', href: '/zion-smart-crm-automation' },
      { name: 'AI Document Processor', href: '/zion-ai-document-processor' },
      { name: 'AI Document Analyzer', href: '/zion-ai-document-analyzer' },
      { name: 'AI Contract Analyzer', href: '/zion-ai-contract-analyzer' },
      { name: 'AI Meeting Assistant', href: '/zion-ai-meeting-assistant' },
      { name: 'AI Meeting Transcriber', href: '/zion-ai-meeting-transcriber' },
      { name: 'AI Voice Assistant', href: '/zion-ai-voice-assistant' },
      { name: 'AI Notification Hub', href: '/zion-ai-notification-hub' },
      { name: 'AI Talent Analytics', href: '/zion-ai-talent-analytics' },
      { name: 'AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer' },
      { name: 'AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance' },
      { name: 'Content Studio', href: '/zion-content-studio' },
      { name: 'Project Master', href: '/zion-project-master' },
      { name: 'Invoice Genius', href: '/zion-invoice-genius' },
      { name: 'Smart Inventory Manager', href: '/zion-smart-inventory-manager' },
      { name: 'Smart Expense Tracker', href: '/zion-smart-expense-tracker' },
      { name: 'AI Recruitment Pro', href: '/zion-ai-recruitment-pro' },
      { name: 'AI Scheduling Assistant', href: '/zion-ai-scheduling-assistant' },
    ],
  },
  {
    title: 'Finance & Risk',
    description: 'Improve financial predictability and reduce risk with AI-first controls.',
    icon: '💳',
    links: [
      { name: 'AI Financial Forecaster', href: '/zion-ai-financial-forecaster' },
      { name: 'AI Accounting Assistant', href: '/zion-ai-accounting-assistant' },
      { name: 'AI Fraud Detector', href: '/zion-ai-fraud-detector' },
      { name: 'AI Risk Assessor', href: '/zion-ai-risk-assessor' },
      { name: 'Compliance Manager', href: '/zion-compliance-manager' },
      { name: 'Smart Expense Tracker', href: '/zion-smart-expense-tracker' },
      { name: 'Invoice Genius', href: '/zion-invoice-genius' },
      { name: 'AI Predictive Analytics', href: '/zion-ai-predictive-analytics' },
    ],
  },
  {
    title: 'Productivity & Content',
    description: 'Create, translate, and distribute content at scale with AI-assisted workflows.',
    icon: '✨',
    links: [
      { name: 'AI Report Generator', href: '/zion-ai-report-generator' },
      { name: 'AI Data Visualizer', href: '/zion-ai-data-visualizer' },
      { name: 'AI Image Generator', href: '/zion-ai-image-generator' },
      { name: 'AI Image Recognition', href: '/zion-ai-image-recognition' },
      { name: 'AI Video Generator', href: '/zion-ai-video-generator' },
      { name: 'AI Video Editor', href: '/zion-ai-video-editor' },
      { name: 'AI Translation Service', href: '/zion-ai-translation-service' },
      { name: 'Content Studio', href: '/zion-content-studio' },
      { name: 'AI Sentiment Analyzer', href: '/zion-ai-customer-sentiment-tracker' },
      { name: 'AI SEO Optimizer', href: '/zion-ai-seo-optimizer' },
      { name: 'AI Meeting Transcriber', href: '/zion-ai-meeting-transcriber' },
    ],
  },
  {
    title: 'Supply Chain & Manufacturing',
    description: 'Optimize production, logistics, and maintenance with AI-driven operations.',
    icon: '🏭',
    links: [
      { name: 'AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer' },
      { name: 'AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance' },
      { name: 'AI Energy Manager', href: '/zion-ai-energy-manager' },
      { name: 'Smart Inventory Manager', href: '/zion-smart-inventory-manager' },
      { name: 'AI Data Pipeline', href: '/zion-ai-data-pipeline' },
      { name: 'Supply Chain Optimizer', href: '/supply-chain-optimizer' },
    ],
  },
];

const platformPages: PlatformPageSpotlight[] = [
  {
    title: 'AI Services Hub',
    href: '/ai-services',
    description: 'Explore AI solutions for process automation, document processing, and intelligent workflows.',
    tag: 'Services',
  },
  {
    title: 'AI Process Automation',
    href: '/ai-services/process-automation',
    description: 'Automate repetitive workflows with AI-powered process orchestration and intelligent routing.',
    tag: 'AI Services',
  },
  {
    title: 'AI Energy Management',
    href: '/ai-services/energy-management',
    description: 'Optimize energy consumption and asset performance with AI-driven demand forecasting.',
    tag: 'AI Services',
  },
  {
    title: 'Micro SaaS Services Hub',
    href: '/micro-saas-services',
    description: 'Browse packaged micro-SaaS services and deployable product paths.',
    tag: 'Collection',
  },
  {
    title: 'Micro SaaS: AI Content Generator',
    href: '/micro-saas-services/ai-content-generator',
    description: 'Launch campaign-ready content workflows with reusable AI automation.',
    tag: 'Micro SaaS',
  },
  {
    title: 'Micro SaaS: AI Analytics Dashboard',
    href: '/micro-saas-services/ai-analytics-dashboard',
    description: 'Track marketing and operational outcomes in a lightweight dashboard package.',
    tag: 'Micro SaaS',
  },
  {
    title: 'Micro SaaS: AI Lead Generation',
    href: '/micro-saas-services/ai-lead-generation',
    description: 'Capture, qualify, and route leads faster with AI-assisted intake flows.',
    tag: 'Micro SaaS',
  },
  {
    title: 'Supply Chain Optimizer',
    href: '/supply-chain-optimizer',
    description: 'Improve fulfillment planning and reduce bottlenecks across supply workflows.',
    tag: 'Industry',
  },
  {
    title: 'Ecommerce Analytics Pro',
    href: '/ecommerce-analytics-pro',
    description: 'Understand conversion behavior and optimize storefront performance.',
    tag: 'Industry',
  },
  {
    title: 'Property Management AI',
    href: '/property-management-ai',
    description: 'Automate property operations, tenant communication, and reporting cycles.',
    tag: 'Industry',
  },
  {
    title: 'Medical Records Manager',
    href: '/medical-records-manager',
    description: 'Support secure records workflows with faster retrieval and organization.',
    tag: 'Industry',
  },
  {
    title: 'Legal Document Manager',
    href: '/legal-document-manager',
    description: 'Manage legal documentation workflows with centralized AI-assisted operations.',
    tag: 'Industry',
  },
  {
    title: 'Online Learning Platform',
    href: '/online-learning-platform',
    description: 'Scale digital training experiences with personalized content delivery.',
    tag: 'Industry',
  },
  {
    title: 'IT Services: Cybersecurity Audit',
    href: '/it-services/cybersecurity-audit',
    description: 'Explore security audit services tailored for operational resilience.',
    tag: 'IT Services',
  },
  {
    title: 'AI Recruiting Platform',
    href: '/zion-ai-recruitment-pro',
    description: 'Accelerate hiring with AI-assisted candidate screening and intelligent matching.',
    tag: 'Talent',
  },
  {
    title: 'AI Talent Analytics',
    href: '/zion-ai-talent-analytics',
    description: 'Track team performance, skill gaps, and retention with AI-powered insights.',
    tag: 'Talent',
  },
  {
    title: 'IT Services: Cloud Migration',
    href: '/it-services/cloud-migration',
    description: 'Plan and execute cloud migration with minimal disruption.',
    tag: 'IT Services',
  },
  {
    title: 'AI Services Hub',
    href: '/ai-services',
    description: 'Explore AI solutions for process automation, content generation, and business intelligence.',
    tag: 'AI Services',
  },
  {
    title: 'AI Content Generation',
    href: '/ai-services/content-generation',
    description: 'Scale content creation with AI-powered writing, imagery, and campaign workflows.',
    tag: 'AI Services',
  },
  {
    title: 'AI Business Intelligence',
    href: '/ai-services/business-intelligence',
    description: 'Turn data into actionable insights with AI-driven analytics and reporting.',
    tag: 'AI Services',
  },
  {
    title: 'AI Supply Chain',
    href: '/ai-services/supply-chain',
    description: 'Optimize logistics, procurement, and inventory with AI forecasting.',
    tag: 'AI Services',
  },
  {
    title: 'AI Predictive Maintenance',
    href: '/ai-services/predictive-maintenance',
    description: 'Reduce downtime with AI-powered equipment failure prediction.',
    tag: 'AI Services',
  },
  {
    title: 'Zion AI SEO Optimizer',
    href: '/zion-ai-seo-optimizer',
    description: 'Improve search rankings and visibility with AI-driven SEO optimization.',
    tag: 'Product',
  },
  {
    title: 'Cybersecurity Services',
    href: '/cybersecurity',
    description: 'End-to-end security audits, penetration testing, and compliance programs.',
    tag: 'IT Services',
  },
  {
    title: 'Data Analytics',
    href: '/data-analytics',
    description: 'Business intelligence, real-time dashboards, and predictive modeling.',
    tag: 'IT Services',
  },
  {
    title: 'Blockchain Development',
    href: '/blockchain-development',
    description: 'Smart contracts, dApps, and blockchain integration for enterprise trust.',
    tag: 'Web3',
  },
  {
    title: 'Workflow Automation',
    href: '/workflow-automation',
    description: 'Connect operational tasks across tools with event-driven workflow pipelines.',
    tag: 'Automation',
  },
  {
    title: 'AI Strategy Consulting',
    href: '/consultation',
    description: 'Align AI initiatives with business goals through expert strategy sessions.',
    tag: 'Consulting',
  },
  {
    title: 'Specialized Services',
    href: '/specialized-services',
    description: 'AI intelligence combined with practical engineering for real business challenges.',
    tag: 'Services',
  },
  {
    title: 'AI Document Processing',
    href: '/ai-services/document-processing',
    description: 'Extract, classify, and process documents at scale with AI-powered workflows.',
    tag: 'AI Services',
  },
  {
    title: 'AI Fraud Detection',
    href: '/ai-services/fraud-detection',
    description: 'Detect and prevent fraud with real-time AI monitoring and anomaly detection.',
    tag: 'AI Services',
  },
  {
    title: 'AI HR Analytics',
    href: '/ai-services/hr-analytics',
    description: 'Workforce insights, retention analytics, and talent pipeline optimization.',
    tag: 'AI Services',
  },
  {
    title: 'AI Marketing Automation',
    href: '/ai-services/marketing-automation',
    description: 'Scale campaign execution with AI-driven personalization and automation.',
    tag: 'AI Services',
  },
  {
    title: 'AI Customer Experience',
    href: '/ai-services/customer-experience',
    description: 'Enhance customer journeys with AI-powered support and engagement tools.',
    tag: 'AI Services',
  },
  {
    title: 'AI Quality Assurance',
    href: '/ai-services/quality-assurance',
    description: 'Automate testing, regression, and quality checks with AI-driven workflows.',
    tag: 'AI Services',
  },
  {
    title: 'AI Research & Development',
    href: '/ai-services/document-processing',
    description: 'Extract insights from research documents, patents, and trial data with AI analysis.',
    tag: 'AI Services',
  },
  {
    title: 'Mining & Resources Operations',
    href: '/supply-chain-optimizer',
    description: 'Optimize extraction workflows, predictive maintenance, and supply chain for natural resources.',
    tag: 'Industry',
  },
  {
    title: 'Telecommunications Solutions',
    href: '/solutions',
    description: 'Network optimization, predictive maintenance, and AI-powered customer support for telecom operators.',
    tag: 'Industry',
  },
  {
    title: 'Automotive & Mobility Operations',
    href: '/supply-chain-optimizer',
    description: 'Supply chain, quality assurance, and fleet optimization for automotive and mobility companies.',
    tag: 'Industry',
  },
  {
    title: 'Aerospace & Defense Solutions',
    href: '/solutions',
    description: 'Secure documentation, compliance, and predictive maintenance for aerospace and defense operations.',
    tag: 'Industry',
  },
  {
    title: 'Maritime & Shipping Operations',
    href: '/supply-chain-optimizer',
    description: 'Fleet optimization, port logistics, and cargo forecasting for maritime and shipping companies.',
    tag: 'Industry',
  },
  {
    title: 'Food & Beverage Solutions',
    href: '/supply-chain-optimizer',
    description: 'Demand forecasting, inventory optimization, and compliance for food and beverage distributors.',
    tag: 'Industry',
  },
  {
    title: 'Oil & Gas Operations',
    href: '/solutions',
    description: 'Predictive maintenance, compliance automation, and asset optimization for oil and gas operations.',
    tag: 'Industry',
  },
  {
    title: 'Banking & Capital Markets Solutions',
    href: '/solutions',
    description: 'Fraud detection, AML, risk assessment, and regulatory compliance for banking and capital markets.',
    tag: 'Industry',
  },
  {
    title: 'Environmental & Waste Management',
    href: '/solutions',
    description: 'ESG reporting, emissions tracking, waste optimization, and sustainability compliance workflows.',
    tag: 'Industry',
  },
  {
    title: 'Gaming & Esports Solutions',
    href: '/solutions',
    description: 'Content moderation, fraud detection, player analytics, and community management for gaming platforms.',
    tag: 'Industry',
  },
  {
    title: 'Renewable Energy & Cleantech',
    href: '/ai-services/energy-management',
    description: 'Grid optimization, asset forecasting, and sustainability reporting for renewable energy operations.',
    tag: 'Industry',
  },
  {
    title: 'Sports & Fitness Solutions',
    href: '/solutions',
    description: 'Member engagement, retention analytics, and personalized recommendations for gyms and wellness platforms.',
    tag: 'Industry',
  },
  {
    title: 'Consumer Goods & CPG',
    href: '/supply-chain-optimizer',
    description: 'Demand forecasting, retail execution, and trade promotion analytics for consumer packaged goods.',
    tag: 'Industry',
  },
  {
    title: 'Transportation & Fleet Solutions',
    href: '/supply-chain-optimizer',
    description: 'Route optimization, driver scheduling, predictive maintenance, and demand forecasting for fleet operations.',
    tag: 'Industry',
  },
  {
    title: 'Marketing & Advertising Solutions',
    href: '/zion-ai-marketing-automation',
    description: 'Campaign automation, creative analytics, ad spend optimization, and ROI measurement for marketing teams.',
    tag: 'Industry',
  },
  {
    title: 'Chemicals & Materials Solutions',
    href: '/supply-chain-optimizer',
    description: 'Supply chain optimization, quality control, batch traceability, and sustainability compliance for chemical and materials manufacturers.',
    tag: 'Industry',
  },
  {
    title: 'Electronics & Semiconductors Solutions',
    href: '/supply-chain-optimizer',
    description: 'Yield optimization, predictive maintenance, quality assurance, and supply chain visibility for electronics and semiconductor operations.',
    tag: 'Industry',
  },
  {
    title: 'Space & Satellite Solutions',
    href: '/solutions',
    description: 'Satellite health monitoring, ground station optimization, orbital analytics, and mission planning for space operations.',
    tag: 'Industry',
  },
  {
    title: 'Textiles & Apparel Solutions',
    href: '/supply-chain-optimizer',
    description: 'Demand forecasting, raw material sourcing, inventory optimization, and sustainability compliance for textile and apparel manufacturers.',
    tag: 'Industry',
  },
  {
    title: 'Veterinary & Animal Health Solutions',
    href: '/solutions',
    description: 'Appointment scheduling, medical records, inventory management, and client communications for veterinary clinics.',
    tag: 'Industry',
  },
  {
    title: 'Home Services & Contractors Solutions',
    href: '/supply-chain-optimizer',
    description: 'Route optimization, technician scheduling, job dispatching, and inventory for HVAC, plumbing, and home improvement contractors.',
    tag: 'Industry',
  },
  {
    title: 'Accounting & Tax Services Solutions',
    href: '/zion-ai-accounting-assistant',
    description: 'Document processing, bookkeeping automation, invoicing, and compliance workflows for accounting firms and tax preparers.',
    tag: 'Industry',
  },
  {
    title: 'Wholesale & Distribution Solutions',
    href: '/supply-chain-optimizer',
    description: 'Demand forecasting, warehouse optimization, order fulfillment, and B2B analytics for wholesalers and distributors.',
    tag: 'Industry',
  },
];

const valueHighlights: ValueHighlight[] = [
  {
    value: `${featuredApps.length}+`,
    label: 'Featured app routes',
    note: 'Verified links to active product pages',
  },
  {
    value: `${appCollections.length}`,
    label: 'Solution tracks',
    note: 'Cross-functional paths for growth, engineering, security, and operations',
  },
  {
    value: '48h',
    label: 'Typical discovery kickoff',
    note: 'Fast intake and roadmap alignment',
  },
  {
    value: 'Enterprise',
    label: 'Delivery readiness',
    note: 'Security-first architecture and support',
  },
];

const differentiationPoints: DifferentiationPoint[] = [
  {
    title: 'Operationally Grounded',
    description:
      'Every app and service page is mapped to practical business workflows, not generic demos.',
    icon: '🧭',
  },
  {
    title: 'Integration-Ready',
    description:
      'We design for existing systems, data pipelines, and team handoffs from day one.',
    icon: '🔌',
  },
  {
    title: 'Secure by Default',
    description:
      'Security, privacy, and compliance requirements are built into delivery planning and implementation.',
    icon: '🛡️',
  },
  {
    title: 'Outcome-Focused',
    description:
      'Roadmaps are prioritized around measurable gains in speed, quality, and operating cost.',
    icon: '📈',
  },
];

const strategicOutcomes = [
  'Faster go-live cycles with scoped pilots',
  'Lower execution risk through secure delivery patterns',
  'Clear KPI tracking from discovery to scale',
];

const deliverySteps: DeliveryStep[] = [
  {
    title: 'Discovery & Prioritization',
    description:
      'Map your goals, constraints, and current stack to a focused implementation plan.',
    duration: 'Week 1',
  },
  {
    title: 'Pilot Build',
    description:
      'Launch a scoped pilot with clear KPIs and stakeholder visibility across teams.',
    duration: 'Weeks 2-4',
  },
  {
    title: 'Production Hardening',
    description:
      'Implement observability, resilience, security controls, and operational runbooks.',
    duration: 'Weeks 5-8',
  },
  {
    title: 'Scale & Optimization',
    description:
      'Expand use cases, automate workflows, and continuously optimize business outcomes.',
    duration: 'Ongoing',
  },
];

const innovationBundles: InnovationBundle[] = [
  {
    title: 'Customer Success Engine',
    description:
      'Unify onboarding, support, and feedback into one customer success platform that drives retention.',
    impact: 'Higher retention',
    href: '/zion-ai-onboarding-pro',
    cta: 'Launch success engine',
    icon: '🎯',
    modules: [
      { name: 'AI Onboarding Pro', href: '/zion-ai-onboarding-pro' },
      { name: 'AI Customer Support Pro', href: '/zion-ai-customer-support-pro' },
      { name: 'AI Customer Sentiment Tracker', href: '/zion-ai-customer-sentiment-tracker' },
    ],
  },
  {
    title: 'Revenue Command Center',
    description:
      'Unify inbound capture, lead qualification, and outreach orchestration into one revenue engine.',
    impact: 'Faster qualified pipeline',
    href: '/zion-smart-crm-automation',
    cta: 'Launch revenue bundle',
    icon: '💼',
    modules: [
      { name: 'AI Lead Scoring', href: '/zion-ai-lead-scoring' },
      { name: 'AI Email Marketing Pro', href: '/zion-ai-email-marketing-pro' },
      { name: 'Smart CRM Automation', href: '/zion-smart-crm-automation' },
    ],
  },
  {
    title: 'Autonomous Operations Desk',
    description:
      'Turn documents, meetings, and team handoffs into structured automations with audit trails.',
    impact: 'Less manual back-office work',
    href: '/zion-workflow-automation',
    cta: 'Build ops desk',
    icon: '🧠',
    modules: [
      { name: 'Workflow Automation', href: '/zion-workflow-automation' },
      { name: 'AI Document Processor', href: '/zion-ai-document-processor' },
      { name: 'AI Meeting Assistant', href: '/zion-ai-meeting-assistant' },
    ],
  },
  {
    title: 'Compliance-Ready Delivery Pod',
    description:
      'Combine secure infrastructure with intelligent policy checks for high-trust enterprise rollouts.',
    impact: 'Reduced governance risk',
    href: '/zion-cybersecurity-audit',
    cta: 'Plan secure rollout',
    icon: '🔒',
    modules: [
      { name: 'Security Shield', href: '/zion-security-shield' },
      { name: 'AI Contract Analyzer', href: '/zion-ai-contract-analyzer' },
      { name: 'Cloud Vault', href: '/zion-cloud-vault' },
    ],
  },
  {
    title: 'Talent & Operations Hub',
    description:
      'Unify recruitment, onboarding, and workforce analytics into one talent intelligence platform.',
    impact: 'Faster hiring, better retention',
    href: '/zion-ai-recruitment-pro',
    cta: 'Launch talent hub',
    icon: '👥',
    modules: [
      { name: 'AI Recruitment Pro', href: '/zion-ai-recruitment-pro' },
      { name: 'AI Onboarding Pro', href: '/zion-ai-onboarding-pro' },
      { name: 'AI Talent Analytics', href: '/zion-ai-talent-analytics' },
    ],
  },
  {
    title: 'Content & Marketing Engine',
    description:
      'Combine SEO, content creation, and campaign automation into one growth-focused marketing stack.',
    impact: 'Higher visibility, faster campaigns',
    href: '/zion-ai-seo-optimizer',
    cta: 'Launch marketing engine',
    icon: '📣',
    modules: [
      { name: 'AI SEO Optimizer', href: '/zion-ai-seo-optimizer' },
      { name: 'Content Studio', href: '/zion-content-studio' },
      { name: 'AI Marketing Automation', href: '/zion-ai-marketing-automation' },
    ],
  },
  {
    title: 'Supply Chain Intelligence',
    description:
      'Unify demand forecasting, inventory optimization, and predictive maintenance for end-to-end operations.',
    impact: 'Lower costs, fewer disruptions',
    href: '/zion-ai-supply-chain-optimizer',
    cta: 'Build supply chain AI',
    icon: '📦',
    modules: [
      { name: 'AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer' },
      { name: 'AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance' },
      { name: 'Smart Inventory Manager', href: '/zion-smart-inventory-manager' },
    ],
  },
  {
    title: 'Content & Creative Engine',
    description:
      'Produce campaign assets, translate content, and generate visuals at scale with AI creative pipelines.',
    impact: 'Faster content velocity',
    href: '/zion-content-studio',
    cta: 'Launch content engine',
    icon: '✨',
    modules: [
      { name: 'Content Studio', href: '/zion-content-studio' },
      { name: 'AI Image Generator', href: '/zion-ai-image-generator' },
      { name: 'AI Translation Service', href: '/zion-ai-translation-service' },
    ],
  },
  {
    title: 'Engineering Velocity Hub',
    description:
      'Accelerate development cycles with AI-assisted coding, automated reviews, and deployment pipelines.',
    impact: 'Faster ship cycles',
    href: '/zion-ai-code-assistant',
    cta: 'Launch engineering hub',
    icon: '⚡',
    modules: [
      { name: 'AI Code Assistant', href: '/zion-ai-code-assistant' },
      { name: 'AI Code Reviewer', href: '/zion-ai-code-reviewer' },
      { name: 'DevOps Automation', href: '/zion-devops-automation' },
    ],
  },
  {
    title: 'Data & Analytics Engine',
    description:
      'Unify data pipelines, visualization, and predictive analytics into one decision intelligence platform.',
    impact: 'Smarter data-driven decisions',
    href: '/zion-ai-data-visualizer',
    cta: 'Launch analytics engine',
    icon: '📊',
    modules: [
      { name: 'AI Data Visualizer', href: '/zion-ai-data-visualizer' },
      { name: 'AI Data Pipeline', href: '/zion-ai-data-pipeline' },
      { name: 'AI Predictive Analytics', href: '/zion-ai-predictive-analytics' },
    ],
  },
  {
    title: 'AI Operations Hub',
    description:
      'Unify document processing, meeting capture, and workflow automation into one back-office intelligence platform.',
    impact: 'Less manual ops work',
    href: '/zion-ai-document-processor',
    cta: 'Launch ops hub',
    icon: '📋',
    modules: [
      { name: 'AI Document Processor', href: '/zion-ai-document-processor' },
      { name: 'AI Meeting Transcriber', href: '/zion-ai-meeting-transcriber' },
      { name: 'Workflow Automation', href: '/zion-workflow-automation' },
    ],
  },
  {
    title: 'Finance & Risk Intelligence',
    description:
      'Unify financial forecasting, fraud detection, and risk assessment into one enterprise-grade finance platform.',
    impact: 'Smarter risk decisions',
    href: '/zion-ai-financial-forecaster',
    cta: 'Launch finance bundle',
    icon: '💹',
    modules: [
      { name: 'AI Financial Forecaster', href: '/zion-ai-financial-forecaster' },
      { name: 'AI Fraud Detector', href: '/zion-ai-fraud-detector' },
      { name: 'AI Risk Assessor', href: '/zion-ai-risk-assessor' },
    ],
  },
  {
    title: 'Research & Development Hub',
    description:
      'Unify document analysis, knowledge extraction, and report generation into one R&D intelligence platform.',
    impact: 'Faster research cycles',
    href: '/zion-ai-document-analyzer',
    cta: 'Launch R&D hub',
    icon: '🔬',
    modules: [
      { name: 'AI Document Analyzer', href: '/zion-ai-document-analyzer' },
      { name: 'AI Knowledge Base', href: '/zion-ai-knowledge-base' },
      { name: 'AI Report Generator', href: '/zion-ai-report-generator' },
    ],
  },
  {
    title: 'Smart Fleet & Operations Hub',
    description:
      'Unify supply chain optimization, predictive maintenance, and inventory management for logistics and asset-intensive operations.',
    impact: 'Fewer outages, lower costs',
    href: '/zion-ai-supply-chain-optimizer',
    cta: 'Launch fleet hub',
    icon: '🚚',
    modules: [
      { name: 'AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer' },
      { name: 'AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance' },
      { name: 'Smart Inventory Manager', href: '/zion-smart-inventory-manager' },
    ],
  },
  {
    title: 'Sustainability & ESG Intelligence',
    description:
      'Unify ESG reporting, compliance tracking, and data pipelines into one sustainability intelligence platform.',
    impact: 'Transparent ESG reporting',
    href: '/zion-ai-report-generator',
    cta: 'Launch ESG bundle',
    icon: '🌱',
    modules: [
      { name: 'AI Report Generator', href: '/zion-ai-report-generator' },
      { name: 'Compliance Manager', href: '/zion-compliance-manager' },
      { name: 'AI Data Pipeline', href: '/zion-ai-data-pipeline' },
    ],
  },
  {
    title: 'AI Customer Intelligence Hub',
    description:
      'Unify sentiment analysis, chatbot insights, and customer analytics into one customer intelligence platform.',
    impact: 'Deeper customer understanding',
    href: '/zion-ai-customer-sentiment-tracker',
    cta: 'Launch customer intelligence',
    icon: '🧠',
    modules: [
      { name: 'AI Customer Sentiment Tracker', href: '/zion-ai-customer-sentiment-tracker' },
      { name: 'AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
      { name: 'Smart Analytics Dashboard', href: '/zion-smart-analytics-dashboard' },
    ],
  },
  {
    title: 'AI Governance & Compliance Hub',
    description:
      'Unify risk assessment, contract analysis, and compliance management into one governance intelligence platform.',
    impact: 'Reduced regulatory risk',
    href: '/zion-compliance-manager',
    cta: 'Launch governance hub',
    icon: '📋',
    modules: [
      { name: 'Compliance Manager', href: '/zion-compliance-manager' },
      { name: 'AI Risk Assessor', href: '/zion-ai-risk-assessor' },
      { name: 'AI Contract Analyzer', href: '/zion-ai-contract-analyzer' },
    ],
  },
  {
    title: 'AI Security & Threat Intelligence',
    description:
      'Unify fraud detection, content moderation, and security monitoring into one threat intelligence platform.',
    impact: 'Faster threat response',
    href: '/zion-ai-fraud-detector',
    cta: 'Launch security bundle',
    icon: '🛡️',
    modules: [
      { name: 'AI Fraud Detector', href: '/zion-ai-fraud-detector' },
      { name: 'AI Content Moderator', href: '/zion-ai-content-moderator' },
      { name: 'Security Shield', href: '/zion-security-shield' },
    ],
  },
  {
    title: 'AI Wellness & Engagement Hub',
    description:
      'Unify member analytics, sentiment tracking, and personalized engagement into one wellness and fitness intelligence platform.',
    impact: 'Higher retention, better engagement',
    href: '/zion-ai-customer-sentiment-tracker',
    cta: 'Launch wellness hub',
    icon: '🏃',
    modules: [
      { name: 'AI Customer Sentiment Tracker', href: '/zion-ai-customer-sentiment-tracker' },
      { name: 'AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
      { name: 'Smart Analytics Dashboard', href: '/zion-smart-analytics-dashboard' },
    ],
  },
  {
    title: 'AI Fleet & Marketing Intelligence',
    description:
      'Unify fleet optimization, route planning, and marketing analytics into one operations and growth intelligence platform.',
    impact: 'Smarter routing, higher campaign ROI',
    href: '/zion-ai-supply-chain-optimizer',
    cta: 'Launch fleet & marketing bundle',
    icon: '📢',
    modules: [
      { name: 'AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer' },
      { name: 'AI Marketing Automation', href: '/zion-ai-marketing-automation' },
      { name: 'Smart Analytics Dashboard', href: '/zion-smart-analytics-dashboard' },
    ],
  },
  {
    title: 'AI Quality & Supply Intelligence',
    description:
      'Unify quality assurance, supply chain optimization, and compliance tracking for manufacturing and materials operations.',
    impact: 'Fewer defects, faster compliance',
    href: '/zion-ai-quality-assurance',
    cta: 'Launch quality & supply bundle',
    icon: '✅',
    modules: [
      { name: 'AI Quality Assurance', href: '/zion-ai-quality-assurance' },
      { name: 'AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer' },
      { name: 'Compliance Manager', href: '/zion-compliance-manager' },
    ],
  },
  {
    title: 'AI Orbital & Supply Intelligence',
    description:
      'Unify satellite operations monitoring, ground station optimization, and supply chain forecasting for space and asset-intensive industries.',
    impact: 'Smarter operations, faster forecasting',
    href: '/zion-ai-supply-chain-optimizer',
    cta: 'Launch orbital & supply bundle',
    icon: '🛰️',
    modules: [
      { name: 'AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance' },
      { name: 'AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer' },
      { name: 'AI Data Pipeline', href: '/zion-ai-data-pipeline' },
    ],
  },
  {
    title: 'AI Care & Field Operations Hub',
    description:
      'Unify scheduling, dispatch, records, and inventory for veterinary clinics and home services contractors.',
    impact: 'Fewer no-shows, faster dispatch',
    href: '/zion-ai-scheduling-assistant',
    cta: 'Launch care & field bundle',
    icon: '🐾',
    modules: [
      { name: 'AI Scheduling Assistant', href: '/zion-ai-scheduling-assistant' },
      { name: 'AI Document Processor', href: '/zion-ai-document-processor' },
      { name: 'Smart Inventory Manager', href: '/zion-smart-inventory-manager' },
    ],
  },
  {
    title: 'AI Accounting & Tax Hub',
    description:
      'Unify document processing, bookkeeping, invoicing, and compliance into one accounting and tax intelligence platform.',
    impact: 'Faster close cycles, fewer manual errors',
    href: '/zion-ai-accounting-assistant',
    cta: 'Launch accounting hub',
    icon: '📒',
    modules: [
      { name: 'AI Accounting Assistant', href: '/zion-ai-accounting-assistant' },
      { name: 'AI Document Processor', href: '/zion-ai-document-processor' },
      { name: 'Invoice Genius', href: '/zion-invoice-genius' },
    ],
  },
];

const momentumSignals = [
  'New AI workflow bundles for GTM and operations teams',
  'Expanded feature library across growth, compliance, and automation',
  'Ready-to-launch modules with measurable KPI tracking',
  'Data & Analytics Engine for decision intelligence',
  'Government & Public Sector solutions',
  'AI Operations Hub for back-office automation',
  'Insurance industry solutions',
  'Finance & Risk Intelligence innovation bundle',
  'Agriculture & Construction industry solutions',
  'Research & Development Hub innovation bundle',
  'Mining & Pharmaceuticals industry solutions',
  'Smart Fleet & Operations Hub for logistics and automotive',
  'Telecommunications & Automotive industry solutions',
  'Sustainability & ESG Intelligence innovation bundle',
  'Aerospace & Defense and Maritime & Shipping solutions',
  'AI Customer Intelligence Hub for customer analytics',
  'Food & Beverage and Oil & Gas industry solutions',
  'AI Governance & Compliance Hub innovation bundle',
  'Banking & Capital Markets and Environmental & Waste solutions',
  'AI Security & Threat Intelligence innovation bundle',
  'Gaming & Esports and Renewable Energy & Cleantech solutions',
  'AI Wellness & Engagement Hub innovation bundle',
  'Sports & Fitness and Consumer Goods & CPG solutions',
  '35 industry verticals with tailored workflows',
  'AI Quality & Supply Intelligence innovation bundle',
  'Chemicals & Materials and Electronics & Semiconductors solutions',
  'AI Fleet & Marketing Intelligence innovation bundle',
  'Transportation & Fleet and Marketing & Advertising solutions',
  '37 industry verticals with tailored workflows',
  'AI Orbital & Supply Intelligence innovation bundle',
  'Space & Satellite and Textiles & Apparel solutions',
  '39 industry verticals with tailored workflows',
  'AI Care & Field Operations Hub innovation bundle',
  'Veterinary & Animal Health and Home Services & Contractors solutions',
  '41 industry verticals with tailored workflows',
  'AI Accounting & Tax Hub innovation bundle',
  'Accounting & Tax Services and Wholesale & Distribution solutions',
];

type CaseStudyTeaser = {
  title: string;
  industry: string;
  result: string;
  description: string;
  icon: string;
};

const caseStudyTeasers: CaseStudyTeaser[] = [
  {
    title: 'SaaS Platform Reduces Support Volume by 40%',
    industry: 'Technology',
    result: '40% fewer tickets',
    description: 'AI Chatbot Builder and Customer Support Pro freed teams for complex escalations.',
    icon: '💬',
  },
  {
    title: 'Ecommerce Brand Increases Revenue 28%',
    industry: 'Ecommerce',
    result: '28% revenue lift',
    description: 'AI Lead Scoring and Email Marketing Pro personalized outreach at scale.',
    icon: '📈',
  },
  {
    title: 'Fintech Passes SOC 2 Audit in 8 Weeks',
    industry: 'Financial Services',
    result: 'SOC 2 in 8 weeks',
    description: 'Compliance Manager and Security Shield established controls ahead of schedule.',
    icon: '🔒',
  },
  {
    title: 'Logistics Cuts Planning Time by 60%',
    industry: 'Supply Chain',
    result: '60% faster planning',
    description: 'Supply Chain Optimizer automated demand forecasting and reduced bottlenecks.',
    icon: '🚚',
  },
  {
    title: 'Engineering Team Ships 3x Faster',
    industry: 'Technology',
    result: '3x deployment frequency',
    description: 'AI Code Reviewer and DevOps Automation streamlined release cycles and caught issues earlier.',
    icon: '⚙️',
  },
  {
    title: 'Healthcare Provider Modernizes Records Workflow',
    industry: 'Healthcare',
    result: '75% less manual entry',
    description: 'AI Document Processor and Medical Records Manager digitized intake workflows.',
    icon: '🏥',
  },
  {
    title: 'Media Studio Cuts Content Production Time 50%',
    industry: 'Media & Entertainment',
    result: '50% faster production',
    description: 'Content Studio and AI Video Generator automated asset creation and repurposing.',
    icon: '🎬',
  },
  {
    title: 'Retail Chain Improves Inventory Accuracy 35%',
    industry: 'Retail',
    result: '35% fewer stockouts',
    description: 'Smart Inventory Manager and AI Supply Chain Optimizer aligned demand with supply.',
    icon: '🛒',
  },
  {
    title: 'Insurance Firm Automates Claims Processing 45%',
    industry: 'Insurance',
    result: '45% faster claims',
    description: 'AI Document Processor and AI Fraud Detector streamlined intake and reduced manual review.',
    icon: '🛡️',
  },
  {
    title: 'Pharma Accelerates Trial Data Analysis 60%',
    industry: 'Pharmaceuticals',
    result: '60% faster analysis',
    description: 'AI Document Analyzer and AI Report Generator automated regulatory submissions and trial summaries.',
    icon: '🧪',
  },
  {
    title: 'Telecom Reduces Network Outages 40%',
    industry: 'Telecommunications',
    result: '40% fewer outages',
    description: 'AI Predictive Maintenance and AI Data Pipeline enabled proactive infrastructure monitoring and faster incident response.',
    icon: '📡',
  },
  {
    title: 'Auto Manufacturer Streamlines Parts Supply 45%',
    industry: 'Automotive',
    result: '45% faster replenishment',
    description: 'AI Supply Chain Optimizer and Smart Inventory Manager aligned parts demand with supplier lead times.',
    icon: '🚗',
  },
  {
    title: 'Aerospace Supplier Cuts Document Review Time 50%',
    industry: 'Aerospace & Defense',
    result: '50% faster review',
    description: 'AI Document Processor and AI Contract Analyzer automated compliance documentation and reduced manual review cycles.',
    icon: '✈️',
  },
  {
    title: 'Shipping Line Reduces Port Delays 35%',
    industry: 'Maritime & Shipping',
    result: '35% fewer delays',
    description: 'AI Supply Chain Optimizer and AI Predictive Maintenance improved vessel scheduling and cargo forecasting.',
    icon: '🚢',
  },
  {
    title: 'Food Distributor Cuts Waste 30%',
    industry: 'Food & Beverage',
    result: '30% less waste',
    description: 'AI Sales Predictor and Smart Inventory Manager improved demand forecasting and reduced perishable stock write-offs.',
    icon: '🍽️',
  },
  {
    title: 'Oil Refinery Reduces Unplanned Downtime 25%',
    industry: 'Oil & Gas',
    result: '25% fewer outages',
    description: 'AI Predictive Maintenance and AI Data Pipeline enabled proactive equipment monitoring and compliance reporting automation.',
    icon: '🛢️',
  },
  {
    title: 'Bank Cuts Fraud Losses 35%',
    industry: 'Banking & Capital Markets',
    result: '35% fewer fraud incidents',
    description: 'AI Fraud Detector and AI Risk Assessor enabled real-time transaction monitoring and adaptive fraud scoring.',
    icon: '🏛️',
  },
  {
    title: 'Waste Operator Improves Recycling Efficiency 40%',
    industry: 'Environmental & Waste',
    result: '40% higher recovery rate',
    description: 'AI Predictive Analytics and AI Data Pipeline optimized route planning and material sorting workflows.',
    icon: '♻️',
  },
  {
    title: 'Gaming Platform Cuts Toxic Content 55%',
    industry: 'Gaming & Esports',
    result: '55% fewer policy violations',
    description: 'AI Content Moderator and AI Fraud Detector automated moderation queues and reduced fraudulent account activity.',
    icon: '🎮',
  },
  {
    title: 'Solar Operator Improves Forecast Accuracy 30%',
    industry: 'Renewable Energy',
    result: '30% better forecasting',
    description: 'AI Predictive Analytics and AI Energy Manager optimized production forecasting and grid balancing decisions.',
    icon: '☀️',
  },
  {
    title: 'Gym Chain Increases Member Retention 35%',
    industry: 'Sports & Fitness',
    result: '35% higher retention',
    description: 'AI Customer Sentiment Tracker and AI Chatbot Builder personalized engagement and reduced churn through proactive outreach.',
    icon: '🏃',
  },
  {
    title: 'CPG Brand Improves Demand Forecast Accuracy 40%',
    industry: 'Consumer Goods',
    result: '40% better forecasting',
    description: 'AI Sales Predictor and Smart Inventory Manager aligned production with retail demand and reduced excess inventory.',
    icon: '📦',
  },
  {
    title: 'Fleet Operator Cuts Route Costs 28%',
    industry: 'Transportation',
    result: '28% lower routing costs',
    description: 'AI Supply Chain Optimizer and AI Scheduling Assistant optimized delivery routes and driver allocation.',
    icon: '🚛',
  },
  {
    title: 'Agency Improves Campaign ROI 45%',
    industry: 'Marketing & Advertising',
    result: '45% higher ROI',
    description: 'AI Marketing Automation and Smart Analytics Dashboard automated attribution and optimized ad spend allocation.',
    icon: '📢',
  },
  {
    title: 'Chemical Producer Cuts Batch Defects 32%',
    industry: 'Chemicals & Materials',
    result: '32% fewer defects',
    description:
      'AI Quality Assurance and Compliance Manager automated batch traceability and reduced non-conformance incidents.',
    icon: '🧪',
  },
  {
    title: 'Semiconductor Fab Improves Yield 18%',
    industry: 'Electronics & Semiconductors',
    result: '18% higher yield',
    description:
      'AI Predictive Maintenance and AI Data Pipeline correlated equipment signals with yield outcomes and reduced variability.',
    icon: '🔌',
  },
  {
    title: 'Satellite Operator Cuts Ground Station Downtime 22%',
    industry: 'Space & Satellite',
    result: '22% fewer outages',
    description:
      'AI Predictive Maintenance and AI Data Pipeline enabled proactive equipment monitoring and optimized ground station scheduling.',
    icon: '🛰️',
  },
  {
    title: 'Apparel Brand Improves Seasonal Forecast Accuracy 38%',
    industry: 'Textiles & Apparel',
    result: '38% better forecasting',
    description:
      'AI Sales Predictor and Smart Inventory Manager aligned production with retail demand and reduced excess inventory across seasonal collections.',
    icon: '👕',
  },
  {
    title: 'Veterinary Clinic Reduces No-Shows 33%',
    industry: 'Veterinary & Animal Health',
    result: '33% fewer no-shows',
    description:
      'AI Scheduling Assistant and AI Chatbot Builder automated reminders and rescheduling, improving show rates and reducing gaps.',
    icon: '🐾',
  },
  {
    title: 'HVAC Company Improves Dispatch Efficiency 42%',
    industry: 'Home Services',
    result: '42% faster dispatch',
    description:
      'AI Scheduling Assistant and AI Supply Chain Optimizer optimized technician routing and parts availability for same-day service.',
    icon: '🔧',
  },
  {
    title: 'Accounting Firm Automates Document Processing 50%',
    industry: 'Accounting & Tax',
    result: '50% faster processing',
    description:
      'AI Document Processor and AI Accounting Assistant streamlined client intake, reconciliation, and report generation for a mid-size CPA firm.',
    icon: '📒',
  },
  {
    title: 'Wholesale Distributor Improves Inventory Accuracy 35%',
    industry: 'Wholesale & Distribution',
    result: '35% fewer stockouts',
    description:
      'AI Supply Chain Optimizer and Smart Inventory Manager aligned demand with replenishment cycles across multiple warehouse locations.',
    icon: '📦',
  },
];

const quickJumpLinks: QuickJumpLink[] = [
  {
    label: 'ROI planner',
    href: '#roi-planner',
    description: 'Model savings and payback windows',
  },
  {
    label: 'Launch advisor',
    href: '#launch-advisor',
    description: 'Get a rollout recommendation by goal',
  },
  {
    label: 'Case studies',
    href: '#case-studies',
    description: 'Real results from real teams',
  },
  {
    label: 'Industry solutions',
    href: '#industry-solutions',
    description: 'AI workflows tailored to your vertical',
  },
  {
    label: 'App library',
    href: '#featured-library',
    description: 'Browse featured AI apps by outcome',
  },
  {
    label: 'Platform pages',
    href: '#platform-pages',
    description: 'Explore industry and micro-SaaS page routes',
  },
  {
    label: 'Innovation bundles',
    href: '#innovation-bundles',
    description: 'Pre-designed bundles for faster rollout',
  },
  {
    label: 'Blog & resources',
    href: '/blog',
    description: 'AI strategy, security, and implementation insights',
  },
  {
    label: 'Solutions hub',
    href: '/solutions',
    description: 'Browse all AI solutions and product paths',
  },
  {
    label: 'Planning FAQ',
    href: '#delivery-faq',
    description: 'Review adoption and delivery answers',
  },
];

const faqItems: FAQItem[] = [
  {
    question: 'How do we choose the right app to start with?',
    answer:
      'Start with one high-friction workflow that has clear business impact. We typically prioritize use cases tied to revenue acceleration, support volume reduction, or delivery speed.',
  },
  {
    question: 'How quickly can we launch a production-ready pilot?',
    answer:
      'Most teams launch an initial pilot in 2-4 weeks with clear KPI tracking, integration checkpoints, and a pragmatic handoff plan for operations.',
  },
  {
    question: 'How do you handle security and compliance requirements?',
    answer:
      'Security controls are defined during discovery and included in implementation scope, including access policies, auditability, and environment hardening.',
  },
  {
    question: 'Can Zion integrate with our existing tools and data stack?',
    answer:
      'Yes. Delivery plans are designed around existing systems, APIs, and team workflows so rollout improves operations instead of creating parallel complexity.',
  },
  {
    question: 'What does ownership look like after go-live?',
    answer:
      'You receive runbooks, observability guidance, and optimization recommendations so internal teams can operate confidently while continuing to improve outcomes.',
  },
  {
    question: 'Do you offer industry-specific implementations?',
    answer:
      'Yes. We have tailored solutions for 41 verticals including financial services, healthcare, ecommerce, manufacturing, agriculture, construction, mining, pharmaceuticals, telecommunications, automotive, aerospace, maritime, food & beverage, oil & gas, banking, environmental & waste, gaming & esports, renewable energy & cleantech, sports & fitness, consumer goods & CPG, transportation & fleet, marketing & advertising, chemicals & materials, electronics & semiconductors, space & satellite, textiles & apparel, veterinary & animal health, home services & contractors, accounting & tax services, wholesale & distribution, and government. Each industry solution maps our apps to your compliance and workflow requirements.',
  },
  {
    question: 'Can we start with a single app or do we need a full bundle?',
    answer:
      'You can start with one app. Many teams begin with a single high-impact use case (e.g., AI Chatbot for support) and expand to bundles over time as they see results.',
  },
  {
    question: 'Where can I find implementation guides and best practices?',
    answer:
      'Our blog and resources section covers AI strategy, security-first deployment, ROI measurement, and implementation playbooks. Visit /blog for the latest insights.',
  },
  {
    question: 'What support options are available after go-live?',
    answer:
      'We offer runbooks, team training, and optional ongoing optimization support. Enterprise plans include dedicated success managers and 24/7 infrastructure monitoring.',
  },
  {
    question: 'Can we combine multiple innovation bundles?',
    answer:
      'Yes. Many teams start with one bundle (e.g., Customer Success Engine) and add others (e.g., Revenue Command Center) as they expand use cases. We design for modular adoption.',
  },
  {
    question: 'Do you support R&D and life sciences workflows?',
    answer:
      'Yes. Our Research & Development Hub and Pharmaceuticals & Life Sciences solutions support document analysis, regulatory compliance, quality assurance, and knowledge extraction for research teams.',
  },
  {
    question: 'Do you support telecommunications and automotive industries?',
    answer:
      'Yes. Our Telecommunications and Automotive & Mobility solutions include predictive maintenance, supply chain optimization, customer support automation, and quality assurance. The Smart Fleet & Operations Hub bundles these capabilities for asset-intensive and logistics-focused operations.',
  },
  {
    question: 'Do you support aerospace, defense, and maritime industries?',
    answer:
      'Yes. Our Aerospace & Defense solution covers secure documentation, ITAR-aware compliance, and predictive maintenance. Maritime & Shipping includes fleet optimization, port logistics, cargo forecasting, and customs documentation. Both leverage our Supply Chain Optimizer and Compliance Manager.',
  },
  {
    question: 'Do you support food & beverage and oil & gas industries?',
    answer:
      'Yes. Our Food & Beverage solution covers demand forecasting, inventory optimization for perishables, and compliance tracking. Oil & Gas includes predictive maintenance for equipment, regulatory compliance automation, and supply chain visibility across upstream and downstream operations.',
  },
  {
    question: 'Do you support banking and environmental & waste industries?',
    answer:
      'Yes. Our Banking & Capital Markets solution covers fraud detection, AML workflows, risk assessment, and regulatory reporting. Environmental & Waste Management includes ESG reporting, emissions tracking, waste route optimization, and sustainability compliance. The AI Governance & Compliance Hub bundles these capabilities for regulatory-heavy operations.',
  },
  {
    question: 'Do you support gaming and renewable energy industries?',
    answer:
      'Yes. Our Gaming & Esports solution covers content moderation, fraud detection, player analytics, and community management for gaming platforms. Renewable Energy & Cleantech includes grid optimization, asset performance forecasting, sustainability reporting, and demand prediction for solar, wind, and cleantech operations. The AI Security & Threat Intelligence bundle supports gaming security workflows.',
  },
  {
    question: 'Do you support sports & fitness and consumer goods industries?',
    answer:
      'Yes. Our Sports & Fitness solution covers member engagement, retention analytics, personalized recommendations, and automated outreach for gyms, fitness apps, and wellness platforms. Consumer Goods & CPG includes demand forecasting, retail execution, trade promotion analytics, and supply chain optimization. The AI Wellness & Engagement Hub bundles sentiment tracking, chatbots, and analytics for fitness and wellness operations.',
  },
  {
    question: 'Do you support transportation and marketing & advertising industries?',
    answer:
      'Yes. Our Transportation & Fleet solution covers route optimization, driver scheduling, predictive maintenance, and demand forecasting for fleet operations and last-mile delivery. Marketing & Advertising includes campaign automation, creative analytics, ad spend optimization, and ROI measurement for agencies and in-house teams. The AI Fleet & Marketing Intelligence bundle combines supply chain optimization with marketing analytics for operations and growth teams.',
  },
  {
    question: 'Do you support chemicals & materials and electronics & semiconductors industries?',
    answer:
      'Yes. Our Chemicals & Materials solution covers supply chain optimization, quality control, batch traceability, and sustainability compliance for chemical and materials manufacturers. Electronics & Semiconductors includes yield optimization, predictive maintenance for equipment, quality assurance, and supply chain visibility for semiconductor and electronics operations. The AI Quality & Supply Intelligence bundle unifies quality assurance, supply chain optimization, and compliance tracking for manufacturing and materials workflows.',
  },
  {
    question: 'Do you support space & satellite and textiles & apparel industries?',
    answer:
      'Yes. Our Space & Satellite solution covers satellite health monitoring, ground station scheduling, orbital analytics, and mission planning with predictive maintenance and data pipeline workflows. Textiles & Apparel includes seasonal demand forecasting, raw material sourcing, inventory optimization, and sustainability compliance for textile and apparel manufacturers and retailers. The AI Orbital & Supply Intelligence bundle unifies predictive maintenance, supply chain optimization, and data pipelines for space and asset-intensive operations.',
  },
  {
    question: 'Do you support veterinary and home services industries?',
    answer:
      'Yes. Our Veterinary & Animal Health solution covers appointment scheduling, medical records management, inventory for supplies and medications, and client communications for veterinary clinics. Home Services & Contractors includes route optimization, technician scheduling, job dispatching, and inventory management for HVAC, plumbing, electrical, and home improvement contractors. The AI Care & Field Operations Hub unifies scheduling, document processing, and inventory workflows for care and field-service operations.',
  },
  {
    question: 'Do you support accounting and wholesale & distribution industries?',
    answer:
      'Yes. Our Accounting & Tax Services solution covers document processing, bookkeeping automation, invoicing, reconciliation, and compliance workflows for accounting firms and tax preparers. Wholesale & Distribution includes demand forecasting, warehouse optimization, order fulfillment automation, and B2B analytics for wholesalers and distributors. The AI Accounting & Tax Hub unifies document processing, accounting assistance, and invoicing for professional services and back-office operations.',
  },
];

type IndustrySolution = {
  industry: string;
  icon: string;
  headline: string;
  description: string;
  apps: string[];
  href: string;
};

type TrustBadge = {
  title: string;
  description: string;
  icon: string;
};

type ServiceCapability = {
  title: string;
  description: string;
  icon: string;
  href: string;
};

const serviceCapabilities: ServiceCapability[] = [
  {
    title: 'Strategy & Roadmap',
    description: 'Align AI initiatives with business goals through discovery workshops and prioritization frameworks.',
    icon: '🎯',
    href: '/consultation',
  },
  {
    title: 'Implementation & Integration',
    description: 'Deploy production-ready systems with secure integration to your existing tools and data stack.',
    icon: '🔧',
    href: '/services',
  },
  {
    title: 'Support & Training',
    description: 'Handoff runbooks, team training, and ongoing optimization so your team operates confidently.',
    icon: '📚',
    href: '/contact',
  },
  {
    title: 'Continuous Optimization',
    description: 'Expand use cases, improve performance, and automate increasingly complex workflows over time.',
    icon: '📈',
    href: '/pricing',
  },
];

const companyStats = [
  { value: '500+', label: 'Enterprise Deployments', description: 'Production AI rollouts across industries' },
  { value: '99.9%', label: 'Platform Uptime', description: 'Reliable infrastructure for mission-critical apps' },
  { value: '< 48h', label: 'Average Kickoff Time', description: 'From discovery call to active pilot planning' },
  { value: '3.2x', label: 'Average ROI', description: 'Measured return within the first twelve months' },
  { value: '60+', label: 'AI Applications', description: 'Production-ready apps across 12 categories' },
  { value: '41', label: 'Industry Verticals', description: 'Tailored solutions for specialized workflows' },
];

type CoreService = {
  title: string;
  description: string;
  icon: string;
  href: string;
  services: string[];
};

const coreServices: CoreService[] = [
  {
    title: 'AI & Machine Learning',
    description: 'Custom AI solutions, model training, and intelligent automation.',
    icon: '🤖',
    href: '/ai-services/process-automation',
    services: ['Custom AI development', 'NLP & computer vision', 'Predictive analytics', 'MLOps'],
  },
  {
    title: 'Web & Software Development',
    description: 'Modern web applications, APIs, and full-stack engineering.',
    icon: '🌐',
    href: '/web-development',
    services: ['Next.js & React', 'REST/GraphQL APIs', 'Database architecture', 'Legacy modernization'],
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud architecture, migration, and management.',
    icon: '☁️',
    href: '/cloud-infrastructure',
    services: ['Cloud migration', 'Infrastructure as Code', 'Multi-cloud', 'Cost optimization'],
  },
  {
    title: 'Cybersecurity',
    description: 'Security audits, compliance programs, and incident response.',
    icon: '🔒',
    href: '/cybersecurity',
    services: ['Penetration testing', 'SOC 2 & GDPR', 'Vulnerability management', 'Security training'],
  },
  {
    title: 'Data Analytics',
    description: 'Transform raw data into actionable business intelligence.',
    icon: '📊',
    href: '/data-analytics',
    services: ['Data warehouse', 'Real-time dashboards', 'ETL pipelines', 'Predictive modeling'],
  },
  {
    title: 'DevOps & Automation',
    description: 'CI/CD pipelines, container orchestration, and release engineering.',
    icon: '⚙️',
    href: '/zion-devops-automation',
    services: ['CI/CD design', 'Kubernetes', 'Monitoring', 'SRE'],
  },
  {
    title: 'AI Talent Matching',
    description: 'Connect with verified tech professionals using advanced AI algorithms.',
    icon: '👥',
    href: '/zion-ai-recruitment-pro',
    services: ['AI candidate screening', 'Skills-based matching', 'Workforce analytics', 'Onboarding automation'],
  },
  {
    title: 'Micro SAAS Solutions',
    description: 'Cutting-edge software applications packaged for rapid deployment.',
    icon: '📦',
    href: '/micro-saas-services',
    services: ['Micro-SaaS product design', 'AI content tools', 'Lead generation', 'Analytics dashboards'],
  },
  {
    title: 'Blockchain & Web3',
    description: 'Smart contracts, decentralized apps, and blockchain integration for trust and transparency.',
    icon: '⛓️',
    href: '/blockchain-development',
    services: ['Smart contracts', 'dApps', 'Tokenization', 'Enterprise blockchain'],
  },
  {
    title: 'Consulting & Strategy',
    description: 'Align AI initiatives with business goals through discovery workshops and roadmap planning.',
    icon: '🎯',
    href: '/consultation',
    services: ['AI strategy workshops', 'Roadmap prioritization', 'Vendor evaluation', 'Pilot scoping'],
  },
];

const industrySolutions: IndustrySolution[] = [
  {
    industry: 'Financial Services',
    icon: '🏦',
    headline: 'Automate compliance and accelerate lending decisions',
    description:
      'Deploy fraud detection, risk scoring, and regulatory compliance workflows that reduce manual review time and increase approval accuracy.',
    apps: ['AI Fraud Detector', 'AI Financial Forecaster', 'Compliance Manager', 'AI Contract Analyzer'],
    href: '/solutions',
  },
  {
    industry: 'Healthcare',
    icon: '🏥',
    headline: 'Streamline records and improve patient communication',
    description:
      'Digitize medical records, automate appointment scheduling, and build AI-assisted patient intake flows with full HIPAA compliance.',
    apps: ['Medical Records Manager', 'AI Document Processor', 'AI Chatbot Builder', 'Security Shield'],
    href: '/medical-records-manager',
  },
  {
    industry: 'E-Commerce & Retail',
    icon: '🛒',
    headline: 'Personalize shopping and optimize supply chains',
    description:
      'Drive higher conversion with AI-powered recommendations, demand forecasting, and inventory optimization across channels.',
    apps: ['Ecommerce Analytics Pro', 'Smart Inventory Manager', 'AI Sales Predictor', 'AI Marketing Automation'],
    href: '/ecommerce-analytics-pro',
  },
  {
    industry: 'Real Estate & Property',
    icon: '🏠',
    headline: 'Automate property ops and tenant engagement',
    description:
      'Manage listings, automate tenant communications, and generate property performance reports with AI-driven workflows.',
    apps: ['Property Management AI', 'AI Document Processor', 'AI Chatbot Builder', 'Invoice Genius'],
    href: '/property-management-ai',
  },
  {
    industry: 'Legal & Professional Services',
    icon: '⚖️',
    headline: 'Accelerate contract review and case management',
    description:
      'Reduce time spent on document review, automate client intake, and surface risk clauses with AI-powered legal analysis.',
    apps: ['Legal Document Manager', 'AI Contract Analyzer', 'AI Document Analyzer', 'Compliance Manager'],
    href: '/legal-document-manager',
  },
  {
    industry: 'Education & Training',
    icon: '🎓',
    headline: 'Scale personalized learning experiences',
    description:
      'Deliver adaptive coursework, automate grading workflows, and generate engagement analytics for learners at any scale.',
    apps: ['Online Learning Platform', 'AI Knowledge Base', 'AI Survey Builder', 'AI Report Generator'],
    href: '/online-learning-platform',
  },
  {
    industry: 'Manufacturing & Industrial',
    icon: '🏭',
    headline: 'Optimize production and predictive maintenance',
    description:
      'Reduce downtime with predictive maintenance, optimize supply chains, and automate quality assurance with AI-powered workflows.',
    apps: ['AI Predictive Maintenance', 'Supply Chain Optimizer', 'AI Quality Assurance', 'AI Document Processor'],
    href: '/supply-chain-optimizer',
  },
  {
    industry: 'Logistics & Supply Chain',
    icon: '📦',
    headline: 'Streamline fulfillment and inventory operations',
    description:
      'Improve demand forecasting, reduce bottlenecks, and automate logistics workflows across warehouses and carriers.',
    apps: ['Supply Chain Optimizer', 'Smart Inventory Manager', 'AI Sales Predictor', 'Workflow Automation'],
    href: '/supply-chain-optimizer',
  },
  {
    industry: 'Technology & SaaS',
    icon: '💻',
    headline: 'Accelerate product development and go-to-market',
    description:
      'Scale engineering velocity, automate customer onboarding, and optimize conversion with AI-powered product workflows.',
    apps: ['AI Code Assistant', 'AI Onboarding Pro', 'AI SEO Optimizer', 'AI Website Analyzer'],
    href: '/solutions',
  },
  {
    industry: 'Media & Entertainment',
    icon: '🎬',
    headline: 'Scale content creation and audience engagement',
    description:
      'Automate content workflows, personalize experiences, and analyze audience behavior with AI-driven tools.',
    apps: ['Content Studio', 'AI Video Generator', 'AI Image Generator', 'AI Marketing Automation'],
    href: '/zion-content-studio',
  },
  {
    industry: 'Energy & Utilities',
    icon: '⚡',
    headline: 'Optimize energy consumption and asset performance',
    description:
      'Deploy predictive maintenance, demand forecasting, and energy management with AI-driven insights.',
    apps: ['AI Energy Manager', 'AI Predictive Maintenance', 'AI Data Pipeline', 'Compliance Manager'],
    href: '/ai-services/energy-management',
  },
  {
    industry: 'Government & Public Sector',
    icon: '🏛️',
    headline: 'Streamline citizen services and compliance',
    description:
      'Automate document processing, citizen intake, and regulatory reporting with secure, audit-ready workflows.',
    apps: ['AI Document Processor', 'AI Contract Analyzer', 'Compliance Manager', 'Security Shield'],
    href: '/solutions',
  },
  {
    industry: 'Hospitality & Travel',
    icon: '✈️',
    headline: 'Personalize guest experiences and optimize operations',
    description:
      'Improve booking flows, automate guest communications, and analyze demand patterns with AI-powered tools.',
    apps: ['AI Chatbot Builder', 'AI Customer Support Pro', 'AI Sales Predictor', 'Smart CRM Automation'],
    href: '/solutions',
  },
  {
    industry: 'Non-Profit & Social Impact',
    icon: '🤝',
    headline: 'Scale outreach and donor engagement efficiently',
    description:
      'Automate donor communications, manage volunteer coordination, and generate impact reports with limited resources.',
    apps: ['AI Email Marketing Pro', 'AI Survey Builder', 'AI Report Generator', 'Project Master'],
    href: '/solutions',
  },
  {
    industry: 'Insurance',
    icon: '🛡️',
    headline: 'Streamline claims processing and risk assessment',
    description:
      'Automate claims intake, fraud detection, and policy analysis with AI-powered workflows that reduce manual review and improve accuracy.',
    apps: ['AI Document Processor', 'AI Fraud Detector', 'AI Contract Analyzer', 'AI Risk Assessor'],
    href: '/solutions',
  },
  {
    industry: 'Agriculture & Agritech',
    icon: '🌾',
    headline: 'Optimize yield prediction and farm operations',
    description:
      'Deploy AI for crop monitoring, demand forecasting, supply chain optimization, and resource planning across agricultural workflows.',
    apps: ['AI Predictive Analytics', 'Supply Chain Optimizer', 'AI Data Pipeline', 'Smart Inventory Manager'],
    href: '/supply-chain-optimizer',
  },
  {
    industry: 'Construction & Engineering',
    icon: '🏗️',
    headline: 'Streamline project management and cost estimation',
    description:
      'Automate document workflows, project tracking, resource allocation, and compliance reporting for construction and engineering firms.',
    apps: ['Project Master', 'AI Document Processor', 'AI Contract Analyzer', 'Compliance Manager'],
    href: '/solutions',
  },
  {
    industry: 'Mining & Natural Resources',
    icon: '⛏️',
    headline: 'Optimize extraction, safety, and supply chain visibility',
    description:
      'Deploy predictive maintenance for equipment, automate compliance reporting, and improve demand forecasting across mining and resource operations.',
    apps: ['AI Predictive Maintenance', 'AI Document Processor', 'Supply Chain Optimizer', 'Compliance Manager'],
    href: '/solutions',
  },
  {
    industry: 'Pharmaceuticals & Life Sciences',
    icon: '🧪',
    headline: 'Accelerate trial data, regulatory submissions, and quality control',
    description:
      'Streamline document workflows for regulatory filings, automate quality assurance checks, and improve data integrity with AI-powered compliance.',
    apps: ['AI Document Processor', 'AI Quality Assurance', 'Compliance Manager', 'AI Contract Analyzer'],
    href: '/solutions',
  },
  {
    industry: 'Telecommunications',
    icon: '📡',
    headline: 'Optimize network operations and customer experience',
    description:
      'Deploy predictive maintenance for infrastructure, automate customer support, and improve demand forecasting with AI-driven network and service analytics.',
    apps: ['AI Predictive Maintenance', 'AI Chatbot Builder', 'AI Customer Support Pro', 'AI Data Pipeline'],
    href: '/solutions',
  },
  {
    industry: 'Automotive & Mobility',
    icon: '🚗',
    headline: 'Streamline supply chain, quality, and fleet operations',
    description:
      'Optimize parts inventory, predict equipment failures, automate quality assurance, and improve logistics with AI-powered automotive workflows.',
    apps: ['AI Supply Chain Optimizer', 'AI Predictive Maintenance', 'AI Quality Assurance', 'Smart Inventory Manager'],
    href: '/supply-chain-optimizer',
  },
  {
    industry: 'Aerospace & Defense',
    icon: '✈️',
    headline: 'Secure documentation, compliance, and supply chain visibility',
    description:
      'Deploy ITAR-compliant document workflows, predictive maintenance for critical assets, and supply chain optimization with audit-ready controls.',
    apps: ['AI Document Processor', 'AI Contract Analyzer', 'Compliance Manager', 'AI Predictive Maintenance'],
    href: '/solutions',
  },
  {
    industry: 'Maritime & Shipping',
    icon: '🚢',
    headline: 'Optimize fleet operations and port logistics',
    description:
      'Improve vessel maintenance scheduling, cargo forecasting, customs documentation, and port coordination with AI-driven logistics workflows.',
    apps: ['AI Supply Chain Optimizer', 'AI Predictive Maintenance', 'AI Document Processor', 'Smart Inventory Manager'],
    href: '/supply-chain-optimizer',
  },
  {
    industry: 'Food & Beverage',
    icon: '🍽️',
    headline: 'Optimize supply chain, quality, and demand forecasting',
    description:
      'Deploy demand forecasting, inventory optimization, and compliance tracking for perishable goods and multi-channel distribution.',
    apps: ['AI Supply Chain Optimizer', 'Smart Inventory Manager', 'AI Sales Predictor', 'Compliance Manager'],
    href: '/supply-chain-optimizer',
  },
  {
    industry: 'Oil & Gas',
    icon: '🛢️',
    headline: 'Streamline asset operations and regulatory compliance',
    description:
      'Optimize predictive maintenance for equipment, automate compliance reporting, and improve supply chain visibility across upstream and downstream operations.',
    apps: ['AI Predictive Maintenance', 'AI Document Processor', 'Compliance Manager', 'AI Data Pipeline'],
    href: '/solutions',
  },
  {
    industry: 'Banking & Capital Markets',
    icon: '🏛️',
    headline: 'Automate AML, fraud detection, and regulatory reporting',
    description:
      'Deploy AI-powered fraud detection, risk scoring, and compliance workflows for KYC, AML, and regulatory reporting across banking and capital markets.',
    apps: ['AI Fraud Detector', 'AI Risk Assessor', 'Compliance Manager', 'AI Contract Analyzer'],
    href: '/solutions',
  },
  {
    industry: 'Environmental & Waste Management',
    icon: '♻️',
    headline: 'Optimize recycling, emissions reporting, and sustainability',
    description:
      'Streamline ESG reporting, waste route optimization, emissions tracking, and compliance documentation with AI-driven environmental workflows.',
    apps: ['AI Report Generator', 'Compliance Manager', 'AI Data Pipeline', 'AI Predictive Analytics'],
    href: '/solutions',
  },
  {
    industry: 'Gaming & Esports',
    icon: '🎮',
    headline: 'Scale content moderation and player analytics',
    description:
      'Deploy AI-powered content moderation, fraud detection, and community analytics for gaming platforms and esports organizations.',
    apps: ['AI Content Moderator', 'AI Fraud Detector', 'AI Chatbot Builder', 'Smart Analytics Dashboard'],
    href: '/solutions',
  },
  {
    industry: 'Renewable Energy & Cleantech',
    icon: '🌱',
    headline: 'Optimize grid performance and asset forecasting',
    description:
      'Improve renewable asset performance, demand forecasting, and sustainability reporting with AI-driven energy and emissions analytics.',
    apps: ['AI Energy Manager', 'AI Predictive Analytics', 'AI Report Generator', 'AI Data Pipeline'],
    href: '/ai-services/energy-management',
  },
  {
    industry: 'Sports & Fitness',
    icon: '🏃',
    headline: 'Enhance member engagement and retention',
    description:
      'Deploy AI-powered member analytics, personalized recommendations, and automated engagement workflows for gyms, fitness apps, and wellness platforms.',
    apps: ['AI Chatbot Builder', 'AI Customer Sentiment Tracker', 'Smart Analytics Dashboard', 'AI Marketing Automation'],
    href: '/solutions',
  },
  {
    industry: 'Consumer Goods & CPG',
    icon: '📦',
    headline: 'Optimize demand forecasting and retail execution',
    description:
      'Improve shelf availability, demand planning, and trade promotion analytics with AI-driven forecasting and supply chain optimization.',
    apps: ['AI Sales Predictor', 'Smart Inventory Manager', 'AI Supply Chain Optimizer', 'AI Data Pipeline'],
    href: '/supply-chain-optimizer',
  },
  {
    industry: 'Transportation & Fleet',
    icon: '🚛',
    headline: 'Optimize fleet operations and last-mile delivery',
    description:
      'Deploy route optimization, driver scheduling, predictive maintenance, and demand forecasting for transportation and fleet management operations.',
    apps: ['AI Supply Chain Optimizer', 'AI Predictive Maintenance', 'AI Scheduling Assistant', 'AI Data Pipeline'],
    href: '/supply-chain-optimizer',
  },
  {
    industry: 'Marketing & Advertising',
    icon: '📢',
    headline: 'Scale campaign execution and creative analytics',
    description:
      'Automate campaign workflows, optimize ad spend, personalize creative delivery, and measure ROI with AI-driven marketing intelligence.',
    apps: ['AI Marketing Automation', 'Content Studio', 'AI Data Visualizer', 'AI Lead Scoring'],
    href: '/zion-ai-marketing-automation',
  },
  {
    industry: 'Chemicals & Materials',
    icon: '🧪',
    headline: 'Optimize supply chain, quality control, and sustainability compliance',
    description:
      'Deploy demand forecasting, batch traceability, regulatory reporting, and supply chain optimization for chemical and materials manufacturers.',
    apps: ['AI Supply Chain Optimizer', 'AI Quality Assurance', 'Compliance Manager', 'AI Data Pipeline'],
    href: '/supply-chain-optimizer',
  },
  {
    industry: 'Electronics & Semiconductors',
    icon: '🔌',
    headline: 'Streamline yield optimization and supply chain visibility',
    description:
      'Improve demand forecasting, predictive maintenance for equipment, quality assurance, and compliance workflows for electronics and semiconductor operations.',
    apps: ['AI Predictive Maintenance', 'AI Quality Assurance', 'Supply Chain Optimizer', 'AI Data Pipeline'],
    href: '/supply-chain-optimizer',
  },
  {
    industry: 'Space & Satellite',
    icon: '🛰️',
    headline: 'Optimize orbital operations and ground station management',
    description:
      'Deploy AI for satellite health monitoring, ground station scheduling, orbital analytics, and mission planning with predictive maintenance and data pipeline workflows.',
    apps: ['AI Predictive Maintenance', 'AI Data Pipeline', 'AI Report Generator', 'Compliance Manager'],
    href: '/solutions',
  },
  {
    industry: 'Textiles & Apparel',
    icon: '👕',
    headline: 'Optimize demand forecasting and sustainable supply chains',
    description:
      'Improve seasonal demand planning, raw material sourcing, inventory optimization, and sustainability compliance for textile and apparel manufacturers and retailers.',
    apps: ['AI Sales Predictor', 'Smart Inventory Manager', 'AI Supply Chain Optimizer', 'Compliance Manager'],
    href: '/supply-chain-optimizer',
  },
  {
    industry: 'Veterinary & Animal Health',
    icon: '🐾',
    headline: 'Streamline clinic operations and patient care workflows',
    description:
      'Automate appointment scheduling, medical records management, inventory for supplies and medications, and client communications for veterinary clinics and animal health providers.',
    apps: ['AI Scheduling Assistant', 'AI Document Processor', 'Smart Inventory Manager', 'AI Chatbot Builder'],
    href: '/solutions',
  },
  {
    industry: 'Home Services & Contractors',
    icon: '🔧',
    headline: 'Optimize dispatch, scheduling, and field operations',
    description:
      'Deploy route optimization, technician scheduling, job dispatching, and inventory management for HVAC, plumbing, electrical, and home improvement contractors.',
    apps: ['AI Scheduling Assistant', 'AI Supply Chain Optimizer', 'AI Document Processor', 'Workflow Automation'],
    href: '/supply-chain-optimizer',
  },
  {
    industry: 'Accounting & Tax Services',
    icon: '📒',
    headline: 'Automate bookkeeping, reconciliation, and tax workflows',
    description:
      'Streamline document intake, automate reconciliation, generate financial reports, and manage compliance workflows for accounting firms and tax preparers.',
    apps: ['AI Accounting Assistant', 'AI Document Processor', 'Invoice Genius', 'Compliance Manager'],
    href: '/zion-ai-accounting-assistant',
  },
  {
    industry: 'Wholesale & Distribution',
    icon: '📦',
    headline: 'Optimize inventory, fulfillment, and multi-channel distribution',
    description:
      'Deploy demand forecasting, warehouse optimization, order fulfillment automation, and B2B analytics for wholesalers and distributors.',
    apps: ['AI Supply Chain Optimizer', 'Smart Inventory Manager', 'AI Sales Predictor', 'Workflow Automation'],
    href: '/supply-chain-optimizer',
  },
];

const trustBadges: TrustBadge[] = [
  {
    title: 'SOC 2 Type II',
    description: 'Audited controls for data security, availability, and confidentiality',
    icon: '🔐',
  },
  {
    title: 'ISO 27001',
    description: 'Certified information security management system',
    icon: '📋',
  },
  {
    title: 'GDPR Compliant',
    description: 'Full data protection and privacy compliance for EU operations',
    icon: '🇪🇺',
  },
  {
    title: 'HIPAA Ready',
    description: 'Healthcare-grade security controls for protected health information',
    icon: '🏥',
  },
  {
    title: '99.9% SLA',
    description: 'Enterprise uptime guarantee backed by 24/7 infrastructure monitoring',
    icon: '⏱️',
  },
  {
    title: 'End-to-End Encryption',
    description: 'AES-256 encryption at rest and TLS 1.3 in transit for all data',
    icon: '🔒',
  },
];

const baseUrl = 'https://ziontechgroup.com';

const homeStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Zion Tech Group',
      url: baseUrl,
      logo: `${baseUrl}/icon.svg`,
      description:
        'Zion Tech Group delivers AI applications, engineering services, and security-first implementation support.',
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Zion Tech Group',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'ItemList',
      name: 'Featured Zion AI Apps',
      numberOfItems: featuredApps.length,
      itemListElement: featuredApps.map((app, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: app.name,
        url: `${baseUrl}${app.href}`,
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: 'Zion Tech Group | AI Apps, Security, and Engineering Delivery',
  description:
    'Discover Zion Tech Group AI applications, security products, and engineering services. Explore verified app links and start with a tailored implementation roadmap.',
  metadataBase: new URL(baseUrl),
  keywords: [
    'AI apps',
    'workflow automation',
    'CRM automation',
    'cybersecurity',
    'devops automation',
    'software development',
    'technology services',
    'enterprise AI implementation',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Zion Tech Group | AI Apps and IT Solutions',
    description:
      'Explore verified app links across growth, engineering, security, and infrastructure with delivery-ready implementation paths.',
    url: baseUrl,
    siteName: 'Zion Tech Group',
    images: [
      {
        url: '/og-home.svg',
        width: 1200,
        height: 630,
        type: 'image/svg+xml',
        alt: 'Zion Tech Group AI delivery playbooks and app library',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group | AI Apps and IT Solutions',
    description:
      'Explore verified app links across growth, engineering, security, and infrastructure with delivery-ready implementation paths.',
    images: ['/og-home.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sectionShellClassName = 'relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8';
const sectionScrollOffsetClassName = 'scroll-mt-24 md:scroll-mt-28';

export default function Page() {
  const categoryPills = Array.from(new Set(featuredApps.map((app) => app.category)));
  const categoryBreakdown = categoryPills.map((category) => ({
    category,
    count: featuredApps.filter((app) => app.category === category).length,
  }));
  const launchOptions = featuredApps.slice(0, 4);
  const structuredDataJson = JSON.stringify(homeStructuredData);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 left-[-9rem] h-[26rem] w-[26rem] rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute right-[-10rem] top-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/3 h-[20rem] w-[20rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.24),transparent_48%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:56px_56px] opacity-25 [mask-image:radial-gradient(circle_at_center,white,transparent_80%)]" />
      </div>

      <section className={`${sectionShellClassName} pb-16 pt-20 sm:pb-24 sm:pt-28`}>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-300/40 bg-purple-500/10 px-5 py-2.5 text-sm font-medium text-purple-100 shadow-[0_0_0_1px_rgba(168,85,247,0.18)]">
              <span className="inline-block h-2 w-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
              AI products, secure engineering, and delivery at scale
            </div>
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Design, Launch, and Scale
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
                {' '}
                AI Operations
              </span>{' '}
              With Confidence
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Zion Tech Group combines production-ready AI apps with expert engineering and
              security-first delivery. Evaluate live routes, validate priorities fast, and move from
              pilot to scaled operations with a practical execution plan.
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-purple-700/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-700/40 hover:from-purple-500 hover:to-pink-500"
              >
                Explore Solutions →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-500/80 bg-slate-900/60 px-8 py-3.5 text-base font-semibold text-slate-100 transition hover:border-purple-300/70 hover:text-white hover:bg-slate-800/60"
              >
                Book Strategy Session
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-purple-400/40 bg-purple-500/10 px-8 py-3.5 text-base font-semibold text-purple-100 transition hover:bg-purple-500/20"
              >
                View Pricing
              </Link>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {strategicOutcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-start gap-3 rounded-xl border border-slate-700/70 bg-slate-900/65 px-4 py-3.5 text-sm text-slate-100"
                >
                  <span className="mt-0.5 flex-shrink-0 text-purple-400">✓</span>
                  {outcome}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {momentumSignals.slice(0, 6).map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1.5 text-xs text-purple-100"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950/80 p-7 shadow-2xl shadow-purple-900/25 backdrop-blur-md ring-1 ring-white/5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600">
                <span className="text-lg">🚀</span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-purple-200">
                  Launch roadmap
                </p>
                <h2 className="text-lg font-semibold text-white">Your first rollout</h2>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              Select a focused use case, ship a measurable pilot, and build toward enterprise-ready
              operations.
            </p>

            <ul className="mt-6 space-y-3">
              {launchOptions.map((app) => (
                <li
                  key={app.href}
                  className="group rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3.5 text-sm text-slate-100 transition hover:border-purple-400/40 hover:bg-slate-900/70"
                >
                  <p className="font-semibold text-white group-hover:text-purple-200">{app.name}</p>
                  <p className="mt-1 text-xs text-slate-300">{app.description}</p>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-purple-400/30 bg-gradient-to-br from-purple-500/15 to-fuchsia-500/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-purple-200">
                Top app categories
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2.5">
                {categoryBreakdown.slice(0, 4).map((item) => (
                  <div
                    key={item.category}
                    className="rounded-lg border border-slate-700/70 bg-slate-900/70 px-3 py-2.5"
                  >
                    <p className="text-lg font-bold text-white">{item.count}</p>
                    <p className="text-xs text-slate-200">{item.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-900/80 to-slate-950/60 p-6 sm:p-8 ring-1 ring-white/5">
          <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">
            Core Services
          </p>
          <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
            Professional services for every stage of your AI journey
          </h2>
          <p className="mt-2 text-sm text-slate-200">
            From AI model development to talent matching and micro-SaaS deployment — we deliver
            end-to-end solutions.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {coreServices.slice(0, 5).map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-4 transition hover:border-purple-400/50 hover:bg-slate-900/80 hover:-translate-y-0.5"
              >
                <span className="text-2xl">{service.icon}</span>
                <h3 className="mt-3 text-base font-semibold text-white transition group-hover:text-purple-300">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm leading-5 text-slate-200">{service.description}</p>
                <p className="mt-2 text-xs font-semibold text-purple-300">Learn more →</p>
              </Link>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {coreServices.slice(5).map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-4 transition hover:border-purple-400/50 hover:bg-slate-900/80 hover:-translate-y-0.5"
              >
                <span className="text-2xl">{service.icon}</span>
                <h3 className="mt-3 text-base font-semibold text-white transition group-hover:text-purple-300">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm leading-5 text-slate-200">{service.description}</p>
                <p className="mt-2 text-xs font-semibold text-purple-300">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {valueHighlights.map((item) => (
            <div
              key={item.label}
              className="group rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-900/80 to-slate-950/60 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-purple-500/10"
            >
              <p className="text-4xl font-extrabold bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-white">{item.label}</p>
              <p className="mt-1 text-xs text-slate-300">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-700/70 bg-slate-900/65 p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">
            Jump to what matters
          </p>
          <nav aria-label="Homepage quick links" className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {quickJumpLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 transition hover:border-purple-400/50 hover:bg-slate-900/80"
              >
                <p className="text-sm font-semibold text-white">{link.label}</p>
                <p className="mt-1 text-xs text-slate-300">{link.description}</p>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" aria-hidden="true" />

      <section className={`${sectionShellClassName} py-20`}>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-300">
            Trusted by teams worldwide
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Built for Enterprise Scale
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-6">
          {companyStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group rounded-2xl border bg-gradient-to-br p-6 text-center shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:shadow-purple-500/15 ${
                index === 3
                  ? 'border-purple-500/40 from-purple-900/40 to-slate-900/70 ring-1 ring-purple-500/20'
                  : 'border-slate-700/60 from-slate-900/80 to-slate-950/60 hover:border-purple-400/40'
              }`}
            >
              <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-300">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-white">{stat.label}</p>
              <p className="mt-1 text-xs text-slate-300">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" aria-hidden="true" />

      <section className={`${sectionShellClassName} py-16`}>
        <div className="rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-900/80 to-slate-950/70 p-6 sm:p-10 ring-1 ring-white/5">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-purple-300">
              Core Engineering Services
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Expert teams for AI, cloud, security, and development
            </h2>
            <p className="mt-3 text-slate-200">
              Beyond our AI app suite, we deliver custom engineering services — from AI model development
              to cloud migration and cybersecurity audits.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {coreServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-2xl border border-slate-700/60 bg-slate-950/70 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-xl border border-slate-700/80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-2.5 text-3xl shadow-inner">
                    {service.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-white transition group-hover:text-purple-300">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-200">{service.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-slate-600/80 bg-slate-800/60 px-2.5 py-1 text-[11px] text-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm font-semibold text-purple-300 group-hover:text-purple-200">Learn more →</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex rounded-xl border border-purple-400/40 bg-purple-500/10 px-7 py-3.5 text-sm font-semibold text-purple-100 transition hover:bg-purple-500/20 hover:-translate-y-0.5"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      <section
        id="roi-planner"
        className={`${sectionShellClassName} ${sectionScrollOffsetClassName} py-12`}
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
              Interactive Planning
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Estimate your AI delivery upside in minutes
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Use this estimator to model potential impact from your first production automation
              rollout. It helps align stakeholders around expected effort, payback, and business
              value before kickoff.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li className="rounded-xl border border-slate-700/70 bg-slate-900/60 px-4 py-3">
                Map estimated savings to measurable workflow improvements.
              </li>
              <li className="rounded-xl border border-slate-700/70 bg-slate-900/60 px-4 py-3">
                Test assumptions with finance, operations, and engineering leaders.
              </li>
              <li className="rounded-xl border border-slate-700/70 bg-slate-900/60 px-4 py-3">
                Translate pilot outcomes into a scale-ready implementation plan.
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-lg border border-purple-400/40 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-100 transition hover:bg-purple-500/20"
            >
              Request a tailored ROI workshop
            </Link>
          </div>
          <ROIImpactEstimator />
        </div>
      </section>

      <section
        id="launch-advisor"
        className={`${sectionShellClassName} ${sectionScrollOffsetClassName} py-6`}
      >
        <LaunchReadinessAdvisor />
      </section>

      <div className="section-divider mx-auto max-w-5xl" aria-hidden="true" />

      <section className={`${sectionShellClassName} py-16`}>
        <div className="rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-900/80 to-slate-900/50 p-6 sm:p-10 ring-1 ring-white/5">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-purple-300">
              Why teams choose Zion
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Experience-led design with execution-ready delivery
            </h2>
            <p className="mt-3 max-w-2xl text-slate-200">
              We pair product thinking, engineering rigor, and security-by-default delivery so your
              teams can move quickly without compromising reliability.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {differentiationPoints.map((point, index) => (
              <div
                key={point.title}
                className="rounded-2xl border border-slate-700/60 bg-slate-950/70 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:border-purple-400/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/20 to-fuchsia-600/20 text-3xl ring-1 ring-purple-500/20">
                    {point.icon}
                  </div>
                  <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 text-xs font-semibold text-purple-200">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-200">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionShellClassName} py-16`}>
        <Testimonials />
      </section>

      <div className="section-divider mx-auto max-w-5xl" aria-hidden="true" />

      <section id="case-studies" className={`${sectionShellClassName} ${sectionScrollOffsetClassName} py-16`}>
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/75 to-slate-950/70 p-6 sm:p-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
                Case Studies
              </p>
              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                Real Results from Real Teams
              </h2>
              <p className="mt-3 max-w-2xl text-slate-300">
                See how organizations across industries use Zion solutions to drive measurable outcomes.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="rounded-lg border border-slate-600 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-purple-400 hover:text-white"
            >
              View all case studies
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {caseStudyTeasers.map((study) => (
              <Link
                key={study.title}
                href="/case-studies"
                className="group rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5 transition hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-xl border border-slate-700 bg-slate-900/80 p-2.5 text-2xl">
                    {study.icon}
                  </span>
                  <span className="rounded-full border border-purple-400/40 bg-purple-500/10 px-2.5 py-1 text-xs font-medium text-purple-100">
                    {study.result}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-white transition group-hover:text-purple-300">
                  {study.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-slate-400">{study.industry}</p>
                <p className="mt-2 text-sm leading-5 text-slate-300">{study.description}</p>
                <p className="mt-3 text-xs font-semibold text-purple-300">Read more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionShellClassName} py-12`}>
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
              Solution pillars
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Choose the path that matches your priorities
            </h2>
          </div>
          <Link
            href="/contact"
            className="rounded-lg border border-slate-600 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-purple-400 hover:text-white"
          >
            Discuss your roadmap
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {spotlightPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-purple-500/20 bg-slate-900/65 p-6 shadow-lg shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-purple-500/15"
            >
              <div className="inline-flex rounded-xl border border-slate-700 bg-slate-900/80 p-2.5 text-3xl">
                {pillar.icon}
              </div>
              <h2 className="mt-4 text-xl font-semibold text-white">{pillar.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{pillar.description}</p>
              <Link
                href={pillar.href}
                className="mt-5 inline-flex text-sm font-semibold text-purple-300 transition hover:text-purple-200"
              >
                {pillar.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className={`${sectionShellClassName} py-12`}>
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/75 to-slate-950/70 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            What We Deliver
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            A full-service lifecycle from strategy to scale
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            From discovery and roadmap planning to implementation, training, and ongoing optimization — we support every stage of your AI journey.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {serviceCapabilities.map((cap) => (
              <Link
                key={cap.title}
                href={cap.href}
                className="group rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5 transition hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <span className="text-3xl">{cap.icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-white transition group-hover:text-purple-300">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{cap.description}</p>
                <p className="mt-3 text-xs font-semibold text-purple-300">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" aria-hidden="true" />

      <section id="industry-solutions" className={`${sectionShellClassName} ${sectionScrollOffsetClassName} py-16`}>
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/75 to-slate-950/70 p-6 sm:p-10">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
              Industry Solutions
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              AI workflows tailored to your industry
            </h2>
            <p className="mt-3 text-slate-300">
              Every vertical has unique workflows, compliance requirements, and integration needs. Explore
              how Zion apps map to your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industrySolutions.map((sol) => (
              <Link
                key={sol.industry}
                href={sol.href}
                className="group rounded-2xl border border-slate-700/60 bg-slate-950/70 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-xl border border-slate-700 bg-slate-900/80 p-2.5 text-3xl">
                    {sol.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-white transition group-hover:text-purple-300">
                    {sol.industry}
                  </h3>
                </div>
                <p className="mt-3 text-sm font-semibold text-purple-200">{sol.headline}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{sol.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {sol.apps.map((app) => (
                    <span
                      key={app}
                      className="rounded-full border border-slate-600/80 bg-slate-800/60 px-2.5 py-1 text-[11px] text-slate-300"
                    >
                      {app}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm font-semibold text-purple-300">Explore solutions →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="featured-library"
        className={`${sectionShellClassName} ${sectionScrollOffsetClassName} py-12`}
      >
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
              Featured App Library
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Explore High-Impact Zion Apps by Outcome
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Browse production-focused app routes across growth, engineering, security, and
              infrastructure.
            </p>
          </div>
          <Link
            href="/services"
            className="rounded-lg border border-slate-600 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-purple-400 hover:text-white"
          >
            Browse all services
          </Link>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {categoryBreakdown.map((item) => (
            <span
              key={item.category}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/75 px-3 py-1.5 text-xs font-medium text-slate-200"
            >
              <span>{item.category}</span>
              <span className="rounded-full bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-300">
                {item.count}
              </span>
            </span>
          ))}
        </div>

        <FeaturedAppGrid apps={featuredApps} />
      </section>

      <section
        id="platform-pages"
        className={`${sectionShellClassName} ${sectionScrollOffsetClassName} py-8`}
      >
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
              Additional Platform Pages
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Explore More Industry and Micro-SaaS Routes
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Discover more launch-ready pages beyond the core featured app library, including
              vertical solutions and micro-SaaS offerings.
            </p>
          </div>
          <Link
            href="/micro-saas-services"
            className="rounded-lg border border-slate-600 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-purple-400 hover:text-white"
          >
            Open micro-SaaS hub
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {platformPages.slice(0, 15).map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 transition hover:-translate-y-1 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <span className="rounded-full border border-slate-600 bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-200">
                {page.tag}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white transition group-hover:text-purple-300">
                {page.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{page.description}</p>
              <p className="mt-4 text-sm font-semibold text-purple-300">Open page →</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="innovation-bundles" className={`${sectionShellClassName} ${sectionScrollOffsetClassName} py-10`}>
        <div className="rounded-3xl border border-purple-500/25 bg-gradient-to-br from-slate-900/80 to-slate-950/70 p-6 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
              New ideas for faster rollout
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Start with pre-designed innovation bundles
            </h2>
            <p className="mt-3 text-slate-300">
              Each bundle groups high-impact feature pages into a practical launch path your team can
              execute immediately.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {innovationBundles.map((bundle) => (
              <div
                key={bundle.title}
                className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5 shadow-lg shadow-black/20"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-3xl">{bundle.icon}</span>
                  <span className="rounded-full border border-purple-400/40 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-100">
                    {bundle.impact}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{bundle.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{bundle.description}</p>
                <ul className="mt-4 space-y-2">
                  {bundle.modules.map((module) => (
                    <li key={module.href}>
                      <Link
                        href={module.href}
                        className="text-sm text-slate-300 transition hover:text-purple-300"
                      >
                        {module.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={bundle.href}
                  className="mt-5 inline-flex text-sm font-semibold text-purple-300 transition hover:text-purple-200"
                >
                  {bundle.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionShellClassName} py-12`}>
        <SolutionFinder apps={featuredApps} />
      </section>

      <section className={`${sectionShellClassName} py-12`}>
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/75 to-slate-950/70 p-6 sm:p-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Browse by Business Goal</h2>
          <p className="mt-2 max-w-3xl text-slate-300">
            Jump directly to app pages based on the result you want to drive.
          </p>

          <AppCollectionGrid collections={appCollections} />
        </div>
      </section>

      <section className={`${sectionShellClassName} py-12`}>
        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Delivery timeline
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            A practical path from idea to scaled operations
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {deliverySteps.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-slate-700/70 bg-slate-950/65 p-5"
              >
                <span className="absolute right-4 top-4 rounded-full border border-slate-700 bg-slate-900 px-2 py-0.5 text-[11px] text-slate-300">
                  Step {index + 1}
                </span>
                <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">
                  {step.duration}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="delivery-faq"
        className={`${sectionShellClassName} ${sectionScrollOffsetClassName} py-12`}
      >
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/80 to-slate-950/70 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">FAQ</p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Answers for delivery and adoption planning
          </h2>
          <p className="mt-2 max-w-3xl text-slate-300">
            Common questions from teams evaluating Zion app implementations.
          </p>

          <div className="mt-6 divide-y divide-slate-700/70 rounded-2xl border border-slate-700/70 bg-slate-950/60">
            {faqItems.map((item) => (
              <details key={item.question} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                  <span className="text-sm font-semibold text-white">{item.question}</span>
                  <span className="mt-0.5 text-purple-300 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionShellClassName} py-12`}>
        <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-slate-900/80 to-slate-950/60 p-6 sm:p-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
              Enterprise Trust & Security
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Security and compliance built into every layer
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              Zion products are designed to meet the strictest enterprise requirements from day one —
              so you can deploy with confidence and pass audits without surprises.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5 shadow-lg shadow-black/20"
              >
                <span className="flex-shrink-0 rounded-xl border border-slate-700 bg-slate-900/80 p-3 text-2xl">
                  {badge.icon}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">{badge.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="start-project"
        className={`${sectionShellClassName} ${sectionScrollOffsetClassName} pb-28 pt-16`}
      >
        <div className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/50 via-fuchsia-900/40 to-pink-900/50 p-10 text-center shadow-2xl shadow-purple-900/30 sm:p-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]" aria-hidden="true" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Ready for a Tailored AI Delivery Plan?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-100">
              Combine app modules, integration architecture, and engineering support into one
              measurable roadmap.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/services"
                className="rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Explore Services
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 hover:-translate-y-0.5"
              >
                Learn About Zion
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-purple-300/50 bg-purple-500/20 px-8 py-3.5 text-sm font-semibold text-purple-100 transition hover:bg-purple-500/30 hover:-translate-y-0.5"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredDataJson }} />
    </div>
  );
}
