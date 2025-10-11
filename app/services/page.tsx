'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, CheckCircle, ArrowRight, Brain, Cloud, Shield, BarChart3, Users, Zap, Database, FileText, Calendar, Mail, Code, Globe, Cpu, Target, TrendingUp, Lock, Settings, Monitor, Smartphone, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, DollarSign, Clock, Award, Heart, Box, Package, Mic, Headphones, Phone, MapPin, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // AI Services
    {
      icon: Brain,
      title: 'AI Customer Support',
      description: 'Intelligent chatbot and customer service automation powered by advanced AI.',
      category: 'ai',
      features: ['24/7 Availability', 'Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'Escalation Management', 'Analytics Dashboard'],
      price: 'Starting at $299/month',
      marketPrice: '$500-1500/month',
      benefits: ['Reduce support costs by 60%', 'Improve response time', 'Scale customer service', 'Better customer satisfaction']
    },
    {
      icon: BarChart3,
      title: 'AI Analytics Pro',
      description: 'Advanced data analytics and business intelligence with AI-powered insights.',
      category: 'ai',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'Machine Learning Models', 'API Integration'],
      price: 'Starting at $399/month',
      marketPrice: '$800-2000/month',
      benefits: ['Data-driven decisions', 'Predictive insights', 'Automated reporting', 'Competitive advantage']
    },
    {
      icon: Cpu,
      title: 'Quantum Computing Solutions',
      description: 'Cutting-edge quantum computing services for complex problem solving.',
      category: 'ai',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation', 'Research Support', 'Custom Development'],
      price: 'Starting at $999/month',
      marketPrice: '$2000-5000/month',
      benefits: ['Exponential computing power', 'Solve complex problems', 'Future-proof technology', 'Competitive edge']
    },
    {
      icon: Target,
      title: 'Autonomous Systems',
      description: 'AI-powered autonomous systems for various business applications.',
      category: 'ai',
      features: ['Self-learning Systems', 'Decision Making', 'Process Automation', 'Adaptive Behavior', 'Monitoring', 'Maintenance'],
      price: 'Starting at $599/month',
      marketPrice: '$1200-3000/month',
      benefits: ['Reduced human intervention', 'Improved efficiency', '24/7 operation', 'Cost savings']
    },

    // IT Services
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Complete cloud infrastructure migration and optimization services.',
      category: 'it',
      features: ['AWS/Azure/GCP Migration', 'Infrastructure Design', 'Security Implementation', 'Performance Optimization', 'Cost Management', '24/7 Support'],
      price: 'Starting at $1999/project',
      marketPrice: '$5000-15000/project',
      benefits: ['Scalable infrastructure', 'Reduced costs', 'Improved security', 'Better performance']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Suite',
      description: 'Comprehensive cybersecurity solutions to protect your business.',
      category: 'it',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance Management', 'Staff Training'],
      price: 'Starting at $499/month',
      marketPrice: '$1000-3000/month',
      benefits: ['Enhanced security posture', 'Reduced risk exposure', 'Compliance assurance', 'Peace of mind']
    },
    {
      icon: Wifi,
      title: '5G Implementation',
      description: 'Next-generation 5G network implementation and optimization.',
      category: 'it',
      features: ['Network Planning', 'Infrastructure Setup', 'Performance Testing', 'Optimization', 'Monitoring', 'Maintenance'],
      price: 'Starting at $2999/project',
      marketPrice: '$8000-25000/project',
      benefits: ['Ultra-fast connectivity', 'Low latency', 'High capacity', 'Future-ready infrastructure']
    },
    {
      icon: Globe,
      title: 'Blockchain Solutions',
      description: 'Blockchain technology implementation for secure and transparent operations.',
      category: 'it',
      features: ['Smart Contracts', 'Decentralized Apps', 'Token Development', 'Security Audits', 'Integration', 'Consulting'],
      price: 'Starting at $1999/project',
      marketPrice: '$5000-20000/project',
      benefits: ['Enhanced security', 'Transparency', 'Decentralization', 'Innovation']
    },

    // Micro SaaS
    {
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Comprehensive business analytics platform with real-time insights and reporting.',
      category: 'saas',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'API Integration', 'Automated Alerts', 'Team Collaboration'],
      price: 'Starting at $99/month',
      marketPrice: '$200-500/month',
      benefits: ['Data-driven decisions', 'Time savings', 'Better insights', 'Competitive advantage']
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'AI-powered customer support and engagement platform with intelligent automation.',
      category: 'saas',
      features: ['AI Chatbots', 'Live Chat', 'Knowledge Base', 'Multi-channel Support', 'Analytics', 'Integration'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Improved customer service', 'Reduced support costs', '24/7 availability', 'Better engagement']
    },
    {
      icon: DollarSign,
      title: 'Zion Invoice Genius',
      description: 'Smart invoicing and financial management platform with AI-powered automation.',
      category: 'saas',
      features: ['Automated Invoicing', 'Payment Processing', 'Expense Tracking', 'Financial Reports', 'Tax Management', 'Client Portal'],
      price: 'Starting at $59/month',
      marketPrice: '$120-300/month',
      benefits: ['Streamlined billing', 'Faster payments', 'Better cash flow', 'Reduced errors']
    },
    {
      icon: TrendingUp,
      title: 'Zion Lead Magnet',
      description: 'AI-powered lead generation and marketing automation platform.',
      category: 'saas',
      features: ['Lead Scoring', 'Email Automation', 'Landing Pages', 'A/B Testing', 'Analytics', 'CRM Integration'],
      price: 'Starting at $89/month',
      marketPrice: '$180-450/month',
      benefits: ['More qualified leads', 'Higher conversion rates', 'Automated marketing', 'Better ROI']
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection.',
      category: 'saas',
      features: ['Automated Backups', 'Cross-platform Sync', 'Version Control', 'Disaster Recovery', 'Data Encryption', 'Compliance Support'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Data protection', 'Business continuity', 'Cost-effective storage', 'Easy recovery']
    },
    {
      icon: FileText,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for blogs, social media, and marketing.',
      category: 'saas',
      features: ['AI Content Generation', 'SEO Optimization', 'Multi-platform Publishing', 'Content Calendar', 'Brand Voice Customization', 'Performance Analytics'],
      price: 'Starting at $129/month',
      marketPrice: '$250-600/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing']
<<<<<<< HEAD
=======
    },
    {
      icon: Users,
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation.',
      category: 'saas',
      features: ['AI-powered Lead Scoring', 'Automated Follow-ups', 'Predictive Analytics', 'Sales Forecasting', 'Customer Segmentation', 'Integration Hub'],
      price: 'Starting at $179/month',
      marketPrice: '$300-800/month',
      benefits: ['Improved sales performance', 'Better customer relationships', 'Automated processes', 'Data-driven insights']
    },
    {
      icon: Database,
      title: 'Zion Data Sync',
      description: 'Intelligent data integration and synchronization platform for seamless data flow across systems.',
      category: 'saas',
      features: ['Real-time Data Sync', 'Multi-source Integration', 'Data Transformation', 'Error Handling', 'Monitoring Dashboard', 'API Management'],
      price: 'Starting at $149/month',
      marketPrice: '$250-700/month',
      benefits: ['Unified data view', 'Reduced manual work', 'Improved accuracy', 'Real-time updates']
    },
    {
      icon: Calendar,
      title: 'Zion Project Master',
      description: 'AI-powered project management and team collaboration platform with intelligent task allocation.',
      category: 'saas',
      features: ['AI Task Allocation', 'Resource Planning', 'Progress Tracking', 'Team Collaboration', 'Time Tracking', 'Performance Analytics'],
      price: 'Starting at $99/month',
      marketPrice: '$200-500/month',
      benefits: ['Improved project success', 'Better resource utilization', 'Enhanced collaboration', 'Automated workflows']
    },
    {
      icon: Mail,
      title: 'Zion Email Automation',
      description: 'Advanced email marketing automation platform with AI-powered personalization and optimization.',
      category: 'saas',
      features: ['AI Personalization', 'Automated Campaigns', 'A/B Testing', 'Behavioral Triggers', 'Analytics Dashboard', 'Template Library'],
      price: 'Starting at $89/month',
      marketPrice: '$150-400/month',
      benefits: ['Higher open rates', 'Better engagement', 'Automated campaigns', 'Improved ROI']
    },
    {
      icon: Package,
      title: 'Zion Inventory Smart',
      description: 'Intelligent inventory management system with demand forecasting and automated reordering.',
      category: 'saas',
      features: ['Demand Forecasting', 'Automated Reordering', 'Multi-location Management', 'Supplier Integration', 'Cost Optimization', 'Analytics Dashboard'],
      price: 'Starting at $159/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduced stockouts', 'Lower inventory costs', 'Improved cash flow', 'Better supplier relationships']
    },
    {
      icon: Settings,
      title: 'Zion Workflow Automation',
      description: 'No-code workflow automation platform for streamlining business processes and increasing efficiency.',
      category: 'saas',
      features: ['Visual Workflow Builder', 'API Integrations', 'Conditional Logic', 'Task Automation', 'Approval Workflows', 'Performance Monitoring'],
      price: 'Starting at $119/month',
      marketPrice: '$200-600/month',
      benefits: ['Process efficiency', 'Reduced errors', 'Cost savings', 'Scalable automation']
    },
    {
      icon: Monitor,
      title: 'Zion Performance Monitor',
      description: 'Comprehensive application and infrastructure monitoring with AI-powered alerting and optimization.',
      category: 'saas',
      features: ['Real-time Monitoring', 'AI-powered Alerts', 'Performance Analytics', 'Uptime Tracking', 'Error Tracking', 'Capacity Planning'],
      price: 'Starting at $139/month',
      marketPrice: '$250-700/month',
      benefits: ['Improved uptime', 'Faster issue resolution', 'Better performance', 'Proactive monitoring']
    },
    {
      icon: CheckSquare,
      title: 'Zion Compliance Manager',
      description: 'Automated compliance management platform for various industry standards and regulations.',
      category: 'saas',
      features: ['Compliance Tracking', 'Automated Reporting', 'Document Management', 'Audit Trail', 'Risk Assessment', 'Training Management'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Reduced compliance risk', 'Automated reporting', 'Better documentation', 'Cost savings']
    },
    {
      icon: Globe,
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management platform with content scheduling and performance analytics.',
      category: 'saas',
      features: ['AI Content Suggestions', 'Multi-platform Scheduling', 'Performance Analytics', 'Engagement Tracking', 'Hashtag Optimization', 'Competitor Analysis'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Increased engagement', 'Time savings', 'Better content strategy', 'Improved reach']
    },
    {
      icon: Eye,
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing, transcription, and optimization.',
      category: 'saas',
      features: ['AI Auto-editing', 'Voice Transcription', 'Subtitle Generation', 'Thumbnail Creation', 'Multi-format Export', 'Cloud Storage'],
      price: 'Starting at $99/month',
      marketPrice: '$200-500/month',
      benefits: ['Faster video production', 'Professional quality', 'Automated processes', 'Cost-effective editing']
    },
    {
      icon: Globe,
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with AI-powered language detection and context-aware translation.',
      category: 'saas',
      features: ['Real-time Translation', 'Document Translation', 'Voice Translation', 'Context Awareness', 'Quality Scoring', 'API Integration'],
      price: 'Starting at $69/month',
      marketPrice: '$120-300/month',
      benefits: ['Global communication', 'Accurate translations', 'Time savings', 'Cost-effective solution']
    },
    {
      icon: Code,
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated analysis, suggestions, and security scanning.',
      category: 'saas',
      features: ['Automated Code Review', 'Security Scanning', 'Performance Analysis', 'Best Practice Suggestions', 'Team Collaboration', 'Integration Support'],
      price: 'Starting at $149/month',
      marketPrice: '$250-600/month',
      benefits: ['Improved code quality', 'Faster reviews', 'Better security', 'Team learning']
    },
    {
      icon: Users,
      title: 'Zion Customer Insights Pro',
      description: 'Advanced customer analytics platform with AI-powered insights and behavioral analysis.',
      category: 'saas',
      features: ['Customer Segmentation', 'Behavioral Analysis', 'Predictive Analytics', 'Churn Prediction', 'Personalization Engine', 'ROI Tracking'],
      price: 'Starting at $189/month',
      marketPrice: '$350-800/month',
      benefits: ['Better customer understanding', 'Improved retention', 'Personalized experiences', 'Data-driven decisions']
    },
    {
      icon: Mail,
      title: 'Zion AI Email Assistant',
      description: 'Intelligent email management platform with AI-powered sorting, responses, and scheduling.',
      category: 'saas',
      features: ['Smart Email Sorting', 'AI Response Suggestions', 'Email Scheduling', 'Priority Detection', 'Spam Filtering', 'Analytics Dashboard'],
      price: 'Starting at $59/month',
      marketPrice: '$100-250/month',
      benefits: ['Improved productivity', 'Better email management', 'Time savings', 'Reduced email stress']
    },
    {
      icon: Calendar,
      title: 'Zion AI Meeting Assistant',
      description: 'AI-powered meeting management with transcription, action items, and follow-up automation.',
      category: 'saas',
      features: ['Meeting Transcription', 'Action Item Extraction', 'Follow-up Automation', 'Meeting Analytics', 'Integration Support', 'Voice Recognition'],
      price: 'Starting at $89/month',
      marketPrice: '$150-400/month',
      benefits: ['Better meeting outcomes', 'Automated follow-ups', 'Improved productivity', 'Better documentation']
    },
    {
      icon: Target,
      title: 'Zion AI SEO Optimizer',
      description: 'Comprehensive SEO optimization platform with AI-powered content analysis and ranking improvements.',
      category: 'saas',
      features: ['Content Analysis', 'Keyword Optimization', 'Ranking Tracking', 'Competitor Analysis', 'Technical SEO', 'Performance Monitoring'],
      price: 'Starting at $129/month',
      marketPrice: '$250-600/month',
      benefits: ['Improved search rankings', 'Better organic traffic', 'Content optimization', 'Competitive advantage']
    },
    {
      icon: Database,
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with automated quality assurance.',
      category: 'saas',
      features: ['Automated Data Cleaning', 'Duplicate Detection', 'Data Validation', 'Quality Scoring', 'Error Correction', 'Data Enrichment'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Improved data quality', 'Reduced manual work', 'Better insights', 'Cost savings']
    },
    {
      icon: FileText,
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis platform with risk assessment and compliance checking.',
      category: 'saas',
      features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Clause Extraction', 'Automated Summaries', 'Version Comparison'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Faster contract review', 'Reduced risk', 'Better compliance', 'Time savings']
    },
    {
      icon: CheckSquare,
      title: 'Zion AI Survey Builder',
      description: 'Intelligent survey creation platform with AI-powered question suggestions and analytics.',
      category: 'saas',
      features: ['AI Question Suggestions', 'Multi-format Surveys', 'Real-time Analytics', 'Response Analysis', 'Automated Reports', 'Integration Support'],
      price: 'Starting at $69/month',
      marketPrice: '$120-300/month',
      benefits: ['Better survey design', 'Improved response rates', 'Automated analysis', 'Actionable insights']
    },
    {
      icon: DollarSign,
      title: 'Zion AI Accounting Assistant',
      description: 'AI-powered accounting platform with automated bookkeeping and financial analysis.',
      category: 'saas',
      features: ['Automated Bookkeeping', 'Expense Categorization', 'Financial Analysis', 'Tax Preparation', 'Invoice Processing', 'Compliance Reporting'],
      price: 'Starting at $149/month',
      marketPrice: '$250-600/month',
      benefits: ['Reduced accounting costs', 'Improved accuracy', 'Better financial insights', 'Time savings']
    },
    {
      icon: Users,
      title: 'Zion AI Recruitment Pro',
      description: 'Intelligent recruitment platform with AI-powered candidate screening and matching.',
      category: 'saas',
      features: ['AI Candidate Screening', 'Resume Analysis', 'Skill Matching', 'Interview Scheduling', 'Background Checks', 'Analytics Dashboard'],
      price: 'Starting at $179/month',
      marketPrice: '$300-800/month',
      benefits: ['Faster hiring process', 'Better candidate matches', 'Reduced bias', 'Improved efficiency']
    },
    {
      icon: Shield,
      title: 'Zion AI Content Moderation',
      description: 'AI-powered content moderation platform with automated filtering and compliance management.',
      category: 'saas',
      features: ['Automated Content Filtering', 'Sentiment Analysis', 'Compliance Checking', 'Real-time Monitoring', 'Custom Rules', 'Analytics Dashboard'],
      price: 'Starting at $159/month',
      marketPrice: '$300-700/month',
      benefits: ['Reduced moderation costs', 'Consistent enforcement', 'Better user experience', 'Compliance assurance']
    },
    {
      icon: Settings,
      title: 'Zion AI Predictive Maintenance',
      description: 'Intelligent maintenance platform with AI-powered equipment monitoring and failure prediction.',
      category: 'saas',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Performance Analytics', 'Alert System'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Reduced downtime', 'Lower maintenance costs', 'Extended equipment life', 'Better planning']
    },
    {
      icon: Zap,
      title: 'Zion AI Energy Manager',
      description: 'AI-powered energy management platform for optimizing consumption and reducing costs.',
      category: 'saas',
      features: ['Energy Monitoring', 'Consumption Analysis', 'Cost Optimization', 'Predictive Analytics', 'Automated Controls', 'Sustainability Reporting'],
      price: 'Starting at $129/month',
      marketPrice: '$250-600/month',
      benefits: ['Reduced energy costs', 'Better sustainability', 'Automated optimization', 'Environmental impact']
    },
    {
      icon: Package,
      title: 'Zion AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management platform with AI-powered optimization and forecasting.',
      category: 'saas',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Management', 'Risk Assessment', 'Cost Analysis', 'Performance Tracking'],
      price: 'Starting at $219/month',
      marketPrice: '$400-1000/month',
      benefits: ['Reduced costs', 'Better inventory management', 'Improved efficiency', 'Risk mitigation']
    },
    {
      icon: Shield,
      title: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection platform with real-time monitoring and prevention capabilities.',
      category: 'saas',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Automated Alerts', 'Machine Learning', 'Compliance Support'],
      price: 'Starting at $249/month',
      marketPrice: '$500-1500/month',
      benefits: ['Reduced fraud losses', 'Real-time protection', 'Better accuracy', 'Compliance ready']
    },
    {
      icon: MessageSquare,
      title: 'Zion AI Customer Service Pro',
      description: 'Advanced customer service platform with AI-powered automation and human handoff.',
      category: 'saas',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Ticket Routing', 'Knowledge Base', 'Live Agent Handoff', 'Performance Analytics'],
      price: 'Starting at $189/month',
      marketPrice: '$350-800/month',
      benefits: ['Improved customer satisfaction', 'Reduced response times', '24/7 availability', 'Cost savings']
    },
    {
      icon: Target,
      title: 'Zion AI Marketing Automation',
      description: 'Comprehensive marketing automation platform with AI-powered personalization and optimization.',
      category: 'saas',
      features: ['Campaign Automation', 'Personalization Engine', 'Lead Scoring', 'A/B Testing', 'Analytics Dashboard', 'Multi-channel Support'],
      price: 'Starting at $159/month',
      marketPrice: '$300-700/month',
      benefits: ['Higher conversion rates', 'Better personalization', 'Automated optimization', 'Improved ROI']
    },
    {
      icon: FileText,
      title: 'Zion AI Document AI',
      description: 'Intelligent document processing platform with AI-powered extraction and analysis.',
      category: 'saas',
      features: ['Document OCR', 'Data Extraction', 'Form Processing', 'Document Classification', 'Search & Retrieval', 'Integration APIs'],
      price: 'Starting at $139/month',
      marketPrice: '$250-600/month',
      benefits: ['Faster document processing', 'Reduced manual work', 'Better accuracy', 'Cost savings']
    },
    {
      icon: Brain,
      title: 'Zion AI Quantum Analytics',
      description: 'Revolutionary quantum-powered analytics platform for complex data analysis and optimization.',
      category: 'saas',
      features: ['Quantum Data Processing', 'Complex Optimization', 'Advanced Pattern Recognition', 'Real-time Insights', 'Quantum Machine Learning'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Exponential processing speed', 'Complex problem solving', 'Advanced analytics', 'Future-proof technology']
    },
    {
      icon: Eye,
      title: 'Zion AI Holographic Workspace',
      description: 'Immersive 3D workspace platform with AI-powered collaboration and visualization tools.',
      category: 'saas',
      features: ['3D Virtual Workspace', 'AI Collaboration Tools', 'Holographic Presentations', 'Spatial Computing', 'Real-time Rendering'],
      price: 'Starting at $199/month',
      marketPrice: '$350-1200/month',
      benefits: ['Immersive collaboration', 'Enhanced productivity', 'Cutting-edge interface', 'Remote work revolution']
    },
    {
      icon: Cpu,
      title: 'Zion AI Edge Intelligence',
      description: 'Distributed AI platform for edge computing with real-time processing and decision making.',
      category: 'saas',
      features: ['Edge AI Processing', 'Real-time Analytics', 'Offline Intelligence', 'Distributed Learning', 'Low Latency Response'],
      price: 'Starting at $149/month',
      marketPrice: '$250-800/month',
      benefits: ['Ultra-low latency', 'Reduced bandwidth costs', 'Enhanced privacy', 'Real-time processing']
    },
    {
      icon: Shield,
      title: 'Zion AI Quantum Security',
      description: 'Next-generation quantum-resistant security platform for future-proof protection.',
      category: 'saas',
      features: ['Quantum Encryption', 'Post-Quantum Security', 'Advanced Threat Detection', 'Zero-Trust Architecture', 'Quantum Key Distribution'],
      price: 'Starting at $179/month',
      marketPrice: '$300-1000/month',
      benefits: ['Quantum-resistant security', 'Future-proof protection', 'Advanced threat detection', 'Military-grade encryption']
    },
    {
      icon: Database,
      title: 'Zion AI Neural Database Pro',
      description: 'Self-optimizing database platform with AI-powered performance tuning and predictive analytics.',
      category: 'saas',
      features: ['Self-Optimizing Queries', 'Predictive Indexing', 'Automatic Scaling', 'Neural Optimization', 'Intelligent Caching'],
      price: 'Starting at $129/month',
      marketPrice: '$200-600/month',
      benefits: ['Self-optimizing performance', 'Reduced maintenance', 'Intelligent scaling', 'Predictive optimization']
    },
    {
      icon: Zap,
      title: 'Zion AI Energy Optimizer',
      description: 'AI-powered energy management platform for reducing costs and improving sustainability.',
      category: 'saas',
      features: ['Energy Monitoring', 'Cost Optimization', 'Predictive Analytics', 'Automated Controls', 'Sustainability Reporting'],
      price: 'Starting at $99/month',
      marketPrice: '$150-500/month',
      benefits: ['Reduced energy costs', 'Better sustainability', 'Automated optimization', 'Environmental impact']
    },
    {
      icon: Target,
      title: 'Zion AI Supply Chain Intelligence',
      description: 'Advanced supply chain optimization platform with AI-powered forecasting and risk management.',
      category: 'saas',
      features: ['Demand Forecasting', 'Risk Assessment', 'Supplier Optimization', 'Cost Analysis', 'Performance Tracking'],
      price: 'Starting at $219/month',
      marketPrice: '$400-1200/month',
      benefits: ['Reduced costs', 'Better inventory management', 'Improved efficiency', 'Risk mitigation']
    },
    {
      icon: Users,
      title: 'Zion AI Talent Intelligence',
      description: 'AI-powered talent acquisition and management platform with advanced matching algorithms.',
      category: 'saas',
      features: ['AI Candidate Matching', 'Skills Assessment', 'Performance Prediction', 'Retention Analytics', 'Diversity Optimization'],
      price: 'Starting at $189/month',
      marketPrice: '$300-800/month',
      benefits: ['Better talent matches', 'Reduced hiring time', 'Improved retention', 'Diversity optimization']
    },
    {
      icon: Globe,
      title: 'Zion AI Global Translator',
      description: 'Advanced translation platform with AI-powered context understanding and cultural adaptation.',
      category: 'saas',
      features: ['Context-Aware Translation', 'Cultural Adaptation', 'Real-time Translation', 'Voice Translation', 'Document Processing'],
      price: 'Starting at $79/month',
      marketPrice: '$120-400/month',
      benefits: ['Accurate translations', 'Cultural sensitivity', 'Real-time processing', 'Global communication']
    },
    {
      icon: FileText,
      title: 'Zion AI Legal Assistant',
      description: 'AI-powered legal document analysis and contract management platform.',
      category: 'saas',
      features: ['Contract Analysis', 'Legal Document Review', 'Compliance Checking', 'Risk Assessment', 'Automated Summaries'],
      price: 'Starting at $249/month',
      marketPrice: '$400-1200/month',
      benefits: ['Faster legal reviews', 'Reduced legal costs', 'Better compliance', 'Risk mitigation']
    },
    {
      icon: Heart,
      title: 'Zion AI Health Monitor',
      description: 'AI-powered health monitoring and wellness platform with predictive health analytics.',
      category: 'saas',
      features: ['Health Monitoring', 'Predictive Analytics', 'Wellness Tracking', 'Risk Assessment', 'Personalized Recommendations'],
      price: 'Starting at $159/month',
      marketPrice: '$250-700/month',
      benefits: ['Better health outcomes', 'Preventive care', 'Personalized insights', 'Cost savings']
    },
    {
      icon: BarChart3,
      title: 'Zion AI Market Intelligence',
      description: 'Advanced market analysis platform with AI-powered insights and trend prediction.',
      category: 'saas',
      features: ['Market Analysis', 'Trend Prediction', 'Competitor Intelligence', 'Risk Assessment', 'Investment Insights'],
      price: 'Starting at $199/month',
      marketPrice: '$350-1000/month',
      benefits: ['Better market insights', 'Improved decision making', 'Risk mitigation', 'Competitive advantage']
    },
    {
      icon: Settings,
      title: 'Zion AI Process Optimizer',
      description: 'Intelligent process optimization platform with AI-powered workflow analysis and improvement.',
      category: 'saas',
      features: ['Process Mining', 'Workflow Optimization', 'Bottleneck Detection', 'Automated Improvements', 'Performance Analytics'],
      price: 'Starting at $139/month',
      marketPrice: '$250-600/month',
      benefits: ['Process efficiency', 'Cost reduction', 'Automated optimization', 'Better performance']
    },
    {
      icon: Monitor,
      title: 'Zion AI Infrastructure Monitor',
      description: 'Advanced infrastructure monitoring platform with AI-powered anomaly detection and optimization.',
      category: 'saas',
      features: ['Real-time Monitoring', 'Anomaly Detection', 'Predictive Maintenance', 'Performance Optimization', 'Automated Alerts'],
      price: 'Starting at $119/month',
      marketPrice: '$200-500/month',
      benefits: ['Improved uptime', 'Faster issue resolution', 'Proactive maintenance', 'Cost optimization']
    },
    {
      icon: Cpu,
      title: 'Quantum Computing Infrastructure',
      description: 'Revolutionary quantum computing infrastructure setup and management for advanced computational needs.',
      category: 'it',
      features: ['Quantum Hardware Setup', 'Quantum Software Integration', 'Quantum Algorithm Development', 'Quantum Security Implementation', 'Quantum Performance Optimization'],
      price: 'Starting at $5,000/month',
      marketPrice: '$10000-50000/month',
      benefits: ['Exponential processing power', 'Revolutionary problem solving', 'Future-proof technology', 'Competitive advantage']
    },
    {
      icon: Eye,
      title: 'Holographic Technology Solutions',
      description: 'Advanced holographic display and interaction systems for immersive business applications.',
      category: 'it',
      features: ['Holographic Display Setup', '3D Content Creation', 'Gesture Recognition Systems', 'Spatial Computing Integration', 'AR/VR Implementation'],
      price: 'Starting at $3,500/month',
      marketPrice: '$6000-25000/month',
      benefits: ['Immersive user experience', 'Enhanced productivity', 'Cutting-edge technology', 'Competitive differentiation']
    },
    {
      icon: Brain,
      title: 'AI Infrastructure & MLOps',
      description: 'Complete AI infrastructure setup with machine learning operations and model deployment.',
      category: 'it',
      features: ['AI Model Deployment', 'MLOps Pipeline Setup', 'GPU Infrastructure', 'Model Monitoring', 'Auto-scaling AI Services'],
      price: 'Starting at $2,800/month',
      marketPrice: '$4500-15000/month',
      benefits: ['Scalable AI infrastructure', 'Automated ML operations', 'High-performance computing', 'Cost-effective AI deployment']
    },
    {
      icon: Shield,
      title: 'Zero-Trust Security Architecture',
      description: 'Comprehensive zero-trust security implementation with advanced threat protection and monitoring.',
      category: 'it',
      features: ['Zero-Trust Implementation', 'Identity & Access Management', 'Micro-segmentation', 'Continuous Monitoring', 'Threat Intelligence'],
      price: 'Starting at $2,200/month',
      marketPrice: '$3500-12000/month',
      benefits: ['Enhanced security posture', 'Reduced attack surface', 'Continuous monitoring', 'Compliance assurance']
    },
    {
      icon: Database,
      title: 'Blockchain & Web3 Infrastructure',
      description: 'Complete blockchain infrastructure setup with smart contracts and decentralized applications.',
      category: 'it',
      features: ['Blockchain Network Setup', 'Smart Contract Development', 'DeFi Integration', 'NFT Platform Development', 'Web3 Security'],
      price: 'Starting at $3,200/month',
      marketPrice: '$5000-20000/month',
      benefits: ['Decentralized solutions', 'Enhanced security', 'Transparent operations', 'Future-proof technology']
    },
    {
      icon: Globe,
      title: 'Edge Computing Solutions',
      description: 'Distributed edge computing infrastructure for low-latency applications and IoT integration.',
      category: 'it',
      features: ['Edge Server Deployment', 'IoT Integration', 'Real-time Processing', 'Distributed Architecture', 'Edge Security'],
      price: 'Starting at $1,800/month',
      marketPrice: '$3000-10000/month',
      benefits: ['Ultra-low latency', 'Reduced bandwidth costs', 'Enhanced privacy', 'Real-time processing']
    },
    {
      icon: Zap,
      title: '5G Network Implementation',
      description: 'Complete 5G network infrastructure setup and optimization for high-speed connectivity.',
      category: 'it',
      features: ['5G Network Design', 'Infrastructure Deployment', 'Performance Optimization', 'Security Implementation', 'IoT Integration'],
      price: 'Starting at $4,500/month',
      marketPrice: '$8000-30000/month',
      benefits: ['Ultra-fast connectivity', 'Low latency', 'Massive IoT support', 'Enhanced mobile experience']
    },
    {
      icon: Monitor,
      title: 'Advanced Monitoring & Observability',
      description: 'Comprehensive monitoring and observability platform with AI-powered insights and automation.',
      category: 'it',
      features: ['Full-Stack Monitoring', 'AI-Powered Analytics', 'Automated Alerting', 'Performance Optimization', 'Predictive Maintenance'],
      price: 'Starting at $1,500/month',
      marketPrice: '$2500-8000/month',
      benefits: ['Proactive issue detection', 'Improved uptime', 'Better performance', 'Reduced downtime']
    },
    {
      icon: Settings,
      title: 'Hyperautomation Solutions',
      description: 'End-to-end hyperautomation implementation with AI, RPA, and process intelligence.',
      category: 'it',
      features: ['RPA Implementation', 'Process Mining', 'AI Integration', 'Workflow Automation', 'Intelligent Document Processing'],
      price: 'Starting at $2,500/month',
      marketPrice: '$4000-15000/month',
      benefits: ['Complete process automation', 'Reduced manual work', 'Improved efficiency', 'Cost savings']
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'ai', name: 'AI Services', count: services.filter(s => s.category === 'ai').length },
    { id: 'it', name: 'IT Services', count: services.filter(s => s.category === 'it').length },
    { id: 'saas', name: 'Micro SaaS', count: services.filter(s => s.category === 'saas').length }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Services - Zion Tech Group | AI, IT & Micro SaaS Solutions</title>
        <meta name="description" content="Comprehensive AI services, IT solutions, and Micro SaaS tools. From quantum computing to cloud migration, we provide cutting-edge technology solutions for modern businesses." />
        <meta name="keywords" content="AI services, IT services, micro saas, cloud migration, cybersecurity, quantum computing, blockchain, business automation" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
=======
        <title>Our Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including chatbots, analytics, cloud migration, cybersecurity, and custom software development." />
        <meta name="keywords" content="AI services, IT services, cloud migration, cybersecurity, software development, micro saas" />
        <meta property="og:title" content="Our Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI and IT solutions for your business" />
        <meta property="og:type" content="website" />
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
<<<<<<< HEAD
        <main className="pt-20">
=======
        
        <main className="container mx-auto px-4 py-16 pt-24">
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-cyan-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI services, IT solutions, and Micro SaaS tools designed to transform your business 
                and drive innovation in the digital age.
              </p>
            </div>
          </section>

          {/* Search and Filter */}
          <section className="py-8 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                          selectedCategory === category.id
                            ? 'bg-cyan-500 text-white'
                            : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                        }`}
                      >
                        {category.name} ({category.count})
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          service.category === 'ai' ? 'bg-purple-600 text-white' :
                          service.category === 'it' ? 'bg-blue-600 text-white' :
                          'bg-green-600 text-white'
                        }`}>
                          {service.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 4 && (
                          <div className="text-cyan-400 text-sm">
                            +{service.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                      </div>
                      <div className="text-sm text-gray-300">
                        Save up to 50% compared to market rates
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                            <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                      <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-4 py-3 rounded-lg font-semibold transition-all duration-300">
                        Contact
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredServices.length === 0 && (
                <div className="text-center py-16">
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                  <p className="text-gray-300 mb-6">
                    Try adjusting your search terms or category filter.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 text-center border border-cyan-500/20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Let our experts help you choose the right services for your business needs. 
                  Get a personalized consultation and see how we can accelerate your growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="/pricing"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    View Pricing
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;