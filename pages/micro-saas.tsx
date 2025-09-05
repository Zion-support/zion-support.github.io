import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Star, 
  DollarSign, 
  Award, 
  Globe, 
  Lock, 
  Cpu, 
  Bot, 
  FileText, 
  Image, 
  Video, 
  Mic, 
  Code, 
  Settings, 
  Monitor, 
  Smartphone, 
  Server, 
  Network, 
  Car, 
  Rocket, 
  Heart, 
  Building, 
  Sprout,
  Mail,
  MessageSquare,
  Search,
  Eye,
  Target,
  TrendingUp,
  Package,
  Calendar,
  BookOpen,
  ShoppingCart,
  Home,
  Trash2,
  Camera,
  HardDrive,
  Database
} from 'lucide-react';


const microSaaSProducts = [
  {

    title: 'Cloud Cost Guard (FinOps Assistant)',
    description: 'Anomaly detection, rightsizing, forecasting and budget guardrails across AWS/Azure/GCP.',
    icon: DollarSign,
    features: ['Cost Anomaly Detection', 'Auto Rightsizing', 'Budget Forecasting', 'Multi-cloud Support'],
    pricing: '$299 - $1,499/month',
    category: 'FinOps',
    popular: true
  },
  {
    title: 'LLM Evaluation & Safety Suite',
    description: 'Prompt evaluation, bias/toxicity checks, jailbreak tests and guardrail policies.',
    icon: Shield,
    features: ['Prompt Testing', 'Bias Detection', 'Safety Checks', 'Guardrail Policies'],
    pricing: '$799 - $3,500/month',
    category: 'AI Safety',
    popular: true
  },
  {
    title: 'Customer Feedback & NPS Micro-App',
    description: 'Embed surveys, analyze sentiment and route issues to the right team automatically.',
    icon: MessageSquare,
    features: ['Survey Builder', 'Sentiment Analysis', 'Auto Routing', 'NPS Tracking'],
    pricing: '$149 - $799/month',
    category: 'Customer Success'
  },
  {
    title: 'API Rate Limiting & Analytics',
    description: 'Intelligent rate limiting with detailed analytics and usage insights.',
    icon: BarChart3,
    features: ['Smart Rate Limiting', 'Usage Analytics', 'Real-time Monitoring', 'Custom Rules'],
    pricing: '$199 - $999/month',
    category: 'API Management'
  },
  {
    title: 'Content Moderation AI',
    description: 'Automated content moderation using advanced AI for text, images, and videos.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Custom Rules', 'Real-time Processing', 'API Integration'],
    pricing: '$399 - $1,999/month',
    category: 'Content Safety'
  },
  {
    title: 'Workflow Automation Engine',
    description: 'No-code workflow automation with integrations to popular business tools.',
    icon: Settings,
    features: ['Visual Builder', '100+ Integrations', 'Conditional Logic', 'Scheduled Tasks'],
    pricing: '$99 - $599/month',
    category: 'Automation',
    popular: true
  },
  {
    title: 'AI Lead Scoring & Enrichment',
    description: 'Intelligent lead scoring and data enrichment for sales teams.',
    icon: Target,
    features: ['Lead Scoring', 'Data Enrichment', 'Behavioral Tracking', 'CRM Integration'],
    pricing: '$199 - $999/month',
    category: 'Sales'
  },
  {
    title: 'Social Media Scheduler Pro',
    description: 'Advanced social media management with AI-powered content optimization.',
    icon: Globe,
    features: ['Multi-platform Posting', 'Optimal Timing', 'Content Suggestions', 'Analytics Dashboard'],
    pricing: '$49 - $299/month',
    category: 'Social Media'
  },
  {
    title: 'Invoice & Payment Processor',
    description: 'Streamlined invoicing and payment processing for small businesses.',
    icon: DollarSign,
    features: ['Invoice Generation', 'Payment Processing', 'Recurring Billing', 'Financial Reports'],
    pricing: '$29 - $199/month',
    category: 'Finance'
  },
  {
    title: 'Project Time Tracker',
    description: 'Comprehensive time tracking and project management for teams.',
    icon: Clock,
    features: ['Time Tracking', 'Project Management', 'Team Collaboration', 'Reporting'],
    pricing: '$9 - $49/month',
    category: 'Productivity'
  },
  {
    title: 'Email Marketing Automation',
    description: 'Advanced email marketing with AI-powered personalization and automation.',
    icon: Mail,
    features: ['Email Templates', 'Automation Workflows', 'A/B Testing', 'Analytics'],
    pricing: '$39 - $299/month',
    category: 'Marketing'
  },
  {
    title: 'Inventory Management System',
    description: 'Smart inventory tracking and management for e-commerce businesses.',
    icon: Package,
    features: ['Stock Tracking', 'Low Stock Alerts', 'Supplier Management', 'Analytics'],
    pricing: '$79 - $399/month',
    category: 'E-commerce'
  },
  {
    title: 'Customer Support Ticketing',
    description: 'AI-powered customer support ticketing and knowledge base system.',
    icon: MessageSquare,
    features: ['Ticket Management', 'Knowledge Base', 'AI Chatbot', 'Performance Analytics'],
    pricing: '$19 - $149/month',
    category: 'Support'
  },
  {
    title: 'HR & Payroll Management',
    description: 'Complete HR and payroll solution for small to medium businesses.',
    icon: Users,
    features: ['Employee Management', 'Payroll Processing', 'Time Off Tracking', 'Compliance'],
    pricing: '$99 - $499/month',
    category: 'HR'
  },
  {
    title: 'Website Analytics & Heatmaps',
    description: 'Advanced website analytics with heatmaps and user behavior tracking.',
    icon: BarChart3,
    features: ['User Behavior Tracking', 'Heatmaps', 'Conversion Funnels', 'A/B Testing'],
    pricing: '$29 - $199/month',
    category: 'Analytics'
  },
  {
    title: 'Document Management System',
    description: 'Secure document storage, sharing, and collaboration platform.',
    icon: FileText,
    features: ['Document Storage', 'Version Control', 'Collaboration Tools', 'Security'],
    pricing: '$19 - $99/month',
    category: 'Document Management'
  },
  {
    title: 'Event Management Platform',
    description: 'Complete event planning and management solution for organizers.',
    icon: Calendar,
    features: ['Event Planning', 'Registration Management', 'Payment Processing', 'Analytics'],
    pricing: '$49 - $299/month',
    category: 'Events'
  },
  {
    title: 'Learning Management System',
    description: 'Online learning platform for courses, training, and certifications.',
    icon: BookOpen,
    features: ['Course Creation', 'Student Management', 'Progress Tracking', 'Certificates'],
    pricing: '$79 - $399/month',
    category: 'Education'
  },
  {
    title: 'Real Estate CRM',
    description: 'Specialized CRM for real estate agents and property management.',
    icon: Building,
    features: ['Lead Management', 'Property Listings', 'Client Communication', 'Deal Tracking'],
    pricing: '$39 - $199/month',
    category: 'Real Estate'
  },
  {
    title: 'Restaurant POS & Management',
    description: 'Point of sale and restaurant management system with inventory tracking.',
    icon: ShoppingCart,
    features: ['POS System', 'Menu Management', 'Inventory Tracking', 'Staff Scheduling'],
    pricing: '$99 - $499/month',
    category: 'Restaurant'
  },
  {
    title: 'Fitness & Wellness Tracker',
    description: 'Comprehensive fitness tracking and wellness management platform.',
    icon: Heart,
    features: ['Workout Tracking', 'Nutrition Logging', 'Progress Monitoring', 'Community Features'],
    pricing: '$9 - $49/month',
    category: 'Health & Fitness'
  },
  {
    title: 'Cryptocurrency Portfolio Tracker',
    description: 'Advanced cryptocurrency portfolio tracking and trading analytics.',
    icon: TrendingUp,
    features: ['Portfolio Tracking', 'Price Alerts', 'Trading Analytics', 'Tax Reporting'],
    pricing: '$19 - $99/month',
    category: 'Crypto'
  },
  {
    title: 'Fleet Management System',
    description: 'GPS tracking and fleet management solution for transportation companies.',
    icon: Car,
    features: ['GPS Tracking', 'Route Optimization', 'Driver Management', 'Maintenance Scheduling'],
    pricing: '$199 - $999/month',
    category: 'Transportation'
  },
  {
    title: 'Property Maintenance Tracker',
    description: 'Property maintenance and facility management solution.',
    icon: Settings,
    features: ['Maintenance Scheduling', 'Work Order Management', 'Vendor Management', 'Reporting'],
    pricing: '$49 - $299/month',
    category: 'Property Management'
  },
  {
    title: 'AI-Powered Code Review Assistant',

    description: 'Automated code review and quality assurance using advanced AI analysis.',
    icon: Code,
    features: ['Automated Code Review', 'Security Vulnerability Detection', 'Performance Analysis', 'Best Practice Suggestions'],
    pricing: '$199 - $999/month',
    category: 'Development Tools',
    popular: true
  },
  {
    title: 'Smart Contract Auditor',
    description: 'Automated smart contract security analysis and vulnerability detection.',
    icon: Shield,
    features: ['Security Analysis', 'Gas Optimization', 'Vulnerability Detection', 'Compliance Checking'],
    pricing: '$299 - $1,499/month',
    category: 'Blockchain'
  },
  {
    title: 'AI-Powered SEO Optimizer',
    description: 'Intelligent SEO analysis and optimization recommendations for websites.',
    icon: Search,
    features: ['Keyword Research', 'Content Optimization', 'Technical SEO', 'Competitor Analysis'],
    pricing: '$79 - $399/month',
    category: 'Marketing'
  },
  {
    title: 'Automated Testing Platform',
    description: 'AI-driven automated testing for web and mobile applications.',
    icon: Monitor,
    features: ['Visual Testing', 'API Testing', 'Performance Testing', 'Cross-browser Testing'],
    pricing: '$149 - $799/month',
    category: 'Quality Assurance'
  },
  {
    title: 'AI Customer Sentiment Analyzer',
    description: 'Real-time customer sentiment analysis across multiple channels.',
    icon: MessageSquare,
    features: ['Multi-channel Analysis', 'Real-time Monitoring', 'Trend Analysis', 'Alert System'],
    pricing: '$99 - $499/month',
    category: 'Analytics'
  },
  {
    title: 'Smart Energy Management',
    description: 'AI-powered energy consumption optimization for buildings and facilities.',
    icon: Zap,
    features: ['Energy Monitoring', 'Predictive Analytics', 'Cost Optimization', 'Sustainability Reporting'],
    pricing: '$199 - $999/month',
    category: 'Sustainability'
  },
  {
    title: 'AI-Powered Video Clip Maker',
    description: 'Automatically transform long-form videos into engaging short clips for social media platforms.',
    icon: Video,
    features: ['Auto Video Editing', 'Social Media Optimization', 'AI Scene Detection', 'Multi-format Export'],
    pricing: '$149 - $799/month',
    category: 'Content Creation',
    popular: true
  },
  {
    title: 'E-Commerce Return Management SaaS',
    description: 'Streamlined return processing with automated workflows and customer self-service portal.',
    icon: Package,
    features: ['Automated Return Processing', 'Self-Service Portal', 'Return Analytics', 'Inventory Integration'],
    pricing: '$99 - $499/month',
    category: 'E-commerce'
  },
  {
    title: 'Mobile-First Survey Tool',
    description: 'Create engaging, adaptive surveys optimized for mobile devices with real-time analytics.',
    icon: Smartphone,
    features: ['Mobile-Optimized Design', 'Adaptive Questioning', 'Real-time Analytics', 'Multi-language Support'],
    pricing: '$29 - $199/month',
    category: 'Data Collection'
  },
  {
    title: 'AI-Powered Email Responder',
    description: 'Intelligent email automation with smart categorization, auto-responses, and priority flagging.',
    icon: Mail,
    features: ['Smart Categorization', 'Auto-Response Generation', 'Priority Detection', 'Sentiment Analysis'],
    pricing: '$79 - $399/month',
    category: 'Communication',
    popular: true
  },
  {
    title: 'Quantum Computing Optimization Suite',
    description: 'Leverage quantum algorithms for complex optimization problems in logistics and finance.',
    icon: Cpu,
    features: ['Quantum Algorithms', 'Optimization Problems', 'Financial Modeling', 'Logistics Planning'],
    pricing: '$2,999 - $9,999/month',
    category: 'Advanced Computing'
  },
  {
    title: 'AI-Powered Talent Matching Platform',
    description: 'Advanced AI matching system connecting businesses with verified tech professionals.',
    icon: Users,
    features: ['AI Skill Matching', 'Verified Professionals', 'Project Matching', 'Performance Tracking'],
    pricing: '$199 - $1,299/month',
    category: 'Recruitment',
    popular: true
  },
  {
    title: 'Blockchain Document Verification',
    description: 'Secure document verification and authentication using blockchain technology.',
    icon: Shield,
    features: ['Document Authentication', 'Blockchain Storage', 'Tamper Detection', 'Legal Compliance'],
    pricing: '$149 - $799/month',
    category: 'Blockchain'
  },
  {
    title: 'AI-Powered Content Moderation Suite',
    description: 'Advanced content moderation using AI for text, images, and videos across platforms.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Real-time Processing', 'Custom Rules Engine', 'API Integration'],
    pricing: '$299 - $1,999/month',
    category: 'Content Safety'
  },
  {
    title: 'Smart Contract Development Platform',
    description: 'No-code smart contract creation and deployment with testing and auditing tools.',
    icon: Code,
    features: ['Visual Contract Builder', 'Automated Testing', 'Security Auditing', 'Multi-chain Support'],
    pricing: '$199 - $999/month',
    category: 'Blockchain'
  },
  {
    title: 'AI-Powered Financial Forecasting',
    description: 'Advanced financial modeling and forecasting using machine learning algorithms.',
    icon: TrendingUp,
    features: ['Predictive Modeling', 'Risk Assessment', 'Scenario Planning', 'Real-time Updates'],
    pricing: '$399 - $2,499/month',
    category: 'Finance'
  },
  {
    title: 'Voice AI Assistant Platform',
    description: 'Custom voice AI assistants with natural language processing and multi-language support.',
    icon: Mic,
    features: ['Voice Recognition', 'Natural Language Processing', 'Multi-language Support', 'Custom Training'],
    pricing: '$299 - $1,999/month',
    category: 'Voice AI'
  },
  {
    title: 'AI-Powered Code Generation Tool',
    description: 'Generate code from natural language descriptions with support for multiple programming languages.',
    icon: Code,
    features: ['Natural Language to Code', 'Multi-language Support', 'Code Optimization', 'Error Detection'],
    pricing: '$199 - $1,299/month',
    category: 'Development Tools'
  },
  {
    title: 'Smart Home Automation Hub',
    description: 'Centralized control and automation for smart home devices with AI-powered optimization.',
    icon: Home,
    features: ['Device Integration', 'AI Optimization', 'Energy Management', 'Security Monitoring'],
    pricing: '$49 - $299/month',
    category: 'IoT'
  },
  {
    title: 'AI-Powered Medical Diagnosis Assistant',
    description: 'AI assistant for medical professionals providing diagnostic support and treatment recommendations.',
    icon: Heart,
    features: ['Symptom Analysis', 'Diagnostic Support', 'Treatment Recommendations', 'Medical Literature Search'],
    pricing: '$999 - $4,999/month',
    category: 'Healthcare'
  },
  {
    title: 'Automated Legal Document Generator',
    description: 'AI-powered legal document creation and contract generation with compliance checking.',
    icon: FileText,
    features: ['Document Templates', 'Compliance Checking', 'Contract Analysis', 'Legal Research'],
    pricing: '$199 - $1,499/month',
    category: 'Legal Tech'
  },
  {
    title: 'AI-Powered Supply Chain Optimizer',
    description: 'Intelligent supply chain management with demand forecasting and logistics optimization.',
    icon: Network,
    features: ['Demand Forecasting', 'Logistics Optimization', 'Inventory Management', 'Risk Assessment'],
    pricing: '$499 - $2,999/month',
    category: 'Supply Chain'
  },
  {
    title: 'Smart Agriculture Monitoring System',
    description: 'IoT-based agricultural monitoring with AI-powered crop analysis and yield optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Weather Integration', 'Pest Detection'],
    pricing: '$199 - $999/month',
    category: 'Agriculture'
  },
  {
    title: 'AI-Powered Cybersecurity Threat Hunter',
    description: 'Advanced threat detection and response system using AI and machine learning.',
    icon: Shield,
    features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Forensic Analysis'],
    pricing: '$799 - $3,999/month',
    category: 'Cybersecurity'
  },
  {
    title: 'Virtual Reality Training Platform',
    description: 'Immersive VR training solutions for corporate training and skill development.',
    icon: Monitor,
    features: ['VR Training Modules', 'Progress Tracking', 'Multi-user Support', 'Analytics Dashboard'],
    pricing: '$299 - $1,999/month',
    category: 'VR/AR'
  },
  {
    title: 'AI-Powered Personal Finance Manager',
    description: 'Intelligent personal finance management with budgeting, investment advice, and goal tracking.',
    icon: DollarSign,
    features: ['Budget Management', 'Investment Advice', 'Goal Tracking', 'Expense Categorization'],
    pricing: '$9 - $49/month',
    category: 'Personal Finance'
  },
  {
    title: 'AI-Powered Legal Document Analyzer',
    description: 'Automated legal document analysis and contract review using AI.',
    icon: FileText,
    features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Clause Extraction'],
    pricing: '$299 - $1,499/month',
    category: 'Legal Tech'
  },
  {
    title: 'Intelligent Inventory Forecasting',
    description: 'AI-driven demand forecasting and inventory optimization for retail.',
    icon: Package,
    features: ['Demand Forecasting', 'Stock Optimization', 'Supplier Management', 'Seasonal Analysis'],
    pricing: '$149 - $799/month',
    category: 'Retail'
  },
  {
    title: 'AI-Powered Medical Diagnosis Assistant',
    description: 'AI assistant for medical professionals with diagnostic support and analysis.',
    icon: Heart,
    features: ['Symptom Analysis', 'Diagnostic Support', 'Medical Image Analysis', 'Treatment Recommendations'],
    pricing: '$499 - $2,499/month',
    category: 'Healthcare'
  },
  {
    title: 'Smart Agriculture Monitor',
    description: 'IoT and AI-powered agricultural monitoring and optimization system.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Weather Analysis', 'Pest Detection', 'Yield Prediction'],
    pricing: '$199 - $999/month',
    category: 'Agriculture'
  },
  {
    title: 'AI-Powered Financial Advisor',
    description: 'Personalized financial planning and investment advice using AI.',
    icon: TrendingUp,
    features: ['Portfolio Analysis', 'Risk Assessment', 'Investment Recommendations', 'Goal Tracking'],
    pricing: '$29 - $199/month',
    category: 'FinTech'
  },
  {
    title: 'Intelligent Meeting Scheduler',
    description: 'AI-powered meeting scheduling with optimal time slot recommendations.',
    icon: Calendar,
    features: ['Smart Scheduling', 'Conflict Resolution', 'Time Zone Management', 'Integration APIs'],
    pricing: '$19 - $99/month',
    category: 'Productivity'
  },
  {
    title: 'AI-Powered Language Learning',
    description: 'Personalized language learning platform with AI tutoring and assessment.',
    icon: BookOpen,
    features: ['Adaptive Learning', 'Speech Recognition', 'Progress Tracking', 'Cultural Context'],
    pricing: '$9 - $49/month',
    category: 'Education'
  },
  {
    title: 'Smart Home Automation Hub',
    description: 'Centralized smart home control with AI-powered automation and energy management.',
    icon: Home,
    features: ['Device Control', 'Energy Management', 'Security Monitoring', 'Voice Commands'],
    pricing: '$49 - $299/month',
    category: 'Smart Home'
  },
  {
    title: 'AI-Powered Content Moderation',
    description: 'Advanced content moderation using AI for text, images, and videos.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Real-time Processing', 'Custom Rules', 'API Integration'],
    pricing: '$199 - $999/month',
    category: 'Content Safety'
  },
  {
    title: 'Intelligent Supply Chain Optimizer',
    description: 'AI-powered supply chain optimization and logistics management.',
    icon: Network,
    features: ['Route Optimization', 'Demand Forecasting', 'Supplier Management', 'Risk Analysis'],
    pricing: '$299 - $1,499/month',
    category: 'Logistics'
  },
  {
    title: 'AI-Powered Personal Assistant',
    description: 'Intelligent personal assistant for task management and productivity.',
    icon: Bot,
    features: ['Task Management', 'Email Organization', 'Schedule Optimization', 'Voice Commands'],
    pricing: '$19 - $99/month',
    category: 'Productivity'
  },
  {
    title: 'Smart Waste Management',
    description: 'IoT and AI-powered waste management and recycling optimization.',
    icon: Trash2,
    features: ['Waste Tracking', 'Recycling Optimization', 'Route Planning', 'Sustainability Metrics'],
    pricing: '$149 - $799/month',
    category: 'Sustainability'
  },
  {
    title: 'AI-Powered Cybersecurity Monitor',
    description: 'Real-time cybersecurity monitoring and threat detection using AI.',
    icon: Shield,
    features: ['Threat Detection', 'Anomaly Analysis', 'Incident Response', 'Compliance Monitoring'],
    pricing: '$399 - $1,999/month',
    category: 'Cybersecurity'
  },
  {
    title: 'AI Video Content Generator',
    description: 'Automated video creation from text prompts with AI-generated visuals and voiceovers.',
    icon: Video,
    features: ['Text-to-Video', 'AI Voice Synthesis', 'Template Library', 'Brand Customization'],
    pricing: '$199 - $999/month',
    category: 'Content Creation',
    popular: true
  },
  {
    title: 'Smart Contract Generator',
    description: 'AI-powered smart contract creation and deployment for blockchain applications.',
    icon: Code,
    features: ['Contract Templates', 'Security Auditing', 'Gas Optimization', 'Multi-chain Support'],
    pricing: '$299 - $1,499/month',
    category: 'Blockchain'
  },
  {
    title: 'AI-Powered Email Signature Generator',
    description: 'Professional email signature creation with branding and compliance features.',
    icon: Mail,
    features: ['Template Library', 'Brand Integration', 'Compliance Checking', 'Analytics'],
    pricing: '$9 - $49/month',
    category: 'Productivity'
  },
  {
    title: 'Intelligent Password Manager',
    description: 'AI-enhanced password management with breach monitoring and security recommendations.',
    icon: Lock,
    features: ['Password Generation', 'Breach Monitoring', 'Security Scoring', 'Team Sharing'],
    pricing: '$19 - $99/month',
    category: 'Security'
  },
  {
    title: 'AI-Powered Resume Builder',
    description: 'Intelligent resume creation with ATS optimization and industry-specific templates.',
    icon: FileText,
    features: ['ATS Optimization', 'Industry Templates', 'Skills Matching', 'Cover Letter Generator'],
    pricing: '$29 - $149/month',
    category: 'Career Tools'
  },
  {
    title: 'Smart Meeting Transcription',
    description: 'AI-powered meeting transcription with action item extraction and follow-up automation.',
    icon: Mic,
    features: ['Real-time Transcription', 'Action Item Extraction', 'Speaker Identification', 'Integration APIs'],
    pricing: '$49 - $299/month',
    category: 'Productivity'
  },
  {
    title: 'AI-Powered Logo Generator',
    description: 'Professional logo creation using AI with brand guidelines and multiple formats.',
    icon: Image,
    features: ['AI Design', 'Brand Guidelines', 'Multiple Formats', 'Trademark Checking'],
    pricing: '$39 - $199/month',
    category: 'Design'
  },
  {
    title: 'Intelligent Expense Tracker',
    description: 'AI-powered expense management with receipt scanning and categorization.',
    icon: DollarSign,
    features: ['Receipt Scanning', 'Auto Categorization', 'Tax Preparation', 'Team Management'],
    pricing: '$19 - $99/month',
    category: 'Finance'
  },
  {
    title: 'AI-Powered Social Media Content Calendar',
    description: 'Intelligent social media planning with content suggestions and optimal posting times.',
    icon: Calendar,
    features: ['Content Planning', 'Optimal Timing', 'Hashtag Suggestions', 'Performance Analytics'],
    pricing: '$29 - $149/month',
    category: 'Social Media'
  },
  {
    title: 'Smart Contract Testing Platform',
    description: 'Automated testing and simulation environment for smart contracts across multiple blockchains.',
    icon: Code,
    features: ['Automated Testing', 'Gas Analysis', 'Security Auditing', 'Multi-chain Support'],
    pricing: '$199 - $999/month',
    category: 'Blockchain'
  },
  {
    title: 'AI-Powered Voice Cloning',
    description: 'High-quality voice cloning and text-to-speech synthesis for content creators.',
    icon: Mic,
    features: ['Voice Cloning', 'Multi-language Support', 'Emotion Control', 'API Integration'],
    pricing: '$99 - $499/month',
    category: 'Voice Technology',
    popular: true
  },
  {
    title: 'Intelligent Document Parser',
    description: 'AI-powered document extraction and data parsing from PDFs, images, and forms.',
    icon: FileText,
    features: ['OCR Technology', 'Data Extraction', 'Form Processing', 'API Integration'],
    pricing: '$49 - $299/month',
    category: 'Document Processing'
  },
  {
    title: 'AI-Powered Website Builder',
    description: 'Intelligent website creation with AI-generated content and design optimization.',
    icon: Globe,
    features: ['AI Design', 'Content Generation', 'SEO Optimization', 'Mobile Responsive'],
    pricing: '$79 - $399/month',
    category: 'Web Development'
  },
  {
    title: 'Smart Inventory Photography',
    description: 'AI-powered product photography and image optimization for e-commerce.',
    icon: Camera,
    features: ['Auto Photography', 'Background Removal', 'Image Enhancement', 'Batch Processing'],
    pricing: '$29 - $149/month',
    category: 'E-commerce'
  },
  {
    title: 'AI-Powered Translation Service',
    description: 'Real-time translation with context awareness and industry-specific terminology.',
    icon: Globe,
    features: ['Real-time Translation', 'Context Awareness', 'Industry Terms', 'API Integration'],
    pricing: '$19 - $99/month',
    category: 'Language Services'
  },
  {
    title: 'Intelligent Email Warm-up',
    description: 'AI-powered email deliverability optimization and sender reputation management.',
    icon: Mail,
    features: ['Deliverability Optimization', 'Reputation Management', 'A/B Testing', 'Analytics'],
    pricing: '$39 - $199/month',
    category: 'Email Marketing'
  },
  {
    title: 'AI-Powered Code Documentation',
    description: 'Automated code documentation generation with intelligent comments and API docs.',
    icon: Code,
    features: ['Auto Documentation', 'API Generation', 'Code Comments', 'Integration Guides'],
    pricing: '$49 - $249/month',
    category: 'Development Tools'
  },
  {
    title: 'Smart Contract Analytics',
    description: 'Comprehensive analytics and monitoring for smart contract performance and security.',
    icon: BarChart3,
    features: ['Performance Analytics', 'Security Monitoring', 'Gas Optimization', 'Alert System'],
    pricing: '$99 - $499/month',
    category: 'Blockchain'
  },
  {
    title: 'AI-Powered Lead Qualification',
    description: 'Intelligent lead scoring and qualification using behavioral analysis and intent signals.',
    icon: Target,
    features: ['Behavioral Analysis', 'Intent Scoring', 'Lead Prioritization', 'CRM Integration'],
    pricing: '$79 - $399/month',
    category: 'Sales'
  },
  {
    title: 'Intelligent Data Backup',
    description: 'AI-powered automated backup with intelligent scheduling and recovery optimization.',
    icon: HardDrive,
    features: ['Automated Backup', 'Smart Scheduling', 'Recovery Optimization', 'Version Control'],
    pricing: '$19 - $99/month',
    category: 'Data Management'
  },
  {
    title: 'AI-Powered Carbon Footprint Tracker',
    description: 'Real-time carbon footprint monitoring and sustainability optimization for businesses.',
    icon: Sprout,
    features: ['Carbon Tracking', 'Sustainability Metrics', 'Emission Reduction', 'Compliance Reporting'],
    pricing: '$199 - $1,299/month',
    category: 'Sustainability',
    popular: true
  },
  {
    title: 'Smart Contract Security Scanner',
    description: 'Automated smart contract vulnerability detection and security analysis for DeFi projects.',
    icon: Shield,
    features: ['Vulnerability Detection', 'Gas Optimization', 'Audit Reports', 'Real-time Monitoring'],
    pricing: '$299 - $1,999/month',
    category: 'Blockchain Security',
    popular: true
  },
  {
    title: 'AI-Powered Voice Cloning Platform',
    description: 'High-quality voice cloning and synthesis for content creators and businesses.',
    icon: Mic,
    features: ['Voice Cloning', 'Emotion Control', 'Multi-language Support', 'API Integration'],
    pricing: '$199 - $1,499/month',
    category: 'Voice Technology',
    popular: true
  },
  {
    title: 'Intelligent Meeting Transcription & Analysis',
    description: 'AI-powered meeting transcription with sentiment analysis and action item extraction.',
    icon: MessageSquare,
    features: ['Real-time Transcription', 'Sentiment Analysis', 'Action Items', 'Meeting Insights'],
    pricing: '$49 - $299/month',
    category: 'Productivity',
    popular: true
  },
  {
    title: 'AI-Powered Code Documentation Generator',
    description: 'Automated code documentation generation with intelligent explanations and examples.',
    icon: FileText,
    features: ['Auto Documentation', 'Code Examples', 'API Documentation', 'Version Control'],
    pricing: '$99 - $599/month',
    category: 'Developer Tools',
    popular: true
  },
  {
    title: 'Smart Contract Generator & Deployer',
    description: 'AI-powered smart contract creation, testing, and deployment for blockchain applications.',
    icon: Code,
    features: ['Contract Generation', 'Automated Testing', 'Gas Optimization', 'Deployment Tools'],
    pricing: '$199 - $1,299/month',
    category: 'Blockchain Development',
    popular: true
  },
  {
    title: 'AI-Powered Email Security & Phishing Detection',
    description: 'Advanced email security with AI-powered phishing detection and threat analysis.',
    icon: Mail,
    features: ['Phishing Detection', 'Threat Analysis', 'Email Encryption', 'Compliance Monitoring'],
    pricing: '$149 - $799/month',
    category: 'Email Security',
    popular: true
  },
  {
    title: 'Intelligent API Rate Limiting & Analytics',
    description: 'Smart API rate limiting with usage analytics and automated scaling.',
    icon: BarChart3,
    features: ['Smart Rate Limiting', 'Usage Analytics', 'Auto Scaling', 'Cost Optimization'],
    pricing: '$99 - $599/month',
    category: 'API Management',
    popular: true
  },
  {
    title: 'AI-Powered Customer Churn Prediction',
    description: 'Predictive analytics for customer churn with retention strategies and alerts.',
    icon: TrendingUp,
    features: ['Churn Prediction', 'Retention Strategies', 'Risk Scoring', 'Automated Alerts'],
    pricing: '$299 - $1,999/month',
    category: 'Customer Analytics',
    popular: true
  },
  {
    title: 'Smart Contract Testing & Simulation Platform',
    description: 'Comprehensive smart contract testing with simulation and security analysis.',
    icon: Code,
    features: ['Automated Testing', 'Simulation Environment', 'Security Analysis', 'Gas Optimization'],
    pricing: '$199 - $1,299/month',
    category: 'Blockchain Testing',
    popular: true
  },
  {
    title: 'AI-Powered Content Localization',
    description: 'Automated content translation and localization with cultural adaptation.',
    icon: Globe,
    features: ['Multi-language Translation', 'Cultural Adaptation', 'Quality Assurance', 'Brand Consistency'],
    pricing: '$0.05 - $0.25 per word',
    category: 'Content Localization',
    popular: true
  },
  {
    title: 'Intelligent Database Query Optimizer',
    description: 'AI-powered database query optimization and performance monitoring.',
    icon: Database,
    features: ['Query Optimization', 'Performance Monitoring', 'Index Recommendations', 'Cost Analysis'],
    pricing: '$199 - $1,299/month',
    category: 'Database Optimization',
    popular: true
  },
  {
    title: 'AI-Powered Video Analytics & Insights',
    description: 'Advanced video content analysis with engagement metrics and optimization recommendations.',
    icon: Video,
    features: ['Engagement Analysis', 'Content Optimization', 'Audience Insights', 'Performance Metrics'],
    pricing: '$149 - $799/month',
    category: 'Video Analytics',
    popular: true
  },
  {
    title: 'Smart Contract Compliance Monitor',
    description: 'Real-time smart contract compliance monitoring and regulatory reporting.',
    icon: Shield,
    features: ['Compliance Monitoring', 'Regulatory Reporting', 'Audit Trails', 'Risk Assessment'],
    pricing: '$299 - $1,999/month',
    category: 'Blockchain Compliance',
    popular: true
  },
  {
    title: 'AI-Powered Password Security Manager',
    description: 'Intelligent password management with breach detection and security recommendations.',
    icon: Lock,
    features: ['Password Generation', 'Breach Detection', 'Security Scoring', 'Auto-updates'],
    pricing: '$9 - $49/month',
    category: 'Password Security',
    popular: true
  },
  {
    title: 'Intelligent Load Testing & Performance Monitoring',
    description: 'AI-powered load testing and performance optimization for web applications.',
    icon: Monitor,
    features: ['Automated Load Testing', 'Performance Analysis', 'Bottleneck Detection', 'Optimization Tips'],
    pricing: '$199 - $1,299/month',
    category: 'Performance Testing',
    popular: true
  },
  {
    title: 'AI-Powered Social Media Content Scheduler',
    description: 'Intelligent social media content scheduling with optimal timing and engagement prediction.',
    icon: Globe,
    features: ['Optimal Timing', 'Engagement Prediction', 'Content Suggestions', 'Multi-platform Support'],
    pricing: '$49 - $299/month',
    category: 'Social Media Management',
    popular: true
  },
  {
    title: 'Smart Contract Gas Optimizer',
    description: 'AI-powered gas optimization for smart contracts to reduce transaction costs.',
    icon: Zap,
    features: ['Gas Analysis', 'Optimization Suggestions', 'Cost Reduction', 'Performance Monitoring'],
    pricing: '$99 - $599/month',
    category: 'Blockchain Optimization',
    popular: true
  },
  {
    title: 'AI-Powered Email Marketing Personalization',
    description: 'Advanced email personalization with AI-driven content and timing optimization.',
    icon: Mail,
    features: ['Content Personalization', 'Timing Optimization', 'A/B Testing', 'Engagement Analytics'],
    pricing: '$199 - $1,299/month',
    category: 'Email Marketing',
    popular: true
  },
  {
    title: 'AI Video Content Generator',
    description: 'Automated video creation from text prompts with AI-generated visuals and voiceovers.',
    icon: Video,
    features: ['Text-to-Video', 'AI Voiceovers', 'Template Library', 'Multi-language Support'],
    pricing: '$299 - $1,999/month',
    category: 'Content Creation',
    popular: true
  },
  {
    title: 'Smart Contract Auditor',
    description: 'Automated smart contract security analysis and vulnerability detection for blockchain projects.',
    icon: Shield,
    features: ['Security Analysis', 'Vulnerability Detection', 'Gas Optimization', 'Compliance Checks'],
    pricing: '$499 - $2,999/project',
    category: 'Blockchain'
  },
  {
    title: 'AI-Powered Code Review Assistant',
    description: 'Automated code review with security analysis, performance optimization, and best practices.',
    icon: Code,
    features: ['Automated Reviews', 'Security Scanning', 'Performance Analysis', 'Best Practices'],
    pricing: '$199 - $1,499/month',
    category: 'Development'
  },
  {
    title: 'Quantum-Safe Encryption Service',
    description: 'Post-quantum cryptography solutions for future-proof data protection.',
    icon: Lock,
    features: ['Quantum-Safe Algorithms', 'Key Management', 'Migration Tools', 'Compliance'],
    pricing: '$999 - $4,999/month',
    category: 'Security'
  },
  {
    title: 'AI-Powered Legal Document Analyzer',
    description: 'Automated legal document analysis, contract review, and compliance checking.',
    icon: FileText,
    features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Clause Extraction'],
    pricing: '$399 - $2,499/month',
    category: 'Legal Tech'
  },
  {
    title: 'Edge Computing Orchestrator',
    description: 'Intelligent edge computing resource management and workload distribution.',
    icon: Cpu,
    features: ['Edge Resource Management', 'Workload Distribution', 'Latency Optimization', 'Auto-scaling'],
    pricing: '$199 - $1,299/month',
    category: 'Edge Computing'
  },
  {
    title: 'AI-Powered Medical Image Analysis',
    description: 'Automated medical image analysis for radiology and diagnostic assistance.',
    icon: Eye,
    features: ['Image Analysis', 'Diagnostic Assistance', 'Pattern Recognition', 'Report Generation'],
    pricing: '$1,999 - $9,999/month',
    category: 'Healthcare AI'
  },
  {
    title: 'Carbon Footprint Tracker',
    description: 'Real-time carbon footprint monitoring and sustainability reporting for businesses.',
    icon: Sprout,
    features: ['Carbon Tracking', 'Sustainability Reports', 'Goal Setting', 'Industry Benchmarking'],
    pricing: '$99 - $599/month',
    category: 'Sustainability'
  },
  {
    title: 'AI-Powered Fraud Detection',
    description: 'Real-time fraud detection using machine learning for financial transactions.',
    icon: Shield,
    features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'API Integration'],
    pricing: '$299 - $1,999/month',
    category: 'FinTech'
  },
  {
    title: 'Voice AI Assistant Builder',
    description: 'No-code platform for creating custom voice AI assistants and chatbots.',
    icon: Mic,
    features: ['No-code Builder', 'Voice Recognition', 'Natural Language Processing', 'Multi-platform'],
    pricing: '$149 - $999/month',
    category: 'Voice AI'
  },
  {
    title: 'AI-Powered Supply Chain Optimizer',
    description: 'Intelligent supply chain optimization with demand forecasting and logistics planning.',
    icon: Package,
    features: ['Demand Forecasting', 'Route Optimization', 'Inventory Management', 'Risk Analysis'],
    pricing: '$499 - $2,999/month',
    category: 'Supply Chain'
  },
  {
    title: 'Real-time Language Translator',
    description: 'Advanced real-time translation service with context awareness and industry-specific terminology.',
    icon: Globe,
    features: ['Real-time Translation', 'Context Awareness', 'Industry Terms', 'Multi-modal Support'],
    pricing: '$199 - $1,299/month',
    category: 'Translation'
  },
  {
    title: 'AI-Powered Investment Analyzer',
    description: 'Automated investment analysis and portfolio optimization using advanced AI algorithms.',
    icon: TrendingUp,
    features: ['Portfolio Analysis', 'Risk Assessment', 'Market Prediction', 'Automated Rebalancing'],
    pricing: '$299 - $1,999/month',
    category: 'FinTech'
  },
  {
    title: 'Smart Home Automation Hub',
    description: 'Centralized smart home control with AI-powered automation and energy optimization.',
    icon: Home,
    features: ['Device Control', 'Energy Optimization', 'Predictive Automation', 'Voice Control'],
    pricing: '$99 - $599/month',
    category: 'IoT'
  },
  {
    title: 'AI-Powered Resume Optimizer',
    description: 'Intelligent resume optimization for ATS systems and job matching algorithms.',
    icon: FileText,
    features: ['ATS Optimization', 'Keyword Analysis', 'Format Optimization', 'Job Matching'],
    pricing: '$29 - $199/month',
    category: 'Career Tools'
  },
  {
    title: 'Blockchain Analytics Platform',
    description: 'Comprehensive blockchain transaction analysis and cryptocurrency tracking.',
    icon: BarChart3,
    features: ['Transaction Analysis', 'Wallet Tracking', 'Risk Assessment', 'Compliance Reporting'],
    pricing: '$399 - $2,499/month',
    category: 'Blockchain'
  },
  {
    title: 'AI-Powered Mental Health Assistant',
    description: 'Intelligent mental health monitoring and support using natural language processing.',
    icon: Heart,
    features: ['Mood Tracking', 'Sentiment Analysis', 'Crisis Detection', 'Resource Recommendations'],
    pricing: '$199 - $1,299/month',
    category: 'Healthcare AI'
  },
  {
    title: 'Autonomous Vehicle Fleet Manager',
    description: 'AI-powered fleet management for autonomous vehicles with route optimization.',
    icon: Car,
    features: ['Fleet Optimization', 'Route Planning', 'Predictive Maintenance', 'Safety Monitoring'],
    pricing: '$999 - $4,999/month',
    category: 'Autonomous Vehicles'
  },
  {
    title: 'AI-Powered Content Moderation Suite',
    description: 'Advanced content moderation for social platforms with real-time AI analysis.',
    icon: Eye,
    features: ['Real-time Moderation', 'Multi-language Support', 'Context Analysis', 'Custom Rules'],
    pricing: '$299 - $1,999/month',
    category: 'Content Safety'
  }
];

