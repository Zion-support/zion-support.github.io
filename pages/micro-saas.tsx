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
    title: 'AI-Powered Code Review Assistant',
    description: 'Automated code review with security scanning, performance analysis, and best practice recommendations.',
    icon: Code,
    features: ['Security Scanning', 'Performance Analysis', 'Best Practice Checks', 'Automated Comments'],
    pricing: '$199 - $999/month',
    category: 'Development',
    popular: true,
    link: 'https://codereviewai.ziontechgroup.com'
  },
  {
    title: 'Smart Contract Auditor',
    description: 'Automated smart contract security analysis and vulnerability detection for blockchain projects.',
    icon: Shield,
    features: ['Vulnerability Detection', 'Gas Optimization', 'Security Scoring', 'Audit Reports'],
    pricing: '$499 - $2,999/project',
    category: 'Blockchain',
    link: 'https://contractauditor.ziontechgroup.com'
  },
  {
    title: 'Real-time Collaboration Whiteboard',
    description: 'AI-enhanced digital whiteboard with real-time collaboration and intelligent diagram generation.',
    icon: Kanban,
    features: ['Real-time Collaboration', 'AI Diagram Generation', 'Voice Notes', 'Export Options'],
    pricing: '$29 - $149/month',
    category: 'Collaboration',
    link: 'https://whiteboardpro.ziontechgroup.com'
  },
  {
    title: 'AI-Powered SEO Optimizer',
    description: 'Automated SEO analysis and optimization with content suggestions and ranking predictions.',
    icon: Search,
    features: ['Keyword Analysis', 'Content Optimization', 'Ranking Predictions', 'Competitor Analysis'],
    pricing: '$79 - $399/month',
    category: 'SEO',
    link: 'https://seooptimizer.ziontechgroup.com'
  },
  {
    title: 'Voice-to-Text Transcription Pro',
    description: 'Advanced speech-to-text with speaker identification, punctuation, and multi-language support.',
    icon: Mic,
    features: ['Speaker Identification', 'Auto Punctuation', 'Multi-language', 'Real-time Processing'],
    pricing: '$39 - $199/month',
    category: 'Transcription',
    link: 'https://voicetextpro.ziontechgroup.com'
  },
  {
    title: 'AI-Powered A/B Testing Platform',
    description: 'Intelligent A/B testing with automated statistical analysis and optimization recommendations.',
    icon: TrendingUp,
    features: ['Automated Testing', 'Statistical Analysis', 'Optimization Suggestions', 'Multi-variate Testing'],
    pricing: '$149 - $799/month',
    category: 'Testing',
    link: 'https://abtesting.ziontechgroup.com'
  },
  {
    title: 'Smart Data Backup & Recovery',
    description: 'Automated data backup with intelligent recovery options and ransomware protection.',
    icon: HardDrive,
    features: ['Automated Backups', 'Ransomware Protection', 'Point-in-time Recovery', 'Cross-platform Sync'],
    pricing: '$19 - $99/month',
    category: 'Data Protection',
    link: 'https://databackup.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Customer Support Analytics',
    description: 'Advanced analytics for customer support with sentiment analysis and performance insights.',
    icon: Headphones,
    features: ['Sentiment Analysis', 'Performance Metrics', 'Trend Detection', 'Agent Optimization'],
    pricing: '$99 - $499/month',
    category: 'Analytics',
    link: 'https://supportanalytics.ziontechgroup.com'
  },
  {
    title: 'Smart Contract Generator',
    description: 'AI-powered smart contract generation with customizable templates and security checks.',
    icon: FileText,
    features: ['Template Library', 'Custom Generation', 'Security Validation', 'Deployment Tools'],
    pricing: '$299 - $1,499/project',
    category: 'Blockchain',
    link: 'https://contractgenerator.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Video Editor',
    description: 'Automated video editing with AI-driven cuts, transitions, and content optimization.',
    icon: Video,
    features: ['Auto Editing', 'Smart Cuts', 'Content Optimization', 'Multi-format Export'],
    pricing: '$49 - $249/month',
    category: 'Video Production',
    link: 'https://videoeditor.ziontechgroup.com'
  },
  {
    title: 'Intelligent Form Builder',
    description: 'AI-powered form creation with smart validation, conditional logic, and analytics.',
    icon: FileText,
    features: ['Smart Validation', 'Conditional Logic', 'Analytics Dashboard', 'Multi-step Forms'],
    pricing: '$29 - $149/month',
    category: 'Forms',
    link: 'https://formbuilder.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Translation Service',
    description: 'Real-time translation with context awareness and industry-specific terminology.',
    icon: Globe,
    features: ['Real-time Translation', 'Context Awareness', 'Industry Terms', 'Quality Scoring'],
    pricing: '$0.01 - $0.05 per word',
    category: 'Translation',
    link: 'https://translationai.ziontechgroup.com'
  },
  {
    title: 'Smart Home Automation Hub',
    description: 'AI-powered home automation with voice control and predictive behavior learning.',
    icon: Home,
    features: ['Voice Control', 'Predictive Learning', 'Device Integration', 'Energy Optimization'],
    pricing: '$99 - $499/month',
    category: 'IoT',
    link: 'https://smarthome.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Learning Management System',
    description: 'Intelligent LMS with personalized learning paths and automated assessment generation.',
    icon: BookOpen,
    features: ['Personalized Paths', 'Auto Assessments', 'Progress Tracking', 'Content Generation'],
    pricing: '$199 - $999/month',
    category: 'Education',
    link: 'https://lmsai.ziontechgroup.com'
  },
  {
    title: 'Blockchain Analytics Dashboard',
    description: 'Comprehensive blockchain data analysis with transaction tracking and market insights.',
    icon: BarChart3,
    features: ['Transaction Tracking', 'Market Analysis', 'Risk Assessment', 'Custom Alerts'],
    pricing: '$299 - $1,999/month',
    category: 'Blockchain',
    link: 'https://blockchainanalytics.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Email Security',
    description: 'Advanced email protection with phishing detection and automated threat response.',
    icon: Shield,
    features: ['Phishing Detection', 'Threat Response', 'Email Encryption', 'Compliance Monitoring'],
    pricing: '$49 - $249/month',
    category: 'Security',
    link: 'https://emailsecurity.ziontechgroup.com'
  },
  {
    title: 'Smart Inventory Forecasting',
    description: 'AI-driven inventory prediction with demand forecasting and supply chain optimization.',
    icon: TrendingUp,
    features: ['Demand Forecasting', 'Supply Optimization', 'Seasonal Analysis', 'Risk Assessment'],
    pricing: '$199 - $999/month',
    category: 'Supply Chain',
    link: 'https://inventoryforecast.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Legal Document Analyzer',
    description: 'Automated legal document analysis with contract review and compliance checking.',
    icon: FileText,
    features: ['Contract Analysis', 'Compliance Checking', 'Risk Assessment', 'Clause Extraction'],
    pricing: '$299 - $1,499/month',
    category: 'Legal Tech',
    link: 'https://legalanalyzer.ziontechgroup.com'
  },
  {
    title: 'Smart Energy Management System',
    description: 'AI-powered energy optimization for buildings with predictive maintenance and cost analysis.',
    icon: Zap,
    features: ['Energy Optimization', 'Predictive Maintenance', 'Cost Analysis', 'Carbon Tracking'],
    pricing: '$399 - $1,999/month',
    category: 'Energy',
    link: 'https://energymanager.ziontechgroup.com'
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get Started Today
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Ready to transform your business with our innovative micro SaaS solutions? Contact our expert team for a free consultation and custom quote.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-lg hover:bg-white transition-colors shadow-sm">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-2">
                  <a href="mailto:kleber@ziontechgroup.com" className="text-purple-600 hover:text-purple-800 font-semibold">
                    kleber@ziontechgroup.com
                  </a>
                </p>
                <p className="text-sm text-gray-500">Get a custom quote within 24 hours</p>
              </div>
              
              <div className="text-center p-6 rounded-lg hover:bg-white transition-colors shadow-sm">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-2">
                  <a href="tel:+13024640950" className="text-green-600 hover:text-green-800 font-semibold">
                    +1 302 464 0950
                  </a>
                </p>
                <p className="text-sm text-gray-500">Speak with our SaaS experts directly</p>
              </div>
              
              <div className="text-center p-6 rounded-lg hover:bg-white transition-colors shadow-sm">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-2">
                  <a href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 font-semibold">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </a>
                </p>
                <p className="text-sm text-gray-500">Schedule an in-person consultation</p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-white rounded-xl shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">Expert development team with 10+ years experience</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">Custom solutions tailored to your business needs</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">24/7 support and maintenance included</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">Scalable architecture for future growth</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">Competitive pricing with transparent costs</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">Fast delivery with agile development process</span>
                  </div>
                </div>
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