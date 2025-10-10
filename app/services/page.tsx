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
      title: 'AI Content Generation Pro',
      description: 'Advanced AI content creation with GPT-4 integration for blogs, marketing materials, and technical documentation.',
      category: 'ai',
      features: ['GPT-4 Integration', 'Multi-format Support', 'SEO Optimization', 'Brand Voice Training', 'Plagiarism Detection'],
      price: 'Starting at $199/month',
      marketPrice: '$300-1500/month',
      benefits: ['Save 80% content creation time', 'SEO-optimized content', 'Consistent brand voice', 'Multi-language support'],
      link: 'https://ziontechgroup.com/ai-content-generation'
    },
    {
      icon: Users,
      title: 'AI Customer Service Pro',
      description: 'Enterprise-grade AI customer service with advanced NLP, sentiment analysis, and human handoff capabilities.',
      category: 'ai',
      features: ['Advanced NLP', 'Sentiment Analysis', 'Human Handoff', 'Multi-channel Support', 'Custom Training'],
      price: 'Starting at $499/month',
      marketPrice: '$800-3000/month',
      benefits: ['95% customer satisfaction', '60% cost reduction', '24/7 availability', 'Scalable support'],
      link: 'https://ziontechgroup.com/ai-customer-service'
    },
    {
      icon: DollarSign,
      title: 'AI Financial Advisor',
      description: 'AI-powered financial planning and investment analysis with real-time market data and personalized recommendations.',
      category: 'ai',
      features: ['Portfolio Analysis', 'Risk Assessment', 'Market Predictions', 'Tax Optimization', 'Retirement Planning'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Data-driven investment advice', 'Risk mitigation', 'Tax optimization', 'Automated rebalancing'],
      link: 'https://ziontechgroup.com/ai-financial-advisor'
    },
    {
      icon: Heart,
      title: 'AI Healthcare Diagnostics',
      description: 'Advanced medical AI for diagnostic assistance, patient monitoring, and treatment recommendations.',
      category: 'ai',
      features: ['Medical Image Analysis', 'Symptom Analysis', 'Drug Interaction Check', 'Patient Monitoring', 'Treatment Recommendations'],
      price: 'Starting at $999/month',
      marketPrice: '$2000-10000/month',
      benefits: ['Improved diagnostic accuracy', 'Faster diagnosis', 'Reduced medical errors', 'Cost-effective healthcare'],
      link: 'https://ziontechgroup.com/ai-healthcare'
    },
    {
      icon: Mic,
      title: 'AI Voice Assistant Platform',
      description: 'Enterprise voice AI with natural language understanding, speech synthesis, and multi-language support.',
      category: 'ai',
      features: ['Natural Language Understanding', 'Speech Synthesis', 'Multi-language Support', 'Custom Voice Training', 'API Integration'],
      price: 'Starting at $399/month',
      marketPrice: '$600-2500/month',
      benefits: ['Hands-free operations', 'Multi-language support', 'Custom voice training', 'API integration'],
      link: 'https://ziontechgroup.com/ai-voice-assistant'
    },
    {
      icon: Target,
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing automation with predictive analytics, customer segmentation, and campaign optimization.',
      category: 'ai',
      features: ['Predictive Analytics', 'Customer Segmentation', 'Campaign Optimization', 'A/B Testing', 'ROI Tracking'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['300% better conversion rates', 'Automated campaign optimization', 'Customer segmentation', 'ROI tracking'],
      link: 'https://ziontechgroup.com/ai-marketing-automation'
    },
    {
      icon: Settings,
      title: 'AI Predictive Maintenance',
      description: 'AI-powered equipment maintenance prediction to prevent failures and optimize maintenance schedules.',
      category: 'ai',
      features: ['Failure Prediction', 'Maintenance Scheduling', 'Equipment Monitoring', 'Cost Optimization', 'Alert System'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-4000/month',
      benefits: ['Prevent equipment failures', 'Reduce maintenance costs', 'Optimize schedules', 'Increase uptime'],
      link: 'https://ziontechgroup.com/ai-predictive-maintenance'
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
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with modern technologies for web, mobile, and desktop applications.',
      category: 'it',
      features: ['Web Applications', 'Mobile Apps (iOS/Android)', 'Desktop Software', 'API Development', 'Microservices Architecture', 'Cloud Integration'],
      price: 'Starting at $5,000/project',
      marketPrice: '$10000-100000/project',
      benefits: ['Custom solutions', 'Modern technology stack', 'Scalable architecture', 'Ongoing support'],
      link: 'https://ziontechgroup.com/custom-software'
    },
    {
      icon: Globe,
      title: 'Web Development & E-commerce',
      description: 'Modern, responsive websites and e-commerce platforms with advanced features and optimization.',
      category: 'it',
      features: ['Responsive Design', 'SEO Optimization', 'E-commerce Integration', 'Payment Processing', 'Content Management', 'Performance Optimization'],
      price: 'Starting at $3,000/project',
      marketPrice: '$5000-50000/project',
      benefits: ['Mobile-responsive design', 'SEO optimized', 'Fast loading times', 'E-commerce ready'],
      link: 'https://ziontechgroup.com/web-development'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with optimal user experience.',
      category: 'it',
      features: ['iOS & Android Apps', 'Cross-platform Development', 'App Store Optimization', 'Push Notifications', 'Offline Functionality', 'Performance Optimization'],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-100000/project',
      benefits: ['Native performance', 'Cross-platform compatibility', 'App store success', 'User engagement'],
      link: 'https://ziontechgroup.com/mobile-development'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & Business Intelligence',
      description: 'Advanced data analytics and business intelligence solutions for data-driven decision making.',
      category: 'it',
      features: ['Data Visualization', 'Business Intelligence', 'Data Warehousing', 'ETL Processes', 'Real-time Analytics', 'Custom Dashboards'],
      price: 'Starting at $1,500/month',
      marketPrice: '$2500-10000/month',
      benefits: ['Data-driven insights', 'Real-time analytics', 'Custom dashboards', 'Business intelligence'],
      link: 'https://ziontechgroup.com/data-analytics-bi'
    },
    {
      icon: Wifi,
      title: 'Network Infrastructure & Security',
      description: 'Complete network design, implementation, and security solutions for enterprise environments.',
      category: 'it',
      features: ['Network Design', 'Firewall Configuration', 'VPN Setup', 'Wireless Networks', 'Network Monitoring', 'Security Hardening'],
      price: 'Starting at $1,000/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Secure network infrastructure', 'High availability', 'Network monitoring', 'Expert support'],
      link: 'https://ziontechgroup.com/network-infrastructure'
    },
    {
      icon: Package,
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset lifecycle management with tracking, optimization, and compliance.',
      category: 'it',
      features: ['Asset Tracking', 'Lifecycle Management', 'License Management', 'Compliance Reporting', 'Cost Optimization', 'Automated Discovery'],
      price: 'Starting at $800/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Cost optimization', 'Compliance assurance', 'Asset visibility', 'Automated management'],
      link: 'https://ziontechgroup.com/it-asset-management'
    },
    {
      icon: Monitor,
      title: 'IT Support & Help Desk',
      description: '24/7 IT support and help desk services with remote assistance and on-site support.',
      category: 'it',
      features: ['24/7 Support', 'Remote Assistance', 'On-site Support', 'Ticket Management', 'Knowledge Base', 'User Training'],
      price: 'Starting at $1,200/month',
      marketPrice: '$2000-6000/month',
      benefits: ['24/7 availability', 'Fast response times', 'Expert technicians', 'Proactive monitoring'],
      link: 'https://ziontechgroup.com/it-support'
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
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses.',
      category: 'saas',
      features: ['Real-time Threat Detection', 'Vulnerability Scanning', 'Security Monitoring', 'Incident Response', 'Compliance Reporting', 'Security Training'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
      benefits: ['24/7 security monitoring', 'Threat prevention', 'Compliance assurance', 'Expert security team'],
      link: 'https://ziontechgroup.com/zion-security-shield'
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection.',
      category: 'saas',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Version Control', 'Cross-platform Sync', 'Compliance Ready'],
      price: 'Starting at $79/month',
      marketPrice: '$150-500/month',
      benefits: ['Data protection', 'Disaster recovery', 'Automated backups', 'Secure storage'],
      link: 'https://ziontechgroup.com/zion-cloud-vault'
    },
    {
      icon: FileText,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for blogs, social media, and marketing.',
      category: 'saas',
      features: ['AI Content Generation', 'Multi-platform Publishing', 'SEO Optimization', 'Brand Voice Training', 'Content Calendar', 'Analytics Dashboard'],
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
      features: ['AI-powered Lead Scoring', 'Automated Follow-ups', 'Predictive Analytics', 'Sales Forecasting', 'Customer Segmentation', 'Integration Hub'],
      price: 'Starting at $149/month',
      marketPrice: '$300-1000/month',
      benefits: ['Increase sales by 40%', 'Automated lead management', 'Better customer insights', 'Sales forecasting'],
      link: 'https://ziontechgroup.com/zion-crm-intelligence'
    },
    {
      icon: Database,
      title: 'Zion Data Sync',
      description: 'Advanced data integration and synchronization platform for seamless data flow across systems.',
      category: 'saas',
      features: ['Real-time Data Sync', 'API Integration', 'Data Transformation', 'Error Handling', 'Monitoring Dashboard', 'Custom Connectors'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1500/month',
      benefits: ['Seamless data integration', 'Real-time synchronization', 'Error-free data flow', 'Custom connectors'],
      link: 'https://ziontechgroup.com/zion-data-sync'
    },
    {
      icon: Calendar,
      title: 'Zion Project Master',
      description: 'AI-powered project management platform with intelligent scheduling and resource optimization.',
      category: 'saas',
      features: ['AI-powered Scheduling', 'Resource Optimization', 'Task Automation', 'Progress Tracking', 'Team Collaboration', 'Risk Management'],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
      benefits: ['30% faster project completion', 'Resource optimization', 'Automated scheduling', 'Better team collaboration'],
      link: 'https://ziontechgroup.com/zion-project-master'
    },
    {
      icon: Mail,
      title: 'Zion Email Automation',
      description: 'Advanced email marketing automation with AI-powered personalization and campaign optimization.',
      category: 'saas',
      features: ['AI Personalization', 'Automated Campaigns', 'A/B Testing', 'Advanced Analytics', 'List Management', 'Template Builder'],
      price: 'Starting at $79/month',
      marketPrice: '$150-500/month',
      benefits: ['300% better open rates', 'Automated campaigns', 'Personalized content', 'Advanced analytics'],
      link: 'https://ziontechgroup.com/zion-email-automation'
    },
    {
      icon: Package,
      title: 'Zion Inventory Smart',
      description: 'Intelligent inventory management with AI-powered demand forecasting and optimization.',
      category: 'saas',
      features: ['AI Demand Forecasting', 'Automated Reordering', 'Inventory Optimization', 'Multi-location Support', 'Analytics Dashboard', 'Integration Hub'],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduce inventory costs by 25%', 'Prevent stockouts', 'Automated reordering', 'Demand forecasting'],
      link: 'https://ziontechgroup.com/zion-inventory-smart'
    },
    {
      icon: Settings,
      title: 'Zion Workflow Automation',
      description: 'No-code workflow automation platform with AI-powered process optimization and integration.',
      category: 'saas',
      features: ['No-code Builder', 'AI Process Optimization', 'Integration Hub', 'Custom Triggers', 'Analytics Dashboard', 'Team Collaboration'],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
      benefits: ['Save 60% process time', 'No-code automation', 'Process optimization', 'Easy integration'],
      link: 'https://ziontechgroup.com/zion-workflow-automation'
    },
    {
      icon: Monitor,
      title: 'Zion Performance Monitor',
      description: 'Comprehensive application and infrastructure monitoring with AI-powered insights and alerting.',
      category: 'saas',
      features: ['Real-time Monitoring', 'AI-powered Insights', 'Automated Alerting', 'Performance Analytics', 'Uptime Tracking', 'Custom Dashboards'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
      benefits: ['99.9% uptime guarantee', 'Proactive monitoring', 'Performance insights', 'Automated alerting'],
      link: 'https://ziontechgroup.com/zion-performance-monitor'
    },
    {
      icon: CheckSquare,
      title: 'Zion Compliance Manager',
      description: 'Automated compliance management platform with AI-powered risk assessment and reporting.',
      category: 'saas',
      features: ['Compliance Monitoring', 'Risk Assessment', 'Automated Reporting', 'Policy Management', 'Audit Trails', 'Integration Hub'],
      price: 'Starting at $299/month',
      marketPrice: '$500-1500/month',
      benefits: ['Automated compliance', 'Risk mitigation', 'Audit readiness', 'Policy management'],
      link: 'https://ziontechgroup.com/zion-compliance-manager'
    },
    {
      icon: Globe,
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management with intelligent scheduling and content optimization.',
      category: 'saas',
      features: ['AI Content Optimization', 'Multi-platform Scheduling', 'Analytics Dashboard', 'Hashtag Research', 'Engagement Tracking', 'Team Collaboration'],
      price: 'Starting at $79/month',
      marketPrice: '$150-500/month',
      benefits: ['300% better engagement', 'Automated scheduling', 'Content optimization', 'Multi-platform management'],
      link: 'https://ziontechgroup.com/zion-social-scheduler'
    },
    {
      icon: Eye,
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing, effects, and optimization.',
      category: 'saas',
      features: ['AI Auto-editing', 'Smart Effects', 'Video Optimization', 'Multi-format Export', 'Cloud Processing', 'Collaboration Tools'],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: ['Save 90% editing time', 'Professional quality', 'Automated editing', 'Multi-format support'],
      link: 'https://ziontechgroup.com/zion-ai-video-editor'
    },
    {
      icon: Globe,
      title: 'Zion AI Translator Pro',
      description: 'Advanced AI translation platform with real-time translation and language learning features.',
      category: 'saas',
      features: ['Real-time Translation', '100+ Languages', 'Context Awareness', 'Voice Translation', 'Document Translation', 'API Integration'],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
      benefits: ['Accurate translations', 'Real-time processing', 'Multi-language support', 'API integration'],
      link: 'https://ziontechgroup.com/zion-ai-translator-pro'
    },
    {
      icon: Code,
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with AI-powered analysis and automated suggestions.',
      category: 'saas',
      features: ['AI Code Analysis', 'Automated Reviews', 'Security Scanning', 'Performance Optimization', 'Best Practices', 'Team Collaboration'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Improve code quality', 'Automated reviews', 'Security scanning', 'Best practices'],
      link: 'https://ziontechgroup.com/zion-ai-code-reviewer'
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-4 sm:p-6 hover:bg-slate-800/70 transition-all duration-300 group h-full flex flex-col">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{service.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 mt-1">
                        <span className="text-cyan-400 font-semibold text-sm sm:text-base">{service.price}</span>
                        {service.marketPrice && (
                          <span className="text-gray-400 text-xs sm:text-sm line-through">{service.marketPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                  
                  <div className="mb-4 flex-1">
                    <h4 className="text-xs sm:text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-xs sm:text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.benefits && (
                    <div className="mb-4 flex-1">
                      <h4 className="text-xs sm:text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-xs sm:text-sm text-green-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="leading-tight">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-4 mt-auto">
                    <a
                      href={service.link || "/contact"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm py-2"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-center"
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
                <div className="mt-6 text-sm text-gray-400">
                  <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
                  <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
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
