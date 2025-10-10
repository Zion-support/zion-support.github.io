'use client';
import React, {useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {Brain,
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
  Target} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
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
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions']
    },
    {
      icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform and predictive modeling.',
      category: 'ai',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Anomaly Detection', 'Custom Data Models'],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization']
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
      benefits: ['Reduce fraud losses by 85%', 'Real-time protection', 'False positive reduction', 'Compliance ready']
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
      benefits: ['Strategic guidance', 'Cost optimization', 'Technology alignment', 'Competitive advantage']
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
      benefits: ['Increase qualified leads by 300%', 'Automated lead nurturing', 'Better conversion rates', 'ROI optimization']
    },
    
    // Additional AI Services
    {
      icon: Brain,
      title: 'AI Voice Assistant Platform',
      description: 'Enterprise-grade voice AI with natural language understanding, speech synthesis, and multi-language support.',
      category: 'ai',
      features: ['Natural Language Understanding', 'Speech-to-Text', 'Text-to-Speech', 'Multi-language Support', 'Voice Command Processing', 'Integration APIs'],
      price: 'Starting at $499/month',
      marketPrice: '$1000-4000/month',
      benefits: ['Hands-free operations', 'Multi-language support', '24/7 voice assistance', 'Improved accessibility']
    },
    {
      icon: BarChart3,
      title: 'AI Predictive Analytics Pro',
      description: 'Advanced machine learning models for business forecasting, demand prediction, and risk assessment.',
      category: 'ai',
      features: ['Time Series Forecasting', 'Demand Prediction', 'Risk Assessment', 'Anomaly Detection', 'Custom ML Models', 'Real-time Predictions'],
      price: 'Starting at $699/month',
      marketPrice: '$1500-6000/month',
      benefits: ['Accurate forecasting', 'Risk mitigation', 'Data-driven decisions', 'Competitive advantage']
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity Suite',
      description: 'Comprehensive AI-powered security solution with threat detection, incident response, and compliance monitoring.',
      category: 'ai',
      features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Compliance Monitoring', 'Security Analytics', 'Automated Remediation'],
      price: 'Starting at $899/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Proactive threat detection', 'Reduced security incidents', 'Compliance automation', 'Expert security team']
    },
    {
      icon: FileText,
      title: 'AI Document Intelligence',
      description: 'Intelligent document processing with OCR, data extraction, and automated workflow management.',
      category: 'ai',
      features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Workflow Automation', 'Version Control', 'Search & Retrieval'],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['90% faster document processing', 'Reduced manual errors', 'Automated workflows', 'Improved compliance']
    },
    {
      icon: Users,
      title: 'AI HR Solutions',
      description: 'Complete human resources automation with recruitment, employee management, and performance analytics.',
      category: 'ai',
      features: ['Resume Screening', 'Candidate Matching', 'Performance Analytics', 'Employee Onboarding', 'Skills Assessment', 'Retention Analysis'],
      price: 'Starting at $599/month',
      marketPrice: '$1200-4000/month',
      benefits: ['Faster hiring process', 'Better candidate matching', 'Reduced bias', 'Improved retention']
    },
    {
      icon: Globe,
      title: 'AI E-commerce Optimizer',
      description: 'Complete e-commerce AI solution with personalization, inventory management, and sales optimization.',
      category: 'ai',
      features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Segmentation', 'Sales Forecasting', 'A/B Testing'],
      price: 'Starting at $799/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Increased sales by 35%', 'Better customer experience', 'Optimized pricing', 'Reduced inventory costs']
    },
    
    // Additional IT Services
    {
      icon: Cloud,
      title: 'Cloud-Native Development',
      description: 'Modern cloud-native applications with microservices, containers, and serverless architecture.',
      category: 'it',
      features: ['Microservices Architecture', 'Container Orchestration', 'Serverless Functions', 'API Gateway', 'Service Mesh', 'Cloud Monitoring'],
      price: 'Starting at $3,500/month',
      marketPrice: '$5000-15000/month',
      benefits: ['Scalable architecture', 'Faster deployment', 'Cost optimization', 'High availability']
    },
    {
      icon: Shield,
      title: 'Advanced Cybersecurity',
      description: 'Enterprise-grade security services with threat hunting, incident response, and compliance management.',
      category: 'it',
      features: ['Threat Hunting', 'Incident Response', 'Penetration Testing', 'Security Audits', 'Compliance Management', 'Security Training'],
      price: 'Starting at $2,500/month',
      marketPrice: '$4000-12000/month',
      benefits: ['Proactive security', 'Rapid incident response', 'Compliance assurance', 'Expert security team']
    },
    {
      icon: Database,
      title: 'Data Engineering Solutions',
      description: 'Complete data pipeline development with ETL processes, data warehousing, and real-time analytics.',
      category: 'it',
      features: ['ETL Pipeline Development', 'Data Warehousing', 'Real-time Analytics', 'Data Quality Management', 'Data Governance', 'Performance Optimization'],
      price: 'Starting at $2,800/month',
      marketPrice: '$4500-12000/month',
      benefits: ['Clean, reliable data', 'Real-time insights', 'Scalable data architecture', 'Improved decision making']
    },
    {
      icon: Settings,
      title: 'DevOps & SRE Services',
      description: 'Site reliability engineering with automated deployment, monitoring, and incident management.',
      category: 'it',
      features: ['CI/CD Pipeline', 'Infrastructure as Code', 'Monitoring & Alerting', 'Incident Management', 'Performance Optimization', 'Disaster Recovery'],
      price: 'Starting at $3,200/month',
      marketPrice: '$5000-15000/month',
      benefits: ['99.9% uptime', 'Faster deployments', 'Reduced downtime', 'Automated operations']
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with modern technologies and best practices for your specific needs.',
      category: 'it',
      features: ['Custom Application Development', 'API Development', 'Database Design', 'UI/UX Design', 'Testing & QA', 'Maintenance & Support'],
      price: 'Starting at $150/hour',
      marketPrice: '$200-500/hour',
      benefits: ['Tailored solutions', 'Modern technology stack', 'Scalable architecture', 'Ongoing support']
    },
    
    // Additional Micro SaaS Services
    {
      icon: BarChart3,
      title: 'Zion AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights, custom dashboards, and automated reporting.',
      category: 'saas',
      features: ['Real-time Dashboards', 'AI-powered Insights', 'Custom Visualizations', 'Automated Reports', 'Data Integration', 'Mobile Access'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Data-driven decisions', 'Real-time insights', 'Custom dashboards', 'Automated reporting']
    },
    {
      icon: MessageSquare,
      title: 'Zion AI Customer Service Pro',
      description: 'Advanced AI customer support with multi-channel support, sentiment analysis, and automated ticket routing.',
      category: 'saas',
      features: ['Multi-channel Support', 'Sentiment Analysis', 'Automated Routing', 'Live Chat Integration', 'Knowledge Base', 'Performance Analytics'],
      price: 'Starting at $129/month',
      marketPrice: '$250-600/month',
      benefits: ['24/7 customer support', 'Improved satisfaction', 'Reduced response time', 'Cost savings']
    },
    {
      icon: Shield,
      title: 'Zion Security Monitor',
      description: 'AI-powered security monitoring with threat detection, compliance tracking, and incident response.',
      category: 'saas',
      features: ['Threat Detection', 'Compliance Monitoring', 'Incident Response', 'Security Analytics', 'Automated Alerts', 'Risk Assessment'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Proactive security', 'Compliance assurance', 'Reduced security risks', 'Expert monitoring']
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Backup Pro',
      description: 'Automated cloud backup and disaster recovery with encryption, versioning, and cross-platform support.',
      category: 'saas',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Version Control', 'Cross-platform Sync', 'Compliance Ready'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Data protection', 'Disaster recovery', 'Automated backups', 'Peace of mind']
    },
    {
      icon: FileText,
      title: 'Zion Content Studio AI',
      description: 'AI-powered content creation platform with writing assistance, SEO optimization, and multi-format support.',
      category: 'saas',
      features: ['AI Writing Assistant', 'SEO Optimization', 'Multi-format Support', 'Brand Voice Training', 'Content Calendar', 'Performance Analytics'],
      price: 'Starting at $89/month',
      marketPrice: '$150-400/month',
      benefits: ['Faster content creation', 'SEO optimization', 'Consistent brand voice', 'Improved engagement']
    },
    {
      icon: Users,
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced CRM with lead scoring, customer insights, and automated sales processes.',
      category: 'saas',
      features: ['AI Lead Scoring', 'Customer Insights', 'Sales Automation', 'Pipeline Management', 'Email Integration', 'Performance Analytics'],
      price: 'Starting at $99/month',
      marketPrice: '$200-500/month',
      benefits: ['Better lead quality', 'Increased sales', 'Automated processes', 'Customer insights']
    },
    {
      icon: Database,
      title: 'Zion Data Sync Pro',
      description: 'Advanced data integration platform with real-time synchronization, data transformation, and API management.',
      category: 'saas',
      features: ['Real-time Sync', 'Data Transformation', 'API Management', 'Error Handling', 'Data Validation', 'Monitoring Dashboard'],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: ['Real-time data sync', 'Reduced errors', 'Automated processes', 'Better data quality']
    },
    {
      icon: Target,
      title: 'Zion Marketing Automation',
      description: 'Complete marketing automation with email campaigns, lead nurturing, and performance tracking.',
      category: 'saas',
      features: ['Email Automation', 'Lead Nurturing', 'Campaign Management', 'A/B Testing', 'Performance Tracking', 'CRM Integration'],
      price: 'Starting at $119/month',
      marketPrice: '$250-600/month',
      benefits: ['Automated marketing', 'Better lead nurturing', 'Improved conversion', 'ROI optimization']
    },
    {
      icon: Calendar,
      title: 'Zion Project Manager AI',
      description: 'AI-powered project management with task automation, resource optimization, and predictive analytics.',
      category: 'saas',
      features: ['Task Automation', 'Resource Optimization', 'Predictive Analytics', 'Team Collaboration', 'Time Tracking', 'Progress Monitoring'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Better project delivery', 'Resource optimization', 'Predictive insights', 'Team collaboration']
    },
    {
      icon: Mail,
      title: 'Zion Email Marketing AI',
      description: 'Intelligent email marketing with AI-powered personalization, send time optimization, and performance analytics.',
      category: 'saas',
      features: ['AI Personalization', 'Send Time Optimization', 'A/B Testing', 'Performance Analytics', 'List Management', 'Template Builder'],
      price: 'Starting at $69/month',
      marketPrice: '$120-350/month',
      benefits: ['Higher open rates', 'Better engagement', 'Automated optimization', 'Improved ROI']
    },
    {
      icon: Package,
      title: 'Zion Inventory Smart',
      description: 'AI-powered inventory management with demand forecasting, automated reordering, and optimization analytics.',
      category: 'saas',
      features: ['Demand Forecasting', 'Automated Reordering', 'Inventory Optimization', 'Supplier Management', 'Cost Analysis', 'Reporting Dashboard'],
      price: 'Starting at $89/month',
      marketPrice: '$180-450/month',
      benefits: ['Reduced stockouts', 'Lower inventory costs', 'Automated reordering', 'Better forecasting']
    },
    {
      icon: DollarSign,
      title: 'Zion Financial Analytics',
      description: 'AI-powered financial analysis with budgeting, forecasting, and investment optimization recommendations.',
      category: 'saas',
      features: ['Budget Planning', 'Financial Forecasting', 'Investment Analysis', 'Expense Tracking', 'Risk Assessment', 'ROI Analysis'],
      price: 'Starting at $99/month',
      marketPrice: '$200-500/month',
      benefits: ['Better financial planning', 'Investment optimization', 'Risk reduction', 'Improved profitability']
    },
    {
      icon: Globe,
      title: 'Zion SEO Optimizer Pro',
      description: 'Advanced SEO optimization with AI-powered content analysis, keyword research, and performance tracking.',
      category: 'saas',
      features: ['Keyword Research', 'Content Analysis', 'Technical SEO', 'Performance Tracking', 'Competitor Analysis', 'Ranking Monitoring'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Higher search rankings', 'Increased organic traffic', 'Better content optimization', 'Competitive advantage']
    },
    {
      icon: Eye,
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing with automated editing, content optimization, and multi-platform publishing.',
      category: 'saas',
      features: ['Automated Editing', 'Content Optimization', 'Multi-platform Publishing', 'Template Library', 'Brand Integration', 'Performance Analytics'],
      price: 'Starting at $59/month',
      marketPrice: '$120-300/month',
      benefits: ['Faster video creation', 'Professional quality', 'Multi-platform reach', 'Brand consistency']
    },
    {
      icon: Globe,
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation service with AI-powered accuracy, context understanding, and multi-language support.',
      category: 'saas',
      features: ['AI Translation', 'Context Understanding', 'Multi-language Support', 'Document Translation', 'Real-time Translation', 'Quality Assurance'],
      price: 'Starting at $49/month',
      marketPrice: '$100-250/month',
      benefits: ['Accurate translations', 'Multi-language support', 'Context understanding', 'Professional quality']
    },
    {
      icon: Code,
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review with automated analysis, security scanning, and performance optimization suggestions.',
      category: 'saas',
      features: ['Automated Code Review', 'Security Scanning', 'Performance Analysis', 'Best Practices Check', 'Bug Detection', 'Code Quality Metrics'],
      price: 'Starting at $89/month',
      marketPrice: '$180-450/month',
      benefits: ['Better code quality', 'Faster development', 'Security assurance', 'Reduced bugs']
    },
    {
      icon: Users,
      title: 'Zion Customer Insights Pro',
      description: 'Advanced customer analytics with behavior analysis, segmentation, and predictive customer modeling.',
      category: 'saas',
      features: ['Behavior Analysis', 'Customer Segmentation', 'Predictive Modeling', 'Churn Prediction', 'Lifetime Value Analysis', 'Personalization Engine'],
      price: 'Starting at $129/month',
      marketPrice: '$250-600/month',
      benefits: ['Better customer understanding', 'Improved retention', 'Personalized experiences', 'Data-driven decisions']
    },
    {
      icon: Mail,
      title: 'Zion AI Email Assistant',
      description: 'Intelligent email management with smart replies, scheduling, and priority management.',
      category: 'saas',
      features: ['Smart Replies', 'Email Scheduling', 'Priority Management', 'Spam Filtering', 'Template Suggestions', 'Performance Analytics'],
      price: 'Starting at $39/month',
      marketPrice: '$80-200/month',
      benefits: ['Faster email management', 'Better organization', 'Reduced spam', 'Improved productivity']
    },
    {
      icon: Calendar,
      title: 'Zion AI Meeting Assistant',
      description: 'AI-powered meeting management with transcription, action items, and follow-up automation.',
      category: 'saas',
      features: ['Meeting Transcription', 'Action Item Extraction', 'Follow-up Automation', 'Meeting Analytics', 'Calendar Integration', 'Note Taking'],
      price: 'Starting at $59/month',
      marketPrice: '$120-300/month',
      benefits: ['Better meeting efficiency', 'Automated follow-ups', 'Improved documentation', 'Time savings']
    },
    {
      icon: FileText,
      title: 'Zion AI Contract Analyzer',
      description: 'Intelligent contract analysis with risk assessment, compliance checking, and automated review.',
      category: 'saas',
      features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Clause Extraction', 'Automated Review', 'Version Comparison'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Faster contract review', 'Risk reduction', 'Compliance assurance', 'Cost savings']
    },
    {
      icon: CheckSquare,
      title: 'Zion AI Survey Builder',
      description: 'Intelligent survey creation with AI-powered question generation, analysis, and insights.',
      category: 'saas',
      features: ['AI Question Generation', 'Survey Analytics', 'Response Analysis', 'Insight Generation', 'Template Library', 'Multi-channel Distribution'],
      price: 'Starting at $69/month',
      marketPrice: '$140-350/month',
      benefits: ['Better survey design', 'Automated analysis', 'Actionable insights', 'Improved response rates']
    },
    {
      icon: DollarSign,
      title: 'Zion AI Accounting Assistant',
      description: 'AI-powered accounting with automated bookkeeping, expense categorization, and financial reporting.',
      category: 'saas',
      features: ['Automated Bookkeeping', 'Expense Categorization', 'Financial Reporting', 'Tax Preparation', 'Invoice Processing', 'Compliance Monitoring'],
      price: 'Starting at $149/month',
      marketPrice: '$300-750/month',
      benefits: ['Automated bookkeeping', 'Reduced errors', 'Faster reporting', 'Tax compliance']
    },
    {
      icon: Users,
      title: 'Zion AI Recruitment Pro',
      description: 'AI-powered recruitment with resume screening, candidate matching, and interview scheduling.',
      category: 'saas',
      features: ['Resume Screening', 'Candidate Matching', 'Interview Scheduling', 'Skills Assessment', 'Background Checks', 'Onboarding Automation'],
      price: 'Starting at $179/month',
      marketPrice: '$350-800/month',
      benefits: ['Faster hiring', 'Better candidate matching', 'Reduced bias', 'Improved efficiency']
    },
    {
      icon: Shield,
      title: 'Zion AI Content Moderation',
      description: 'Automated content moderation with AI-powered filtering, sentiment analysis, and compliance checking.',
      category: 'saas',
      features: ['Content Filtering', 'Sentiment Analysis', 'Compliance Checking', 'Automated Actions', 'Custom Rules', 'Performance Analytics'],
      price: 'Starting at $119/month',
      marketPrice: '$240-600/month',
      benefits: ['Automated moderation', 'Consistent enforcement', 'Reduced manual work', 'Better compliance']
    },
    {
      icon: Settings,
      title: 'Zion AI Predictive Maintenance',
      description: 'AI-powered equipment maintenance with predictive analytics, failure prediction, and optimization.',
      category: 'saas',
      features: ['Predictive Analytics', 'Failure Prediction', 'Maintenance Scheduling', 'Performance Monitoring', 'Cost Optimization', 'Alert System'],
      price: 'Starting at $299/month',
      marketPrice: '$600-1500/month',
      benefits: ['Reduced downtime', 'Lower maintenance costs', 'Predictive insights', 'Optimized operations']
    },
    {
      icon: Zap,
      title: 'Zion AI Energy Manager',
      description: 'AI-powered energy management with consumption optimization, cost analysis, and sustainability tracking.',
      category: 'saas',
      features: ['Consumption Optimization', 'Cost Analysis', 'Sustainability Tracking', 'Demand Forecasting', 'Automated Controls', 'Reporting Dashboard'],
      price: 'Starting at $159/month',
      marketPrice: '$320-800/month',
      benefits: ['Energy cost reduction', 'Sustainability improvement', 'Automated optimization', 'Better monitoring']
    },
    {
      icon: Package,
      title: 'Zion AI Supply Chain Optimizer',
      description: 'AI-powered supply chain optimization with demand forecasting, inventory management, and logistics optimization.',
      category: 'saas',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Logistics Planning', 'Supplier Management', 'Risk Assessment', 'Cost Analysis'],
      price: 'Starting at $249/month',
      marketPrice: '$500-1200/month',
      benefits: ['Optimized supply chain', 'Reduced costs', 'Better forecasting', 'Improved efficiency']
    },
    {
      icon: Shield,
      title: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection with machine learning models, real-time monitoring, and automated prevention.',
      category: 'saas',
      features: ['ML Fraud Detection', 'Real-time Monitoring', 'Automated Prevention', 'Risk Scoring', 'Pattern Recognition', 'Alert System'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Fraud prevention', 'Real-time protection', 'Reduced losses', 'Automated detection']
    }
  ];
  
  const categories = [
    {id: 'all', name: 'All Services', count: services.length},
    {id: 'ai', name: 'AI Services', count: services.filter(s => s.category === 'ai').length},
    {id: 'it', name: 'IT Services', count: services.filter(s => s.category === 'it').length},
    {id: 'saas', name: 'Micro SaaS', count: services.filter(s => s.category === 'saas').length}
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
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  
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
                      href="/contact"
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
                <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
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
