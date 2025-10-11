'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Zap, 
  Shield, 
  Brain, 
  BarChart, 
  Target, 
  TrendingUp, 
  Globe, 
  Database, 
  Users, 
  Settings, 
  MessageCircle, 
  Heart, 
  DollarSign, 
  Box, 
  Monitor, 
  Eye, 
  Mic, 
  Code, 
  FileText, 
  Cpu, 
  Link as LinkIcon, 
  Server, 
  Package, 
  Mail, 
  Calendar, 
  ShoppingCart,
  Search,
  Filter,
  Phone,
  MapPin,
  Sparkles,
  Rocket,
  Lock,
  Wifi,
  Headphones,
  Workflow,
  PieChart,
  Layers,
  Activity,
  Zap as Lightning,
  Award,
  ChevronRight,
  Play,
  Download,
  ExternalLink
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts = [
    // AI & Analytics Tools
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
        'Mobile-responsive dashboards'
      ],
      benefits: [
        'Data-driven decision making',
        'Real-time insights',
        'Custom dashboards',
        'Automated reporting',
        'ROI optimization'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart,
      users: 'Up to 25 users',
      setupTime: '5 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-chat',
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
        'Reduced response time',
        'Improved customer satisfaction',
        'Lead generation',
        'Cost reduction'
      ],
      category: 'Customer Service',
      popular: true,
      icon: MessageCircle,
      users: 'Unlimited',
      setupTime: '10 minutes',
      trialDays: 14
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
        'Reduced security incidents',
        'Compliance assurance',
        'Expert security guidance',
        'Peace of mind'
      ],
      category: 'Security',
      popular: true,
      icon: Shield,
      users: 'Up to 50 users',
      setupTime: '15 minutes',
      trialDays: 7
    },
    {
      id: 'zion-cloud-vault',
      name: 'Zion Cloud Vault',
      description: 'Enterprise-grade cloud backup and disaster recovery solution with automated scheduling and encryption.',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: [
        'Automated cloud backups',
        'Disaster recovery planning',
        'Data encryption',
        'Cross-platform sync',
        'Version control',
        'Compliance reporting',
        'Mobile access',
        'Team collaboration'
      ],
      benefits: [
        'Data protection',
        'Business continuity',
        'Cost-effective storage',
        'Easy recovery',
        'Compliance ready'
      ],
      category: 'Infrastructure',
      popular: false,
      icon: Cloud,
      users: 'Unlimited',
      setupTime: '5 minutes',
      trialDays: 30
    },
    {
      id: 'zion-content-studio',
      name: 'Zion Content Studio',
      description: 'AI-powered content creation platform with automated writing, SEO optimization, and multi-platform publishing.',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI writing assistance',
        'Content optimization',
        'SEO suggestions',
        'Multi-language support',
        'Brand voice training',
        'Content scheduling',
        'Plagiarism detection',
        'Performance analytics'
      ],
      benefits: [
        'Save 80% content creation time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform publishing',
        'Higher engagement'
      ],
      category: 'Content',
      popular: true,
      icon: FileText,
      users: 'Up to 20 users',
      setupTime: '3 minutes',
      trialDays: 14
    },
    {
      id: 'zion-crm-intelligence',
      name: 'Zion CRM Intelligence',
      description: 'AI-enhanced CRM with predictive analytics, automated lead scoring, and intelligent customer insights.',
      price: '$129/month',
      marketPrice: '$250-700/month',
      features: [
        'AI-powered lead scoring',
        'Predictive analytics',
        'Automated follow-ups',
        'Customer segmentation',
        'Sales forecasting',
        'Integration capabilities',
        'Mobile CRM access',
        'Advanced reporting'
      ],
      benefits: [
        'Increase sales by 40%',
        'Better lead qualification',
        'Automated processes',
        'Data-driven insights',
        'Improved conversion'
      ],
      category: 'CRM',
      popular: true,
      icon: Users,
      users: 'Up to 30 users',
      setupTime: '10 minutes',
      trialDays: 14
    },
    {
      id: 'zion-data-sync',
      name: 'Zion Data Sync',
      description: 'Advanced data integration platform with real-time synchronization, ETL processes, and data quality management.',
      price: '$159/month',
      marketPrice: '$300-800/month',
      features: [
        'Real-time data sync',
        'ETL/ELT processes',
        'Data quality management',
        'API integrations',
        'Data transformation',
        'Error handling',
        'Monitoring & alerts',
        'Custom connectors'
      ],
      benefits: [
        'Unified data view',
        'Real-time insights',
        'Data accuracy',
        'Reduced manual work',
        'Better decision making'
      ],
      category: 'Data',
      popular: false,
      icon: Database,
      users: 'Unlimited',
      setupTime: '20 minutes',
      trialDays: 14
    },
    {
      id: 'zion-lead-magnet',
      name: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring and automated nurturing.',
      price: '$89/month',
      marketPrice: '$200-600/month',
      features: [
        'AI-powered lead scoring',
        'Multi-channel lead capture',
        'Automated lead nurturing',
        'CRM integration',
        'Advanced analytics',
        'A/B testing',
        'Landing page builder',
        'Email automation'
      ],
      benefits: [
        'Increase qualified leads by 300%',
        'Automated lead nurturing',
        'Better conversion rates',
        'ROI optimization',
        'Time savings'
      ],
      category: 'Marketing',
      popular: true,
      icon: Target,
      users: 'Up to 15 users',
      setupTime: '5 minutes',
      trialDays: 14
    },
    {
      id: 'zion-project-master',
      name: 'Zion Project Master',
      description: 'AI-enhanced project management with intelligent task allocation, progress tracking, and resource optimization.',
      price: '$79/month',
      marketPrice: '$150-500/month',
      features: [
        'Smart task management',
        'Team collaboration',
        'Progress analytics',
        'Resource optimization',
        'Time tracking',
        'Gantt charts',
        'Risk assessment',
        'Automated reporting'
      ],
      benefits: [
        'Improved productivity',
        'Better resource allocation',
        'Project visibility',
        'Risk mitigation',
        'Team coordination'
      ],
      category: 'Productivity',
      popular: false,
      icon: Calendar,
      users: 'Up to 25 users',
      setupTime: '5 minutes',
      trialDays: 14
    },
    {
      id: 'zion-email-automation',
      name: 'Zion Email Automation',
      description: 'Intelligent email marketing platform with AI-driven personalization, automation workflows, and advanced analytics.',
      price: '$69/month',
      marketPrice: '$150-400/month',
      features: [
        'AI-driven personalization',
        'Automation workflows',
        'Advanced analytics',
        'A/B testing',
        'List segmentation',
        'Template library',
        'Deliverability optimization',
        'ROI tracking'
      ],
      benefits: [
        'Higher open rates',
        'Automated campaigns',
        'Better targeting',
        'Increased conversions',
        'Time savings'
      ],
      category: 'Marketing',
      popular: true,
      icon: Mail,
      users: 'Up to 20 users',
      setupTime: '3 minutes',
      trialDays: 14
    },
    {
      id: 'zion-inventory-smart',
      name: 'Zion Inventory Smart',
      description: 'AI-powered inventory management with demand forecasting, automated reordering, and supply chain optimization.',
      price: '$119/month',
      marketPrice: '$250-600/month',
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Supply chain optimization',
        'Multi-location support',
        'Barcode scanning',
        'Vendor management',
        'Cost tracking',
        'Reporting & analytics'
      ],
      benefits: [
        'Reduce stockouts by 60%',
        'Lower inventory costs',
        'Automated processes',
        'Better forecasting',
        'Improved efficiency'
      ],
      category: 'Operations',
      popular: false,
      icon: Package,
      users: 'Up to 30 users',
      setupTime: '15 minutes',
      trialDays: 14
    },
    {
      id: 'zion-invoice-genius',
      name: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing, payment tracking, and financial analytics.',
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
        'Better cash flow'
      ],
      category: 'Finance',
      popular: true,
      icon: DollarSign,
      users: 'Up to 10 users',
      setupTime: '2 minutes',
      trialDays: 30
    },
    {
      id: 'zion-workflow-automation',
      name: 'Zion Workflow Automation',
      description: 'Business process automation platform with intelligent workflows, RPA capabilities, and integration management.',
      price: '$139/month',
      marketPrice: '$300-800/month',
      features: [
        'Process automation',
        'RPA capabilities',
        'Integration management',
        'Workflow designer',
        'Exception handling',
        'Performance monitoring',
        'Custom triggers',
        'Team collaboration'
      ],
      benefits: [
        'Reduce manual work by 70%',
        'Improved accuracy',
        'Faster processes',
        'Cost savings',
        'Better compliance'
      ],
      category: 'Automation',
      popular: true,
      icon: Settings,
      users: 'Up to 25 users',
      setupTime: '10 minutes',
      trialDays: 14
    },
    {
      id: 'zion-performance-monitor',
      name: 'Zion Performance Monitor',
      description: 'Comprehensive application and infrastructure monitoring with real-time alerts, performance analytics, and optimization recommendations.',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'Real-time monitoring',
        'Performance analytics',
        'Automated alerts',
        'Uptime tracking',
        'Error tracking',
        'Capacity planning',
        'Custom dashboards',
        'API monitoring'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Proactive issue detection',
        'Performance optimization',
        'Reduced downtime',
        'Better user experience'
      ],
      category: 'Monitoring',
      popular: false,
      icon: Monitor,
      users: 'Unlimited',
      setupTime: '5 minutes',
      trialDays: 14
    },
    {
      id: 'zion-compliance-manager',
      name: 'Zion Compliance Manager',
      description: 'Automated compliance monitoring and reporting for various regulatory frameworks with audit trail and risk assessment.',
      price: '$179/month',
      marketPrice: '$350-1000/month',
      features: [
        'Automated compliance monitoring',
        'Regulatory reporting',
        'Audit trail management',
        'Risk assessment',
        'Policy management',
        'Training tracking',
        'Document management',
        'Alert system'
      ],
      benefits: [
        'Reduced compliance costs',
        'Automated reporting',
        'Better risk management',
        'Audit readiness',
        'Peace of mind'
      ],
      category: 'Compliance',
      popular: false,
      icon: CheckCircle,
      users: 'Up to 40 users',
      setupTime: '20 minutes',
      trialDays: 7
    },
    {
      id: 'zion-social-scheduler',
      name: 'Zion Social Scheduler',
      description: 'AI-powered social media management with content scheduling, analytics, and engagement optimization across all platforms.',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: [
        'Multi-platform posting',
        'AI content suggestions',
        'Post scheduling',
        'Analytics and insights',
        'Hashtag optimization',
        'Engagement tracking',
        'Team collaboration',
        'Brand monitoring'
      ],
      benefits: [
        'Save 5+ hours per week',
        'Better engagement rates',
        'Consistent posting',
        'Data-driven content',
        'Time optimization'
      ],
      category: 'Social Media',
      popular: true,
      icon: Globe,
      users: 'Up to 15 users',
      setupTime: '3 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-video-editor',
      name: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing, voice synthesis, and intelligent content optimization.',
      price: '$129/month',
      marketPrice: '$250-700/month',
      features: [
        'AI video editing',
        'Voice synthesis',
        'Auto-captioning',
        'Content optimization',
        'Template library',
        'Multi-format export',
        'Collaboration tools',
        'Analytics dashboard'
      ],
      benefits: [
        'Save 80% editing time',
        'Professional quality',
        'Automated processes',
        'Better engagement',
        'Cost effective'
      ],
      category: 'Video',
      popular: true,
      icon: Eye,
      users: 'Up to 20 users',
      setupTime: '5 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-translator-pro',
      name: 'Zion AI Translator Pro',
      description: 'Advanced AI translation platform with 100+ languages, context-aware translation, and real-time collaboration.',
      price: '$89/month',
      marketPrice: '$200-500/month',
      features: [
        '100+ languages support',
        'Context-aware translation',
        'Real-time collaboration',
        'Document translation',
        'Voice translation',
        'Quality assurance',
        'API integration',
        'Custom glossaries'
      ],
      benefits: [
        'Accurate translations',
        'Time savings',
        'Global reach',
        'Cost effective',
        'Professional quality'
      ],
      category: 'Translation',
      popular: false,
      icon: Globe,
      users: 'Unlimited',
      setupTime: '2 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-code-reviewer',
      name: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated analysis, security scanning, and performance optimization suggestions.',
      price: '$109/month',
      marketPrice: '$250-600/month',
      features: [
        'Automated code analysis',
        'Security scanning',
        'Performance optimization',
        'Code quality metrics',
        'Best practices suggestions',
        'Team collaboration',
        'Integration with IDEs',
        'Custom rules'
      ],
      benefits: [
        'Improved code quality',
        'Faster reviews',
        'Security enhancement',
        'Team learning',
        'Reduced bugs'
      ],
      category: 'Development',
      popular: true,
      icon: Code,
      users: 'Up to 25 users',
      setupTime: '5 minutes',
      trialDays: 14
    },
    {
      id: 'zion-customer-insights',
      name: 'Zion Customer Insights Pro',
      description: 'Advanced customer analytics platform with behavioral analysis, churn prediction, and personalized recommendations.',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'Behavioral analysis',
        'Churn prediction',
        'Personalized recommendations',
        'Customer segmentation',
        'Lifetime value analysis',
        'Sentiment analysis',
        'Real-time insights',
        'Custom dashboards'
      ],
      benefits: [
        'Increase retention by 40%',
        'Better customer understanding',
        'Personalized experiences',
        'Data-driven decisions',
        'Revenue growth'
      ],
      category: 'Analytics',
      popular: true,
      icon: Users,
      users: 'Up to 30 users',
      setupTime: '10 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-email-assistant',
      name: 'Zion AI Email Assistant',
      description: 'Smart email management with AI-powered responses, scheduling, and intelligent email organization.',
      price: '$59/month',
      marketPrice: '$120-350/month',
      features: [
        'AI-powered responses',
        'Smart scheduling',
        'Email organization',
        'Priority detection',
        'Follow-up reminders',
        'Template suggestions',
        'Sentiment analysis',
        'Productivity metrics'
      ],
      benefits: [
        'Save 3+ hours daily',
        'Better email management',
        'Improved responses',
        'Reduced stress',
        'Higher productivity'
      ],
      category: 'Productivity',
      popular: true,
      icon: Mail,
      users: 'Up to 20 users',
      setupTime: '2 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-meeting-assistant',
      name: 'Zion AI Meeting Assistant',
      description: 'Intelligent meeting management with automated transcription, action items, and meeting optimization.',
      price: '$79/month',
      marketPrice: '$150-450/month',
      features: [
        'Automated transcription',
        'Action item extraction',
        'Meeting summaries',
        'Smart scheduling',
        'Follow-up automation',
        'Integration capabilities',
        'Analytics dashboard',
        'Team collaboration'
      ],
      benefits: [
        'Save 2+ hours per meeting',
        'Better meeting outcomes',
        'Automated follow-ups',
        'Improved productivity',
        'Better documentation'
      ],
      category: 'Productivity',
      popular: false,
      icon: Calendar,
      users: 'Up to 25 users',
      setupTime: '3 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-seo-optimizer',
      name: 'Zion AI SEO Optimizer',
      description: 'Advanced SEO optimization platform with AI-powered content analysis, keyword research, and ranking optimization.',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI content analysis',
        'Keyword research',
        'Ranking optimization',
        'Technical SEO audit',
        'Competitor analysis',
        'Content suggestions',
        'Performance tracking',
        'Automated reports'
      ],
      benefits: [
        'Increase organic traffic by 150%',
        'Better search rankings',
        'Automated optimization',
        'Competitive advantage',
        'ROI improvement'
      ],
      category: 'SEO',
      popular: true,
      icon: Target,
      users: 'Up to 15 users',
      setupTime: '5 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-data-cleaner',
      name: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with automated error detection and data quality improvement.',
      price: '$89/month',
      marketPrice: '$180-500/month',
      features: [
        'Automated data cleaning',
        'Error detection',
        'Data validation',
        'Duplicate removal',
        'Format standardization',
        'Quality scoring',
        'API integration',
        'Custom rules'
      ],
      benefits: [
        'Improve data quality by 95%',
        'Reduce manual work',
        'Better data accuracy',
        'Time savings',
        'Cost reduction'
      ],
      category: 'Data',
      popular: false,
      icon: Database,
      users: 'Unlimited',
      setupTime: '3 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-contract-analyzer',
      name: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis with risk assessment, clause extraction, and automated contract management.',
      price: '$159/month',
      marketPrice: '$300-800/month',
      features: [
        'Contract analysis',
        'Risk assessment',
        'Clause extraction',
        'Automated summaries',
        'Compliance checking',
        'Renewal tracking',
        'Template generation',
        'Team collaboration'
      ],
      benefits: [
        'Reduce contract review time by 80%',
        'Better risk management',
        'Improved compliance',
        'Faster negotiations',
        'Cost savings'
      ],
      category: 'Legal',
      popular: false,
      icon: FileText,
      users: 'Up to 20 users',
      setupTime: '10 minutes',
      trialDays: 7
    },
    {
      id: 'zion-ai-survey-builder',
      name: 'Zion AI Survey Builder',
      description: 'Intelligent survey creation platform with AI-powered question suggestions, analytics, and automated insights.',
      price: '$69/month',
      marketPrice: '$150-400/month',
      features: [
        'AI question suggestions',
        'Survey templates',
        'Advanced analytics',
        'Automated insights',
        'Multi-channel distribution',
        'Response analysis',
        'Custom branding',
        'Integration capabilities'
      ],
      benefits: [
        'Create surveys 5x faster',
        'Better response rates',
        'Automated insights',
        'Professional surveys',
        'Data-driven decisions'
      ],
      category: 'Research',
      popular: true,
      icon: CheckCircle,
      users: 'Up to 25 users',
      setupTime: '2 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-accounting-assistant',
      name: 'Zion AI Accounting Assistant',
      description: 'AI-powered accounting platform with automated bookkeeping, expense tracking, and financial reporting.',
      price: '$119/month',
      marketPrice: '$250-600/month',
      features: [
        'Automated bookkeeping',
        'Expense tracking',
        'Financial reporting',
        'Tax preparation',
        'Invoice management',
        'Bank reconciliation',
        'Budget planning',
        'Compliance monitoring'
      ],
      benefits: [
        'Save 10+ hours weekly',
        'Automated processes',
        'Better accuracy',
        'Real-time insights',
        'Cost reduction'
      ],
      category: 'Finance',
      popular: true,
      icon: DollarSign,
      users: 'Up to 15 users',
      setupTime: '5 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-recruitment-pro',
      name: 'Zion AI Recruitment Pro',
      description: 'Intelligent recruitment platform with AI-powered candidate screening, interview scheduling, and talent matching.',
      price: '$139/month',
      marketPrice: '$300-800/month',
      features: [
        'AI candidate screening',
        'Resume parsing',
        'Interview scheduling',
        'Talent matching',
        'Assessment tools',
        'Pipeline management',
        'Analytics dashboard',
        'Integration capabilities'
      ],
      benefits: [
        'Reduce hiring time by 60%',
        'Better candidate matching',
        'Automated processes',
        'Improved quality',
        'Cost savings'
      ],
      category: 'HR',
      popular: false,
      icon: Users,
      users: 'Up to 30 users',
      setupTime: '10 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-content-moderation',
      name: 'Zion AI Content Moderation',
      description: 'Automated content moderation platform with AI-powered filtering, sentiment analysis, and compliance monitoring.',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI content filtering',
        'Sentiment analysis',
        'Compliance monitoring',
        'Real-time moderation',
        'Custom rules',
        'Analytics dashboard',
        'API integration',
        'Team management'
      ],
      benefits: [
        'Reduce moderation costs by 70%',
        '24/7 monitoring',
        'Consistent enforcement',
        'Better user experience',
        'Scalable solution'
      ],
      category: 'Moderation',
      popular: false,
      icon: Shield,
      users: 'Unlimited',
      setupTime: '5 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-predictive-maintenance',
      name: 'Zion AI Predictive Maintenance',
      description: 'IoT-powered predictive maintenance platform with equipment monitoring, failure prediction, and optimization recommendations.',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'Equipment monitoring',
        'Failure prediction',
        'Maintenance scheduling',
        'Performance analytics',
        'Alert system',
        'Cost optimization',
        'Integration capabilities',
        'Custom dashboards'
      ],
      benefits: [
        'Reduce downtime by 50%',
        'Lower maintenance costs',
        'Proactive maintenance',
        'Better asset utilization',
        'ROI improvement'
      ],
      category: 'IoT',
      popular: false,
      icon: Settings,
      users: 'Up to 50 users',
      setupTime: '20 minutes',
      trialDays: 7
    },
    {
      id: 'zion-ai-energy-manager',
      name: 'Zion AI Energy Manager',
      description: 'Smart energy management platform with consumption monitoring, optimization recommendations, and cost analysis.',
      price: '$89/month',
      marketPrice: '$180-500/month',
      features: [
        'Energy monitoring',
        'Consumption analysis',
        'Optimization recommendations',
        'Cost tracking',
        'Sustainability reporting',
        'Alert system',
        'Integration capabilities',
        'Custom dashboards'
      ],
      benefits: [
        'Reduce energy costs by 30%',
        'Better sustainability',
        'Automated optimization',
        'Real-time monitoring',
        'Cost savings'
      ],
      category: 'Energy',
      popular: false,
      icon: Zap,
      users: 'Up to 25 users',
      setupTime: '10 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-supply-chain-optimizer',
      name: 'Zion AI Supply Chain Optimizer',
      description: 'AI-powered supply chain optimization with demand forecasting, inventory management, and logistics optimization.',
      price: '$179/month',
      marketPrice: '$350-1000/month',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Logistics optimization',
        'Supplier management',
        'Risk assessment',
        'Cost analysis',
        'Performance tracking',
        'Integration capabilities'
      ],
      benefits: [
        'Reduce costs by 25%',
        'Better forecasting',
        'Optimized logistics',
        'Risk mitigation',
        'Improved efficiency'
      ],
      category: 'Supply Chain',
      popular: false,
      icon: Box,
      users: 'Up to 40 users',
      setupTime: '15 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-fraud-detector',
      name: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection platform with real-time monitoring, behavioral analysis, and automated response.',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'Real-time monitoring',
        'Behavioral analysis',
        'Pattern recognition',
        'Automated response',
        'Risk scoring',
        'Alert system',
        'Integration capabilities',
        'Custom rules'
      ],
      benefits: [
        'Reduce fraud losses by 85%',
        'Real-time protection',
        'Automated response',
        'Better accuracy',
        'Cost savings'
      ],
      category: 'Security',
      popular: true,
      icon: Shield,
      users: 'Unlimited',
      setupTime: '10 minutes',
      trialDays: 7
    },
    {
      id: 'zion-ai-customer-service-pro',
      name: 'Zion AI Customer Service Pro',
      description: 'Advanced customer service platform with AI-powered support, knowledge management, and performance analytics.',
      price: '$129/month',
      marketPrice: '$250-700/month',
      features: [
        'AI-powered support',
        'Knowledge management',
        'Multi-channel support',
        'Performance analytics',
        'Automated responses',
        'Escalation management',
        'Team collaboration',
        'Integration capabilities'
      ],
      benefits: [
        'Improve satisfaction by 40%',
        'Faster response times',
        'Better knowledge sharing',
        'Reduced costs',
        'Scalable support'
      ],
      category: 'Customer Service',
      popular: true,
      icon: MessageCircle,
      users: 'Up to 30 users',
      setupTime: '5 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-marketing-automation',
      name: 'Zion AI Marketing Automation',
      description: 'Comprehensive marketing automation platform with AI-driven campaigns, lead nurturing, and performance optimization.',
      price: '$159/month',
      marketPrice: '$300-800/month',
      features: [
        'AI-driven campaigns',
        'Lead nurturing',
        'Email automation',
        'Social media management',
        'Analytics dashboard',
        'A/B testing',
        'Personalization',
        'Integration capabilities'
      ],
      benefits: [
        'Increase conversions by 200%',
        'Automated campaigns',
        'Better targeting',
        'Improved ROI',
        'Time savings'
      ],
      category: 'Marketing',
      popular: true,
      icon: Target,
      users: 'Up to 25 users',
      setupTime: '10 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-document-ai',
      name: 'Zion AI Document AI',
      description: 'Advanced document processing platform with OCR, intelligent extraction, and automated document management.',
      price: '$119/month',
      marketPrice: '$250-600/month',
      features: [
        'OCR technology',
        'Intelligent extraction',
        'Document classification',
        'Automated processing',
        'Search capabilities',
        'Version control',
        'Integration capabilities',
        'Custom workflows'
      ],
      benefits: [
        'Process documents 10x faster',
        'Better accuracy',
        'Automated workflows',
        'Cost reduction',
        'Improved efficiency'
      ],
      category: 'Document Processing',
      popular: false,
      icon: FileText,
      users: 'Unlimited',
      setupTime: '5 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-voice-assistant',
      name: 'Zion AI Voice Assistant',
      description: 'Enterprise-grade voice assistant with natural language processing, task automation, and integration capabilities.',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'Natural language processing',
        'Task automation',
        'Voice commands',
        'Integration capabilities',
        'Custom skills',
        'Multi-language support',
        'Analytics dashboard',
        'Team collaboration'
      ],
      benefits: [
        'Hands-free productivity',
        'Automated tasks',
        'Better accessibility',
        'Time savings',
        'Improved efficiency'
      ],
      category: 'Voice AI',
      popular: false,
      icon: Mic,
      users: 'Up to 50 users',
      setupTime: '15 minutes',
      trialDays: 7
    },
    {
      id: 'zion-ai-blockchain-analytics',
      name: 'Zion AI Blockchain Analytics',
      description: 'Advanced blockchain analytics platform with transaction monitoring, risk assessment, and compliance reporting.',
      price: '$249/month',
      marketPrice: '$500-1500/month',
      features: [
        'Transaction monitoring',
        'Risk assessment',
        'Compliance reporting',
        'Pattern analysis',
        'Alert system',
        'API integration',
        'Custom dashboards',
        'Team collaboration'
      ],
      benefits: [
        'Better risk management',
        'Compliance assurance',
        'Real-time monitoring',
        'Data insights',
        'Cost savings'
      ],
      category: 'Blockchain',
      popular: false,
      icon: LinkIcon,
      users: 'Up to 30 users',
      setupTime: '20 minutes',
      trialDays: 7
    },
    {
      id: 'zion-ai-healthcare-assistant',
      name: 'Zion AI Healthcare Assistant',
      description: 'AI-powered healthcare platform with patient monitoring, diagnosis assistance, and treatment recommendations.',
      price: '$299/month',
      marketPrice: '$600-2000/month',
      features: [
        'Patient monitoring',
        'Diagnosis assistance',
        'Treatment recommendations',
        'Medical records analysis',
        'Compliance tracking',
        'Integration capabilities',
        'Custom workflows',
        'Analytics dashboard'
      ],
      benefits: [
        'Improve patient outcomes',
        'Reduce diagnostic errors',
        'Better treatment plans',
        'Cost savings',
        'Enhanced care'
      ],
      category: 'Healthcare',
      popular: false,
      icon: Heart,
      users: 'Up to 100 users',
      setupTime: '30 minutes',
      trialDays: 7
    },
    {
      id: 'zion-ai-education-platform',
      name: 'Zion AI Education Platform',
      description: 'Intelligent education platform with personalized learning, automated assessment, and progress tracking.',
      price: '$139/month',
      marketPrice: '$300-800/month',
      features: [
        'Personalized learning',
        'Automated assessment',
        'Progress tracking',
        'Content generation',
        'Student analytics',
        'Integration capabilities',
        'Custom curricula',
        'Team collaboration'
      ],
      benefits: [
        'Improve learning outcomes',
        'Personalized education',
        'Automated assessment',
        'Better engagement',
        'Cost effective'
      ],
      category: 'Education',
      popular: false,
      icon: Users,
      users: 'Up to 200 users',
      setupTime: '15 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-real-estate-pro',
      name: 'Zion AI Real Estate Pro',
      description: 'AI-powered real estate platform with property valuation, market analysis, and investment recommendations.',
      price: '$179/month',
      marketPrice: '$350-1000/month',
      features: [
        'Property valuation',
        'Market analysis',
        'Investment recommendations',
        'Lead generation',
        'CRM integration',
        'Analytics dashboard',
        'Mobile app',
        'Team collaboration'
      ],
      benefits: [
        'Better property insights',
        'Improved valuations',
        'Data-driven decisions',
        'Increased sales',
        'Cost savings'
      ],
      category: 'Real Estate',
      popular: false,
      icon: Home,
      users: 'Up to 25 users',
      setupTime: '10 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-logistics-optimizer',
      name: 'Zion AI Logistics Optimizer',
      description: 'Advanced logistics optimization with route planning, fleet management, and delivery optimization.',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'Route optimization',
        'Fleet management',
        'Delivery tracking',
        'Cost analysis',
        'Performance monitoring',
        'Integration capabilities',
        'Custom dashboards',
        'Alert system'
      ],
      benefits: [
        'Reduce delivery costs by 30%',
        'Better route planning',
        'Improved efficiency',
        'Real-time tracking',
        'Cost savings'
      ],
      category: 'Logistics',
      popular: false,
      icon: Truck,
      users: 'Up to 50 users',
      setupTime: '20 minutes',
      trialDays: 7
    },
    {
      id: 'zion-ai-insurance-analyzer',
      name: 'Zion AI Insurance Analyzer',
      description: 'AI-powered insurance platform with risk assessment, claims processing, and fraud detection.',
      price: '$219/month',
      marketPrice: '$450-1300/month',
      features: [
        'Risk assessment',
        'Claims processing',
        'Fraud detection',
        'Policy analysis',
        'Customer segmentation',
        'Integration capabilities',
        'Analytics dashboard',
        'Custom workflows'
      ],
      benefits: [
        'Reduce claims processing time by 60%',
        'Better risk assessment',
        'Fraud prevention',
        'Cost savings',
        'Improved accuracy'
      ],
      category: 'Insurance',
      popular: false,
      icon: Shield,
      users: 'Up to 40 users',
      setupTime: '25 minutes',
      trialDays: 7
    },
    {
      id: 'zion-ai-manufacturing-optimizer',
      name: 'Zion AI Manufacturing Optimizer',
      description: 'Smart manufacturing platform with production optimization, quality control, and predictive maintenance.',
      price: '$249/month',
      marketPrice: '$500-1500/month',
      features: [
        'Production optimization',
        'Quality control',
        'Predictive maintenance',
        'Supply chain management',
        'Performance analytics',
        'Integration capabilities',
        'Custom dashboards',
        'Alert system'
      ],
      benefits: [
        'Increase production by 25%',
        'Reduce defects by 40%',
        'Better quality control',
        'Cost optimization',
        'Improved efficiency'
      ],
      category: 'Manufacturing',
      popular: false,
      icon: Settings,
      users: 'Up to 60 users',
      setupTime: '30 minutes',
      trialDays: 7
    },
    {
      id: 'zion-ai-retail-optimizer',
      name: 'Zion AI Retail Optimizer',
      description: 'AI-powered retail platform with inventory optimization, demand forecasting, and customer analytics.',
      price: '$159/month',
      marketPrice: '$300-800/month',
      features: [
        'Inventory optimization',
        'Demand forecasting',
        'Customer analytics',
        'Price optimization',
        'Sales forecasting',
        'Integration capabilities',
        'Mobile app',
        'Analytics dashboard'
      ],
      benefits: [
        'Increase sales by 35%',
        'Reduce inventory costs by 20%',
        'Better customer insights',
        'Optimized pricing',
        'Improved profitability'
      ],
      category: 'Retail',
      popular: true,
      icon: ShoppingCart,
      users: 'Up to 30 users',
      setupTime: '15 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-financial-planner',
      name: 'Zion AI Financial Planner',
      description: 'Intelligent financial planning platform with investment analysis, risk assessment, and portfolio optimization.',
      price: '$189/month',
      marketPrice: '$400-1000/month',
      features: [
        'Investment analysis',
        'Risk assessment',
        'Portfolio optimization',
        'Financial planning',
        'Goal tracking',
        'Integration capabilities',
        'Mobile app',
        'Analytics dashboard'
      ],
      benefits: [
        'Improve investment returns by 20%',
        'Better risk management',
        'Automated planning',
        'Data-driven decisions',
        'Cost savings'
      ],
      category: 'Finance',
      popular: false,
      icon: DollarSign,
      users: 'Up to 20 users',
      setupTime: '10 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-hr-analytics',
      name: 'Zion AI HR Analytics',
      description: 'Advanced HR analytics platform with employee insights, performance tracking, and predictive analytics.',
      price: '$139/month',
      marketPrice: '$300-800/month',
      features: [
        'Employee insights',
        'Performance tracking',
        'Predictive analytics',
        'Talent management',
        'Engagement analysis',
        'Integration capabilities',
        'Custom dashboards',
        'Team collaboration'
      ],
      benefits: [
        'Improve employee retention by 30%',
        'Better performance insights',
        'Predictive analytics',
        'Data-driven HR',
        'Cost savings'
      ],
      category: 'HR',
      popular: false,
      icon: Users,
      users: 'Up to 50 users',
      setupTime: '15 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-environmental-monitor',
      name: 'Zion AI Environmental Monitor',
      description: 'Smart environmental monitoring platform with pollution tracking, sustainability analytics, and compliance reporting.',
      price: '$169/month',
      marketPrice: '$350-900/month',
      features: [
        'Pollution tracking',
        'Sustainability analytics',
        'Compliance reporting',
        'Environmental alerts',
        'Data visualization',
        'Integration capabilities',
        'Custom dashboards',
        'Team collaboration'
      ],
      benefits: [
        'Improve environmental compliance',
        'Better sustainability tracking',
        'Automated reporting',
        'Cost savings',
        'Environmental impact'
      ],
      category: 'Environmental',
      popular: false,
      icon: Globe,
      users: 'Up to 35 users',
      setupTime: '20 minutes',
      trialDays: 14
    },
    {
      id: 'zion-ai-cybersecurity-suite',
      name: 'Zion AI Cybersecurity Suite',
      description: 'Comprehensive cybersecurity platform with threat detection, incident response, and security analytics.',
      price: '$299/month',
      marketPrice: '$600-2000/month',
      features: [
        'Threat detection',
        'Incident response',
        'Security analytics',
        'Vulnerability scanning',
        'Compliance monitoring',
        'Integration capabilities',
        'Custom dashboards',
        'Team collaboration'
      ],
      benefits: [
        'Reduce security incidents by 80%',
        'Faster incident response',
        'Better threat detection',
        'Compliance assurance',
        'Cost savings'
      ],
      category: 'Security',
      popular: true,
      icon: Shield,
      users: 'Up to 100 users',
      setupTime: '25 minutes',
      trialDays: 7
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: microSaasProducts.length },
    { id: 'Analytics', name: 'Analytics', count: microSaasProducts.filter(p => p.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: microSaasProducts.filter(p => p.category === 'Customer Service').length },
    { id: 'Security', name: 'Security', count: microSaasProducts.filter(p => p.category === 'Security').length },
    { id: 'Infrastructure', name: 'Infrastructure', count: microSaasProducts.filter(p => p.category === 'Infrastructure').length },
    { id: 'Content', name: 'Content', count: microSaasProducts.filter(p => p.category === 'Content').length },
    { id: 'CRM', name: 'CRM', count: microSaasProducts.filter(p => p.category === 'CRM').length },
    { id: 'Data', name: 'Data', count: microSaasProducts.filter(p => p.category === 'Data').length },
    { id: 'Marketing', name: 'Marketing', count: microSaasProducts.filter(p => p.category === 'Marketing').length },
    { id: 'Productivity', name: 'Productivity', count: microSaasProducts.filter(p => p.category === 'Productivity').length },
    { id: 'Operations', name: 'Operations', count: microSaasProducts.filter(p => p.category === 'Operations').length },
    { id: 'Finance', name: 'Finance', count: microSaasProducts.filter(p => p.category === 'Finance').length },
    { id: 'Automation', name: 'Automation', count: microSaasProducts.filter(p => p.category === 'Automation').length },
    { id: 'Monitoring', name: 'Monitoring', count: microSaasProducts.filter(p => p.category === 'Monitoring').length },
    { id: 'Compliance', name: 'Compliance', count: microSaasProducts.filter(p => p.category === 'Compliance').length },
    { id: 'Social Media', name: 'Social Media', count: microSaasProducts.filter(p => p.category === 'Social Media').length },
    { id: 'Video', name: 'Video', count: microSaasProducts.filter(p => p.category === 'Video').length },
    { id: 'Translation', name: 'Translation', count: microSaasProducts.filter(p => p.category === 'Translation').length },
    { id: 'Development', name: 'Development', count: microSaasProducts.filter(p => p.category === 'Development').length },
    { id: 'Research', name: 'Research', count: microSaasProducts.filter(p => p.category === 'Research').length },
    { id: 'Legal', name: 'Legal', count: microSaasProducts.filter(p => p.category === 'Legal').length },
    { id: 'HR', name: 'HR', count: microSaasProducts.filter(p => p.category === 'HR').length },
    { id: 'Moderation', name: 'Moderation', count: microSaasProducts.filter(p => p.category === 'Moderation').length },
    { id: 'IoT', name: 'IoT', count: microSaasProducts.filter(p => p.category === 'IoT').length },
    { id: 'Energy', name: 'Energy', count: microSaasProducts.filter(p => p.category === 'Energy').length },
    { id: 'Supply Chain', name: 'Supply Chain', count: microSaasProducts.filter(p => p.category === 'Supply Chain').length },
    { id: 'Document Processing', name: 'Document Processing', count: microSaasProducts.filter(p => p.category === 'Document Processing').length },
    { id: 'Voice AI', name: 'Voice AI', count: microSaasProducts.filter(p => p.category === 'Voice AI').length },
    { id: 'Blockchain', name: 'Blockchain', count: microSaasProducts.filter(p => p.category === 'Blockchain').length },
    { id: 'Healthcare', name: 'Healthcare', count: microSaasProducts.filter(p => p.category === 'Healthcare').length },
    { id: 'Education', name: 'Education', count: microSaasProducts.filter(p => p.category === 'Education').length },
    { id: 'Real Estate', name: 'Real Estate', count: microSaasProducts.filter(p => p.category === 'Real Estate').length },
    { id: 'Logistics', name: 'Logistics', count: microSaasProducts.filter(p => p.category === 'Logistics').length },
    { id: 'Insurance', name: 'Insurance', count: microSaasProducts.filter(p => p.category === 'Insurance').length },
    { id: 'Manufacturing', name: 'Manufacturing', count: microSaasProducts.filter(p => p.category === 'Manufacturing').length },
    { id: 'Retail', name: 'Retail', count: microSaasProducts.filter(p => p.category === 'Retail').length },
    { id: 'Environmental', name: 'Environmental', count: microSaasProducts.filter(p => p.category === 'Environmental').length }
  ];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularProducts = microSaasProducts.filter(product => product.popular);

  const stats = [
    { icon: Users, value: '10K+', label: 'Active Users' },
    { icon: TrendingUp, value: '99.9%', label: 'Uptime' },
    { icon: Shield, value: '100%', label: 'Secure' },
    { icon: Zap, value: '5min', label: 'Setup Time' }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | 50+ AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs. Starting from $49/month." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring, customer service, automation, productivity" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive suite of 50+ AI-powered micro SaaS tools designed to solve specific business challenges. 
              Quick setup, affordable pricing, and powerful features that deliver immediate value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Pricing
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SaaS tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
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
                {popularProducts.slice(0, 6).map((product) => (
                  <div key={product.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <product.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                      <p className="text-gray-300 mb-4">{product.description}</p>
                      <div className="flex items-center justify-center space-x-2 mb-4">
                        <span className="text-3xl font-bold text-cyan-400">{product.price}</span>
                        <span className="text-gray-400 text-sm line-through">{product.marketPrice}</span>
                      </div>
                      <div className="text-sm text-gray-400 mb-4">
                        <Users className="w-4 h-4 inline mr-1" />
                        {product.users} • {product.setupTime} setup
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {product.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-3">
                      <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105">
                        Start Free Trial
                      </button>
                      <button className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Products */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">All Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of specialized business tools designed to solve specific challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    {product.popular && (
                      <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{product.category}</p>
                  <p className="text-gray-300 mb-4 text-sm">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                    <span className="text-gray-400 text-sm line-through">{product.marketPrice}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors flex items-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
                      Start Trial
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Micro SaaS Tools?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Each tool is designed to solve a specific problem with maximum efficiency and immediate value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Quick Setup</h3>
                <p className="text-gray-300">
                  Get up and running in minutes with our intuitive setup process and comprehensive documentation.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Immediate ROI</h3>
                <p className="text-gray-300">
                  See results from day one with tools designed to deliver immediate business value and efficiency gains.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scalable Solutions</h3>
                <p className="text-gray-300">
                  Start small and scale up as your business grows with flexible pricing and feature options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start with any of our micro SaaS tools and see immediate improvements in your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">+1 302 464 0950</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
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