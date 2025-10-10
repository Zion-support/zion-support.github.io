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
  Target,
  Phone,
  Mail,
  Heart,
  DollarSign,
  Calendar,
  Package,
  Monitor,
  CheckSquare,
  Code
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
      link: 'https://ziontechgroup.com/ai-chatbot-builder',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
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
      link: 'https://ziontechgroup.com/ai-analytics',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
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
      link: 'https://ziontechgroup.com/ai-automation',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
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
      link: 'https://ziontechgroup.com/ai-computer-vision',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
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
      link: 'https://ziontechgroup.com/ai-fraud-detection',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Heart,
      title: 'AI Healthcare Solutions',
      description: 'Medical AI for diagnosis assistance, drug discovery, and patient care optimization.',
      category: 'ai',
      features: ['Medical Image Analysis', 'Drug Discovery', 'Patient Risk Assessment', 'Treatment Recommendations', 'Clinical Trial Optimization'],
      price: 'Starting at $799/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Improved diagnosis accuracy', 'Faster drug development', 'Better patient outcomes', 'Cost reduction'],
      link: 'https://ziontechgroup.com/ai-healthcare',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: DollarSign,
      title: 'AI Financial Services',
      description: 'Advanced AI for fraud detection, algorithmic trading, and financial risk management.',
      category: 'ai',
      features: ['Fraud Detection', 'Algorithmic Trading', 'Credit Risk Assessment', 'Market Prediction', 'Regulatory Compliance'],
      price: 'Starting at $699/month',
      marketPrice: '$1200-4000/month',
      benefits: ['Reduced fraud losses', 'Better trading performance', 'Risk mitigation', 'Compliance automation'],
      link: 'https://ziontechgroup.com/ai-financial-services',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Users,
      title: 'AI HR Solutions',
      description: 'Intelligent human resources management with AI-powered recruitment and analytics.',
      category: 'ai',
      features: ['Resume Screening', 'Candidate Matching', 'Performance Analytics', 'Predictive Attrition', 'Skills Gap Analysis'],
      price: 'Starting at $299/month',
      marketPrice: '$500-1500/month',
      benefits: ['Faster hiring process', 'Better candidate matching', 'Reduced HR workload', 'Data-driven insights'],
      link: 'https://ziontechgroup.com/ai-hr-solutions',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
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
      link: 'https://ziontechgroup.com/cloud-infrastructure',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
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
      link: 'https://ziontechgroup.com/cybersecurity-solutions',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
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
      link: 'https://ziontechgroup.com/database-management',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
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
      link: 'https://ziontechgroup.com/devops-cicd',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
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
      link: 'https://ziontechgroup.com/it-consulting',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
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
      link: 'https://ziontechgroup.com/web-development',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
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
      link: 'https://ziontechgroup.com/mobile-development',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
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
      link: 'https://ziontechgroup.com/zion-analytics-pro',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
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
      link: 'https://ziontechgroup.com/zion-chat-ai',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
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
      link: 'https://ziontechgroup.com/zion-invoice-genius',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
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
      link: 'https://ziontechgroup.com/zion-lead-magnet',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection for small to medium businesses.',
      category: 'saas',
      features: ['Real-time Threat Monitoring', 'Automated Security Scanning', 'Vulnerability Assessment', 'Incident Response', 'Compliance Reporting', 'Security Training'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
      benefits: ['24/7 security monitoring', 'Reduced security risks', 'Compliance automation', 'Expert security team'],
      link: 'https://ziontechgroup.com/zion-security-shield',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection.',
      category: 'saas',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Version Control', 'Cross-platform Sync', 'Compliance Ready'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['99.9% data protection', 'Automated recovery', 'Secure storage', 'Easy restoration'],
      link: 'https://ziontechgroup.com/zion-cloud-vault',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: FileText,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials.',
      category: 'saas',
      features: ['AI Content Generation', 'SEO Optimization', 'Multi-platform Publishing', 'Brand Voice Customization', 'Content Calendar', 'Performance Analytics'],
      price: 'Starting at $129/month',
      marketPrice: '$250-800/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      link: 'https://ziontechgroup.com/zion-content-studio',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Users,
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation.',
      category: 'saas',
      features: ['AI-powered Lead Scoring', 'Predictive Analytics', 'Automated Follow-ups', 'Sales Forecasting', 'Customer Segmentation', 'Integration Hub'],
      price: 'Starting at $179/month',
      marketPrice: '$300-1000/month',
      benefits: ['Increase sales by 40%', 'Better customer insights', 'Automated workflows', 'Predictive analytics'],
      link: 'https://ziontechgroup.com/zion-crm-intelligence',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Database,
      title: 'Zion Data Sync',
      description: 'Advanced data integration platform connecting all your business applications seamlessly.',
      category: 'saas',
      features: ['Real-time Data Sync', 'API Integration', 'Data Transformation', 'Error Handling', 'Monitoring Dashboard', 'Custom Connectors'],
      price: 'Starting at $159/month',
      marketPrice: '$300-900/month',
      benefits: ['Unified data view', 'Real-time synchronization', 'Reduced data errors', 'Automated workflows'],
      link: 'https://ziontechgroup.com/zion-data-sync',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Calendar,
      title: 'Zion Project Master',
      description: 'AI-powered project management with intelligent resource allocation and timeline optimization.',
      category: 'saas',
      features: ['AI Project Planning', 'Resource Optimization', 'Timeline Prediction', 'Risk Assessment', 'Team Collaboration', 'Progress Tracking'],
      price: 'Starting at $139/month',
      marketPrice: '$250-700/month',
      benefits: ['30% faster project delivery', 'Better resource utilization', 'Risk mitigation', 'Improved team collaboration'],
      link: 'https://ziontechgroup.com/zion-project-master',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Mail,
      title: 'Zion Email Automation',
      description: 'Intelligent email marketing platform with AI-powered personalization and automation.',
      category: 'saas',
      features: ['AI Personalization', 'Automated Campaigns', 'A/B Testing', 'Behavioral Triggers', 'Analytics Dashboard', 'Template Library'],
      price: 'Starting at $119/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase open rates by 50%', 'Automated campaigns', 'Better personalization', 'Detailed analytics'],
      link: 'https://ziontechgroup.com/zion-email-automation',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Package,
      title: 'Zion Inventory Smart',
      description: 'AI-powered inventory management with demand forecasting and automated reordering.',
      category: 'saas',
      features: ['Demand Forecasting', 'Automated Reordering', 'Stock Optimization', 'Multi-location Support', 'Supplier Integration', 'Analytics Dashboard'],
      price: 'Starting at $169/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduce inventory costs by 25%', 'Prevent stockouts', 'Automated reordering', 'Better demand planning'],
      link: 'https://ziontechgroup.com/zion-inventory-smart',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Settings,
      title: 'Zion Workflow Automation',
      description: 'No-code workflow automation platform for business process optimization.',
      category: 'saas',
      features: ['Visual Workflow Builder', 'API Integrations', 'Conditional Logic', 'Task Automation', 'Approval Workflows', 'Performance Analytics'],
      price: 'Starting at $149/month',
      marketPrice: '$250-700/month',
      benefits: ['Reduce manual work by 70%', 'Faster process execution', 'Error reduction', 'Better compliance'],
      link: 'https://ziontechgroup.com/zion-workflow-automation',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Monitor,
      title: 'Zion Performance Monitor',
      description: 'Real-time application and infrastructure monitoring with AI-powered insights.',
      category: 'saas',
      features: ['Real-time Monitoring', 'AI Anomaly Detection', 'Performance Analytics', 'Alert Management', 'Custom Dashboards', 'Historical Data'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
      benefits: ['99.9% uptime guarantee', 'Proactive issue detection', 'Performance optimization', 'Reduced downtime'],
      link: 'https://ziontechgroup.com/zion-performance-monitor',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: CheckSquare,
      title: 'Zion Compliance Manager',
      description: 'Automated compliance management for GDPR, HIPAA, SOX, and other regulatory requirements.',
      category: 'saas',
      features: ['Regulatory Compliance', 'Automated Auditing', 'Document Management', 'Risk Assessment', 'Training Modules', 'Reporting Dashboard'],
      price: 'Starting at $229/month',
      marketPrice: '$400-1000/month',
      benefits: ['Automated compliance', 'Reduced audit costs', 'Risk mitigation', 'Regulatory updates'],
      link: 'https://ziontechgroup.com/zion-compliance-manager',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Globe,
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management with content optimization and scheduling.',
      category: 'saas',
      features: ['AI Content Optimization', 'Multi-platform Scheduling', 'Engagement Analytics', 'Hashtag Research', 'Competitor Analysis', 'Team Collaboration'],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      benefits: ['Increase engagement by 60%', 'Automated posting', 'Better content strategy', 'Time savings'],
      link: 'https://ziontechgroup.com/zion-social-scheduler',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Eye,
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated content creation and optimization.',
      category: 'saas',
      features: ['AI Video Editing', 'Automated Subtitles', 'Content Optimization', 'Template Library', 'Multi-format Export', 'Collaboration Tools'],
      price: 'Starting at $179/month',
      marketPrice: '$300-800/month',
      benefits: ['Save 90% editing time', 'Professional quality', 'Automated features', 'Easy collaboration'],
      link: 'https://ziontechgroup.com/zion-ai-video-editor',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Globe,
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with AI-powered language processing and cultural adaptation.',
      category: 'saas',
      features: ['100+ Languages', 'Cultural Adaptation', 'Real-time Translation', 'Document Processing', 'Voice Translation', 'API Integration'],
      price: 'Starting at $139/month',
      marketPrice: '$250-700/month',
      benefits: ['99% accuracy', 'Cultural context', 'Real-time processing', 'Multi-format support'],
      link: 'https://ziontechgroup.com/zion-ai-translator-pro',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Code,
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated quality analysis and security scanning.',
      category: 'saas',
      features: ['Automated Code Review', 'Security Scanning', 'Quality Metrics', 'Performance Analysis', 'Best Practices', 'Team Collaboration'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Reduce bugs by 80%', 'Faster code reviews', 'Security compliance', 'Better code quality'],
      link: 'https://ziontechgroup.com/zion-ai-code-reviewer',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Users,
      title: 'Zion Customer Insights Pro',
      description: 'Advanced customer analytics platform with AI-powered insights and behavioral analysis.',
      category: 'saas',
      features: ['Customer Segmentation', 'Behavioral Analysis', 'Predictive Analytics', 'Churn Prediction', 'Lifetime Value', 'Personalization Engine'],
      price: 'Starting at $219/month',
      marketPrice: '$400-1000/month',
      benefits: ['Increase retention by 40%', 'Better customer insights', 'Predictive analytics', 'Personalized experiences'],
      link: 'https://ziontechgroup.com/zion-customer-insights',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Mail,
      title: 'Zion AI Email Assistant',
      description: 'Intelligent email management with AI-powered sorting, responses, and scheduling.',
      category: 'saas',
      features: ['Smart Email Sorting', 'AI Response Suggestions', 'Automated Scheduling', 'Priority Detection', 'Spam Filtering', 'Productivity Analytics'],
      price: 'Starting at $99/month',
      marketPrice: '$150-500/month',
      benefits: ['Save 5 hours per week', 'Better email organization', 'Automated responses', 'Improved productivity'],
      link: 'https://ziontechgroup.com/zion-ai-email-assistant',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Calendar,
      title: 'Zion AI Meeting Assistant',
      description: 'AI-powered meeting management with automated scheduling, transcription, and follow-ups.',
      category: 'saas',
      features: ['Automated Scheduling', 'Real-time Transcription', 'Action Item Extraction', 'Meeting Analytics', 'Calendar Integration', 'Follow-up Automation'],
      price: 'Starting at $149/month',
      marketPrice: '$250-700/month',
      benefits: ['Save 3 hours per week', 'Better meeting outcomes', 'Automated follow-ups', 'Detailed analytics'],
      link: 'https://ziontechgroup.com/zion-ai-meeting-assistant',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Target,
      title: 'Zion AI SEO Optimizer',
      description: 'Advanced SEO optimization platform with AI-powered content analysis and ranking improvement.',
      category: 'saas',
      features: ['AI Content Analysis', 'Keyword Research', 'Competitor Analysis', 'Technical SEO', 'Ranking Tracking', 'Content Optimization'],
      price: 'Starting at $179/month',
      marketPrice: '$300-800/month',
      benefits: ['Increase organic traffic by 150%', 'Better search rankings', 'Automated optimization', 'Competitive advantage'],
      link: 'https://ziontechgroup.com/zion-ai-seo-optimizer',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Database,
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with automated quality assurance.',
      category: 'saas',
      features: ['Automated Data Cleaning', 'Quality Validation', 'Duplicate Detection', 'Format Standardization', 'Error Correction', 'Data Enrichment'],
      price: 'Starting at $159/month',
      marketPrice: '$300-700/month',
      benefits: ['99% data accuracy', 'Automated cleaning', 'Reduced manual work', 'Better data quality'],
      link: 'https://ziontechgroup.com/zion-ai-data-cleaner',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: FileText,
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis and risk assessment platform for legal document review.',
      category: 'saas',
      features: ['Contract Analysis', 'Risk Assessment', 'Clause Extraction', 'Compliance Checking', 'Version Comparison', 'Legal Insights'],
      price: 'Starting at $299/month',
      marketPrice: '$500-1500/month',
      benefits: ['Reduce review time by 90%', 'Better risk assessment', 'Compliance automation', 'Legal insights'],
      link: 'https://ziontechgroup.com/zion-ai-contract-analyzer',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: CheckSquare,
      title: 'Zion AI Survey Builder',
      description: 'Intelligent survey creation platform with AI-powered question generation and analysis.',
      category: 'saas',
      features: ['AI Question Generation', 'Smart Survey Logic', 'Response Analysis', 'Sentiment Analysis', 'Custom Templates', 'Advanced Analytics'],
      price: 'Starting at $119/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase response rates by 40%', 'Better survey design', 'Automated analysis', 'Actionable insights'],
      link: 'https://ziontechgroup.com/zion-ai-survey-builder',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: DollarSign,
      title: 'Zion AI Accounting Assistant',
      description: 'AI-powered accounting platform with automated bookkeeping and financial analysis.',
      category: 'saas',
      features: ['Automated Bookkeeping', 'Expense Categorization', 'Financial Analysis', 'Tax Preparation', 'Invoice Processing', 'Compliance Reporting'],
      price: 'Starting at $189/month',
      marketPrice: '$300-800/month',
      benefits: ['Save 10 hours per week', 'Automated bookkeeping', 'Better financial insights', 'Tax compliance'],
      link: 'https://ziontechgroup.com/zion-ai-accounting-assistant',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Users,
      title: 'Zion AI Recruitment Pro',
      description: 'Advanced recruitment platform with AI-powered candidate screening and matching.',
      category: 'saas',
      features: ['AI Resume Screening', 'Candidate Matching', 'Interview Scheduling', 'Skills Assessment', 'Background Checks', 'Onboarding Automation'],
      price: 'Starting at $249/month',
      marketPrice: '$400-1000/month',
      benefits: ['Reduce hiring time by 60%', 'Better candidate matching', 'Automated screening', 'Improved quality'],
      link: 'https://ziontechgroup.com/zion-ai-recruitment-pro',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Shield,
      title: 'Zion AI Content Moderation',
      description: 'Automated content moderation platform with AI-powered filtering and compliance checking.',
      category: 'saas',
      features: ['AI Content Filtering', 'Spam Detection', 'Inappropriate Content', 'Brand Safety', 'Custom Rules', 'Real-time Monitoring'],
      price: 'Starting at $169/month',
      marketPrice: '$300-700/month',
      benefits: ['99% accuracy', 'Real-time moderation', 'Reduced manual work', 'Brand protection'],
      link: 'https://ziontechgroup.com/zion-ai-content-moderation',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Settings,
      title: 'Zion AI Predictive Maintenance',
      description: 'AI-powered equipment maintenance platform with predictive analytics and automated scheduling.',
      category: 'saas',
      features: ['Predictive Analytics', 'Equipment Monitoring', 'Maintenance Scheduling', 'Failure Prediction', 'Cost Optimization', 'Performance Tracking'],
      price: 'Starting at $279/month',
      marketPrice: '$500-1200/month',
      benefits: ['Reduce downtime by 50%', 'Preventive maintenance', 'Cost optimization', 'Better equipment life'],
      link: 'https://ziontechgroup.com/zion-ai-predictive-maintenance',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Zap,
      title: 'Zion AI Energy Manager',
      description: 'Intelligent energy management platform with AI-powered optimization and cost reduction.',
      category: 'saas',
      features: ['Energy Monitoring', 'Usage Optimization', 'Cost Analysis', 'Predictive Modeling', 'Automated Controls', 'Sustainability Reporting'],
      price: 'Starting at $199/month',
      marketPrice: '$350-800/month',
      benefits: ['Reduce energy costs by 30%', 'Optimized usage', 'Sustainability goals', 'Automated controls'],
      link: 'https://ziontechgroup.com/zion-ai-energy-manager',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Package,
      title: 'Zion AI Supply Chain Optimizer',
      description: 'AI-powered supply chain management with demand forecasting and logistics optimization.',
      category: 'saas',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management', 'Risk Assessment', 'Cost Optimization'],
      price: 'Starting at $329/month',
      marketPrice: '$600-1500/month',
      benefits: ['Reduce costs by 25%', 'Better demand planning', 'Optimized logistics', 'Risk mitigation'],
      link: 'https://ziontechgroup.com/zion-ai-supply-chain-optimizer',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Shield,
      title: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection platform with machine learning algorithms and real-time monitoring.',
      category: 'saas',
      features: ['Real-time Detection', 'Machine Learning Models', 'Behavioral Analysis', 'Risk Scoring', 'Alert Management', 'Compliance Reporting'],
      price: 'Starting at $249/month',
      marketPrice: '$400-1000/month',
      benefits: ['Reduce fraud by 90%', 'Real-time protection', 'Automated detection', 'Compliance ready'],
      link: 'https://ziontechgroup.com/zion-ai-fraud-detector',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: MessageSquare,
      title: 'Zion AI Customer Service Pro',
      description: 'Advanced customer service platform with AI-powered support and sentiment analysis.',
      category: 'saas',
      features: ['AI Support Agents', 'Sentiment Analysis', 'Multi-channel Support', 'Knowledge Base', 'Escalation Management', 'Performance Analytics'],
      price: 'Starting at $179/month',
      marketPrice: '$300-800/month',
      benefits: ['Improve satisfaction by 50%', '24/7 support', 'Faster resolution', 'Better insights'],
      link: 'https://ziontechgroup.com/zion-ai-customer-service-pro',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Target,
      title: 'Zion AI Marketing Automation',
      description: 'Comprehensive marketing automation platform with AI-powered campaigns and personalization.',
      category: 'saas',
      features: ['AI Campaign Optimization', 'Personalization Engine', 'Multi-channel Marketing', 'Lead Scoring', 'A/B Testing', 'ROI Analytics'],
      price: 'Starting at $219/month',
      marketPrice: '$400-1000/month',
      benefits: ['Increase conversions by 80%', 'Automated campaigns', 'Better personalization', 'ROI optimization'],
      link: 'https://ziontechgroup.com/zion-ai-marketing-automation',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: FileText,
      title: 'Zion AI Document AI',
      description: 'Advanced document processing platform with AI-powered extraction and analysis.',
      category: 'saas',
      features: ['Document Processing', 'Data Extraction', 'OCR Technology', 'Classification', 'Search & Retrieval', 'Workflow Automation'],
      price: 'Starting at $159/month',
      marketPrice: '$300-700/month',
      benefits: ['Process 1000s of documents', 'Automated extraction', 'Better accuracy', 'Time savings'],
      link: 'https://ziontechgroup.com/zion-ai-document-ai',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
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
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                Our Services
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive solutions to transform your business with cutting-edge technology, AI, and innovative micro SAAS platforms
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-cyan-400">
                <span className="px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20">50+ AI Services</span>
                <span className="px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20">30+ IT Solutions</span>
                <span className="px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">40+ Micro SAAS</span>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="mb-16">
              <div className="cyber-card-enhanced p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <Filter className="text-cyan-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-6 py-4 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 min-w-[200px]"
                    >
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-400">
                  Showing {filteredServices.length} of {services.length} services
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="cyber-card-enhanced holographic-card-enhanced p-6 hover:glow transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                        {service.marketPrice && (
                          <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
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
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                      <a
                        href={`mailto:${service.contact}?subject=Quote Request for ${service.title}`}
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                      >
                        Get Quote
                      </a>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <a
                        href={`tel:${service.phone}`}
                        className="flex items-center hover:text-cyan-400 transition-colors"
                      >
                        <Phone className="w-3 h-3 mr-1" />
                        {service.phone}
                      </a>
                      <a
                        href={`mailto:${service.contact}`}
                        className="flex items-center hover:text-cyan-400 transition-colors"
                      >
                        <Mail className="w-3 h-3 mr-1" />
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="cyber-card-enhanced holographic-card-enhanced p-8 glow">
                <h2 className="text-3xl font-bold text-white mb-4 neon-text-enhanced">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                  Contact our experts for a free consultation and discover how our services can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
                <div className="mt-6 text-sm text-gray-400">
                  <p>📧 Email: kleber@ziontechgroup.com</p>
                  <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
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
