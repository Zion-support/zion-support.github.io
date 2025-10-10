'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Smartphone,
  Database,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Eye,
  Settings,
  Users,
  MessageSquare,
  FileText,
  Target
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // AI Services
    {
      icon: Brain,
      title: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis for 24/7 customer support.',
      category: 'ai',
      features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'CRM Integration', 'Real-time Learning'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions'],
      link: 'https://ziontechgroup.com/ai-chatbot-builder'
    },
    {
      icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform and predictive modeling.',
      category: 'ai',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Anomaly Detection', 'Custom Data Models'],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization'],
      link: 'https://ziontechgroup.com/ai-analytics'
    },
    {
      icon: Zap,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows for maximum efficiency.',
      category: 'ai',
      features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling', 'Performance Monitoring'],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation'],
      link: 'https://ziontechgroup.com/ai-automation'
    },
    {
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation across industries.',
      category: 'ai',
      features: ['Object Detection', 'Quality Control Automation', 'Facial Recognition', 'Video Analytics', 'Real-time Processing'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-5000/month',
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction'],
      link: 'https://ziontechgroup.com/ai-computer-vision'
    },
    {
      icon: Shield,
      title: 'AI Fraud Detection',
      description: 'Advanced machine learning algorithms to detect and prevent fraudulent activities in real-time.',
      category: 'ai',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Anomaly Detection', 'Automated Alerts'],
      price: 'Starting at $799/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Reduce fraud losses by 85%', 'Real-time protection', 'False positive reduction', 'Compliance ready'],
      link: 'https://ziontechgroup.com/ai-fraud-detection'
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing.',
      category: 'ai',
      features: ['Blog post generation', 'Social media content', 'Email marketing campaigns', 'SEO optimization', 'Brand voice customization'],
      price: 'Starting at $199/month',
      marketPrice: '$300-1500/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      link: 'https://ziontechgroup.com/ai-content-generation'
    },
    {
      icon: Users,
      title: 'AI Customer Service',
      description: 'Intelligent customer service solutions with automated ticket routing and sentiment analysis.',
      category: 'ai',
      features: ['Automated Ticket Routing', 'Sentiment Analysis', 'Multi-channel Support', 'Knowledge Base Integration', 'Performance Analytics'],
      price: 'Starting at $249/month',
      marketPrice: '$400-1800/month',
      benefits: ['Faster response times', 'Improved customer satisfaction', 'Reduced workload', '24/7 availability'],
      link: 'https://ziontechgroup.com/ai-customer-service'
    },
    {
      icon: DollarSign,
      title: 'AI Financial Analytics',
      description: 'Advanced financial modeling and risk assessment using machine learning algorithms.',
      category: 'ai',
      features: ['Risk Assessment', 'Financial Modeling', 'Fraud Detection', 'Investment Analysis', 'Regulatory Compliance'],
      price: 'Starting at $699/month',
      marketPrice: '$1200-4000/month',
      benefits: ['Accurate risk assessment', 'Compliance automation', 'Fraud prevention', 'Investment optimization'],
      link: 'https://ziontechgroup.com/ai-financial-services'
    },
    
    // IT Services
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services.',
      category: 'it',
      features: ['Cloud Architecture Design', 'Multi-cloud Strategies', 'Cost Optimization', 'Disaster Recovery', 'Auto-scaling', 'Security Compliance'],
      price: 'Starting at $2,500/month',
      marketPrice: '$4000-15000/month',
      benefits: ['99.9% uptime guarantee', 'Cost reduction up to 40%', 'Scalable infrastructure', 'Expert migration support'],
      link: 'https://ziontechgroup.com/cloud-infrastructure'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response.',
      category: 'it',
      features: ['Threat Detection & Response', 'Vulnerability Assessments', 'Penetration Testing', 'Security Monitoring', 'Compliance Management', 'Employee Training'],
      price: 'Starting at $1,800/month',
      marketPrice: '$3000-12000/month',
      benefits: ['24/7 security monitoring', 'Reduced security incidents', 'Compliance assurance', 'Expert security team'],
      link: 'https://ziontechgroup.com/cybersecurity-solutions'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems.',
      category: 'it',
      features: ['Database Design & Optimization', 'Performance Tuning', 'Backup & Recovery', 'Data Migration', 'Security Hardening', 'Monitoring & Maintenance'],
      price: 'Starting at $1,200/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Improved performance', 'Data security', 'Automated backups', 'Expert DBA support'],
      link: 'https://ziontechgroup.com/database-management'
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code.',
      category: 'it',
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging', 'Automated Testing', 'Deployment Automation'],
      price: 'Starting at $2,200/month',
      marketPrice: '$3500-10000/month',
      benefits: ['Faster deployments', 'Reduced downtime', 'Improved code quality', 'Automated workflows'],
      link: 'https://ziontechgroup.com/devops-cicd'
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic IT consulting and digital transformation services for enterprise organizations.',
      category: 'it',
      features: ['IT Strategy Development', 'Technology Assessment', 'Digital Transformation Planning', 'Vendor Evaluation', 'Process Optimization', 'Change Management'],
      price: 'Starting at $200/hour',
      marketPrice: '$300-800/hour',
      benefits: ['Strategic guidance', 'Cost optimization', 'Technology alignment', 'Competitive advantage'],
      link: 'https://ziontechgroup.com/it-consulting'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance.',
      category: 'it',
      features: ['React/Next.js Development', 'Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Security Implementation', 'Content Management'],
      price: 'Starting at $5,000/project',
      marketPrice: '$10000-30000/project',
      benefits: ['Modern technology stack', 'SEO optimized', 'Mobile responsive', 'Fast loading times'],
      link: 'https://ziontechgroup.com/web-development'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with optimal user experience.',
      category: 'it',
      features: ['iOS & Android Apps', 'Cross-platform Development', 'App Store Optimization', 'Push Notifications', 'Offline Functionality', 'Performance Optimization'],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-50000/project',
      benefits: ['Native performance', 'Cross-platform compatibility', 'App store success', 'User engagement'],
      link: 'https://ziontechgroup.com/mobile-development'
    },
    
    // Micro SaaS Solutions
    {
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights.',
      category: 'saas',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Multi-tenant Architecture'],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      link: 'https://ziontechgroup.com/zion-analytics-pro'
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis.',
      category: 'saas',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing', 'Live Agent Handoff', 'Multi-language Support'],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation'],
      link: 'https://ziontechgroup.com/zion-chat-ai'
    },
    {
      icon: FileText,
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking.',
      category: 'saas',
      features: ['AI-powered Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking', 'Tax Calculation', 'Client Portal'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice creation time', 'Reduce payment delays', 'Automated follow-ups', 'Professional invoices'],
      link: 'https://ziontechgroup.com/zion-invoice-genius'
    },
    {
      icon: Target,
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring.',
      category: 'saas',
      features: ['AI-powered Lead Scoring', 'Multi-channel Lead Capture', 'Automated Lead Nurturing', 'CRM Integration', 'Advanced Analytics', 'A/B Testing'],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase qualified leads by 300%', 'Automated lead nurturing', 'Better conversion rates', 'ROI optimization'],
      link: 'https://ziontechgroup.com/zion-lead-magnet'
    },
    {
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection for small to medium businesses.',
      category: 'saas',
      features: ['Real-time Threat Detection', 'Automated Security Scanning', 'Compliance Monitoring', 'Incident Response', 'Security Training', 'Risk Assessment'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
      benefits: ['24/7 security monitoring', 'Reduced security risks', 'Compliance assurance', 'Expert security team'],
      link: 'https://ziontechgroup.com/zion-security-shield'
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection.',
      category: 'saas',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Version Control', 'Cross-platform Sync', 'Compliance Ready'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Data protection', 'Business continuity', 'Cost-effective storage', 'Easy recovery'],
      link: 'https://ziontechgroup.com/zion-cloud-vault'
    },
    {
      icon: FileText,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials.',
      category: 'saas',
      features: ['AI Content Generation', 'SEO Optimization', 'Brand Voice Customization', 'Multi-platform Publishing', 'Content Calendar', 'Performance Analytics'],
      price: 'Starting at $129/month',
      marketPrice: '$250-800/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      link: 'https://ziontechgroup.com/zion-content-studio'
    },
    {
      icon: Users,
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation.',
      category: 'saas',
      features: ['AI-powered Lead Scoring', 'Automated Follow-ups', 'Predictive Analytics', 'Multi-channel Communication', 'Sales Pipeline Management', 'Customer Insights'],
      price: 'Starting at $179/month',
      marketPrice: '$300-900/month',
      benefits: ['Improved sales conversion', 'Better customer relationships', 'Automated workflows', 'Data-driven insights'],
      link: 'https://ziontechgroup.com/zion-crm-intelligence'
    },
    {
      icon: Database,
      title: 'Zion Data Sync',
      description: 'Advanced data integration platform connecting all your business applications seamlessly.',
      category: 'saas',
      features: ['Real-time Data Sync', 'API Integration', 'Data Transformation', 'Error Handling', 'Monitoring & Alerts', 'Custom Connectors'],
      price: 'Starting at $159/month',
      marketPrice: '$300-700/month',
      benefits: ['Unified data view', 'Reduced manual work', 'Real-time updates', 'Improved accuracy'],
      link: 'https://ziontechgroup.com/zion-data-sync'
    },
    {
      icon: Calendar,
      title: 'Zion Project Master',
      description: 'AI-powered project management platform with intelligent resource allocation and timeline optimization.',
      category: 'saas',
      features: ['AI Resource Allocation', 'Timeline Optimization', 'Risk Assessment', 'Team Collaboration', 'Progress Tracking', 'Automated Reporting'],
      price: 'Starting at $139/month',
      marketPrice: '$250-600/month',
      benefits: ['Improved project success rates', 'Better resource utilization', 'Reduced project delays', 'Enhanced team collaboration'],
      link: 'https://ziontechgroup.com/zion-project-master'
    },
    {
      icon: Mail,
      title: 'Zion Email Automation',
      description: 'Intelligent email marketing platform with AI-powered personalization and automation.',
      category: 'saas',
      features: ['AI Personalization', 'Automated Campaigns', 'A/B Testing', 'Behavioral Triggers', 'Advanced Analytics', 'List Management'],
      price: 'Starting at $119/month',
      marketPrice: '$200-500/month',
      benefits: ['Higher email engagement', 'Automated campaigns', 'Better deliverability', 'Improved ROI'],
      link: 'https://ziontechgroup.com/zion-email-automation'
    },
    {
      icon: Package,
      title: 'Zion Inventory Smart',
      description: 'AI-powered inventory management with demand forecasting and automated reordering.',
      category: 'saas',
      features: ['Demand Forecasting', 'Automated Reordering', 'Stock Optimization', 'Multi-location Support', 'Supplier Integration', 'Analytics Dashboard'],
      price: 'Starting at $169/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduced stockouts', 'Lower inventory costs', 'Improved cash flow', 'Better supplier relationships'],
      link: 'https://ziontechgroup.com/zion-inventory-smart'
    },
    {
      icon: Settings,
      title: 'Zion Workflow Automation',
      description: 'No-code workflow automation platform for streamlining business processes.',
      category: 'saas',
      features: ['Visual Workflow Builder', 'API Integrations', 'Conditional Logic', 'Task Automation', 'Approval Workflows', 'Performance Monitoring'],
      price: 'Starting at $109/month',
      marketPrice: '$200-500/month',
      benefits: ['Process efficiency', 'Reduced manual work', 'Faster approvals', 'Better compliance'],
      link: 'https://ziontechgroup.com/zion-workflow-automation'
    },
    {
      icon: Monitor,
      title: 'Zion Performance Monitor',
      description: 'Comprehensive application and infrastructure monitoring with AI-powered insights.',
      category: 'saas',
      features: ['Real-time Monitoring', 'AI Anomaly Detection', 'Performance Analytics', 'Alert Management', 'Custom Dashboards', 'Historical Reporting'],
      price: 'Starting at $189/month',
      marketPrice: '$350-900/month',
      benefits: ['Proactive issue detection', 'Improved uptime', 'Better performance', 'Reduced downtime costs'],
      link: 'https://ziontechgroup.com/zion-performance-monitor'
    },
    {
      icon: CheckSquare,
      title: 'Zion Compliance Manager',
      description: 'Automated compliance management for various industry standards and regulations.',
      category: 'saas',
      features: ['Regulatory Compliance', 'Automated Auditing', 'Document Management', 'Risk Assessment', 'Training Management', 'Reporting'],
      price: 'Starting at $229/month',
      marketPrice: '$400-1000/month',
      benefits: ['Reduced compliance costs', 'Automated auditing', 'Better risk management', 'Regulatory assurance'],
      link: 'https://ziontechgroup.com/zion-compliance-manager'
    },
    {
      icon: Globe,
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management with content optimization and scheduling.',
      category: 'saas',
      features: ['AI Content Optimization', 'Multi-platform Scheduling', 'Engagement Analytics', 'Hashtag Research', 'Competitor Analysis', 'Team Collaboration'],
      price: 'Starting at $149/month',
      marketPrice: '$250-600/month',
      benefits: ['Increased social engagement', 'Time-saving automation', 'Better content performance', 'Multi-platform management'],
      link: 'https://ziontechgroup.com/zion-social-scheduler'
    },
    {
      icon: Eye,
      title: 'Zion AI Video Editor',
      description: 'Automated video editing platform with AI-powered content creation and optimization.',
      category: 'saas',
      features: ['AI Video Editing', 'Auto-captioning', 'Thumbnail Generation', 'Multi-format Export', 'Template Library', 'Brand Customization'],
      price: 'Starting at $199/month',
      marketPrice: '$350-800/month',
      benefits: ['Professional video content', 'Time-saving automation', 'Consistent branding', 'Multi-platform optimization'],
      link: 'https://ziontechgroup.com/zion-ai-video-editor'
    },
    {
      icon: Globe,
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with AI-powered language processing and cultural adaptation.',
      category: 'saas',
      features: ['100+ Language Support', 'Cultural Adaptation', 'Document Translation', 'Real-time Translation', 'Quality Assurance', 'API Integration'],
      price: 'Starting at $179/month',
      marketPrice: '$300-700/month',
      benefits: ['Global market reach', 'Accurate translations', 'Cultural sensitivity', 'Cost-effective localization'],
      link: 'https://ziontechgroup.com/zion-ai-translator-pro'
    },
    {
      icon: Code,
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated quality analysis and security scanning.',
      category: 'saas',
      features: ['Automated Code Review', 'Security Scanning', 'Performance Analysis', 'Best Practice Suggestions', 'Team Collaboration', 'Integration Support'],
      price: 'Starting at $159/month',
      marketPrice: '$250-600/month',
      benefits: ['Improved code quality', 'Faster development', 'Reduced bugs', 'Better security'],
      link: 'https://ziontechgroup.com/zion-ai-code-reviewer'
    },
    {
      icon: Users,
      title: 'Zion Customer Insights Pro',
      description: 'Advanced customer analytics platform with AI-powered behavior analysis and segmentation.',
      category: 'saas',
      features: ['Customer Segmentation', 'Behavior Analysis', 'Predictive Modeling', 'Churn Prediction', 'Personalization Engine', 'ROI Analytics'],
      price: 'Starting at $219/month',
      marketPrice: '$400-900/month',
      benefits: ['Better customer understanding', 'Improved retention', 'Personalized experiences', 'Data-driven decisions'],
      link: 'https://ziontechgroup.com/zion-customer-insights'
    },
    {
      icon: Mail,
      title: 'Zion AI Email Assistant',
      description: 'Intelligent email management with AI-powered sorting, responses, and scheduling.',
      category: 'saas',
      features: ['Smart Email Sorting', 'AI Response Suggestions', 'Meeting Scheduling', 'Priority Detection', 'Spam Filtering', 'Productivity Analytics'],
      price: 'Starting at $89/month',
      marketPrice: '$150-400/month',
      benefits: ['Improved email productivity', 'Faster responses', 'Better organization', 'Reduced email overload'],
      link: 'https://ziontechgroup.com/zion-ai-email-assistant'
    },
    {
      icon: Calendar,
      title: 'Zion AI Meeting Assistant',
      description: 'AI-powered meeting management with automated scheduling, transcription, and action items.',
      category: 'saas',
      features: ['Automated Scheduling', 'Meeting Transcription', 'Action Item Extraction', 'Follow-up Reminders', 'Meeting Analytics', 'Integration Support'],
      price: 'Starting at $139/month',
      marketPrice: '$250-500/month',
      benefits: ['Efficient meeting management', 'Better follow-through', 'Time savings', 'Improved productivity'],
      link: 'https://ziontechgroup.com/zion-ai-meeting-assistant'
    },
    {
      icon: Target,
      title: 'Zion AI SEO Optimizer',
      description: 'Comprehensive SEO optimization platform with AI-powered content analysis and ranking insights.',
      category: 'saas',
      features: ['Keyword Research', 'Content Optimization', 'Technical SEO', 'Ranking Tracking', 'Competitor Analysis', 'Performance Reporting'],
      price: 'Starting at $169/month',
      marketPrice: '$300-700/month',
      benefits: ['Improved search rankings', 'Better organic traffic', 'Content optimization', 'Competitive advantage'],
      link: 'https://ziontechgroup.com/zion-ai-seo-optimizer'
    },
    {
      icon: Database,
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with automated quality assurance.',
      category: 'saas',
      features: ['Automated Data Cleaning', 'Duplicate Detection', 'Data Validation', 'Format Standardization', 'Quality Scoring', 'Error Reporting'],
      price: 'Starting at $129/month',
      marketPrice: '$200-500/month',
      benefits: ['Improved data quality', 'Reduced manual work', 'Better analytics', 'Compliance ready'],
      link: 'https://ziontechgroup.com/zion-ai-data-cleaner'
    },
    {
      icon: FileText,
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis and management with risk assessment and compliance checking.',
      category: 'saas',
      features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Clause Extraction', 'Renewal Tracking', 'Legal Review'],
      price: 'Starting at $249/month',
      marketPrice: '$400-1000/month',
      benefits: ['Reduced legal risks', 'Faster contract review', 'Better compliance', 'Cost savings'],
      link: 'https://ziontechgroup.com/zion-ai-contract-analyzer'
    },
    {
      icon: CheckSquare,
      title: 'Zion AI Survey Builder',
      description: 'Intelligent survey creation platform with AI-powered question generation and analysis.',
      category: 'saas',
      features: ['AI Question Generation', 'Smart Survey Logic', 'Response Analysis', 'Sentiment Analysis', 'Custom Branding', 'Multi-channel Distribution'],
      price: 'Starting at $99/month',
      marketPrice: '$150-400/month',
      benefits: ['Better survey design', 'Higher response rates', 'Deeper insights', 'Professional surveys'],
      link: 'https://ziontechgroup.com/zion-ai-survey-builder'
    },
    {
      icon: DollarSign,
      title: 'Zion AI Accounting Assistant',
      description: 'AI-powered accounting platform with automated bookkeeping and financial analysis.',
      category: 'saas',
      features: ['Automated Bookkeeping', 'Expense Categorization', 'Financial Reporting', 'Tax Preparation', 'Invoice Processing', 'Compliance Monitoring'],
      price: 'Starting at $189/month',
      marketPrice: '$300-700/month',
      benefits: ['Reduced accounting costs', 'Improved accuracy', 'Faster reporting', 'Better compliance'],
      link: 'https://ziontechgroup.com/zion-ai-accounting-assistant'
    },
    {
      icon: Users,
      title: 'Zion AI Recruitment Pro',
      description: 'Intelligent recruitment platform with AI-powered candidate screening and matching.',
      category: 'saas',
      features: ['AI Candidate Screening', 'Resume Analysis', 'Skill Matching', 'Interview Scheduling', 'Background Checks', 'Onboarding Automation'],
      price: 'Starting at $199/month',
      marketPrice: '$350-800/month',
      benefits: ['Faster hiring process', 'Better candidate matches', 'Reduced bias', 'Improved efficiency'],
      link: 'https://ziontechgroup.com/zion-ai-recruitment-pro'
    },
    {
      icon: Shield,
      title: 'Zion AI Content Moderation',
      description: 'Automated content moderation platform with AI-powered inappropriate content detection.',
      category: 'saas',
      features: ['AI Content Detection', 'Multi-language Support', 'Real-time Moderation', 'Custom Rules', 'Analytics Dashboard', 'API Integration'],
      price: 'Starting at $159/month',
      marketPrice: '$250-600/month',
      benefits: ['Safer content environment', 'Reduced manual moderation', 'Consistent enforcement', 'Better user experience'],
      link: 'https://ziontechgroup.com/zion-ai-content-moderation'
    },
    {
      icon: Settings,
      title: 'Zion AI Predictive Maintenance',
      description: 'AI-powered equipment maintenance platform with predictive failure analysis and scheduling.',
      category: 'saas',
      features: ['Predictive Analytics', 'Failure Prediction', 'Maintenance Scheduling', 'Asset Tracking', 'Cost Optimization', 'Performance Monitoring'],
      price: 'Starting at $229/month',
      marketPrice: '$400-1000/month',
      benefits: ['Reduced downtime', 'Lower maintenance costs', 'Extended equipment life', 'Better planning'],
      link: 'https://ziontechgroup.com/zion-ai-predictive-maintenance'
    },
    {
      icon: Zap,
      title: 'Zion AI Energy Manager',
      description: 'Intelligent energy management platform with AI-powered optimization and cost reduction.',
      category: 'saas',
      features: ['Energy Monitoring', 'Usage Optimization', 'Cost Analysis', 'Renewable Integration', 'Predictive Modeling', 'Sustainability Reporting'],
      price: 'Starting at $179/month',
      marketPrice: '$300-700/month',
      benefits: ['Reduced energy costs', 'Better sustainability', 'Optimized usage', 'Environmental compliance'],
      link: 'https://ziontechgroup.com/zion-ai-energy-manager'
    },
    {
      icon: Package,
      title: 'Zion AI Supply Chain Optimizer',
      description: 'AI-powered supply chain optimization with demand forecasting and logistics management.',
      category: 'saas',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management', 'Risk Assessment', 'Cost Analysis'],
      price: 'Starting at $269/month',
      marketPrice: '$500-1200/month',
      benefits: ['Reduced supply chain costs', 'Better demand planning', 'Improved efficiency', 'Risk mitigation'],
      link: 'https://ziontechgroup.com/zion-ai-supply-chain-optimizer'
    },
    {
      icon: Shield,
      title: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection platform with machine learning algorithms and real-time monitoring.',
      category: 'saas',
      features: ['Real-time Detection', 'Machine Learning Models', 'Behavioral Analysis', 'Risk Scoring', 'Alert Management', 'Compliance Reporting'],
      price: 'Starting at $299/month',
      marketPrice: '$500-1500/month',
      benefits: ['Reduced fraud losses', 'Real-time protection', 'Lower false positives', 'Better compliance'],
      link: 'https://ziontechgroup.com/zion-ai-fraud-detector'
    },
    {
      icon: MessageSquare,
      title: 'Zion AI Customer Service Pro',
      description: 'Advanced customer service platform with AI-powered support automation and analytics.',
      category: 'saas',
      features: ['AI Support Automation', 'Multi-channel Support', 'Sentiment Analysis', 'Knowledge Base', 'Performance Analytics', 'Integration Support'],
      price: 'Starting at $219/month',
      marketPrice: '$400-900/month',
      benefits: ['Improved customer satisfaction', 'Reduced support costs', 'Faster response times', 'Better insights'],
      link: 'https://ziontechgroup.com/zion-ai-customer-service-pro'
    },
    {
      icon: Target,
      title: 'Zion AI Marketing Automation',
      description: 'Comprehensive marketing automation platform with AI-powered campaign optimization.',
      category: 'saas',
      features: ['Campaign Automation', 'Lead Scoring', 'Personalization', 'A/B Testing', 'Analytics Dashboard', 'Multi-channel Marketing'],
      price: 'Starting at $189/month',
      marketPrice: '$300-800/month',
      benefits: ['Improved campaign performance', 'Better lead quality', 'Automated workflows', 'Higher ROI'],
      link: 'https://ziontechgroup.com/zion-ai-marketing-automation'
    },
    {
      icon: FileText,
      title: 'Zion AI Document AI',
      description: 'Intelligent document processing platform with AI-powered extraction and analysis.',
      category: 'saas',
      features: ['Document Processing', 'Data Extraction', 'OCR Technology', 'Classification', 'Search & Retrieval', 'Workflow Automation'],
      price: 'Starting at $169/month',
      marketPrice: '$250-600/month',
      benefits: ['Faster document processing', 'Improved accuracy', 'Reduced manual work', 'Better organization'],
      link: 'https://ziontechgroup.com/zion-ai-document-ai'
    }
  ];
  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'ai', name: 'AI Services', count: services.filter(s => s.category === 'ai').length },
    { id: 'it', name: 'IT Services', count: services.filter(s => s.category === 'it').length },
    { id: 'saas', name: 'Micro SaaS', count: services.filter(s => s.category === 'saas').length }
  ]

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  })

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive range of AI, IT, and Micro SaaS services designed to transform your business." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 cyber-text neon-glow">
                Our Services
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Comprehensive solutions to transform your business with cutting-edge technology
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-8 md:mb-12">
              <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm sm:text-base"
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

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-4 md:p-6 hover:bg-slate-800/70 transition-all duration-300 group holographic-card-enhanced neon-glow floating h-full flex flex-col">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-white truncate">{service.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 mt-1">
                        <span className="text-cyan-400 font-semibold text-sm sm:text-base">{service.price}</span>
                        {service.marketPrice && (
                          <span className="text-gray-400 text-xs sm:text-sm line-through">{service.marketPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.benefits && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-auto">
                    <a
                      href={service.link || "/contact"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-colors group text-sm"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 text-center"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-12 md:mt-16 text-center">
              <div className="bg-slate-800/50 rounded-lg p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm md:text-base px-4">
                  Contact our experts for a free consultation and discover how our services can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="cyber-button bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 neon-glow text-sm md:text-base"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="cyber-button border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 neon-glow text-sm md:text-base"
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

export default ServicesPage;
