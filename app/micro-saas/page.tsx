'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  MessageSquare,
  FileText,
  Target,
  Shield,
  Cloud,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
  Settings,
  Heart,
  DollarSign,
  Box,
  Monitor,
  Link as LinkIcon,
  Server,
  Package,
  Mic,
  Workflow,
  Eye,
  Wifi,
  ShoppingCart,
  Brain,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Lock,
  Calendar,
  Headphones,
  Code,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 'zion-analytics-pro',
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling.',
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      icon: BarChart,
      category: 'Analytics',
      popular: true
    },
    {
      id: 'zion-chat-ai',
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support.',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing', 'Live Agent Handoff', 'Multi-language Support'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation'],
      icon: MessageCircle,
      category: 'Customer Service',
      popular: true
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses.',
      features: ['Real-time Threat Monitoring', 'Vulnerability Scanning', 'Incident Response', 'Security Analytics', 'Compliance Reporting', 'Employee Training'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Enhanced security posture', 'Reduced risk exposure', 'Compliance assurance', 'Peace of mind'],
      icon: Shield,
      category: 'Security',
      popular: true
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection and cross-platform sync.',
      features: ['Automated Backups', 'Cross-platform Sync', 'Version Control', 'Disaster Recovery', 'Data Encryption', 'Compliance Support'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Data protection', 'Business continuity', 'Cost-effective storage', 'Easy recovery'],
      icon: Database,
      category: 'Storage',
      popular: false
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for blogs, social media, and marketing materials.',
      features: ['AI Content Generation', 'SEO Optimization', 'Multi-platform Publishing', 'Content Calendar', 'Brand Voice Customization', 'Performance Analytics'],
      price: '$129/month',
      marketPrice: '$250-600/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      icon: FileText,
      category: 'Content',
      popular: true
    },
    {
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation capabilities.',
      features: ['AI-powered Lead Scoring', 'Automated Follow-ups', 'Predictive Analytics', 'Sales Forecasting', 'Customer Segmentation', 'Integration Hub'],
      price: '$179/month',
      marketPrice: '$300-800/month',
      benefits: ['Improved sales performance', 'Better customer relationships', 'Automated processes', 'Data-driven insights'],
      icon: Users,
      category: 'CRM',
      popular: true
    },
    {
      title: 'Zion Data Sync',
      description: 'Intelligent data integration and synchronization platform for seamless data flow across systems.',
      features: ['Real-time Data Sync', 'Multi-source Integration', 'Data Transformation', 'Error Handling', 'Monitoring Dashboard', 'API Management'],
      price: '$149/month',
      marketPrice: '$250-700/month',
      benefits: ['Unified data view', 'Reduced manual work', 'Improved accuracy', 'Real-time updates'],
      icon: Database,
      category: 'Data',
      popular: false
    },
    {
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring and nurturing.',
      features: ['AI-powered Lead Scoring', 'Multi-channel Lead Capture', 'Automated Lead Nurturing', 'CRM Integration', 'Advanced Analytics', 'A/B Testing'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase qualified leads by 300%', 'Automated lead nurturing', 'Better conversion rates', 'ROI optimization'],
      icon: Target,
      category: 'Marketing',
      popular: true
    },
    {
      title: 'Zion Project Master',
      description: 'AI-powered project management and team collaboration platform with intelligent task allocation.',
      features: ['AI Task Allocation', 'Resource Planning', 'Progress Tracking', 'Team Collaboration', 'Time Tracking', 'Performance Analytics'],
      price: '$99/month',
      marketPrice: '$200-500/month',
      benefits: ['Improved project success', 'Better resource utilization', 'Enhanced collaboration', 'Automated workflows'],
      icon: Calendar,
      category: 'Project Management',
      popular: false
    },
    {
      title: 'Zion Email Automation',
      description: 'Advanced email marketing automation platform with AI-powered personalization and optimization.',
      features: ['AI Personalization', 'Automated Campaigns', 'A/B Testing', 'Behavioral Triggers', 'Analytics Dashboard', 'Template Library'],
      price: '$89/month',
      marketPrice: '$150-400/month',
      benefits: ['Higher open rates', 'Better engagement', 'Automated campaigns', 'Improved ROI'],
      icon: Mail,
      category: 'Marketing',
      popular: true
    },
    {
      title: 'Zion Inventory Smart',
      description: 'Intelligent inventory management system with demand forecasting and automated reordering.',
      features: ['Demand Forecasting', 'Automated Reordering', 'Multi-location Management', 'Supplier Integration', 'Cost Optimization', 'Analytics Dashboard'],
      price: '$159/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduced stockouts', 'Lower inventory costs', 'Improved cash flow', 'Better supplier relationships'],
      icon: Package,
      category: 'Inventory',
      popular: false
    },
    {
      title: 'Zion Workflow Automation',
      description: 'No-code workflow automation platform for streamlining business processes and increasing efficiency.',
      features: ['Visual Workflow Builder', 'API Integrations', 'Conditional Logic', 'Task Automation', 'Approval Workflows', 'Performance Monitoring'],
      price: '$119/month',
      marketPrice: '$200-600/month',
      benefits: ['Process efficiency', 'Reduced errors', 'Cost savings', 'Scalable automation'],
      icon: Settings,
      category: 'Automation',
      popular: true
    },
    {
      title: 'Zion Performance Monitor',
      description: 'Comprehensive application and infrastructure monitoring with AI-powered alerting and optimization.',
      features: ['Real-time Monitoring', 'AI-powered Alerts', 'Performance Analytics', 'Uptime Tracking', 'Error Tracking', 'Capacity Planning'],
      price: '$139/month',
      marketPrice: '$250-700/month',
      benefits: ['Improved uptime', 'Faster issue resolution', 'Better performance', 'Proactive monitoring'],
      icon: Monitor,
      category: 'Monitoring',
      popular: false
    },
    {
      title: 'Zion Compliance Manager',
      description: 'Automated compliance management platform for various industry standards and regulations.',
      features: ['Compliance Tracking', 'Automated Reporting', 'Document Management', 'Audit Trail', 'Risk Assessment', 'Training Management'],
      price: '$199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Reduced compliance risk', 'Automated reporting', 'Better documentation', 'Cost savings'],
      icon: CheckCircle,
      category: 'Compliance',
      popular: false
    },
    {
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management platform with content scheduling and performance analytics.',
      features: ['AI Content Suggestions', 'Multi-platform Scheduling', 'Performance Analytics', 'Engagement Tracking', 'Hashtag Optimization', 'Competitor Analysis'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Increased engagement', 'Time savings', 'Better content strategy', 'Improved reach'],
      icon: Globe,
      category: 'Social Media',
      popular: true
    },
    {
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing, transcription, and optimization.',
      features: ['AI Auto-editing', 'Voice Transcription', 'Subtitle Generation', 'Thumbnail Creation', 'Multi-format Export', 'Cloud Storage'],
      price: '$99/month',
      marketPrice: '$200-500/month',
      benefits: ['Faster video production', 'Professional quality', 'Automated processes', 'Cost-effective editing'],
      icon: Eye,
      category: 'Video',
      popular: false
    },
    {
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with AI-powered language detection and context-aware translation.',
      features: ['Real-time Translation', 'Document Translation', 'Voice Translation', 'Context Awareness', 'Quality Scoring', 'API Integration'],
      price: '$69/month',
      marketPrice: '$120-300/month',
      benefits: ['Global communication', 'Accurate translations', 'Time savings', 'Cost-effective solution'],
      icon: Globe,
      category: 'Translation',
      popular: false
    },
    {
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated analysis, suggestions, and security scanning.',
      features: ['Automated Code Review', 'Security Scanning', 'Performance Analysis', 'Best Practice Suggestions', 'Team Collaboration', 'Integration Support'],
      price: '$149/month',
      marketPrice: '$250-600/month',
      benefits: ['Improved code quality', 'Faster reviews', 'Better security', 'Team learning'],
      icon: Code,
      category: 'Development',
      popular: true
    },
    {
      title: 'Zion Customer Insights Pro',
      description: 'Advanced customer analytics platform with AI-powered insights and behavioral analysis.',
      features: ['Customer Segmentation', 'Behavioral Analysis', 'Predictive Analytics', 'Churn Prediction', 'Personalization Engine', 'ROI Tracking'],
      price: '$189/month',
      marketPrice: '$350-800/month',
      benefits: ['Better customer understanding', 'Improved retention', 'Personalized experiences', 'Data-driven decisions'],
      icon: Users,
      category: 'Analytics',
      popular: true
    },
    {
      title: 'Zion AI Email Assistant',
      description: 'Intelligent email management platform with AI-powered sorting, responses, and scheduling.',
      features: ['Smart Email Sorting', 'AI Response Suggestions', 'Email Scheduling', 'Priority Detection', 'Spam Filtering', 'Analytics Dashboard'],
      price: '$59/month',
      marketPrice: '$100-250/month',
      benefits: ['Improved productivity', 'Better email management', 'Time savings', 'Reduced email stress'],
      icon: Mail,
      category: 'Productivity',
      popular: false
    },
    {
      title: 'Zion AI Meeting Assistant',
      description: 'AI-powered meeting management with transcription, action items, and follow-up automation.',
      features: ['Meeting Transcription', 'Action Item Extraction', 'Follow-up Automation', 'Meeting Analytics', 'Integration Support', 'Voice Recognition'],
      price: '$89/month',
      marketPrice: '$150-400/month',
      benefits: ['Better meeting outcomes', 'Automated follow-ups', 'Improved productivity', 'Better documentation'],
      icon: Calendar,
      category: 'Productivity',
      popular: true
    },
    {
      title: 'Zion AI SEO Optimizer',
      description: 'Comprehensive SEO optimization platform with AI-powered content analysis and ranking improvements.',
      features: ['Content Analysis', 'Keyword Optimization', 'Ranking Tracking', 'Competitor Analysis', 'Technical SEO', 'Performance Monitoring'],
      price: '$129/month',
      marketPrice: '$250-600/month',
      benefits: ['Improved search rankings', 'Better organic traffic', 'Content optimization', 'Competitive advantage'],
      icon: Target,
      category: 'SEO',
      popular: true
    },
    {
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with automated quality assurance.',
      features: ['Automated Data Cleaning', 'Duplicate Detection', 'Data Validation', 'Quality Scoring', 'Error Correction', 'Data Enrichment'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Improved data quality', 'Reduced manual work', 'Better insights', 'Cost savings'],
      icon: Database,
      category: 'Data',
      popular: false
    },
    {
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis platform with risk assessment and compliance checking.',
      features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Clause Extraction', 'Automated Summaries', 'Version Comparison'],
      price: '$199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Faster contract review', 'Reduced risk', 'Better compliance', 'Time savings'],
      icon: FileText,
      category: 'Legal',
      popular: false
    },
    {
      title: 'Zion AI Survey Builder',
      description: 'Intelligent survey creation platform with AI-powered question suggestions and analytics.',
      features: ['AI Question Suggestions', 'Multi-format Surveys', 'Real-time Analytics', 'Response Analysis', 'Automated Reports', 'Integration Support'],
      price: '$69/month',
      marketPrice: '$120-300/month',
      benefits: ['Better survey design', 'Improved response rates', 'Automated analysis', 'Actionable insights'],
      icon: CheckCircle,
      category: 'Research',
      popular: false
    },
    {
      title: 'Zion AI Accounting Assistant',
      description: 'AI-powered accounting platform with automated bookkeeping and financial analysis.',
      features: ['Automated Bookkeeping', 'Expense Categorization', 'Financial Analysis', 'Tax Preparation', 'Invoice Processing', 'Compliance Reporting'],
      price: '$149/month',
      marketPrice: '$250-600/month',
      benefits: ['Reduced accounting costs', 'Improved accuracy', 'Better financial insights', 'Time savings'],
      icon: DollarSign,
      category: 'Accounting',
      popular: true
    },
    {
      title: 'Zion AI Recruitment Pro',
      description: 'Intelligent recruitment platform with AI-powered candidate screening and matching.',
      features: ['AI Candidate Screening', 'Resume Analysis', 'Skill Matching', 'Interview Scheduling', 'Background Checks', 'Analytics Dashboard'],
      price: '$179/month',
      marketPrice: '$300-800/month',
      benefits: ['Faster hiring process', 'Better candidate matches', 'Reduced bias', 'Improved efficiency'],
      icon: Users,
      category: 'HR',
      popular: true
    },
    {
      title: 'Zion AI Content Moderation',
      description: 'AI-powered content moderation platform with automated filtering and compliance management.',
      features: ['Automated Content Filtering', 'Sentiment Analysis', 'Compliance Checking', 'Real-time Monitoring', 'Custom Rules', 'Analytics Dashboard'],
      price: '$159/month',
      marketPrice: '$300-700/month',
      benefits: ['Reduced moderation costs', 'Consistent enforcement', 'Better user experience', 'Compliance assurance'],
      icon: Shield,
      category: 'Moderation',
      popular: false
    },
    {
      title: 'Zion AI Predictive Maintenance',
      description: 'Intelligent maintenance platform with AI-powered equipment monitoring and failure prediction.',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Performance Analytics', 'Alert System'],
      price: '$199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Reduced downtime', 'Lower maintenance costs', 'Extended equipment life', 'Better planning'],
      icon: Settings,
      category: 'Maintenance',
      popular: false
    },
    {
      title: 'Zion AI Energy Manager',
      description: 'AI-powered energy management platform for optimizing consumption and reducing costs.',
      features: ['Energy Monitoring', 'Consumption Analysis', 'Cost Optimization', 'Predictive Analytics', 'Automated Controls', 'Sustainability Reporting'],
      price: '$129/month',
      marketPrice: '$250-600/month',
      benefits: ['Reduced energy costs', 'Better sustainability', 'Automated optimization', 'Environmental impact'],
      icon: Zap,
      category: 'Energy',
      popular: false
    },
    {
      title: 'Zion AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management platform with AI-powered optimization and forecasting.',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Management', 'Risk Assessment', 'Cost Analysis', 'Performance Tracking'],
      price: '$219/month',
      marketPrice: '$400-1000/month',
      benefits: ['Reduced costs', 'Better inventory management', 'Improved efficiency', 'Risk mitigation'],
      icon: Box,
      category: 'Supply Chain',
      popular: false
    },
    {
      title: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection platform with real-time monitoring and prevention capabilities.',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Automated Alerts', 'Machine Learning', 'Compliance Support'],
      price: '$249/month',
      marketPrice: '$500-1500/month',
      benefits: ['Reduced fraud losses', 'Real-time protection', 'Better accuracy', 'Compliance ready'],
      icon: Shield,
      category: 'Security',
      popular: true
    },
    {
      title: 'Zion AI Customer Service Pro',
      description: 'Advanced customer service platform with AI-powered automation and human handoff.',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Ticket Routing', 'Knowledge Base', 'Live Agent Handoff', 'Performance Analytics'],
      price: '$189/month',
      marketPrice: '$350-800/month',
      benefits: ['Improved customer satisfaction', 'Reduced response times', '24/7 availability', 'Cost savings'],
      icon: MessageCircle,
      category: 'Customer Service',
      popular: true
    },
    {
      title: 'Zion AI Marketing Automation',
      description: 'Comprehensive marketing automation platform with AI-powered personalization and optimization.',
      features: ['Campaign Automation', 'Personalization Engine', 'Lead Scoring', 'A/B Testing', 'Analytics Dashboard', 'Multi-channel Support'],
      price: '$159/month',
      marketPrice: '$300-700/month',
      benefits: ['Higher conversion rates', 'Better personalization', 'Automated optimization', 'Improved ROI'],
      icon: Target,
      category: 'Marketing',
      popular: true
    },
    {
      title: 'Zion AI Document AI',
      description: 'Intelligent document processing platform with AI-powered extraction and analysis.',
      features: ['Document OCR', 'Data Extraction', 'Form Processing', 'Document Classification', 'Search & Retrieval', 'Integration APIs'],
      price: '$139/month',
      marketPrice: '$250-600/month',
      benefits: ['Faster document processing', 'Reduced manual work', 'Better accuracy', 'Cost savings'],
      icon: FileText,
      category: 'Document Processing',
      popular: false
    },
    {
      title: 'Zion AI Quantum Analytics',
      description: 'Revolutionary quantum-powered analytics platform for complex data analysis and optimization.',
      features: ['Quantum Data Processing', 'Complex Optimization', 'Advanced Pattern Recognition', 'Real-time Insights', 'Quantum Machine Learning'],
      price: '$299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Exponential processing speed', 'Complex problem solving', 'Advanced analytics', 'Future-proof technology'],
      icon: Brain,
      category: 'Analytics',
      popular: true
    },
    {
      title: 'Zion AI Holographic Workspace',
      description: 'Immersive 3D workspace platform with AI-powered collaboration and visualization tools.',
      features: ['3D Virtual Workspace', 'AI Collaboration Tools', 'Holographic Presentations', 'Spatial Computing', 'Real-time Rendering'],
      price: '$199/month',
      marketPrice: '$350-1200/month',
      benefits: ['Immersive collaboration', 'Enhanced productivity', 'Cutting-edge interface', 'Remote work revolution'],
      icon: Eye,
      category: 'Productivity',
      popular: true
    },
    {
      title: 'Zion AI Edge Intelligence',
      description: 'Distributed AI platform for edge computing with real-time processing and decision making.',
      features: ['Edge AI Processing', 'Real-time Analytics', 'Offline Intelligence', 'Distributed Learning', 'Low Latency Response'],
      price: '$149/month',
      marketPrice: '$250-800/month',
      benefits: ['Ultra-low latency', 'Reduced bandwidth costs', 'Enhanced privacy', 'Real-time processing'],
      icon: Cpu,
      category: 'Infrastructure',
      popular: false
    },
    {
      title: 'Zion AI Quantum Security',
      description: 'Next-generation quantum-resistant security platform for future-proof protection.',
      features: ['Quantum Encryption', 'Post-Quantum Security', 'Advanced Threat Detection', 'Zero-Trust Architecture', 'Quantum Key Distribution'],
      price: '$179/month',
      marketPrice: '$300-1000/month',
      benefits: ['Quantum-resistant security', 'Future-proof protection', 'Advanced threat detection', 'Military-grade encryption'],
      icon: Shield,
      category: 'Security',
      popular: true
    },
    {
      title: 'Zion AI Neural Database Pro',
      description: 'Self-optimizing database platform with AI-powered performance tuning and predictive analytics.',
      features: ['Self-Optimizing Queries', 'Predictive Indexing', 'Automatic Scaling', 'Neural Optimization', 'Intelligent Caching'],
      price: '$129/month',
      marketPrice: '$200-600/month',
      benefits: ['Self-optimizing performance', 'Reduced maintenance', 'Intelligent scaling', 'Predictive optimization'],
      icon: Database,
      category: 'Data',
      popular: false
    },
    {
      title: 'Zion AI Energy Optimizer',
      description: 'AI-powered energy management platform for reducing costs and improving sustainability.',
      features: ['Energy Monitoring', 'Cost Optimization', 'Predictive Analytics', 'Automated Controls', 'Sustainability Reporting'],
      price: '$99/month',
      marketPrice: '$150-500/month',
      benefits: ['Reduced energy costs', 'Better sustainability', 'Automated optimization', 'Environmental impact'],
      icon: Zap,
      category: 'Energy',
      popular: false
    },
    {
      title: 'Zion AI Supply Chain Intelligence',
      description: 'Advanced supply chain optimization platform with AI-powered forecasting and risk management.',
      features: ['Demand Forecasting', 'Risk Assessment', 'Supplier Optimization', 'Cost Analysis', 'Performance Tracking'],
      price: '$219/month',
      marketPrice: '$400-1200/month',
      benefits: ['Reduced costs', 'Better inventory management', 'Improved efficiency', 'Risk mitigation'],
      icon: Target,
      category: 'Supply Chain',
      popular: false
    },
    {
      title: 'Zion AI Talent Intelligence',
      description: 'AI-powered talent acquisition and management platform with advanced matching algorithms.',
      features: ['AI Candidate Matching', 'Skills Assessment', 'Performance Prediction', 'Retention Analytics', 'Diversity Optimization'],
      price: '$189/month',
      marketPrice: '$300-800/month',
      benefits: ['Better talent matches', 'Reduced hiring time', 'Improved retention', 'Diversity optimization'],
      icon: Users,
      category: 'HR',
      popular: true
    },
    {
      title: 'Zion AI Global Translator',
      description: 'Advanced translation platform with AI-powered context understanding and cultural adaptation.',
      features: ['Context-Aware Translation', 'Cultural Adaptation', 'Real-time Translation', 'Voice Translation', 'Document Processing'],
      price: '$79/month',
      marketPrice: '$120-400/month',
      benefits: ['Accurate translations', 'Cultural sensitivity', 'Real-time processing', 'Global communication'],
      icon: Globe,
      category: 'Translation',
      popular: false
    },
    {
      title: 'Zion AI Legal Assistant',
      description: 'AI-powered legal document analysis and contract management platform.',
      features: ['Contract Analysis', 'Legal Document Review', 'Compliance Checking', 'Risk Assessment', 'Automated Summaries'],
      price: '$249/month',
      marketPrice: '$400-1200/month',
      benefits: ['Faster legal reviews', 'Reduced legal costs', 'Better compliance', 'Risk mitigation'],
      icon: FileText,
      category: 'Legal',
      popular: false
    },
    {
      title: 'Zion AI Health Monitor',
      description: 'AI-powered health monitoring and wellness platform with predictive health analytics.',
      features: ['Health Monitoring', 'Predictive Analytics', 'Wellness Tracking', 'Risk Assessment', 'Personalized Recommendations'],
      price: '$159/month',
      marketPrice: '$250-700/month',
      benefits: ['Better health outcomes', 'Preventive care', 'Personalized insights', 'Cost savings'],
      icon: Heart,
      category: 'Health',
      popular: true
    },
    {
      title: 'Zion AI Market Intelligence',
      description: 'Advanced market analysis platform with AI-powered insights and trend prediction.',
      features: ['Market Analysis', 'Trend Prediction', 'Competitor Intelligence', 'Risk Assessment', 'Investment Insights'],
      price: '$199/month',
      marketPrice: '$350-1000/month',
      benefits: ['Better market insights', 'Improved decision making', 'Risk mitigation', 'Competitive advantage'],
      icon: BarChart,
      category: 'Analytics',
      popular: false
    },
    {
      title: 'Zion AI Process Optimizer',
      description: 'Intelligent process optimization platform with AI-powered workflow analysis and improvement.',
      features: ['Process Mining', 'Workflow Optimization', 'Bottleneck Detection', 'Automated Improvements', 'Performance Analytics'],
      price: '$139/month',
      marketPrice: '$250-600/month',
      benefits: ['Process efficiency', 'Cost reduction', 'Automated optimization', 'Better performance'],
      icon: Settings,
      category: 'Automation',
      popular: false
    },
    {
      title: 'Zion AI Infrastructure Monitor',
      description: 'Advanced infrastructure monitoring platform with AI-powered anomaly detection and optimization.',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard builder',
        'Advanced data connectors',
        'Automated report generation',
        'Multi-tenant architecture',
        'API integration',
        'Mobile app access'
      ],
      price: '$119/month',
      marketPrice: '$200-500/month',
      benefits: [
        'Data-driven decision making',
        'Real-time insights',
        'Custom dashboards',
        'Automated reporting',
        'ROI tracking'
      ],
      icon: BarChart3,
      category: 'Analytics',
      popular: true,
      link: 'https://analytics.ziontechgroup.com'
    },
    {
      id: 'zion-chat-ai',
      name: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support.',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'GPT-4 powered AI',
        'Multi-channel support',
        'Advanced sentiment analysis',
        'Automated ticket routing',
        'Live agent handoff',
        'Multi-language support',
        'CRM integration',
        'Analytics dashboard'
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
      icon: MessageSquare,
      link: 'https://chat.ziontechgroup.com'
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
        'Expense tracking',
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
      icon: FileText,
      link: 'https://invoices.ziontechgroup.com'
    },
    {
      id: 'zion-lead-magnet',
      name: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring and automated nurturing.',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI-powered lead scoring',
        'Multi-channel lead capture',
        'Automated lead nurturing',
        'CRM integration',
        'Advanced analytics',
        'A/B testing',
        'Email marketing',
        'Social media integration'
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
      link: 'https://leads.ziontechgroup.com'
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses.',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'Real-time threat monitoring',
        'Vulnerability scanning',
        'Incident response',
        'Security analytics',
        'Compliance reporting',
        'Employee training',
        'Firewall management',
        'Backup monitoring'
      ],
      benefits: [
        'Enhanced security posture',
        'Reduced risk exposure',
        'Compliance assurance',
        'Peace of mind',
        'Cost-effective protection'
      ],
      category: 'Security',
      popular: false,
      icon: Shield,
      link: 'https://security.ziontechgroup.com'
    },
    {
      id: 'zion-cloud-vault',
      name: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection and version control.',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: [
        'Automated backups',
        'Cross-platform sync',
        'Version control',
        'Disaster recovery',
        'Data encryption',
        'Compliance support',
        'File sharing',
        'Mobile access'
      ],
      benefits: [
        'Data protection',
        'Business continuity',
        'Cost-effective storage',
        'Easy recovery',
        'Secure sharing'
      ],
      category: 'Storage',
      popular: false,
      icon: Cloud,
      link: 'https://vault.ziontechgroup.com'
    },
    {
      id: 'zion-workflow-automation',
      name: 'Zion Workflow Automation',
      description: 'Intelligent business process automation platform that streamlines operations and reduces manual work.',
      price: '$129/month',
      marketPrice: '$250-800/month',
      features: [
        'Visual workflow builder',
        'AI-powered optimization',
        'Integration capabilities',
        'Task automation',
        'Approval workflows',
        'Performance analytics',
        'Custom triggers',
        'Team collaboration'
      ],
      benefits: [
        'Process efficiency',
        'Error reduction',
        'Cost savings',
        'Scalable automation',
        'Team productivity'
      ],
      category: 'Automation',
      popular: true,
      icon: Workflow,
      link: 'https://workflow.ziontechgroup.com'
    },
    {
      id: 'zion-project-manager',
      name: 'Zion Project Manager',
      description: 'AI-powered project management platform with intelligent resource allocation and progress tracking.',
      price: '$79/month',
      marketPrice: '$150-500/month',
      features: [
        'AI project planning',
        'Resource optimization',
        'Progress tracking',
        'Team collaboration',
        'Time tracking',
        'Budget management',
        'Risk assessment',
        'Reporting dashboard'
      ],
      benefits: [
        'Better project outcomes',
        'Resource optimization',
        'Timeline accuracy',
        'Team coordination',
        'Cost control'
      ],
      category: 'Project Management',
      popular: false,
      icon: Calendar,
      link: 'https://projects.ziontechgroup.com'
    },
    {
      id: 'zion-content-studio',
      name: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for blogs, social media, and marketing materials.',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI content generation',
        'Multi-platform publishing',
        'SEO optimization',
        'Brand voice consistency',
        'Content calendar',
        'Performance analytics',
        'Team collaboration',
        'Template library'
      ],
      benefits: [
        'Save 80% content time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform reach',
        'Content performance'
      ],
      category: 'Content',
      popular: true,
      icon: FileText,
      link: 'https://content.ziontechgroup.com'
    },
    {
      id: 'zion-crm-assistant',
      name: 'Zion CRM Assistant',
      description: 'Intelligent customer relationship management with AI-powered insights and automated follow-ups.',
      price: '$119/month',
      marketPrice: '$250-700/month',
      features: [
        'AI-powered lead scoring',
        'Automated follow-ups',
        'Sales forecasting',
        'Customer segmentation',
        'Pipeline management',
        'Email integration',
        'Mobile app',
        'Advanced analytics'
      ],
      benefits: [
        'Increase sales by 40%',
        'Better lead management',
        'Automated nurturing',
        'Sales insights',
        'Customer retention'
      ],
      category: 'CRM',
      popular: true,
      icon: Users,
      link: 'https://crm.ziontechgroup.com'
    },
    {
      id: 'zion-email-marketing',
      name: 'Zion Email Marketing',
      description: 'Advanced email marketing platform with AI-powered personalization and automated campaigns.',
      price: '$69/month',
      marketPrice: '$150-400/month',
      features: [
        'AI personalization',
        'Automated campaigns',
        'A/B testing',
        'List segmentation',
        'Email templates',
        'Analytics dashboard',
        'Integration capabilities',
        'Compliance tools'
      ],
      benefits: [
        'Higher open rates',
        'Better engagement',
        'Automated campaigns',
        'Personalized content',
        'ROI tracking'
      ],
      category: 'Marketing',
      popular: false,
      icon: Mail,
      link: 'https://email.ziontechgroup.com'
    },
    {
      id: 'zion-inventory-manager',
      name: 'Zion Inventory Manager',
      description: 'Smart inventory management system with AI-powered demand forecasting and automated reordering.',
      price: '$89/month',
      marketPrice: '$200-600/month',
      features: [
        'AI demand forecasting',
        'Automated reordering',
        'Multi-location support',
        'Barcode scanning',
        'Supplier management',
        'Cost tracking',
        'Reporting dashboard',
        'Mobile app'
      ],
      benefits: [
        'Reduce stockouts by 60%',
        'Optimize inventory levels',
        'Cost reduction',
        'Automated processes',
        'Better forecasting'
      ],
      category: 'Inventory',
      popular: false,
      icon: Package,
      link: 'https://inventory.ziontechgroup.com'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools', count: products.length },
    { id: 'Analytics', name: 'Analytics', count: products.filter(p => p.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: products.filter(p => p.category === 'Customer Service').length },
    { id: 'Security', name: 'Security', count: products.filter(p => p.category === 'Security').length },
    { id: 'Marketing', name: 'Marketing', count: products.filter(p => p.category === 'Marketing').length },
    { id: 'Productivity', name: 'Productivity', count: products.filter(p => p.category === 'Productivity').length },
    { id: 'CRM', name: 'CRM', count: products.filter(p => p.category === 'CRM').length },
    { id: 'Data', name: 'Data', count: products.filter(p => p.category === 'Data').length },
    { id: 'Project Management', name: 'Project Management', count: products.filter(p => p.category === 'Project Management').length },
    { id: 'Content', name: 'Content', count: products.filter(p => p.category === 'Content').length },
    { id: 'Infrastructure', name: 'Infrastructure', count: products.filter(p => p.category === 'Infrastructure').length },
    { id: 'Energy', name: 'Energy', count: products.filter(p => p.category === 'Energy').length },
    { id: 'Supply Chain', name: 'Supply Chain', count: products.filter(p => p.category === 'Supply Chain').length },
    { id: 'HR', name: 'HR', count: products.filter(p => p.category === 'HR').length },
    { id: 'Translation', name: 'Translation', count: products.filter(p => p.category === 'Translation').length },
    { id: 'Legal', name: 'Legal', count: products.filter(p => p.category === 'Legal').length },
    { id: 'Health', name: 'Health', count: products.filter(p => p.category === 'Health').length },
    { id: 'Automation', name: 'Automation', count: products.filter(p => p.category === 'Automation').length },
    { id: 'Monitoring', name: 'Monitoring', count: products.filter(p => p.category === 'Monitoring').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Tools - Zion Tech Group | Business Automation Solutions</title>
        <meta name="description" content="Comprehensive suite of micro SaaS tools for business automation, analytics, and productivity. Transform your operations with our innovative solutions." />
        <meta name="keywords" content="micro SaaS, business tools, automation, analytics, productivity, CRM, project management" />      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Micro SaaS Tools
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, focused tools designed to solve specific business challenges with maximum efficiency and minimal complexity.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search tools..."
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
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProducts.map((product, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{product.title}</h3>
                    <span className="text-sm text-gray-400">{product.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                    <span className="text-gray-400 text-sm ml-2 line-through">{product.marketPrice}</span>
                  </div>
                  {product.popular && (
                    <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {product.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {product.benefits && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {product.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <a href="/contact"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                  <a href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-slate-800/50 rounded-lg p-8">              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Choose from our comprehensive suite of Micro SaaS tools or get a custom solution built for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Get Free Consultation
                </a>
                <a href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default MicroSaasPage;
