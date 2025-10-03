// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Code, 
  Cloud, 
  Shield, 
  Network, 
  Server, 
  BarChart3, 
  Settings, 
  Zap, 
  Monitor, 
  Search, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Users,
  Database,
  Globe,
  Smartphone,
  Lock,
  TrendingUp,
  Target,
  Clock,
  Star,
  Phone,
  Mail,
  MapPin,
  Rocket,
  Cpu,
  FileText,
  Camera,
  Mic,
  Eye,
  Heart,
  ShoppingCart,
  CreditCard,
  Building,
  Wrench,
  Layers,
  GitBranch,
  Container,
  Key,
  AlertTriangle,
  CheckSquare,
  PieChart,
  Activity,
  Zap as Lightning,
  Package,
  Share2,
  FileCheck,
  GraduationCap,
  Calendar,
  Car,
  FlaskConical,
  Truck,
  PenTool,
  Scan,
  CloudRain,
  Bot
} from 'lucide-react';

export default function EnhancedServicesCatalog() {
  const title = 'Comprehensive Services Catalog — Zion Tech Group';
  const description = 'Production-ready micro SaaS, AI, and IT solutions with transparent pricing, fast delivery, and proven ROI. Expert consulting, custom development, and innovative technology solutions. Contact us for personalized solutions.';

  const microSaaSServices = [
    {
      name: 'AI-Powered Customer Support Automation',
      description: 'Intelligent chatbot with sentiment analysis, ticket routing, and escalation management',
      icon: MessageSquare,
      features: [
        'Natural language processing with 95% accuracy',
        'Multi-channel support (web, email, social media)',
        'Sentiment analysis and escalation triggers',
        'Integration with CRM and helpdesk systems',
        'Real-time analytics and performance metrics',
        'Custom training on your business data'
      ],
      pricing: '$1,200 - $8,500/month',
      delivery: '2-4 weeks',
      category: 'Customer Experience',
      benefits: 'Reduce support costs by 60%, improve response time by 80%',
      marketPrice: '$2,000 - $15,000/month',
      link: '/services/micro-saas/ai-customer-support'
    },
    {
      name: 'Cloud Cost Optimization Platform',
      description: 'Automated cloud cost monitoring, rightsizing, and savings recommendations',
      icon: TrendingUp,
      features: [
        'Real-time cost anomaly detection',
        'Automated rightsizing recommendations',
        'Budget alerts and forecasting',
        'Multi-cloud support (AWS, Azure, GCP)',
        'Executive dashboards and reports',
        'ROI tracking and savings validation'
      ],
      pricing: '$299 - $2,500/month',
      delivery: '1-2 weeks',
      category: 'FinOps',
      benefits: 'Average 35% cloud cost reduction, ROI within 3 months',
      marketPrice: '$500 - $5,000/month',
      link: '/services/micro-saas/cloud-cost-optimization'
    },
    {
      name: 'AI Content Localization Suite',
      description: 'Automated translation, localization, and SEO optimization for global markets',
      icon: Globe,
      features: [
        'Neural machine translation with tone control',
        'Cultural adaptation and localization',
        'SEO optimization for target markets',
        'Content workflow management',
        'Quality assurance and human review',
        'Analytics and performance tracking'
      ],
      pricing: '$299 - $1,999/month',
      delivery: '2-3 weeks',
      category: 'Globalization',
      benefits: 'Reduce localization costs by 60%, faster time-to-market',
      marketPrice: '$500 - $3,500/month',
      link: '/services/micro-saas/ai-content-localization'
    },
    {
      name: 'AI-Powered Healthcare Appointment Scheduler',
      description: 'Revolutionary appointment scheduling platform with AI optimization and virtual consultations',
      icon: Heart,
      features: [
        'AI-powered scheduling optimization',
        'Patient management system with medical history',
        'Virtual consultation platform',
        'Multi-channel booking (web, mobile, phone)',
        'Advanced analytics dashboard',
        'Automated communication and reminders'
      ],
      pricing: '$199 - $1,299/month',
      delivery: '2-4 weeks',
      category: 'Healthcare',
      benefits: 'Reduce no-shows by 40%, increase revenue by 25%',
      marketPrice: '$350 - $2,200/month',
      link: '/services/micro-saas/ai-appointment-scheduler'
    },
    {
      name: 'E-commerce Analytics Dashboard',
      description: 'Real-time analytics, conversion tracking, and customer behavior insights',
      icon: ShoppingCart,
      features: [
        'Real-time sales and conversion tracking',
        'Customer journey analysis',
        'Inventory management integration',
        'Marketing campaign performance',
        'Predictive analytics for demand',
        'Custom reporting and alerts'
      ],
      pricing: '$199 - $1,800/month',
      delivery: '1-3 weeks',
      category: 'E-commerce',
      benefits: 'Increase conversion rates by 25%, optimize inventory',
      marketPrice: '$400 - $6,000/month',
      link: '/services/micro-saas/ecommerce-analytics'
    },
    {
      name: 'Remote Team Collaboration Hub',
      description: 'Integrated workspace with project management, communication, and productivity tools',
      icon: Users,
      features: [
        'Project management and task tracking',
        'Video conferencing and chat',
        'Document collaboration',
        'Time tracking and productivity metrics',
        'Integration with popular tools',
        'Custom workflows and automation'
      ],
      pricing: '$299 - $2,200/month',
      delivery: '2-4 weeks',
      category: 'Productivity',
      benefits: 'Improve team productivity by 30%, reduce communication overhead',
      marketPrice: '$500 - $8,000/month',
      link: '/services/micro-saas/team-collaboration'
    },
    {
      name: 'AI-Powered Lead Scoring & Qualification',
      description: 'Intelligent lead scoring with behavioral analysis and conversion prediction',
      icon: Target,
      features: [
        'Behavioral scoring and lead qualification',
        'Predictive conversion modeling',
        'Multi-channel lead tracking',
        'Automated follow-up sequences',
        'CRM integration and synchronization',
        'Real-time lead alerts and notifications'
      ],
      pricing: '$399 - $3,500/month',
      delivery: '2-3 weeks',
      category: 'Sales Automation',
      benefits: 'Increase conversion rates by 45%, reduce sales cycle by 30%',
      marketPrice: '$800 - $12,000/month',
      link: '/services/micro-saas/lead-scoring'
    },
    {
      name: 'Smart Inventory Management System',
      description: 'AI-driven inventory optimization with demand forecasting and automated reordering',
      icon: Package,
      features: [
        'Demand forecasting and trend analysis',
        'Automated reorder point calculations',
        'Multi-location inventory tracking',
        'Supplier management and procurement',
        'Real-time stock level monitoring',
        'Integration with POS and e-commerce platforms'
      ],
      pricing: '$199 - $2,800/month',
      delivery: '2-4 weeks',
      category: 'Supply Chain',
      benefits: 'Reduce stockouts by 60%, optimize inventory costs by 25%',
      marketPrice: '$500 - $8,000/month',
      link: '/services/micro-saas/inventory-management'
    },
    {
      name: 'AI Social Media Management Suite',
      description: 'Automated social media posting, engagement, and analytics with AI content generation',
      icon: Share2,
      features: [
        'AI-generated content and captions',
        'Optimal posting time recommendations',
        'Multi-platform scheduling and publishing',
        'Engagement tracking and analytics',
        'Hashtag research and optimization',
        'Competitor analysis and benchmarking'
      ],
      pricing: '$149 - $1,500/month',
      delivery: '1-2 weeks',
      category: 'Social Media',
      benefits: 'Increase engagement by 50%, save 20 hours/week on content creation',
      marketPrice: '$300 - $5,000/month',
      link: '/services/micro-saas/social-media-management'
    },
    {
      name: 'AI Contract Summarizer for SMBs',
      description: 'Summarize lengthy contracts, extract key clauses, deadlines, and risks automatically.',
      icon: FileText,
      features: [
        'Clause extraction and risk scoring',
        'Deadline and obligation reminders',
        'Comparison against standard templates',
        'Multi-language legal document support',
        'Export to PDF and Word with highlights',
        'Integrations with Google Drive and SharePoint'
      ],
      pricing: '$99 - $799/month',
      delivery: '1-2 weeks',
      category: 'Legal Tech',
      benefits: 'Reduce review time by 70%, lower legal costs',
      marketPrice: '$200 - $1,500/month',
      link: '/services/micro-saas/ai-contract-summarizer'
    },
    {
      name: 'Technical SEO Auditor',
      description: 'Automated site crawling, Core Web Vitals, schema, and backlink health with actionable fixes.',
      icon: Search,
      features: [
        'Weekly automated crawls and issue tracker',
        'Core Web Vitals and performance insights',
        'Structured data/schema validation',
        'Sitemap and robots checks',
        'Backlink and anchor text analysis',
        'Exportable developer-ready fix list'
      ],
      pricing: '$59 - $499/month',
      delivery: 'Instant',
      category: 'Marketing',
      benefits: 'Improve SEO by 30%+, faster fixes for devs',
      marketPrice: '$99 - $900/month',
      link: '/services/micro-saas/technical-seo-auditor'
    },
    {
      name: 'Invoice OCR & AP Automation',
      description: 'Accurate invoice data capture, validation, and approval workflows with ERP export.',
      icon: DollarSign,
      features: [
        'Line-item extraction and tax detection',
        'Fraud and duplicate invoice checks',
        'Multi-currency and vendor normalizations',
        'Approval routing and audit trails',
        'QuickBooks/Xero/NetSuite exports',
        'SOC 2 ready controls'
      ],
      pricing: '$149 - $1,499/month',
      delivery: '1-2 weeks',
      category: 'Finance',
      benefits: 'Cut AP processing cost by 60%, faster cycle time',
      marketPrice: '$250 - $2,500/month',
      link: '/services/micro-saas/invoice-ocr'
    },
    {
      name: 'Automated Email Marketing Platform',
      description: 'AI-powered email campaigns with personalization, A/B testing, and behavioral triggers',
      icon: Mail,
      features: [
        'AI-driven email personalization',
        'Behavioral trigger automation',
        'A/B testing and optimization',
        'Advanced segmentation and targeting',
        'Deliverability optimization',
        'Comprehensive analytics and reporting'
      ],
      pricing: '$99 - $1,200/month',
      delivery: '1-2 weeks',
      category: 'Email Marketing',
      benefits: 'Increase open rates by 40%, boost click-through rates by 35%',
      marketPrice: '$200 - $4,000/month',
      link: '/services/micro-saas/email-marketing'
    },
    {
      name: 'AI-Powered Document Management System',
      description: 'Intelligent document organization, search, and workflow automation',
      icon: FileText,
      features: [
        'AI-powered document classification',
        'Advanced search with natural language',
        'Automated workflow routing',
        'Version control and collaboration',
        'Compliance and audit trails',
        'Integration with business applications'
      ],
      pricing: '$199 - $2,200/month',
      delivery: '2-3 weeks',
      category: 'Document Management',
      benefits: 'Reduce document search time by 80%, improve compliance',
      marketPrice: '$400 - $6,000/month',
      link: '/services/micro-saas/document-management'
    },
    {
      name: 'Smart Contract Management Platform',
      description: 'AI-driven contract analysis, risk assessment, and automated compliance monitoring',
      icon: FileCheck,
      features: [
        'Contract analysis and risk identification',
        'Automated compliance monitoring',
        'Renewal and expiration alerts',
        'Contract performance tracking',
        'Template library and generation',
        'Integration with legal and procurement systems'
      ],
      pricing: '$499 - $4,500/month',
      delivery: '3-5 weeks',
      category: 'Legal Tech',
      benefits: 'Reduce contract review time by 70%, minimize legal risks',
      marketPrice: '$1,000 - $15,000/month',
      link: '/services/micro-saas/contract-management'
    },
    {
      name: 'AI Customer Feedback Analysis Platform',
      description: 'Automated sentiment analysis, feedback categorization, and actionable insights',
      icon: MessageSquare,
      features: [
        'Real-time sentiment analysis',
        'Feedback categorization and tagging',
        'Trend analysis and reporting',
        'Competitor comparison insights',
        'Automated response recommendations',
        'Integration with review platforms'
      ],
      pricing: '$149 - $1,800/month',
      delivery: '1-3 weeks',
      category: 'Customer Intelligence',
      benefits: 'Improve customer satisfaction by 25%, identify issues faster',
      marketPrice: '$300 - $5,000/month',
      link: '/services/micro-saas/feedback-analysis'
    },
    {
      name: 'Automated HR Recruitment Platform',
      description: 'AI-powered candidate screening, interview scheduling, and talent pipeline management',
      icon: Users,
      features: [
        'AI resume screening and matching',
        'Automated interview scheduling',
        'Candidate pipeline management',
        'Skills assessment and testing',
        'Background check integration',
        'Analytics and reporting dashboard'
      ],
      pricing: '$299 - $3,200/month',
      delivery: '2-4 weeks',
      category: 'HR Tech',
      benefits: 'Reduce hiring time by 50%, improve candidate quality',
      marketPrice: '$600 - $10,000/month',
      link: '/services/micro-saas/hr-recruitment'
    },
    {
      name: 'AI-Powered Financial Planning Tool',
      description: 'Personalized financial advice, budgeting, and investment recommendations',
      icon: DollarSign,
      features: [
        'Personalized financial planning',
        'Automated budgeting and tracking',
        'Investment recommendations',
        'Goal setting and progress monitoring',
        'Tax optimization strategies',
        'Financial health scoring'
      ],
      pricing: '$99 - $899/month',
      delivery: '2-3 weeks',
      category: 'FinTech',
      benefits: 'Help users save 20% more, improve financial literacy',
      marketPrice: '$200 - $3,000/month',
      link: '/services/micro-saas/financial-planning'
    },
    {
      name: 'Smart Energy Management System',
      description: 'AI-driven energy optimization for buildings with cost reduction and sustainability tracking',
      icon: Zap,
      features: [
        'Real-time energy monitoring',
        'Predictive maintenance alerts',
        'Cost optimization recommendations',
        'Sustainability reporting',
        'Integration with smart devices',
        'Carbon footprint tracking'
      ],
      pricing: '$199 - $2,500/month',
      delivery: '2-4 weeks',
      category: 'Energy Tech',
      benefits: 'Reduce energy costs by 30%, improve sustainability metrics',
      marketPrice: '$400 - $8,000/month',
      link: '/services/micro-saas/energy-management'
    },
    {
      name: 'AI-Powered Learning Management System',
      description: 'Personalized learning paths, progress tracking, and automated assessment',
      icon: GraduationCap,
      features: [
        'Personalized learning paths',
        'Automated assessment and grading',
        'Progress tracking and analytics',
        'Content recommendation engine',
        'Gamification and engagement tools',
        'Integration with HR systems'
      ],
      pricing: '$299 - $2,800/month',
      delivery: '3-5 weeks',
      category: 'EdTech',
      benefits: 'Improve learning outcomes by 40%, reduce training costs',
      marketPrice: '$600 - $12,000/month',
      link: '/services/micro-saas/learning-management'
    },
    {
      name: 'Automated Compliance Monitoring Platform',
      description: 'Real-time compliance tracking, risk assessment, and regulatory reporting',
      icon: Shield,
      features: [
        'Real-time compliance monitoring',
        'Risk assessment and scoring',
        'Automated regulatory reporting',
        'Policy management and updates',
        'Audit trail and documentation',
        'Integration with business systems'
      ],
      pricing: '$499 - $4,200/month',
      delivery: '3-6 weeks',
      category: 'Compliance',
      benefits: 'Reduce compliance costs by 50%, minimize regulatory risks',
      marketPrice: '$1,000 - $20,000/month',
      link: '/services/micro-saas/compliance-monitoring'
    },
    {
      name: 'AI-Powered Project Management Suite',
      description: 'Intelligent project planning, resource allocation, and risk prediction',
      icon: Calendar,
      features: [
        'AI-powered project planning',
        'Resource allocation optimization',
        'Risk prediction and mitigation',
        'Progress tracking and reporting',
        'Team collaboration tools',
        'Integration with development tools'
      ],
      pricing: '$199 - $2,200/month',
      delivery: '2-3 weeks',
      category: 'Project Management',
      benefits: 'Improve project success rate by 35%, reduce delays',
      marketPrice: '$400 - $8,000/month',
      link: '/services/micro-saas/project-management'
    },
    {
      name: 'Smart Facility Management Platform',
      description: 'IoT-integrated facility monitoring, maintenance scheduling, and space optimization',
      icon: Building,
      features: [
        'IoT sensor integration',
        'Predictive maintenance scheduling',
        'Space utilization optimization',
        'Energy consumption monitoring',
        'Visitor management system',
        'Maintenance cost tracking'
      ],
      pricing: '$399 - $3,500/month',
      delivery: '3-5 weeks',
      category: 'Facility Management',
      benefits: 'Reduce maintenance costs by 25%, improve space efficiency',
      marketPrice: '$800 - $15,000/month',
      link: '/services/micro-saas/facility-management'
    }
    ,
    {
      name: 'Privacy-Safe Analytics Suite',
      description: 'Cookieless, GDPR/CCPA-compliant web/app analytics with funnel and attribution.',
      icon: PieChart,
      features: [
        'Cookieless tracking and anonymization',
        'UTM and multi-touch attribution',
        'Funnel, cohort, and retention analysis',
        'Embedded dashboards and exports',
        'Role-based access and SSO',
        'SDKs for web and mobile'
      ],
      pricing: '$49 - $799/month',
      delivery: 'Instant - 1 week',
      category: 'Analytics',
      benefits: 'Actionable insights without invasive tracking; safer compliance posture',
      marketPrice: '$99 - $1,500/month',
      link: '/services/micro-saas/privacy-analytics'
    },
    {
      name: 'Vendor Security Questionnaire Automation',
      description: 'Automate SIG/CAIQ/DDQ security questionnaires with AI-assisted evidence mapping.',
      icon: Shield,
      features: [
        'Upload questionnaires (XLSX/CSV/Portal)',
        'Knowledge base with reusable answers',
        'Evidence links and auto-mapping',
        'Reviewer workflows and approvals',
        'Export to vendor portals or PDFs',
        'Audit trail and change history'
      ],
      pricing: '$299 - $2,200/month',
      delivery: '1-2 weeks',
      category: 'Security',
      benefits: 'Cut completion time by 70%, respond consistently with less burnout',
      marketPrice: '$500 - $5,000/month',
      link: '/services/micro-saas/vendor-security-automation'
    },
    {
      name: 'Local SEO Booster for Multi-location',
      description: 'Automated GMB optimization, citation sync, and review response at scale.',
      icon: Search,
      features: [
        'GMB post scheduling and A/B tests',
        'Listing health and citation sync',
        'AI review reply and escalation',
        'Rank tracking by geo-grid',
        'Photo/video optimization',
        'Multi-brand, multi-location support'
      ],
      pricing: '$79 - $999/month',
      delivery: '1 week',
      category: 'Marketing',
      benefits: 'Increase local visibility, boost foot traffic and calls',
      marketPrice: '$120 - $1,800/month',
      link: '/services/micro-saas/local-seo-booster'
    },
    {
      name: 'Subscription Churn Rescue',
      description: 'Payment retrials, dunning, and AI save-offers to reduce involuntary churn.',
      icon: CreditCard,
      features: [
        'Smart payment retrials scheduling',
        'Network tokenization and updater',
        'AI offers and couponing',
        'Webhook integration with Stripe/Chargebee',
        'Churn prediction models',
        'Compliance-ready receipts and emails'
      ],
      pricing: '$149 - $1,500/month',
      delivery: '1-2 weeks',
      category: 'FinOps',
      benefits: 'Recover 20-40% of failed payments automatically',
      marketPrice: '$300 - $3,000/month',
      link: '/services/micro-saas/churn-rescue'
    },
    {
      name: 'AI Knowledge Base Widget',
      description: 'Site-embedded RAG bot grounded in your docs with guardrails and analytics.',
      icon: Bot,
      features: [
        'Crawler + file ingestion with PII redaction',
        'Vector and keyword hybrid retrieval',
        'Prompt rules, citations, and guardrails',
        'Feedback loop and answer ratings',
        'Embeddable widget + JS SDK',
        'Role-based content scoping'
      ],
      pricing: '$99 - $1,200/month',
      delivery: '1 week',
      category: 'Support',
      benefits: 'Deflect 40-60% tickets; faster, cited answers 24/7',
      marketPrice: '$200 - $2,500/month',
      link: '/services/micro-saas/ai-knowledge-widget'
    }
  ];

  const aiServices = [
    {
      name: 'AI Fraud Detection & Prevention Platform',
      description: 'Advanced AI-powered fraud detection with real-time monitoring and behavioral analysis',
      icon: Shield,
      features: [
        'Real-time fraud detection with sub-second response',
        'Behavioral analysis engine with ML models',
        'Multi-channel protection (e-commerce, mobile, API)',
        'Self-improving machine learning models',
        'Risk management dashboard',
        'Compliance and reporting features'
      ],
      pricing: '$499 - $2,999/month',
      delivery: '2-4 weeks',
      category: 'Security',
      benefits: 'Reduce fraud losses by 85%, minimize false positives by 60%',
      marketPrice: '$800 - $5,000/month',
      link: '/services/micro-saas/ai-fraud-detection'
    },
    {
      name: 'Computer Vision for Quality Control',
      description: 'AI-powered visual inspection for manufacturing, retail, and healthcare',
      icon: Eye,
      features: [
        'Real-time defect detection with 99.5% accuracy',
        'Custom model training for specific use cases',
        'Integration with existing production lines',
        'Automated reporting and analytics',
        'Edge deployment for low latency',
        'Continuous learning and improvement'
      ],
      pricing: '$3,500 - $25,000/month',
      delivery: '4-8 weeks',
      category: 'Computer Vision',
      benefits: 'Reduce defects by 90%, improve quality consistency',
      marketPrice: '$5,000 - $50,000/month',
      link: '/services/ai-services/computer-vision'
    },
    {
      name: 'Natural Language Processing Platform',
      description: 'Advanced NLP for document analysis, sentiment, and content generation',
      icon: FileText,
      features: [
        'Document classification and extraction',
        'Sentiment analysis and emotion detection',
        'Content generation and summarization',
        'Multi-language support',
        'Custom model fine-tuning',
        'API integration and deployment'
      ],
      pricing: '$2,000 - $15,000/month',
      delivery: '3-6 weeks',
      category: 'NLP',
      benefits: 'Automate 80% of document processing, improve accuracy',
      marketPrice: '$3,000 - $30,000/month',
      link: '/services/ai-services/nlp-platform'
    },
    {
      name: 'Predictive Analytics Engine',
      description: 'Machine learning models for forecasting, risk assessment, and optimization',
      icon: BarChart3,
      features: [
        'Time series forecasting',
        'Risk assessment and scoring',
        'Demand prediction and optimization',
        'Real-time model monitoring',
        'A/B testing and experimentation',
        'Custom algorithm development'
      ],
      pricing: '$4,000 - $20,000/month',
      delivery: '4-10 weeks',
      category: 'Predictive Analytics',
      benefits: 'Improve forecasting accuracy by 60%, reduce risks',
      marketPrice: '$6,000 - $40,000/month',
      link: '/services/ai-services/predictive-analytics'
    },
    {
      name: 'Voice Recognition & Speech Analytics',
      description: 'Advanced speech processing for call centers, meetings, and accessibility',
      icon: Mic,
      features: [
        'Real-time speech-to-text transcription',
        'Speaker identification and diarization',
        'Sentiment analysis from voice',
        'Call center analytics and insights',
        'Multi-language support',
        'Custom vocabulary and training'
      ],
      pricing: '$1,500 - $12,000/month',
      delivery: '3-5 weeks',
      category: 'Speech Processing',
      benefits: 'Improve call center efficiency by 50%, better customer insights',
      marketPrice: '$2,500 - $25,000/month',
      link: '/services/ai-services/voice-recognition'
    },
    {
      name: 'AI-Powered Fraud Detection',
      description: 'Real-time fraud prevention for financial services and e-commerce',
      icon: Shield,
      features: [
        'Real-time transaction monitoring',
        'Behavioral analysis and anomaly detection',
        'Machine learning model training',
        'Risk scoring and decision automation',
        'False positive reduction',
        'Compliance and audit trails'
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '6-12 weeks',
      category: 'Security',
      benefits: 'Reduce fraud losses by 85%, improve customer trust',
      marketPrice: '$8,000 - $60,000/month',
      link: '/services/ai-services/fraud-detection'
    },
    {
      name: 'Autonomous Document Processing',
      description: 'End-to-end document workflow automation with AI intelligence',
      icon: FileText,
      features: [
        'Intelligent document classification',
        'Data extraction and validation',
        'Workflow automation and routing',
        'Quality assurance and human review',
        'Integration with business systems',
        'Compliance and audit capabilities'
      ],
      pricing: '$2,500 - $18,000/month',
      delivery: '4-8 weeks',
      category: 'Document AI',
      benefits: 'Process documents 10x faster, reduce errors by 95%',
      marketPrice: '$4,000 - $35,000/month',
      link: '/services/ai-services/document-processing'
    },
    {
      name: 'AI-Powered Recommendation Engine',
      description: 'Advanced recommendation systems for e-commerce, content, and personalized experiences',
      icon: Target,
      features: [
        'Collaborative filtering algorithms',
        'Content-based recommendations',
        'Hybrid recommendation models',
        'Real-time personalization',
        'A/B testing and optimization',
        'Multi-domain recommendation support'
      ],
      pricing: '$1,500 - $12,000/month',
      delivery: '3-6 weeks',
      category: 'Recommendation Systems',
      benefits: 'Increase conversion rates by 35%, improve user engagement',
      marketPrice: '$3,000 - $25,000/month',
      link: '/services/ai-services/recommendation-engine'
    },
    {
      name: 'Autonomous Vehicle AI Systems',
      description: 'AI solutions for autonomous vehicles including perception, planning, and control',
      icon: Car,
      features: [
        'Computer vision for object detection',
        'Path planning and navigation',
        'Sensor fusion and data processing',
        'Real-time decision making',
        'Safety monitoring and validation',
        'Integration with vehicle systems'
      ],
      pricing: '$15,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'Autonomous Systems',
      benefits: 'Enable autonomous driving capabilities, improve safety',
      marketPrice: '$25,000 - $200,000/month',
      link: '/services/ai-services/autonomous-vehicles'
    },
    {
      name: 'AI-Powered Drug Discovery Platform',
      description: 'Machine learning for pharmaceutical research, molecular design, and drug development',
      icon: FlaskConical,
      features: [
        'Molecular property prediction',
        'Drug-target interaction modeling',
        'Compound optimization algorithms',
        'Clinical trial outcome prediction',
        'Toxicity and safety assessment',
        'Patent analysis and IP insights'
      ],
      pricing: '$8,000 - $50,000/month',
      delivery: '8-16 weeks',
      category: 'Healthcare AI',
      benefits: 'Accelerate drug discovery by 40%, reduce R&D costs',
      marketPrice: '$15,000 - $100,000/month',
      link: '/services/ai-services/drug-discovery'
    },
    {
      name: 'AI-Powered Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting and logistics optimization',
      icon: Truck,
      features: [
        'Demand forecasting and planning',
        'Inventory optimization algorithms',
        'Route optimization and logistics',
        'Supplier risk assessment',
        'Real-time supply chain monitoring',
        'Sustainability and carbon footprint tracking'
      ],
      pricing: '$3,000 - $20,000/month',
      delivery: '4-8 weeks',
      category: 'Supply Chain AI',
      benefits: 'Reduce supply chain costs by 25%, improve efficiency',
      marketPrice: '$6,000 - $40,000/month',
      link: '/services/ai-services/supply-chain-optimization'
    },
    {
      name: 'AI-Powered Cybersecurity Platform',
      description: 'Advanced threat detection, behavioral analysis, and automated response systems',
      icon: Shield,
      features: [
        'Behavioral anomaly detection',
        'Threat intelligence and analysis',
        'Automated incident response',
        'Zero-day threat detection',
        'Network traffic analysis',
        'Security orchestration and automation'
      ],
      pricing: '$4,000 - $25,000/month',
      delivery: '6-12 weeks',
      category: 'Cybersecurity AI',
      benefits: 'Detect threats 10x faster, reduce false positives by 80%',
      marketPrice: '$8,000 - $50,000/month',
      link: '/services/ai-services/cybersecurity-platform'
    },
    {
      name: 'Enterprise RAG Knowledge Platform',
      description: 'Secure Retrieval-Augmented Generation on your private data with governance and audit.',
      icon: Database,
      features: [
        'Document ingestion with PII redaction',
        'Vector search and hybrid retrieval',
        'Prompt controls, guardrails, and audit logs',
        'SSO, roles, and dataset scoping',
        'Human-in-the-loop feedback',
        'On-prem and cloud options'
      ],
      pricing: '$3,000 - $18,000/month',
      delivery: '4-8 weeks',
      category: 'GenAI',
      benefits: 'Reduce search time by 80%, safer AI answers',
      marketPrice: '$5,000 - $35,000/month',
      link: '/services/ai-services/enterprise-rag-platform'
    },
    {
      name: 'Agentic Sales Assistant',
      description: 'Autonomous SDR workflows for prospecting, outreach, qualification, and CRM updates.',
      icon: Target,
      features: [
        'Lead sourcing and enrichment',
        'Personalized multi-step outreach',
        'Meeting booking and objection handling',
        'Auto logging to Salesforce/HubSpot',
        'Safety guardrails and approval queues',
        'KPI dashboards and A/B testing'
      ],
      pricing: '$1,200 - $7,500/month',
      delivery: '2-4 weeks',
      category: 'RevOps',
      benefits: '2-3x pipeline, 50% less manual SDR work',
      marketPrice: '$2,000 - $12,000/month',
      link: '/services/ai-services/agentic-sales-assistant'
    },
    {
      name: 'AI-Powered Content Generation Suite',
      description: 'Advanced content creation including text, images, videos, and multimedia',
      icon: PenTool,
      features: [
        'Natural language content generation',
        'Image and video synthesis',
        'Content personalization and adaptation',
        'Brand voice and style consistency',
        'Multi-language content creation',
        'Content optimization and A/B testing'
      ],
      pricing: '$2,000 - $15,000/month',
      delivery: '3-6 weeks',
      category: 'Content AI',
      benefits: 'Reduce content creation time by 70%, improve quality',
      marketPrice: '$4,000 - $30,000/month',
      link: '/services/ai-services/content-generation'
    },
    {
      name: 'AI-Powered Medical Imaging Analysis',
      description: 'Advanced medical image analysis for diagnosis, treatment planning, and research',
      icon: Scan,
      features: [
        'Medical image classification and detection',
        'Automated diagnosis assistance',
        'Treatment planning optimization',
        'Medical image enhancement',
        'Integration with PACS systems',
        'Regulatory compliance and validation'
      ],
      pricing: '$5,000 - $35,000/month',
      delivery: '6-12 weeks',
      category: 'Medical AI',
      benefits: 'Improve diagnostic accuracy by 30%, reduce interpretation time',
      marketPrice: '$10,000 - $70,000/month',
      link: '/services/ai-services/medical-imaging'
    },
    {
      name: 'AI-Powered Financial Trading Platform',
      description: 'Algorithmic trading systems with market analysis, risk management, and execution',
      icon: TrendingUp,
      features: [
        'Market data analysis and prediction',
        'Algorithmic trading strategies',
        'Risk management and portfolio optimization',
        'Real-time execution and monitoring',
        'Backtesting and strategy validation',
        'Regulatory compliance and reporting'
      ],
      pricing: '$8,000 - $60,000/month',
      delivery: '8-16 weeks',
      category: 'FinTech AI',
      benefits: 'Improve trading performance by 25%, reduce risk exposure',
      marketPrice: '$15,000 - $120,000/month',
      link: '/services/ai-services/financial-trading'
    },
    {
      name: 'AI-Powered Climate Modeling System',
      description: 'Advanced climate prediction, environmental monitoring, and sustainability analytics',
      icon: CloudRain,
      features: [
        'Climate pattern prediction',
        'Environmental impact assessment',
        'Carbon footprint analysis',
        'Renewable energy optimization',
        'Weather forecasting and modeling',
        'Sustainability reporting and insights'
      ],
      pricing: '$3,500 - $25,000/month',
      delivery: '6-12 weeks',
      category: 'Climate AI',
      benefits: 'Improve climate predictions by 40%, optimize sustainability',
      marketPrice: '$7,000 - $50,000/month',
      link: '/services/ai-services/climate-modeling'
    },
    {
      name: 'AI-Powered Autonomous Robotics Platform',
      description: 'Intelligent robotics systems for manufacturing, logistics, and service applications',
      icon: Bot,
      features: [
        'Autonomous navigation and control',
        'Object recognition and manipulation',
        'Human-robot interaction systems',
        'Predictive maintenance and diagnostics',
        'Multi-robot coordination',
        'Safety monitoring and compliance'
      ],
      pricing: '$10,000 - $75,000/month',
      delivery: '10-20 weeks',
      category: 'Robotics AI',
      benefits: 'Increase automation efficiency by 50%, reduce operational costs',
      marketPrice: '$20,000 - $150,000/month',
      link: '/services/ai-services/autonomous-robotics'
    }
    ,
    {
      name: 'Marketing Mix Modeling (MMM) + Incrementality',
      description: 'Privacy-safe MMM to attribute impact across channels and optimize budgets.',
      icon: BarChart3,
      features: [
        'Bayesian MMM with priors for small data',
        'Geo experiments and switchback tests',
        'Scenario planning and budget optimizers',
        'ROAS, CAC, and LTV projections',
        'CSV, API, and BigQuery connectors',
        'Executive-ready reports'
      ],
      pricing: '$6,000 - $35,000/month',
      delivery: '6-10 weeks',
      category: 'Marketing Science',
      benefits: 'Confident spend allocation; reduce wasted ad spend by 20-30%',
      marketPrice: '$10,000 - $60,000/month',
      link: '/services/ai-services/mmm-incrementality'
    },
    {
      name: 'GenAI Safety & Governance Toolkit',
      description: 'Guardrails, red-teaming, and policy enforcement for safe, enterprise GenAI.',
      icon: Lock,
      features: [
        'Prompt and output filters',
        'PII detection and masking',
        'Policy packs (HIPAA, SOC2, GDPR)',
        'Safety evals and red-teaming',
        'Guarded tool-use and approvals',
        'Audit logs and reproducibility'
      ],
      pricing: '$3,500 - $20,000/month',
      delivery: '4-8 weeks',
      category: 'AI Governance',
      benefits: 'Ship AI safely faster; reduce risk of policy violations',
      marketPrice: '$6,000 - $40,000/month',
      link: '/services/ai-services/genai-governance'
    },
    {
      name: 'Edge Vision Inference Platform',
      description: 'Deploy compressed CV models to cameras/edge for low-latency detection and alerts.',
      icon: Eye,
      features: [
        'ONNX/TensorRT quantization',
        'OTA model updates and rollbacks',
        'Offline-first buffering',
        'Event rules and webhooks',
        'Fleet management dashboards',
        'Device health monitoring'
      ],
      pricing: '$2,500 - $18,000/month',
      delivery: '4-8 weeks',
      category: 'Edge AI',
      benefits: 'Reduce bandwidth; real-time insights on-site',
      marketPrice: '$5,000 - $35,000/month',
      link: '/services/ai-services/edge-vision'
    },
    {
      name: 'Agentic Backoffice Co-pilots',
      description: 'Approval-gated agents that execute ops tasks across SaaS tools with traces.',
      icon: Cpu,
      features: [
        'Toolformer-style tool selection',
        'Human-in-the-loop approvals',
        'Reproducible traces and logs',
        'Rate limit and data guardrails',
        'Playbooks and evaluation harness',
        'SOC2-ready controls'
      ],
      pricing: '$1,200 - $9,500/month',
      delivery: '2-5 weeks',
      category: 'Agentic AI',
      benefits: 'Automate repetitive ops; measurable throughput gains',
      marketPrice: '$2,000 - $15,000/month',
      link: '/services/ai-services/agentic-backoffice'
    }
  ];

  const itServices = [
    {
      name: 'Cloud Migration Services',
      description: 'Expert cloud migration for AWS, Azure, and GCP with zero downtime and cost optimization',
      icon: Cloud,
      features: [
        'Zero-downtime migration strategies',
        'Multi-cloud expertise (AWS, Azure, GCP)',
        'Infrastructure as Code implementation',
        'Security and compliance setup',
        'Cost optimization and monitoring',
        'Performance optimization and scaling'
      ],
      pricing: '$2,500 - $25,000/project',
      delivery: '2-8 weeks',
      category: 'Cloud Services',
      benefits: 'Reduce infrastructure costs by 40%, improve scalability',
      marketPrice: '$4,000 - $45,000/project',
      link: '/services/it-services/cloud-migration'
    },
    {
      name: 'DevOps & CI/CD Pipeline',
      description: 'Automated deployment pipelines with monitoring and security integration',
      icon: GitBranch,
      features: [
        'Automated CI/CD pipeline setup',
        'Infrastructure as Code (IaC)',
        'Container orchestration',
        'Monitoring and alerting',
        'Security scanning and compliance',
        'Performance optimization'
      ],
      pricing: '$5,000 - $35,000/project',
      delivery: '4-12 weeks',
      category: 'DevOps',
      benefits: 'Deploy 5x faster, reduce deployment failures by 90%',
      marketPrice: '$10,000 - $70,000/project',
      link: '/services/it-services/devops-pipeline'
    },
    {
      name: 'Cybersecurity & Compliance',
      description: 'Comprehensive security assessment, implementation, and compliance management',
      icon: Lock,
      features: [
        'Security assessment and penetration testing',
        'Compliance framework implementation (SOC 2, HIPAA, GDPR)',
        'Security monitoring and incident response',
        'Identity and access management',
        'Data protection and encryption',
        'Security training and awareness'
      ],
      pricing: '$3,000 - $50,000/project',
      delivery: '4-16 weeks',
      category: 'Security',
      benefits: 'Achieve compliance faster, reduce security risks',
      marketPrice: '$6,000 - $100,000/project',
      link: '/services/it-services/cybersecurity'
    },
    {
      name: 'Data Engineering & Analytics',
      description: 'Modern data platform with real-time processing and advanced analytics',
      icon: Database,
      features: [
        'Data lake and warehouse design',
        'Real-time data processing',
        'ETL/ELT pipeline development',
        'Business intelligence dashboards',
        'Machine learning data preparation',
        'Data governance and quality'
      ],
      pricing: '$6,000 - $45,000/project',
      delivery: '6-18 weeks',
      category: 'Data Services',
      benefits: 'Unlock data insights, improve decision-making',
      marketPrice: '$12,000 - $90,000/project',
      link: '/services/it-services/data-engineering'
    },
    {
      name: 'Platform Engineering',
      description: 'Internal developer platform with golden paths and self-service capabilities',
      icon: Layers,
      features: [
        'Developer portal and self-service tools',
        'Golden path templates and standards',
        'Multi-tenant infrastructure',
        'GitOps and automated deployments',
        'Monitoring and observability',
        'Security and compliance automation'
      ],
      pricing: '$10,000 - $60,000/project',
      delivery: '8-20 weeks',
      category: 'Platform Engineering',
      benefits: 'Accelerate development by 3x, improve consistency',
      marketPrice: '$20,000 - $120,000/project',
      link: '/services/it-services/platform-engineering'
    },
    {
      name: 'Observability & Monitoring',
      description: 'Comprehensive monitoring solution with logs, metrics, traces, and alerting',
      icon: Activity,
      features: [
        'Unified observability platform',
        'Application performance monitoring',
        'Infrastructure monitoring',
        'Log aggregation and analysis',
        'Distributed tracing',
        'Intelligent alerting and incident management'
      ],
      pricing: '$2,000 - $25,000/project',
      delivery: '2-8 weeks',
      category: 'Monitoring',
      benefits: 'Reduce MTTR by 70%, improve system reliability',
      marketPrice: '$4,000 - $50,000/project',
      link: '/services/it-services/observability'
    },
    {
      name: 'Enterprise Application Development',
      description: 'Custom enterprise applications with modern architecture and scalable design',
      icon: Code,
      features: [
        'Custom web and mobile applications',
        'Microservices architecture',
        'API development and integration',
        'Database design and optimization',
        'User experience and interface design',
        'Performance optimization and scaling'
      ],
      pricing: '$15,000 - $150,000/project',
      delivery: '12-32 weeks',
      category: 'Application Development',
      benefits: 'Streamline business processes, improve efficiency',
      marketPrice: '$30,000 - $300,000/project',
      link: '/services/it-services/enterprise-apps'
    },
    {
      name: 'Digital Transformation Consulting',
      description: 'Strategic digital transformation with technology roadmap and implementation',
      icon: Rocket,
      features: [
        'Digital strategy and roadmap development',
        'Technology assessment and recommendations',
        'Change management and training',
        'Process automation and optimization',
        'Legacy system modernization',
        'Digital culture transformation'
      ],
      pricing: '$25,000 - $200,000/project',
      delivery: '16-40 weeks',
      category: 'Digital Transformation',
      benefits: 'Accelerate digital adoption, improve competitiveness',
      marketPrice: '$50,000 - $400,000/project',
      link: '/services/it-services/digital-transformation'
    },
    {
      name: 'IT Infrastructure Management',
      description: 'Comprehensive infrastructure management with proactive monitoring and optimization',
      icon: Server,
      features: [
        'Infrastructure assessment and optimization',
        'Proactive monitoring and maintenance',
        'Capacity planning and scaling',
        'Disaster recovery and backup solutions',
        'Security hardening and compliance',
        '24/7 support and incident response'
      ],
      pricing: '$5,000 - $40,000/month',
      delivery: '2-6 weeks',
      category: 'Infrastructure Management',
      benefits: 'Reduce downtime by 80%, improve performance',
      marketPrice: '$10,000 - $80,000/month',
      link: '/services/it-services/infrastructure-management'
    },
    {
      name: 'API Development & Integration',
      description: 'RESTful and GraphQL APIs with comprehensive integration services',
      icon: Network,
      features: [
        'RESTful and GraphQL API development',
        'Third-party system integration',
        'API gateway and management',
        'Authentication and authorization',
        'API documentation and testing',
        'Performance optimization and caching'
      ],
      pricing: '$3,000 - $25,000/project',
      delivery: '3-8 weeks',
      category: 'API Services',
      benefits: 'Enable seamless data flow, improve system connectivity',
      marketPrice: '$6,000 - $50,000/project',
      link: '/services/it-services/api-development'
    },
    {
      name: 'Database Design & Optimization',
      description: 'Database architecture, design, and performance optimization services',
      icon: Database,
      features: [
        'Database architecture and design',
        'Performance tuning and optimization',
        'Data migration and transformation',
        'Backup and recovery solutions',
        'Security and access control',
        'Scalability and high availability'
      ],
      pricing: '$4,000 - $35,000/project',
      delivery: '4-12 weeks',
      category: 'Database Services',
      benefits: 'Improve query performance by 60%, ensure data integrity',
      marketPrice: '$8,000 - $70,000/project',
      link: '/services/it-services/database-optimization'
    },
    {
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with modern UI/UX',
      icon: Smartphone,
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions (React Native, Flutter)',
        'Progressive Web Apps (PWA)',
        'Mobile UI/UX design',
        'App store optimization',
        'Performance optimization and testing'
      ],
      pricing: '$8,000 - $75,000/project',
      delivery: '8-20 weeks',
      category: 'Mobile Development',
      benefits: 'Expand market reach, improve customer engagement',
      marketPrice: '$15,000 - $150,000/project',
      link: '/services/it-services/mobile-development'
    },
    {
      name: 'E-commerce Platform Development',
      description: 'Custom e-commerce solutions with advanced features and integrations',
      icon: ShoppingCart,
      features: [
        'Custom e-commerce platform development',
        'Payment gateway integration',
        'Inventory management systems',
        'Customer relationship management',
        'Analytics and reporting',
        'SEO optimization and performance'
      ],
      pricing: '$12,000 - $100,000/project',
      delivery: '10-24 weeks',
      category: 'E-commerce Development',
      benefits: 'Increase online sales, improve customer experience',
      marketPrice: '$25,000 - $200,000/project',
      link: '/services/it-services/ecommerce-development'
    },
    {
      name: 'IT Support & Managed Services',
      description: 'Comprehensive IT support with proactive monitoring and maintenance',
      icon: Wrench,
      features: [
        '24/7 technical support',
        'Proactive system monitoring',
        'Software updates and patches',
        'User training and documentation',
        'Incident management and resolution',
        'IT asset management'
      ],
      pricing: '$2,000 - $15,000/month',
      delivery: '1-2 weeks',
      category: 'Managed Services',
      benefits: 'Reduce IT overhead, improve system reliability',
      marketPrice: '$4,000 - $30,000/month',
      link: '/services/it-services/managed-support'
    },
    {
      name: 'SOC 2 Readiness Program',
      description: 'End-to-end SOC 2 readiness with gap analysis, controls, evidence, and audit support.',
      icon: Shield,
      features: [
        'Readiness assessment and roadmap',
        'Policy templates and control implementation',
        'Evidence collection automation',
        'Risk register and remediation tracking',
        'Continuous monitoring setup',
        'Auditor coordination and support'
      ],
      pricing: '$12,000 - $85,000/project',
      delivery: '6-16 weeks',
      category: 'Security & Compliance',
      benefits: 'Achieve SOC 2 faster, reduce audit surprises',
      marketPrice: '$20,000 - $120,000/project',
      link: '/services/it-services/soc2-readiness'
    },
    {
      name: 'Data Platform Modernization (dbt + Snowflake)',
      description: 'Modern ELT with dbt, Snowflake/BigQuery, and governed metrics layer for reliable BI.',
      icon: BarChart3,
      features: [
        'Warehouse migration and modeling',
        'dbt transformation pipelines',
        'Semantic layer and metrics governance',
        'Orchestration and observability',
        'Cost control and performance tuning',
        'Data quality tests and SLAs'
      ],
      pricing: '$25,000 - $180,000/project',
      delivery: '8-24 weeks',
      category: 'Data',
      benefits: 'Trustworthy analytics with lower costs',
      marketPrice: '$40,000 - $300,000/project',
      link: '/services/it-services/data-platform-modernization'
    },
    {
      name: 'FinOps Managed Service',
      description: 'Ongoing cloud cost optimization with budgets, unit economics, and actionable guardrails.',
      icon: TrendingUp,
      features: [
        'Rightsizing and autoscaling policies',
        'Idle resource detection and cleanup',
        'Tagging hygiene and chargeback',
        'Budget alerts and anomaly detection',
        'Savings plans and RI strategy',
        'Monthly executive reports'
      ],
      pricing: '$3,000 - $15,000/month',
      delivery: '2-4 weeks onboarding',
      category: 'Cloud',
      benefits: 'Save 25-45% on cloud spend',
      marketPrice: '$4,000 - $25,000/month',
      link: '/services/it-services/finops-managed-service'
    },
    {
      name: 'Cloud Security & Compliance',
      description: 'Comprehensive cloud security with compliance management and monitoring',
      icon: Shield,
      features: [
        'Cloud security assessment',
        'Compliance framework implementation',
        'Security monitoring and alerting',
        'Identity and access management',
        'Data encryption and protection',
        'Security incident response'
      ],
      pricing: '$5,000 - $40,000/project',
      delivery: '4-12 weeks',
      category: 'Cloud Security',
      benefits: 'Ensure cloud security, maintain compliance',
      marketPrice: '$10,000 - $80,000/project',
      link: '/services/it-services/cloud-security'
    },
    {
      name: 'Business Intelligence & Analytics',
      description: 'Advanced analytics and business intelligence solutions with data visualization',
      icon: BarChart3,
      features: [
        'Data warehouse design and implementation',
        'ETL/ELT pipeline development',
        'Business intelligence dashboards',
        'Advanced analytics and reporting',
        'Data visualization and storytelling',
        'Predictive analytics and modeling'
      ],
      pricing: '$8,000 - $60,000/project',
      delivery: '6-16 weeks',
      category: 'Business Intelligence',
      benefits: 'Enable data-driven decisions, improve business insights',
      marketPrice: '$15,000 - $120,000/project',
      link: '/services/it-services/business-intelligence'
    },
    {
      name: 'Legacy System Modernization',
      description: 'Modernize legacy systems with cloud migration and architecture updates',
      icon: Settings,
      features: [
        'Legacy system assessment',
        'Cloud migration planning',
        'Architecture modernization',
        'Data migration and transformation',
        'Integration with modern systems',
        'Performance optimization'
      ],
      pricing: '$20,000 - $150,000/project',
      delivery: '16-40 weeks',
      category: 'System Modernization',
      benefits: 'Improve system performance, reduce maintenance costs',
      marketPrice: '$40,000 - $300,000/project',
      link: '/services/it-services/legacy-modernization'
    }
    ,
    {
      name: 'Zero-Trust Network Overhaul',
      description: 'ZTNA rollout, identity-aware proxies, and microsegmentation to secure access.',
      icon: Key,
      features: [
        'ZTNA design and deployment',
        'IdP integration and SSO',
        'Device posture checks',
        'Network microsegmentation',
        'Continuous verification',
        'Runbooks and training'
      ],
      pricing: '$15,000 - $120,000/project',
      delivery: '8-20 weeks',
      category: 'Security',
      benefits: 'Shrink attack surface and lateral movement risk',
      marketPrice: '$25,000 - $200,000/project',
      link: '/services/it-services/zero-trust'
    },
    {
      name: 'SRE Reliability Accelerator',
      description: 'SLIs/SLOs, error budgets, and incident tooling to improve uptime and MTTR.',
      icon: Activity,
      features: [
        'Reliability scorecard and roadmap',
        'SLIs/SLOs and error budgets',
        'On-call and runbook improvements',
        'Incident comms and retrospectives',
        'Chaos and game days',
        'Executive reporting'
      ],
      pricing: '$12,000 - $95,000/project',
      delivery: '6-16 weeks',
      category: 'SRE',
      benefits: 'Lower incidents; faster recovery and fewer regressions',
      marketPrice: '$20,000 - $150,000/project',
      link: '/services/it-services/sre-accelerator'
    },
    {
      name: 'Migration to Kubernetes (AKS/EKS/GKE)',
      description: 'Plan, containerize, and migrate workloads with GitOps and IaC.',
      icon: Container,
      features: [
        'Workload assessment and sizing',
        'GitOps and IaC baselines',
        'Security policies (OPA/Kyverno)',
        'Observability and autoscaling',
        'Cost controls and quotas',
        'Runbooks and enablement'
      ],
      pricing: '$25,000 - $180,000/project',
      delivery: '8-24 weeks',
      category: 'Cloud Native',
      benefits: 'Scalability, resilience, and team velocity',
      marketPrice: '$40,000 - $300,000/project',
      link: '/services/it-services/kubernetes-migration'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: Target },
    { label: 'Average ROI', value: '340%', icon: DollarSign },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Average Delivery Time', value: '4 weeks', icon: Clock }
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Rocket className="h-8 w-8 mr-3" />
              <span className="text-lg font-semibold">Production-Ready Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Services Catalog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                {contactInfo.email}
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="h-12 w-12 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SaaS Services */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-orange-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Micro SaaS Solutions</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Production-ready micro SaaS applications that solve real business problems with fast deployment and transparent pricing. 
                Each solution is designed for immediate implementation with proven ROI and comprehensive support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaaSServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                      <span className="text-sm text-orange-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-bold text-orange-600">{service.pricing}</span>
                      <span className="text-sm text-gray-500">{service.delivery}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Market Price:</strong> {service.marketPrice}
                    </div>
                    <div className="text-sm text-green-700 font-medium">
                      <strong>Benefits:</strong> {service.benefits}
                    </div>
                  </div>
                  
                  <Link 
                    href={service.link}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">AI Services & Solutions</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge artificial intelligence solutions that drive real business results with proven ROI and fast implementation. 
                From computer vision to natural language processing, our AI services transform data into actionable insights and automated workflows.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                      <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-bold text-blue-600">{service.pricing}</span>
                      <span className="text-sm text-gray-500">{service.delivery}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Market Price:</strong> {service.marketPrice}
                    </div>
                    <div className="text-sm text-green-700 font-medium">
                      <strong>Benefits:</strong> {service.benefits}
                    </div>
                  </div>
                  
                  <Link 
                    href={service.link}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Cloud className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">IT Services & Solutions</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade IT services and infrastructure solutions with modern architecture and best practices. 
                From cloud migration to digital transformation, we provide comprehensive technology solutions that scale with your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                      <span className="text-sm text-green-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-bold text-green-600">{service.pricing}</span>
                      <span className="text-sm text-gray-500">{service.delivery}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Market Price:</strong> {service.marketPrice}
                    </div>
                    <div className="text-sm text-green-700 font-medium">
                      <strong>Benefits:</strong> {service.benefits}
                    </div>
                  </div>
                  
                  <Link 
                    href={service.link}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and custom proposal tailored to your business needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-blue-100 hover:text-white">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-blue-100 hover:text-white">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <span className="text-blue-100 text-center">{contactInfo.address}</span>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Why Choose Zion Tech Group?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Transparent pricing with no hidden costs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Fast delivery with proven methodologies</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Production-ready solutions with ongoing support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Expert team with 10+ years experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}