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
  Cpu,
  Lock,
  Calendar,
  CheckSquare,
  DollarSign,
  Heart,
  Mic,
  Package,
  Monitor,
  Wifi,
  Workflow,
  ShoppingCart,
  Mail,
  TrendingUp,
  Code,
  Server
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
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing materials.',
      category: 'ai',
      features: ['Blog Post Generation', 'Social Media Content', 'Email Campaigns', 'SEO Optimization', 'Brand Voice Customization'],
      price: 'Starting at $199/month',
      marketPrice: '$300-1500/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      link: 'https://ziontechgroup.com/ai-content-generation'
    },
    {
      icon: Brain,
      title: 'AI Quantum Computing Solutions',
      description: 'Revolutionary quantum computing applications for optimization, cryptography, and complex problem solving.',
      category: 'ai',
      features: ['Quantum Optimization', 'Cryptographic Security', 'Complex Simulations', 'Machine Learning Acceleration', 'Quantum Algorithms'],
      price: 'Starting at $2,999/month',
      marketPrice: '$5000-20000/month',
      benefits: ['Exponential processing power', 'Unbreakable encryption', 'Revolutionary problem solving', 'Future-proof technology'],
      link: 'https://ziontechgroup.com/ai-quantum-computing'
    },
    {
      icon: Eye,
      title: 'AI Holographic Interface',
      description: 'Next-generation holographic user interfaces powered by AI for immersive business applications.',
      category: 'ai',
      features: ['3D Holographic Displays', 'Gesture Recognition', 'Spatial Computing', 'AR/VR Integration', 'Real-time Rendering'],
      price: 'Starting at $1,499/month',
      marketPrice: '$2500-10000/month',
      benefits: ['Immersive user experience', 'Enhanced productivity', 'Cutting-edge technology', 'Competitive advantage'],
      link: 'https://ziontechgroup.com/ai-holographic-workspace'
    },
    {
      icon: Cpu,
      title: 'AI Edge Computing Platform',
      description: 'Distributed AI processing at the edge for real-time decision making and reduced latency.',
      category: 'ai',
      features: ['Edge AI Processing', 'Real-time Analytics', 'Low Latency Response', 'Offline Capability', 'Distributed Learning'],
      price: 'Starting at $899/month',
      marketPrice: '$1500-6000/month',
      benefits: ['Ultra-low latency', 'Reduced bandwidth costs', 'Enhanced privacy', 'Real-time processing'],
      link: 'https://ziontechgroup.com/ai-edge-computing'
    },
    {
      icon: Shield,
      title: 'AI Quantum Security Suite',
      description: 'Advanced quantum-resistant cybersecurity solutions for future-proof protection.',
      category: 'ai',
      features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Quantum Threat Detection', 'Advanced Encryption', 'Future-Proof Security'],
      price: 'Starting at $1,299/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Quantum-resistant security', 'Future-proof protection', 'Advanced threat detection', 'Military-grade encryption'],
      link: 'https://ziontechgroup.com/ai-quantum-security'
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
      description: 'Tailored software solutions built with modern technologies and best practices for optimal performance.',
      category: 'it',
      features: ['Custom Application Development', 'API Development', 'Integration Services', 'Performance Optimization', 'Security Implementation', 'Quality Assurance'],
      price: 'Starting at $150/hour',
      marketPrice: '$200-500/hour',
      benefits: ['Tailored solutions', 'Modern technology stack', 'Scalable architecture', 'Ongoing support'],
      link: 'https://ziontechgroup.com/custom-software-development'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with optimal user experience.',
      category: 'it',
      features: ['iOS & Android Development', 'Cross-platform Solutions', 'App Store Optimization', 'Push Notifications', 'Offline Functionality', 'Performance Tuning'],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-50000/project',
      benefits: ['Native performance', 'Cross-platform compatibility', 'App store success', 'User engagement'],
      link: 'https://ziontechgroup.com/mobile-app-development'
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
      icon: Wifi,
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management for enterprise-grade connectivity.',
      category: 'it',
      features: ['Network Design & Implementation', 'Wireless Solutions', 'Security Configuration', 'Performance Monitoring', 'Disaster Recovery', '24/7 Support'],
      price: 'Starting at $1,500/month',
      marketPrice: '$2500-8000/month',
      benefits: ['Reliable connectivity', 'Enhanced security', 'Scalable infrastructure', 'Expert support'],
      link: 'https://ziontechgroup.com/network-infrastructure'
    },
    {
      icon: Monitor,
      title: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services with 24/7 helpdesk and remote assistance capabilities.',
      category: 'it',
      features: ['24/7 Helpdesk Support', 'Remote Assistance', 'Hardware Maintenance', 'Software Installation', 'User Training', 'Incident Management'],
      price: 'Starting at $99/user/month',
      marketPrice: '$150-300/user/month',
      benefits: ['Reduced downtime', 'Expert support', 'Proactive maintenance', 'User satisfaction'],
      link: 'https://ziontechgroup.com/it-support-helpdesk'
    },
    
    // Micro SaaS Services
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
      features: ['Real-time Threat Monitoring', 'Vulnerability Scanning', 'Incident Response', 'Security Analytics', 'Compliance Reporting', 'Employee Training'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Enhanced security posture', 'Reduced risk exposure', 'Compliance assurance', 'Peace of mind'],
      link: 'https://ziontechgroup.com/zion-security-shield'
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection.',
      category: 'saas',
      features: ['Automated Backups', 'Cross-platform Sync', 'Version Control', 'Disaster Recovery', 'Data Encryption', 'Compliance Support'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Data protection', 'Business continuity', 'Cost-effective storage', 'Easy recovery'],
      link: 'https://ziontechgroup.com/zion-cloud-vault'
    },
    {
      icon: FileText,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for blogs, social media, and marketing.',
      category: 'saas',
      features: ['AI Content Generation', 'SEO Optimization', 'Multi-platform Publishing', 'Content Calendar', 'Brand Voice Customization', 'Performance Analytics'],
      price: 'Starting at $129/month',
      marketPrice: '$250-600/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      link: 'https://ziontechgroup.com/zion-content-studio'
    },
    {
      icon: Users,
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation.',
      category: 'saas',
      features: ['AI-powered Lead Scoring', 'Automated Follow-ups', 'Predictive Analytics', 'Sales Forecasting', 'Customer Segmentation', 'Integration Hub'],
      price: 'Starting at $179/month',
      marketPrice: '$300-800/month',
      benefits: ['Improved sales performance', 'Better customer relationships', 'Automated processes', 'Data-driven insights'],
      link: 'https://ziontechgroup.com/zion-crm-intelligence'
    },
    {
      icon: Database,
      title: 'Zion Data Sync',
      description: 'Intelligent data integration and synchronization platform for seamless data flow across systems.',
      category: 'saas',
      features: ['Real-time Data Sync', 'Multi-source Integration', 'Data Transformation', 'Error Handling', 'Monitoring Dashboard', 'API Management'],
      price: 'Starting at $149/month',
      marketPrice: '$250-700/month',
      benefits: ['Unified data view', 'Reduced manual work', 'Improved accuracy', 'Real-time updates'],
      link: 'https://ziontechgroup.com/zion-data-sync'
    },
    {
      icon: Calendar,
      title: 'Zion Project Master',
      description: 'AI-powered project management and team collaboration platform with intelligent task allocation.',
      category: 'saas',
      features: ['AI Task Allocation', 'Resource Planning', 'Progress Tracking', 'Team Collaboration', 'Time Tracking', 'Performance Analytics'],
      price: 'Starting at $99/month',
      marketPrice: '$200-500/month',
      benefits: ['Improved project success', 'Better resource utilization', 'Enhanced collaboration', 'Automated workflows'],
      link: 'https://ziontechgroup.com/zion-project-master'
    },
    {
      icon: Mail,
      title: 'Zion Email Automation',
      description: 'Advanced email marketing automation platform with AI-powered personalization and optimization.',
      category: 'saas',
      features: ['AI Personalization', 'Automated Campaigns', 'A/B Testing', 'Behavioral Triggers', 'Analytics Dashboard', 'Template Library'],
      price: 'Starting at $89/month',
      marketPrice: '$150-400/month',
      benefits: ['Higher open rates', 'Better engagement', 'Automated campaigns', 'Improved ROI'],
      link: 'https://ziontechgroup.com/zion-email-automation'
    },
    {
      icon: Package,
      title: 'Zion Inventory Smart',
      description: 'Intelligent inventory management system with demand forecasting and automated reordering.',
      category: 'saas',
      features: ['Demand Forecasting', 'Automated Reordering', 'Multi-location Management', 'Supplier Integration', 'Cost Optimization', 'Analytics Dashboard'],
      price: 'Starting at $159/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduced stockouts', 'Lower inventory costs', 'Improved cash flow', 'Better supplier relationships'],
      link: 'https://ziontechgroup.com/zion-inventory-smart'
    },
    {
      icon: Settings,
      title: 'Zion Workflow Automation',
      description: 'No-code workflow automation platform for streamlining business processes and increasing efficiency.',
      category: 'saas',
      features: ['Visual Workflow Builder', 'API Integrations', 'Conditional Logic', 'Task Automation', 'Approval Workflows', 'Performance Monitoring'],
      price: 'Starting at $119/month',
      marketPrice: '$200-600/month',
      benefits: ['Process efficiency', 'Reduced errors', 'Cost savings', 'Scalable automation'],
      link: 'https://ziontechgroup.com/zion-workflow-automation'
    },
    {
      icon: Monitor,
      title: 'Zion Performance Monitor',
      description: 'Comprehensive application and infrastructure monitoring with AI-powered alerting and optimization.',
      category: 'saas',
      features: ['Real-time Monitoring', 'AI-powered Alerts', 'Performance Analytics', 'Uptime Tracking', 'Error Tracking', 'Capacity Planning'],
      price: 'Starting at $139/month',
      marketPrice: '$250-700/month',
      benefits: ['Improved uptime', 'Faster issue resolution', 'Better performance', 'Proactive monitoring'],
      link: 'https://ziontechgroup.com/zion-performance-monitor'
    },
    {
      icon: CheckSquare,
      title: 'Zion Compliance Manager',
      description: 'Automated compliance management platform for various industry standards and regulations.',
      category: 'saas',
      features: ['Compliance Tracking', 'Automated Reporting', 'Document Management', 'Audit Trail', 'Risk Assessment', 'Training Management'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Reduced compliance risk', 'Automated reporting', 'Better documentation', 'Cost savings'],
      link: 'https://ziontechgroup.com/zion-compliance-manager'
    },
    {
      icon: Globe,
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management platform with content scheduling and performance analytics.',
      category: 'saas',
      features: ['AI Content Suggestions', 'Multi-platform Scheduling', 'Performance Analytics', 'Engagement Tracking', 'Hashtag Optimization', 'Competitor Analysis'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Increased engagement', 'Time savings', 'Better content strategy', 'Improved reach'],
      link: 'https://ziontechgroup.com/zion-social-scheduler'
    },
    {
      icon: Eye,
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing, transcription, and optimization.',
      category: 'saas',
      features: ['AI Auto-editing', 'Voice Transcription', 'Subtitle Generation', 'Thumbnail Creation', 'Multi-format Export', 'Cloud Storage'],
      price: 'Starting at $99/month',
      marketPrice: '$200-500/month',
      benefits: ['Faster video production', 'Professional quality', 'Automated processes', 'Cost-effective editing'],
      link: 'https://ziontechgroup.com/zion-ai-video-editor'
    },
    {
      icon: Globe,
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with AI-powered language detection and context-aware translation.',
      category: 'saas',
      features: ['Real-time Translation', 'Document Translation', 'Voice Translation', 'Context Awareness', 'Quality Scoring', 'API Integration'],
      price: 'Starting at $69/month',
      marketPrice: '$120-300/month',
      benefits: ['Global communication', 'Accurate translations', 'Time savings', 'Cost-effective solution'],
      link: 'https://ziontechgroup.com/zion-ai-translator-pro'
    },
    {
      icon: Code,
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated analysis, suggestions, and security scanning.',
      category: 'saas',
      features: ['Automated Code Review', 'Security Scanning', 'Performance Analysis', 'Best Practice Suggestions', 'Team Collaboration', 'Integration Support'],
      price: 'Starting at $149/month',
      marketPrice: '$250-600/month',
      benefits: ['Improved code quality', 'Faster reviews', 'Better security', 'Team learning'],
      link: 'https://ziontechgroup.com/zion-ai-code-reviewer'
    },
    {
      icon: Users,
      title: 'Zion Customer Insights Pro',
      description: 'Advanced customer analytics platform with AI-powered insights and behavioral analysis.',
      category: 'saas',
      features: ['Customer Segmentation', 'Behavioral Analysis', 'Predictive Analytics', 'Churn Prediction', 'Personalization Engine', 'ROI Tracking'],
      price: 'Starting at $189/month',
      marketPrice: '$350-800/month',
      benefits: ['Better customer understanding', 'Improved retention', 'Personalized experiences', 'Data-driven decisions'],
      link: 'https://ziontechgroup.com/zion-customer-insights-pro'
    },
    {
      icon: Mail,
      title: 'Zion AI Email Assistant',
      description: 'Intelligent email management platform with AI-powered sorting, responses, and scheduling.',
      category: 'saas',
      features: ['Smart Email Sorting', 'AI Response Suggestions', 'Email Scheduling', 'Priority Detection', 'Spam Filtering', 'Analytics Dashboard'],
      price: 'Starting at $59/month',
      marketPrice: '$100-250/month',
      benefits: ['Improved productivity', 'Better email management', 'Time savings', 'Reduced email stress'],
      link: 'https://ziontechgroup.com/zion-ai-email-assistant'
    },
    {
      icon: Calendar,
      title: 'Zion AI Meeting Assistant',
      description: 'AI-powered meeting management with transcription, action items, and follow-up automation.',
      category: 'saas',
      features: ['Meeting Transcription', 'Action Item Extraction', 'Follow-up Automation', 'Meeting Analytics', 'Integration Support', 'Voice Recognition'],
      price: 'Starting at $89/month',
      marketPrice: '$150-400/month',
      benefits: ['Better meeting outcomes', 'Automated follow-ups', 'Improved productivity', 'Better documentation'],
      link: 'https://ziontechgroup.com/zion-ai-meeting-assistant'
    },
    {
      icon: Target,
      title: 'Zion AI SEO Optimizer',
      description: 'Comprehensive SEO optimization platform with AI-powered content analysis and ranking improvements.',
      category: 'saas',
      features: ['Content Analysis', 'Keyword Optimization', 'Ranking Tracking', 'Competitor Analysis', 'Technical SEO', 'Performance Monitoring'],
      price: 'Starting at $129/month',
      marketPrice: '$250-600/month',
      benefits: ['Improved search rankings', 'Better organic traffic', 'Content optimization', 'Competitive advantage'],
      link: 'https://ziontechgroup.com/zion-ai-seo-optimizer'
    },
    {
      icon: Database,
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with automated quality assurance.',
      category: 'saas',
      features: ['Automated Data Cleaning', 'Duplicate Detection', 'Data Validation', 'Quality Scoring', 'Error Correction', 'Data Enrichment'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Improved data quality', 'Reduced manual work', 'Better insights', 'Cost savings'],
      link: 'https://ziontechgroup.com/zion-ai-data-cleaner'
    },
    {
      icon: FileText,
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis platform with risk assessment and compliance checking.',
      category: 'saas',
      features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Clause Extraction', 'Automated Summaries', 'Version Comparison'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Faster contract review', 'Reduced risk', 'Better compliance', 'Time savings'],
      link: 'https://ziontechgroup.com/zion-ai-contract-analyzer'
    },
    {
      icon: CheckSquare,
      title: 'Zion AI Survey Builder',
      description: 'Intelligent survey creation platform with AI-powered question suggestions and analytics.',
      category: 'saas',
      features: ['AI Question Suggestions', 'Multi-format Surveys', 'Real-time Analytics', 'Response Analysis', 'Automated Reports', 'Integration Support'],
      price: 'Starting at $69/month',
      marketPrice: '$120-300/month',
      benefits: ['Better survey design', 'Improved response rates', 'Automated analysis', 'Actionable insights'],
      link: 'https://ziontechgroup.com/zion-ai-survey-builder'
    },
    {
      icon: DollarSign,
      title: 'Zion AI Accounting Assistant',
      description: 'AI-powered accounting platform with automated bookkeeping and financial analysis.',
      category: 'saas',
      features: ['Automated Bookkeeping', 'Expense Categorization', 'Financial Analysis', 'Tax Preparation', 'Invoice Processing', 'Compliance Reporting'],
      price: 'Starting at $149/month',
      marketPrice: '$250-600/month',
      benefits: ['Reduced accounting costs', 'Improved accuracy', 'Better financial insights', 'Time savings'],
      link: 'https://ziontechgroup.com/zion-ai-accounting-assistant'
    },
    {
      icon: Users,
      title: 'Zion AI Recruitment Pro',
      description: 'Intelligent recruitment platform with AI-powered candidate screening and matching.',
      category: 'saas',
      features: ['AI Candidate Screening', 'Resume Analysis', 'Skill Matching', 'Interview Scheduling', 'Background Checks', 'Analytics Dashboard'],
      price: 'Starting at $179/month',
      marketPrice: '$300-800/month',
      benefits: ['Faster hiring process', 'Better candidate matches', 'Reduced bias', 'Improved efficiency'],
      link: 'https://ziontechgroup.com/zion-ai-recruitment-pro'
    },
    {
      icon: Shield,
      title: 'Zion AI Content Moderation',
      description: 'AI-powered content moderation platform with automated filtering and compliance management.',
      category: 'saas',
      features: ['Automated Content Filtering', 'Sentiment Analysis', 'Compliance Checking', 'Real-time Monitoring', 'Custom Rules', 'Analytics Dashboard'],
      price: 'Starting at $159/month',
      marketPrice: '$300-700/month',
      benefits: ['Reduced moderation costs', 'Consistent enforcement', 'Better user experience', 'Compliance assurance'],
      link: 'https://ziontechgroup.com/zion-ai-content-moderation'
    },
    {
      icon: Settings,
      title: 'Zion AI Predictive Maintenance',
      description: 'Intelligent maintenance platform with AI-powered equipment monitoring and failure prediction.',
      category: 'saas',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Performance Analytics', 'Alert System'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Reduced downtime', 'Lower maintenance costs', 'Extended equipment life', 'Better planning'],
      link: 'https://ziontechgroup.com/zion-ai-predictive-maintenance'
    },
    {
      icon: Zap,
      title: 'Zion AI Energy Manager',
      description: 'AI-powered energy management platform for optimizing consumption and reducing costs.',
      category: 'saas',
      features: ['Energy Monitoring', 'Consumption Analysis', 'Cost Optimization', 'Predictive Analytics', 'Automated Controls', 'Sustainability Reporting'],
      price: 'Starting at $129/month',
      marketPrice: '$250-600/month',
      benefits: ['Reduced energy costs', 'Better sustainability', 'Automated optimization', 'Environmental impact'],
      link: 'https://ziontechgroup.com/zion-ai-energy-manager'
    },
    {
      icon: Package,
      title: 'Zion AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management platform with AI-powered optimization and forecasting.',
      category: 'saas',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Management', 'Risk Assessment', 'Cost Analysis', 'Performance Tracking'],
      price: 'Starting at $219/month',
      marketPrice: '$400-1000/month',
      benefits: ['Reduced costs', 'Better inventory management', 'Improved efficiency', 'Risk mitigation'],
      link: 'https://ziontechgroup.com/zion-ai-supply-chain-optimizer'
    },
    {
      icon: Shield,
      title: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection platform with real-time monitoring and prevention capabilities.',
      category: 'saas',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Automated Alerts', 'Machine Learning', 'Compliance Support'],
      price: 'Starting at $249/month',
      marketPrice: '$500-1500/month',
      benefits: ['Reduced fraud losses', 'Real-time protection', 'Better accuracy', 'Compliance ready'],
      link: 'https://ziontechgroup.com/zion-ai-fraud-detector'
    },
    {
      icon: MessageSquare,
      title: 'Zion AI Customer Service Pro',
      description: 'Advanced customer service platform with AI-powered automation and human handoff.',
      category: 'saas',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Ticket Routing', 'Knowledge Base', 'Live Agent Handoff', 'Performance Analytics'],
      price: 'Starting at $189/month',
      marketPrice: '$350-800/month',
      benefits: ['Improved customer satisfaction', 'Reduced response times', '24/7 availability', 'Cost savings'],
      link: 'https://ziontechgroup.com/zion-ai-customer-service-pro'
    },
    {
      icon: Target,
      title: 'Zion AI Marketing Automation',
      description: 'Comprehensive marketing automation platform with AI-powered personalization and optimization.',
      category: 'saas',
      features: ['Campaign Automation', 'Personalization Engine', 'Lead Scoring', 'A/B Testing', 'Analytics Dashboard', 'Multi-channel Support'],
      price: 'Starting at $159/month',
      marketPrice: '$300-700/month',
      benefits: ['Higher conversion rates', 'Better personalization', 'Automated optimization', 'Improved ROI'],
      link: 'https://ziontechgroup.com/zion-ai-marketing-automation'
    },
    {
      icon: FileText,
      title: 'Zion AI Document AI',
      description: 'Intelligent document processing platform with AI-powered extraction and analysis.',
      category: 'saas',
      features: ['Document OCR', 'Data Extraction', 'Form Processing', 'Document Classification', 'Search & Retrieval', 'Integration APIs'],
      price: 'Starting at $139/month',
      marketPrice: '$250-600/month',
      benefits: ['Faster document processing', 'Reduced manual work', 'Better accuracy', 'Cost savings'],
      link: 'https://ziontechgroup.com/zion-ai-document-ai'
    },
    {
      icon: Brain,
      title: 'Zion AI Quantum Analytics',
      description: 'Revolutionary quantum-powered analytics platform for complex data analysis and optimization.',
      category: 'saas',
      features: ['Quantum Data Processing', 'Complex Optimization', 'Advanced Pattern Recognition', 'Real-time Insights', 'Quantum Machine Learning'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Exponential processing speed', 'Complex problem solving', 'Advanced analytics', 'Future-proof technology'],
      link: 'https://ziontechgroup.com/zion-ai-quantum-analytics'
    },
    {
      icon: Eye,
      title: 'Zion AI Holographic Workspace',
      description: 'Immersive 3D workspace platform with AI-powered collaboration and visualization tools.',
      category: 'saas',
      features: ['3D Virtual Workspace', 'AI Collaboration Tools', 'Holographic Presentations', 'Spatial Computing', 'Real-time Rendering'],
      price: 'Starting at $199/month',
      marketPrice: '$350-1200/month',
      benefits: ['Immersive collaboration', 'Enhanced productivity', 'Cutting-edge interface', 'Remote work revolution'],
      link: 'https://ziontechgroup.com/zion-ai-holographic-workspace'
    },
    {
      icon: Cpu,
      title: 'Zion AI Edge Intelligence',
      description: 'Distributed AI platform for edge computing with real-time processing and decision making.',
      category: 'saas',
      features: ['Edge AI Processing', 'Real-time Analytics', 'Offline Intelligence', 'Distributed Learning', 'Low Latency Response'],
      price: 'Starting at $149/month',
      marketPrice: '$250-800/month',
      benefits: ['Ultra-low latency', 'Reduced bandwidth costs', 'Enhanced privacy', 'Real-time processing'],
      link: 'https://ziontechgroup.com/zion-ai-edge-intelligence'
    },
    {
      icon: Shield,
      title: 'Zion AI Quantum Security',
      description: 'Next-generation quantum-resistant security platform for future-proof protection.',
      category: 'saas',
      features: ['Quantum Encryption', 'Post-Quantum Security', 'Advanced Threat Detection', 'Zero-Trust Architecture', 'Quantum Key Distribution'],
      price: 'Starting at $179/month',
      marketPrice: '$300-1000/month',
      benefits: ['Quantum-resistant security', 'Future-proof protection', 'Advanced threat detection', 'Military-grade encryption'],
      link: 'https://ziontechgroup.com/zion-ai-quantum-security'
    },
    {
      icon: Database,
      title: 'Zion AI Neural Database Pro',
      description: 'Self-optimizing database platform with AI-powered performance tuning and predictive analytics.',
      category: 'saas',
      features: ['Self-Optimizing Queries', 'Predictive Indexing', 'Automatic Scaling', 'Neural Optimization', 'Intelligent Caching'],
      price: 'Starting at $129/month',
      marketPrice: '$200-600/month',
      benefits: ['Self-optimizing performance', 'Reduced maintenance', 'Intelligent scaling', 'Predictive optimization'],
      link: 'https://ziontechgroup.com/zion-ai-neural-database-pro'
    },
    {
      icon: Zap,
      title: 'Zion AI Energy Optimizer',
      description: 'AI-powered energy management platform for reducing costs and improving sustainability.',
      category: 'saas',
      features: ['Energy Monitoring', 'Cost Optimization', 'Predictive Analytics', 'Automated Controls', 'Sustainability Reporting'],
      price: 'Starting at $99/month',
      marketPrice: '$150-500/month',
      benefits: ['Reduced energy costs', 'Better sustainability', 'Automated optimization', 'Environmental impact'],
      link: 'https://ziontechgroup.com/zion-ai-energy-optimizer'
    },
    {
      icon: Target,
      title: 'Zion AI Supply Chain Intelligence',
      description: 'Advanced supply chain optimization platform with AI-powered forecasting and risk management.',
      category: 'saas',
      features: ['Demand Forecasting', 'Risk Assessment', 'Supplier Optimization', 'Cost Analysis', 'Performance Tracking'],
      price: 'Starting at $219/month',
      marketPrice: '$400-1200/month',
      benefits: ['Reduced costs', 'Better inventory management', 'Improved efficiency', 'Risk mitigation'],
      link: 'https://ziontechgroup.com/zion-ai-supply-chain-intelligence'
    },
    {
      icon: Users,
      title: 'Zion AI Talent Intelligence',
      description: 'AI-powered talent acquisition and management platform with advanced matching algorithms.',
      category: 'saas',
      features: ['AI Candidate Matching', 'Skills Assessment', 'Performance Prediction', 'Retention Analytics', 'Diversity Optimization'],
      price: 'Starting at $189/month',
      marketPrice: '$300-800/month',
      benefits: ['Better talent matches', 'Reduced hiring time', 'Improved retention', 'Diversity optimization'],
      link: 'https://ziontechgroup.com/zion-ai-talent-intelligence'
    },
    {
      icon: Globe,
      title: 'Zion AI Global Translator',
      description: 'Advanced translation platform with AI-powered context understanding and cultural adaptation.',
      category: 'saas',
      features: ['Context-Aware Translation', 'Cultural Adaptation', 'Real-time Translation', 'Voice Translation', 'Document Processing'],
      price: 'Starting at $79/month',
      marketPrice: '$120-400/month',
      benefits: ['Accurate translations', 'Cultural sensitivity', 'Real-time processing', 'Global communication'],
      link: 'https://ziontechgroup.com/zion-ai-global-translator'
    },
    {
      icon: FileText,
      title: 'Zion AI Legal Assistant',
      description: 'AI-powered legal document analysis and contract management platform.',
      category: 'saas',
      features: ['Contract Analysis', 'Legal Document Review', 'Compliance Checking', 'Risk Assessment', 'Automated Summaries'],
      price: 'Starting at $249/month',
      marketPrice: '$400-1200/month',
      benefits: ['Faster legal reviews', 'Reduced legal costs', 'Better compliance', 'Risk mitigation'],
      link: 'https://ziontechgroup.com/zion-ai-legal-assistant'
    },
    {
      icon: Heart,
      title: 'Zion AI Health Monitor',
      description: 'AI-powered health monitoring and wellness platform with predictive health analytics.',
      category: 'saas',
      features: ['Health Monitoring', 'Predictive Analytics', 'Wellness Tracking', 'Risk Assessment', 'Personalized Recommendations'],
      price: 'Starting at $159/month',
      marketPrice: '$250-700/month',
      benefits: ['Better health outcomes', 'Preventive care', 'Personalized insights', 'Cost savings'],
      link: 'https://ziontechgroup.com/zion-ai-health-monitor'
    },
    {
      icon: BarChart3,
      title: 'Zion AI Market Intelligence',
      description: 'Advanced market analysis platform with AI-powered insights and trend prediction.',
      category: 'saas',
      features: ['Market Analysis', 'Trend Prediction', 'Competitor Intelligence', 'Risk Assessment', 'Investment Insights'],
      price: 'Starting at $199/month',
      marketPrice: '$350-1000/month',
      benefits: ['Better market insights', 'Improved decision making', 'Risk mitigation', 'Competitive advantage'],
      link: 'https://ziontechgroup.com/zion-ai-market-intelligence'
    },
    {
      icon: Settings,
      title: 'Zion AI Process Optimizer',
      description: 'Intelligent process optimization platform with AI-powered workflow analysis and improvement.',
      category: 'saas',
      features: ['Process Mining', 'Workflow Optimization', 'Bottleneck Detection', 'Automated Improvements', 'Performance Analytics'],
      price: 'Starting at $139/month',
      marketPrice: '$250-600/month',
      benefits: ['Process efficiency', 'Cost reduction', 'Automated optimization', 'Better performance'],
      link: 'https://ziontechgroup.com/zion-ai-process-optimizer'
    },
    {
      icon: Monitor,
      title: 'Zion AI Infrastructure Monitor',
      description: 'Advanced infrastructure monitoring platform with AI-powered anomaly detection and optimization.',
      category: 'saas',
      features: ['Real-time Monitoring', 'Anomaly Detection', 'Predictive Maintenance', 'Performance Optimization', 'Automated Alerts'],
      price: 'Starting at $119/month',
      marketPrice: '$200-500/month',
      benefits: ['Improved uptime', 'Faster issue resolution', 'Proactive maintenance', 'Cost optimization'],
      link: 'https://ziontechgroup.com/zion-ai-infrastructure-monitor'
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
        <title>Our Services - AI & IT Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including micro SaaS solutions, cloud infrastructure, cybersecurity, and digital transformation. Expert solutions for modern businesses." />
        <meta name="keywords" content="AI services, IT services, micro SaaS, cloud computing, cybersecurity, digital transformation, business solutions" />
        <meta property="og:title" content="Our Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI and IT services for modern businesses" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services - Zion Tech Group" />
        <meta name="twitter:description" content="Comprehensive AI and IT services for modern businesses" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Comprehensive AI and IT solutions designed to transform your business. From cutting-edge artificial intelligence 
              to robust cloud infrastructure, we provide the technology you need to succeed in the digital age.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 max-w-4xl mx-auto mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div>
                  <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div>
                  <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex flex-col lg:flex-row gap-6">
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
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-cyan-400 font-semibold">{service.price}</span>
                      <span className="text-gray-400">Market: {service.marketPrice}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {service.benefits && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
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
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Contact our experts for a free consultation and discover how our services can transform your business. 
                We're here to help you succeed with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Get Free Consultation
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;