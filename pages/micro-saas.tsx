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
  Database,
  Sprout,
  Mail,
  MessageSquare,
  Search,
  Eye,
  Target,
  TrendingUp,
  Share2,
  Receipt,
  Package,
  Calendar,
  Headphones,
  Kanban,
  HardDrive,
  Bell,
  Home,
  BookOpen
} from 'lucide-react';

const microSaaSProducts = [
  {
    title: 'Cloud Cost Guard (FinOps Assistant)',
    description: 'Anomaly detection, rightsizing, forecasting and budget guardrails across AWS/Azure/GCP.',
    icon: DollarSign,
    features: ['Cost Anomaly Detection', 'Auto Rightsizing', 'Budget Forecasting', 'Multi-cloud Support'],
    pricing: '$299 - $1,499/month',
    category: 'FinOps',
    popular: true,
    link: 'https://cloudcostguard.ziontechgroup.com'
  },
  {
    title: 'LLM Evaluation & Safety Suite',
    description: 'Prompt evaluation, bias/toxicity checks, jailbreak tests and guardrail policies.',
    icon: Shield,
    features: ['Prompt Testing', 'Bias Detection', 'Safety Checks', 'Guardrail Policies'],
    pricing: '$799 - $3,500/month',
    category: 'AI Safety',
    link: 'https://llmsafety.ziontechgroup.com'
  },
  {
    title: 'Customer Feedback & NPS Micro-App',
    description: 'Embed surveys, analyze sentiment and route issues to the right team automatically.',
    icon: MessageSquare,
    features: ['Survey Builder', 'Sentiment Analysis', 'Auto Routing', 'NPS Tracking'],
    pricing: '$149 - $799/month',
    category: 'Customer Success',
    link: 'https://feedbackpro.ziontechgroup.com'
  },
  {
    title: 'API Rate Limiting & Analytics',
    description: 'Intelligent rate limiting with detailed analytics and usage insights.',
    icon: BarChart3,
    features: ['Smart Rate Limiting', 'Usage Analytics', 'Real-time Monitoring', 'Custom Rules'],
    pricing: '$199 - $999/month',
    category: 'API Management',
    link: 'https://apiguard.ziontechgroup.com'
  },
  {
    title: 'Content Moderation AI',
    description: 'Automated content moderation using advanced AI for text, images, and videos.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Custom Rules', 'Real-time Processing', 'API Integration'],
    pricing: '$399 - $1,999/month',
    category: 'Content Safety',
    link: 'https://contentmod.ziontechgroup.com'
  },
  {
    title: 'Workflow Automation Engine',
    description: 'No-code workflow automation with integrations to popular business tools.',
    icon: Settings,
    features: ['Visual Builder', '100+ Integrations', 'Conditional Logic', 'Scheduled Tasks'],
    pricing: '$99 - $599/month',
    category: 'Automation',
    link: 'https://workflowpro.ziontechgroup.com'
  },
  {
    title: 'Social Media Scheduler Pro',
    description: 'AI-powered social media management with optimal posting times and content suggestions.',
    icon: Share2,
    features: ['Multi-platform Posting', 'AI Content Suggestions', 'Analytics Dashboard', 'Team Collaboration'],
    pricing: '$49 - $299/month',
    category: 'Social Media',
    popular: true,
    link: 'https://socialscheduler.ziontechgroup.com'
  },
  {
    title: 'Invoice & Payment Tracker',
    description: 'Automated invoicing, payment tracking, and financial reporting for small businesses.',
    icon: Receipt,
    features: ['Auto Invoice Generation', 'Payment Tracking', 'Tax Calculations', 'Financial Reports'],
    pricing: '$29 - $149/month',
    category: 'Finance',
    link: 'https://invoicetracker.ziontechgroup.com'
  },
  {
    title: 'Employee Time Tracking Hub',
    description: 'Comprehensive time tracking with project management and productivity analytics.',
    icon: Clock,
    features: ['Time Tracking', 'Project Management', 'Productivity Analytics', 'Team Reports'],
    pricing: '$19 - $99/month',
    category: 'Productivity',
    link: 'https://timetracker.ziontechgroup.com'
  },
  {
    title: 'Email Marketing Automation',
    description: 'Advanced email marketing with AI-driven personalization and campaign optimization.',
    icon: Mail,
    features: ['AI Personalization', 'A/B Testing', 'Behavioral Triggers', 'Advanced Analytics'],
    pricing: '$79 - $399/month',
    category: 'Marketing',
    link: 'https://emailpro.ziontechgroup.com'
  },
  {
    title: 'Inventory Management System',
    description: 'Real-time inventory tracking with predictive analytics and automated reordering.',
    icon: Package,
    features: ['Real-time Tracking', 'Predictive Analytics', 'Auto Reordering', 'Multi-location Support'],
    pricing: '$99 - $499/month',
    category: 'E-commerce',
    link: 'https://inventorypro.ziontechgroup.com'
  },
  {
    title: 'Lead Generation Engine',
    description: 'AI-powered lead generation with automated outreach and qualification scoring.',
    icon: Target,
    features: ['AI Lead Scoring', 'Automated Outreach', 'CRM Integration', 'Conversion Tracking'],
    pricing: '$199 - $999/month',
    category: 'Sales',
    link: 'https://leadgen.ziontechgroup.com'
  },
  {
    title: 'Document Management Pro',
    description: 'Secure document storage with AI-powered search, OCR, and collaboration features.',
    icon: FileText,
    features: ['AI Search', 'OCR Processing', 'Version Control', 'Team Collaboration'],
    pricing: '$39 - $199/month',
    category: 'Document Management',
    link: 'https://docmanager.ziontechgroup.com'
  },
  {
    title: 'Website Performance Monitor',
    description: 'Real-time website monitoring with performance optimization recommendations.',
    icon: Monitor,
    features: ['Real-time Monitoring', 'Performance Optimization', 'Uptime Tracking', 'Alert System'],
    pricing: '$29 - $149/month',
    category: 'Web Performance',
    link: 'https://webmonitor.ziontechgroup.com'
  },
  {
    title: 'Password Manager for Teams',
    description: 'Secure password management with team sharing and enterprise security features.',
    icon: Lock,
    features: ['Team Sharing', 'Enterprise Security', 'Password Generator', 'Breach Monitoring'],
    pricing: '$49 - $199/month',
    category: 'Security',
    link: 'https://passwordmanager.ziontechgroup.com'
  },
  {
    title: 'Meeting Scheduler AI',
    description: 'Intelligent meeting scheduling with calendar integration and conflict resolution.',
    icon: Calendar,
    features: ['Smart Scheduling', 'Calendar Integration', 'Conflict Resolution', 'Time Zone Handling'],
    pricing: '$19 - $99/month',
    category: 'Scheduling',
    link: 'https://meetingscheduler.ziontechgroup.com'
  },
  {
    title: 'Code Review Assistant',
    description: 'AI-powered code review with automated suggestions and security vulnerability detection.',
    icon: Code,
    features: ['AI Code Review', 'Security Scanning', 'Performance Analysis', 'Team Collaboration'],
    pricing: '$99 - $499/month',
    category: 'Development',
    link: 'https://codereview.ziontechgroup.com'
  },
  {
    title: 'Customer Support Ticketing',
    description: 'AI-enhanced customer support with automated ticket routing and response suggestions.',
    icon: Headphones,
    features: ['AI Ticket Routing', 'Response Suggestions', 'Knowledge Base', 'Multi-channel Support'],
    pricing: '$79 - $399/month',
    category: 'Customer Support',
    link: 'https://supporttickets.ziontechgroup.com'
  },
  {
    title: 'Project Management Hub',
    description: 'Comprehensive project management with AI-powered resource allocation and timeline optimization.',
    icon: Kanban,
    features: ['AI Resource Allocation', 'Timeline Optimization', 'Team Collaboration', 'Progress Tracking'],
    pricing: '$59 - $299/month',
    category: 'Project Management',
    link: 'https://projecthub.ziontechgroup.com'
  },
  {
    title: 'Data Backup & Recovery',
    description: 'Automated data backup with instant recovery and cross-platform synchronization.',
    icon: HardDrive,
    features: ['Automated Backups', 'Instant Recovery', 'Cross-platform Sync', 'Version History'],
    pricing: '$39 - $199/month',
    category: 'Data Management',
    link: 'https://databackup.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Code Review Assistant',
    description: 'Automated code review with security analysis and performance optimization.',
    icon: Code,
    features: ['Security Analysis', 'Performance Optimization', 'Code Quality Metrics', 'Automated Fixes'],
    pricing: '$199 - $999/month',
    category: 'Development',
    popular: true,
    link: 'https://codeassistant.ziontechgroup.com'
  },
  {
    title: 'Blockchain Payment Gateway',
    description: 'Cryptocurrency payment processing with multi-chain support and DeFi integration.',
    icon: DollarSign,
    features: ['Multi-chain Support', 'DeFi Integration', 'Smart Contracts', 'Real-time Settlement'],
    pricing: '$299 - $1,999/month',
    category: 'FinTech'
  },
  {
    title: 'IoT Device Management Platform',
    description: 'Comprehensive IoT device monitoring, management, and analytics platform.',
    icon: Smartphone,
    features: ['Device Monitoring', 'Firmware Updates', 'Data Analytics', 'Alert Management'],
    pricing: '$149 - $799/month',
    category: 'IoT'
  },
  {
    title: 'AI-Powered SEO Optimizer',
    description: 'Automated SEO optimization with AI content suggestions and ranking analysis.',
    icon: Search,
    features: ['Content Optimization', 'Keyword Research', 'Ranking Analysis', 'Competitor Tracking'],
    pricing: '$99 - $599/month',
    category: 'SEO'
  },
  {
    title: 'Virtual Event Platform',
    description: 'Complete virtual event hosting with networking, exhibitions, and analytics.',
    icon: Video,
    features: ['Virtual Booths', 'Networking Rooms', 'Live Streaming', 'Analytics Dashboard'],
    pricing: '$199 - $1,499/month',
    category: 'Events'
  },
  {
    title: 'AI Customer Success Platform',
    description: 'Predictive customer success management with churn prevention and growth insights.',
    icon: TrendingUp,
    features: ['Churn Prediction', 'Health Scoring', 'Automated Workflows', 'Growth Insights'],
    pricing: '$299 - $1,999/month',
    category: 'Customer Success'
  },
  {
    title: 'Carbon Footprint Tracker',
    description: 'Sustainability tracking and carbon footprint management for businesses.',
    icon: Sprout,
    features: ['Carbon Tracking', 'Sustainability Metrics', 'Reporting', 'Goal Setting'],
    pricing: '$49 - $299/month',
    category: 'Sustainability'
  },
  {
    title: 'AI-Powered Legal Document Generator',
    description: 'Automated legal document creation with compliance checking and customization.',
    icon: FileText,
    features: ['Document Templates', 'Compliance Checking', 'Customization', 'E-signature Integration'],
    pricing: '$199 - $999/month',
    category: 'Legal Tech'
  },
  {
    title: 'Real Estate Investment Analyzer',
    description: 'AI-powered real estate investment analysis and market prediction platform.',
    icon: Home,
    features: ['Market Analysis', 'Investment Scoring', 'ROI Prediction', 'Risk Assessment'],
    pricing: '$149 - $799/month',
    category: 'Real Estate'
  },
  {
    title: 'AI-Powered Recruitment Platform',
    description: 'Intelligent candidate screening and matching for HR teams.',
    icon: Users,
    features: ['Resume Screening', 'Skill Matching', 'Interview Scheduling', 'Bias Detection'],
    pricing: '$199 - $1,299/month',
    category: 'HR Tech'
  },
  {
    title: 'Voice AI Assistant Platform',
    description: 'Custom voice AI assistants with natural language processing and multi-language support.',
    icon: Mic,
    features: ['Voice Recognition', 'Natural Language Processing', 'Multi-language Support', 'Custom Training'],
    pricing: '$399 - $2,499/month',
    category: 'Voice AI'
  },
  {
    title: 'AI-Powered Content Moderation',
    description: 'Automated content moderation for text, images, and videos using advanced AI.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Custom Rules', 'Real-time Processing', 'API Integration'],
    pricing: '$299 - $1,999/month',
    category: 'Content Safety'
  },
  {
    title: 'Predictive Maintenance Platform',
    description: 'IoT-based predictive maintenance for industrial equipment and machinery.',
    icon: Settings,
    features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization'],
    pricing: '$499 - $2,999/month',
    category: 'Industrial IoT'
  },
  {
    title: 'AI-Powered Translation Platform',
    description: 'Real-time translation services with context awareness and industry terminology.',
    icon: Globe,
    features: ['Multi-language Support', 'Context Awareness', 'Industry Terminology', 'Real-time Processing'],
    pricing: '$99 - $599/month',
    category: 'Language Services'
  },
  {
    title: 'Digital Twin Management Platform',
    description: 'Create and manage digital twins for physical assets and processes.',
    icon: Monitor,
    features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analytics', 'Integration APIs'],
    pricing: '$599 - $3,999/month',
    category: 'Digital Twin'
  },
  {
    title: 'AI-Powered Energy Management',
    description: 'Smart energy optimization for buildings and facilities using AI algorithms.',
    icon: Zap,
    features: ['Energy Consumption Analysis', 'Optimization Algorithms', 'Cost Reduction', 'Sustainability Metrics'],
    pricing: '$199 - $1,299/month',
    category: 'Energy Management'
  },
  {
    title: 'Blockchain Supply Chain Tracker',
    description: 'Transparent supply chain tracking using blockchain technology.',
    icon: Network,
    features: ['Supply Chain Mapping', 'Product Tracking', 'Quality Assurance', 'Transparency Reports'],
    pricing: '$299 - $1,999/month',
    category: 'Supply Chain'
  },
  {
    title: 'AI-Powered Quality Control',
    description: 'Automated quality inspection using computer vision and machine learning.',
    icon: Eye,
    features: ['Defect Detection', 'Quality Metrics', 'Real-time Monitoring', 'Process Optimization'],
    pricing: '$399 - $2,499/month',
    category: 'Manufacturing'
  },
  {
    title: 'Voice Commerce Platform',
    description: 'Voice-activated e-commerce platform with natural language processing.',
    icon: ShoppingCart,
    features: ['Voice Commands', 'Natural Language Processing', 'Payment Integration', 'Order Management'],
    pricing: '$199 - $1,299/month',
    category: 'E-commerce'
  },
  {
    title: 'AI-Powered Financial Planning',
    description: 'Personalized financial planning and investment advice using AI algorithms.',
    icon: TrendingUp,
    features: ['Financial Analysis', 'Investment Recommendations', 'Risk Assessment', 'Goal Tracking'],
    pricing: '$49 - $299/month',
    category: 'FinTech'
  },
  {
    title: 'Real Estate CRM',
    description: 'Specialized CRM for real estate agents and property management.',
    icon: Building,
    features: ['Lead Management', 'Property Listings', 'Client Communication', 'Deal Tracking'],
    pricing: '$39 - $199/month',
    category: 'Real Estate',
    link: 'https://realestatecrm.ziontechgroup.com'
  },
  {
    title: 'AI-Powered SEO Optimizer',
    description: 'Automated SEO analysis and optimization with real-time keyword tracking and content suggestions.',
    icon: Search,
    features: ['Keyword Research', 'Content Optimization', 'Rank Tracking', 'Competitor Analysis'],
    pricing: '$149 - $799/month',
    category: 'SEO',
    popular: true,
    link: 'https://seooptimizer.ziontechgroup.com'
  },
  {
    title: 'Smart Analytics Dashboard',
    description: 'Real-time business intelligence with AI-driven insights and predictive analytics.',
    icon: BarChart3,
    features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Data Visualization'],
    pricing: '$199 - $999/month',
    category: 'Analytics',
    link: 'https://smartanalytics.ziontechgroup.com'
  },
  {
    title: 'Automated Testing Suite',
    description: 'Comprehensive automated testing platform for web and mobile applications.',
    icon: CheckCircle,
    features: ['UI Testing', 'API Testing', 'Performance Testing', 'Cross-browser Testing'],
    pricing: '$299 - $1,499/month',
    category: 'Quality Assurance',
    link: 'https://autotesting.ziontechgroup.com'
  },
  {
    title: 'Customer Onboarding Platform',
    description: 'Streamlined customer onboarding with interactive tutorials and progress tracking.',
    icon: Rocket,
    features: ['Interactive Tutorials', 'Progress Tracking', 'Personalized Paths', 'Analytics'],
    pricing: '$99 - $499/month',
    category: 'Customer Success',
    link: 'https://onboarding.ziontechgroup.com'
  },
  {
    title: 'AI Content Moderation',
    description: 'Advanced content moderation using machine learning for text, images, and video content.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Custom Rules Engine', 'Real-time Processing', 'API Integration'],
    pricing: '$399 - $1,999/month',
    category: 'Content Safety',
    link: 'https://contentmoderation.ziontechgroup.com'
  },
  {
    title: 'Subscription Management Hub',
    description: 'Complete subscription lifecycle management with billing automation and analytics.',
    icon: Receipt,
    features: ['Billing Automation', 'Subscription Analytics', 'Churn Prevention', 'Payment Processing'],
    pricing: '$199 - $999/month',
    category: 'Subscription Management',
    link: 'https://subscriptionhub.ziontechgroup.com'
  },
  {
    title: 'API Documentation Generator',
    description: 'Automated API documentation with interactive testing and version management.',
    icon: Code,
    features: ['Auto Documentation', 'Interactive Testing', 'Version Management', 'Team Collaboration'],
    pricing: '$79 - $399/month',
    category: 'API Development',
    link: 'https://apidocs.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Code Generator',
    description: 'Generate production-ready code from natural language descriptions using advanced AI models.',
    icon: Code,
    features: ['Natural Language to Code', 'Multi-language Support', 'Code Optimization', 'Integration Ready'],
    pricing: '$199 - $999/month',
    category: 'Development',
    popular: true,
    link: 'https://aicodegen.ziontechgroup.com'
  },
  {
    title: 'Blockchain Analytics Platform',
    description: 'Comprehensive blockchain data analysis with transaction tracking and smart contract monitoring.',
    icon: Network,
    features: ['Transaction Analysis', 'Smart Contract Monitoring', 'DeFi Analytics', 'Risk Assessment'],
    pricing: '$299 - $1,499/month',
    category: 'Blockchain',
    link: 'https://blockchainanalytics.ziontechgroup.com'
  },
  {
    title: 'IoT Device Management Hub',
    description: 'Centralized IoT device management with real-time monitoring and automated maintenance.',
    icon: Settings,
    features: ['Device Monitoring', 'Firmware Updates', 'Data Collection', 'Alert Management'],
    pricing: '$149 - $799/month',
    category: 'IoT',
    link: 'https://iotmanager.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Video Editor',
    description: 'Automated video editing with AI-driven content analysis and intelligent cuts.',
    icon: Video,
    features: ['AI Auto-editing', 'Content Analysis', 'Smart Cuts', 'Multi-format Export'],
    pricing: '$99 - $499/month',
    category: 'Video Production',
    link: 'https://aivideoeditor.ziontechgroup.com'
  },
  {
    title: 'Smart Contract Auditor',
    description: 'Automated smart contract security analysis with vulnerability detection and recommendations.',
    icon: Shield,
    features: ['Security Analysis', 'Vulnerability Detection', 'Gas Optimization', 'Compliance Checking'],
    pricing: '$399 - $1,999/project',
    category: 'Blockchain Security',
    link: 'https://smartcontractauditor.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Data Labeling',
    description: 'Automated data labeling and annotation for machine learning model training.',
    icon: Target,
    features: ['Auto Labeling', 'Quality Control', 'Multi-format Support', 'Team Collaboration'],
    pricing: '$199 - $999/month',
    category: 'Machine Learning',
    link: 'https://aidatalabeling.ziontechgroup.com'
  },
  {
    title: 'Voice Cloning & Synthesis',
    description: 'High-quality voice cloning and text-to-speech synthesis for various applications.',
    icon: Mic,
    features: ['Voice Cloning', 'Text-to-Speech', 'Emotion Control', 'Multi-language Support'],
    pricing: '$299 - $1,499/month',
    category: 'Voice Technology',
    link: 'https://voicecloning.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Legal Research',
    description: 'Intelligent legal research platform with case law analysis and precedent identification.',
    icon: BookOpen,
    features: ['Case Law Analysis', 'Precedent Identification', 'Legal Document Search', 'Citation Tracking'],
    pricing: '$399 - $1,999/month',
    category: 'Legal Tech',
    link: 'https://ailegalresearch.ziontechgroup.com'
  },
  {
    title: 'Smart Energy Management',
    description: 'AI-driven energy optimization for buildings and industrial facilities.',
    icon: Zap,
    features: ['Energy Forecasting', 'Load Optimization', 'Cost Analysis', 'Sustainability Tracking'],
    pricing: '$199 - $999/month',
    category: 'Energy Management',
    link: 'https://smartenergy.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Recruitment',
    description: 'Intelligent candidate screening and matching using advanced AI algorithms.',
    icon: Users,
    features: ['Resume Analysis', 'Skill Matching', 'Interview Scheduling', 'Bias Detection'],
    pricing: '$299 - $1,499/month',
    category: 'HR Tech',
    link: 'https://airecruitment.ziontechgroup.com'
  },
  {
    title: 'Predictive Maintenance AI',
    description: 'Machine learning-powered predictive maintenance for industrial equipment.',
    icon: Settings,
    features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization'],
    pricing: '$499 - $2,499/month',
    category: 'Industrial AI',
    link: 'https://predictivemaintenance.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Trading Bot',
    description: 'Automated trading system with machine learning algorithms and risk management.',
    icon: TrendingUp,
    features: ['Algorithmic Trading', 'Risk Management', 'Market Analysis', 'Portfolio Optimization'],
    pricing: '$199 - $999/month',
    category: 'FinTech',
    link: 'https://aitradingbot.ziontechgroup.com'
  },
  {
    title: 'Smart Home Automation',
    description: 'AI-powered home automation with voice control and learning capabilities.',
    icon: Home,
    features: ['Voice Control', 'Learning Algorithms', 'Device Integration', 'Energy Optimization'],
    pricing: '$99 - $499/month',
    category: 'Smart Home',
    link: 'https://smarthome.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Medical Diagnosis',
    description: 'Medical image analysis and diagnostic assistance using advanced AI models.',
    icon: Heart,
    features: ['Medical Imaging', 'Diagnostic Assistance', 'Risk Assessment', 'Clinical Integration'],
    pricing: '$999 - $4,999/month',
    category: 'HealthTech',
    link: 'https://aimedical.ziontechgroup.com'
  },
  {
    title: 'Autonomous Vehicle Fleet Management',
    description: 'AI-powered fleet management for autonomous vehicles with route optimization.',
    icon: Car,
    features: ['Route Optimization', 'Fleet Monitoring', 'Predictive Maintenance', 'Safety Analytics'],
    pricing: '$1,999 - $9,999/month',
    category: 'Autonomous Vehicles',
    link: 'https://autonomousfleet.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Climate Modeling',
    description: 'Advanced climate modeling and environmental impact analysis using AI.',
    icon: Sprout,
    features: ['Climate Modeling', 'Impact Analysis', 'Predictive Forecasting', 'Sustainability Metrics'],
    pricing: '$499 - $2,499/month',
    category: 'Climate Tech',
    link: 'https://aiclimate.ziontechgroup.com'
  },
  {
    title: 'Quantum Computing Simulator',
    description: 'Cloud-based quantum computing simulation and algorithm development platform.',
    icon: Cpu,
    features: ['Quantum Simulation', 'Algorithm Development', 'Circuit Design', 'Performance Analysis'],
    pricing: '$299 - $1,499/month',
    category: 'Quantum Computing',
    link: 'https://quantumsimulator.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Drug Discovery',
    description: 'Machine learning platform for drug discovery and molecular design.',
    icon: Heart,
    features: ['Molecular Design', 'Drug Discovery', 'Toxicity Prediction', 'Clinical Trials'],
    pricing: '$2,999 - $14,999/month',
    category: 'BioTech',
    link: 'https://aidrugdiscovery.ziontechgroup.com'
  },
  {
    title: 'Space Mission Planning AI',
    description: 'AI-powered space mission planning and satellite constellation management.',
    icon: Rocket,
    features: ['Mission Planning', 'Satellite Management', 'Orbit Optimization', 'Risk Assessment'],
    pricing: '$1,999 - $9,999/month',
    category: 'Space Tech',
    link: 'https://spacemissionai.ziontechgroup.com'
  },
  {
    title: 'User Behavior Analytics',
    description: 'Deep user behavior analysis with heatmaps, session recordings, and conversion optimization.',
    icon: TrendingUp,
    features: ['Heatmaps', 'Session Recordings', 'Conversion Funnels', 'A/B Testing'],
    pricing: '$149 - $799/month',
    category: 'User Analytics',
    link: 'https://useranalytics.ziontechgroup.com'
  },
  {
    title: 'Multi-Channel Notification Center',
    description: 'Unified notification system across email, SMS, push, and in-app channels.',
    icon: Bell,
    features: ['Multi-channel Delivery', 'Smart Routing', 'Template Management', 'Delivery Analytics'],
    pricing: '$99 - $499/month',
    category: 'Communications',
    link: 'https://notifications.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Chat Support',
    description: 'Intelligent customer support chatbot with human handoff and knowledge base integration.',
    icon: MessageSquare,
    features: ['Natural Language Processing', 'Human Handoff', 'Knowledge Base', 'Multi-language'],
    pricing: '$199 - $999/month',
    category: 'Customer Support',
    link: 'https://aichat.ziontechgroup.com'
  },
  {
    title: 'Real Estate Management Platform',
    description: 'Complete property management solution with tenant portal and maintenance tracking.',
    icon: Building,
    features: ['Property Management', 'Tenant Portal', 'Maintenance Tracking', 'Financial Reporting'],
    pricing: '$299 - $1,499/month',
    category: 'Real Estate',
    link: 'https://realestate.ziontechgroup.com'
  },
  {
    title: 'Healthcare Appointment Scheduler',
    description: 'Medical practice management with appointment scheduling and patient communication.',
    icon: Calendar,
    features: ['Appointment Scheduling', 'Patient Communication', 'Billing Integration', 'Compliance Tools'],
    pricing: '$199 - $999/month',
    category: 'Healthcare',
    link: 'https://healthcare.ziontechgroup.com'
  },
  {
    title: 'E-learning Platform Builder',
    description: 'Create and manage online courses with interactive content and progress tracking.',
    icon: BookOpen,
    features: ['Course Builder', 'Progress Tracking', 'Interactive Content', 'Certification System'],
    pricing: '$149 - $799/month',
    category: 'Education',
    link: 'https://elearning.ziontechgroup.com'
  },
  {
    title: 'Fleet Management System',
    description: 'Complete fleet tracking and management with GPS monitoring and maintenance scheduling.',
    icon: Car,
    features: ['GPS Tracking', 'Maintenance Scheduling', 'Driver Management', 'Fuel Monitoring'],
    pricing: '$199 - $999/month',
    category: 'Fleet Management',
    link: 'https://fleetmanagement.ziontechgroup.com'
  },
  {
    title: 'Event Management Platform',
    description: 'Comprehensive event planning and management with ticketing and attendee tracking.',
    icon: Calendar,
    features: ['Event Planning', 'Ticketing System', 'Attendee Management', 'Analytics Dashboard'],
    pricing: '$99 - $499/month',
    category: 'Event Management',
    link: 'https://eventmanagement.ziontechgroup.com'
  },
  {
    title: 'Restaurant POS & Management',
    description: 'Complete restaurant management system with POS, inventory, and staff scheduling.',
    icon: Receipt,
    features: ['POS System', 'Inventory Management', 'Staff Scheduling', 'Customer Analytics'],
    pricing: '$199 - $999/month',
    category: 'Restaurant',
    link: 'https://restaurantpos.ziontechgroup.com'
  },
  {
    title: 'Fitness Tracking & Coaching',
    description: 'Personal fitness platform with workout tracking, nutrition planning, and AI coaching.',
    icon: Heart,
    features: ['Workout Tracking', 'Nutrition Planning', 'AI Coaching', 'Progress Analytics'],
    pricing: '$29 - $149/month',
    category: 'Fitness',
    link: 'https://fitness.ziontechgroup.com'
  },
  {
    title: 'Cryptocurrency Portfolio Tracker',
    description: 'Advanced crypto portfolio management with real-time tracking and trading alerts.',
    icon: TrendingUp,
    features: ['Portfolio Tracking', 'Real-time Prices', 'Trading Alerts', 'Tax Reporting'],
    pricing: '$49 - $299/month',
    category: 'Cryptocurrency',
    link: 'https://cryptotracker.ziontechgroup.com'
  },
  {
    title: 'Smart Home Automation',
    description: 'IoT platform for smart home device management and automation rules.',
    icon: Home,
    features: ['Device Management', 'Automation Rules', 'Energy Monitoring', 'Security Integration'],
    pricing: '$99 - $499/month',
    category: 'IoT',
    link: 'https://smarthome.ziontechgroup.com'
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
    title: 'AI-Powered Debt Resolution Platform',
    description: 'Automated debt dispute resolution with legal compliance and attorney review services.',
    icon: Shield,
    features: ['Automated Responses', 'Legal Compliance', 'Attorney Review', 'Filing Services'],
    pricing: '$199 - $999/month',
    category: 'Legal Tech',
    link: 'https://debtresolution.ziontechgroup.com'
  },
  {
    title: 'Smart Ad Creation Tool',
    description: 'AI-driven advertisement creation with performance analytics and multi-platform posting.',
    icon: Target,
    features: ['AI Ad Suggestions', 'Performance Analytics', 'Multi-platform Posting', 'A/B Testing'],
    pricing: '$149 - $799/month',
    category: 'Marketing',
    link: 'https://smartads.ziontechgroup.com'
  },
  {
    title: 'Local SEO Optimization Tool',
    description: 'Comprehensive local SEO optimization with keyword research and competitor analysis.',
    icon: Search,
    features: ['Local Keyword Research', 'Listing Audits', 'Competitor Analysis', 'Ranking Tracking'],
    pricing: '$79 - $399/month',
    category: 'SEO',
    link: 'https://localseo.ziontechgroup.com'
  },
  {
    title: 'AI Personal Assistant for Planning',
    description: 'Intelligent daily planning assistant with focus modes and productivity analytics.',
    icon: Calendar,
    features: ['Daily Planning', 'Focus Modes', 'Productivity Analytics', 'Time Tracking'],
    pricing: '$29 - $149/month',
    category: 'Productivity',
    link: 'https://aipersonalassistant.ziontechgroup.com'
  },
  {
    title: 'Compliance Technology Platform',
    description: 'Automated regulatory compliance management with real-time updates and monitoring.',
    icon: Shield,
    features: ['Regulatory Updates', 'Compliance Monitoring', 'Risk Assessment', 'Automated Reporting'],
    pricing: '$299 - $1,999/month',
    category: 'Compliance',
    link: 'https://complianceplatform.ziontechgroup.com'
  },
  {
    title: 'Employee Wellness Platform',
    description: 'Comprehensive employee wellness tracking with virtual team-building activities.',
    icon: Heart,
    features: ['Wellness Tracking', 'Time Management', 'Virtual Team Building', 'Health Analytics'],
    pricing: '$99 - $499/month',
    category: 'HR Tech',
    link: 'https://wellnessplatform.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Presentation Maker',
    description: 'Automated presentation creation with AI-generated content and design optimization.',
    icon: FileText,
    features: ['AI Content Generation', 'Design Optimization', 'Template Library', 'Export Options'],
    pricing: '$49 - $299/month',
    category: 'Productivity',
    link: 'https://presentationmaker.ziontechgroup.com'
  },
  {
    title: 'E-Commerce Return Management',
    description: 'Automated return processing with label generation and status tracking.',
    icon: Package,
    features: ['Return Processing', 'Label Generation', 'Status Tracking', 'Analytics Dashboard'],
    pricing: '$79 - $399/month',
    category: 'E-commerce',
    link: 'https://returnmanagement.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Email Responder',
    description: 'Intelligent email automation with sentiment analysis and smart routing.',
    icon: Mail,
    features: ['Automated Responses', 'Sentiment Analysis', 'Smart Routing', 'Priority Flagging'],
    pricing: '$99 - $599/month',
    category: 'Communication',
    link: 'https://aiemailresponder.ziontechgroup.com'
  },
  {
    title: 'Remote Monitoring & Management',
    description: 'Comprehensive remote team management with project tracking and collaboration tools.',
    icon: Monitor,
    features: ['Project Management', 'Time Tracking', 'File Sharing', 'Team Collaboration'],
    pricing: '$149 - $799/month',
    category: 'Remote Work',
    link: 'https://remotemonitoring.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Cybersecurity Training',
    description: 'Interactive cybersecurity training with simulated attacks and threat intelligence.',
    icon: Shield,
    features: ['Interactive Modules', 'Simulated Attacks', 'Threat Intelligence', 'Progress Tracking'],
    pricing: '$199 - $999/month',
    category: 'Cybersecurity',
    link: 'https://cybertraining.ziontechgroup.com'
  },
  {
    title: 'Health & Wellness App Platform',
    description: 'Personalized fitness and wellness tracking with meditation guidance and habit formation.',
    icon: Heart,
    features: ['Fitness Tracking', 'Meditation Guidance', 'Habit Formation', 'Nutrition Tracking'],
    pricing: '$19 - $99/month',
    category: 'Health & Wellness',
    link: 'https://wellnessapp.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Link Shortener',
    description: 'Intelligent link shortening with custom CTAs and conversion tracking.',
    icon: Link,
    features: ['Custom CTAs', 'Conversion Tracking', 'Analytics Dashboard', 'A/B Testing'],
    pricing: '$29 - $149/month',
    category: 'Marketing',
    link: 'https://smartlinks.ziontechgroup.com'
  },
  {
    title: 'Digital Asset Management',
    description: 'AI-powered digital asset organization with smart tagging and search capabilities.',
    icon: Image,
    features: ['Smart Tagging', 'AI Search', 'Version Control', 'Team Collaboration'],
    pricing: '$99 - $599/month',
    category: 'Asset Management',
    link: 'https://digitalassets.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Survey Builder',
    description: 'Intelligent survey creation with response analysis and automated insights.',
    icon: MessageSquare,
    features: ['Smart Templates', 'Response Analysis', 'Automated Insights', 'Multi-channel Distribution'],
    pricing: '$49 - $299/month',
    category: 'Research',
    link: 'https://surveysmart.ziontechgroup.com'
  },
  {
    title: 'Blockchain Document Verification',
    description: 'Secure document verification using blockchain technology for authenticity.',
    icon: Lock,
    features: ['Blockchain Verification', 'Document Authentication', 'Tamper Detection', 'Audit Trail'],
    pricing: '$199 - $999/month',
    category: 'Blockchain',
    link: 'https://blockchaindocs.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Meeting Transcription',
    description: 'Real-time meeting transcription with AI-powered insights and action items.',
    icon: Mic,
    features: ['Real-time Transcription', 'AI Insights', 'Action Items', 'Multi-language Support'],
    pricing: '$79 - $399/month',
    category: 'Productivity',
    link: 'https://meetingtranscription.ziontechgroup.com'
  },
  {
    title: 'Smart Inventory Forecasting',
    description: 'AI-powered inventory prediction with demand forecasting and optimization.',
    icon: Package,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Reorder Alerts', 'Analytics Dashboard'],
    pricing: '$149 - $799/month',
    category: 'Supply Chain',
    link: 'https://inventoryforecasting.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Code Generator',
    description: 'Automated code generation with natural language descriptions and multiple language support.',
    icon: Code,
    features: ['Natural Language Input', 'Multi-language Support', 'Code Optimization', 'Testing Integration'],
    pricing: '$199 - $999/month',
    category: 'Development',
    link: 'https://codegenerator.ziontechgroup.com'
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

                  <div className="space-y-2">
                    <Link
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm"
                    >
                      <span>Try Now</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                    <Link
                      href="/contact"
                      className="w-full border border-purple-600 text-purple-600 hover:bg-purple-50 py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm"
                    >
                      <span>Get Quote</span>
                    </Link>
                  </div>
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
              Let&apos;s build the perfect SaaS solution for your business needs. Fast, secure, and scalable.
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