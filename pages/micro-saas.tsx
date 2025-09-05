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
  Database,
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
  HardDrive
} from 'lucide-react';

const microSaaSProducts = [{
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
description: 'Automated code review with security scanning, performance optimization, and best practices enforcement.',
    icon: Code,
    features: ['Automated Reviews', 'Security Scanning', 'Performance Analysis', 'Best Practices Check'],
    pricing: '$299 - $1,999/month',
    category: 'Developer Tools',
    popular: true
  },
  {
    title: 'Smart Contract Security Auditor',
    description: 'Automated smart contract security analysis and vulnerability detection for blockchain projects.',
    icon: Lock,
    features: ['Vulnerability Detection', 'Gas Optimization', 'Compliance Checking', 'Audit Reports'],
    pricing: '$499 - $2,999/month',
    category: 'Blockchain Security',
    popular: true
  },
  {
    title: 'AI-Powered SEO Content Optimizer',
    description: 'Intelligent content optimization for search engines with real-time ranking improvements.',
    icon: Search,
    features: ['Keyword Research', 'Content Analysis', 'Ranking Tracking', 'Competitor Analysis'],
    pricing: '$199 - $1,299/month',
    category: 'SEO & Marketing',
    popular: true
  },
  {
    title: 'Multi-Channel Customer Data Platform',
    description: 'Unified customer data platform with real-time synchronization across all touchpoints.',
    icon: Database,
    features: ['Data Unification', 'Real-time Sync', 'Customer 360 View', 'Privacy Compliance'],
    pricing: '$399 - $2,499/month',
    category: 'Customer Data',
    popular: true
  },
  {
    title: 'AI-Powered Video Content Generator',
    description: 'Automated video creation from text, images, and audio with professional editing capabilities.',
    icon: Video,
    features: ['Text-to-Video', 'Auto Editing', 'Voice Synthesis', 'Template Library'],
    pricing: '$199 - $1,499/month',
    category: 'Content Creation',
    popular: true
  },
  {
    title: 'Intelligent Supply Chain Optimizer',
    description: 'AI-driven supply chain optimization with demand forecasting and inventory management.',
    icon: Package,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Analytics', 'Risk Assessment'],
    pricing: '$599 - $3,999/month',
    category: 'Supply Chain',
    popular: true
  },
  {
    title: 'Real-Time Language Translation API',
    description: 'Advanced translation service with context awareness and industry-specific terminology.',
    icon: Globe,
    features: ['100+ Languages', 'Context Awareness', 'Industry Terms', 'Real-time Processing'],
    pricing: '$0.01 - $0.10 per 1K characters',
    category: 'Language Services',
    popular: true
  },
  {
    title: 'AI-Powered Legal Document Analyzer',
    description: 'Automated legal document analysis with contract review and compliance checking.',
    icon: FileText,
    features: ['Contract Analysis', 'Compliance Checking', 'Risk Assessment', 'Clause Extraction'],
    pricing: '$299 - $1,999/month',
    category: 'Legal Tech',
    popular: true
  },
  {
    title: 'Smart Energy Management System',
    description: 'IoT-based energy monitoring and optimization for buildings and facilities.',
    icon: Zap,
    features: ['Energy Monitoring', 'Usage Analytics', 'Cost Optimization', 'Predictive Maintenance'],
    pricing: '$199 - $1,299/month',
    category: 'IoT & Energy',
    popular: true
  },
  {
    title: 'AI-Powered Recruitment Platform',
    description: 'Intelligent candidate screening and matching with bias detection and diversity analytics.',
    icon: Users,
    features: ['Resume Screening', 'Skill Matching', 'Bias Detection', 'Diversity Analytics'],
    pricing: '$199 - $1,499/month',
    category: 'HR & Recruitment',
    popular: true
  },
  {
    title: 'Blockchain Analytics & Compliance',
    description: 'Comprehensive blockchain transaction analysis with AML and compliance reporting.',
    icon: TrendingUp,
    features: ['Transaction Analysis', 'AML Detection', 'Compliance Reporting', 'Risk Scoring'],
    pricing: '$399 - $2,999/month',
    category: 'Blockchain Analytics',
    popular: true
  },
  {
    title: 'AI-Powered Medical Image Analysis',
    description: 'Advanced medical image analysis with AI-powered diagnosis assistance and reporting.',
    icon: Eye,
    features: ['Image Analysis', 'Diagnosis Assistance', 'Report Generation', 'Integration APIs'],
    pricing: '$999 - $4,999/month',
    category: 'Healthcare AI',
    popular: true
  },
  {
    title: 'Smart Home Automation Platform',
    description: 'Comprehensive smart home control with AI-powered automation and energy management.',
    icon: Home,
    features: ['Device Control', 'Automation Rules', 'Energy Management', 'Voice Integration'],
    pricing: '$29 - $199/month',
    category: 'Smart Home',
    popular: true
  },
  {
    title: 'AI-Powered Financial Risk Assessment',
    description: 'Real-time financial risk analysis with credit scoring and fraud detection.',
    icon: Shield,
    features: ['Credit Scoring', 'Fraud Detection', 'Risk Modeling', 'Real-time Alerts'],
    pricing: '$499 - $2,999/month',
    category: 'FinTech',
    popular: true
  },
  {
    title: 'Intelligent Document Processing',
    description: 'Automated document extraction and processing with OCR and data validation.',
    icon: FileText,
    features: ['OCR Processing', 'Data Extraction', 'Validation Rules', 'Workflow Automation'],
    pricing: '$0.10 - $0.50 per document',
    category: 'Document Processing',
    popular: true
  },
  {
    title: 'AI-Powered Social Media Monitoring',
    description: 'Comprehensive social media monitoring with sentiment analysis and brand protection.',
    icon: MessageSquare,
    features: ['Brand Monitoring', 'Sentiment Analysis', 'Crisis Detection', 'Competitor Analysis'],
    pricing: '$199 - $1,299/month',
    category: 'Social Media',
    popular: true
  },
  {
    title: 'Smart Agriculture IoT Platform',
    description: 'IoT-based agricultural monitoring with crop analysis and yield optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Weather Integration', 'Yield Prediction', 'Resource Optimization'],
    pricing: '$299 - $1,999/month',
    category: 'AgTech',
    popular: true
  },
  {
    title: 'AI-Powered Personalization Engine',
    description: 'Real-time personalization engine for e-commerce and content platforms.',
    icon: Target,
    features: ['Real-time Personalization', 'A/B Testing', 'Behavioral Analysis', 'Recommendation Engine'],
    pricing: '$399 - $2,499/month',
    category: 'Personalization',
    popular: true
  },
  {
    title: 'Blockchain Identity Verification',
    description: 'Decentralized identity verification with KYC/AML compliance and privacy protection.',
    icon: Lock,
    features: ['Identity Verification', 'KYC/AML Compliance', 'Privacy Protection', 'Blockchain Integration'],
    pricing: '$0.50 - $2.00 per verification',
    category: 'Identity & Security',
    popular: true
  },
  {
    title: 'AI-Powered Voice Analytics',
    description: 'Advanced voice analysis for call centers with emotion detection and quality scoring.',
    icon: Mic,
    features: ['Emotion Detection', 'Quality Scoring', 'Sentiment Analysis', 'Performance Metrics'],
    pricing: '$199 - $1,299/month',
    category: 'Voice Analytics',
    popular: true
  },
  {
    title: 'AI-Powered Code Security Scanner',
    description: 'Automated security vulnerability detection and remediation for code repositories.',
    icon: Shield,
    features: ['Vulnerability Detection', 'Auto-remediation', 'Compliance Scanning', 'CI/CD Integration'],
    pricing: '$199 - $1,999/month',
    category: 'DevSecOps',
    popular: true
  },
  {
    title: 'Smart Contract Audit Platform',
    description: 'Automated smart contract security analysis with comprehensive audit reports.',
    icon: Lock,
    features: ['Automated Analysis', 'Vulnerability Detection', 'Gas Optimization', 'Audit Reports'],
    pricing: '$499 - $2,999/month',
    category: 'Blockchain Security',
    popular: true
  },
  {
    title: 'AI-Powered Email Security',
    description: 'Advanced email threat protection with AI-powered phishing and malware detection.',
    icon: Mail,
    features: ['Phishing Detection', 'Malware Scanning', 'Threat Intelligence', 'User Training'],
    pricing: '$2.50 - $8.00/user/month',
    category: 'Email Security',
    popular: true
  },
  {
    title: 'Real-Time API Monitoring',
    description: 'Comprehensive API monitoring with performance analytics and alerting.',
    icon: BarChart3,
    features: ['Performance Monitoring', 'Uptime Tracking', 'Error Analysis', 'Alert Management'],
    pricing: '$99 - $799/month',
    category: 'API Management',
    popular: true
  },
  {
    title: 'AI-Powered Data Quality Platform',
    description: 'Automated data quality assessment and cleansing with machine learning.',
    icon: Database,
    features: ['Data Profiling', 'Quality Scoring', 'Auto-cleansing', 'Compliance Monitoring'],
    pricing: '$299 - $2,499/month',
    category: 'Data Quality',
    popular: true
  },
  {
    title: 'Smart Contract Development Platform',
    description: 'No-code smart contract creation with testing and deployment automation.',
    icon: Code,
    features: ['Visual Builder', 'Auto Testing', 'Deployment Automation', 'Gas Optimization'],
    pricing: '$199 - $1,499/month',
    category: 'Blockchain Development',
    popular: true
  },
  {
    title: 'AI-Powered Customer Churn Prediction',
    description: 'Predictive analytics to identify and prevent customer churn with actionable insights.',
    icon: TrendingUp,
    features: ['Churn Prediction', 'Risk Scoring', 'Intervention Strategies', 'ROI Tracking'],
    pricing: '$399 - $2,999/month',
    category: 'Customer Analytics',
    popular: true
  },
  {
    title: 'Intelligent Document Workflow',
    description: 'AI-powered document processing with automated routing and approval workflows.',
    icon: FileText,
    features: ['Document Classification', 'Auto Routing', 'Approval Workflows', 'Compliance Tracking'],
    pricing: '$149 - $999/month',
    category: 'Document Management',
    popular: true
  },
  {
    title: 'AI-Powered A/B Testing Platform',
    description: 'Advanced A/B testing with AI-powered experiment design and statistical analysis.',
    icon: Target,
    features: ['Experiment Design', 'Statistical Analysis', 'Auto-optimization', 'Multi-variate Testing'],
    pricing: '$199 - $1,499/month',
    category: 'Testing & Optimization',
    popular: true
  },
  {
    title: 'Smart Inventory Forecasting',
    description: 'AI-powered demand forecasting and inventory optimization for retail and e-commerce.',
    icon: Package,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Seasonal Analysis', 'Supplier Integration'],
    pricing: '$299 - $1,999/month',
    category: 'Supply Chain',
    popular: true
  },
  {
    title: 'AI-Powered Compliance Monitoring',
    description: 'Automated compliance monitoring with real-time alerts and reporting for various regulations.',
    icon: Shield,
    features: ['Regulatory Monitoring', 'Real-time Alerts', 'Compliance Reporting', 'Risk Assessment'],
    pricing: '$399 - $2,999/month',
    category: 'Compliance',
    popular: true
  },
  {
    title: 'Intelligent Meeting Assistant',
    description: 'AI-powered meeting transcription, summarization, and action item extraction.',
    icon: Mic,
    features: ['Live Transcription', 'Meeting Summaries', 'Action Items', 'Integration APIs'],
    pricing: '$9.99 - $49.99/month',
    category: 'Productivity',
    popular: true
  },
  {
    title: 'AI-Powered Content Moderation',
    description: 'Automated content moderation for text, images, and videos with custom rule sets.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Custom Rules', 'Real-time Processing', 'API Integration'],
    pricing: '$0.01 - $0.05 per piece',
    category: 'Content Safety',
    popular: true
  },
  {
    title: 'Smart Energy Trading Platform',
    description: 'AI-powered energy trading and optimization for renewable energy markets.',
    icon: Zap,
    features: ['Price Prediction', 'Trading Automation', 'Portfolio Optimization', 'Risk Management'],
    pricing: '$999 - $4,999/month',
    category: 'Energy Trading',
    popular: true
  },
  {
    title: 'AI-Powered Legal Research',
    description: 'Intelligent legal research platform with case law analysis and precedent identification.',
    icon: BookOpen,
    features: ['Case Law Search', 'Precedent Analysis', 'Legal Research', 'Citation Tracking'],
    pricing: '$199 - $1,499/month',
    category: 'Legal Tech',
    popular: true
  },
  {
    title: 'Intelligent Password Manager',
    description: 'AI-powered password management with breach monitoring and security recommendations.',
    icon: Lock,
    features: ['Password Generation', 'Breach Monitoring', 'Security Scoring', 'Team Sharing'],
    pricing: '$2.99 - $9.99/user/month',
    category: 'Security',
    popular: true
  },
  {
    title: 'AI-Powered Market Research',
    description: 'Automated market research with sentiment analysis and competitive intelligence.',
    icon: Search,
    features: ['Sentiment Analysis', 'Competitive Intelligence', 'Trend Analysis', 'Report Generation'],
    pricing: '$299 - $1,999/month',
    category: 'Market Research',
    popular: true
  },
  {
    title: 'Smart Contract Insurance Platform',
    description: 'Decentralized insurance for smart contracts with automated claims processing.',
    icon: Shield,
    features: ['Risk Assessment', 'Automated Claims', 'Smart Contracts', 'Payout Automation'],
    pricing: '$199 - $1,499/month',
    category: 'DeFi Insurance',
    popular: true
  },
  {
    title: 'AI-Powered Accessibility Checker',
    description: 'Automated web accessibility testing and remediation recommendations.',
    icon: Eye,
    features: ['WCAG Compliance', 'Auto Testing', 'Remediation Suggestions', 'Monitoring'],
    pricing: '$99 - $799/month',
    category: 'Accessibility',
    popular: true
  },
  {
    title: 'Intelligent Backup & Recovery',
    description: 'AI-powered backup solutions with intelligent scheduling and disaster recovery.',
    icon: HardDrive,
    features: ['Smart Scheduling', 'Incremental Backups', 'Disaster Recovery', 'Compliance'],
    pricing: '$49 - $399/month',
    category: 'Data Protection',
    popular: true
  },
  {
    title: 'AI-Powered Code Review Assistant',
    description: 'Automated code review and quality assurance for development teams.',
    icon: Code,
    features: ['Code Quality Analysis', 'Security Scanning', 'Performance Optimization', 'Best Practices'],
    pricing: '$99 - $599/month',
    category: 'Development',
    popular: true
  },
  {
    title: 'AI-Powered Content Moderation',
    description: 'Automated content moderation for text, images, and videos using AI.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Custom Rules', 'Real-time Processing', 'API Integration'],
    pricing: '$199 - $999/month',
    category: 'Content Safety',
    popular: true
  },
  {
    title: 'AI-Powered Customer Churn Prediction',
    description: 'Predict and prevent customer churn using machine learning algorithms.',
    icon: TrendingUp,
    features: ['Churn Prediction', 'Risk Scoring', 'Retention Campaigns', 'Analytics Dashboard'],
    pricing: '$149 - $799/month',
    category: 'Customer Success',
    popular: true
  },
  {
    title: 'AI-Powered Price Optimization',
    description: 'Dynamic pricing optimization using AI for maximum revenue and competitiveness.',
    icon: DollarSign,
    features: ['Dynamic Pricing', 'Competitor Analysis', 'Demand Forecasting', 'A/B Testing'],
    pricing: '$299 - $1,499/month',
    category: 'E-commerce',
    popular: true
  },
  {
    title: 'AI-Powered Video Analytics',
    description: 'Advanced video analysis for security, marketing, and business intelligence.',
    icon: Video,
    features: ['Object Detection', 'Behavior Analysis', 'Crowd Counting', 'Real-time Alerts'],
    pricing: '$199 - $999/month',
    category: 'Video Analytics',
    popular: true
  },
  {
    title: 'AI-Powered Voice Analytics',
    description: 'Voice analysis and sentiment detection for call centers and customer service.',
    icon: Mic,
    features: ['Sentiment Analysis', 'Call Transcription', 'Quality Scoring', 'Real-time Insights'],
    pricing: '$149 - $799/month',
    category: 'Voice Analytics',
    popular: true
  },
  {
    title: 'AI-Powered Document Intelligence',
    description: 'Intelligent document processing and data extraction using AI.',
    icon: FileText,
    features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Workflow Automation'],
    pricing: '$99 - $599/month',
    category: 'Document Processing',
    popular: true
  },
  {
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with predictive analytics and automation.',
    icon: Network,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Analysis'],
    pricing: '$399 - $1,999/month',
    category: 'Supply Chain',
    popular: true
  },
  {
    title: 'AI-Powered Energy Management',
    description: 'Smart energy monitoring and optimization for buildings and facilities.',
    icon: Zap,
    features: ['Energy Monitoring', 'Usage Optimization', 'Predictive Maintenance', 'Cost Analysis'],
    pricing: '$199 - $999/month',
    category: 'Energy Management',
    popular: true
  },
  {
    title: 'AI-Powered Compliance Monitoring',
    description: 'Automated compliance monitoring and reporting for various industries.',
    icon: Shield,
    features: ['Regulatory Compliance', 'Automated Reporting', 'Risk Assessment', 'Audit Trails'],
    pricing: '$299 - $1,499/month',
    category: 'Compliance',
    popular: true
  },
  {
    title: 'AI-Powered Talent Acquisition',
    description: 'Intelligent recruitment and candidate matching using AI algorithms.',
    icon: Users,
    features: ['Resume Screening', 'Skill Matching', 'Interview Scheduling', 'Candidate Scoring'],
    pricing: '$199 - $999/month',
    category: 'HR & Recruitment',
    popular: true
  },
  {
    title: 'AI-Powered Market Research',
    description: 'Automated market research and competitive intelligence using AI.',
    icon: Search,
    features: ['Market Analysis', 'Competitor Tracking', 'Trend Detection', 'Report Generation'],
    pricing: '$149 - $799/month',
    category: 'Market Research',
    popular: true
  },
  {
    title: 'AI-Powered Legal Document Analysis',
    description: 'Intelligent legal document review and contract analysis using AI.',
    icon: BookOpen,
    features: ['Contract Analysis', 'Risk Assessment', 'Clause Extraction', 'Compliance Checking'],
    pricing: '$399 - $1,999/month',
    category: 'Legal Tech',
    popular: true
  },
  {
    title: 'AI-Powered Healthcare Analytics',
    description: 'Healthcare data analysis and patient outcome prediction using AI.',
    icon: Heart,
    features: ['Patient Analytics', 'Outcome Prediction', 'Risk Stratification', 'Clinical Insights'],
    pricing: '$499 - $2,499/month',
    category: 'Healthcare',
    popular: true
  },
  {
    title: 'AI-Powered Cybersecurity Threat Intelligence',
    description: 'Real-time threat detection and response with machine learning-powered security analytics.',
    icon: Shield,
    features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Threat Intelligence'],
    pricing: '$399 - $2,999/month',
    category: 'Cybersecurity',
    popular: true
  },
  {
    title: 'Smart Contract Development Platform',
    description: 'No-code smart contract creation with testing, deployment, and monitoring capabilities.',
    icon: Code,
    features: ['Visual Builder', 'Auto Testing', 'Gas Optimization', 'Deployment Tools'],
    pricing: '$199 - $1,499/month',
    category: 'Blockchain Development',
    popular: true
  },
  {
    title: 'AI-Powered Voice Analytics Platform',
    description: 'Advanced voice analysis for customer service, sales calls, and compliance monitoring.',
    icon: Mic,
    features: ['Sentiment Analysis', 'Call Scoring', 'Compliance Monitoring', 'Real-time Insights'],
    pricing: '$299 - $1,999/month',
    category: 'Voice Analytics',
    popular: true
  },
  {
    title: 'Intelligent Document Workflow Automation',
    description: 'AI-powered document processing with intelligent routing and approval workflows.',
    icon: FileText,
    features: ['Document Classification', 'Auto Routing', 'Approval Workflows', 'Compliance Tracking'],
    pricing: '$149 - $999/month',
    category: 'Workflow Automation',
    popular: true
  },
  {
    title: 'AI-Powered Predictive Maintenance',
    description: 'Machine learning-based equipment maintenance prediction and optimization.',
    icon: Settings,
    features: ['Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'IoT Integration'],
    pricing: '$399 - $2,499/month',
    category: 'Industrial IoT',
    popular: true
  },
  {
    title: 'Smart City Traffic Management',
    description: 'AI-powered traffic optimization and management for smart cities.',
    icon: Car,
    features: ['Traffic Optimization', 'Congestion Prediction', 'Route Planning', 'Real-time Monitoring'],
    pricing: '$999 - $4,999/month',
    category: 'Smart Cities',
    popular: true
  },
  {
    title: 'AI-Powered Personal Finance Assistant',
    description: 'Intelligent personal finance management with budgeting and investment advice.',
    icon: DollarSign,
    features: ['Expense Tracking', 'Budget Planning', 'Investment Analysis', 'Financial Goals'],
    pricing: '$9 - $49/month',
    category: 'Personal Finance',
    popular: true
  },
  {
    title: 'Blockchain Identity Verification',
    description: 'Decentralized identity verification and KYC compliance for digital services.',
    icon: Lock,
    features: ['Identity Verification', 'KYC Compliance', 'Privacy Protection', 'Cross-platform'],
    pricing: '$0.50 - $2.00 per verification',
    category: 'Identity Management',
    popular: true
  },
  {
    title: 'AI-Powered Content Moderation Suite',
    description: 'Advanced content moderation with multi-modal detection and custom rule engines.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Custom Rules', 'Real-time Processing', 'API Integration'],
    pricing: '$199 - $1,499/month',
    category: 'Content Safety',
    popular: true
  },
  {
    title: 'Smart Retail Analytics Platform',
    description: 'AI-powered retail analytics with customer behavior analysis and inventory optimization.',
    icon: ShoppingCart,
    features: ['Customer Analytics', 'Inventory Optimization', 'Sales Forecasting', 'Store Layout'],
    pricing: '$299 - $1,999/month',
    category: 'Retail Analytics',
    popular: true
  },
  {
    title: 'AI-Powered Email Security Gateway',
    description: 'Advanced email security with AI-powered threat detection and phishing prevention.',
    icon: Mail,
    features: ['Threat Detection', 'Phishing Prevention', 'Spam Filtering', 'Compliance'],
    pricing: '$1.50 - $5.00 per user/month',
    category: 'Email Security',
    popular: true
  },
  {
    title: 'Intelligent Meeting Assistant',
    description: 'AI-powered meeting transcription, summarization, and action item tracking.',
    icon: MessageSquare,
    features: ['Live Transcription', 'Meeting Summaries', 'Action Items', 'Integration APIs'],
    pricing: '$19 - $99/month',
    category: 'Productivity',
    popular: true
  },
  {
    title: 'AI-Powered Fraud Detection System',
    description: 'Real-time fraud detection with machine learning and behavioral analysis.',
    icon: Shield,
    features: ['Real-time Detection', 'Behavioral Analysis', 'Risk Scoring', 'Custom Rules'],
    pricing: '$0.10 - $0.50 per transaction',
    category: 'Fraud Prevention',
    popular: true
  },
  {
    title: 'Smart Energy Trading Platform',
    description: 'AI-powered energy trading and optimization for renewable energy markets.',
    icon: Zap,
    features: ['Energy Trading', 'Price Prediction', 'Grid Optimization', 'Renewable Integration'],
    pricing: '$999 - $4,999/month',
    category: 'Energy Trading',
    popular: true
  },
  {
    title: 'AI-Powered Legal Research Assistant',
    description: 'Intelligent legal research with case law analysis and precedent identification.',
    icon: BookOpen,
    features: ['Case Law Search', 'Precedent Analysis', 'Legal Summaries', 'Citation Tracking'],
    pricing: '$199 - $1,299/month',
    category: 'Legal Tech',
    popular: true
  },
  {
    title: 'Smart Manufacturing Quality Control',
    description: 'AI-powered quality control and defect detection for manufacturing processes.',
    icon: Settings,
    features: ['Defect Detection', 'Quality Scoring', 'Process Optimization', 'Predictive Analytics'],
    pricing: '$499 - $2,999/month',
    category: 'Manufacturing',
    popular: true
  },
  {
    title: 'AI-Powered Customer Churn Prediction',
    description: 'Predictive analytics for customer churn with retention strategies and interventions.',
    icon: TrendingUp,
    features: ['Churn Prediction', 'Risk Scoring', 'Retention Strategies', 'Intervention Alerts'],
    pricing: '$299 - $1,999/month',
    category: 'Customer Analytics',
    popular: true
  },
  {
    title: 'Blockchain Supply Chain Transparency',
    description: 'End-to-end supply chain tracking and transparency using blockchain technology.',
    icon: Package,
    features: ['Product Tracking', 'Authenticity Verification', 'Compliance Monitoring', 'Transparency'],
    pricing: '$0.01 - $0.10 per transaction',
    category: 'Supply Chain',
    popular: true
  },
  {
    title: 'AI-Powered Mental Health Assistant',
    description: 'Intelligent mental health monitoring and support with mood tracking and interventions.',
    icon: Heart,
    features: ['Mood Tracking', 'Wellness Monitoring', 'Crisis Detection', 'Professional Integration'],
    pricing: '$19 - $99/month',
    category: 'Digital Health',
    popular: true
  },
  {
    title: 'Smart Building Management System',
    description: 'IoT-based building management with energy optimization and predictive maintenance.',
    icon: Building,
    features: ['Energy Management', 'Occupancy Optimization', 'Predictive Maintenance', 'Climate Control'],
    pricing: '$199 - $1,499/month',
    category: 'Smart Buildings',
    popular: true
  }
];

