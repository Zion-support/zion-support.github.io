'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
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
  FileText, 
  Mail, 
  Calendar, 
  Package, 
  Monitor, 
  Eye, 
  Mic, 
  Code, 
  Heart, 
  DollarSign, 
  Box, 
  Cpu, 
  Search, 
  Filter, 
  Phone, 
  MapPin,
  Play,
  ExternalLink
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasServices = [
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling.',
      category: 'analytics',
      icon: BarChart,
      price: 89,
      marketPrice: 150,
      features: [
        'Real-time Data Visualization',
        'AI-powered Predictive Analytics',
        'Custom Dashboard Builder',
        'Advanced Data Connectors',
        'Automated Report Generation',
        'Multi-tenant Architecture',
        'API Integration',
        'Mobile App Support'
      ],
      benefits: [
        'Data-driven decision making',
        'Real-time insights',
        'Custom dashboards',
        'Automated reporting',
        'ROI tracking',
        'Competitive advantage'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/analytics',
      documentation: 'https://docs.ziontechgroup.com/analytics',
      status: 'live',
      rating: 4.9,
      users: 1250
    },
    {
      id: 'zion-ai-accounting',
      name: 'Zion AI Accounting Assistant',
      description: 'Intelligent accounting platform with automated bookkeeping, expense categorization, and financial analysis.',
      category: 'finance',
      icon: DollarSign,
      price: 149,
      marketPrice: 250,
      features: [
        'Automated Bookkeeping',
        'Expense Categorization',
        'Financial Analysis',
        'Tax Preparation',
        'Invoice Processing',
        'Compliance Reporting',
        'Multi-currency Support',
        'Bank Integration'
      ],
      benefits: [
        'Save 80% accounting time',
        'Reduce errors by 95%',
        'Automated tax compliance',
        'Real-time financial insights',
        'Cost-effective solution',
        'Professional reports'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/ai-accounting',
      documentation: 'https://docs.ziontechgroup.com/ai-accounting',
      status: 'live',
      rating: 4.8,
      users: 2100
    },
    {
      id: 'zion-ai-recruitment',
      name: 'Zion AI Recruitment Pro',
      description: 'Intelligent recruitment platform with AI-powered candidate screening, matching, and interview scheduling.',
      category: 'hr',
      icon: Users,
      price: 179,
      marketPrice: 300,
      features: [
        'AI Candidate Screening',
        'Resume Analysis',
        'Skill Matching',
        'Interview Scheduling',
        'Background Checks',
        'Analytics Dashboard',
        'ATS Integration',
        'Video Interviews'
      ],
      benefits: [
        'Faster hiring process',
        'Better candidate matches',
        'Reduced bias',
        'Improved efficiency',
        'Cost savings',
        'Better retention'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/ai-recruitment',
      documentation: 'https://docs.ziontechgroup.com/ai-recruitment',
      status: 'live',
      rating: 4.7,
      users: 1800
    },
    {
      id: 'zion-ai-legal',
      name: 'Zion AI Legal Assistant',
      description: 'AI-powered legal document analysis and contract management platform with risk assessment.',
      category: 'legal',
      icon: FileText,
      price: 249,
      marketPrice: 400,
      features: [
        'Contract Analysis',
        'Legal Document Review',
        'Compliance Checking',
        'Risk Assessment',
        'Automated Summaries',
        'Version Comparison',
        'Legal Research',
        'Case Law Analysis'
      ],
      benefits: [
        'Faster legal reviews',
        'Reduced legal costs',
        'Better compliance',
        'Risk mitigation',
        'Time savings',
        'Professional accuracy'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/ai-legal',
      documentation: 'https://docs.ziontechgroup.com/ai-legal',
      status: 'live',
      rating: 4.9,
      users: 950
    },
    {
      id: 'zion-ai-health',
      name: 'Zion AI Health Monitor',
      description: 'AI-powered health monitoring and wellness platform with predictive health analytics.',
      category: 'healthcare',
      icon: Heart,
      price: 159,
      marketPrice: 250,
      features: [
        'Health Monitoring',
        'Predictive Analytics',
        'Wellness Tracking',
        'Risk Assessment',
        'Personalized Recommendations',
        'Doctor Integration',
        'Medication Reminders',
        'Emergency Alerts'
      ],
      benefits: [
        'Better health outcomes',
        'Preventive care',
        'Personalized insights',
        'Cost savings',
        'Early detection',
        'Improved quality of life'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/ai-health',
      documentation: 'https://docs.ziontechgroup.com/ai-health',
      status: 'live',
      rating: 4.8,
      users: 3200
    },
    {
      id: 'zion-ai-supply-chain',
      name: 'Zion AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management platform with AI-powered optimization and forecasting.',
      category: 'logistics',
      icon: Package,
      price: 219,
      marketPrice: 400,
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Supplier Management',
        'Risk Assessment',
        'Cost Analysis',
        'Performance Tracking',
        'Route Optimization',
        'Quality Control'
      ],
      benefits: [
        'Reduced costs',
        'Better inventory management',
        'Improved efficiency',
        'Risk mitigation',
        'Better supplier relationships',
        'Real-time visibility'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/ai-supply-chain',
      documentation: 'https://docs.ziontechgroup.com/ai-supply-chain',
      status: 'live',
      rating: 4.7,
      users: 1400
    },
    {
      id: 'zion-ai-energy',
      name: 'Zion AI Energy Manager',
      description: 'AI-powered energy management platform for optimizing consumption and reducing costs.',
      category: 'energy',
      icon: Zap,
      price: 129,
      marketPrice: 250,
      features: [
        'Energy Monitoring',
        'Consumption Analysis',
        'Cost Optimization',
        'Predictive Analytics',
        'Automated Controls',
        'Sustainability Reporting',
        'Smart Grid Integration',
        'Carbon Footprint Tracking'
      ],
      benefits: [
        'Reduced energy costs',
        'Better sustainability',
        'Automated optimization',
        'Environmental impact',
        'Real-time monitoring',
        'Compliance reporting'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/ai-energy',
      documentation: 'https://docs.ziontechgroup.com/ai-energy',
      status: 'live',
      rating: 4.6,
      users: 1900
    },
    {
      id: 'zion-ai-fraud',
      name: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection platform with real-time monitoring and prevention capabilities.',
      category: 'security',
      icon: Shield,
      price: 249,
      marketPrice: 500,
      features: [
        'Real-time Monitoring',
        'Behavioral Analysis',
        'Risk Scoring',
        'Automated Alerts',
        'Machine Learning',
        'Compliance Support',
        'Transaction Analysis',
        'Pattern Recognition'
      ],
      benefits: [
        'Reduced fraud losses',
        'Real-time protection',
        'Better accuracy',
        'Compliance ready',
        'Automated response',
        'Cost savings'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/ai-fraud',
      documentation: 'https://docs.ziontechgroup.com/ai-fraud',
      status: 'live',
      rating: 4.9,
      users: 1100
    },
    {
      id: 'zion-ai-translation',
      name: 'Zion AI Global Translator',
      description: 'Advanced translation platform with AI-powered context understanding and cultural adaptation.',
      category: 'communication',
      icon: Globe,
      price: 79,
      marketPrice: 120,
      features: [
        'Context-Aware Translation',
        'Cultural Adaptation',
        'Real-time Translation',
        'Voice Translation',
        'Document Processing',
        'Multi-language Support',
        'Quality Scoring',
        'API Integration'
      ],
      benefits: [
        'Accurate translations',
        'Cultural sensitivity',
        'Real-time processing',
        'Global communication',
        'Cost-effective solution',
        'Professional quality'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/ai-translation',
      documentation: 'https://docs.ziontechgroup.com/ai-translation',
      status: 'live',
      rating: 4.8,
      users: 4500
    },
    {
      id: 'zion-ai-video',
      name: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing, transcription, and optimization.',
      category: 'media',
      icon: Eye,
      price: 99,
      marketPrice: 200,
      features: [
        'AI Auto-editing',
        'Voice Transcription',
        'Subtitle Generation',
        'Thumbnail Creation',
        'Multi-format Export',
        'Cloud Storage',
        'Collaboration Tools',
        'Analytics Dashboard'
      ],
      benefits: [
        'Faster video production',
        'Professional quality',
        'Automated processes',
        'Cost-effective editing',
        'Time savings',
        'Better engagement'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/ai-video',
      documentation: 'https://docs.ziontechgroup.com/ai-video',
      status: 'live',
      rating: 4.7,
      users: 2800
    },
    {
      id: 'zion-ai-code',
      name: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated analysis, suggestions, and security scanning.',
      category: 'development',
      icon: Code,
      price: 149,
      marketPrice: 250,
      features: [
        'Automated Code Review',
        'Security Scanning',
        'Performance Analysis',
        'Best Practice Suggestions',
        'Team Collaboration',
        'Integration Support',
        'Code Quality Metrics',
        'Automated Testing'
      ],
      benefits: [
        'Improved code quality',
        'Faster reviews',
        'Better security',
        'Team learning',
        'Reduced bugs',
        'Best practices'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/ai-code',
      documentation: 'https://docs.ziontechgroup.com/ai-code',
      status: 'live',
      rating: 4.8,
      users: 2200
    },
    {
      id: 'zion-ai-customer-insights',
      name: 'Zion AI Customer Insights Pro',
      description: 'Advanced customer analytics platform with AI-powered insights and behavioral analysis.',
      category: 'analytics',
      icon: Target,
      price: 189,
      marketPrice: 350,
      features: [
        'Customer Segmentation',
        'Behavioral Analysis',
        'Predictive Analytics',
        'Churn Prediction',
        'Personalization Engine',
        'ROI Tracking',
        'Sentiment Analysis',
        'Lifetime Value Prediction'
      ],
      benefits: [
        'Better customer understanding',
        'Improved retention',
        'Personalized experiences',
        'Data-driven decisions',
        'Higher conversion rates',
        'Better customer satisfaction'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/ai-customer-insights',
      documentation: 'https://docs.ziontechgroup.com/ai-customer-insights',
      status: 'live',
      rating: 4.9,
      users: 1600
    },
    {
      id: 'zion-ai-email-assistant',
      name: 'Zion AI Email Assistant',
      description: 'Intelligent email management platform with AI-powered sorting, responses, and scheduling.',
      category: 'productivity',
      icon: Mail,
      price: 59,
      marketPrice: 100,
      features: [
        'Smart Email Sorting',
        'AI Response Suggestions',
        'Email Scheduling',
        'Priority Detection',
        'Spam Filtering',
        'Analytics Dashboard',
        'Calendar Integration',
        'Follow-up Automation'
      ],
      benefits: [
        'Improved productivity',
        'Better email management',
        'Time savings',
        'Reduced email stress',
        'Automated responses',
        'Better organization'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/ai-email',
      documentation: 'https://docs.ziontechgroup.com/ai-email',
      status: 'live',
      rating: 4.6,
      users: 3800
    },
    {
      id: 'zion-ai-meeting-assistant',
      name: 'Zion AI Meeting Assistant',
      description: 'AI-powered meeting management with transcription, action items, and follow-up automation.',
      category: 'productivity',
      icon: Calendar,
      price: 89,
      marketPrice: 150,
      features: [
        'Meeting Transcription',
        'Action Item Extraction',
        'Follow-up Automation',
        'Meeting Analytics',
        'Integration Support',
        'Voice Recognition',
        'Note Taking',
        'Summary Generation'
      ],
      benefits: [
        'Better meeting outcomes',
        'Automated follow-ups',
        'Improved productivity',
        'Better documentation',
        'Time savings',
        'Actionable insights'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/ai-meeting',
      documentation: 'https://docs.ziontechgroup.com/ai-meeting',
      status: 'live',
      rating: 4.7,
      users: 2500
    },
    {
      id: 'zion-ai-seo',
      name: 'Zion AI SEO Optimizer',
      description: 'Comprehensive SEO optimization platform with AI-powered content analysis and ranking improvements.',
      category: 'marketing',
      icon: Target,
      price: 129,
      marketPrice: 250,
      features: [
        'Content Analysis',
        'Keyword Optimization',
        'Ranking Tracking',
        'Competitor Analysis',
        'Technical SEO',
        'Performance Monitoring',
        'Link Building',
        'Content Suggestions'
      ],
      benefits: [
        'Improved search rankings',
        'Better organic traffic',
        'Content optimization',
        'Competitive advantage',
        'Higher visibility',
        'Better ROI'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/ai-seo',
      documentation: 'https://docs.ziontechgroup.com/ai-seo',
      status: 'live',
      rating: 4.8,
      users: 2900
    },
    {
      id: 'zion-ai-data-cleaner',
      name: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with automated quality assurance.',
      category: 'data',
      icon: Database,
      price: 79,
      marketPrice: 150,
      features: [
        'Automated Data Cleaning',
        'Duplicate Detection',
        'Data Validation',
        'Quality Scoring',
        'Error Correction',
        'Data Enrichment',
        'Format Standardization',
        'API Integration'
      ],
      benefits: [
        'Improved data quality',
        'Reduced manual work',
        'Better insights',
        'Cost savings',
        'Automated processes',
        'Reliable data'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/ai-data-cleaner',
      documentation: 'https://docs.ziontechgroup.com/ai-data-cleaner',
      status: 'live',
      rating: 4.7,
      users: 2100
    },
    {
      id: 'zion-ai-survey',
      name: 'Zion AI Survey Builder',
      description: 'Intelligent survey creation platform with AI-powered question suggestions and analytics.',
      category: 'research',
      icon: CheckCircle,
      price: 69,
      marketPrice: 120,
      features: [
        'AI Question Suggestions',
        'Multi-format Surveys',
        'Real-time Analytics',
        'Response Analysis',
        'Automated Reports',
        'Integration Support',
        'A/B Testing',
        'Custom Branding'
      ],
      benefits: [
        'Better survey design',
        'Improved response rates',
        'Automated analysis',
        'Actionable insights',
        'Time savings',
        'Professional surveys'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/ai-survey',
      documentation: 'https://docs.ziontechgroup.com/ai-survey',
      status: 'live',
      rating: 4.6,
      users: 3200
    },
    {
      id: 'zion-ai-content-moderation',
      name: 'Zion AI Content Moderation',
      description: 'AI-powered content moderation platform with automated filtering and compliance management.',
      category: 'moderation',
      icon: Shield,
      price: 159,
      marketPrice: 300,
      features: [
        'Automated Content Filtering',
        'Sentiment Analysis',
        'Compliance Checking',
        'Real-time Monitoring',
        'Custom Rules',
        'Analytics Dashboard',
        'Multi-language Support',
        'API Integration'
      ],
      benefits: [
        'Reduced moderation costs',
        'Consistent enforcement',
        'Better user experience',
        'Compliance assurance',
        'Real-time protection',
        'Scalable solution'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/ai-content-moderation',
      documentation: 'https://docs.ziontechgroup.com/ai-content-moderation',
      status: 'live',
      rating: 4.8,
      users: 1800
    },
    {
      id: 'zion-ai-predictive-maintenance',
      name: 'Zion AI Predictive Maintenance',
      description: 'Intelligent maintenance platform with AI-powered equipment monitoring and failure prediction.',
      category: 'maintenance',
      icon: Settings,
      price: 199,
      marketPrice: 400,
      features: [
        'Equipment Monitoring',
        'Failure Prediction',
        'Maintenance Scheduling',
        'Cost Optimization',
        'Performance Analytics',
        'Alert System',
        'IoT Integration',
        'Predictive Models'
      ],
      benefits: [
        'Reduced downtime',
        'Lower maintenance costs',
        'Extended equipment life',
        'Better planning',
        'Preventive maintenance',
        'Cost savings'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/ai-predictive-maintenance',
      documentation: 'https://docs.ziontechgroup.com/ai-predictive-maintenance',
      status: 'live',
      rating: 4.7,
      users: 1300
    },
    {
      id: 'zion-ai-social-scheduler',
      name: 'Zion AI Social Scheduler',
      description: 'AI-powered social media management platform with content scheduling and performance analytics.',
      category: 'social',
      icon: Globe,
      price: 79,
      marketPrice: 150,
      features: [
        'AI Content Suggestions',
        'Multi-platform Scheduling',
        'Performance Analytics',
        'Engagement Tracking',
        'Hashtag Optimization',
        'Competitor Analysis',
        'Content Calendar',
        'Team Collaboration'
      ],
      benefits: [
        'Increased engagement',
        'Time savings',
        'Better content strategy',
        'Improved reach',
        'Automated posting',
        'Better ROI'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/ai-social-scheduler',
      documentation: 'https://docs.ziontechgroup.com/ai-social-scheduler',
      status: 'live',
      rating: 4.6,
      users: 4100
    },
    {
      id: 'zion-ai-infrastructure-monitor',
      name: 'Zion AI Infrastructure Monitor',
      description: 'Advanced infrastructure monitoring platform with AI-powered anomaly detection and optimization.',
      category: 'monitoring',
      icon: Monitor,
      price: 119,
      marketPrice: 200,
      features: [
        'Real-time Monitoring',
        'Anomaly Detection',
        'Predictive Maintenance',
        'Performance Optimization',
        'Automated Alerts',
        'Capacity Planning',
        'Cost Analysis',
        'Multi-cloud Support'
      ],
      benefits: [
        'Improved uptime',
        'Faster issue resolution',
        'Proactive maintenance',
        'Cost optimization',
        'Better performance',
        'Reduced downtime'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/ai-infrastructure-monitor',
      documentation: 'https://docs.ziontechgroup.com/ai-infrastructure-monitor',
      status: 'live',
      rating: 4.8,
      users: 1700
    },
    {
      id: 'zion-chat-ai',
      name: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support.',
      category: 'ai',
      icon: Brain,
      price: 149,
      marketPrice: 300,
      features: [
        'GPT-4 Powered AI',
        'Multi-channel Support',
        'Advanced Sentiment Analysis',
        'Automated Ticket Routing',
        'Live Agent Handoff',
        'Multi-language Support',
        'Custom Training',
        'Analytics Dashboard'
      ],
      benefits: [
        '24/7 customer support',
        'Reduced response time',
        'Improved customer satisfaction',
        'Lead generation',
        'Cost reduction',
        'Scalable support'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/chat-ai',
      documentation: 'https://docs.ziontechgroup.com/chat-ai',
      status: 'live',
      rating: 4.8,
      users: 2100
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses.',
      category: 'security',
      icon: Shield,
      price: 199,
      marketPrice: 400,
      features: [
        'Real-time Threat Monitoring',
        'Vulnerability Scanning',
        'Incident Response',
        'Security Analytics',
        'Compliance Reporting',
        'Employee Training',
        'Firewall Management',
        'Endpoint Protection'
      ],
      benefits: [
        'Enhanced security posture',
        'Reduced risk exposure',
        'Compliance assurance',
        'Peace of mind',
        'Cost-effective protection',
        'Expert support'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/security',
      documentation: 'https://docs.ziontechgroup.com/security',
      status: 'live',
      rating: 4.7,
      users: 890
    },
    {
      id: 'zion-cloud-vault',
      name: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection and compliance support.',
      category: 'storage',
      icon: Database,
      price: 79,
      marketPrice: 150,
      features: [
        'Automated Backups',
        'Cross-platform Sync',
        'Version Control',
        'Disaster Recovery',
        'Data Encryption',
        'Compliance Support',
        'File Sharing',
        'Mobile Access'
      ],
      benefits: [
        'Data protection',
        'Business continuity',
        'Cost-effective storage',
        'Easy recovery',
        'Secure sharing',
        'Compliance ready'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/cloud-vault',
      documentation: 'https://docs.ziontechgroup.com/cloud-vault',
      status: 'live',
      rating: 4.6,
      users: 3200
    },
    {
      id: 'zion-content-studio',
      name: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for blogs, social media, and marketing materials.',
      category: 'content',
      icon: FileText,
      price: 129,
      marketPrice: 250,
      features: [
        'AI Content Generation',
        'SEO Optimization',
        'Multi-platform Publishing',
        'Content Calendar',
        'Brand Voice Customization',
        'Performance Analytics',
        'Template Library',
        'Collaboration Tools'
      ],
      benefits: [
        'Save 80% content creation time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform publishing',
        'Better engagement',
        'Content strategy insights'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/content-studio',
      documentation: 'https://docs.ziontechgroup.com/content-studio',
      status: 'live',
      rating: 4.8,
      users: 1800
    },
    {
      id: 'zion-crm-intelligence',
      name: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics, automation, and sales forecasting.',
      category: 'crm',
      icon: Users,
      price: 179,
      marketPrice: 300,
      features: [
        'AI-powered Lead Scoring',
        'Automated Follow-ups',
        'Predictive Analytics',
        'Sales Forecasting',
        'Customer Segmentation',
        'Integration Hub',
        'Pipeline Management',
        'Performance Tracking'
      ],
      benefits: [
        'Improved sales performance',
        'Better customer relationships',
        'Automated processes',
        'Data-driven insights',
        'Higher conversion rates',
        'Reduced manual work'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/crm',
      documentation: 'https://docs.ziontechgroup.com/crm',
      status: 'live',
      rating: 4.9,
      users: 1500
    },
    {
      id: 'zion-data-sync',
      name: 'Zion Data Sync',
      description: 'Intelligent data integration and synchronization platform for seamless data flow across systems.',
      category: 'integration',
      icon: Database,
      price: 149,
      marketPrice: 250,
      features: [
        'Real-time Data Sync',
        'Multi-source Integration',
        'Data Transformation',
        'Error Handling',
        'Monitoring Dashboard',
        'API Management',
        'Custom Connectors',
        'Data Validation'
      ],
      benefits: [
        'Unified data view',
        'Reduced manual work',
        'Improved accuracy',
        'Real-time updates',
        'Better decision making',
        'Cost savings'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/data-sync',
      documentation: 'https://docs.ziontechgroup.com/data-sync',
      status: 'live',
      rating: 4.7,
      users: 950
    },
    {
      id: 'zion-project-master',
      name: 'Zion Project Master',
      description: 'AI-powered project management and team collaboration platform with intelligent task allocation and resource planning.',
      category: 'productivity',
      icon: Calendar,
      price: 99,
      marketPrice: 200,
      features: [
        'AI Task Allocation',
        'Resource Planning',
        'Progress Tracking',
        'Team Collaboration',
        'Time Tracking',
        'Performance Analytics',
        'Gantt Charts',
        'Risk Management'
      ],
      benefits: [
        'Improved project success',
        'Better resource utilization',
        'Enhanced collaboration',
        'Automated workflows',
        'Better planning',
        'Reduced delays'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/project-master',
      documentation: 'https://docs.ziontechgroup.com/project-master',
      status: 'live',
      rating: 4.8,
      users: 2200
    },
    {
      id: 'zion-email-automation',
      name: 'Zion Email Automation',
      description: 'Advanced email marketing automation platform with AI-powered personalization, A/B testing, and behavioral triggers.',
      category: 'marketing',
      icon: Mail,
      price: 89,
      marketPrice: 150,
      features: [
        'AI Personalization',
        'Automated Campaigns',
        'A/B Testing',
        'Behavioral Triggers',
        'Analytics Dashboard',
        'Template Library',
        'List Management',
        'Deliverability Optimization'
      ],
      benefits: [
        'Higher open rates',
        'Better engagement',
        'Automated campaigns',
        'Improved ROI',
        'Personalized experiences',
        'Time savings'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/email-automation',
      documentation: 'https://docs.ziontechgroup.com/email-automation',
      status: 'live',
      rating: 4.6,
      users: 1600
    },
    {
      id: 'zion-inventory-smart',
      name: 'Zion Inventory Smart',
      description: 'Intelligent inventory management system with demand forecasting, automated reordering, and supplier integration.',
      category: 'inventory',
      icon: Package,
      price: 159,
      marketPrice: 300,
      features: [
        'Demand Forecasting',
        'Automated Reordering',
        'Multi-location Management',
        'Supplier Integration',
        'Cost Optimization',
        'Analytics Dashboard',
        'Barcode Scanning',
        'Mobile App'
      ],
      benefits: [
        'Reduced stockouts',
        'Lower inventory costs',
        'Improved cash flow',
        'Better supplier relationships',
        'Automated processes',
        'Real-time visibility'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/inventory',
      documentation: 'https://docs.ziontechgroup.com/inventory',
      status: 'live',
      rating: 4.7,
      users: 1200
    },
    {
      id: 'zion-workflow-automation',
      name: 'Zion Workflow Automation',
      description: 'No-code workflow automation platform for streamlining business processes and increasing efficiency.',
      category: 'automation',
      icon: Settings,
      price: 119,
      marketPrice: 200,
      features: [
        'Visual Workflow Builder',
        'API Integrations',
        'Conditional Logic',
        'Task Automation',
        'Approval Workflows',
        'Performance Monitoring',
        'Custom Triggers',
        'Team Collaboration'
      ],
      benefits: [
        'Process efficiency',
        'Reduced errors',
        'Cost savings',
        'Scalable automation',
        'Better compliance',
        'Time optimization'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/workflow',
      documentation: 'https://docs.ziontechgroup.com/workflow',
      status: 'live',
      rating: 4.8,
      users: 1900
    },
    {
      id: 'zion-performance-monitor',
      name: 'Zion Performance Monitor',
      description: 'Comprehensive application and infrastructure monitoring with AI-powered alerting and optimization recommendations.',
      category: 'monitoring',
      icon: Monitor,
      price: 139,
      marketPrice: 250,
      features: [
        'Real-time Monitoring',
        'AI-powered Alerts',
        'Performance Analytics',
        'Uptime Tracking',
        'Error Tracking',
        'Capacity Planning',
        'Custom Dashboards',
        'Mobile Notifications'
      ],
      benefits: [
        'Improved uptime',
        'Faster issue resolution',
        'Better performance',
        'Proactive monitoring',
        'Cost optimization',
        'Better user experience'
      ],
      demoUrl: 'https://demo.ziontechgroup.com/performance',
      documentation: 'https://docs.ziontechgroup.com/performance',
      status: 'live',
      rating: 4.9,
      users: 1100
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: microSaasServices.length },
    { id: 'analytics', name: 'Analytics', count: microSaasServices.filter(s => s.category === 'analytics').length },
    { id: 'ai', name: 'AI Services', count: microSaasServices.filter(s => s.category === 'ai').length },
    { id: 'security', name: 'Security', count: microSaasServices.filter(s => s.category === 'security').length },
    { id: 'storage', name: 'Storage', count: microSaasServices.filter(s => s.category === 'storage').length },
    { id: 'content', name: 'Content', count: microSaasServices.filter(s => s.category === 'content').length },
    { id: 'crm', name: 'CRM', count: microSaasServices.filter(s => s.category === 'crm').length },
    { id: 'integration', name: 'Integration', count: microSaasServices.filter(s => s.category === 'integration').length },
    { id: 'productivity', name: 'Productivity', count: microSaasServices.filter(s => s.category === 'productivity').length },
    { id: 'marketing', name: 'Marketing', count: microSaasServices.filter(s => s.category === 'marketing').length },
    { id: 'inventory', name: 'Inventory', count: microSaasServices.filter(s => s.category === 'inventory').length },
    { id: 'automation', name: 'Automation', count: microSaasServices.filter(s => s.category === 'automation').length },
    { id: 'monitoring', name: 'Monitoring', count: microSaasServices.filter(s => s.category === 'monitoring').length },
    { id: 'finance', name: 'Finance', count: microSaasServices.filter(s => s.category === 'finance').length },
    { id: 'hr', name: 'HR & Recruitment', count: microSaasServices.filter(s => s.category === 'hr').length },
    { id: 'legal', name: 'Legal', count: microSaasServices.filter(s => s.category === 'legal').length },
    { id: 'healthcare', name: 'Healthcare', count: microSaasServices.filter(s => s.category === 'healthcare').length },
    { id: 'logistics', name: 'Logistics', count: microSaasServices.filter(s => s.category === 'logistics').length },
    { id: 'energy', name: 'Energy', count: microSaasServices.filter(s => s.category === 'energy').length },
    { id: 'communication', name: 'Communication', count: microSaasServices.filter(s => s.category === 'communication').length },
    { id: 'media', name: 'Media', count: microSaasServices.filter(s => s.category === 'media').length },
    { id: 'development', name: 'Development', count: microSaasServices.filter(s => s.category === 'development').length },
    { id: 'data', name: 'Data', count: microSaasServices.filter(s => s.category === 'data').length },
    { id: 'research', name: 'Research', count: microSaasServices.filter(s => s.category === 'research').length },
    { id: 'moderation', name: 'Moderation', count: microSaasServices.filter(s => s.category === 'moderation').length },
    { id: 'maintenance', name: 'Maintenance', count: microSaasServices.filter(s => s.category === 'maintenance').length },
    { id: 'social', name: 'Social Media', count: microSaasServices.filter(s => s.category === 'social').length }
  ];

  const filteredServices = microSaasServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive range of micro SAAS solutions designed to streamline your business operations with AI-powered automation and intelligent tools." />
        <meta name="keywords" content="micro saas, business tools, AI automation, productivity software, business intelligence, CRM, project management" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                Micro SAAS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, ready-to-use business tools with AI automation and intelligent features. 
                Transform your operations with our comprehensive suite of micro SAAS applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Explore Services
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="max-w-md mx-auto mb-12">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search micro SAAS services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-10 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <div key={service.id} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group border border-gray-700 hover:border-cyan-500/50">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-cyan-400 font-semibold">${service.price}/month</span>
                          <span className="text-gray-400 text-sm line-through">${service.marketPrice}/month</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm text-green-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-600'
                              }`}
                              fill={i < Math.floor(service.rating) ? 'currentColor' : 'none'}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">{service.rating}</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {service.users.toLocaleString()} users
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <a
                          href={service.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                        >
                          <Play className="w-4 h-4 mr-1" />
                          Demo
                        </a>
                        <a
                          href={service.documentation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Docs
                        </a>
                      </div>
                      <a
                        href="/contact"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get started with our micro SAAS solutions today and experience the power of AI-driven automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
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
