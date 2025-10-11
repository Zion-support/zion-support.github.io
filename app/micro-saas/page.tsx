'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, MessageCircle, FileText, Mail, Calendar, Package, Monitor, Eye, Mic, Code, Heart, DollarSign, Box, Cpu, Link, Server, ShoppingCart, Wifi, Lock, BarChart3, MessageSquare, Smartphone, Headphones, Workflow, Sparkles, Rocket, Award, Lightbulb, Gauge, Phone, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts = [
    // Productivity & Business Tools
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling.',
      price: '$89/month',
      marketPrice: '$150-500/month',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard builder',
        'Advanced data connectors',
        'Automated report generation',
        'Multi-tenant architecture',
        'API integrations',
        'Mobile app access'
      ],
      benefits: [
        'Data-driven decision making',
        'Real-time insights',
        'Custom dashboards',
        'Automated reporting',
        '50% faster reporting',
        'ROI tracking'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart3,
      users: 'Up to 25 users',
      setupTime: '5 minutes'
    },
    {
      id: 'zion-chat-ai',
      name: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support.',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'GPT-4 Powered AI',
        'Multi-channel support',
        'Advanced sentiment analysis',
        'Automated ticket routing',
        'Live agent handoff',
        'Multi-language support',
        'Knowledge base integration',
        'Performance analytics'
      ],
      benefits: [
        '24/7 customer support',
        'Reduced response time by 80%',
        'Improved customer satisfaction',
        'Lead generation',
        'Cost reduction',
        'Scalable support'
      ],
      category: 'Customer Service',
      popular: true,
      icon: MessageSquare,
      users: 'Unlimited',
      setupTime: '10 minutes'
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      description: 'Advanced cybersecurity monitoring with threat detection, automated response, and compliance tracking.',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        '24/7 threat monitoring',
        'Automated incident response',
        'Compliance tracking',
        'Security analytics',
        'Real-time alerts',
        'Vulnerability scanning',
        'Penetration testing',
        'Security training'
      ],
      benefits: [
        'Proactive threat protection',
        'Reduced security incidents by 90%',
        'Compliance assurance',
        'Expert security guidance',
        'Cost-effective security',
        'Peace of mind'
      ],
      category: 'Security',
      popular: true,
      icon: Shield,
      users: 'Up to 50 users',
      setupTime: '15 minutes'
    },
    {
      id: 'zion-content-studio',
      name: 'Zion Content Studio',
      description: 'Complete AI-powered content creation suite with writing assistance, image generation, and social media automation.',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI writing assistance',
        'Content optimization',
        'SEO suggestions',
        'Multi-language support',
        'Brand voice training',
        'Content scheduling',
        'Image generation',
        'Video editing'
      ],
      benefits: [
        'Save 80% content creation time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform publishing',
        'Higher engagement rates',
        'Content calendar management'
      ],
      category: 'Content',
      popular: true,
      icon: FileText,
      users: 'Up to 10 users',
      setupTime: '5 minutes'
    },
    {
      id: 'zion-crm-intelligence',
      name: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with intelligent lead scoring, automated follow-ups, and sales forecasting.',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: [
        'AI lead scoring',
        'Automated follow-ups',
        'Sales forecasting',
        'Contact management',
        'Pipeline tracking',
        'Email integration',
        'Task automation',
        'Performance analytics'
      ],
      benefits: [
        'Increase qualified leads by 300%',
        'Automated lead nurturing',
        'Better conversion rates',
        'ROI optimization',
        'Time savings',
        'Data-driven insights'
      ],
      category: 'CRM',
      popular: false,
      icon: Users,
      users: 'Up to 20 users',
      setupTime: '10 minutes'
    },
    {
      id: 'zion-project-master',
      name: 'Zion Project Master',
      description: 'AI-enhanced project management with intelligent task allocation, progress tracking, and resource optimization.',
      price: '$69/month',
      marketPrice: '$120-350/month',
      features: [
        'Smart task management',
        'Team collaboration',
        'Progress analytics',
        'Resource optimization',
        'Time tracking',
        'Gantt charts',
        'Risk assessment',
        'Budget tracking'
      ],
      benefits: [
        'Improved project success rate',
        'Better resource utilization',
        'Reduced project delays',
        'Cost savings',
        'Team productivity',
        'Real-time insights'
      ],
      category: 'Productivity',
      popular: false,
      icon: Calendar,
      users: 'Up to 30 users',
      setupTime: '8 minutes'
    },
    {
      id: 'zion-email-automation',
      name: 'Zion Email Automation',
      description: 'Advanced email marketing automation with AI optimization, personalization, and advanced analytics for maximum ROI.',
      price: '$59/month',
      marketPrice: '$100-300/month',
      features: [
        'AI-powered email optimization',
        'Personalization engine',
        'A/B testing automation',
        'Advanced analytics',
        'List segmentation',
        'Drip campaigns',
        'Deliverability optimization',
        'Template library'
      ],
      benefits: [
        'Increase email open rates by 40%',
        'Higher click-through rates',
        'Automated personalization',
        'Better deliverability',
        'Time savings',
        'ROI tracking'
      ],
      category: 'Marketing',
      popular: false,
      icon: Mail,
      users: 'Up to 15 users',
      setupTime: '5 minutes'
    },
    {
      id: 'zion-inventory-smart',
      name: 'Zion Inventory Smart',
      description: 'Intelligent inventory management with AI-powered demand forecasting, automated reordering, and supply chain optimization.',
      price: '$129/month',
      marketPrice: '$250-700/month',
      features: [
        'AI demand forecasting',
        'Automated reordering',
        'Supply chain optimization',
        'Real-time tracking',
        'Multi-location support',
        'Vendor management',
        'Cost optimization',
        'Reporting & analytics'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Eliminate stockouts',
        'Optimize supply chain',
        'Better cash flow',
        'Automated processes',
        'Data-driven decisions'
      ],
      category: 'Inventory',
      popular: false,
      icon: Package,
      users: 'Up to 25 users',
      setupTime: '12 minutes'
    },
    {
      id: 'zion-invoice-genius',
      name: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing, payment tracking, and financial reporting.',
      price: '$49/month',
      marketPrice: '$100-300/month',
      features: [
        'AI-powered invoice generation',
        'Automated recurring billing',
        'Multi-currency support',
        'Payment tracking',
        'Tax calculation',
        'Client portal',
        'Payment reminders',
        'Financial reporting'
      ],
      benefits: [
        'Save 90% invoice creation time',
        'Reduce payment delays',
        'Automated follow-ups',
        'Professional invoices',
        'Better cash flow',
        'Tax compliance'
      ],
      category: 'Finance',
      popular: true,
      icon: DollarSign,
      users: 'Up to 10 users',
      setupTime: '3 minutes'
    },
    {
      id: 'zion-workflow-automation',
      name: 'Zion Workflow Automation',
      description: 'Intelligent business process automation with AI decision-making, exception handling, and performance monitoring.',
      price: '$89/month',
      marketPrice: '$180-500/month',
      features: [
        'Process automation',
        'AI decision-making',
        'Exception handling',
        'Performance monitoring',
        'Custom workflows',
        'Integration capabilities',
        'Audit trails',
        'Scalable architecture'
      ],
      benefits: [
        'Reduce manual work by 80%',
        'Improved accuracy',
        'Faster processes',
        'Cost savings',
        'Better compliance',
        'Scalable automation'
      ],
      category: 'Automation',
      popular: false,
      icon: Settings,
      users: 'Up to 20 users',
      setupTime: '15 minutes'
    },
    {
      id: 'zion-performance-monitor',
      name: 'Zion Performance Monitor',
      description: 'Comprehensive application and infrastructure performance monitoring with AI-powered insights and automated alerting.',
      price: '$79/month',
      marketPrice: '$150-450/month',
      features: [
        'Real-time monitoring',
        'AI-powered insights',
        'Automated alerting',
        'Performance analytics',
        'Uptime tracking',
        'Error tracking',
        'Custom dashboards',
        'API monitoring'
      ],
      benefits: [
        'Proactive issue detection',
        'Reduced downtime',
        'Better performance',
        'Cost optimization',
        'User experience improvement',
        'Data-driven insights'
      ],
      category: 'Monitoring',
      popular: false,
      icon: Monitor,
      users: 'Up to 15 users',
      setupTime: '8 minutes'
    },
    {
      id: 'zion-compliance-manager',
      name: 'Zion Compliance Manager',
      description: 'Automated compliance management with regulatory tracking, audit preparation, and risk assessment for various industries.',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'Regulatory compliance tracking',
        'Audit preparation',
        'Risk assessment',
        'Policy management',
        'Training modules',
        'Document management',
        'Reporting automation',
        'Multi-framework support'
      ],
      benefits: [
        'Reduced compliance costs',
        'Automated reporting',
        'Better risk management',
        'Audit readiness',
        'Time savings',
        'Peace of mind'
      ],
      category: 'Compliance',
      popular: false,
      icon: CheckCircle,
      users: 'Up to 30 users',
      setupTime: '20 minutes'
    },
    {
      id: 'zion-social-scheduler',
      name: 'Zion Social Scheduler',
      description: 'AI-driven social media management with content creation, scheduling, performance analytics, and engagement optimization.',
      price: '$69/month',
      marketPrice: '$120-350/month',
      features: [
        'Multi-platform posting',
        'AI content generation',
        'Post scheduling',
        'Analytics and insights',
        'Hashtag optimization',
        'Engagement tracking',
        'Team collaboration',
        'Brand monitoring'
      ],
      benefits: [
        'Increase engagement by 60%',
        'Save time on content creation',
        'Better posting times',
        'Improved reach',
        'Team coordination',
        'Performance insights'
      ],
      category: 'Social Media',
      popular: false,
      icon: Globe,
      users: 'Up to 15 users',
      setupTime: '7 minutes'
    },
    {
      id: 'zion-ai-video-editor',
      name: 'Zion AI Video Editor',
      description: 'AI-powered video editing with automated editing, voice synthesis, and intelligent content optimization for social media.',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI video editing',
        'Voice synthesis',
        'Auto-captioning',
        'Content optimization',
        'Template library',
        'Multi-format export',
        'Cloud storage',
        'Collaboration tools'
      ],
      benefits: [
        'Save 70% editing time',
        'Professional quality videos',
        'Automated processes',
        'Better engagement',
        'Cost-effective',
        'Easy to use'
      ],
      category: 'Video',
      popular: false,
      icon: Eye,
      users: 'Up to 10 users',
      setupTime: '5 minutes'
    },
    {
      id: 'zion-ai-translator-pro',
      name: 'Zion AI Translator Pro',
      description: 'Advanced AI translation service with 100+ languages, context understanding, and real-time translation capabilities.',
      price: '$39/month',
      marketPrice: '$80-250/month',
      features: [
        '100+ languages support',
        'Context understanding',
        'Real-time translation',
        'Document translation',
        'Voice translation',
        'API integration',
        'Custom glossaries',
        'Quality assurance'
      ],
      benefits: [
        'Accurate translations',
        'Time savings',
        'Global reach',
        'Cost-effective',
        'Real-time communication',
        'Professional quality'
      ],
      category: 'Translation',
      popular: false,
      icon: Globe,
      users: 'Up to 20 users',
      setupTime: '3 minutes'
    },
    {
      id: 'zion-ai-code-reviewer',
      name: 'Zion AI Code Reviewer',
      description: 'Intelligent code review assistant with automated bug detection, security analysis, and code quality improvement suggestions.',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: [
        'Automated bug detection',
        'Security analysis',
        'Code quality metrics',
        'Performance optimization',
        'Best practices suggestions',
        'Multi-language support',
        'Integration capabilities',
        'Team collaboration'
      ],
      benefits: [
        'Reduce bugs by 50%',
        'Improved code quality',
        'Faster development',
        'Better security',
        'Team learning',
        'Cost savings'
      ],
      category: 'Development',
      popular: false,
      icon: Code,
      users: 'Up to 25 users',
      setupTime: '10 minutes'
    },
    {
      id: 'zion-customer-insights',
      name: 'Zion Customer Insights Pro',
      description: 'Advanced customer analytics with AI-powered insights, behavior analysis, and predictive customer lifetime value modeling.',
      price: '$119/month',
      marketPrice: '$250-700/month',
      features: [
        'Customer behavior analysis',
        'Predictive modeling',
        'Segmentation',
        'Churn prediction',
        'Lifetime value calculation',
        'Personalization insights',
        'Campaign optimization',
        'Real-time analytics'
      ],
      benefits: [
        'Increase customer retention by 40%',
        'Better personalization',
        'Predictive insights',
        'Higher lifetime value',
        'Data-driven decisions',
        'Competitive advantage'
      ],
      category: 'Analytics',
      popular: false,
      icon: Users,
      users: 'Up to 20 users',
      setupTime: '12 minutes'
    },
    {
      id: 'zion-ai-email-assistant',
      name: 'Zion AI Email Assistant',
      description: 'Smart email management with AI-powered responses, scheduling, priority detection, and automated follow-ups.',
      price: '$49/month',
      marketPrice: '$100-300/month',
      features: [
        'AI email responses',
        'Smart scheduling',
        'Priority detection',
        'Automated follow-ups',
        'Email templates',
        'Sentiment analysis',
        'Integration capabilities',
        'Mobile app'
      ],
      benefits: [
        'Save 60% email time',
        'Better response rates',
        'Improved organization',
        'Automated processes',
        'Professional communication',
        'Time management'
      ],
      category: 'Email',
      popular: false,
      icon: Mail,
      users: 'Up to 15 users',
      setupTime: '5 minutes'
    },
    {
      id: 'zion-ai-meeting-assistant',
      name: 'Zion AI Meeting Assistant',
      description: 'Intelligent meeting automation with transcription, action item extraction, and automated follow-up scheduling.',
      price: '$69/month',
      marketPrice: '$120-350/month',
      features: [
        'Meeting transcription',
        'Action item extraction',
        'Automated follow-ups',
        'Meeting summaries',
        'Calendar integration',
        'Voice recognition',
        'Multi-language support',
        'Team collaboration'
      ],
      benefits: [
        'Save 80% meeting admin time',
        'Better meeting outcomes',
        'Automated follow-ups',
        'Improved productivity',
        'Better documentation',
        'Team alignment'
      ],
      category: 'Meetings',
      popular: false,
      icon: Calendar,
      users: 'Up to 20 users',
      setupTime: '8 minutes'
    },
    {
      id: 'zion-ai-seo-optimizer',
      name: 'Zion AI SEO Optimizer',
      description: 'Advanced SEO analysis and optimization with AI-powered keyword research, content suggestions, and ranking tracking.',
      price: '$89/month',
      marketPrice: '$180-500/month',
      features: [
        'AI keyword research',
        'Content optimization',
        'Ranking tracking',
        'Competitor analysis',
        'Technical SEO audit',
        'Link building suggestions',
        'Performance monitoring',
        'Reporting automation'
      ],
      benefits: [
        'Increase organic traffic by 150%',
        'Better search rankings',
        'Automated optimization',
        'Competitive advantage',
        'Time savings',
        'ROI tracking'
      ],
      category: 'SEO',
      popular: false,
      icon: Target,
      users: 'Up to 15 users',
      setupTime: '10 minutes'
    },
    {
      id: 'zion-ai-data-cleaner',
      name: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation with AI-powered duplicate detection, format standardization, and quality assurance.',
      price: '$59/month',
      marketPrice: '$120-350/month',
      features: [
        'AI duplicate detection',
        'Format standardization',
        'Data validation',
        'Quality scoring',
        'Automated cleaning',
        'Data profiling',
        'Integration capabilities',
        'Custom rules'
      ],
      benefits: [
        'Improve data quality by 95%',
        'Reduce manual work',
        'Better data accuracy',
        'Cost savings',
        'Automated processes',
        'Compliance ready'
      ],
      category: 'Data',
      popular: false,
      icon: Database,
      users: 'Up to 20 users',
      setupTime: '7 minutes'
    },
    {
      id: 'zion-ai-contract-analyzer',
      name: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis with risk assessment, clause extraction, and automated compliance checking.',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'Contract analysis',
        'Risk assessment',
        'Clause extraction',
        'Compliance checking',
        'Automated summaries',
        'Version comparison',
        'Deadline tracking',
        'Legal insights'
      ],
      benefits: [
        'Reduce contract review time by 70%',
        'Better risk management',
        'Improved compliance',
        'Cost savings',
        'Faster negotiations',
        'Legal insights'
      ],
      category: 'Legal',
      popular: false,
      icon: FileText,
      users: 'Up to 25 users',
      setupTime: '15 minutes'
    },
    {
      id: 'zion-ai-survey-builder',
      name: 'Zion AI Survey Builder',
      description: 'Intelligent survey creation with AI-powered question suggestions, response analysis, and automated insights generation.',
      price: '$49/month',
      marketPrice: '$100-300/month',
      features: [
        'AI question suggestions',
        'Response analysis',
        'Automated insights',
        'Multi-format surveys',
        'Real-time analytics',
        'Custom branding',
        'Integration capabilities',
        'Mobile optimization'
      ],
      benefits: [
        'Create surveys 5x faster',
        'Better response rates',
        'Automated insights',
        'Professional surveys',
        'Time savings',
        'Data-driven decisions'
      ],
      category: 'Surveys',
      popular: false,
      icon: CheckCircle,
      users: 'Up to 15 users',
      setupTime: '5 minutes'
    },
    {
      id: 'zion-ai-accounting-assistant',
      name: 'Zion AI Accounting Assistant',
      description: 'AI-powered accounting automation with expense categorization, invoice processing, and financial reporting.',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: [
        'Expense categorization',
        'Invoice processing',
        'Financial reporting',
        'Tax preparation',
        'Receipt scanning',
        'Bank reconciliation',
        'Compliance tracking',
        'Multi-currency support'
      ],
      benefits: [
        'Save 70% accounting time',
        'Better accuracy',
        'Automated processes',
        'Cost savings',
        'Compliance ready',
        'Real-time insights'
      ],
      category: 'Accounting',
      popular: false,
      icon: DollarSign,
      users: 'Up to 10 users',
      setupTime: '10 minutes'
    },
    {
      id: 'zion-ai-recruitment-pro',
      name: 'Zion AI Recruitment Pro',
      description: 'Intelligent recruitment platform with AI-powered candidate screening, interview scheduling, and talent matching.',
      price: '$129/month',
      marketPrice: '$250-700/month',
      features: [
        'AI candidate screening',
        'Interview scheduling',
        'Talent matching',
        'Resume parsing',
        'Skill assessment',
        'Background checks',
        'Onboarding automation',
        'Analytics dashboard'
      ],
      benefits: [
        'Reduce hiring time by 60%',
        'Better candidate quality',
        'Automated processes',
        'Cost savings',
        'Improved efficiency',
        'Better matches'
      ],
      category: 'HR',
      popular: false,
      icon: Users,
      users: 'Up to 20 users',
      setupTime: '12 minutes'
    },
    {
      id: 'zion-ai-content-moderation',
      name: 'Zion AI Content Moderation',
      description: 'Automated content moderation with AI-powered detection of inappropriate content, spam filtering, and community management.',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI content detection',
        'Spam filtering',
        'Community management',
        'Real-time moderation',
        'Custom rules',
        'Multi-language support',
        'Analytics dashboard',
        'API integration'
      ],
      benefits: [
        'Reduce moderation costs by 80%',
        '24/7 content monitoring',
        'Better user experience',
        'Automated processes',
        'Scalable solution',
        'Compliance ready'
      ],
      category: 'Moderation',
      popular: false,
      icon: Shield,
      users: 'Unlimited',
      setupTime: '8 minutes'
    },
    {
      id: 'zion-ai-predictive-maintenance',
      name: 'Zion AI Predictive Maintenance',
      description: 'AI-powered equipment maintenance prediction with failure forecasting, maintenance scheduling, and cost optimization.',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'Failure prediction',
        'Maintenance scheduling',
        'Cost optimization',
        'IoT integration',
        'Real-time monitoring',
        'Predictive analytics',
        'Custom alerts',
        'Performance tracking'
      ],
      benefits: [
        'Reduce downtime by 50%',
        'Lower maintenance costs',
        'Better equipment life',
        'Predictive insights',
        'Cost optimization',
        'Improved efficiency'
      ],
      category: 'Maintenance',
      popular: false,
      icon: Settings,
      users: 'Up to 30 users',
      setupTime: '20 minutes'
    },
    {
      id: 'zion-ai-energy-manager',
      name: 'Zion AI Energy Manager',
      description: 'Intelligent energy management with consumption optimization, cost analysis, and sustainability tracking.',
      price: '$89/month',
      marketPrice: '$180-500/month',
      features: [
        'Energy consumption tracking',
        'Cost optimization',
        'Sustainability metrics',
        'Predictive analytics',
        'IoT integration',
        'Custom reporting',
        'Alert system',
        'Multi-site support'
      ],
      benefits: [
        'Reduce energy costs by 30%',
        'Better sustainability',
        'Predictive insights',
        'Cost savings',
        'Environmental impact',
        'Automated optimization'
      ],
      category: 'Energy',
      popular: false,
      icon: Zap,
      users: 'Up to 25 users',
      setupTime: '15 minutes'
    },
    {
      id: 'zion-ai-supply-chain-optimizer',
      name: 'Zion AI Supply Chain Optimizer',
      description: 'AI-powered supply chain optimization with demand forecasting, inventory management, and logistics optimization.',
      price: '$179/month',
      marketPrice: '$350-900/month',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Logistics planning',
        'Supplier management',
        'Risk assessment',
        'Cost optimization',
        'Real-time tracking',
        'Analytics dashboard'
      ],
      benefits: [
        'Reduce supply chain costs by 25%',
        'Better inventory management',
        'Improved efficiency',
        'Risk mitigation',
        'Cost optimization',
        'Better planning'
      ],
      category: 'Supply Chain',
      popular: false,
      icon: Box,
      users: 'Up to 30 users',
      setupTime: '18 minutes'
    },
    {
      id: 'zion-ai-fraud-detector',
      name: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection with AI-powered pattern recognition, real-time monitoring, and automated response systems.',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'AI pattern recognition',
        'Real-time monitoring',
        'Automated response',
        'Risk scoring',
        'Multi-channel detection',
        'Custom rules',
        'Analytics dashboard',
        'API integration'
      ],
      benefits: [
        'Reduce fraud losses by 85%',
        'Real-time protection',
        'Automated response',
        'Better accuracy',
        'Cost savings',
        'Peace of mind'
      ],
      category: 'Security',
      popular: false,
      icon: Shield,
      users: 'Unlimited',
      setupTime: '12 minutes'
    },
    {
      id: 'zion-ai-customer-service-pro',
      name: 'Zion AI Customer Service Pro',
      description: 'Advanced AI customer service platform with omnichannel support, sentiment analysis, and automated resolution.',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'Omnichannel support',
        'Sentiment analysis',
        'Automated resolution',
        'Knowledge base',
        'Live chat integration',
        'Ticket management',
        'Performance analytics',
        'Custom workflows'
      ],
      benefits: [
        'Improve customer satisfaction by 40%',
        'Reduce response time by 70%',
        'Better customer experience',
        'Cost savings',
        'Scalable support',
        'Data-driven insights'
      ],
      category: 'Customer Service',
      popular: false,
      icon: MessageSquare,
      users: 'Unlimited',
      setupTime: '15 minutes'
    },
    {
      id: 'zion-ai-marketing-automation',
      name: 'Zion AI Marketing Automation',
      description: 'Comprehensive AI marketing automation with campaign optimization, lead scoring, and personalized customer journeys.',
      price: '$129/month',
      marketPrice: '$250-700/month',
      features: [
        'Campaign optimization',
        'Lead scoring',
        'Personalized journeys',
        'A/B testing',
        'Email automation',
        'Social media management',
        'Analytics dashboard',
        'ROI tracking'
      ],
      benefits: [
        'Increase conversions by 60%',
        'Better lead quality',
        'Automated processes',
        'Personalized experiences',
        'Cost savings',
        'ROI optimization'
      ],
      category: 'Marketing',
      popular: false,
      icon: Target,
      users: 'Up to 25 users',
      setupTime: '12 minutes'
    },
    {
      id: 'zion-ai-document-ai',
      name: 'Zion AI Document AI',
      description: 'Advanced document processing with AI-powered extraction, classification, and intelligent data management.',
      price: '$89/month',
      marketPrice: '$180-500/month',
      features: [
        'Document extraction',
        'Classification',
        'Data management',
        'OCR capabilities',
        'Version control',
        'Search functionality',
        'Integration capabilities',
        'Custom workflows'
      ],
      benefits: [
        'Reduce document processing time by 80%',
        'Better accuracy',
        'Automated processes',
        'Cost savings',
        'Better organization',
        'Compliance ready'
      ],
      category: 'Documents',
      popular: false,
      icon: FileText,
      users: 'Up to 20 users',
      setupTime: '10 minutes'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: microSaasProducts.length },
    { id: 'Analytics', name: 'Analytics', count: microSaasProducts.filter(p => p.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: microSaasProducts.filter(p => p.category === 'Customer Service').length },
    { id: 'Security', name: 'Security', count: microSaasProducts.filter(p => p.category === 'Security').length },
    { id: 'Content', name: 'Content', count: microSaasProducts.filter(p => p.category === 'Content').length },
    { id: 'CRM', name: 'CRM', count: microSaasProducts.filter(p => p.category === 'CRM').length },
    { id: 'Productivity', name: 'Productivity', count: microSaasProducts.filter(p => p.category === 'Productivity').length },
    { id: 'Marketing', name: 'Marketing', count: microSaasProducts.filter(p => p.category === 'Marketing').length },
    { id: 'Inventory', name: 'Inventory', count: microSaasProducts.filter(p => p.category === 'Inventory').length },
    { id: 'Finance', name: 'Finance', count: microSaasProducts.filter(p => p.category === 'Finance').length },
    { id: 'Automation', name: 'Automation', count: microSaasProducts.filter(p => p.category === 'Automation').length },
    { id: 'Monitoring', name: 'Monitoring', count: microSaasProducts.filter(p => p.category === 'Monitoring').length },
    { id: 'Compliance', name: 'Compliance', count: microSaasProducts.filter(p => p.category === 'Compliance').length },
    { id: 'Social Media', name: 'Social Media', count: microSaasProducts.filter(p => p.category === 'Social Media').length },
    { id: 'Video', name: 'Video', count: microSaasProducts.filter(p => p.category === 'Video').length },
    { id: 'Translation', name: 'Translation', count: microSaasProducts.filter(p => p.category === 'Translation').length },
    { id: 'Development', name: 'Development', count: microSaasProducts.filter(p => p.category === 'Development').length },
    { id: 'Email', name: 'Email', count: microSaasProducts.filter(p => p.category === 'Email').length },
    { id: 'Meetings', name: 'Meetings', count: microSaasProducts.filter(p => p.category === 'Meetings').length },
    { id: 'SEO', name: 'SEO', count: microSaasProducts.filter(p => p.category === 'SEO').length },
    { id: 'Data', name: 'Data', count: microSaasProducts.filter(p => p.category === 'Data').length },
    { id: 'Legal', name: 'Legal', count: microSaasProducts.filter(p => p.category === 'Legal').length },
    { id: 'Surveys', name: 'Surveys', count: microSaasProducts.filter(p => p.category === 'Surveys').length },
    { id: 'Accounting', name: 'Accounting', count: microSaasProducts.filter(p => p.category === 'Accounting').length },
    { id: 'HR', name: 'HR', count: microSaasProducts.filter(p => p.category === 'HR').length },
    { id: 'Moderation', name: 'Moderation', count: microSaasProducts.filter(p => p.category === 'Moderation').length },
    { id: 'Maintenance', name: 'Maintenance', count: microSaasProducts.filter(p => p.category === 'Maintenance').length },
    { id: 'Energy', name: 'Energy', count: microSaasProducts.filter(p => p.category === 'Energy').length },
    { id: 'Supply Chain', name: 'Supply Chain', count: microSaasProducts.filter(p => p.category === 'Supply Chain').length },
    { id: 'Documents', name: 'Documents', count: microSaasProducts.filter(p => p.category === 'Documents').length }
  ];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularProducts = microSaasProducts.filter(product => product.popular);

  const benefits = [
    'Quick setup in minutes',
    'No long-term contracts',
    '24/7 customer support',
    'Regular feature updates',
    'API integrations available',
    'Mobile app access',
    'Data security & compliance',
    'Scalable pricing plans'
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '10K+', label: 'Active Users' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Secure' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '5min', label: 'Setup Time' }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | 50+ AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs. Starting at $39/month." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring, content generation, CRM, automation" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of 50+ AI-powered micro SaaS tools designed to solve specific business challenges. 
              Quick setup, affordable pricing, powerful features.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="/pricing"
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        {popularProducts.length > 0 && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">Featured Tools</h2>
                <p className="text-xl text-gray-300">Our most popular micro SaaS solutions</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularProducts.map((product) => (
                  <div key={product.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <product.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-yellow-400 text-sm font-semibold">Popular</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-3xl font-bold text-cyan-400">{product.price}</span>
                        <span className="text-gray-400 text-sm ml-2 line-through">{product.marketPrice}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">{product.users}</div>
                        <div className="text-xs text-gray-500">Setup: {product.setupTime}</div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {product.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex space-x-3">
                      <a 
                        href="/contact"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                      >
                        Start Free Trial
                      </a>
                      <a 
                        href="/contact"
                        className="px-4 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search micro SaaS tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-4 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
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
        </section>

        {/* All Products */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">All Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of specialized business tools designed to solve specific challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    {product.popular && (
                      <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{product.category}</p>
                  <p className="text-gray-300 mb-4 text-sm">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{product.marketPrice}</span>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <div>{product.users}</div>
                      <div className="text-xs">Setup: {product.setupTime}</div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex space-x-3">
                    <a 
                      href="/contact"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-center text-sm"
                    >
                      Start Free Trial
                    </a>
                    <a 
                      href="/contact"
                      className="px-4 py-2 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-sm"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">How It Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Getting started with our micro SaaS solutions is simple and straightforward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Choose Your Solution</h3>
                <p className="text-gray-300">Browse our collection and select the micro SaaS product that fits your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Start Free Trial</h3>
                <p className="text-gray-300">Sign up for a free trial and explore all features without any commitment.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scale & Grow</h3>
                <p className="text-gray-300">Upgrade when you're ready and scale your usage as your business grows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start with any of our micro SaaS tools and see immediate improvements in your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </a>
                <a 
                  href="/pricing"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View All Plans
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default MicroSaasPage;