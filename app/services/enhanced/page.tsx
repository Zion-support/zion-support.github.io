'use client';
import React, { useState, useEffect } from 'react';
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
  Star,
  Clock,
  Users,
  TrendingUp,
  Settings,
  Code,
  Mail,
  Calendar,
  FileText,
  Target,
  Cpu,
  Lock,
  Sparkles,
  Cpu as CpuIcon,
  CheckSquare,
  Search as SearchIcon,
  Mail as MailIcon,
  Calendar as CalendarIcon,
  FileText as FileTextIcon,
  Target as TargetIcon,
  Settings as SettingsIcon,
  Globe as GlobeIcon,
  Database as DatabaseIcon,
  Smartphone as SmartphoneIcon,
  Shield as ShieldIcon,
  BarChart3 as BarChart3Icon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon
} from 'lucide-react';

interface Service {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  popular: boolean;
  marketPrice?: string;
  benefits: string[];
  useCases: string[];
  integrations: string[];
  support: string;
  trial: string;
  demo: string;
}

const EnhancedServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 12;

  const services: Service[] = [
    // AI Services - Real and Innovative
    {
      id: 'ai-voice-assistant-platform',
      icon: Brain,
      title: 'AI Voice Assistant Platform',
      description: 'Enterprise-grade voice AI platform with natural language understanding, multi-language support, and custom wake word training. Deploy across devices and channels.',
      features: [
        'Natural Language Processing (NLP)',
        'Multi-language Support (50+ languages)',
        'Custom Wake Word Training',
        'Voice Biometrics & Authentication',
        'Real-time Speech Recognition',
        'Conversation Memory & Context',
        'API Integration & Webhooks',
        'Analytics & Performance Metrics'
      ],
      price: 'Starting at $299/month',
      marketPrice: '$2,000-5,000/month',
      category: 'AI Services',
      popular: true,
      benefits: [
        'Reduce customer service costs by 60%',
        '24/7 multilingual support',
        'Improve customer satisfaction by 40%',
        'Scale support without hiring'
      ],
      useCases: [
        'Customer Service Automation',
        'Voice-Controlled Applications',
        'Accessibility Solutions',
        'Smart Home Integration'
      ],
      integrations: ['Salesforce', 'Zendesk', 'Microsoft Teams', 'Slack', 'WhatsApp', 'Telegram'],
      support: '24/7 Technical Support + Dedicated Account Manager',
      trial: '14-day free trial with full access',
      demo: 'Live demo available with custom use case'
    },
    {
      id: 'ai-predictive-maintenance',
      icon: Settings,
      title: 'AI Predictive Maintenance',
      description: 'Prevent equipment failures with AI-powered predictive maintenance. Real-time monitoring, failure prediction, and automated maintenance scheduling.',
      features: [
        'IoT Sensor Integration',
        'Machine Learning Algorithms',
        'Real-time Monitoring Dashboard',
        'Failure Prediction (95% accuracy)',
        'Automated Maintenance Scheduling',
        'Cost Optimization Analysis',
        'Compliance Reporting',
        'Mobile Alerts & Notifications'
      ],
      price: 'Starting at $599/month',
      marketPrice: '$3,000-8,000/month',
      category: 'AI Services',
      popular: true,
      benefits: [
        'Reduce unplanned downtime by 70%',
        'Extend equipment lifespan by 30%',
        'Save 25% on maintenance costs',
        'Improve safety and compliance'
      ],
      useCases: [
        'Manufacturing Equipment',
        'HVAC Systems',
        'Fleet Management',
        'Industrial Machinery'
      ],
      integrations: ['SAP', 'Oracle', 'IBM Maximo', 'Siemens MindSphere', 'GE Predix'],
      support: '24/7 Monitoring + Expert Consultation',
      trial: '30-day pilot program',
      demo: 'Custom equipment analysis demo'
    },
    {
      id: 'ai-supply-chain-optimization',
      icon: BarChart3,
      title: 'AI Supply Chain Optimization',
      description: 'Optimize supply chain operations with AI-driven demand forecasting, inventory management, and logistics planning. Reduce costs and improve efficiency.',
      features: [
        'Demand Forecasting (98% accuracy)',
        'Inventory Optimization',
        'Route Planning & Optimization',
        'Supplier Performance Analytics',
        'Risk Assessment & Mitigation',
        'Cost Analysis & Optimization',
        'Real-time Tracking',
        'Automated Reordering'
      ],
      price: 'Starting at $899/month',
      marketPrice: '$5,000-15,000/month',
      category: 'AI Services',
      popular: false,
      benefits: [
        'Reduce inventory costs by 35%',
        'Improve delivery times by 40%',
        'Minimize stockouts by 80%',
        'Optimize supplier relationships'
      ],
      useCases: [
        'Retail & E-commerce',
        'Manufacturing',
        'Healthcare Supply Chain',
        'Food & Beverage'
      ],
      integrations: ['SAP', 'Oracle', 'Microsoft Dynamics', 'NetSuite', 'Shopify'],
      support: 'Dedicated Supply Chain Consultant',
      trial: '45-day implementation trial',
      demo: 'Supply chain analysis with your data'
    },
    {
      id: 'ai-quality-control-system',
      icon: Shield,
      title: 'AI Quality Control System',
      description: 'Automated quality inspection using computer vision and machine learning. Real-time defect detection, quality reporting, and process optimization.',
      features: [
        'Computer Vision Technology',
        'Real-time Defect Detection',
        'Quality Scoring & Analytics',
        'Automated Reporting',
        'Integration APIs',
        'Custom Model Training',
        'Mobile Quality App',
        'Compliance Documentation'
      ],
      price: 'Starting at $1,199/month',
      marketPrice: '$8,000-20,000/month',
      category: 'AI Services',
      popular: false,
      benefits: [
        'Improve quality by 90%',
        'Reduce inspection time by 75%',
        'Eliminate human error',
        'Ensure consistent standards'
      ],
      useCases: [
        'Manufacturing Quality Control',
        'Food Safety Inspection',
        'Pharmaceutical Quality',
        'Textile Quality Assurance'
      ],
      integrations: ['MES Systems', 'ERP Systems', 'Quality Management Software'],
      support: 'AI Model Training + Technical Support',
      trial: '60-day pilot with custom training',
      demo: 'Live quality inspection demo'
    },
    {
      id: 'ai-energy-management',
      icon: Zap,
      title: 'AI Energy Management',
      description: 'Optimize energy consumption with AI-powered smart grid management, renewable energy integration, and carbon footprint tracking.',
      features: [
        'Smart Grid Management',
        'Renewable Energy Integration',
        'Energy Consumption Analytics',
        'Carbon Footprint Tracking',
        'Cost Optimization',
        'Predictive Energy Modeling',
        'Real-time Monitoring',
        'Automated Controls'
      ],
      price: 'Starting at $799/month',
      marketPrice: '$4,000-12,000/month',
      category: 'AI Services',
      popular: false,
      benefits: [
        'Reduce energy costs by 30%',
        'Improve energy efficiency by 25%',
        'Track carbon footprint',
        'Optimize renewable energy usage'
      ],
      useCases: [
        'Commercial Buildings',
        'Manufacturing Facilities',
        'Data Centers',
        'Smart Cities'
      ],
      integrations: ['Building Management Systems', 'Smart Meters', 'Solar Inverters'],
      support: 'Energy Consultant + Technical Support',
      trial: '90-day energy optimization trial',
      demo: 'Energy analysis with your facility data'
    },
    {
      id: 'ai-legal-document-analysis',
      icon: FileText,
      title: 'AI Legal Document Analysis',
      description: 'Automated legal document review, contract analysis, and compliance monitoring with AI technology. Reduce legal review time by 80%.',
      features: [
        'Document Review & Analysis',
        'Contract Risk Assessment',
        'Compliance Monitoring',
        'Legal Research Automation',
        'Document Classification',
        'Clause Extraction & Analysis',
        'Deadline Tracking',
        'Audit Trail Generation'
      ],
      price: 'Starting at $1,299/month',
      marketPrice: '$6,000-18,000/month',
      category: 'AI Services',
      popular: false,
      benefits: [
        'Reduce review time by 80%',
        'Improve accuracy by 95%',
        'Ensure compliance',
        'Save on legal costs'
      ],
      useCases: [
        'Law Firms',
        'Corporate Legal Departments',
        'Compliance Teams',
        'Contract Management'
      ],
      integrations: ['Legal Case Management', 'Document Management Systems', 'CRM Systems'],
      support: 'Legal Technology Consultant',
      trial: '30-day document analysis trial',
      demo: 'Contract analysis with your documents'
    },
    {
      id: 'ai-real-estate-analytics',
      icon: Globe,
      title: 'AI Real Estate Analytics',
      description: 'Property valuation, market analysis, and investment recommendations powered by artificial intelligence. Make data-driven real estate decisions.',
      features: [
        'Property Valuation Models',
        'Market Trend Analysis',
        'Investment Recommendations',
        'Rental Yield Predictions',
        'Neighborhood Analysis',
        'Price Forecasting',
        'Risk Assessment',
        'Portfolio Optimization'
      ],
      price: 'Starting at $499/month',
      marketPrice: '$2,000-6,000/month',
      category: 'AI Services',
      popular: false,
      benefits: [
        'Improve investment decisions',
        'Reduce market research time',
        'Maximize rental yields',
        'Minimize investment risks'
      ],
      useCases: [
        'Real Estate Investors',
        'Property Management',
        'Real Estate Agents',
        'Property Developers'
      ],
      integrations: ['MLS Systems', 'Property Management Software', 'Financial Planning Tools'],
      support: 'Real Estate Data Analyst',
      trial: '14-day market analysis trial',
      demo: 'Property analysis with your portfolio'
    },
    {
      id: 'ai-hr-assistant',
      icon: Users,
      title: 'AI Human Resources Assistant',
      description: 'Streamline HR processes with AI-powered recruitment, employee analytics, and performance management. Transform your HR operations.',
      features: [
        'Resume Screening & Matching',
        'Candidate Assessment',
        'Employee Performance Analytics',
        'Engagement Monitoring',
        'Retention Analysis',
        'Skills Gap Analysis',
        'Automated Interview Scheduling',
        'HR Analytics Dashboard'
      ],
      price: 'Starting at $399/month',
      marketPrice: '$2,500-7,000/month',
      category: 'AI Services',
      popular: false,
      benefits: [
        'Reduce hiring time by 50%',
        'Improve candidate quality',
        'Increase employee retention',
        'Optimize HR processes'
      ],
      useCases: [
        'HR Departments',
        'Recruitment Agencies',
        'Talent Acquisition',
        'Employee Management'
      ],
      integrations: ['ATS Systems', 'HRIS', 'Payroll Systems', 'Performance Management'],
      support: 'HR Technology Consultant',
      trial: '30-day HR optimization trial',
      demo: 'HR process analysis with your data'
    },
    {
      id: 'ai-insurance-risk-assessment',
      icon: Shield,
      title: 'AI Insurance Risk Assessment',
      description: 'Advanced risk evaluation and fraud detection for insurance companies using machine learning algorithms. Improve underwriting accuracy.',
      features: [
        'Risk Evaluation Models',
        'Fraud Detection (99.5% accuracy)',
        'Claims Processing Automation',
        'Underwriting Support',
        'Compliance Monitoring',
        'Predictive Analytics',
        'Real-time Risk Scoring',
        'Automated Decision Making'
      ],
      price: 'Starting at $1,499/month',
      marketPrice: '$8,000-25,000/month',
      category: 'AI Services',
      popular: false,
      benefits: [
        'Reduce fraud by 85%',
        'Improve underwriting accuracy',
        'Faster claims processing',
        'Better risk management'
      ],
      useCases: [
        'Insurance Companies',
        'Underwriting Departments',
        'Claims Processing',
        'Risk Management'
      ],
      integrations: ['Core Insurance Systems', 'Claims Management', 'Underwriting Platforms'],
      support: 'Insurance Technology Expert',
      trial: '60-day risk assessment trial',
      demo: 'Risk analysis with your insurance data'
    },
    {
      id: 'ai-educational-platform',
      icon: Users,
      title: 'AI Educational Platform',
      description: 'Personalized learning experiences with AI-powered content adaptation and student performance analytics. Transform education delivery.',
      features: [
        'Personalized Learning Paths',
        'Content Adaptation',
        'Student Performance Analytics',
        'Learning Progress Tracking',
        'Automated Assessment',
        'Adaptive Quizzing',
        'Learning Recommendations',
        'Teacher Analytics Dashboard'
      ],
      price: 'Starting at $299/month',
      marketPrice: '$1,500-5,000/month',
      category: 'AI Services',
      popular: false,
      benefits: [
        'Improve learning outcomes',
        'Personalize education',
        'Reduce teacher workload',
        'Track student progress'
      ],
      useCases: [
        'Educational Institutions',
        'Online Learning Platforms',
        'Corporate Training',
        'Tutoring Services'
      ],
      integrations: ['LMS Systems', 'Student Information Systems', 'Assessment Platforms'],
      support: 'Educational Technology Consultant',
      trial: '30-day learning platform trial',
      demo: 'Personalized learning demo with your content'
    },
    {
      id: 'ai-transportation-optimization',
      icon: Globe,
      title: 'AI Transportation Optimization',
      description: 'Optimize transportation routes, fleet management, and logistics with AI-powered decision making. Reduce costs and improve efficiency.',
      features: [
        'Route Optimization',
        'Fleet Management',
        'Demand Prediction',
        'Fuel Optimization',
        'Driver Scheduling',
        'Real-time Tracking',
        'Maintenance Scheduling',
        'Performance Analytics'
      ],
      price: 'Starting at $699/month',
      marketPrice: '$3,500-10,000/month',
      category: 'AI Services',
      popular: false,
      benefits: [
        'Reduce fuel costs by 25%',
        'Improve delivery times',
        'Optimize fleet utilization',
        'Reduce maintenance costs'
      ],
      useCases: [
        'Logistics Companies',
        'Fleet Management',
        'Delivery Services',
        'Public Transportation'
      ],
      integrations: ['Fleet Management Systems', 'GPS Tracking', 'Fuel Management'],
      support: 'Transportation Technology Expert',
      trial: '45-day fleet optimization trial',
      demo: 'Route optimization with your fleet data'
    },
    {
      id: 'ai-environmental-monitoring',
      icon: Globe,
      title: 'AI Environmental Monitoring',
      description: 'Monitor environmental conditions and predict climate impacts using AI and IoT sensor data. Ensure environmental compliance.',
      features: [
        'Environmental Sensing',
        'Climate Prediction',
        'Pollution Monitoring',
        'Data Analysis & Reporting',
        'Alert Systems',
        'Compliance Tracking',
        'Trend Analysis',
        'Predictive Modeling'
      ],
      price: 'Starting at $599/month',
      marketPrice: '$3,000-8,000/month',
      category: 'AI Services',
      popular: false,
      benefits: [
        'Ensure environmental compliance',
        'Predict environmental risks',
        'Optimize resource usage',
        'Improve sustainability'
      ],
      useCases: [
        'Environmental Agencies',
        'Manufacturing Facilities',
        'Smart Cities',
        'Sustainability Programs'
      ],
      integrations: ['IoT Sensors', 'Environmental Databases', 'Compliance Systems'],
      support: 'Environmental Technology Consultant',
      trial: '60-day environmental monitoring trial',
      demo: 'Environmental analysis with your location data'
    },
    {
      id: 'ai-retail-personalization',
      icon: Globe,
      title: 'AI Retail Personalization',
      description: 'Create personalized shopping experiences with AI-driven product recommendations and customer insights. Increase sales and customer satisfaction.',
      features: [
        'Product Recommendations',
        'Customer Segmentation',
        'Price Optimization',
        'Inventory Management',
        'Customer Analytics',
        'Behavioral Analysis',
        'A/B Testing',
        'Personalized Marketing'
      ],
      price: 'Starting at $799/month',
      marketPrice: '$4,000-12,000/month',
      category: 'AI Services',
      popular: false,
      benefits: [
        'Increase sales by 35%',
        'Improve customer satisfaction',
        'Reduce cart abandonment',
        'Optimize inventory'
      ],
      useCases: [
        'E-commerce Platforms',
        'Retail Stores',
        'Marketplace Sellers',
        'Subscription Services'
      ],
      integrations: ['E-commerce Platforms', 'CRM Systems', 'Marketing Automation'],
      support: 'Retail Technology Consultant',
      trial: '30-day personalization trial',
      demo: 'Personalization demo with your product catalog'
    },
    {
      id: 'ai-sports-analytics',
      icon: BarChart3,
      title: 'AI Sports Analytics',
      description: 'Advanced sports performance analysis, injury prediction, and team optimization using AI technology. Gain competitive advantage.',
      features: [
        'Performance Analysis',
        'Injury Prediction',
        'Team Optimization',
        'Player Scouting',
        'Game Strategy',
        'Biomechanical Analysis',
        'Recovery Monitoring',
        'Tactical Insights'
      ],
      price: 'Starting at $999/month',
      marketPrice: '$5,000-15,000/month',
      category: 'AI Services',
      popular: false,
      benefits: [
        'Improve performance',
        'Reduce injury risk',
        'Optimize team strategy',
        'Enhance player development'
      ],
      useCases: [
        'Professional Sports Teams',
        'Athletic Programs',
        'Sports Analytics',
        'Player Development'
      ],
      integrations: ['Sports Data APIs', 'Wearable Devices', 'Video Analysis Systems'],
      support: 'Sports Technology Expert',
      trial: '45-day performance analysis trial',
      demo: 'Sports analysis with your team data'
    },
    {
      id: 'ai-mental-health-assistant',
      icon: Users,
      title: 'AI Mental Health Assistant',
      description: 'AI-powered mental health monitoring, mood tracking, and therapeutic support applications. Improve mental wellness outcomes.',
      features: [
        'Mood Tracking & Analysis',
        'Stress Detection',
        'Therapeutic Support',
        'Crisis Detection',
        'Wellness Recommendations',
        'Progress Monitoring',
        'Personalized Interventions',
        'Professional Integration'
      ],
      price: 'Starting at $199/month',
      marketPrice: '$1,000-3,000/month',
      category: 'AI Services',
      popular: false,
      benefits: [
        'Improve mental wellness',
        'Early intervention',
        'Reduce healthcare costs',
        'Accessible support'
      ],
      useCases: [
        'Healthcare Providers',
        'Mental Health Clinics',
        'Corporate Wellness',
        'Educational Institutions'
      ],
      integrations: ['Electronic Health Records', 'Wearable Devices', 'Therapy Platforms'],
      support: 'Mental Health Technology Consultant',
      trial: '30-day wellness monitoring trial',
      demo: 'Mental health assessment with your population'
    },

    // Micro SAAS Services - Real and Practical
    {
      id: 'ai-writing-assistant-pro',
      icon: FileText,
      title: 'AI Writing Assistant Pro',
      description: 'Advanced AI writing tool for blogs, emails, reports, and content creation with 100+ templates, plagiarism detection, and SEO optimization.',
      features: [
        '100+ Writing Templates',
        'Multi-language Support (25+ languages)',
        'Plagiarism Detection',
        'SEO Optimization',
        'Tone Adjustment',
        'Grammar & Style Check',
        'Content Planning',
        'Team Collaboration'
      ],
      price: '$29/month',
      marketPrice: '$50-150/month',
      category: 'Micro SAAS',
      popular: true,
      benefits: [
        'Save 5+ hours per week',
        'Improve content quality',
        'Increase engagement rates',
        'Boost SEO rankings'
      ],
      useCases: [
        'Content Creators',
        'Marketing Teams',
        'Bloggers',
        'Business Writers'
      ],
      integrations: ['WordPress', 'Google Docs', 'Notion', 'Slack', 'Microsoft Office'],
      support: 'Email Support + Video Tutorials',
      trial: '7-day free trial',
      demo: 'Live writing demo with your content'
    },
    {
      id: 'smart-analytics-pro',
      icon: BarChart3,
      title: 'Smart Analytics Pro',
      description: 'Real-time business analytics with AI insights, automated reports, and predictive forecasting. Make data-driven decisions faster.',
      features: [
        'Real-time Analytics',
        'Predictive Forecasting',
        'Automated Reports',
        'Custom Dashboards',
        'Data Integration (50+ sources)',
        'AI Insights',
        'Mobile App',
        'White-label Options'
      ],
      price: '$49/month',
      marketPrice: '$100-300/month',
      category: 'Micro SAAS',
      popular: true,
      benefits: [
        'Make faster decisions',
        'Identify trends early',
        'Automate reporting',
        'Improve business performance'
      ],
      useCases: [
        'Small Businesses',
        'E-commerce Stores',
        'Marketing Agencies',
        'Consultants'
      ],
      integrations: ['Google Analytics', 'Facebook Ads', 'Shopify', 'Stripe', 'HubSpot'],
      support: 'Email Support + Documentation',
      trial: '14-day free trial',
      demo: 'Analytics dashboard with your data'
    },
    {
      id: 'ai-scheduler-pro',
      icon: Calendar,
      title: 'AI Scheduler Pro',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and time management. Never miss important appointments.',
      features: [
        'Calendar Optimization',
        'Meeting Coordination',
        'Time Management',
        'Auto-scheduling',
        'Integration APIs',
        'Mobile App',
        'Team Scheduling',
        'Time Zone Management'
      ],
      price: '$19/month',
      marketPrice: '$30-80/month',
      category: 'Micro SAAS',
      popular: false,
      benefits: [
        'Save 3+ hours per week',
        'Reduce scheduling conflicts',
        'Improve time management',
        'Increase productivity'
      ],
      useCases: [
        'Consultants',
        'Service Providers',
        'Sales Teams',
        'Project Managers'
      ],
      integrations: ['Google Calendar', 'Outlook', 'Zoom', 'Teams', 'Calendly'],
      support: 'Email Support + Setup Guide',
      trial: '14-day free trial',
      demo: 'Scheduling demo with your calendar'
    },
    {
      id: 'expense-tracker-ai',
      icon: BarChart3,
      title: 'Expense Tracker AI',
      description: 'AI-powered expense management with receipt scanning, categorization, and budget insights. Simplify your financial tracking.',
      features: [
        'Receipt Scanning (OCR)',
        'Auto-categorization',
        'Budget Insights',
        'Tax Preparation',
        'Multi-currency Support',
        'Expense Reports',
        'Mobile App',
        'Team Management'
      ],
      price: '$15/month',
      marketPrice: '$25-60/month',
      category: 'Micro SAAS',
      popular: false,
      benefits: [
        'Save 2+ hours per week',
        'Improve expense accuracy',
        'Simplify tax preparation',
        'Better budget control'
      ],
      useCases: [
        'Small Businesses',
        'Freelancers',
        'Consultants',
        'Teams'
      ],
      integrations: ['QuickBooks', 'Xero', 'Stripe', 'PayPal', 'Bank APIs'],
      support: 'Email Support + Help Center',
      trial: '30-day free trial',
      demo: 'Expense tracking with your receipts'
    },
    {
      id: 'task-manager-ai',
      icon: CheckSquare,
      title: 'Task Manager AI',
      description: 'Advanced task management with AI prioritization, team collaboration, and progress tracking. Boost team productivity.',
      features: [
        'AI Task Prioritization',
        'Team Collaboration',
        'Progress Tracking',
        'Time Tracking',
        'Project Templates',
        'Automated Workflows',
        'Mobile App',
        'Integration APIs'
      ],
      price: '$39/month',
      marketPrice: '$60-150/month',
      category: 'Micro SAAS',
      popular: false,
      benefits: [
        'Increase productivity by 40%',
        'Improve task prioritization',
        'Better team coordination',
        'Reduce project delays'
      ],
      useCases: [
        'Project Teams',
        'Remote Workers',
        'Agencies',
        'Startups'
      ],
      integrations: ['Slack', 'Microsoft Teams', 'Google Workspace', 'Jira', 'Asana'],
      support: 'Email Support + Video Training',
      trial: '14-day free trial',
      demo: 'Task management with your projects'
    },
    {
      id: 'crm-lite-ai',
      icon: Users,
      title: 'CRM Lite AI',
      description: 'Lightweight CRM with AI lead scoring, contact management, and sales pipeline automation. Perfect for small businesses.',
      features: [
        'AI Lead Scoring',
        'Contact Management',
        'Sales Pipeline',
        'Email Integration',
        'Mobile App',
        'Automated Follow-ups',
        'Sales Analytics',
        'Custom Fields'
      ],
      price: '$59/month',
      marketPrice: '$100-250/month',
      category: 'Micro SAAS',
      popular: false,
      benefits: [
        'Increase sales by 25%',
        'Improve lead quality',
        'Automate follow-ups',
        'Better customer relationships'
      ],
      useCases: [
        'Small Businesses',
        'Sales Teams',
        'Consultants',
        'Agencies'
      ],
      integrations: ['Gmail', 'Outlook', 'Mailchimp', 'Zapier', 'Stripe'],
      support: 'Email Support + Setup Assistance',
      trial: '14-day free trial',
      demo: 'CRM setup with your contacts'
    },
    {
      id: 'email-optimizer-ai',
      icon: Mail,
      title: 'Email Optimizer AI',
      description: 'AI-powered email optimization with subject line suggestions, send time optimization, and A/B testing. Improve email performance.',
      features: [
        'Subject Line AI',
        'Send Time Optimization',
        'A/B Testing',
        'Open Rate Tracking',
        'Spam Analysis',
        'Content Optimization',
        'Performance Analytics',
        'Automated Campaigns'
      ],
      price: '$25/month',
      marketPrice: '$40-100/month',
      category: 'Micro SAAS',
      popular: false,
      benefits: [
        'Increase open rates by 30%',
        'Improve click-through rates',
        'Reduce spam complaints',
        'Optimize send times'
      ],
      useCases: [
        'Email Marketers',
        'E-commerce Stores',
        'Newsletter Publishers',
        'Marketing Teams'
      ],
      integrations: ['Mailchimp', 'Constant Contact', 'AWeber', 'SendGrid', 'Mailgun'],
      support: 'Email Support + Best Practices Guide',
      trial: '14-day free trial',
      demo: 'Email optimization with your campaigns'
    },
    {
      id: 'social-media-manager-ai',
      icon: Globe,
      title: 'Social Media Manager AI',
      description: 'AI-driven social media management with content creation, scheduling, and performance analytics. Grow your social presence.',
      features: [
        'Content Creation',
        'Auto-scheduling',
        'Performance Analytics',
        'Multi-platform Support',
        'Engagement Tracking',
        'Hashtag Optimization',
        'Competitor Analysis',
        'Team Collaboration'
      ],
      price: '$45/month',
      marketPrice: '$80-200/month',
      category: 'Micro SAAS',
      popular: false,
      benefits: [
        'Save 5+ hours per week',
        'Increase engagement by 50%',
        'Improve content quality',
        'Better social strategy'
      ],
      useCases: [
        'Social Media Managers',
        'Content Creators',
        'Small Businesses',
        'Marketing Agencies'
      ],
      integrations: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok'],
      support: 'Email Support + Content Strategy Guide',
      trial: '14-day free trial',
      demo: 'Social media strategy with your accounts'
    },
    {
      id: 'ai-design-studio-pro',
      icon: Sparkles,
      title: 'AI Design Studio Pro',
      description: 'Create stunning graphics, logos, and marketing materials with AI-powered design tools. Professional designs in minutes.',
      features: [
        'AI Design Tools',
        'Logo Generation',
        'Marketing Materials',
        'Brand Kit',
        'Template Library (500+ templates)',
        'Image Enhancement',
        'Color Palette Generator',
        'Export Options'
      ],
      price: '$35/month',
      marketPrice: '$60-150/month',
      category: 'Micro SAAS',
      popular: false,
      benefits: [
        'Save design costs by 80%',
        'Create professional designs',
        'Maintain brand consistency',
        'Speed up design process'
      ],
      useCases: [
        'Small Businesses',
        'Marketing Teams',
        'Content Creators',
        'Agencies'
      ],
      integrations: ['Canva', 'Adobe Creative Suite', 'Figma', 'Sketch'],
      support: 'Email Support + Design Tutorials',
      trial: '14-day free trial',
      demo: 'Design creation with your brand'
    },
    {
      id: 'landing-page-builder-ai',
      icon: Globe,
      title: 'Landing Page Builder AI',
      description: 'Build high-converting landing pages with AI optimization and A/B testing capabilities. Increase your conversion rates.',
      features: [
        'Drag-and-drop Builder',
        'AI Optimization',
        'A/B Testing',
        'Conversion Tracking',
        'Mobile Responsive',
        'Template Library',
        'Form Builder',
        'Analytics Integration'
      ],
      price: '$29/month',
      marketPrice: '$50-120/month',
      category: 'Micro SAAS',
      popular: false,
      benefits: [
        'Increase conversions by 40%',
        'Save design time',
        'Improve user experience',
        'Better performance tracking'
      ],
      useCases: [
        'Marketers',
        'E-commerce Stores',
        'SaaS Companies',
        'Agencies'
      ],
      integrations: ['Google Analytics', 'Facebook Pixel', 'Mailchimp', 'Stripe', 'Zapier'],
      support: 'Email Support + Conversion Guide',
      trial: '14-day free trial',
      demo: 'Landing page creation with your goals'
    },
    {
      id: 'seo-optimizer-ai',
      icon: SearchIcon,
      title: 'SEO Optimizer AI',
      description: 'AI-powered SEO analysis and optimization with keyword research and content suggestions. Improve your search rankings.',
      features: [
        'SEO Analysis',
        'Keyword Research',
        'Content Suggestions',
        'Ranking Tracking',
        'Technical Audits',
        'Competitor Analysis',
        'Local SEO',
        'Performance Monitoring'
      ],
      price: '$49/month',
      marketPrice: '$80-200/month',
      category: 'Micro SAAS',
      popular: false,
      benefits: [
        'Improve search rankings',
        'Increase organic traffic',
        'Identify SEO opportunities',
        'Track performance'
      ],
      useCases: [
        'Website Owners',
        'SEO Agencies',
        'Content Marketers',
        'E-commerce Stores'
      ],
      integrations: ['Google Search Console', 'Google Analytics', 'WordPress', 'Shopify'],
      support: 'Email Support + SEO Guide',
      trial: '14-day free trial',
      demo: 'SEO analysis with your website'
    },
    {
      id: 'ad-campaign-manager-ai',
      icon: BarChart3,
      title: 'Ad Campaign Manager AI',
      description: 'Automated ad campaign management with AI optimization across Google, Facebook, and LinkedIn. Maximize your ad ROI.',
      features: [
        'Multi-platform Ads',
        'AI Optimization',
        'Budget Management',
        'Performance Tracking',
        'Auto-bidding',
        'Audience Targeting',
        'Creative Testing',
        'ROI Analytics'
      ],
      price: '$79/month',
      marketPrice: '$150-400/month',
      category: 'Micro SAAS',
      popular: false,
      benefits: [
        'Increase ROI by 50%',
        'Reduce ad spend waste',
        'Improve targeting',
        'Automate optimization'
      ],
      useCases: [
        'Digital Marketers',
        'E-commerce Stores',
        'SaaS Companies',
        'Agencies'
      ],
      integrations: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'TikTok Ads'],
      support: 'Email Support + Ad Strategy Guide',
      trial: '14-day free trial',
      demo: 'Ad optimization with your campaigns'
    },
    {
      id: 'code-assistant-ai',
      icon: Code,
      title: 'Code Assistant AI',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages. Write better code faster.',
      features: [
        'Code Completion',
        'Debugging Help',
        'Code Optimization',
        'Multi-language Support',
        'Documentation Generation',
        'Code Review',
        'Refactoring Suggestions',
        'Best Practices'
      ],
      price: '$39/month',
      marketPrice: '$60-200/month',
      category: 'Micro SAAS',
      popular: false,
      benefits: [
        'Write code 3x faster',
        'Reduce bugs by 60%',
        'Learn best practices',
        'Improve code quality'
      ],
      useCases: [
        'Developers',
        'Software Teams',
        'Students',
        'Freelancers'
      ],
      integrations: ['VS Code', 'IntelliJ', 'Sublime Text', 'Atom', 'Vim'],
      support: 'Email Support + Developer Community',
      trial: '14-day free trial',
      demo: 'Code assistance with your projects'
    },
    {
      id: 'api-builder-ai',
      icon: Settings,
      title: 'API Builder AI',
      description: 'Create and manage APIs with AI assistance, documentation generation, and testing tools. Build APIs without coding.',
      features: [
        'API Creation',
        'Documentation Generation',
        'Testing Tools',
        'Version Control',
        'Rate Limiting',
        'Authentication',
        'Monitoring',
        'Deployment'
      ],
      price: '$59/month',
      marketPrice: '$100-300/month',
      category: 'Micro SAAS',
      popular: false,
      benefits: [
        'Build APIs without coding',
        'Generate documentation',
        'Ensure API quality',
        'Speed up development'
      ],
      useCases: [
        'Developers',
        'Product Teams',
        'Startups',
        'Enterprises'
      ],
      integrations: ['Postman', 'Swagger', 'GitHub', 'AWS', 'Google Cloud'],
      support: 'Email Support + API Guide',
      trial: '14-day free trial',
      demo: 'API creation with your requirements'
    },
    {
      id: 'bug-tracker-ai',
      icon: Shield,
      title: 'Bug Tracker AI',
      description: 'Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions. Improve software quality.',
      features: [
        'AI Issue Detection',
        'Priority Scoring',
        'Resolution Suggestions',
        'Team Collaboration',
        'Integration APIs',
        'Automated Testing',
        'Performance Monitoring',
        'Release Management'
      ],
      price: '$25/month',
      marketPrice: '$40-100/month',
      category: 'Micro SAAS',
      popular: false,
      benefits: [
        'Find bugs faster',
        'Improve prioritization',
        'Reduce resolution time',
        'Better team coordination'
      ],
      useCases: [
        'Development Teams',
        'QA Teams',
        'Product Managers',
        'DevOps Teams'
      ],
      integrations: ['Jira', 'GitHub', 'Slack', 'Jenkins', 'Docker'],
      support: 'Email Support + Bug Tracking Guide',
      trial: '14-day free trial',
      demo: 'Bug tracking with your projects'
    },
    {
      id: 'doc-generator-ai',
      icon: FileText,
      title: 'Doc Generator AI',
      description: 'Automatically generate technical documentation, API docs, and user guides from code. Keep documentation up to date.',
      features: [
        'Auto Documentation',
        'API Docs',
        'User Guides',
        'Code Comments',
        'Multiple Formats',
        'Version Control',
        'Collaboration',
        'Templates'
      ],
      price: '$19/month',
      marketPrice: '$30-80/month',
      category: 'Micro SAAS',
      popular: false,
      benefits: [
        'Save documentation time',
        'Keep docs up to date',
        'Improve code quality',
        'Better team onboarding'
      ],
      useCases: [
        'Development Teams',
        'Open Source Projects',
        'API Providers',
        'Software Companies'
      ],
      integrations: ['GitHub', 'GitLab', 'Bitbucket', 'Confluence', 'Notion'],
      support: 'Email Support + Documentation Guide',
      trial: '14-day free trial',
      demo: 'Documentation generation with your code'
    },

    // IT Services - Real and Comprehensive
    {
      id: 'cloud-migration-pro',
      icon: Cloud,
      title: 'Cloud Migration Pro',
      description: 'Seamless cloud migration to AWS, Azure, or Google Cloud with zero downtime and data integrity. Enterprise-grade migration service.',
      features: [
        'Zero Downtime Migration',
        'Data Integrity Guarantee',
        'Cost Optimization',
        'Security Compliance',
        '24/7 Support',
        'Performance Monitoring',
        'Disaster Recovery',
        'Multi-cloud Support'
      ],
      price: 'Starting at $2,999/project',
      marketPrice: '$10,000-50,000/project',
      category: 'IT Services',
      popular: true,
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability',
        'Enhance security',
        'Increase reliability'
      ],
      useCases: [
        'Enterprise Applications',
        'Legacy System Migration',
        'Data Center Consolidation',
        'Hybrid Cloud Setup'
      ],
      integrations: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Docker'],
      support: 'Dedicated Migration Team + 24/7 Support',
      trial: 'Free migration assessment',
      demo: 'Migration strategy with your infrastructure'
    },
    {
      id: 'cybersecurity-suite-pro',
      icon: Shield,
      title: 'Cybersecurity Suite Pro',
      description: 'Comprehensive security solutions with threat detection, vulnerability assessment, and automated response. Protect your business.',
      features: [
        '24/7 Threat Monitoring',
        'Vulnerability Assessment',
        'Penetration Testing',
        'Incident Response',
        'Compliance Management',
        'Security Training',
        'Risk Assessment',
        'Security Analytics'
      ],
      price: 'Starting at $799/month',
      marketPrice: '$3,000-10,000/month',
      category: 'IT Services',
      popular: true,
      benefits: [
        'Prevent security breaches',
        'Ensure compliance',
        'Reduce security risks',
        'Protect sensitive data'
      ],
      useCases: [
        'Financial Services',
        'Healthcare Organizations',
        'E-commerce Platforms',
        'Government Agencies'
      ],
      integrations: ['SIEM Systems', 'Firewalls', 'Antivirus', 'Identity Management'],
      support: 'Security Expert + 24/7 Monitoring',
      trial: 'Free security assessment',
      demo: 'Security analysis with your infrastructure'
    },
    {
      id: 'devops-cicd-pro',
      icon: Settings,
      title: 'DevOps & CI/CD Pro',
      description: 'Streamline development workflows with automated testing, deployment, and monitoring. Accelerate your development process.',
      features: [
        'Automated Testing',
        'Continuous Deployment',
        'Infrastructure Monitoring',
        'Version Control',
        'Collaboration Tools',
        'Performance Optimization',
        'Security Scanning',
        'Rollback Capabilities'
      ],
      price: 'Starting at $599/month',
      marketPrice: '$2,000-8,000/month',
      category: 'IT Services',
      popular: false,
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment errors',
        'Improve code quality',
        'Increase team productivity'
      ],
      useCases: [
        'Software Development Teams',
        'SaaS Companies',
        'E-commerce Platforms',
        'Mobile App Development'
      ],
      integrations: ['GitHub', 'Jenkins', 'Docker', 'Kubernetes', 'AWS'],
      support: 'DevOps Expert + Training',
      trial: 'Free DevOps assessment',
      demo: 'CI/CD pipeline with your code'
    },
    {
      id: 'database-management-pro',
      icon: Database,
      title: 'Database Management Pro',
      description: 'Database design, optimization, migration, and management with AI-powered performance tuning. Optimize your data infrastructure.',
      features: [
        'Database Design',
        'Performance Tuning',
        'Backup & Recovery',
        'Migration Services',
        'Monitoring & Alerting',
        'Security Hardening',
        'Capacity Planning',
        'Disaster Recovery'
      ],
      price: 'Starting at $399/month',
      marketPrice: '$1,500-5,000/month',
      category: 'IT Services',
      popular: false,
      benefits: [
        'Improve performance by 50%',
        'Reduce downtime',
        'Optimize costs',
        'Ensure data security'
      ],
      useCases: [
        'Enterprise Applications',
        'E-commerce Platforms',
        'Data Analytics',
        'Legacy System Modernization'
      ],
      integrations: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
      support: 'Database Expert + 24/7 Monitoring',
      trial: 'Free database assessment',
      demo: 'Database optimization with your data'
    },
    {
      id: 'network-solutions-pro',
      icon: Globe,
      title: 'Network Solutions Pro',
      description: 'Enterprise networking, VPN setup, load balancing, and network security with 24/7 monitoring. Optimize your network infrastructure.',
      features: [
        'Network Design',
        'VPN Configuration',
        'Load Balancing',
        'Network Security',
        '24/7 Monitoring',
        'Performance Optimization',
        'Disaster Recovery',
        'Compliance Management'
      ],
      price: 'Starting at $699/month',
      marketPrice: '$2,500-8,000/month',
      category: 'IT Services',
      popular: false,
      benefits: [
        'Improve network performance',
        'Enhance security',
        'Reduce downtime',
        'Optimize costs'
      ],
      useCases: [
        'Remote Work Setup',
        'Multi-location Businesses',
        'Cloud Connectivity',
        'Security Compliance'
      ],
      integrations: ['Cisco', 'Juniper', 'Fortinet', 'Palo Alto', 'AWS'],
      support: 'Network Expert + 24/7 Monitoring',
      trial: 'Free network assessment',
      demo: 'Network optimization with your infrastructure'
    },
    {
      id: 'mobile-app-development-pro',
      icon: Smartphone,
      title: 'Mobile App Development Pro',
      description: 'Native and cross-platform mobile applications with AI integration and modern UX design. Build apps that users love.',
      features: [
        'Native iOS & Android',
        'Cross-platform Development',
        'AI Integration',
        'Modern UX Design',
        'App Store Optimization',
        'Push Notifications',
        'Analytics Integration',
        'Maintenance & Support'
      ],
      price: 'Starting at $1,999/month',
      marketPrice: '$8,000-30,000/project',
      category: 'IT Services',
      popular: false,
      benefits: [
        'Reach mobile users',
        'Improve user engagement',
        'Increase revenue',
        'Competitive advantage'
      ],
      useCases: [
        'E-commerce Apps',
        'SaaS Mobile Apps',
        'Business Applications',
        'Consumer Apps'
      ],
      integrations: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      support: 'Mobile Expert + Design Team',
      trial: 'Free app concept review',
      demo: 'Mobile app prototype with your requirements'
    },
    {
      id: 'it-consulting-pro',
      icon: Users,
      title: 'IT Consulting Pro',
      description: 'Strategic IT consulting to optimize your technology infrastructure and processes. Make informed technology decisions.',
      features: [
        'Technology Assessment',
        'Strategic Planning',
        'Cost Optimization',
        'Digital Transformation',
        'Training Programs',
        'Vendor Management',
        'Compliance Consulting',
        'Performance Optimization'
      ],
      price: 'Starting at $299/hour',
      marketPrice: '$200-500/hour',
      category: 'IT Services',
      popular: false,
      benefits: [
        'Optimize IT investments',
        'Improve efficiency',
        'Reduce costs',
        'Stay competitive'
      ],
      useCases: [
        'Technology Strategy',
        'Digital Transformation',
        'Cost Optimization',
        'Compliance Planning'
      ],
      integrations: ['All Major Platforms', 'Cloud Providers', 'Software Vendors'],
      support: 'Senior IT Consultant',
      trial: 'Free IT assessment',
      demo: 'IT strategy session with your team'
    },
    {
      id: 'cloud-infrastructure-pro',
      icon: Cloud,
      title: 'Cloud Infrastructure Pro',
      description: 'Comprehensive cloud infrastructure management with 99.9% uptime guarantee and 24/7 monitoring. Scale with confidence.',
      features: [
        '99.9% Uptime SLA',
        '24/7 Monitoring',
        'Auto-scaling',
        'Cost Optimization',
        'Security Management',
        'Disaster Recovery',
        'Performance Optimization',
        'Compliance Support'
      ],
      price: 'Starting at $1,299/month',
      marketPrice: '$5,000-20,000/month',
      category: 'IT Services',
      popular: false,
      benefits: [
        'Ensure high availability',
        'Optimize costs',
        'Improve performance',
        'Enhance security'
      ],
      useCases: [
        'High-traffic Applications',
        'E-commerce Platforms',
        'SaaS Applications',
        'Data Processing'
      ],
      integrations: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker'],
      support: 'Cloud Architect + 24/7 Support',
      trial: 'Free infrastructure assessment',
      demo: 'Cloud optimization with your applications'
    },
    {
      id: 'data-backup-recovery-pro',
      icon: Database,
      title: 'Data Backup & Recovery Pro',
      description: 'Comprehensive data backup and disaster recovery solutions with automated backups and instant recovery. Protect your data.',
      features: [
        'Automated Backups',
        'Instant Recovery',
        'Disaster Recovery',
        'Data Encryption',
        'Compliance Support',
        'Multi-location Storage',
        'Version Control',
        'Testing & Validation'
      ],
      price: 'Starting at $199/month',
      marketPrice: '$500-2,000/month',
      category: 'IT Services',
      popular: false,
      benefits: [
        'Protect critical data',
        'Minimize downtime',
        'Ensure compliance',
        'Peace of mind'
      ],
      useCases: [
        'Critical Business Data',
        'Customer Information',
        'Financial Records',
        'Compliance Requirements'
      ],
      integrations: ['AWS S3', 'Azure Blob', 'Google Cloud Storage', 'On-premises'],
      support: 'Data Protection Expert + 24/7 Support',
      trial: 'Free backup assessment',
      demo: 'Backup strategy with your data'
    },
    {
      id: 'it-asset-management-pro',
      icon: Settings,
      title: 'IT Asset Management Pro',
      description: 'Complete IT asset lifecycle management with inventory tracking, maintenance scheduling, and cost optimization. Manage your IT assets efficiently.',
      features: [
        'Asset Tracking',
        'Maintenance Scheduling',
        'Cost Optimization',
        'License Management',
        'Depreciation Tracking',
        'Vendor Management',
        'Compliance Reporting',
        'Mobile App'
      ],
      price: 'Starting at $149/month',
      marketPrice: '$300-1,000/month',
      category: 'IT Services',
      popular: false,
      benefits: [
        'Optimize IT costs',
        'Improve asset utilization',
        'Ensure compliance',
        'Better planning'
      ],
      useCases: [
        'Enterprise IT Management',
        'Software License Management',
        'Hardware Lifecycle',
        'Compliance Tracking'
      ],
      integrations: ['ServiceNow', 'Jira', 'SAP', 'Oracle', 'Microsoft'],
      support: 'Asset Management Expert',
      trial: 'Free asset assessment',
      demo: 'Asset management with your inventory'
    },
    {
      id: 'website-hosting-pro',
      icon: Globe,
      title: 'Website Hosting Pro',
      description: 'Reliable website hosting with SSL certificates, CDN, and regular maintenance for optimal performance. Keep your website fast and secure.',
      features: [
        '99.9% Uptime',
        'SSL Certificates',
        'CDN Integration',
        'Regular Updates',
        'Performance Monitoring',
        'Security Scanning',
        'Backup Services',
        '24/7 Support'
      ],
      price: 'Starting at $49/month',
      marketPrice: '$100-500/month',
      category: 'IT Services',
      popular: false,
      benefits: [
        'Ensure website availability',
        'Improve performance',
        'Enhance security',
        'Reduce maintenance'
      ],
      useCases: [
        'Business Websites',
        'E-commerce Stores',
        'Blogs',
        'Portfolio Sites'
      ],
      integrations: ['WordPress', 'Drupal', 'Joomla', 'Custom Applications'],
      support: 'Hosting Expert + 24/7 Support',
      trial: 'Free hosting assessment',
      demo: 'Hosting optimization with your website'
    }
  ];

  const categories = [
    'All',
    'AI Services',
    'Micro SAAS',
    'IT Services'
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  const startIndex = (currentPage - 1) * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;
  const currentServices = filteredServices.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  return (
    <>
      <Helmet>
        <title>Enhanced Services - Zion Tech Group | AI, IT & Micro SAAS Solutions</title>
        <meta name="description" content="Discover our comprehensive range of real AI services, IT solutions, and micro SAAS tools. From AI voice assistants to cloud migration, we provide innovative solutions for modern businesses." />
        <meta name="keywords" content="AI services, IT services, micro SAAS, cloud migration, cybersecurity, AI voice assistant, predictive maintenance, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text glitch-text" data-text="Enhanced Services">
              Enhanced Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real, innovative AI services, IT solutions, and micro SAAS tools designed to transform your business. 
              Choose from 50+ proven solutions with transparent pricing and comprehensive support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                📧 Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-6 border border-cyan-500/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white cyber-glow'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white neon-text">
                {selectedCategory === 'All' ? 'All Services' : `${selectedCategory}`}
              </h2>
              <span className="text-gray-300">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentServices.map((service) => (
                <div key={service.id} className="quantum-card hologram-card p-8 hover:scale-105 transition-all duration-300 card-hover-lift group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      {service.marketPrice && (
                        <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                      )}
                    </div>
                    <div className="text-sm text-gray-300 mb-2">{service.trial}</div>
                    <div className="text-xs text-gray-400">{service.support}</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 cyber-button text-center py-3">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </button>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Previous
                </button>
                
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-cyan-500 text-white cyber-glow'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Choose from our comprehensive suite of AI services, IT solutions, and micro SAAS tools. 
                All services come with free trials, comprehensive support, and transparent pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button text-center py-4 px-8"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  📧 Email Us
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-300 text-sm mb-2">
                  📍 364 E Main St STE 1008, Middletown, DE 19709
                </p>
                <p className="text-gray-300 text-sm">
                  ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EnhancedServicesPage;