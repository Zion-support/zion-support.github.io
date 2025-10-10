'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, Globe, Search, Filter } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 'analytics-pro',
      name: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights',
      price: '$89/month',
      marketPrice: '$150-500/month',
      features: [
        'Real-time data visualization with 50+ chart types',
        'AI-powered predictive analytics and forecasting',
        'Custom dashboard builder with drag-and-drop interface',
        'Advanced data connectors (Salesforce, HubSpot, Google Analytics)',
        'Automated report generation and email delivery',
        'Multi-tenant architecture for agencies',
        'API access for custom integrations',
        'White-label solution available'
      ],
      benefits: [
        'Data-driven decision making',
        'Real-time insights',
        'Custom dashboards',
        'Automated reporting'
      ],
      category: 'Analytics',
      popular: true,
      users: 'Up to 25 users'
    },
    {
      id: 'chat-ai',
      name: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'GPT-4 powered conversational AI with custom training',
        'Multi-channel support (Web, WhatsApp, SMS, Email)',
        'Advanced sentiment analysis and emotion detection',
        'Automated ticket routing and escalation',
        'Live agent handoff with context preservation',
        'Multi-language support (50+ languages)',
        'Advanced analytics and conversation insights',
        'CRM integration and lead qualification'
      ],
      benefits: [
        '24/7 customer support',
        'Reduced response time',
        'Improved customer satisfaction',
        'Lead generation'
      ],
      category: 'Communication',
      popular: true,
      users: 'Up to 50 users'
    },
    {
      id: 'security-shield',
      name: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring with AI threat detection and automated response',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: [
        'AI-powered threat detection and behavioral analysis',
        'Real-time security monitoring across all endpoints',
        'Automated incident response and remediation',
        'Compliance reporting (SOC2, GDPR, HIPAA)',
        'Penetration testing and vulnerability assessments',
        'Security awareness training platform',
        'Dark web monitoring and breach detection',
        '24/7 SOC (Security Operations Center) support'
      ],
      benefits: [
        'Proactive security',
        'Automated response',
        'Compliance assurance',
        'Expert monitoring'
      ],
      category: 'Security',
      popular: false,
      users: 'Up to 100 users'
    },
    {
      id: 'cloud-vault',
      name: 'Zion Cloud Vault',
      description: 'Intelligent cloud backup and disaster recovery with AI-powered optimization',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: [
        'AI-optimized backup scheduling and deduplication',
        'Cross-cloud backup (AWS, Azure, GCP, OneDrive)',
        'Instant disaster recovery with RTO < 15 minutes',
        'Advanced version control and file history',
        'End-to-end encryption with zero-knowledge architecture',
        'Compliance and audit trail reporting',
        'Automated testing and recovery validation',
        'Global CDN for fast data access'
      ],
      benefits: [
        'Data protection',
        'Fast recovery',
        'Cost optimization',
        'Compliance ready'
      ],
      category: 'Storage',
      popular: false,
      users: 'Up to 30 users'
    },
    {
      id: 'invoice-genius',
      name: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking',
      price: '$49/month',
      marketPrice: '$100-300/month',
      features: [
        'AI-powered invoice generation from contracts and emails',
        'Automated recurring billing and subscription management',
        'Multi-currency support with real-time exchange rates',
        'Payment tracking and automated follow-ups',
        'Tax calculation and compliance reporting',
        'Client portal with payment history',
        'Integration with accounting software (QuickBooks, Xero)',
        'Mobile app for on-the-go invoicing'
      ],
      benefits: [
        'Save 90% invoice creation time',
        'Reduce payment delays',
        'Automated follow-ups',
        'Professional invoices'
      ],
      category: 'Finance',
      popular: true,
      users: 'Up to 10 users'
    },
    {
      id: 'lead-magnet',
      name: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI-powered lead scoring and qualification',
        'Multi-channel lead capture (web, social, email)',
        'Automated lead nurturing campaigns',
        'CRM integration and lead routing',
        'Advanced analytics and conversion tracking',
        'A/B testing for landing pages',
        'Email sequence automation',
        'Lead source attribution and ROI tracking'
      ],
      benefits: [
        'Increase qualified leads by 300%',
        'Automated lead nurturing',
        'Better conversion rates',
        'ROI optimization'
      ],
      category: 'Marketing',
      popular: true,
      users: 'Up to 20 users'
    },
    {
      id: 'project-master',
      name: 'Zion Project Master',
      description: 'AI-powered project management with intelligent task allocation and progress tracking',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: [
        'AI-powered task prioritization and scheduling',
        'Resource allocation optimization',
        'Progress tracking with predictive analytics',
        'Team collaboration tools and communication',
        'Time tracking and productivity analytics',
        'Risk assessment and mitigation alerts',
        'Integration with popular tools (Slack, Teams, Jira)',
        'Custom reporting and dashboards'
      ],
      benefits: [
        'Improve project delivery by 40%',
        'Better resource utilization',
        'Predictive risk management',
        'Enhanced team collaboration'
      ],
      category: 'Project Management',
      popular: true,
      users: 'Up to 15 users'
    },
    {
      id: 'social-scheduler',
      name: 'Zion Social Scheduler',
      description: 'AI-powered social media management with content optimization and scheduling',
      price: '$69/month',
      marketPrice: '$120-350/month',
      features: [
        'AI-powered content creation and optimization',
        'Multi-platform scheduling (Facebook, Instagram, Twitter, LinkedIn)',
        'Optimal posting time recommendations',
        'Hashtag research and optimization',
        'Engagement analytics and performance tracking',
        'Content calendar and planning tools',
        'Social listening and trend analysis',
        'Team collaboration and approval workflows'
      ],
      benefits: [
        'Increase engagement by 250%',
        'Save 80% content creation time',
        'Optimal posting times',
        'Comprehensive analytics'
      ],
      category: 'Social Media',
      popular: true,
      users: 'Up to 5 users'
    },
    {
      id: 'email-automation',
      name: 'Zion Email Automation',
      description: 'Advanced email marketing automation with AI-powered personalization and segmentation',
      price: '$89/month',
      marketPrice: '$180-500/month',
      features: [
        'AI-powered email personalization',
        'Advanced segmentation and targeting',
        'Automated drip campaigns and sequences',
        'A/B testing and optimization',
        'Email template builder with drag-and-drop',
        'Deliverability optimization and monitoring',
        'Advanced analytics and reporting',
        'Integration with CRM and e-commerce platforms'
      ],
      benefits: [
        'Increase open rates by 60%',
        'Automated personalization',
        'Better deliverability',
        'Comprehensive analytics'
      ],
      category: 'Email Marketing',
      popular: true,
      users: 'Up to 25 users'
    },
    {
      id: 'inventory-smart',
      name: 'Zion Inventory Smart',
      description: 'AI-powered inventory management with demand forecasting and automated reordering',
      price: '$129/month',
      marketPrice: '$250-700/month',
      features: [
        'AI-powered demand forecasting',
        'Automated reorder point calculations',
        'Multi-location inventory tracking',
        'Supplier management and ordering',
        'Cost optimization and analysis',
        'Integration with e-commerce platforms',
        'Barcode scanning and mobile app',
        'Advanced reporting and analytics'
      ],
      benefits: [
        'Reduce inventory costs by 35%',
        'Prevent stockouts and overstock',
        'Automated reordering',
        'Better supplier management'
      ],
      category: 'Inventory',
      popular: false,
      users: 'Up to 20 users'
    },
    {
      id: 'hr-assistant',
      name: 'Zion HR Assistant',
      description: 'AI-powered human resources management with recruitment and employee analytics',
      price: '$159/month',
      marketPrice: '$300-800/month',
      features: [
        'AI-powered resume screening and candidate matching',
        'Automated interview scheduling and reminders',
        'Employee performance tracking and analytics',
        'Time and attendance management',
        'Benefits administration and enrollment',
        'Employee self-service portal',
        'Compliance tracking and reporting',
        'Integration with payroll systems'
      ],
      benefits: [
        'Reduce hiring time by 50%',
        'Better candidate matching',
        'Automated HR processes',
        'Compliance assurance'
      ],
      category: 'Human Resources',
      popular: false,
      users: 'Up to 50 users'
    },
    {
      id: 'crm-intelligence',
      name: 'Zion CRM Intelligence',
      description: 'AI-powered customer relationship management with predictive analytics and automation',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'AI-powered lead scoring and qualification',
        'Predictive analytics for sales forecasting',
        'Automated follow-up and nurturing',
        'Customer journey mapping and analytics',
        'Integration with email and phone systems',
        'Advanced reporting and dashboards',
        'Mobile app for sales teams',
        'Custom field and workflow builder'
      ],
      benefits: [
        'Increase sales by 45%',
        'Better lead qualification',
        'Automated follow-ups',
        'Predictive insights'
      ],
      category: 'CRM',
      popular: true,
      users: 'Up to 30 users'
    },
    {
      id: 'expense-tracker',
      name: 'Zion Expense Tracker',
      description: 'AI-powered expense management with receipt scanning and automated categorization',
      price: '$39/month',
      marketPrice: '$80-200/month',
      features: [
        'AI-powered receipt scanning and OCR',
        'Automated expense categorization',
        'Policy compliance checking',
        'Approval workflows and notifications',
        'Integration with accounting software',
        'Mobile app with GPS tracking',
        'Advanced reporting and analytics',
        'Multi-currency support'
      ],
      benefits: [
        'Save 90% expense entry time',
        'Automated categorization',
        'Policy compliance',
        'Better expense control'
      ],
      category: 'Finance',
      popular: true,
      users: 'Up to 15 users'
    },
    {
      id: 'content-scheduler',
      name: 'Zion Content Scheduler',
      description: 'AI-powered content planning and scheduling with SEO optimization and performance tracking',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: [
        'AI-powered content planning and ideation',
        'SEO optimization and keyword research',
        'Multi-platform content scheduling',
        'Content performance analytics',
        'Collaborative content creation tools',
        'Content calendar and planning',
        'Social media integration',
        'Team workflow management'
      ],
      benefits: [
        'Increase content engagement by 200%',
        'Better SEO performance',
        'Streamlined content creation',
        'Comprehensive analytics'
      ],
      category: 'Content Management',
      popular: true,
      users: 'Up to 10 users'
    },
    {
      id: 'customer-feedback',
      name: 'Zion Customer Feedback',
      description: 'AI-powered customer feedback collection and analysis with sentiment tracking',
      price: '$59/month',
      marketPrice: '$120-300/month',
      features: [
        'AI-powered sentiment analysis',
        'Multi-channel feedback collection',
        'Automated survey generation',
        'Real-time feedback monitoring',
        'Customer satisfaction scoring',
        'Integration with support systems',
        'Advanced analytics and reporting',
        'Custom feedback forms and widgets'
      ],
      benefits: [
        'Improve customer satisfaction by 40%',
        'Real-time feedback insights',
        'Automated analysis',
        'Better customer understanding'
      ],
      category: 'Customer Experience',
      popular: false,
      users: 'Up to 25 users'
    },
    {
      id: 'api-manager',
      name: 'Zion API Manager',
      description: 'AI-powered API management and monitoring with automated testing and optimization',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'API performance monitoring and analytics',
        'Automated API testing and validation',
        'Rate limiting and throttling management',
        'API documentation generation',
        'Developer portal and key management',
        'Integration with popular API gateways',
        'Advanced security and authentication',
        'Custom API analytics and reporting'
      ],
      benefits: [
        'Improve API reliability by 95%',
        'Automated testing',
        'Better developer experience',
        'Enhanced security'
      ],
      category: 'API Management',
      popular: false,
      users: 'Up to 20 users'
    },
    {
      id: 'workflow-automation',
      name: 'Zion Workflow Automation',
      description: 'AI-powered business process automation with intelligent decision making',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'Visual workflow builder with drag-and-drop',
        'AI-powered process optimization',
        'Integration with 500+ applications',
        'Conditional logic and decision trees',
        'Automated error handling and retries',
        'Real-time monitoring and analytics',
        'Custom triggers and actions',
        'Team collaboration and approval workflows'
      ],
      benefits: [
        'Reduce manual work by 85%',
        'Process optimization',
        'Error reduction',
        'Scalable automation'
      ],
      category: 'Automation',
      popular: true,
      users: 'Up to 25 users'
    },
    {
      id: 'data-backup',
      name: 'Zion Data Backup',
      description: 'AI-powered data backup and recovery with intelligent scheduling and optimization',
      price: '$69/month',
      marketPrice: '$140-350/month',
      features: [
        'AI-optimized backup scheduling',
        'Incremental and differential backups',
        'Cross-platform data synchronization',
        'Automated recovery testing',
        'Version control and file history',
        'Encryption and security compliance',
        'Cloud and local storage options',
        'Advanced monitoring and alerts'
      ],
      benefits: [
        '99.9% data protection',
        'Automated optimization',
        'Fast recovery times',
        'Compliance ready'
      ],
      category: 'Data Management',
      popular: false,
      users: 'Up to 20 users'
    },
    {
      id: 'performance-monitor',
      name: 'Zion Performance Monitor',
      description: 'AI-powered application performance monitoring with predictive analytics and alerting',
      price: '$179/month',
      marketPrice: '$350-1000/month',
      features: [
        'Real-time performance monitoring',
        'AI-powered anomaly detection',
        'Predictive performance analytics',
        'Automated alerting and notifications',
        'Custom dashboards and reporting',
        'Integration with popular monitoring tools',
        'User experience tracking',
        'Performance optimization recommendations'
      ],
      benefits: [
        'Reduce downtime by 70%',
        'Proactive issue detection',
        'Better user experience',
        'Performance optimization'
      ],
      category: 'Monitoring',
      popular: false,
      users: 'Up to 30 users'
    },
    {
      id: 'compliance-manager',
      name: 'Zion Compliance Manager',
      description: 'AI-powered compliance management with automated monitoring and reporting',
      price: '$299/month',
      marketPrice: '$600-1800/month',
      features: [
        'Multi-framework compliance support (GDPR, HIPAA, SOC2)',
        'AI-powered risk assessment',
        'Automated compliance monitoring',
        'Policy management and updates',
        'Audit trail and documentation',
        'Employee training and certification',
        'Integration with security tools',
        'Custom compliance reporting'
      ],
      benefits: [
        'Reduce compliance costs by 60%',
        'Automated monitoring',
        'Risk mitigation',
        'Audit readiness'
      ],
      category: 'Compliance',
      popular: false,
      users: 'Up to 50 users'
    },
    {
      id: 'team-collaboration',
      name: 'Zion Team Collaboration',
      description: 'AI-powered team collaboration platform with intelligent task management and communication',
      price: '$99/month',
      marketPrice: '$200-500/month',
      features: [
        'AI-powered task prioritization',
        'Intelligent team matching and allocation',
        'Real-time collaboration tools',
        'Video conferencing with AI transcription',
        'Document sharing and version control',
        'Team performance analytics',
        'Integration with popular tools',
        'Mobile app for remote teams'
      ],
      benefits: [
        'Improve team productivity by 50%',
        'Better task allocation',
        'Enhanced communication',
        'Performance insights'
      ],
      category: 'Collaboration',
      popular: true,
      users: 'Up to 25 users'
    },
    {
      id: 'ai-document-processor',
      name: 'Zion Document AI',
      description: 'Intelligent document processing with OCR, data extraction, and automated workflows',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: [
        'Advanced OCR with 99.9% accuracy',
        'AI-powered data extraction from any document type',
        'Automated document classification and routing',
        'Smart contract analysis and clause extraction',
        'Multi-language document processing',
        'Integration with 200+ business applications',
        'Automated compliance checking',
        'Custom document templates and workflows'
      ],
      benefits: [
        'Reduce document processing time by 90%',
        'Eliminate manual data entry',
        'Improve accuracy and consistency',
        'Automated compliance monitoring'
      ],
      category: 'Document Processing',
      popular: true,
      users: 'Up to 30 users'
    },
    {
      id: 'ai-voice-assistant',
      name: 'Zion Voice Assistant',
      description: 'Enterprise-grade voice AI assistant for meetings, calls, and voice commands',
      price: '$129/month',
      marketPrice: '$250-600/month',
      features: [
        'Natural language voice commands',
        'Meeting transcription and summarization',
        'Voice-to-action automation',
        'Multi-language voice recognition',
        'Custom voice training for industry terms',
        'Integration with CRM and business tools',
        'Voice analytics and insights',
        'Mobile and desktop voice apps'
      ],
      benefits: [
        'Increase meeting productivity by 40%',
        'Automated note-taking and follow-ups',
        'Hands-free business operations',
        'Better meeting outcomes'
      ],
      category: 'Voice AI',
      popular: false,
      users: 'Up to 20 users'
    },
    {
      id: 'ai-scheduling-assistant',
      name: 'Zion Smart Scheduler',
      description: 'AI-powered scheduling and calendar management with intelligent optimization',
      price: '$59/month',
      marketPrice: '$120-300/month',
      features: [
        'AI-powered meeting optimization',
        'Smart conflict resolution',
        'Time zone intelligence',
        'Resource booking and management',
        'Automated follow-up scheduling',
        'Integration with all major calendar apps',
        'Meeting preparation and agenda generation',
        'Travel time and location optimization'
      ],
      benefits: [
        'Save 5+ hours per week on scheduling',
        'Eliminate double-bookings',
        'Optimize meeting times for all participants',
        'Automated meeting preparation'
      ],
      category: 'Productivity',
      popular: true,
      users: 'Up to 15 users'
    },
    {
      id: 'ai-customer-insights',
      name: 'Zion Customer Insights Pro',
      description: 'Advanced customer behavior analysis and predictive insights platform',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'Real-time customer behavior tracking',
        'Predictive churn analysis',
        'Customer lifetime value prediction',
        'Sentiment analysis across all channels',
        'Personalized recommendation engine',
        'Customer journey mapping and optimization',
        'Advanced segmentation and targeting',
        'ROI tracking and attribution modeling'
      ],
      benefits: [
        'Increase customer retention by 35%',
        'Boost customer lifetime value by 50%',
        'Predict and prevent churn',
        'Data-driven customer strategies'
      ],
      category: 'Customer Analytics',
      popular: true,
      users: 'Up to 40 users'
    },
    {
      id: 'ai-inventory-optimizer',
      name: 'Zion Inventory Optimizer',
      description: 'AI-powered inventory management with demand forecasting and automated reordering',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'AI demand forecasting with 95% accuracy',
        'Automated reorder point calculations',
        'Multi-location inventory synchronization',
        'Supplier performance analytics',
        'Cost optimization algorithms',
        'Integration with e-commerce platforms',
        'Barcode scanning and mobile management',
        'Advanced reporting and analytics dashboard'
      ],
      benefits: [
        'Reduce inventory costs by 40%',
        'Prevent stockouts and overstock',
        'Optimize supplier relationships',
        'Automated inventory management'
      ],
      category: 'Inventory Management',
      popular: false,
      users: 'Up to 25 users'
    },
    {
      id: 'ai-social-media-manager',
      name: 'Zion Social Media AI',
      description: 'Comprehensive social media management with AI content creation and optimization',
      price: '$89/month',
      marketPrice: '$180-500/month',
      features: [
        'AI-powered content creation for all platforms',
        'Optimal posting time recommendations',
        'Hashtag research and optimization',
        'Social listening and trend analysis',
        'Automated engagement and responses',
        'Performance analytics and ROI tracking',
        'Multi-account management',
        'Influencer identification and outreach'
      ],
      benefits: [
        'Increase social engagement by 300%',
        'Save 80% content creation time',
        'Better brand visibility',
        'Automated social media management'
      ],
      category: 'Social Media',
      popular: true,
      users: 'Up to 10 users'
    },
    {
      id: 'ai-accounting-assistant',
      name: 'Zion Accounting AI',
      description: 'Intelligent accounting and bookkeeping with automated categorization and reporting',
      price: '$119/month',
      marketPrice: '$250-600/month',
      features: [
        'AI-powered expense categorization',
        'Automated invoice processing and matching',
        'Real-time financial reporting',
        'Tax preparation and compliance assistance',
        'Bank reconciliation automation',
        'Integration with accounting software',
        'Financial forecasting and budgeting',
        'Audit trail and compliance tracking'
      ],
      benefits: [
        'Reduce accounting time by 70%',
        'Eliminate manual data entry',
        'Improve financial accuracy',
        'Automated compliance reporting'
      ],
      category: 'Accounting',
      popular: true,
      users: 'Up to 20 users'
    },
    {
      id: 'ai-recruitment-suite',
      name: 'Zion Recruitment AI',
      description: 'End-to-end AI recruitment platform with intelligent candidate matching and screening',
      price: '$179/month',
      marketPrice: '$350-1000/month',
      features: [
        'AI-powered resume screening and ranking',
        'Intelligent candidate-job matching',
        'Automated interview scheduling',
        'Video interview analysis and scoring',
        'Background check automation',
        'Diversity and inclusion analytics',
        'Integration with ATS systems',
        'Recruitment analytics and reporting'
      ],
      benefits: [
        'Reduce time-to-hire by 60%',
        'Improve candidate quality by 45%',
        'Eliminate bias in hiring',
        'Streamlined recruitment process'
      ],
      category: 'Recruitment',
      popular: false,
      users: 'Up to 35 users'
    },
    {
      id: 'ai-customer-support-pro',
      name: 'Zion Support AI Pro',
      description: 'Advanced AI customer support with multi-channel automation and human handoff',
      price: '$159/month',
      marketPrice: '$300-800/month',
      features: [
        'Multi-channel support (chat, email, phone, social)',
        'AI-powered ticket routing and prioritization',
        'Automated response generation',
        'Sentiment analysis and escalation',
        'Knowledge base integration',
        'Live agent handoff with context',
        'Performance analytics and insights',
        'Custom AI training for your business'
      ],
      benefits: [
        'Reduce support costs by 65%',
        'Improve response times by 80%',
        'Increase customer satisfaction',
        '24/7 automated support'
      ],
      category: 'Customer Support',
      popular: true,
      users: 'Up to 30 users'
    },
    {
      id: 'ai-marketing-automation',
      name: 'Zion Marketing AI',
      description: 'Comprehensive marketing automation with AI-powered personalization and optimization',
      price: '$139/month',
      marketPrice: '$280-700/month',
      features: [
        'AI-powered campaign optimization',
        'Advanced customer segmentation',
        'Automated email and SMS campaigns',
        'Personalized content recommendations',
        'A/B testing and optimization',
        'Lead scoring and qualification',
        'Integration with 500+ marketing tools',
        'Advanced analytics and ROI tracking'
      ],
      benefits: [
        'Increase conversion rates by 50%',
        'Reduce marketing costs by 40%',
        'Automated personalization',
        'Better lead quality and nurturing'
      ],
      category: 'Marketing Automation',
      popular: true,
      users: 'Up to 25 users'
    },
    {
      id: 'ai-business-intelligence',
      name: 'Zion BI Pro',
      description: 'Advanced business intelligence platform with AI-powered insights and forecasting',
      price: '$229/month',
      marketPrice: '$500-1500/month',
      features: [
        'AI-powered data visualization',
        'Predictive analytics and forecasting',
        'Custom dashboard builder',
        'Real-time data processing',
        'Advanced reporting and analytics',
        'Integration with 200+ data sources',
        'Natural language query interface',
        'Automated insight generation'
      ],
      benefits: [
        'Make data-driven decisions faster',
        'Identify trends and opportunities',
        'Automated reporting and insights',
        'Better business performance'
      ],
      category: 'Business Intelligence',
      popular: false,
      users: 'Up to 50 users'
    },
    {
      id: 'ai-workflow-automation-pro',
      name: 'Zion Workflow Pro',
      description: 'Advanced workflow automation with AI decision-making and process optimization',
      price: '$189/month',
      marketPrice: '$400-1200/month',
      features: [
        'Visual workflow builder with 1000+ integrations',
        'AI-powered process optimization',
        'Intelligent decision trees and logic',
        'Automated error handling and retries',
        'Real-time monitoring and analytics',
        'Custom triggers and webhooks',
        'Team collaboration and approval workflows',
        'Enterprise security and compliance'
      ],
      benefits: [
        'Reduce manual work by 90%',
        'Improve process efficiency',
        'Eliminate human errors',
        'Scalable automation solutions'
      ],
      category: 'Workflow Automation',
      popular: true,
      users: 'Up to 40 users'
    },
    {
      id: 'ai-data-analytics-suite',
      name: 'Zion Data Analytics Suite',
      description: 'Comprehensive data analytics platform with AI-powered insights and visualization',
      price: '$169/month',
      marketPrice: '$350-1000/month',
      features: [
        'AI-powered data analysis and insights',
        'Advanced data visualization tools',
        'Real-time data processing',
        'Predictive modeling and forecasting',
        'Custom report generation',
        'Integration with major databases',
        'Data quality monitoring and cleansing',
        'Collaborative analytics workspace'
      ],
      benefits: [
        'Unlock insights from your data',
        'Make better business decisions',
        'Automated data analysis',
        'Real-time business intelligence'
      ],
      category: 'Data Analytics',
      popular: false,
      users: 'Up to 30 users'
    },
    {
      id: 'ai-crm-advanced',
      name: 'Zion CRM Advanced',
      description: 'Next-generation CRM with AI-powered sales automation and customer insights',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'AI-powered lead scoring and qualification',
        'Automated sales pipeline management',
        'Predictive sales forecasting',
        'Customer behavior analysis',
        'Automated follow-up sequences',
        'Integration with 500+ business tools',
        'Advanced reporting and dashboards',
        'Mobile app for sales teams'
      ],
      benefits: [
        'Increase sales by 45%',
        'Improve lead conversion rates',
        'Automated sales processes',
        'Better customer relationships'
      ],
      category: 'CRM',
      popular: true,
      users: 'Up to 35 users'
    },
    {
      id: 'ai-project-management-pro',
      name: 'Zion Project Pro',
      description: 'AI-powered project management with intelligent resource allocation and risk prediction',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'AI-powered project planning and optimization',
        'Intelligent resource allocation',
        'Risk prediction and mitigation',
        'Automated task assignment',
        'Real-time progress tracking',
        'Integration with development tools',
        'Custom reporting and analytics',
        'Team collaboration features'
      ],
      benefits: [
        'Improve project success rates by 60%',
        'Optimize resource utilization',
        'Predict and prevent project risks',
        'Better team collaboration'
      ],
      category: 'Project Management',
      popular: true,
      users: 'Up to 30 users'
    },
    {
      id: 'ai-email-marketing-advanced',
      name: 'Zion Email Marketing Advanced',
      description: 'Advanced email marketing platform with AI personalization and automation',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI-powered email personalization',
        'Advanced segmentation and targeting',
        'Automated drip campaigns',
        'A/B testing and optimization',
        'Email template builder',
        'Deliverability optimization',
        'Advanced analytics and reporting',
        'Integration with e-commerce platforms'
      ],
      benefits: [
        'Increase email open rates by 60%',
        'Improve click-through rates by 40%',
        'Automated email campaigns',
        'Better email deliverability'
      ],
      category: 'Email Marketing',
      popular: true,
      users: 'Up to 25 users'
    },
    {
      id: 'ai-content-management',
      name: 'Zion Content Management AI',
      description: 'AI-powered content management system with automated creation and optimization',
      price: '$119/month',
      marketPrice: '$250-600/month',
      features: [
        'AI-powered content creation',
        'SEO optimization and keyword research',
        'Content calendar and scheduling',
        'Multi-platform publishing',
        'Content performance analytics',
        'Team collaboration tools',
        'Brand voice consistency',
        'Content approval workflows'
      ],
      benefits: [
        'Increase content production by 300%',
        'Improve SEO performance',
        'Consistent brand messaging',
        'Streamlined content workflow'
      ],
      category: 'Content Management',
      popular: false,
      users: 'Up to 20 users'
    },
    {
      id: 'ai-fraud-detection-suite',
      name: 'Zion Fraud Detection Suite',
      description: 'Advanced AI fraud detection and prevention system for e-commerce and financial services',
      price: '$299/month',
      marketPrice: '$600-2000/month',
      features: [
        'Real-time fraud detection algorithms',
        'Behavioral analysis and pattern recognition',
        'Machine learning model training',
        'Multi-channel fraud monitoring',
        'Automated risk scoring',
        'Integration with payment processors',
        'Compliance reporting and auditing',
        'Custom fraud rules and alerts'
      ],
      benefits: [
        'Reduce fraud losses by 85%',
        'Real-time fraud prevention',
        'Lower false positive rates',
        'Compliance and audit ready'
      ],
      category: 'Fraud Detection',
      popular: false,
      users: 'Up to 50 users'
    },
    {
      id: 'ai-customer-feedback-pro',
      name: 'Zion Feedback Pro',
      description: 'Advanced customer feedback collection and analysis with AI sentiment tracking',
      price: '$79/month',
      marketPrice: '$160-400/month',
      features: [
        'AI-powered sentiment analysis',
        'Multi-channel feedback collection',
        'Automated survey generation',
        'Real-time feedback monitoring',
        'Customer satisfaction scoring',
        'Integration with support systems',
        'Advanced analytics and reporting',
        'Custom feedback forms and widgets'
      ],
      benefits: [
        'Improve customer satisfaction by 40%',
        'Real-time feedback insights',
        'Automated feedback analysis',
        'Better customer understanding'
      ],
      category: 'Customer Feedback',
      popular: true,
      users: 'Up to 25 users'
    },
    {
      id: 'ai-api-management-pro',
      name: 'Zion API Management Pro',
      description: 'Comprehensive API management platform with AI-powered monitoring and optimization',
      price: '$179/month',
      marketPrice: '$350-1000/month',
      features: [
        'API performance monitoring and analytics',
        'Automated API testing and validation',
        'Rate limiting and throttling management',
        'API documentation generation',
        'Developer portal and key management',
        'Integration with popular API gateways',
        'Advanced security and authentication',
        'Custom API analytics and reporting'
      ],
      benefits: [
        'Improve API reliability by 95%',
        'Automated API testing',
        'Better developer experience',
        'Enhanced API security'
      ],
      category: 'API Management',
      popular: false,
      users: 'Up to 30 users'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'Analytics', name: 'Analytics', count: products.filter(p => p.category === 'Analytics').length },
    { id: 'Communication', name: 'Communication', count: products.filter(p => p.category === 'Communication').length },
    { id: 'Security', name: 'Security', count: products.filter(p => p.category === 'Security').length },
    { id: 'Storage', name: 'Storage', count: products.filter(p => p.category === 'Storage').length },
    { id: 'Finance', name: 'Finance', count: products.filter(p => p.category === 'Finance').length },
    { id: 'Marketing', name: 'Marketing', count: products.filter(p => p.category === 'Marketing').length },
    { id: 'Project Management', name: 'Project Management', count: products.filter(p => p.category === 'Project Management').length },
    { id: 'Social Media', name: 'Social Media', count: products.filter(p => p.category === 'Social Media').length },
    { id: 'Email Marketing', name: 'Email Marketing', count: products.filter(p => p.category === 'Email Marketing').length },
    { id: 'Inventory', name: 'Inventory', count: products.filter(p => p.category === 'Inventory').length },
    { id: 'Human Resources', name: 'Human Resources', count: products.filter(p => p.category === 'Human Resources').length },
    { id: 'CRM', name: 'CRM', count: products.filter(p => p.category === 'CRM').length },
    { id: 'Content Management', name: 'Content Management', count: products.filter(p => p.category === 'Content Management').length },
    { id: 'Customer Experience', name: 'Customer Experience', count: products.filter(p => p.category === 'Customer Experience').length },
    { id: 'API Management', name: 'API Management', count: products.filter(p => p.category === 'API Management').length },
    { id: 'Automation', name: 'Automation', count: products.filter(p => p.category === 'Automation').length },
    { id: 'Data Management', name: 'Data Management', count: products.filter(p => p.category === 'Data Management').length },
    { id: 'Monitoring', name: 'Monitoring', count: products.filter(p => p.category === 'Monitoring').length },
    { id: 'Compliance', name: 'Compliance', count: products.filter(p => p.category === 'Compliance').length },
    { id: 'Collaboration', name: 'Collaboration', count: products.filter(p => p.category === 'Collaboration').length },
    { id: 'Document Processing', name: 'Document Processing', count: products.filter(p => p.category === 'Document Processing').length },
    { id: 'Voice AI', name: 'Voice AI', count: products.filter(p => p.category === 'Voice AI').length },
    { id: 'Productivity', name: 'Productivity', count: products.filter(p => p.category === 'Productivity').length },
    { id: 'Customer Analytics', name: 'Customer Analytics', count: products.filter(p => p.category === 'Customer Analytics').length },
    { id: 'Inventory Management', name: 'Inventory Management', count: products.filter(p => p.category === 'Inventory Management').length },
    { id: 'Accounting', name: 'Accounting', count: products.filter(p => p.category === 'Accounting').length },
    { id: 'Recruitment', name: 'Recruitment', count: products.filter(p => p.category === 'Recruitment').length },
    { id: 'Customer Support', name: 'Customer Support', count: products.filter(p => p.category === 'Customer Support').length },
    { id: 'Marketing Automation', name: 'Marketing Automation', count: products.filter(p => p.category === 'Marketing Automation').length },
    { id: 'Business Intelligence', name: 'Business Intelligence', count: products.filter(p => p.category === 'Business Intelligence').length },
    { id: 'Workflow Automation', name: 'Workflow Automation', count: products.filter(p => p.category === 'Workflow Automation').length },
    { id: 'Data Analytics', name: 'Data Analytics', count: products.filter(p => p.category === 'Data Analytics').length },
    { id: 'Fraud Detection', name: 'Fraud Detection', count: products.filter(p => p.category === 'Fraud Detection').length },
    { id: 'Customer Feedback', name: 'Customer Feedback', count: products.filter(p => p.category === 'Customer Feedback').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our powerful micro SaaS solutions designed to solve specific business problems with AI and automation." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful, focused tools that solve specific business problems with AI and automation. 
                Ready to use, easy to integrate, and designed to scale.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SaaS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                    {product.popular && (
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{product.marketPrice}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{product.users}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Start Trial
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Choose the perfect micro SaaS solution for your business needs. All plans include free trials and expert support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default MicroSaasPage;
