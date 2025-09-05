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
  Database,
  Brain,
  Wifi,
  Laptop,
  Smartphone as Phone
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
  // NEW INNOVATIVE SERVICES
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
    icon: Network,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Risk Analysis', 'Cost Reduction'],
    pricing: '$599 - $3,999/month',
    category: 'Supply Chain',
    popular: true
  },
  {
    title: 'AI-Powered Cybersecurity Monitor',
    description: 'Real-time cybersecurity monitoring with AI-powered threat detection and response.',
    icon: Shield,
    features: ['Threat Detection', 'Automated Response', 'Security Analytics', 'Compliance Monitoring'],
    pricing: '$399 - $2,999/month',
    category: 'Cybersecurity',
    popular: true
  },
  {
    title: 'Smart Energy Management System',
    description: 'AI-powered energy optimization for buildings and facilities with cost reduction.',
    icon: Zap,
    features: ['Energy Monitoring', 'Cost Optimization', 'Predictive Maintenance', 'Carbon Tracking'],
    pricing: '$299 - $1,999/month',
    category: 'Energy Management',
    popular: true
  },
  {
    title: 'AI-Powered Legal Document Analyzer',
    description: 'Intelligent legal document review and contract analysis with risk assessment.',
    icon: FileText,
    features: ['Contract Analysis', 'Risk Assessment', 'Clause Extraction', 'Compliance Checking'],
    pricing: '$499 - $2,999/month',
    category: 'Legal Tech',
    popular: true
  },
  {
    title: 'Intelligent Fleet Management Platform',
    description: 'AI-powered fleet optimization with route planning and predictive maintenance.',
    icon: Car,
    features: ['Route Optimization', 'Predictive Maintenance', 'Driver Behavior Analysis', 'Fuel Optimization'],
    pricing: '$199 - $1,499/month',
    category: 'Fleet Management',
    popular: true
  },
  {
    title: 'AI-Powered Healthcare Analytics',
    description: 'Advanced healthcare data analytics with patient outcome prediction and treatment optimization.',
    icon: Heart,
    features: ['Patient Analytics', 'Treatment Optimization', 'Risk Prediction', 'Clinical Decision Support'],
    pricing: '$799 - $4,999/month',
    category: 'Healthcare',
    popular: true
  },
  {
    title: 'Smart Building Management System',
    description: 'IoT-powered building management with AI optimization for comfort and efficiency.',
    icon: Building,
    features: ['Climate Control', 'Occupancy Optimization', 'Energy Management', 'Predictive Maintenance'],
    pricing: '$399 - $2,499/month',
    category: 'Smart Buildings',
    popular: true
  },
  {
    title: 'AI-Powered Financial Risk Analyzer',
    description: 'Advanced financial risk assessment and portfolio optimization using machine learning.',
    icon: TrendingUp,
    features: ['Risk Assessment', 'Portfolio Optimization', 'Market Analysis', 'Fraud Detection'],
    pricing: '$599 - $3,999/month',
    category: 'Financial Services',
    popular: true
  },
  {
    title: 'Intelligent Content Moderation Platform',
    description: 'AI-powered content moderation for text, images, and videos with custom rule sets.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Custom Rules', 'Real-time Processing', 'API Integration'],
    pricing: '$299 - $1,999/month',
    category: 'Content Safety',
    popular: true
  },
  {
    title: 'AI-Powered Talent Acquisition Suite',
    description: 'Intelligent recruitment platform with candidate matching and interview automation.',
    icon: Users,
    features: ['Resume Analysis', 'Skill Matching', 'Interview Scheduling', 'Cultural Fit Assessment'],
    pricing: '$199 - $1,499/month',
    category: 'HR & Recruitment',
    popular: true
  },
  {
    title: 'Smart Agriculture Management System',
    description: 'IoT and AI-powered agricultural optimization for crop yield and resource management.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Resource Optimization', 'Weather Integration'],
    pricing: '$399 - $2,499/month',
    category: 'Agriculture',
    popular: true
  },
  {
    title: 'AI-Powered E-commerce Personalization',
    description: 'Advanced personalization engine for e-commerce with real-time recommendations.',
    icon: ShoppingCart,
    features: ['Product Recommendations', 'Dynamic Pricing', 'Customer Segmentation', 'A/B Testing'],
    pricing: '$299 - $1,999/month',
    category: 'E-commerce',
    popular: true
  },
  {
    title: 'Intelligent Document Processing Suite',
    description: 'AI-powered document extraction, classification, and workflow automation.',
    icon: FileText,
    features: ['OCR Technology', 'Document Classification', 'Data Extraction', 'Workflow Automation'],
    pricing: '$199 - $1,299/month',
    category: 'Document Management',
    popular: true
  },
  {
    title: 'AI-Powered Predictive Maintenance',
    description: 'Intelligent equipment maintenance prediction to reduce downtime and costs.',
    icon: Settings,
    features: ['Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Performance Monitoring'],
    pricing: '$399 - $2,499/month',
    category: 'Maintenance',
    popular: true
  },
  {
    title: 'Smart Retail Analytics Platform',
    description: 'AI-powered retail analytics with customer behavior analysis and inventory optimization.',
    icon: BarChart3,
    features: ['Customer Analytics', 'Inventory Optimization', 'Sales Forecasting', 'Store Performance'],
    pricing: '$299 - $1,999/month',
    category: 'Retail Analytics',
    popular: true
  },
  {
    title: 'AI-Powered Language Translation Service',
    description: 'Advanced multilingual translation with context awareness and industry-specific terminology.',
    icon: Globe,
    features: ['Real-time Translation', 'Context Awareness', 'Industry Terms', 'Quality Assurance'],
    pricing: '$99 - $799/month',
    category: 'Language Services',
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
    title: 'AI-Powered Autonomous Vehicle Fleet Management',
    description: 'Complete fleet management system for autonomous vehicles with route optimization and safety monitoring.',
    icon: Car,
    features: ['Route Optimization', 'Safety Monitoring', 'Fleet Coordination', 'Performance Analytics'],
    pricing: '$1,999 - $9,999/month',
    category: 'Autonomous Vehicles',
    popular: true
  },
  {
    title: 'AI-Powered Climate Change Analytics',
    description: 'Advanced climate modeling and environmental impact prediction using AI and satellite data.',
    icon: Sprout,
    features: ['Climate Modeling', 'Carbon Tracking', 'Environmental Monitoring', 'Impact Prediction'],
    pricing: '$2,999 - $19,999/month',
    category: 'Climate Tech',
    popular: true
  },
  {
    title: 'AI-Powered Space Mission Planning',
    description: 'Intelligent space mission planning and satellite operations optimization.',
    icon: Rocket,
    features: ['Mission Planning', 'Satellite Management', 'Orbital Optimization', 'Risk Assessment'],
    pricing: '$9,999 - $99,999/project',
    category: 'Space Technology',
    popular: true
  },
  {
    title: 'AI-Powered Quantum Computing Optimization',
    description: 'AI algorithms optimized for quantum computing systems and quantum machine learning.',
    icon: Cpu,
    features: ['Quantum Algorithm Design', 'Quantum ML Models', 'Optimization Problems', 'Quantum Simulation'],
    pricing: '$4,999 - $49,999/project',
    category: 'Quantum AI',
    popular: true
  },
  {
    title: 'AI-Powered Brain-Computer Interface Platform',
    description: 'Advanced BCI systems for medical applications and human-computer interaction.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Motor Control', 'Cognitive Enhancement', 'Medical Diagnostics'],
    pricing: '$19,999 - $199,999/project',
    category: 'Neurotechnology',
    popular: true
  },
  {
    title: 'AI Digital Twin for Smart Cities',
    description: 'Comprehensive digital twin platform for smart city management and optimization.',
    icon: Building,
    features: ['Real-time Simulation', 'Traffic Optimization', 'Resource Management', 'Predictive Analytics'],
    pricing: '$49,999 - $499,999/project',
    category: 'Smart Cities',
    popular: true
  },
  {
    title: 'AI-Powered Precision Medicine Platform',
    description: 'Personalized medicine using AI for treatment optimization and drug discovery.',
    icon: Heart,
    features: ['Personalized Treatment', 'Drug Discovery', 'Genetic Analysis', 'Clinical Trials'],
    pricing: '$9,999 - $99,999/month',
    category: 'Precision Medicine',
    popular: true
  }
];

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Deploy in minutes, not months',
    stat: '5 min'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II compliant',
    stat: '99.9%'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Built for modern teams',
    stat: 'Unlimited'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Real-time insights and metrics',
    stat: '24/7'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Available worldwide',
    stat: '200+'
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
    title: 'Time Saving',
    description: 'Automate repetitive tasks',
    stat: '80%'
  },
  {
    icon: DollarSign,
    title: 'Cost Effective',
    description: 'Reduce operational costs',
    stat: '60%'
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
    price: '$29',
    period: '/month',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 5 team members',
      'Basic integrations',
      'Email support',
      'Standard templates',
      'Basic analytics'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'Best for growing businesses',
    features: [
      'Up to 25 team members',
      'Advanced integrations',
      'Priority support',
      'Custom templates',
      'Advanced analytics',
      'API access'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$299',
    period: '/month',
    description: 'For large organizations',
    features: [
      'Unlimited team members',
      'Custom integrations',
      '24/7 phone support',
      'White-label options',
      'Custom analytics',
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
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover innovative micro SaaS solutions designed to solve specific business problems with AI-powered tools and automation." />
        <meta name="keywords" content="micro saas, software as a service, business automation, AI tools, productivity software" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Innovative, focused software solutions that solve specific business problems with AI-powered automation and intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Get Started Today
              </Link>
              <Link href="#products" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-slate-300">Micro SaaS Products</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-slate-300">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-slate-300">Support Available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-slate-300">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Products
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Carefully crafted solutions that address specific business challenges with cutting-edge technology.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              All Products
            </button>
            <button className="px-6 py-3 bg-slate-700 text-slate-300 rounded-lg font-semibold hover:bg-slate-600 transition-colors">
              AI & Machine Learning
            </button>
            <button className="px-6 py-3 bg-slate-700 text-slate-300 rounded-lg font-semibold hover:bg-slate-600 transition-colors">
              Business Automation
            </button>
            <button className="px-6 py-3 bg-slate-700 text-slate-300 rounded-lg font-semibold hover:bg-slate-600 transition-colors">
              Analytics & Insights
            </button>
            <button className="px-6 py-3 bg-slate-700 text-slate-300 rounded-lg font-semibold hover:bg-slate-600 transition-colors">
              Security & Compliance
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaSProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  {product.popular && (
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-slate-300 mb-4 text-sm">
                  {product.description}
                </p>
                
                <div className="mb-4">
                  <span className="text-blue-400 font-semibold text-lg">{product.pricing}</span>
                  <span className="text-slate-400 text-sm ml-2">{product.category}</span>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-slate-300 text-sm flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-2">
                  <Link 
                    href="/contact" 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center font-semibold transition-colors"
                  >
                    Get Started
                  </Link>
                  <Link 
                    href={`/contact?service=${encodeURIComponent(product.title)}`} 
                    className="flex-1 border border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white px-4 py-2 rounded-lg text-center font-semibold transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Built with modern technology and designed for real-world business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="p-4 bg-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300 mb-2">{feature.description}</p>
                {feature.stat && (
                  <div className="text-2xl font-bold text-blue-400">{feature.stat}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Business Benefits
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transform your business operations with our intelligent micro SaaS solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-8 text-center"
              >
                <div className="p-4 bg-green-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300 mb-4">{benefit.description}</p>
                <div className="text-3xl font-bold text-green-400">{benefit.stat}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-slate-700 rounded-xl p-8 relative ${tier.popular ? 'ring-2 ring-blue-500' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {tier.price}
                    <span className="text-lg text-slate-400">{tier.period}</span>
                  </div>
                  <p className="text-slate-300">{tier.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-slate-300 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact" 
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                    tier.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-slate-600 hover:bg-slate-500 text-white'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our micro SaaS solutions to streamline operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Your Free Trial
              </Link>
              <Link href="/contact" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Schedule a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}