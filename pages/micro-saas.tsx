import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
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
  HardDrive,
  QrCode,
  Palette,
  Type,
  Link as LinkIcon
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
    title: 'AI-Powered Email Signature Generator',
    description: 'Professional email signature creation with brand consistency and compliance features.',
    icon: Mail,
    features: ['Brand Templates', 'Compliance Checking', 'Bulk Generation', 'Analytics Tracking'],
    pricing: '$19 - $99/month',
    category: 'Email Marketing',
    popular: true
  },
  {
    title: 'Smart Meeting Scheduler AI',
    description: 'Intelligent meeting scheduling with timezone optimization and conflict resolution.',
    icon: Calendar,
    features: ['Timezone Detection', 'Conflict Resolution', 'Auto Rescheduling', 'Calendar Integration'],
    pricing: '$29 - $149/month',
    category: 'Productivity',
    popular: true
  },
  {
    title: 'AI-Powered Password Manager Pro',
    description: 'Advanced password management with AI-powered security recommendations and breach monitoring.',
    icon: Lock,
    features: ['Security Scoring', 'Breach Monitoring', 'Auto Generation', 'Team Sharing'],
    pricing: '$9 - $49/month',
    category: 'Security',
    popular: true
  },
  {
    title: 'Intelligent Expense Tracker',
    description: 'Smart expense tracking with receipt OCR and automatic categorization using AI.',
    icon: DollarSign,
    features: ['Receipt OCR', 'Auto Categorization', 'Tax Preparation', 'Team Management'],
    pricing: '$19 - $99/month',
    category: 'Finance',
    popular: true
  },
  {
    title: 'AI-Powered Logo Generator',
    description: 'Professional logo creation using AI with brand guidelines and multiple format exports.',
    icon: Image,
    features: ['AI Design', 'Brand Guidelines', 'Multiple Formats', 'Commercial License'],
    pricing: '$29 - $199/month',
    category: 'Design',
    popular: true
  },
  {
    title: 'Smart Website Uptime Monitor',
    description: 'Advanced website monitoring with AI-powered incident prediction and automated responses.',
    icon: Monitor,
    features: ['Predictive Alerts', 'Auto Response', 'Performance Analysis', 'SLA Tracking'],
    pricing: '$39 - $199/month',
    category: 'Monitoring',
    popular: true
  },
  {
    title: 'AI-Powered QR Code Generator',
    description: 'Dynamic QR code generation with analytics, customization, and batch processing capabilities.',
    icon: QrCode,
    features: ['Dynamic Codes', 'Analytics Tracking', 'Custom Design', 'Batch Processing'],
    pricing: '$19 - $99/month',
    category: 'Marketing Tools',
    popular: true
  },
  {
    title: 'Intelligent Form Builder',
    description: 'AI-powered form creation with smart validation, conditional logic, and analytics.',
    icon: FileText,
    features: ['Smart Validation', 'Conditional Logic', 'Analytics Dashboard', 'API Integration'],
    pricing: '$29 - $149/month',
    category: 'Form Builder',
    popular: true
  },
  {
    title: 'AI-Powered Color Palette Generator',
    description: 'Professional color palette creation with accessibility checking and brand consistency.',
    icon: Palette,
    features: ['AI Generation', 'Accessibility Check', 'Brand Matching', 'Export Options'],
    pricing: '$19 - $79/month',
    category: 'Design Tools',
    popular: true
  },
  {
    title: 'Smart Invoice Generator Pro',
    description: 'AI-powered invoice creation with automated calculations, payment tracking, and compliance.',
    icon: FileText,
    features: ['Auto Calculations', 'Payment Tracking', 'Tax Compliance', 'Multi-Currency'],
    pricing: '$29 - $149/month',
    category: 'Invoicing',
    popular: true
  },
  {
    title: 'AI-Powered Text Summarizer',
    description: 'Advanced text summarization with multiple languages and customizable output formats.',
    icon: FileText,
    features: ['Multi-Language', 'Custom Length', 'Format Options', 'API Access'],
    pricing: '$19 - $99/month',
    category: 'Content Tools',
    popular: true
  },
  {
    title: 'Intelligent Backup Manager',
    description: 'Smart backup solution with AI-powered deduplication and automated scheduling.',
    icon: HardDrive,
    features: ['AI Deduplication', 'Auto Scheduling', 'Version Control', 'Cloud Storage'],
    pricing: '$39 - $199/month',
    category: 'Backup Solutions',
    popular: true
  },
  {
    title: 'AI-Powered Font Pairing Tool',
    description: 'Intelligent font pairing suggestions with accessibility and brand consistency checks.',
    icon: Type,
    features: ['AI Suggestions', 'Accessibility Check', 'Brand Matching', 'Preview Tools'],
    pricing: '$19 - $79/month',
    category: 'Typography',
    popular: true
  },
  {
    title: 'Smart Social Media Scheduler',
    description: 'AI-powered social media scheduling with optimal timing and content optimization.',
    icon: Calendar,
    features: ['Optimal Timing', 'Content Optimization', 'Multi-Platform', 'Analytics'],
    pricing: '$29 - $149/month',
    category: 'Social Media',
    popular: true
  },
  {
    title: 'AI-Powered Website Speed Optimizer',
    description: 'Automated website performance optimization with AI-powered recommendations.',
    icon: Zap,
    features: ['Auto Optimization', 'Performance Monitoring', 'CDN Integration', 'Image Compression'],
    pricing: '$49 - $299/month',
    category: 'Performance',
    popular: true
  },
  {
    title: 'Intelligent Email Validator',
    description: 'Advanced email validation with deliverability scoring and bounce prediction.',
    icon: Mail,
    features: ['Deliverability Scoring', 'Bounce Prediction', 'Bulk Validation', 'API Integration'],
    pricing: '$19 - $99/month',
    category: 'Email Tools',
    popular: true
  },
  {
    title: 'AI-Powered Screenshot Tool',
    description: 'Smart screenshot capture with automatic annotation and sharing capabilities.',
    icon: Camera,
    features: ['Auto Annotation', 'Smart Capture', 'Cloud Storage', 'Team Sharing'],
    pricing: '$9 - $49/month',
    category: 'Productivity',
    popular: true
  },
  {
    title: 'Smart URL Shortener Pro',
    description: 'Advanced URL shortening with analytics, custom domains, and QR code generation.',
    icon: LinkIcon,
    features: ['Custom Domains', 'Analytics Dashboard', 'QR Generation', 'Bulk Operations'],
    pricing: '$19 - $99/month',
    category: 'URL Management',
    popular: true
  },
  {
    title: 'AI-Powered Favicon Generator',
    description: 'Professional favicon creation with multiple sizes and formats for all devices.',
    icon: Image,
    features: ['Multiple Sizes', 'Format Options', 'Preview Tools', 'Bulk Generation'],
    pricing: '$9 - $49/month',
    category: 'Web Tools',
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
=======
import { Cloud, Zap, Shield, Users, BarChart3, CheckCircle, ArrowRight, Clock, Star, DollarSign, Award, Globe, Lock, Cpu, Bot, FileText, Video, Mic, Code, Settings, Monitor, Smartphone, Server, Network, Car, Rocket, Heart, Building, Sprout, Mail, MessageSquare, Search, Eye, Target, TrendingUp, Package, Calendar, BookOpen, ShoppingCart, Home, Trash2, Camera, HardDrive, UserCheck, Lightbulb, Truck, Phone, MapPin } from 'lucide-react';
import Layout from '../components/Layout';

const microSaaSProducts = [
  {
    id: 'ai-business-validation',
    title: 'AI Business Validation Platform',
    description: 'Validate your business ideas with AI-powered market analysis, competitor research, and feasibility scoring',
    icon: Target,
    features: ['Market Analysis', 'Competitor Research', 'Feasibility Scoring', 'Investment Recommendations'],
    pricing: 'Starting at $99/month',
    category: 'Business Intelligence',
    benefits: ['Reduce startup failure risk', 'Data-driven decisions', 'Save months of research'],
    marketPrice: '$150-300/month',
    link: 'https://business-validation.ziontechgroup.com'
  },
  {
    id: 'ai-co-founder',
    title: 'AI Co-Founder as a Service',
    description: 'Get an AI-powered business partner that provides strategic advice, market insights, and growth recommendations',
    icon: Bot,
    features: ['Strategic Planning', 'Market Intelligence', 'Growth Hacking', '24/7 Availability'],
    pricing: 'Starting at $199/month',
    category: 'Business Strategy',
    benefits: ['Always-on business advisor', 'Scalable expertise', 'Cost-effective consulting'],
    marketPrice: '$500-1000/month',
    link: 'https://ai-cofounder.ziontechgroup.com'
  },
  {
    id: 'ai-content-studio',
    title: 'AI Content Creation Studio',
    description: 'Professional content creation platform with AI writers, video editors, and social media automation',
    icon: Video,
    features: ['AI Writing', 'Video Editing', 'Social Media Automation', 'Brand Voice Training'],
    pricing: 'Starting at $79/month',
    category: 'Content & Marketing',
    benefits: ['10x content output', 'Consistent brand voice', 'Multi-platform publishing'],
    marketPrice: '$200-500/month',
    link: 'https://content-studio.ziontechgroup.com'
  },
  {
    id: 'ai-customer-success',
    title: 'AI Customer Success Platform',
    description: 'Automate customer success with AI-powered health scoring, churn prediction, and personalized engagement',
    icon: Heart,
    features: ['Health Scoring', 'Churn Prediction', 'Automated Engagement', 'Success Metrics'],
    pricing: 'Starting at $149/month',
    category: 'Customer Success',
    benefits: ['Reduce churn by 40%', 'Increase retention', 'Automated interventions'],
    marketPrice: '$300-800/month',
    link: 'https://customer-success.ziontechgroup.com'
  },
  {
    id: 'ai-data-analytics',
    title: 'AI Data Analytics Platform',
    description: 'Transform raw data into actionable insights with AI-powered analytics, visualization, and reporting',
    icon: BarChart3,
    features: ['AI Insights', 'Auto-Visualization', 'Predictive Analytics', 'Custom Dashboards'],
    pricing: 'Starting at $89/month',
    category: 'Analytics & BI',
    benefits: ['Instant insights', 'No technical skills needed', 'Predictive forecasting'],
    marketPrice: '$250-600/month',
    link: 'https://data-analytics.ziontechgroup.com'
  },
  {
    id: 'ai-devops-automation',
    title: 'AI DevOps Automation',
    description: 'Intelligent CI/CD pipeline with automated testing, deployment, and infrastructure management',
    icon: Settings,
    features: ['Auto-Deployment', 'Smart Testing', 'Infrastructure as Code', 'Performance Monitoring'],
    pricing: 'Starting at $129/month',
    category: 'DevOps & Infrastructure',
    benefits: ['90% faster deployments', 'Zero-downtime updates', 'Automated scaling'],
    marketPrice: '$400-1000/month',
    link: 'https://devops-automation.ziontechgroup.com'
  },
  {
    id: 'ai-email-marketing',
    title: 'AI Email Marketing Suite',
    description: 'Intelligent email campaigns with AI-powered personalization, A/B testing, and conversion optimization',
    icon: Mail,
    features: ['AI Personalization', 'Smart Segmentation', 'A/B Testing', 'Conversion Tracking'],
    pricing: 'Starting at $59/month',
    category: 'Email Marketing',
    benefits: ['3x higher open rates', 'Personalized content', 'Automated optimization'],
    marketPrice: '$150-400/month',
    link: 'https://email-marketing.ziontechgroup.com'
  },
  {
    id: 'ai-financial-forecasting',
    title: 'AI Financial Forecasting',
    description: 'Predict financial performance with AI-powered forecasting, budgeting, and cash flow management',
    icon: TrendingUp,
    features: ['Cash Flow Prediction', 'Budget Optimization', 'Risk Assessment', 'Scenario Planning'],
    pricing: 'Starting at $119/month',
    category: 'Financial Management',
    benefits: ['Accurate forecasts', 'Risk mitigation', 'Better financial planning'],
    marketPrice: '$300-700/month',
    link: 'https://financial-forecasting.ziontechgroup.com'
  },
  {
    id: 'ai-hr-recruitment',
    title: 'AI HR & Recruitment Platform',
    description: 'Streamline hiring with AI-powered candidate screening, interview scheduling, and talent matching',
    icon: Users,
    features: ['Resume Screening', 'Interview Scheduling', 'Talent Matching', 'Onboarding Automation'],
    pricing: 'Starting at $99/month',
    category: 'Human Resources',
    benefits: ['50% faster hiring', 'Better candidate matches', 'Reduced bias'],
    marketPrice: '$200-600/month',
    popular: true
  },
  {
    title: 'Smart Inventory Management',
    description: 'AI-driven inventory optimization with demand forecasting and automated reordering.',
    icon: Package,
    features: ['Demand forecasting', 'Automated reordering', 'Stock level optimization', 'Supplier management'],
    pricing: '$65/month',
    category: 'E-commerce',
    benefits: ['Reduce stockouts by 80%', 'Lower inventory costs by 30%', 'Improve cash flow', 'Automated operations'],
    marketPrice: '$40-200/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Voice-to-Text Meeting Assistant',
    description: 'AI-powered meeting transcription with action items extraction and intelligent summaries.',
    icon: Mic,
    features: ['Real-time transcription', 'Action item extraction', 'Meeting summaries', 'Speaker identification'],
    pricing: '$29/month',
    category: 'Productivity',
    benefits: ['Save 2 hours per meeting', 'Never miss action items', 'Searchable meeting history', 'Improved follow-up'],
    marketPrice: '$15-50/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'AI Social Media Content Scheduler',
    description: 'Intelligent social media management with optimal posting times and engagement optimization.',
    icon: Calendar,
    features: ['Optimal timing suggestions', 'Content performance analysis', 'Hashtag optimization', 'Cross-platform posting'],
    pricing: '$39/month',
    category: 'Social Media',
    benefits: ['Increase engagement by 50%', 'Save 5 hours per week', 'Better content strategy', 'Automated posting'],
    marketPrice: '$20-80/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Smart Expense Tracker',
    description: 'AI-powered expense management with receipt scanning and automatic categorization.',
    icon: DollarSign,
    features: ['Receipt scanning', 'Automatic categorization', 'Expense reporting', 'Budget tracking'],
    pricing: '$19/month',
    category: 'Finance',
    benefits: ['Save 3 hours per week', 'Accurate expense tracking', 'Tax-ready reports', 'Budget insights'],
    marketPrice: '$10-40/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'AI Website Performance Optimizer',
    description: 'Automated website optimization for speed, SEO, and user experience improvements.',
    icon: Zap,
    features: ['Speed optimization', 'SEO improvements', 'Image compression', 'Performance monitoring'],
    pricing: '$35/month',
    category: 'Web Development',
    benefits: ['Improve page speed by 60%', 'Better SEO rankings', 'Higher conversion rates', 'Automated optimization'],
    marketPrice: '$25-100/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Smart Lead Scoring System',
    description: 'AI-powered lead qualification and scoring to prioritize sales efforts effectively.',
    icon: Target,
    features: ['Lead scoring algorithms', 'Behavioral analysis', 'Conversion prediction', 'Sales insights'],
    pricing: '$55/month',
    category: 'Sales',
    benefits: ['Increase conversion by 35%', 'Focus on high-value leads', 'Reduce sales cycle', 'Better ROI'],
    marketPrice: '$30-150/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'AI-Powered A/B Testing Platform',
    description: 'Intelligent testing platform with automated experiment design and statistical analysis.',
    icon: TrendingUp,
    features: ['Automated test design', 'Statistical significance', 'Multi-variate testing', 'Results interpretation'],
    pricing: '$45/month',
    category: 'Marketing',
    benefits: ['Increase conversion by 25%', 'Faster test results', 'Data-driven decisions', 'Automated optimization'],
    marketPrice: '$30-120/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Smart Document Processor',
    description: 'AI-powered document processing with OCR, data extraction, and intelligent categorization.',
    icon: FileText,
    features: ['OCR technology', 'Data extraction', 'Document classification', 'Batch processing'],
    pricing: '$42/month',
    category: 'Productivity',
    benefits: ['Process 1000+ docs per hour', 'Reduce manual work by 90%', 'Accurate data extraction', 'Automated workflows'],
    marketPrice: '$25-100/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'AI Customer Feedback Analyzer',
    description: 'Intelligent analysis of customer feedback with sentiment analysis and actionable insights.',
    icon: MessageSquare,
    features: ['Sentiment analysis', 'Topic extraction', 'Trend identification', 'Action recommendations'],
    pricing: '$38/month',
    category: 'Customer Service',
    benefits: ['Understand customer needs', 'Improve satisfaction by 30%', 'Identify product issues', 'Data-driven improvements'],
    marketPrice: '$20-80/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Smart Email Signature Manager',
    description: 'Dynamic email signatures with personalization, tracking, and compliance features.',
    icon: Mail,
    features: ['Dynamic personalization', 'Click tracking', 'Compliance management', 'Brand consistency'],
    pricing: '$15/month',
    category: 'Email Marketing',
    benefits: ['Increase email engagement', 'Professional appearance', 'Track signature performance', 'Compliance ready'],
    marketPrice: '$8-30/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'AI-Powered Logo Generator',
    description: 'Intelligent logo creation with brand analysis and multiple design variations.',
    icon: Image,
    features: ['AI design generation', 'Brand analysis', 'Multiple variations', 'High-resolution exports'],
    pricing: '$25/month',
    category: 'Design',
    benefits: ['Professional logos in minutes', 'Brand-consistent designs', 'Multiple options', 'Cost-effective solution'],
    marketPrice: '$15-60/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Smart Password Generator & Manager',
    description: 'Advanced password management with breach monitoring and secure sharing capabilities.',
    icon: Lock,
    features: ['Advanced password generation', 'Breach monitoring', 'Secure sharing', 'Multi-device sync'],
    pricing: '$18/month',
    category: 'Security',
    benefits: ['Enhanced security', 'Easy password management', 'Breach alerts', 'Team collaboration'],
    marketPrice: '$10-40/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'AI-Powered Form Builder',
    description: 'Intelligent form creation with conditional logic, validation, and response analysis.',
    icon: ClipboardList,
    features: ['Drag-and-drop builder', 'Conditional logic', 'Smart validation', 'Response analytics'],
    pricing: '$32/month',
    category: 'Web Development',
    benefits: ['Create forms without coding', 'Reduce form abandonment', 'Better data quality', 'Advanced analytics'],
    marketPrice: '$20-80/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Smart Calendar & Scheduling',
    description: 'AI-powered scheduling with meeting optimization and conflict resolution.',
    icon: Calendar,
    features: ['Smart scheduling', 'Conflict resolution', 'Meeting optimization', 'Time zone handling'],
    pricing: '$28/month',
    category: 'Productivity',
    benefits: ['Reduce scheduling conflicts', 'Optimize meeting times', 'Save 2 hours per week', 'Better time management'],
    marketPrice: '$15-50/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'AI-Powered Video Editor',
    description: 'Automated video editing with AI suggestions, templates, and intelligent trimming.',
    icon: Video,
    features: ['AI editing suggestions', 'Auto-trimming', 'Template library', 'Export optimization'],
    pricing: '$49/month',
    category: 'Video Production',
    benefits: ['Create videos 5x faster', 'Professional results', 'No editing skills needed', 'Consistent quality'],
    marketPrice: '$30-120/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Smart Backup & Sync Solution',
    description: 'Intelligent file backup with version control, deduplication, and cross-platform sync.',
    icon: HardDrive,
    features: ['Intelligent backup', 'Version control', 'Deduplication', 'Cross-platform sync'],
    pricing: '$22/month',
    category: 'Storage',
    benefits: ['Never lose files', 'Save storage space', 'Access anywhere', 'Automatic backups'],
    marketPrice: '$10-50/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'AI-Powered Survey Builder',
    description: 'Intelligent survey creation with question suggestions and response analysis.',
    icon: BarChart3,
    features: ['Question suggestions', 'Response analysis', 'Sentiment tracking', 'Report generation'],
    pricing: '$35/month',
    category: 'Analytics',
    benefits: ['Create better surveys', 'Get actionable insights', 'Improve response rates', 'Data visualization'],
    marketPrice: '$20-100/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Smart Task Automation Platform',
    description: 'AI-powered workflow automation with intelligent task routing and optimization.',
    icon: RefreshCw,
    features: ['Workflow automation', 'Task routing', 'Performance optimization', 'Integration capabilities'],
    pricing: '$55/month',
    category: 'Automation',
    benefits: ['Reduce manual work by 70%', 'Improve efficiency', 'Error reduction', 'Scalable automation'],
    marketPrice: '$30-150/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'AI-Powered Knowledge Base',
    description: 'Intelligent knowledge management with search, categorization, and content suggestions.',
    icon: BookOpen,
    features: ['Smart search', 'Auto-categorization', 'Content suggestions', 'Usage analytics'],
    pricing: '$42/month',
    category: 'Knowledge Management',
    benefits: ['Find information instantly', 'Reduce support tickets', 'Better knowledge sharing', 'Improved productivity'],
    marketPrice: '$25-100/month',
    link: '/contact',
    popular: false
  },
  {
    id: 'ai-project-management',
    title: 'AI Project Management Suite',
    description: 'Intelligent project planning with AI-powered resource allocation, timeline optimization, and risk management',
    icon: Calendar,
    features: ['Smart Planning', 'Resource Optimization', 'Risk Management', 'Progress Tracking'],
    pricing: 'Starting at $89/month',
    category: 'Project Management',
    benefits: ['30% faster delivery', 'Better resource utilization', 'Proactive risk management'],
    marketPrice: '$200-500/month',
    link: 'https://project-management.ziontechgroup.com'
  },
  {
    id: 'ai-sales-optimization',
    title: 'AI Sales Optimization Platform',
    description: 'Boost sales performance with AI-powered lead scoring, sales forecasting, and conversion optimization',
    icon: Target,
    features: ['Lead Scoring', 'Sales Forecasting', 'Conversion Optimization', 'Performance Analytics'],
    pricing: 'Starting at $109/month',
    category: 'Sales & CRM',
    benefits: ['25% higher conversion', 'Better lead quality', 'Accurate forecasting'],
    marketPrice: '$300-800/month',
    link: 'https://sales-optimization.ziontechgroup.com'
  },
  {
    id: 'ai-social-media',
    title: 'AI Social Media Manager',
    description: 'Automate social media management with AI-powered content creation, scheduling, and engagement',
    icon: MessageSquare,
    features: ['Content Creation', 'Auto-Scheduling', 'Engagement Automation', 'Analytics & Insights'],
    pricing: 'Starting at $69/month',
    category: 'Social Media',
    benefits: ['Consistent posting', 'Higher engagement', 'Time savings'],
    marketPrice: '$150-400/month',
    link: 'https://social-media.ziontechgroup.com'
  },
  {
    id: 'ai-website-optimization',
    title: 'AI Website Optimization',
    description: 'Automatically optimize website performance, SEO, and user experience with AI-powered insights',
    icon: Monitor,
    features: ['Performance Optimization', 'SEO Enhancement', 'UX Analysis', 'Conversion Tracking'],
    pricing: 'Starting at $79/month',
    category: 'Web Development',
    benefits: ['Faster load times', 'Better SEO rankings', 'Higher conversions'],
    marketPrice: '$200-600/month',
    link: 'https://website-optimization.ziontechgroup.com'
  },
  {
    id: 'ai-workflow-automation',
    title: 'AI Workflow Automation',
    description: 'Automate complex business workflows with AI-powered process optimization and intelligent routing',
    icon: Zap,
    features: ['Process Automation', 'Smart Routing', 'Exception Handling', 'Performance Analytics'],
    pricing: 'Starting at $99/month',
    category: 'Workflow Automation',
    benefits: ['80% process automation', 'Error reduction', 'Faster processing'],
    marketPrice: '$300-700/month',
    link: 'https://workflow-automation.ziontechgroup.com'
  }
];

const categories = [
  'All',
  'Business Intelligence',
  'Business Strategy',
  'Content & Marketing',
  'Customer Success',
  'Analytics & BI',
  'DevOps & Infrastructure',
  'Email Marketing',
  'Financial Management',
  'Human Resources',
  'Inventory & Supply Chain',
  'Project Management',
  'Sales & CRM',
  'Social Media',
  'Web Development',
  'Workflow Automation'
];

export default function MicroSaaS() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredProducts = microSaaSProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <Head>
        <title>Micro SaaS Solutions | ZionTech Group</title>
        <meta name="description" content="Discover innovative micro SaaS solutions powered by AI and cutting-edge technology. Transform your business with our comprehensive suite of software-as-a-service platforms." />
        <meta name="keywords" content="micro saas, software as a service, AI solutions, business automation, cloud software" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our comprehensive suite of AI-powered micro SaaS platforms. 
                Each solution is designed to solve specific business challenges with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search micro SaaS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-300/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-300/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <product.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-gray-300 mb-6 text-sm">
                    {product.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-55cb
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
<<<<<<< HEAD
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
=======

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-white">Benefits:</h4>
                    <ul className="space-y-1">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <ArrowRight className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-white">{product.pricing}</div>
                        <div className="text-sm text-gray-400">Market: {product.marketPrice}</div>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-sm">4.9/5</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                      >
                        Try Now
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 border border-gray-300 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-center"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Choose from our comprehensive suite of micro SaaS solutions or let us build a custom solution for your specific needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/it-services"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Explore IT Services
                </Link>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-55cb
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
<<<<<<< HEAD
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
=======
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-55cb
  );
}