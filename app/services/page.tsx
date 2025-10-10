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
    {
      icon: BarChart3,
      title: 'Zion AI Analytics Pro',
      description: 'Advanced business intelligence platform with AI-powered insights and predictive analytics.',
      category: 'saas',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Multi-tenant Architecture'],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting']
    },
    {
      icon: MessageSquare,
      title: 'Zion AI Customer Service Pro',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis.',
      category: 'saas',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing', 'Live Agent Handoff', 'Multi-language Support'],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation']
    },
    {
      icon: Shield,
      title: 'Zion Security Shield Pro',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform.',
      category: 'saas',
      features: ['Real-time Threat Detection', 'Automated Security Scanning', 'Vulnerability Assessment', 'Incident Response Automation', 'Compliance Monitoring', 'Security Analytics'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
      benefits: ['24/7 security monitoring', 'Automated threat response', 'Compliance assurance', 'Reduced security risks']
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with AI-powered optimization.',
      category: 'saas',
      features: ['Automated Backups', 'AI-powered Data Deduplication', 'Cross-platform Sync', 'Version Control', 'Disaster Recovery', 'Encryption at Rest'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Automated data protection', 'Cost-effective storage', 'Easy recovery', 'Cross-platform access']
    },
    {
      icon: FileText,
      title: 'Zion Content Studio AI',
      description: 'AI-powered content creation and management platform for all marketing needs.',
      category: 'saas',
      features: ['AI Content Generation', 'Multi-format Support', 'Brand Voice Customization', 'SEO Optimization', 'Content Calendar', 'Team Collaboration'],
      price: 'Starting at $129/month',
      marketPrice: '$250-700/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Team collaboration']
    },
    {
      icon: Users,
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics.',
      category: 'saas',
      features: ['AI Lead Scoring', 'Predictive Analytics', 'Automated Follow-ups', 'Customer Journey Mapping', 'Sales Forecasting', 'Integration Hub'],
      price: 'Starting at $179/month',
      marketPrice: '$300-800/month',
      benefits: ['Better lead qualification', 'Automated workflows', 'Improved sales performance', 'Customer insights']
    },
    {
      icon: Database,
      title: 'Zion Data Sync Pro',
      description: 'Advanced data integration and synchronization platform for all your business tools.',
      category: 'saas',
      features: ['Real-time Data Sync', 'API Integration Hub', 'Data Transformation', 'Error Handling', 'Monitoring Dashboard', 'Custom Connectors'],
      price: 'Starting at $159/month',
      marketPrice: '$300-600/month',
      benefits: ['Unified data view', 'Automated sync', 'Reduced data errors', 'Better insights']
    },
    {
      icon: Calendar,
      title: 'Zion Project Master AI',
      description: 'AI-powered project management with intelligent resource allocation and timeline optimization.',
      category: 'saas',
      features: ['AI Resource Planning', 'Timeline Optimization', 'Risk Assessment', 'Team Collaboration', 'Progress Tracking', 'Automated Reporting'],
      price: 'Starting at $139/month',
      marketPrice: '$250-600/month',
      benefits: ['Better project planning', 'Resource optimization', 'Risk mitigation', 'Team productivity']
    },
    {
      icon: Mail,
      title: 'Zion Email Automation Pro',
      description: 'Advanced email marketing automation with AI-powered personalization and optimization.',
      category: 'saas',
      features: ['AI Personalization', 'Behavioral Triggers', 'A/B Testing', 'Deliverability Optimization', 'Analytics Dashboard', 'Template Library'],
      price: 'Starting at $119/month',
      marketPrice: '$200-500/month',
      benefits: ['Higher open rates', 'Better engagement', 'Automated campaigns', 'ROI optimization']
    },
    {
      icon: Package,
      title: 'Zion Inventory Smart',
      description: 'AI-powered inventory management with demand forecasting and automated reordering.',
      category: 'saas',
      features: ['Demand Forecasting', 'Automated Reordering', 'Multi-location Management', 'Supplier Integration', 'Cost Optimization', 'Analytics Dashboard'],
      price: 'Starting at $169/month',
      marketPrice: '$300-700/month',
      benefits: ['Reduced stockouts', 'Lower inventory costs', 'Automated management', 'Better forecasting']
    },
    {
      icon: Settings,
      title: 'Zion Workflow Automation Pro',
      description: 'Advanced business process automation with AI-powered optimization and monitoring.',
      category: 'saas',
      features: ['Visual Workflow Builder', 'AI Process Optimization', 'Integration Hub', 'Error Handling', 'Performance Monitoring', 'Custom Triggers'],
      price: 'Starting at $189/month',
      marketPrice: '$350-800/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation']
    },
    {
      icon: Monitor,
      title: 'Zion Performance Monitor',
      description: 'Comprehensive application and infrastructure monitoring with AI-powered insights.',
      category: 'saas',
      features: ['Real-time Monitoring', 'AI Anomaly Detection', 'Performance Analytics', 'Alert Management', 'Custom Dashboards', 'Integration Support'],
      price: 'Starting at $149/month',
      marketPrice: '$250-600/month',
      benefits: ['Proactive monitoring', 'Faster issue resolution', 'Better performance', 'Reduced downtime']
    },
    {
      icon: CheckSquare,
      title: 'Zion Compliance Manager',
      description: 'Automated compliance management with AI-powered risk assessment and reporting.',
      category: 'saas',
      features: ['Compliance Monitoring', 'Risk Assessment', 'Automated Reporting', 'Policy Management', 'Audit Trail', 'Regulatory Updates'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Automated compliance', 'Risk mitigation', 'Reduced audit time', 'Regulatory updates']
    },
    {
      icon: Globe,
      title: 'Zion Social Scheduler Pro',
      description: 'AI-powered social media management with content optimization and scheduling.',
      category: 'saas',
      features: ['AI Content Optimization', 'Multi-platform Scheduling', 'Engagement Analytics', 'Hashtag Research', 'Competitor Analysis', 'Team Collaboration'],
      price: 'Starting at $109/month',
      marketPrice: '$200-500/month',
      benefits: ['Better engagement', 'Time savings', 'Content optimization', 'Multi-platform management']
    },
    {
      icon: Eye,
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing and production platform with automated optimization.',
      category: 'saas',
      features: ['AI Video Editing', 'Auto-captioning', 'Color Correction', 'Audio Enhancement', 'Template Library', 'Cloud Rendering'],
      price: 'Starting at $179/month',
      marketPrice: '$300-800/month',
      benefits: ['Professional videos', 'Time savings', 'Automated editing', 'Cloud processing']
    },
    {
      icon: Globe,
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with AI-powered accuracy and context understanding.',
      category: 'saas',
      features: ['100+ Languages', 'Context-aware Translation', 'Document Translation', 'API Integration', 'Quality Assurance', 'Custom Glossaries'],
      price: 'Starting at $89/month',
      marketPrice: '$150-400/month',
      benefits: ['Accurate translations', 'Context understanding', 'Multi-language support', 'API integration']
    },
    {
      icon: Code,
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review and quality assurance platform with automated suggestions.',
      category: 'saas',
      features: ['Automated Code Review', 'Security Analysis', 'Performance Optimization', 'Best Practice Checks', 'Team Collaboration', 'Integration Support'],
      price: 'Starting at $159/month',
      marketPrice: '$300-600/month',
      benefits: ['Better code quality', 'Faster reviews', 'Security improvements', 'Team learning']
    },
    {
      icon: Users,
      title: 'Zion Customer Insights Pro',
      description: 'Advanced customer analytics and behavior prediction platform.',
      category: 'saas',
      features: ['Customer Segmentation', 'Behavior Prediction', 'Churn Analysis', 'Lifetime Value Calculation', 'Personalization Engine', 'ROI Tracking'],
      price: 'Starting at $169/month',
      marketPrice: '$300-700/month',
      benefits: ['Better customer understanding', 'Predictive insights', 'Personalization', 'ROI optimization']
    },
    {
      icon: Mail,
      title: 'Zion AI Email Assistant',
      description: 'Smart email management with AI-powered organization and response suggestions.',
      category: 'saas',
      features: ['Smart Email Organization', 'Response Suggestions', 'Priority Detection', 'Scheduling Assistant', 'Template Library', 'Integration Support'],
      price: 'Starting at $79/month',
      marketPrice: '$150-350/month',
      benefits: ['Email efficiency', 'Better organization', 'Time savings', 'Improved responses']
    },
    {
      icon: Calendar,
      title: 'Zion AI Meeting Assistant',
      description: 'Intelligent meeting management with automated scheduling and follow-up.',
      category: 'saas',
      features: ['Smart Scheduling', 'Meeting Transcription', 'Action Item Extraction', 'Follow-up Automation', 'Integration Hub', 'Analytics Dashboard'],
      price: 'Starting at $129/month',
      marketPrice: '$250-500/month',
      benefits: ['Better meeting efficiency', 'Automated follow-ups', 'Action tracking', 'Time optimization']
    },
    {
      icon: Target,
      title: 'Zion AI SEO Optimizer',
      description: 'AI-powered SEO optimization and content analysis platform.',
      category: 'saas',
      features: ['Keyword Research', 'Content Analysis', 'Competitor Tracking', 'Ranking Monitoring', 'Technical SEO', 'Performance Analytics'],
      price: 'Starting at $139/month',
      marketPrice: '$250-600/month',
      benefits: ['Better search rankings', 'Content optimization', 'Competitive advantage', 'ROI tracking']
    },
    {
      icon: Database,
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with automated quality checks.',
      category: 'saas',
      features: ['Automated Data Cleaning', 'Quality Validation', 'Duplicate Detection', 'Format Standardization', 'Error Reporting', 'API Integration'],
      price: 'Starting at $119/month',
      marketPrice: '$200-500/month',
      benefits: ['Data quality improvement', 'Automated cleaning', 'Error reduction', 'Better insights']
    },
    {
      icon: FileText,
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis and risk assessment platform.',
      category: 'saas',
      features: ['Contract Analysis', 'Risk Assessment', 'Clause Extraction', 'Compliance Checking', 'Version Comparison', 'Automated Alerts'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Faster contract review', 'Risk identification', 'Compliance assurance', 'Time savings']
    },
    {
      icon: CheckSquare,
      title: 'Zion AI Survey Builder',
      description: 'Intelligent survey creation and analysis platform with AI-powered insights.',
      category: 'saas',
      features: ['AI Survey Design', 'Smart Question Suggestions', 'Response Analysis', 'Sentiment Analysis', 'Report Generation', 'Integration Hub'],
      price: 'Starting at $99/month',
      marketPrice: '$200-400/month',
      benefits: ['Better survey design', 'Automated analysis', 'Actionable insights', 'Time savings']
    },
    {
      icon: DollarSign,
      title: 'Zion AI Accounting Assistant',
      description: 'AI-powered accounting and financial management platform.',
      category: 'saas',
      features: ['Automated Bookkeeping', 'Expense Categorization', 'Invoice Processing', 'Financial Reporting', 'Tax Preparation', 'Compliance Monitoring'],
      price: 'Starting at $149/month',
      marketPrice: '$300-600/month',
      benefits: ['Automated accounting', 'Error reduction', 'Time savings', 'Better compliance']
    },
    {
      icon: Users,
      title: 'Zion AI Recruitment Pro',
      description: 'AI-powered recruitment and talent acquisition platform.',
      category: 'saas',
      features: ['Resume Screening', 'Candidate Matching', 'Interview Scheduling', 'Skill Assessment', 'Background Checks', 'Analytics Dashboard'],
      price: 'Starting at $179/month',
      marketPrice: '$350-800/month',
      benefits: ['Faster hiring', 'Better candidate matching', 'Reduced bias', 'Quality hires']
    },
    {
      icon: Shield,
      title: 'Zion AI Content Moderation',
      description: 'Automated content moderation and safety platform with AI-powered detection.',
      category: 'saas',
      features: ['Content Analysis', 'Automated Moderation', 'Safety Detection', 'Custom Rules', 'Real-time Monitoring', 'Reporting Dashboard'],
      price: 'Starting at $159/month',
      marketPrice: '$300-600/month',
      benefits: ['Automated moderation', 'Safety assurance', 'Reduced manual work', 'Better user experience']
    },
    {
      icon: Settings,
      title: 'Zion AI Predictive Maintenance',
      description: 'AI-powered equipment maintenance and failure prediction platform.',
      category: 'saas',
      features: ['Failure Prediction', 'Maintenance Scheduling', 'Equipment Monitoring', 'Cost Optimization', 'Alert System', 'Analytics Dashboard'],
      price: 'Starting at $189/month',
      marketPrice: '$350-800/month',
      benefits: ['Reduced downtime', 'Cost optimization', 'Predictive insights', 'Better maintenance']
    },
    {
      icon: Zap,
      title: 'Zion AI Energy Manager',
      description: 'AI-powered energy optimization and management platform for businesses.',
      category: 'saas',
      features: ['Energy Monitoring', 'Usage Optimization', 'Cost Analysis', 'Renewable Integration', 'Predictive Analytics', 'Automated Controls'],
      price: 'Starting at $139/month',
      marketPrice: '$250-600/month',
      benefits: ['Energy savings', 'Cost reduction', 'Sustainability', 'Automated optimization']
    },
    {
      icon: Package,
      title: 'Zion AI Supply Chain Optimizer',
      description: 'AI-powered supply chain optimization and management platform.',
      category: 'saas',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Management', 'Risk Assessment', 'Cost Analysis', 'Performance Tracking'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Supply chain efficiency', 'Cost reduction', 'Risk mitigation', 'Better planning']
    },
    {
      icon: Shield,
      title: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection and prevention platform with real-time monitoring.',
      category: 'saas',
      features: ['Real-time Detection', 'Behavioral Analysis', 'Risk Scoring', 'Automated Alerts', 'Machine Learning Models', 'Integration Support'],
      price: 'Starting at $179/month',
      marketPrice: '$350-800/month',
      benefits: ['Fraud prevention', 'Real-time protection', 'Cost savings', 'Risk reduction']
    },
    {
      icon: MessageSquare,
      title: 'Zion AI Customer Service Pro',
      description: 'Advanced AI customer service platform with multi-channel support.',
      category: 'saas',
      features: ['Multi-channel Support', 'AI Chatbots', 'Sentiment Analysis', 'Ticket Routing', 'Knowledge Base', 'Performance Analytics'],
      price: 'Starting at $149/month',
      marketPrice: '$300-700/month',
      benefits: ['24/7 support', 'Better customer experience', 'Cost reduction', 'Scalable service']
    },
    {
      icon: Target,
      title: 'Zion AI Marketing Automation',
      description: 'Comprehensive marketing automation platform with AI-powered optimization.',
      category: 'saas',
      features: ['Campaign Automation', 'Lead Nurturing', 'Personalization', 'A/B Testing', 'Analytics Dashboard', 'Integration Hub'],
      price: 'Starting at $169/month',
      marketPrice: '$300-700/month',
      benefits: ['Automated campaigns', 'Better targeting', 'Higher conversion', 'ROI optimization']
    },
    {
      icon: FileText,
      title: 'Zion AI Document AI',
      description: 'Advanced document processing and analysis platform with AI capabilities.',
      category: 'saas',
      features: ['Document Processing', 'Text Extraction', 'Classification', 'Search & Retrieval', 'Workflow Automation', 'Integration Support'],
      price: 'Starting at $129/month',
      marketPrice: '$250-500/month',
      benefits: ['Document efficiency', 'Automated processing', 'Better organization', 'Time savings']
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