const features = [
  {

    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Get up and running in days, not months'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security and compliance'
  },
  {
    icon: Users,
    title: 'Scalable Architecture',
    description: 'Grows with your business needs'
  },
  {
    icon: Globe,
    title: 'Multi-tenant Ready',
    description: 'Built for SaaS from the ground up'
  },
  {
    icon: BarChart3,
    title: 'Analytics Built-in',
    description: 'Comprehensive usage and performance metrics'
  },
  {
    icon: Lock,
    title: 'Data Privacy',
    description: 'GDPR and SOC 2 compliant by default'
  }
];


const benefits = [
  {

    icon: Clock,
    title: 'Fast Time to Market',
    description: 'Launch your SaaS in weeks, not months',
    stat: '80%'
  },
  {
    icon: DollarSign,
    title: 'Cost Effective',
    description: 'Lower development and maintenance costs',
    stat: '60%'
  },
  {
    icon: Star,
    title: 'High Quality',
    description: 'Production-ready code and infrastructure',
    stat: '99.9%'
  },
  {
    icon: TrendingUp,
    title: 'Scalable',
    description: 'Handles growth from startup to enterprise',
    stat: '10x'
  }
];


const pricingTiers = [
  {

    name: 'Starter',
    description: 'Perfect for small teams and MVPs',
    price: '$299',
    period: '/month',
    features: [
      'Up to 1,000 users',
      'Basic analytics',
      'Email support',
      'Standard security',
      '1 custom integration'
    ],
    popular: false
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: '$799',
    period: '/month',

    features: [
      'Up to 10,000 users',

      'Advanced analytics',
      'Priority support',
      'Enhanced security',
      '5 custom integrations',
      'API access'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: 'Custom',
    period: '',

    features: [
      'Unlimited users',

      'Custom analytics',
      'Dedicated support',
      'Enterprise security',
      'Unlimited integrations',
      'Custom development'
    ],
    popular: false
  }
];

export default function MicroSaaSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                  <Head>
                  <title>Micro SaaS Solutions - Zion Tech Group</title>
                  <meta name="description" content="Scalable Micro SaaS solutions designed for specific business needs. Rapid deployment, enterprise security, and built-in analytics." />
                  <meta name="keywords" content="Micro SaaS, SaaS solutions, cloud applications, scalable software, business automation" />
                  </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20 overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div

            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >

            <div className="flex items-center justify-center mb-6">
              <Cloud className="h-16 w-16 text-purple-400 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">
                Micro{' '}
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  SaaS
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Scalable software solutions designed for specific business needs. Rapid deployment, enterprise security, and built-in analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">

                Start Your SaaS
              </Link>
                  <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                View All Services
              </Link>
                  </div>
                  </motion.div>
                  </div>
                  </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Micro SaaS Products
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready-to-deploy SaaS solutions that solve specific business problems with minimal setup time.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaSProducts.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <motion.div
                  key={index}

                  className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative ${

                    product.popular ? 'ring-2 ring-purple-200' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                  </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">

                    <div className="text-purple-600 group-hover:text-indigo-600 transition-colors">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded-full">

                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="mb-4">

                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">

                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-600">
                  <CheckCircle className="w-3 h-3 text-purple-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                  <span className="text-sm font-semibold text-purple-600">{product.pricing}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm"
                  >
                    <span>Get Started</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                  </motion.div>
              );
            })}
          </div>
                  </div>
                  </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Micro SaaS?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built for modern businesses that need fast, reliable, and scalable solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {

              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}

                  className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"

                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                  </motion.div>
              );
            })}
          </div>
                  </div>
                  </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our Micro SaaS solutions deliver measurable business impact.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {benefit.stat}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                  </motion.div>
              );
            })}
          </div>
                  </div>
                  </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business needs. No hidden fees, no surprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (

              <motion.div
                key={index}
                className={`p-8 rounded-xl shadow-lg ${
                  tier.popular ? 'bg-purple-50 border-2 border-purple-200' : 'bg-white'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {tier.popular && (
                  <div className="text-center mb-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                  <p className="text-gray-600 mb-6">
                  {tier.description}
                </p>
                  <div className="mb-6">
                  <span className="text-4xl font-bold text-purple-600">{tier.price}</span>
                  <span className="text-gray-600">{tier.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                  <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center ${
                    tier.popular

                      ? 'bg-purple-600 hover:bg-purple-700 text-white'

                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  <span>Choose Plan</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  </motion.div>
            ))}
          </div>
                  </div>
                  </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Started Today
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your business with cutting-edge micro SaaS solutions? Our expert team is here to help you build, deploy, and scale your next-generation software products. Contact us for a free consultation and discover how we can accelerate your digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Consultation</h3>
              <p className="text-gray-600 mb-4">Get expert advice on your micro SaaS project with our complimentary 30-minute consultation.</p>
              <a href="tel:+13024640950" className="text-purple-600 font-semibold hover:text-purple-700">
                Call Now: +1 302 464 0950
              </a>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your project details and we'll respond within 24 hours with a detailed proposal.</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-600 font-semibold hover:text-purple-700">
                kleber@ziontechgroup.com
              </a>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Office</h3>
              <p className="text-gray-600 mb-4">Schedule an in-person meeting at our headquarters in Middletown, Delaware.</p>
              <address className="text-purple-600 font-semibold not-italic">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </address>
            </motion.div>
          </div>

          <motion.div
            className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose Zion Tech Group?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
                <div className="text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">99.9%</div>
                <div className="text-sm">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
                <div className="text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">5★</div>
                <div className="text-sm">Client Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">

        <div className="container mx-auto px-4 text-center">
          <motion.div

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Launch Your Micro SaaS?
            </h2>

            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join 500+ successful businesses that trust Zion Tech Group for their micro SaaS development needs. Let&apos;s build the perfect solution for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Start Building Today

              </Link>
                  <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                View All Services
              </Link>

            </div>
            <div className="mt-8 text-sm opacity-90">
              <p>📞 Call: +1 302 464 0950 | ✉️ Email: kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>

  );
}