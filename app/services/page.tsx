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
      link: 'https://ziontechgroup.com/ai-data-analytics'
    },
    {
      icon: Zap,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows for maximum efficiency.',
      category: 'ai',
      features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling', 'Performance Monitoring'],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation']
    },
    {
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation across industries.',
      category: 'ai',
      features: ['Object Detection', 'Quality Control Automation', 'Facial Recognition', 'Video Analytics', 'Real-time Processing'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-5000/month',
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction']
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
    
    // Additional Real AI Services
    {
      icon: Heart,
      title: 'AI Healthcare Diagnostics',
      description: 'Advanced medical AI for diagnostic imaging, patient monitoring, and treatment recommendations.',
      category: 'ai',
      features: ['Medical Image Analysis', 'Patient Monitoring', 'Treatment Recommendations', 'Drug Discovery', 'Clinical Decision Support', 'Predictive Analytics'],
      price: 'Starting at $1,500/month',
      marketPrice: '$3000-15000/month',
      benefits: ['Improved diagnostic accuracy', 'Faster diagnosis', 'Better patient outcomes', 'Cost reduction'],
      link: 'https://ziontechgroup.com/ai-healthcare-diagnostics'
    },
    {
      icon: DollarSign,
      title: 'AI Financial Forecasting',
      description: 'Advanced financial modeling and forecasting with AI-powered market analysis and risk assessment.',
      category: 'ai',
      features: ['Market Analysis', 'Risk Assessment', 'Portfolio Optimization', 'Algorithmic Trading', 'Credit Scoring', 'Fraud Prevention'],
      price: 'Starting at $999/month',
      marketPrice: '$2000-10000/month',
      benefits: ['Better investment decisions', 'Risk mitigation', 'Automated trading', 'Improved returns'],
      link: 'https://ziontechgroup.com/ai-financial-forecasting'
    },
    {
      icon: Users,
      title: 'AI Customer Service Pro',
      description: 'Enterprise-grade AI customer service with advanced NLP, sentiment analysis, and multi-channel support.',
      category: 'ai',
      features: ['Advanced NLP', 'Sentiment Analysis', 'Multi-channel Support', 'Escalation Management', 'Performance Analytics', 'Custom Training'],
      price: 'Starting at $599/month',
      marketPrice: '$1200-5000/month',
      benefits: ['24/7 customer support', 'Improved satisfaction', 'Cost reduction', 'Scalable solutions'],
      link: 'https://ziontechgroup.com/ai-customer-service-pro'
    },
    {
      icon: FileText,
      title: 'AI Content Moderation',
      description: 'Automated content moderation with AI-powered detection of inappropriate content and policy violations.',
      category: 'ai',
      features: ['Content Detection', 'Policy Enforcement', 'Real-time Moderation', 'Multi-language Support', 'Custom Rules', 'Analytics Dashboard'],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Automated moderation', 'Consistent enforcement', 'Reduced manual work', 'Better user experience'],
      link: 'https://ziontechgroup.com/ai-content-moderation'
    },
    {
      icon: BarChart3,
      title: 'AI Predictive Analytics',
      description: 'Advanced predictive modeling for business forecasting, demand prediction, and trend analysis.',
      category: 'ai',
      features: ['Demand Forecasting', 'Trend Analysis', 'Predictive Modeling', 'Scenario Planning', 'Risk Assessment', 'Performance Optimization'],
      price: 'Starting at $699/month',
      marketPrice: '$1400-6000/month',
      benefits: ['Accurate predictions', 'Better planning', 'Risk mitigation', 'Competitive advantage'],
      link: 'https://ziontechgroup.com/ai-predictive-analytics'
    },
    {
      icon: Mic,
      title: 'AI Voice Recognition',
      description: 'Advanced voice recognition and speech processing for transcription, commands, and voice analytics.',
      category: 'ai',
      features: ['Speech-to-Text', 'Voice Commands', 'Speaker Identification', 'Emotion Detection', 'Multi-language Support', 'Real-time Processing'],
      price: 'Starting at $299/month',
      marketPrice: '$600-2500/month',
      benefits: ['Hands-free operation', 'Improved accessibility', 'Voice automation', 'Better user experience'],
      link: 'https://ziontechgroup.com/ai-voice-recognition'
    },
    {
      icon: Eye,
      title: 'AI Image Recognition',
      description: 'Advanced computer vision for object detection, facial recognition, and image classification.',
      category: 'ai',
      features: ['Object Detection', 'Facial Recognition', 'Image Classification', 'Quality Control', 'Real-time Processing', 'Custom Models'],
      price: 'Starting at $499/month',
      marketPrice: '$1000-4000/month',
      benefits: ['Automated image analysis', 'Quality assurance', 'Security enhancement', 'Process automation'],
      link: 'https://ziontechgroup.com/ai-image-recognition'
    },
    {
      icon: Settings,
      title: 'AI Process Automation',
      description: 'Intelligent process automation with AI-powered decision making and workflow optimization.',
      category: 'ai',
      features: ['Workflow Automation', 'Decision Making', 'Process Optimization', 'Exception Handling', 'Performance Monitoring', 'Custom Rules'],
      price: 'Starting at $799/month',
      marketPrice: '$1600-6000/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation'],
      link: 'https://ziontechgroup.com/ai-process-automation'
    },
    {
      icon: Database,
      title: 'AI Data Mining',
      description: 'Advanced data mining and pattern recognition for extracting valuable insights from large datasets.',
      category: 'ai',
      features: ['Pattern Recognition', 'Data Mining', 'Insight Extraction', 'Anomaly Detection', 'Clustering Analysis', 'Predictive Modeling'],
      price: 'Starting at $899/month',
      marketPrice: '$1800-7000/month',
      benefits: ['Hidden insights discovery', 'Pattern recognition', 'Data optimization', 'Better decisions'],
      link: 'https://ziontechgroup.com/ai-data-mining'
    },
    {
      icon: Globe,
      title: 'AI Language Translation',
      description: 'Advanced language translation with context awareness and industry-specific terminology support.',
      category: 'ai',
      features: ['100+ Languages', 'Context Awareness', 'Industry Terms', 'Real-time Translation', 'Quality Assurance', 'API Integration'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1500/month',
      benefits: ['Global communication', 'Accurate translations', 'Real-time processing', 'Cost-effective'],
      link: 'https://ziontechgroup.com/ai-language-translation'
    },
    {
      icon: Target,
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendation systems with machine learning for e-commerce, content, and services.',
      category: 'ai',
      features: ['Personalization', 'Collaborative Filtering', 'Content-based Filtering', 'Real-time Recommendations', 'A/B Testing', 'Performance Analytics'],
      price: 'Starting at $599/month',
      marketPrice: '$1200-5000/month',
      benefits: ['Increased engagement', 'Higher conversion rates', 'Personalized experiences', 'Revenue growth'],
      link: 'https://ziontechgroup.com/ai-recommendation-engine'
    },
    {
      icon: BarChart3,
      title: 'AI Business Intelligence',
      description: 'AI-powered business intelligence with automated insights, reporting, and decision support.',
      category: 'ai',
      features: ['Automated Insights', 'Smart Reporting', 'Decision Support', 'Trend Analysis', 'Performance Metrics', 'Predictive Analytics'],
      price: 'Starting at $799/month',
      marketPrice: '$1600-6000/month',
      benefits: ['Data-driven decisions', 'Automated insights', 'Better performance', 'Competitive advantage'],
      link: 'https://ziontechgroup.com/ai-business-intelligence'
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
      benefits: ['99.9% uptime guarantee', 'Cost reduction up to 40%', 'Scalable infrastructure', 'Expert migration support']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response.',
      category: 'it',
      features: ['Threat Detection & Response', 'Vulnerability Assessments', 'Penetration Testing', 'Security Monitoring', 'Compliance Management', 'Employee Training'],
      price: 'Starting at $1,800/month',
      marketPrice: '$3000-12000/month',
      benefits: ['24/7 security monitoring', 'Reduced security incidents', 'Compliance assurance', 'Expert security team']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems.',
      category: 'it',
      features: ['Database Design & Optimization', 'Performance Tuning', 'Backup & Recovery', 'Data Migration', 'Security Hardening', 'Monitoring & Maintenance'],
      price: 'Starting at $1,200/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Improved performance', 'Data security', 'Automated backups', 'Expert DBA support']
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code.',
      category: 'it',
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging', 'Automated Testing', 'Deployment Automation'],
      price: 'Starting at $2,200/month',
      marketPrice: '$3500-10000/month',
      benefits: ['Faster deployments', 'Reduced downtime', 'Improved code quality', 'Automated workflows']
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
    
    // Additional Real IT Services
    {
      icon: Globe,
      title: 'E-commerce Development',
      description: 'Complete e-commerce solutions with modern platforms, payment integration, and mobile optimization.',
      category: 'it',
      features: ['Custom E-commerce Platforms', 'Payment Gateway Integration', 'Mobile Optimization', 'SEO Optimization', 'Inventory Management', 'Analytics Dashboard'],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-50000/project',
      benefits: ['Increase online sales', 'Mobile-first design', 'SEO optimized', 'Secure payments'],
      link: 'https://ziontechgroup.com/e-commerce-development'
    },
    {
      icon: Code,
      title: 'API Development & Integration',
      description: 'Custom API development and third-party integrations for seamless data flow and automation.',
      category: 'it',
      features: ['RESTful APIs', 'GraphQL APIs', 'Third-party Integrations', 'API Documentation', 'Rate Limiting', 'Authentication & Security'],
      price: 'Starting at $3,500/project',
      marketPrice: '$7000-25000/project',
      benefits: ['Seamless integrations', 'Scalable architecture', 'Comprehensive documentation', 'Secure APIs'],
      link: 'https://ziontechgroup.com/api-development'
    },
    {
      icon: Database,
      title: 'Data Engineering & ETL',
      description: 'Advanced data pipeline development and ETL processes for big data analytics and business intelligence.',
      category: 'it',
      features: ['Data Pipeline Development', 'ETL Processes', 'Data Warehousing', 'Real-time Processing', 'Data Quality Assurance', 'Cloud Data Solutions'],
      price: 'Starting at $4,500/month',
      marketPrice: '$8000-30000/month',
      benefits: ['Scalable data processing', 'Real-time insights', 'Data quality assurance', 'Cost optimization'],
      link: 'https://ziontechgroup.com/data-engineering'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security assessments including penetration testing, vulnerability scanning, and compliance audits.',
      category: 'it',
      features: ['Penetration Testing', 'Vulnerability Assessment', 'Security Audits', 'Compliance Checking', 'Risk Assessment', 'Security Training'],
      price: 'Starting at $2,500/assessment',
      marketPrice: '$5000-20000/assessment',
      benefits: ['Identify security gaps', 'Compliance assurance', 'Risk mitigation', 'Security awareness'],
      link: 'https://ziontechgroup.com/cybersecurity-assessment'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration Services',
      description: 'Seamless cloud migration with zero-downtime strategies and cost optimization for AWS, Azure, and GCP.',
      category: 'it',
      features: ['Zero-downtime Migration', 'Cost Optimization', 'Multi-cloud Strategies', 'Disaster Recovery', 'Performance Tuning', 'Security Hardening'],
      price: 'Starting at $5,000/project',
      marketPrice: '$10000-50000/project',
      benefits: ['Seamless migration', 'Cost reduction', 'Improved performance', 'Enhanced security'],
      link: 'https://ziontechgroup.com/cloud-migration'
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD Implementation',
      description: 'Complete DevOps transformation with automated pipelines, infrastructure as code, and monitoring solutions.',
      category: 'it',
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging', 'Automated Testing', 'Deployment Automation'],
      price: 'Starting at $3,000/month',
      marketPrice: '$5000-20000/month',
      benefits: ['Faster deployments', 'Reduced downtime', 'Improved code quality', 'Automated workflows'],
      link: 'https://ziontechgroup.com/devops-cicd'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with modern UI/UX and optimal performance.',
      category: 'it',
      features: ['iOS & Android Apps', 'Cross-platform Development', 'App Store Optimization', 'Push Notifications', 'Offline Functionality', 'Performance Optimization'],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-50000/project',
      benefits: ['Native performance', 'Cross-platform compatibility', 'App store success', 'User engagement'],
      link: 'https://ziontechgroup.com/mobile-development'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence Solutions',
      description: 'Advanced BI solutions with interactive dashboards, reporting, and data visualization for informed decision making.',
      category: 'it',
      features: ['Interactive Dashboards', 'Custom Reports', 'Data Visualization', 'KPI Tracking', 'Real-time Analytics', 'Self-service BI'],
      price: 'Starting at $2,500/month',
      marketPrice: '$5000-25000/month',
      benefits: ['Data-driven decisions', 'Real-time insights', 'Self-service analytics', 'Improved performance'],
      link: 'https://ziontechgroup.com/business-intelligence'
    },
    {
      icon: Wifi,
      title: 'Network Infrastructure Setup',
      description: 'Complete network infrastructure design and implementation with security, monitoring, and optimization.',
      category: 'it',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', 'Monitoring Setup', 'Disaster Recovery', 'Maintenance Support'],
      price: 'Starting at $3,500/project',
      marketPrice: '$7000-30000/project',
      benefits: ['Reliable connectivity', 'Enhanced security', 'Optimized performance', '24/7 monitoring'],
      link: 'https://ziontechgroup.com/network-infrastructure'
    },
    {
      icon: Package,
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset lifecycle management with tracking, optimization, and cost control.',
      category: 'it',
      features: ['Asset Tracking', 'Lifecycle Management', 'Cost Optimization', 'Compliance Monitoring', 'Automated Reporting', 'Vendor Management'],
      price: 'Starting at $1,500/month',
      marketPrice: '$3000-12000/month',
      benefits: ['Cost optimization', 'Asset visibility', 'Compliance assurance', 'Automated management'],
      link: 'https://ziontechgroup.com/it-asset-management'
    },
    
    // Micro SaaS
    {
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights.',
      category: 'saas',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Multi-tenant Architecture'],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting']
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis.',
      category: 'saas',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing', 'Live Agent Handoff', 'Multi-language Support'],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance.',
      category: 'saas',
      features: ['React/Next.js Development', 'Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Security Implementation', 'Content Management'],
      price: 'Starting at $5,000/project',
      marketPrice: '$10000-30000/project',
      benefits: ['Modern technology stack', 'SEO optimized', 'Mobile responsive', 'Fast loading times']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with optimal user experience.',
      category: 'saas',
      features: ['iOS & Android Apps', 'Cross-platform Development', 'App Store Optimization', 'Push Notifications', 'Offline Functionality', 'Performance Optimization'],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-50000/project',
      benefits: ['Native performance', 'Cross-platform compatibility', 'App store success', 'User engagement']
    },
    {
      icon: FileText,
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking.',
      category: 'saas',
      features: ['AI-powered Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking', 'Tax Calculation', 'Client Portal'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice creation time', 'Reduce payment delays', 'Automated follow-ups', 'Professional invoices']
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
    
    // Additional Real Micro SAAS Services
    {
      icon: MessageSquare,
      title: 'Zion AI Email Assistant Pro',
      description: 'Intelligent email management with AI-powered writing, scheduling, and response optimization.',
      category: 'saas',
      features: ['Smart Email Writing', 'Auto-Response Generation', 'Email Scheduling', 'Sentiment Analysis', 'Template Library', 'Multi-account Management'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Save 70% email time', 'Professional communication', 'Automated follow-ups', 'Better response rates'],
      link: 'https://ziontechgroup.com/zion-ai-email-assistant'
    },
    {
      icon: Calendar,
      title: 'Zion AI Meeting Scheduler',
      description: 'Automated meeting scheduling with AI-powered optimization and conflict resolution.',
      category: 'saas',
      features: ['Smart Scheduling', 'Calendar Integration', 'Time Zone Management', 'Meeting Optimization', 'Auto-reminders', 'Analytics Dashboard'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Eliminate scheduling conflicts', 'Save 90% scheduling time', 'Optimize meeting times', 'Reduce no-shows'],
      link: 'https://ziontechgroup.com/zion-ai-meeting-scheduler'
    },
    {
      icon: FileText,
      title: 'Zion AI Document Processor',
      description: 'Intelligent document processing with OCR, data extraction, and automated categorization.',
      category: 'saas',
      features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Batch Processing', 'API Integration', 'Cloud Storage Sync'],
      price: 'Starting at $129/month',
      marketPrice: '$250-800/month',
      benefits: ['Process 1000s of documents', '99.5% accuracy', 'Automated workflows', 'Cost reduction'],
      link: 'https://ziontechgroup.com/zion-ai-document-processor'
    },
    {
      icon: BarChart3,
      title: 'Zion AI Financial Tracker',
      description: 'Advanced financial tracking and analysis with AI-powered insights and forecasting.',
      category: 'saas',
      features: ['Expense Tracking', 'AI Insights', 'Budget Forecasting', 'Receipt Scanning', 'Tax Preparation', 'Multi-currency Support'],
      price: 'Starting at $89/month',
      marketPrice: '$200-500/month',
      benefits: ['Complete financial visibility', 'Automated categorization', 'Tax optimization', 'Smart budgeting'],
      link: 'https://ziontechgroup.com/zion-ai-financial-tracker'
    },
    {
      icon: Users,
      title: 'Zion AI HR Assistant',
      description: 'Comprehensive HR management with AI-powered recruitment, onboarding, and employee analytics.',
      category: 'saas',
      features: ['AI Recruitment', 'Employee Onboarding', 'Performance Analytics', 'Payroll Integration', 'Compliance Tracking', 'Employee Portal'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Streamline HR processes', 'Better candidate matching', 'Compliance automation', 'Employee satisfaction'],
      link: 'https://ziontechgroup.com/zion-ai-hr-assistant'
    },
    {
      icon: Globe,
      title: 'Zion AI SEO Optimizer',
      description: 'Advanced SEO optimization with AI-powered content analysis and ranking improvement.',
      category: 'saas',
      features: ['Keyword Research', 'Content Optimization', 'Ranking Tracking', 'Competitor Analysis', 'Technical SEO', 'Performance Monitoring'],
      price: 'Starting at $149/month',
      marketPrice: '$300-1000/month',
      benefits: ['Improve search rankings', 'Increase organic traffic', 'Automated optimization', 'Competitive advantage'],
      link: 'https://ziontechgroup.com/zion-ai-seo-optimizer'
    },
    {
      icon: Eye,
      title: 'Zion AI Video Analyzer',
      description: 'Intelligent video analysis with content recognition, sentiment analysis, and performance insights.',
      category: 'saas',
      features: ['Content Recognition', 'Sentiment Analysis', 'Performance Metrics', 'Auto-tagging', 'Thumbnail Generation', 'Analytics Dashboard'],
      price: 'Starting at $179/month',
      marketPrice: '$350-1200/month',
      benefits: ['Optimize video content', 'Better engagement', 'Automated insights', 'Content strategy'],
      link: 'https://ziontechgroup.com/zion-ai-video-analyzer'
    },
    {
      icon: Package,
      title: 'Zion AI Inventory Manager',
      description: 'Smart inventory management with AI-powered demand forecasting and automated reordering.',
      category: 'saas',
      features: ['Demand Forecasting', 'Automated Reordering', 'Stock Optimization', 'Multi-location Support', 'Supplier Integration', 'Analytics Dashboard'],
      price: 'Starting at $159/month',
      marketPrice: '$300-1000/month',
      benefits: ['Reduce stockouts by 80%', 'Optimize inventory levels', 'Automated procurement', 'Cost savings'],
      link: 'https://ziontechgroup.com/zion-ai-inventory-manager'
    },
    {
      icon: Shield,
      title: 'Zion AI Security Monitor',
      description: 'Advanced security monitoring with AI-powered threat detection and automated response.',
      category: 'saas',
      features: ['Threat Detection', 'Automated Response', 'Security Analytics', 'Compliance Monitoring', 'Incident Management', 'Real-time Alerts'],
      price: 'Starting at $299/month',
      marketPrice: '$600-2000/month',
      benefits: ['24/7 security monitoring', 'Faster threat response', 'Compliance assurance', 'Risk reduction'],
      link: 'https://ziontechgroup.com/zion-ai-security-monitor'
    },
    {
      icon: Mic,
      title: 'Zion AI Voice Assistant',
      description: 'Enterprise-grade voice assistant with natural language processing and multi-platform integration.',
      category: 'saas',
      features: ['Voice Commands', 'Natural Language Processing', 'Multi-platform Support', 'Custom Commands', 'Integration APIs', 'Analytics Dashboard'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1500/month',
      benefits: ['Hands-free operation', 'Improved productivity', 'Voice automation', 'Accessibility features'],
      link: 'https://ziontechgroup.com/zion-ai-voice-assistant'
    },
    {
      icon: Settings,
      title: 'Zion AI Workflow Builder',
      description: 'Visual workflow automation platform with AI-powered optimization and no-code interface.',
      category: 'saas',
      features: ['Visual Workflow Builder', 'AI Optimization', 'No-code Interface', 'Integration Library', 'Conditional Logic', 'Performance Analytics'],
      price: 'Starting at $119/month',
      marketPrice: '$250-800/month',
      benefits: ['Automate complex processes', 'No coding required', 'AI optimization', 'Scalable automation'],
      link: 'https://ziontechgroup.com/zion-ai-workflow-builder'
    },
    {
      icon: Database,
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation with AI-powered quality assurance and deduplication.',
      category: 'saas',
      features: ['Data Validation', 'Duplicate Detection', 'Data Enrichment', 'Quality Scoring', 'Batch Processing', 'API Integration'],
      price: 'Starting at $89/month',
      marketPrice: '$200-600/month',
      benefits: ['Improve data quality', 'Automated cleaning', 'Reduce errors', 'Better analytics'],
      link: 'https://ziontechgroup.com/zion-ai-data-cleaner'
    },
    {
      icon: Heart,
      title: 'Zion AI Health Monitor',
      description: 'Personal health monitoring with AI-powered insights, tracking, and wellness recommendations.',
      category: 'saas',
      features: ['Health Tracking', 'AI Insights', 'Wellness Recommendations', 'Goal Setting', 'Progress Analytics', 'Integration APIs'],
      price: 'Starting at $39/month',
      marketPrice: '$80-300/month',
      benefits: ['Personalized health insights', 'Goal achievement', 'Wellness optimization', 'Health awareness'],
      link: 'https://ziontechgroup.com/zion-ai-health-monitor'
    },
    {
      icon: Zap,
      title: 'Zion AI Energy Optimizer',
      description: 'Smart energy management with AI-powered optimization and cost reduction for businesses.',
      category: 'saas',
      features: ['Energy Monitoring', 'Cost Optimization', 'Usage Analytics', 'Predictive Maintenance', 'Automated Controls', 'Sustainability Tracking'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1500/month',
      benefits: ['Reduce energy costs by 30%', 'Sustainability goals', 'Automated optimization', 'Environmental impact'],
      link: 'https://ziontechgroup.com/zion-ai-energy-optimizer'
    },
    {
      icon: Globe,
      title: 'Zion AI Translation Pro',
      description: 'Advanced translation service with AI-powered accuracy and real-time language processing.',
      category: 'saas',
      features: ['100+ Languages', 'Real-time Translation', 'Context Awareness', 'Industry-specific Terms', 'API Integration', 'Quality Assurance'],
      price: 'Starting at $79/month',
      marketPrice: '$150-500/month',
      benefits: ['Global communication', 'Accurate translations', 'Real-time processing', 'Cost-effective'],
      link: 'https://ziontechgroup.com/zion-ai-translation-pro'
    },
    {
      icon: FileText,
      title: 'Zion AI Contract Analyzer',
      description: 'Intelligent contract analysis with AI-powered risk assessment and automated review.',
      category: 'saas',
      features: ['Risk Assessment', 'Clause Analysis', 'Automated Review', 'Compliance Checking', 'Version Control', 'Collaboration Tools'],
      price: 'Starting at $249/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce contract risks', 'Faster review process', 'Compliance assurance', 'Better negotiations'],
      link: 'https://ziontechgroup.com/zion-ai-contract-analyzer'
    },
    {
      icon: BarChart3,
      title: 'Zion AI Sales Predictor',
      description: 'Advanced sales forecasting with AI-powered predictions and revenue optimization.',
      category: 'saas',
      features: ['Sales Forecasting', 'Revenue Prediction', 'Trend Analysis', 'Pipeline Management', 'Performance Metrics', 'ROI Optimization'],
      price: 'Starting at $179/month',
      marketPrice: '$350-1200/month',
      benefits: ['Accurate sales forecasts', 'Revenue optimization', 'Better planning', 'Performance insights'],
      link: 'https://ziontechgroup.com/zion-ai-sales-predictor'
    },
    {
      icon: Users,
      title: 'Zion AI Customer Insights',
      description: 'Deep customer analytics with AI-powered insights and personalized engagement strategies.',
      category: 'saas',
      features: ['Customer Segmentation', 'Behavior Analysis', 'Personalization Engine', 'Engagement Scoring', 'Churn Prediction', 'Lifetime Value'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1500/month',
      benefits: ['Better customer understanding', 'Personalized experiences', 'Churn reduction', 'Revenue growth'],
      link: 'https://ziontechgroup.com/zion-ai-customer-insights'
    },
    {
      icon: Settings,
      title: 'Zion AI Maintenance Pro',
      description: 'Predictive maintenance solution with AI-powered equipment monitoring and failure prevention.',
      category: 'saas',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Performance Analytics', 'Alert System'],
      price: 'Starting at $299/month',
      marketPrice: '$600-2500/month',
      benefits: ['Prevent equipment failures', 'Reduce downtime', 'Optimize maintenance costs', 'Extend equipment life'],
      link: 'https://ziontechgroup.com/zion-ai-maintenance-pro'
    },
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
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions to transform your business with cutting-edge technology
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
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

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
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
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={service.link || "/contact"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Contact our experts for a free consultation and discover how our services can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Free Consultation
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

export default ServicesPage;
