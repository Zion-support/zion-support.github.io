'use client'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart, 
  MessageCircle, 
  Shield, 
  Cloud, 
  FileText, 
  Users, 
  Database, 
  Target, 
  Calendar, 
  Mail, 
  Package, 
  DollarSign, 
  Settings, 
  Monitor, 
  CheckSquare, 
  Globe, 
  Eye, 
  Code, 
  Zap, 
  Brain,
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  Award,
  Rocket,
  Sparkles,
  Phone,
  MapPin
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Real Micro SAAS Services with actual pricing and features
  const microSaasServices = [
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with AI-powered insights and real-time dashboards',
      price: '$99/month',
      marketPrice: '$200-500/month',
      features: [
        'Real-time data visualization',
        'AI-powered insights',
        'Custom dashboard builder',
        'Multi-source data integration',
        'Automated reporting',
        'Predictive analytics',
        'Mobile app included',
        '24/7 support'
      ],
      benefits: [
        'Increase decision speed by 75%',
        'Reduce reporting time by 90%',
        'Identify trends 3x faster',
        'ROI tracking and optimization'
      ],
      category: 'Analytics',
      icon: BarChart,
      popular: true,
      trialDays: 14,
      setupFee: 0,
      integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'Stripe', 'Shopify']
    },
    {
      id: 'zion-chat-ai',
      name: 'Zion Chat AI',
      description: 'Intelligent customer support chatbot with natural language processing and multi-channel support',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'CRM integration',
        'Live chat handoff',
        'Knowledge base integration',
        'Sentiment analysis',
        'Custom branding',
        'Analytics dashboard'
      ],
      benefits: [
        'Reduce support costs by 60%',
        '24/7 customer availability',
        'Instant response times',
        'Improve customer satisfaction'
      ],
      category: 'Customer Service',
      icon: MessageCircle,
      popular: true,
      trialDays: 7,
      setupFee: 0,
      integrations: ['Zendesk', 'Intercom', 'Slack', 'Microsoft Teams', 'WhatsApp']
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection for small to medium businesses',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'Real-time threat monitoring',
        'Automated vulnerability scanning',
        'Incident response automation',
        'Compliance reporting',
        'Security awareness training',
        'Dark web monitoring',
        'Penetration testing',
        '24/7 SOC support'
      ],
      benefits: [
        'Prevent 99.9% of cyber attacks',
        'Reduce security incidents by 85%',
        'Compliance automation',
        'Peace of mind with 24/7 monitoring'
      ],
      category: 'Cybersecurity',
      icon: Shield,
      popular: true,
      trialDays: 30,
      setupFee: 0,
      integrations: ['Microsoft 365', 'Google Workspace', 'AWS', 'Azure', 'Slack']
    },
    {
      id: 'zion-cloud-vault',
      name: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection',
      price: '$59/month',
      marketPrice: '$120-300/month',
      features: [
        'Automated daily backups',
        'Cross-platform sync',
        'Version control',
        'End-to-end encryption',
        'Disaster recovery planning',
        'Compliance support',
        'Mobile access',
        'Unlimited storage'
      ],
      benefits: [
        '99.99% uptime guarantee',
        'Zero data loss',
        'Instant recovery',
        'Reduce backup costs by 70%'
      ],
      category: 'Cloud Storage',
      icon: Cloud,
      popular: false,
      trialDays: 14,
      setupFee: 0,
      integrations: ['Google Drive', 'Dropbox', 'OneDrive', 'AWS S3', 'Azure Blob']
    },
    {
      id: 'zion-content-studio',
      name: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, and marketing campaigns',
      price: '$89/month',
      marketPrice: '$180-450/month',
      features: [
        'AI content generation',
        'SEO optimization',
        'Multi-platform publishing',
        'Brand voice customization',
        'Content calendar',
        'Performance analytics',
        'Image generation',
        'Video creation tools'
      ],
      benefits: [
        'Save 80% content creation time',
        'Increase engagement by 150%',
        'Consistent brand voice',
        'SEO-optimized content'
      ],
      category: 'Content Marketing',
      icon: FileText,
      popular: true,
      trialDays: 7,
      setupFee: 0,
      integrations: ['WordPress', 'HubSpot', 'Hootsuite', 'Buffer', 'Canva']
    },
    {
      id: 'zion-crm-intelligence',
      name: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation',
      price: '$129/month',
      marketPrice: '$250-600/month',
      features: [
        'AI lead scoring',
        'Predictive analytics',
        'Automated follow-ups',
        'Pipeline management',
        'Email marketing',
        'Sales forecasting',
        'Customer segmentation',
        'Integration hub'
      ],
      benefits: [
        'Increase sales by 40%',
        'Reduce manual work by 70%',
        'Better lead qualification',
        'Improved customer retention'
      ],
      category: 'CRM',
      icon: Users,
      popular: true,
      trialDays: 14,
      setupFee: 0,
      integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho', 'Mailchimp']
    },
    {
      id: 'zion-data-sync',
      name: 'Zion Data Sync',
      description: 'Automated data integration and synchronization platform for seamless workflow',
      price: '$69/month',
      marketPrice: '$140-350/month',
      features: [
        'Real-time data sync',
        '100+ app integrations',
        'Data transformation',
        'Error handling',
        'Custom workflows',
        'Data validation',
        'Monitoring dashboard',
        'API management'
      ],
      benefits: [
        'Eliminate manual data entry',
        'Reduce errors by 95%',
        'Save 20+ hours weekly',
        'Real-time data accuracy'
      ],
      category: 'Data Integration',
      icon: Database,
      popular: false,
      trialDays: 14,
      setupFee: 0,
      integrations: ['Zapier', 'Microsoft Power Automate', 'Salesforce', 'HubSpot', 'Stripe']
    },
    {
      id: 'zion-lead-magnet',
      name: 'Zion Lead Magnet',
      description: 'Advanced lead generation and nurturing platform with AI-powered targeting',
      price: '$79/month',
      marketPrice: '$160-400/month',
      features: [
        'AI lead scoring',
        'Multi-channel campaigns',
        'Landing page builder',
        'Email automation',
        'A/B testing',
        'Lead nurturing sequences',
        'Analytics dashboard',
        'CRM integration'
      ],
      benefits: [
        'Increase leads by 200%',
        'Improve conversion by 60%',
        'Automate nurturing',
        'Better lead quality'
      ],
      category: 'Lead Generation',
      icon: Target,
      popular: true,
      trialDays: 7,
      setupFee: 0,
      integrations: ['Mailchimp', 'Constant Contact', 'HubSpot', 'Salesforce', 'Google Ads']
    },
    {
      id: 'zion-project-master',
      name: 'Zion Project Master',
      description: 'AI-powered project management with intelligent resource allocation and timeline optimization',
      price: '$99/month',
      marketPrice: '$200-500/month',
      features: [
        'AI project planning',
        'Resource optimization',
        'Timeline prediction',
        'Risk assessment',
        'Team collaboration',
        'Progress tracking',
        'Budget management',
        'Reporting suite'
      ],
      benefits: [
        'Complete projects 30% faster',
        'Reduce overruns by 50%',
        'Better resource utilization',
        'Improved team productivity'
      ],
      category: 'Project Management',
      icon: Calendar,
      popular: true,
      trialDays: 14,
      setupFee: 0,
      integrations: ['Asana', 'Trello', 'Monday.com', 'Jira', 'Slack']
    },
    {
      id: 'zion-email-automation',
      name: 'Zion Email Automation',
      description: 'Intelligent email marketing platform with AI-powered personalization and automation',
      price: '$59/month',
      marketPrice: '$120-300/month',
      features: [
        'AI email personalization',
        'Behavioral triggers',
        'A/B testing',
        'Template library',
        'Deliverability optimization',
        'Analytics dashboard',
        'List segmentation',
        'Compliance tools'
      ],
      benefits: [
        'Increase open rates by 45%',
        'Boost click-through by 80%',
        'Automate campaigns',
        'Better deliverability'
      ],
      category: 'Email Marketing',
      icon: Mail,
      popular: false,
      trialDays: 7,
      setupFee: 0,
      integrations: ['Mailchimp', 'Constant Contact', 'HubSpot', 'Salesforce', 'Shopify']
    },
    {
      id: 'zion-inventory-smart',
      name: 'Zion Inventory Smart',
      description: 'AI-powered inventory management with demand forecasting and automated reordering',
      price: '$89/month',
      marketPrice: '$180-450/month',
      features: [
        'AI demand forecasting',
        'Automated reordering',
        'Multi-location support',
        'Barcode scanning',
        'Supplier management',
        'Cost optimization',
        'Reporting suite',
        'Mobile app'
      ],
      benefits: [
        'Reduce stockouts by 70%',
        'Lower inventory costs by 25%',
        'Automated reordering',
        'Better cash flow'
      ],
      category: 'Inventory Management',
      icon: Package,
      popular: false,
      trialDays: 14,
      setupFee: 0,
      integrations: ['Shopify', 'WooCommerce', 'QuickBooks', 'Xero', 'SAP']
    },
    {
      id: 'zion-invoice-genius',
      name: 'Zion Invoice Genius',
      description: 'Smart invoicing and payment processing with AI-powered automation and analytics',
      price: '$49/month',
      marketPrice: '$100-250/month',
      features: [
        'AI invoice generation',
        'Automated reminders',
        'Payment processing',
        'Expense tracking',
        'Tax calculations',
        'Multi-currency support',
        'Client portal',
        'Financial reporting'
      ],
      benefits: [
        'Get paid 40% faster',
        'Reduce late payments by 60%',
        'Automate invoicing',
        'Better cash flow'
      ],
      category: 'Invoicing',
      icon: DollarSign,
      popular: true,
      trialDays: 7,
      setupFee: 0,
      integrations: ['QuickBooks', 'Xero', 'Stripe', 'PayPal', 'Square']
    },
    {
      id: 'zion-workflow-automation',
      name: 'Zion Workflow Automation',
      description: 'Intelligent business process automation with AI-powered workflow optimization',
      price: '$119/month',
      marketPrice: '$240-600/month',
      features: [
        'Visual workflow builder',
        'AI process optimization',
        '100+ app integrations',
        'Conditional logic',
        'Error handling',
        'Performance monitoring',
        'Custom triggers',
        'Team collaboration'
      ],
      benefits: [
        'Save 15+ hours weekly',
        'Reduce errors by 90%',
        'Scale operations',
        'Improve efficiency'
      ],
      category: 'Automation',
      icon: Settings,
      popular: true,
      trialDays: 14,
      setupFee: 0,
      integrations: ['Zapier', 'Microsoft Power Automate', 'Salesforce', 'HubSpot', 'Slack']
    },
    {
      id: 'zion-performance-monitor',
      name: 'Zion Performance Monitor',
      description: 'Real-time application and infrastructure monitoring with AI-powered alerting',
      price: '$79/month',
      marketPrice: '$160-400/month',
      features: [
        'Real-time monitoring',
        'AI-powered alerting',
        'Performance analytics',
        'Uptime tracking',
        'Error tracking',
        'Custom dashboards',
        'Mobile alerts',
        'API monitoring'
      ],
      benefits: [
        'Prevent 99% of outages',
        'Reduce downtime by 80%',
        'Faster issue resolution',
        'Better user experience'
      ],
      category: 'Monitoring',
      icon: Monitor,
      popular: false,
      trialDays: 14,
      setupFee: 0,
      integrations: ['AWS', 'Azure', 'Google Cloud', 'Heroku', 'DigitalOcean']
    },
    {
      id: 'zion-compliance-manager',
      name: 'Zion Compliance Manager',
      description: 'Automated compliance management for GDPR, HIPAA, SOX, and other regulations',
      price: '$199/month',
      marketPrice: '$400-1000/month',
      features: [
        'Multi-regulation support',
        'Automated assessments',
        'Policy management',
        'Audit trails',
        'Risk assessment',
        'Training modules',
        'Reporting suite',
        'Expert consultation'
      ],
      benefits: [
        'Ensure 100% compliance',
        'Reduce audit time by 70%',
        'Avoid costly penalties',
        'Peace of mind'
      ],
      category: 'Compliance',
      icon: CheckSquare,
      popular: false,
      trialDays: 30,
      setupFee: 0,
      integrations: ['Microsoft 365', 'Google Workspace', 'Salesforce', 'HubSpot', 'Slack']
    },
    {
      id: 'zion-social-scheduler',
      name: 'Zion Social Scheduler',
      description: 'AI-powered social media management with content optimization and analytics',
      price: '$69/month',
      marketPrice: '$140-350/month',
      features: [
        'AI content optimization',
        'Multi-platform posting',
        'Optimal timing analysis',
        'Hashtag research',
        'Engagement analytics',
        'Content calendar',
        'Team collaboration',
        'Brand monitoring'
      ],
      benefits: [
        'Increase engagement by 120%',
        'Save 10+ hours weekly',
        'Better content performance',
        'Consistent posting'
      ],
      category: 'Social Media',
      icon: Globe,
      popular: true,
      trialDays: 7,
      setupFee: 0,
      integrations: ['Facebook', 'Twitter', 'LinkedIn', 'Instagram', 'TikTok']
    },
    {
      id: 'zion-ai-video-editor',
      name: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing and optimization',
      price: '$89/month',
      marketPrice: '$180-450/month',
      features: [
        'AI auto-editing',
        'Smart cropping',
        'Auto-subtitles',
        'Color correction',
        'Background removal',
        'Template library',
        'Cloud rendering',
        'Collaboration tools'
      ],
      benefits: [
        'Create videos 10x faster',
        'Professional quality',
        'No editing skills needed',
        'Consistent branding'
      ],
      category: 'Video Editing',
      icon: Eye,
      popular: false,
      trialDays: 7,
      setupFee: 0,
      integrations: ['YouTube', 'Vimeo', 'TikTok', 'Instagram', 'Facebook']
    },
    {
      id: 'zion-ai-translator-pro',
      name: 'Zion AI Translator Pro',
      description: 'Advanced AI translation platform with context-aware translation and localization',
      price: '$59/month',
      marketPrice: '$120-300/month',
      features: [
        '100+ languages',
        'Context-aware translation',
        'Document translation',
        'Website localization',
        'Voice translation',
        'Quality assurance',
        'API access',
        'Team collaboration'
      ],
      benefits: [
        '99% translation accuracy',
        'Save 80% translation costs',
        'Faster time to market',
        'Global reach'
      ],
      category: 'Translation',
      icon: Globe,
      popular: false,
      trialDays: 7,
      setupFee: 0,
      integrations: ['WordPress', 'Shopify', 'HubSpot', 'Salesforce', 'Slack']
    },
    {
      id: 'zion-ai-code-reviewer',
      name: 'Zion AI Code Reviewer',
      description: 'Intelligent code review and quality assurance platform with automated suggestions',
      price: '$99/month',
      marketPrice: '$200-500/month',
      features: [
        'AI code analysis',
        'Security vulnerability detection',
        'Performance optimization',
        'Code quality metrics',
        'Automated testing',
        'Documentation generation',
        'Team collaboration',
        'CI/CD integration'
      ],
      benefits: [
        'Reduce bugs by 70%',
        'Improve code quality',
        'Faster development',
        'Better security'
      ],
      category: 'Development',
      icon: Code,
      popular: true,
      trialDays: 14,
      setupFee: 0,
      integrations: ['GitHub', 'GitLab', 'Bitbucket', 'Jenkins', 'CircleCI']
    },
    {
      id: 'zion-customer-insights',
      name: 'Zion Customer Insights Pro',
      description: 'AI-powered customer analytics and behavior prediction for better business decisions',
      price: '$129/month',
      marketPrice: '$250-600/month',
      features: [
        'Customer segmentation',
        'Behavior prediction',
        'Churn analysis',
        'Lifetime value prediction',
        'Sentiment analysis',
        'Personalization engine',
        'Real-time insights',
        'Custom dashboards'
      ],
      benefits: [
        'Increase retention by 40%',
        'Boost revenue by 25%',
        'Better customer understanding',
        'Data-driven decisions'
      ],
      category: 'Analytics',
      icon: Users,
      popular: true,
      trialDays: 14,
      setupFee: 0,
      integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'Mixpanel', 'Amplitude']
    },
    {
      id: 'zion-ai-email-assistant',
      name: 'Zion AI Email Assistant',
      description: 'Smart email management with AI-powered organization, scheduling, and response suggestions',
      price: '$49/month',
      marketPrice: '$100-250/month',
      features: [
        'Smart email organization',
        'Auto-response suggestions',
        'Email scheduling',
        'Priority detection',
        'Spam filtering',
        'Template library',
        'Calendar integration',
        'Mobile app'
      ],
      benefits: [
        'Save 5+ hours weekly',
        'Never miss important emails',
        'Professional responses',
        'Better organization'
      ],
      category: 'Productivity',
      icon: Mail,
      popular: false,
      trialDays: 7,
      setupFee: 0,
      integrations: ['Gmail', 'Outlook', 'Apple Mail', 'Thunderbird', 'Yahoo Mail']
    },
    {
      id: 'zion-ai-meeting-assistant',
      name: 'Zion AI Meeting Assistant',
      description: 'Intelligent meeting management with transcription, summaries, and action item tracking',
      price: '$79/month',
      marketPrice: '$160-400/month',
      features: [
        'Real-time transcription',
        'AI meeting summaries',
        'Action item extraction',
        'Meeting analytics',
        'Calendar integration',
        'Team collaboration',
        'Mobile app',
        'Recording storage'
      ],
      benefits: [
        'Save 3+ hours per meeting',
        'Never miss action items',
        'Better meeting outcomes',
        'Improved productivity'
      ],
      category: 'Productivity',
      icon: Calendar,
      popular: true,
      trialDays: 7,
      setupFee: 0,
      integrations: ['Zoom', 'Microsoft Teams', 'Google Meet', 'Slack', 'Calendar']
    },
    {
      id: 'zion-ai-seo-optimizer',
      name: 'Zion AI SEO Optimizer',
      description: 'AI-powered SEO optimization platform with keyword research and content optimization',
      price: '$89/month',
      marketPrice: '$180-450/month',
      features: [
        'AI keyword research',
        'Content optimization',
        'Technical SEO audit',
        'Competitor analysis',
        'Rank tracking',
        'Link building tools',
        'Local SEO',
        'Reporting suite'
      ],
      benefits: [
        'Increase organic traffic by 150%',
        'Improve rankings faster',
        'Comprehensive SEO strategy',
        'Better ROI'
      ],
      category: 'SEO',
      icon: Target,
      popular: true,
      trialDays: 7,
      setupFee: 0,
      integrations: ['Google Search Console', 'Google Analytics', 'WordPress', 'Shopify', 'Wix']
    },
    {
      id: 'zion-ai-data-cleaner',
      name: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with automated quality assurance',
      price: '$69/month',
      marketPrice: '$140-350/month',
      features: [
        'AI data validation',
        'Duplicate detection',
        'Data standardization',
        'Error correction',
        'Data enrichment',
        'Quality scoring',
        'Automated workflows',
        'API integration'
      ],
      benefits: [
        'Improve data quality by 95%',
        'Save 15+ hours weekly',
        'Better decision making',
        'Compliance ready'
      ],
      category: 'Data Quality',
      icon: Database,
      popular: false,
      trialDays: 14,
      setupFee: 0,
      integrations: ['Salesforce', 'HubSpot', 'Google Sheets', 'Excel', 'MySQL']
    },
    {
      id: 'zion-ai-contract-analyzer',
      name: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis and risk assessment for legal document management',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'AI contract analysis',
        'Risk assessment',
        'Clause extraction',
        'Compliance checking',
        'Version comparison',
        'Automated summaries',
        'Team collaboration',
        'Legal database'
      ],
      benefits: [
        'Reduce review time by 80%',
        'Identify risks faster',
        'Better compliance',
        'Cost savings'
      ],
      category: 'Legal Tech',
      icon: FileText,
      popular: false,
      trialDays: 14,
      setupFee: 0,
      integrations: ['DocuSign', 'Adobe Sign', 'Microsoft Word', 'Google Docs', 'Dropbox']
    },
    {
      id: 'zion-ai-survey-builder',
      name: 'Zion AI Survey Builder',
      description: 'Intelligent survey creation and analysis platform with AI-powered insights',
      price: '$59/month',
      marketPrice: '$120-300/month',
      features: [
        'AI survey design',
        'Smart question suggestions',
        'Response analysis',
        'Sentiment analysis',
        'Custom branding',
        'Multi-channel distribution',
        'Real-time analytics',
        'Export capabilities'
      ],
      benefits: [
        'Create surveys 5x faster',
        'Better response rates',
        'Actionable insights',
        'Professional results'
      ],
      category: 'Research',
      icon: CheckSquare,
      popular: false,
      trialDays: 7,
      setupFee: 0,
      integrations: ['Mailchimp', 'HubSpot', 'Salesforce', 'Slack', 'Microsoft Teams']
    },
    {
      id: 'zion-ai-accounting-assistant',
      name: 'Zion AI Accounting Assistant',
      description: 'AI-powered accounting automation with intelligent categorization and financial insights',
      price: '$79/month',
      marketPrice: '$160-400/month',
      features: [
        'AI expense categorization',
        'Automated bookkeeping',
        'Financial reporting',
        'Tax preparation',
        'Invoice processing',
        'Receipt scanning',
        'Bank reconciliation',
        'Compliance monitoring'
      ],
      benefits: [
        'Save 20+ hours monthly',
        'Reduce errors by 90%',
        'Better financial insights',
        'Tax-ready reports'
      ],
      category: 'Accounting',
      icon: DollarSign,
      popular: true,
      trialDays: 14,
      setupFee: 0,
      integrations: ['QuickBooks', 'Xero', 'Sage', 'FreshBooks', 'Wave']
    },
    {
      id: 'zion-ai-recruitment-pro',
      name: 'Zion AI Recruitment Pro',
      description: 'Intelligent recruitment platform with AI-powered candidate screening and matching',
      price: '$129/month',
      marketPrice: '$250-600/month',
      features: [
        'AI resume screening',
        'Candidate matching',
        'Interview scheduling',
        'Skills assessment',
        'Background checks',
        'Onboarding automation',
        'Analytics dashboard',
        'Team collaboration'
      ],
      benefits: [
        'Hire 3x faster',
        'Better candidate quality',
        'Reduce bias',
        'Streamlined process'
      ],
      category: 'HR Tech',
      icon: Users,
      popular: true,
      trialDays: 14,
      setupFee: 0,
      integrations: ['LinkedIn', 'Indeed', 'Glassdoor', 'Slack', 'Microsoft Teams']
    },
    {
      id: 'zion-ai-content-moderation',
      name: 'Zion AI Content Moderation',
      description: 'Automated content moderation platform with AI-powered filtering and compliance',
      price: '$99/month',
      marketPrice: '$200-500/month',
      features: [
        'AI content filtering',
        'Multi-language support',
        'Image and video analysis',
        'Custom rules engine',
        'Real-time moderation',
        'Compliance reporting',
        'API integration',
        'Human review queue'
      ],
      benefits: [
        '99% accuracy in moderation',
        'Reduce moderation costs by 80%',
        '24/7 content protection',
        'Compliance automation'
      ],
      category: 'Content Moderation',
      icon: Shield,
      popular: false,
      trialDays: 14,
      setupFee: 0,
      integrations: ['WordPress', 'Shopify', 'Discord', 'Slack', 'Custom APIs']
    },
    {
      id: 'zion-ai-predictive-maintenance',
      name: 'Zion AI Predictive Maintenance',
      description: 'AI-powered equipment maintenance prediction to prevent failures and optimize operations',
      price: '$199/month',
      marketPrice: '$400-1000/month',
      features: [
        'AI failure prediction',
        'IoT sensor integration',
        'Maintenance scheduling',
        'Cost optimization',
        'Performance monitoring',
        'Alert system',
        'Analytics dashboard',
        'Mobile app'
      ],
      benefits: [
        'Prevent 90% of equipment failures',
        'Reduce maintenance costs by 40%',
        'Increase uptime by 25%',
        'Better resource planning'
      ],
      category: 'IoT & Maintenance',
      icon: Settings,
      popular: false,
      trialDays: 30,
      setupFee: 0,
      integrations: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'Siemens', 'GE Predix']
    },
    {
      id: 'zion-ai-energy-manager',
      name: 'Zion AI Energy Manager',
      description: 'Smart energy management platform with AI optimization for cost reduction and sustainability',
      price: '$89/month',
      marketPrice: '$180-450/month',
      features: [
        'AI energy optimization',
        'Real-time monitoring',
        'Cost analysis',
        'Sustainability tracking',
        'Predictive modeling',
        'Automated controls',
        'Reporting suite',
        'Mobile dashboard'
      ],
      benefits: [
        'Reduce energy costs by 30%',
        'Improve sustainability',
        'Better resource utilization',
        'Compliance reporting'
      ],
      category: 'Energy Management',
      icon: Zap,
      popular: false,
      trialDays: 14,
      setupFee: 0,
      integrations: ['Smart meters', 'Solar panels', 'HVAC systems', 'Lighting controls', 'IoT sensors']
    },
    {
      id: 'zion-ai-supply-chain-optimizer',
      name: 'Zion AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with AI-powered optimization and risk assessment',
      price: '$179/month',
      marketPrice: '$360-900/month',
      features: [
        'AI demand forecasting',
        'Supplier risk assessment',
        'Route optimization',
        'Inventory optimization',
        'Cost analysis',
        'Compliance tracking',
        'Real-time monitoring',
        'Analytics dashboard'
      ],
      benefits: [
        'Reduce supply chain costs by 25%',
        'Improve delivery times by 40%',
        'Better risk management',
        'Optimized operations'
      ],
      category: 'Supply Chain',
      icon: Package,
      popular: false,
      trialDays: 30,
      setupFee: 0,
      integrations: ['SAP', 'Oracle', 'Microsoft Dynamics', 'Salesforce', 'Custom ERP']
    },
    {
      id: 'zion-ai-fraud-detector',
      name: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection system with AI-powered risk assessment and real-time monitoring',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'AI fraud detection',
        'Real-time monitoring',
        'Risk scoring',
        'Pattern recognition',
        'Alert system',
        'Compliance reporting',
        'API integration',
        'Custom rules'
      ],
      benefits: [
        'Prevent 99.5% of fraud',
        'Reduce false positives by 70%',
        'Real-time protection',
        'Cost savings'
      ],
      category: 'Fraud Prevention',
      icon: Shield,
      popular: true,
      trialDays: 14,
      setupFee: 0,
      integrations: ['Stripe', 'PayPal', 'Square', 'Banking APIs', 'E-commerce platforms']
    },
    {
      id: 'zion-ai-customer-service-pro',
      name: 'Zion AI Customer Service Pro',
      description: 'Advanced AI customer service platform with omnichannel support and intelligent routing',
      price: '$199/month',
      marketPrice: '$400-1000/month',
      features: [
        'Omnichannel support',
        'AI ticket routing',
        'Sentiment analysis',
        'Knowledge base',
        'Live chat integration',
        'Performance analytics',
        'Team management',
        'Custom workflows'
      ],
      benefits: [
        'Improve customer satisfaction by 50%',
        'Reduce response time by 80%',
        'Better agent productivity',
        'Cost optimization'
      ],
      category: 'Customer Service',
      icon: MessageCircle,
      popular: true,
      trialDays: 14,
      setupFee: 0,
      integrations: ['Zendesk', 'Intercom', 'Freshdesk', 'Slack', 'Microsoft Teams']
    },
    {
      id: 'zion-ai-marketing-automation',
      name: 'Zion AI Marketing Automation',
      description: 'Intelligent marketing automation platform with AI-powered personalization and optimization',
      price: '$159/month',
      marketPrice: '$320-800/month',
      features: [
        'AI campaign optimization',
        'Behavioral triggers',
        'Personalization engine',
        'Multi-channel campaigns',
        'A/B testing',
        'Lead scoring',
        'Analytics dashboard',
        'CRM integration'
      ],
      benefits: [
        'Increase conversions by 120%',
        'Improve ROI by 80%',
        'Better customer engagement',
        'Automated optimization'
      ],
      category: 'Marketing Automation',
      icon: Target,
      popular: true,
      trialDays: 14,
      setupFee: 0,
      integrations: ['HubSpot', 'Salesforce', 'Mailchimp', 'Google Ads', 'Facebook Ads']
    },
    {
      id: 'zion-ai-document-ai',
      name: 'Zion AI Document AI',
      description: 'Advanced document processing platform with AI-powered extraction and analysis',
      price: '$119/month',
      marketPrice: '$240-600/month',
      features: [
        'AI document extraction',
        'OCR technology',
        'Form processing',
        'Data validation',
        'Workflow automation',
        'Compliance checking',
        'API integration',
        'Custom templates'
      ],
      benefits: [
        'Process documents 10x faster',
        'Reduce errors by 95%',
        'Automate workflows',
        'Better compliance'
      ],
      category: 'Document Processing',
      icon: FileText,
      popular: true,
      trialDays: 14,
      setupFee: 0,
      integrations: ['SharePoint', 'Google Drive', 'Dropbox', 'Salesforce', 'Custom APIs']
    }
  ];

  const categories = [
    'All',
    'Analytics',
    'Customer Service',
    'Cybersecurity',
    'Cloud Storage',
    'Content Marketing',
    'CRM',
    'Data Integration',
    'Lead Generation',
    'Project Management',
    'Email Marketing',
    'Inventory Management',
    'Invoicing',
    'Automation',
    'Monitoring',
    'Compliance',
    'Social Media',
    'Video Editing',
    'Translation',
    'Development',
    'Productivity',
    'SEO',
    'Data Quality',
    'Legal Tech',
    'Research',
    'Accounting',
    'HR Tech',
    'Content Moderation',
    'IoT & Maintenance',
    'Energy Management',
    'Supply Chain',
    'Fraud Prevention',
    'Marketing Automation',
    'Document Processing'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = microSaasServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text-enhanced">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Powerful, ready-to-use business tools with AI and automation. 
              Start your free trial today and transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <label htmlFor="search" className="block text-sm font-medium text-gray-300 mb-2">
                  Search Services
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search for services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              
              {/* Category Filter */}
              <div className="lg:w-64">
                <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                  Filter by Category
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                  service.popular ? 'ring-2 ring-cyan-500/50' : ''
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  </div>
                )}

                {/* Service Icon and Title */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <span className="text-sm text-cyan-400">{service.category}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-3xl font-bold text-white">{service.price}</span>
                    <span className="text-sm text-gray-400 ml-2">/month</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>Market price: {service.marketPrice}</span>
                    <span className="ml-2 text-green-400 font-semibold">
                      Save {Math.round((1 - parseInt(service.price.replace('$', '').replace('/month', '')) / parseInt(service.marketPrice.split('-')[0].replace('$', ''))) * 100)}%
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Trial and Setup Info */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.trialDays}-day free trial
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    {service.setupFee === 0 ? 'No setup fee' : `$${service.setupFee} setup`}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Link
                    to={`/contact?service=${service.id}`}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    to={`/demo?service=${service.id}`}
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    View Demo
                  </Link>
                </div>

                {/* Integrations */}
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Integrations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.integrations.slice(0, 4).map((integration, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-700/50 text-xs text-gray-300 rounded"
                      >
                        {integration}
                      </span>
                    ))}
                    {service.integrations.length > 4 && (
                      <span className="px-2 py-1 bg-slate-700/50 text-xs text-gray-400 rounded">
                        +{service.integrations.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI-powered solutions. 
            Start your free trial today and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🕒 Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;