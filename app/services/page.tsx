'use client';
import React, {useState}from 'react';
import {Helmet}}from 'react-helmet-async';
import {Brain,}
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
  Target;}from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {,
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // AI Services;
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
      phone: '+1 302 464 0950'},
    {icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform and predictive modeling.',
      category: 'ai',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Anomaly Detection', 'Custom Data Models'],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization'],
      link: 'https://ziontechgroup.com/ai-analytics',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Zap,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows for maximum efficiency.',
      category: 'ai',
      features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling', 'Performance Monitoring'],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation'],
      link: 'https://ziontechgroup.com/ai-automation',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Eye,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation across industries.',
      category: 'ai',
      features: ['Object Detection', 'Quality Control Automation', 'Facial Recognition', 'Video Analytics', 'Real-time Processing'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-5000/month',
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction'],
      link: 'https://ziontechgroup.com/ai-computer-vision',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Shield,
      title: 'AI Fraud Detection',
      description: 'Advanced machine learning algorithms to detect and prevent fraudulent activities in real-time.',
      category: 'ai',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Anomaly Detection', 'Automated Alerts'],
      price: 'Starting at $799/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Reduce fraud losses by 85%', 'Real-time protection', 'False positive reduction', 'Compliance ready'],
      link: 'https://ziontechgroup.com/ai-fraud-detection',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    
    // IT Services;
    {icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services.',
      category: 'it',
      features: ['Cloud Architecture Design', 'Multi-cloud Strategies', 'Cost Optimization', 'Disaster Recovery', 'Auto-scaling', 'Security Compliance'],
      price: 'Starting at $2,500/month',
      marketPrice: '$4000-15000/month',
      benefits: ['99.9% uptime guarantee', 'Cost reduction up to 40%', 'Scalable infrastructure', 'Expert migration support'],
      link: 'https://ziontechgroup.com/cloud-infrastructure',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response.',
      category: 'it',
      features: ['Threat Detection & Response', 'Vulnerability Assessments', 'Penetration Testing', 'Security Monitoring', 'Compliance Management', 'Employee Training'],
      price: 'Starting at $1,800/month',
      marketPrice: '$3000-12000/month',
      benefits: ['24/7 security monitoring', 'Reduced security incidents', 'Compliance assurance', 'Expert security team'],
      link: 'https://ziontechgroup.com/cybersecurity-solutions',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Database,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems.',
      category: 'it',
      features: ['Database Design & Optimization', 'Performance Tuning', 'Backup & Recovery', 'Data Migration', 'Security Hardening', 'Monitoring & Maintenance'],
      price: 'Starting at $1,200/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Improved performance', 'Data security', 'Automated backups', 'Expert DBA support'],
      link: 'https://ziontechgroup.com/database-management',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code.',
      category: 'it',
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging', 'Automated Testing', 'Deployment Automation'],
      price: 'Starting at $2,200/month',
      marketPrice: '$3500-10000/month',
      benefits: ['Faster deployments', 'Reduced downtime', 'Improved code quality', 'Automated workflows'],
      link: 'https://ziontechgroup.com/devops-cicd',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Users,
      title: 'IT Consulting',
      description: 'Strategic IT consulting and digital transformation services for enterprise organizations.',
      category: 'it',
      features: ['IT Strategy Development', 'Technology Assessment', 'Digital Transformation Planning', 'Vendor Evaluation', 'Process Optimization', 'Change Management'],
      price: 'Starting at $200/hour',
      marketPrice: '$300-800/hour',
      benefits: ['Strategic guidance', 'Cost optimization', 'Technology alignment', 'Competitive advantage'],
      link: 'https://ziontechgroup.com/it-consulting',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    
    // Micro SaaS - Real Business Solutions;
    {icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling.',
      category: 'saas',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Multi-tenant Architecture'],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      link: 'https://ziontechgroup.com/zion-analytics-pro',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support.',
      category: 'saas',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing', 'Live Agent Handoff', 'Multi-language Support'],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation'],
      link: 'https://ziontechgroup.com/zion-chat-ai',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: FileText,
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing, payment tracking, and tax calculation.',
      category: 'saas',
      features: ['AI-powered Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking', 'Tax Calculation', 'Client Portal'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice creation time', 'Reduce payment delays', 'Automated follow-ups', 'Professional invoices'],
      link: 'https://ziontechgroup.com/zion-invoice-genius',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Target,
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring and automated nurturing.',
      category: 'saas',
      features: ['AI-powered Lead Scoring', 'Multi-channel Lead Capture', 'Automated Lead Nurturing', 'CRM Integration', 'Advanced Analytics', 'A/B Testing'],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase qualified leads by 300%', 'Automated lead nurturing', 'Better conversion rates', 'ROI optimization'],
      link: 'https://ziontechgroup.com/zion-lead-magnet',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Users,
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automated workflow optimization.',
      category: 'saas',
      features: ['AI-powered Lead Scoring', 'Predictive Analytics', 'Automated Follow-ups', 'Sales Forecasting', 'Customer Segmentation', 'Integration Hub'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Increase sales by 35%', 'Automated lead management', 'Better customer insights', 'Streamlined workflows'],
      link: 'https://ziontechgroup.com/zion-crm-intelligence',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Calendar,
      title: 'Zion Project Master',
      description: 'AI-powered project management platform with intelligent resource allocation and automated progress tracking.',
      category: 'saas',
      features: ['AI Resource Allocation', 'Automated Progress Tracking', 'Risk Assessment', 'Team Collaboration', 'Time Tracking', 'Budget Management'],
      price: 'Starting at $69/month',
      marketPrice: '$120-350/month',
      benefits: ['30% faster project delivery', 'Reduced project risks', 'Better resource utilization', 'Automated reporting'],
      link: 'https://ziontechgroup.com/zion-project-master',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Mail,
      title: 'Zion Email Automation',
      description: 'Intelligent email marketing platform with AI-powered personalization and automated campaign optimization.',
      category: 'saas',
      features: ['AI Personalization', 'Automated Campaigns', 'A/B Testing', 'Email Analytics', 'List Management', 'Template Builder'],
      price: 'Starting at $59/month',
      marketPrice: '$100-300/month',
      benefits: ['40% higher open rates', 'Automated campaigns', 'Personalized content', 'Advanced analytics'],
      link: 'https://ziontechgroup.com/zion-email-automation',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Package,
      title: 'Zion Inventory Smart',
      description: 'AI-powered inventory management with predictive analytics, automated reordering, and demand forecasting.',
      category: 'saas',
      features: ['Predictive Analytics', 'Automated Reordering', 'Demand Forecasting', 'Multi-location Support', 'Barcode Scanning', 'Integration APIs'],
      price: 'Starting at $89/month',
      marketPrice: '$150-450/month',
      benefits: ['Reduce inventory costs by 25%', 'Prevent stockouts', 'Automated reordering', 'Better demand planning'],
      link: 'https://ziontechgroup.com/zion-inventory-smart',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Settings,
      title: 'Zion Workflow Automation',
      description: 'No-code workflow automation platform with AI-powered process optimization and intelligent task routing.',
      category: 'saas',
      features: ['No-code Builder', 'AI Process Optimization', 'Task Automation', 'Integration Hub', 'Custom Triggers', 'Analytics Dashboard'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Save 50% manual work', 'Faster process execution', 'Reduced errors', 'Scalable automation'],
      link: 'https://ziontechgroup.com/zion-workflow-automation',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Monitor,
      title: 'Zion Performance Monitor',
      description: 'Real-time application and infrastructure monitoring with AI-powered anomaly detection and automated alerting.',
      category: 'saas',
      features: ['Real-time Monitoring', 'AI Anomaly Detection', 'Automated Alerting', 'Performance Analytics', 'Uptime Tracking', 'Custom Dashboards'],
      price: 'Starting at $99/month',
      marketPrice: '$200-500/month',
      benefits: ['99.9% uptime guarantee', 'Proactive issue detection', 'Reduced downtime', 'Better performance insights'],
      link: 'https://ziontechgroup.com/zion-performance-monitor',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: CheckSquare,
      title: 'Zion Compliance Manager',
      description: 'Automated compliance management platform with AI-powered risk assessment and regulatory reporting.',
      category: 'saas',
      features: ['AI Risk Assessment', 'Automated Reporting', 'Compliance Tracking', 'Audit Trail', 'Regulatory Updates', 'Document Management'],
      price: 'Starting at $129/month',
      marketPrice: '$250-600/month',
      benefits: ['Reduce compliance costs by 60%', 'Automated reporting', 'Risk mitigation', 'Regulatory compliance'],
      link: 'https://ziontechgroup.com/zion-compliance-manager',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Globe,
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management platform with intelligent content scheduling and performance optimization.',
      category: 'saas',
      features: ['AI Content Scheduling', 'Multi-platform Management', 'Performance Analytics', 'Content Calendar', 'Hashtag Optimization', 'Engagement Tracking'],
      price: 'Starting at $69/month',
      marketPrice: '$120-350/month',
      benefits: ['Increase engagement by 45%', 'Automated scheduling', 'Better content performance', 'Time-saving management'],
      link: 'https://ziontechgroup.com/zion-social-scheduler',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Eye,
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing, intelligent scene detection, and smart content optimization.',
      category: 'saas',
      features: ['AI Auto-editing', 'Scene Detection', 'Smart Cuts', 'Color Correction', 'Audio Enhancement', 'Export Optimization'],
      price: 'Starting at $89/month',
      marketPrice: '$150-400/month',
      benefits: ['Save 80% editing time', 'Professional quality', 'Automated editing', 'Easy-to-use interface'],
      link: 'https://ziontechgroup.com/zion-ai-video-editor',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Globe,
      title: 'Zion AI Translator Pro',
      description: 'Advanced AI translation platform with real-time translation, context understanding, and multi-language support.',
      category: 'saas',
      features: ['Real-time Translation', 'Context Understanding', 'Multi-language Support', 'Document Translation', 'Voice Translation', 'API Integration'],
      price: 'Starting at $59/month',
      marketPrice: '$100-300/month',
      benefits: ['99% translation accuracy', 'Real-time processing', 'Multi-language support', 'Easy integration'],
      link: 'https://ziontechgroup.com/zion-ai-translator-pro',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Code,
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with AI-powered analysis, security scanning, and automated suggestions.',
      category: 'saas',
      features: ['AI Code Analysis', 'Security Scanning', 'Performance Optimization', 'Bug Detection', 'Code Quality Metrics', 'Team Collaboration'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Reduce bugs by 70%', 'Faster code reviews', 'Security compliance', 'Better code quality'],
      link: 'https://ziontechgroup.com/zion-ai-code-reviewer',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Users,
      title: 'Zion Customer Insights Pro',
      description: 'AI-powered customer analytics platform with behavioral analysis, sentiment tracking, and predictive insights.',
      category: 'saas',
      features: ['Behavioral Analysis', 'Sentiment Tracking', 'Predictive Insights', 'Customer Segmentation', 'Churn Prediction', 'ROI Analytics'],
      price: 'Starting at $99/month',
      marketPrice: '$200-500/month',
      benefits: ['Increase customer retention by 40%', 'Better customer understanding', 'Predictive insights', 'Data-driven decisions'],
      link: 'https://ziontechgroup.com/zion-customer-insights',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Mail,
      title: 'Zion AI Email Assistant',
      description: 'Smart email management platform with AI-powered sorting, automated responses, and intelligent prioritization.',
      category: 'saas',
      features: ['AI Email Sorting', 'Automated Responses', 'Priority Detection', 'Spam Filtering', 'Email Analytics', 'Integration Hub'],
      price: 'Starting at $49/month',
      marketPrice: '$80-250/month',
      benefits: ['Save 3 hours daily', 'Better email organization', 'Automated responses', 'Improved productivity'],
      link: 'https://ziontechgroup.com/zion-ai-email-assistant',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Calendar,
      title: 'Zion AI Meeting Assistant',
      description: 'Intelligent meeting management with AI-powered scheduling, transcription, and action item tracking.',
      category: 'saas',
      features: ['AI Scheduling', 'Meeting Transcription', 'Action Item Tracking', 'Meeting Analytics', 'Calendar Integration', 'Follow-up Automation'],
      price: 'Starting at $69/month',
      marketPrice: '$120-350/month',
      benefits: ['Save 2 hours per meeting', 'Better meeting outcomes', 'Automated follow-ups', 'Improved productivity'],
      link: 'https://ziontechgroup.com/zion-ai-meeting-assistant',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Target,
      title: 'Zion AI SEO Optimizer',
      description: 'AI-powered SEO optimization platform with automated keyword research, content optimization, and ranking tracking.',
      category: 'saas',
      features: ['AI Keyword Research', 'Content Optimization', 'Ranking Tracking', 'Competitor Analysis', 'Technical SEO', 'Performance Analytics'],
      price: 'Starting at $89/month',
      marketPrice: '$150-450/month',
      benefits: ['Increase organic traffic by 60%', 'Automated optimization', 'Better search rankings', 'Competitive advantage'],
      link: 'https://ziontechgroup.com/zion-ai-seo-optimizer',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Database,
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with AI-powered error detection and automated data quality improvement.',
      category: 'saas',
      features: ['AI Error Detection', 'Data Validation', 'Duplicate Removal', 'Format Standardization', 'Quality Metrics', 'API Integration'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Improve data quality by 95%', 'Automated cleaning', 'Reduce manual work', 'Better data accuracy'],
      link: 'https://ziontechgroup.com/zion-ai-data-cleaner',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: FileText,
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis platform with automated review, risk assessment, and compliance checking.',
      category: 'saas',
      features: ['AI Contract Review', 'Risk Assessment', 'Compliance Checking', 'Clause Analysis', 'Automated Summaries', 'Integration APIs'],
      price: 'Starting at $129/month',
      marketPrice: '$250-600/month',
      benefits: ['Reduce review time by 80%', 'Better risk identification', 'Compliance assurance', 'Faster contract processing'],
      link: 'https://ziontechgroup.com/zion-ai-contract-analyzer',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: CheckSquare,
      title: 'Zion AI Survey Builder',
      description: 'Intelligent survey creation platform with AI-powered question generation and automated response analysis.',
      category: 'saas',
      features: ['AI Question Generation', 'Response Analysis', 'Survey Templates', 'Multi-channel Distribution', 'Real-time Analytics', 'Integration Hub'],
      price: 'Starting at $59/month',
      marketPrice: '$100-300/month',
      benefits: ['Increase response rates by 50%', 'Better survey design', 'Automated analysis', 'Actionable insights'],
      link: 'https://ziontechgroup.com/zion-ai-survey-builder',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: DollarSign,
      title: 'Zion AI Accounting Assistant',
      description: 'AI-powered accounting platform with automated bookkeeping, expense tracking, and financial reporting.',
      category: 'saas',
      features: ['Automated Bookkeeping', 'Expense Tracking', 'Financial Reporting', 'Tax Preparation', 'Invoice Management', 'Bank Integration'],
      price: 'Starting at $99/month',
      marketPrice: '$200-500/month',
      benefits: ['Save 10 hours weekly', 'Automated bookkeeping', 'Better financial insights', 'Tax compliance'],
      link: 'https://ziontechgroup.com/zion-ai-accounting-assistant',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Users,
      title: 'Zion AI Recruitment Pro',
      description: 'Intelligent recruitment platform with AI-powered candidate screening, interview scheduling, and talent matching.',
      category: 'saas',
      features: ['AI Candidate Screening', 'Interview Scheduling', 'Talent Matching', 'Resume Analysis', 'Skill Assessment', 'Team Collaboration'],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduce hiring time by 60%', 'Better candidate matching', 'Automated screening', 'Improved hiring quality'],
      link: 'https://ziontechgroup.com/zion-ai-recruitment-pro',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Shield,
      title: 'Zion AI Content Moderation',
      description: 'AI-powered content moderation platform with automated filtering, sentiment analysis, and compliance monitoring.',
      category: 'saas',
      features: ['AI Content Filtering', 'Sentiment Analysis', 'Compliance Monitoring', 'Real-time Moderation', 'Custom Rules', 'Analytics Dashboard'],
      price: 'Starting at $89/month',
      marketPrice: '$150-450/month',
      benefits: ['Reduce moderation costs by 70%', '24/7 content monitoring', 'Consistent moderation', 'Better user experience'],
      link: 'https://ziontechgroup.com/zion-ai-content-moderation',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Settings,
      title: 'Zion AI Predictive Maintenance',
      description: 'AI-powered equipment maintenance platform with predictive analytics, failure prediction, and automated scheduling.',
      category: 'saas',
      features: ['Predictive Analytics', 'Failure Prediction', 'Maintenance Scheduling', 'Equipment Monitoring', 'Cost Optimization', 'Integration APIs'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Reduce downtime by 50%', 'Prevent equipment failures', 'Optimize maintenance costs', 'Better asset management'],
      link: 'https://ziontechgroup.com/zion-ai-predictive-maintenance',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Zap,
      title: 'Zion AI Energy Manager',
      description: 'Intelligent energy management platform with AI-powered optimization, consumption tracking, and cost reduction.',
      category: 'saas',
      features: ['Energy Optimization', 'Consumption Tracking', 'Cost Analysis', 'Predictive Modeling', 'Automated Controls', 'Sustainability Reporting'],
      price: 'Starting at $119/month',
      marketPrice: '$250-600/month',
      benefits: ['Reduce energy costs by 30%', 'Better energy efficiency', 'Automated optimization', 'Sustainability compliance'],
      link: 'https://ziontechgroup.com/zion-ai-energy-manager',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Package,
      title: 'Zion AI Supply Chain Optimizer',
      description: 'AI-powered supply chain optimization with demand forecasting, inventory optimization, and logistics planning.',
      category: 'saas',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Logistics Planning', 'Supplier Management', 'Risk Assessment', 'Cost Analysis'],
      price: 'Starting at $179/month',
      marketPrice: '$350-900/month',
      benefits: ['Reduce supply chain costs by 25%', 'Better demand planning', 'Optimized inventory', 'Improved efficiency'],
      link: 'https://ziontechgroup.com/zion-ai-supply-chain-optimizer',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Shield,
      title: 'Zion AI Fraud Detector',
      description: 'Advanced AI fraud detection platform with real-time monitoring, behavioral analysis, and automated prevention.',
      category: 'saas',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Automated Alerts', 'Pattern Recognition', 'Integration APIs'],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduce fraud losses by 85%', 'Real-time protection', 'Automated detection', 'Better risk management'],
      link: 'https://ziontechgroup.com/zion-ai-fraud-detector',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: MessageSquare,
      title: 'Zion AI Customer Service Pro',
      description: 'Advanced AI customer service platform with intelligent routing, sentiment analysis, and automated resolution.',
      category: 'saas',
      features: ['Intelligent Routing', 'Sentiment Analysis', 'Automated Resolution', 'Multi-channel Support', 'Knowledge Base', 'Performance Analytics'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Increase satisfaction by 45%', 'Faster resolution times', 'Better customer insights', 'Reduced support costs'],
      link: 'https://ziontechgroup.com/zion-ai-customer-service-pro',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: Target,
      title: 'Zion AI Marketing Automation',
      description: 'Comprehensive AI marketing automation platform with intelligent campaigns, personalization, and performance optimization.',
      category: 'saas',
      features: ['AI Campaign Optimization', 'Personalization Engine', 'Multi-channel Marketing', 'Lead Scoring', 'A/B Testing', 'ROI Analytics'],
      price: 'Starting at $159/month',
      marketPrice: '$300-750/month',
      benefits: ['Increase conversions by 60%', 'Automated campaigns', 'Better personalization', 'Higher ROI'],
      link: 'https://ziontechgroup.com/zion-ai-marketing-automation',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
    {icon: FileText,
      title: 'Zion AI Document AI',
      description: 'Intelligent document processing platform with AI-powered extraction, analysis, and automated workflow management.',
      category: 'saas',
      features: ['AI Document Extraction', 'Content Analysis', 'Workflow Automation', 'OCR Technology', 'Data Validation', 'Integration APIs'],
      price: 'Starting at $89/month',
      marketPrice: '$150-450/month',
      benefits: ['Reduce processing time by 90%', 'Automated extraction', 'Better accuracy', 'Streamlined workflows'],
      link: 'https://ziontechgroup.com/zion-ai-document-ai',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'},
  ];
  const categories = [
    {id: 'all', name: 'All Services', count: services.length ,},
    {id: 'ai', name: 'AI Services', count: services.filter(s => s.category === 'ai').length ,},
    {id: 'it', name: 'IT Services', count: services.filter(s => s.category === 'it').length ,},
    {id: 'saas', name: 'Micro SaaS', count: services.filter(s => s.category === 'saas').length ,}]

  const filteredServices = services.filter(service => {)
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;})

  return(<>)
      <Helmet />
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive range of AI, IT, and Micro SaaS services designed to transform your business." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">{/* Header */</div>} <div className="text-center mb-12">
              <h1 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text-enhanced">,</h1>
                Our Services;
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive solutions to transform your business with cutting-edge technology;</p>
              </p>
            </div>

            {/* Search and Filter */} <div className="mb-12">
              <div className="flex flex-col md: flex-row gap-4 mb-8">,</div>
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input;
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}onChange={(e) => setSearchTerm(e.target.value)}className="input-cyber w-full pl-10 pr-4 py-3",
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select;
                    value={selectedCategory}onChange={(e) => setSelectedCategory(e.target.value)}className="input-cyber px-4 py-3",
                  >
                    {categories.map(category => ()
                      <option key={category.id}value={category.id}>
                        {category.name}({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Services Grid */} <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,</div>
              {filteredServices.map((service, index) => (
                <div key={index}className="cyber-card-enhanced p-6 group">,</div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover: scale-110 transition-transform glow">,</div>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-cyan-400 font-semibold">{service.price</span>}</span>
                        {service.marketPrice && (
                          <span className="text-gray-400 text-sm line-through">{service.marketPrice</span>}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description</p>} </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features: </h4>,
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex}className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature} </li>
                      ))}
                    </ul>
                  </div>

                  {service.benefits && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits: </h4>,
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex}className="flex items-center text-sm text-green-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit} </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <a;
                      href={service.link || "/contact"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover: text-cyan-300 transition-colors",
                    >
                      Learn More;
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a;
                      href={`mailto:${service.contact}?subject=Quote Request for ${service.title}`}
                      className="btn-cyber text-sm px-4 py-2",
                    >
                      Get Quote;
                    </a>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="mt-4 pt-4 border-t border-gray-600">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <a href={`mailto:${service.contact}`} className="hover:text-cyan-400 transition-colors">
                        {service.contact}
                      </a>
                      <a href={`tel:${service.phone}`} className="hover:text-cyan-400 transition-colors">
                        {service.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */} <div className="mt-16 text-center">
              <div className="holographic-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Contact our experts for a free consultation and discover how our services can transform your business.</p>
                </p>
                <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
                  <a;
                    href="mailto:kleber@ziontechgroup.com?subject=Free Consultation Request"
                    className="btn-holographic px-8 py-3",
                  >
                    Get Free Consultation;
                  </a>
                  <a;
                    href="tel: +13024640950",
                    className="btn-cyber px-8 py-3",
                  >
                    Call: (302) 464-0950;,
                  </a>
                </div>
                <div className="mt-6 text-sm text-gray-400">
                  <p>Email: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008, Middletown DE 19709</p>
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