const features = [{
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

const benefits = [{
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

const pricingTiers = [{
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
features: ['Up to 10,000 users',
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
features: ['Unlimited users',
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
                  <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse">
                  </div>
                  <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000">
                  </div>
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
                Micro{' '} <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  SaaS
                </span>
                  </h1>
                  </div>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">Scalable software solutions designed for specific business needs. Rapid deployment, enterprise security, and built-in analytics.</p>
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
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Micro SaaS Products</h2>
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
className={`bg-white p-8 rounded-xl shadow-lg hover: shadow-xl transition-all duration-300 group relative ${
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
<h4 className="font-semibold text-gray-900 mb-2 text-sm">Key "Features": </h4>
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
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Micro SaaS?</h2>
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
className="text-center p-6 rounded-lg hover: bg-gray-50 transition-colors"
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
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
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
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
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
? 'bg-purple-600 hover: bg-purple-700 text-white'
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

      {/* Benefits & Capabilities Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our micro SaaS products are designed to deliver maximum value with minimal complexity, 
              helping you focus on what matters most - growing your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rapid Deployment</h3>
              <p className="text-gray-600 mb-4">
                Get up and running in days, not months. Our pre-built solutions are ready to deploy 
                with minimal configuration required.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Pre-configured environments</li>
                <li>• One-click deployment</li>
                <li>• Automated setup processes</li>
                <li>• Instant scalability</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600 mb-4">
                Built with enterprise-grade security from day one. Your data and applications are 
                protected with industry-leading security measures.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• End-to-end encryption</li>
                <li>• SOC 2 compliance</li>
                <li>• GDPR ready</li>
                <li>• Regular security audits</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Built-in Analytics</h3>
              <p className="text-gray-600 mb-4">
                Make data-driven decisions with comprehensive analytics and reporting built into 
                every solution.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Real-time dashboards</li>
                <li>• Custom reports</li>
                <li>• Performance metrics</li>
                <li>• User behavior insights</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Easy Integration</h3>
              <p className="text-gray-600 mb-4">
                Seamlessly integrate with your existing tools and workflows. Our solutions work 
                with the tools you already use.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 100+ pre-built integrations</li>
                <li>• RESTful APIs</li>
                <li>• Webhook support</li>
                <li>• Custom connectors</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600 mb-4">
                Get help when you need it with our comprehensive support team available around 
                the clock.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Live chat support</li>
                <li>• Phone support</li>
                <li>• Email support</li>
                <li>• Knowledge base</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Growth</h3>
              <p className="text-gray-600 mb-4">
                Start small and scale as you grow. Our solutions automatically adapt to your 
                changing business needs.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Auto-scaling infrastructure</li>
                <li>• Flexible pricing tiers</li>
                <li>• Performance optimization</li>
                <li>• Growth analytics</li>
              </ul>
            </motion.div>
          </div>

          {/* Market Statistics */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Proven Market Performance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Active Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Micro SaaS Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
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
<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Micro SaaS?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join 500+ successful businesses that trust Zion Tech Group for their micro SaaS development needs. Let&apos;s build the perfect solution for your business.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Start Building
              </Link>
                  <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                View All Services
              </Link>
</div>
                  </motion.div>
                  </div>
                  </section>
                  </div>
  );
}