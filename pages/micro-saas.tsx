import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Cloud, Zap, Shield, Users, BarChart3, CheckCircle, ArrowRight, Clock, Star, 
  DollarSign, Award, Globe, Lock, Cpu, Bot, FileText, Video, Mic, Code, Settings, 
  Monitor, Smartphone, Server, Network, Car, Rocket, Heart, Building, Sprout, 
  Mail, MessageSquare, Search, Eye, Target, Brain, TrendingUp, Package, Calendar, 
  BookOpen, ShoppingCart, Home, Trash2, Camera, HardDrive, Database, Droplets, 
  Phone, MapPin, Gamepad2, Music, Palette, Wrench, Lightbulb, PieChart, 
  Activity, TrendingDown, RefreshCw, Layers, Compass, Zap as Lightning, 
  Wifi, Bluetooth, Headphones, Printer, Keyboard, Mouse, 
  CreditCard, Wallet, Receipt, Calculator, Clock3, Timer,
  AlertTriangle, Info, HelpCircle, ThumbsUp, ThumbsDown, MessageCircle,
  Share2, Download, Upload, Copy, Edit, Trash, Save, Plus, Minus,
  X, Check, ChevronDown, ChevronUp, ChevronLeft, ChevronRight,
  Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Maximize,
  Minimize, RotateCcw, RotateCw, ZoomIn, ZoomOut, Move, Grip,
  Filter, SortAsc, SortDesc, Grid, List, Layout, Sidebar, Menu,
  Bell, BellOff, Star as StarIcon, Bookmark, Flag, Tag, Hash,
  AtSign, Percent, Hash as HashIcon, DollarSign as Dollar,
  Euro, PoundSterling, Bitcoin, 
  Database as DB, Server as ServerIcon, HardDrive as HD,
  Cpu as CPU, MemoryStick, HardDrive as Storage, Wifi as WiFi,
  Bluetooth as BT, Headphones as Headset, Printer as Print,
  Keyboard as KB, Mouse as MouseIcon
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const microSaasProducts = [
  // AI & Machine Learning Services
  {
    title: 'AI Content Marketing Suite',
    description: 'Automated content creation, SEO optimization, and social media management platform with advanced AI algorithms.',
    icon: FileText,
    features: ['AI Content Generation', 'SEO Optimization', 'Social Media Scheduling', 'Analytics Dashboard', 'Multi-language Support'],
    pricing: '$29 - $199/month',
    category: 'AI & Marketing',
    popular: true,
    benefits: ['10x Content Output', 'SEO Boost', 'Time Savings', 'Better Engagement'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-content-marketing-suite'
  },
  {
    title: 'Smart Lead Management System',
    description: 'AI-powered lead scoring, nurturing, and conversion optimization platform with predictive analytics.',
    icon: Target,
    features: ['Lead Scoring', 'Automated Nurturing', 'CRM Integration', 'Conversion Tracking', 'Predictive Analytics'],
    pricing: '$49 - $299/month',
    category: 'AI & Sales',
    popular: true,
    benefits: ['Higher Conversion', 'Automated Workflows', 'Better ROI', 'Data Insights'],
    marketPrice: '$75 - $500/month',
    link: 'https://ziontechgroup.com/smart-lead-management'
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time business intelligence with predictive analytics, custom reporting, and automated insights.',
    icon: BarChart3,
    features: ['Real-time Analytics', 'Predictive Insights', 'Custom Reports', 'Data Visualization', 'Automated Alerts'],
    pricing: '$39 - $249/month',
    category: 'AI & Analytics',
    popular: true,
    benefits: ['Data-Driven Decisions', 'Predictive Insights', 'Custom Dashboards', 'ROI Tracking'],
    marketPrice: '$60 - $400/month',
    link: 'https://ziontechgroup.com/ai-analytics-dashboard'
  },
  {
    title: 'AI Customer Support Bot',
    description: 'Intelligent chatbot with natural language processing, multi-channel support, and seamless human handoff.',
    icon: MessageSquare,
    features: ['NLP Processing', 'Multi-channel Support', 'Knowledge Base', 'Human Handoff', 'Sentiment Analysis'],
    pricing: '$25 - $199/month',
    category: 'AI & Customer Service',
    benefits: ['24/7 Support', 'Instant Responses', 'Cost Reduction', 'Customer Satisfaction'],
    marketPrice: '$40 - $300/month',
    link: 'https://ziontechgroup.com/ai-support-bot'
  },
  {
    title: 'AI Email Marketing Platform',
    description: 'Intelligent email campaigns with personalization, A/B testing, automation, and advanced analytics.',
    icon: Mail,
    features: ['AI Personalization', 'A/B Testing', 'Automation', 'Advanced Analytics', 'Deliverability Optimization'],
    pricing: '$29 - $199/month',
    category: 'AI & Email Marketing',
    benefits: ['Higher Open Rates', 'Better Engagement', 'Automated Campaigns', 'ROI Tracking'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-email-marketing'
  },
  {
    title: 'AI-Powered Voice Analytics',
    description: 'Advanced voice analysis for customer service, sales optimization, and training insights.',
    icon: Mic,
    features: ['Sentiment Analysis', 'Call Quality Scoring', 'Training Insights', 'Performance Metrics', 'Real-time Monitoring'],
    pricing: '$199 - $999/month',
    category: 'AI & Voice Analytics',
    benefits: ['Better Customer Service', 'Sales Optimization', 'Training Insights', 'Quality Improvement'],
    marketPrice: '$300 - $1,500/month',
    link: 'https://ziontechgroup.com/voice-analytics'
  },

  // Business Automation & Workflow
  {
    title: 'Automated Workflow Builder',
    description: 'No-code automation platform for business processes, integrations, and complex workflows.',
    icon: Zap,
    features: ['Drag & Drop Builder', '500+ Integrations', 'Conditional Logic', 'API Access', 'Custom Triggers'],
    pricing: '$19 - $149/month',
    category: 'Automation',
    popular: true,
    benefits: ['Process Automation', 'Time Savings', 'Error Reduction', 'Scalability'],
    marketPrice: '$30 - $250/month',
    link: 'https://ziontechgroup.com/workflow-builder'
  },
  {
    title: 'Smart Project Management',
    description: 'AI-enhanced project management with resource optimization, risk prediction, and team collaboration.',
    icon: Calendar,
    features: ['AI Resource Planning', 'Risk Prediction', 'Time Tracking', 'Collaboration Tools', 'Gantt Charts'],
    pricing: '$39 - $299/month',
    category: 'Project Management',
    benefits: ['Better Planning', 'Risk Mitigation', 'Team Collaboration', 'Resource Optimization'],
    marketPrice: '$60 - $400/month',
    link: 'https://ziontechgroup.com/smart-project-management'
  },
  {
    title: 'Smart Inventory Management',
    description: 'AI-powered inventory optimization with demand forecasting, automated reordering, and multi-location support.',
    icon: Package,
    features: ['Demand Forecasting', 'Automated Reordering', 'Multi-location Support', 'Analytics', 'Supplier Integration'],
    pricing: '$59 - $399/month',
    category: 'Inventory Management',
    benefits: ['Reduced Stockouts', 'Lower Costs', 'Better Planning', 'Automated Management'],
    marketPrice: '$80 - $600/month',
    link: 'https://ziontechgroup.com/smart-inventory'
  },
  {
    title: 'AI-Powered Online Booking System',
    description: 'Intelligent appointment scheduling with AI optimization, automated reminders, and client management.',
    icon: Calendar,
    features: ['Smart Scheduling', 'Calendar Integration', 'Automated Reminders', 'Client Management', 'Payment Processing'],
    pricing: '$29 - $149/month',
    category: 'Scheduling & Booking',
    benefits: ['Reduced No-shows', 'Better Scheduling', 'Automated Reminders', 'Client Satisfaction'],
    marketPrice: '$40 - $200/month',
    link: 'https://ziontechgroup.com/online-booking'
  },

  // E-commerce & Sales
  {
    title: 'AI-Powered Social Proof Widgets',
    description: 'Real-time social proof widgets with AI optimization for increased conversions and customer trust.',
    icon: Globe,
    features: ['Real-time Activity', 'Customizable Display', 'E-commerce Integration', 'Conversion Analytics', 'A/B Testing'],
    pricing: '$19 - $99/month',
    category: 'E-commerce & Marketing',
    benefits: ['Higher Conversions', 'Increased Trust', 'Real-time Updates', 'Better Engagement'],
    marketPrice: '$30 - $150/month',
    link: 'https://ziontechgroup.com/social-proof-widgets'
  },
  {
    title: 'AI-Powered Customer Loyalty Tracker',
    description: 'Intelligent loyalty program management with AI-driven engagement strategies and fraud detection.',
    icon: Heart,
    features: ['Points System', 'Engagement Tracking', 'Reward Management', 'AI Personalization', 'Fraud Detection'],
    pricing: '$39 - $199/month',
    category: 'Customer Retention',
    benefits: ['Higher Retention', 'Better Engagement', 'Automated Rewards', 'Fraud Prevention'],
    marketPrice: '$60 - $300/month',
    link: 'https://ziontechgroup.com/customer-loyalty'
  },
  {
    title: 'AI-Powered Referral Program Manager',
    description: 'Automated referral program management with AI-driven optimization, fraud detection, and analytics.',
    icon: Users,
    features: ['Referral Tracking', 'Reward Management', 'Fraud Detection', 'Performance Analytics', 'Automated Payouts'],
    pricing: '$39 - $199/month',
    category: 'Referral Marketing',
    benefits: ['Higher Referrals', 'Automated Management', 'Fraud Prevention', 'Better Analytics'],
    marketPrice: '$60 - $300/month',
    link: 'https://ziontechgroup.com/referral-program'
  },
  {
    title: 'Smart E-commerce Analytics',
    description: 'Advanced e-commerce analytics with customer behavior insights, conversion optimization, and predictive analytics.',
    icon: ShoppingCart,
    features: ['Customer Behavior Analysis', 'Conversion Funnels', 'Predictive Analytics', 'A/B Testing', 'Revenue Optimization'],
    pricing: '$49 - $299/month',
    category: 'E-commerce Analytics',
    benefits: ['Better Conversions', 'Customer Insights', 'Revenue Growth', 'Data-Driven Decisions'],
    marketPrice: '$75 - $450/month',
    link: 'https://ziontechgroup.com/ecommerce-analytics'
  },

  // SEO & Digital Marketing
  {
    title: 'AI-Powered Local SEO Optimizer',
    description: 'Comprehensive local SEO optimization with AI-powered keyword research, competitor analysis, and performance tracking.',
    icon: Search,
    features: ['Keyword Research', 'Listing Optimization', 'Competitor Analysis', 'Performance Tracking', 'Review Management'],
    pricing: '$79 - $399/month',
    category: 'SEO & Local Marketing',
    benefits: ['Better Local Rankings', 'Increased Visibility', 'Competitive Advantage', 'ROI Tracking'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/local-seo-optimizer'
  },
  {
    title: 'AI Social Media Manager',
    description: 'Intelligent social media management with content creation, scheduling, engagement tracking, and performance analytics.',
    icon: Share2,
    features: ['Content Creation', 'Auto Scheduling', 'Engagement Tracking', 'Performance Analytics', 'Hashtag Optimization'],
    pricing: '$29 - $199/month',
    category: 'Social Media Marketing',
    benefits: ['Better Engagement', 'Time Savings', 'Content Optimization', 'Growth Tracking'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/social-media-manager'
  },
  {
    title: 'AI-Powered PPC Optimizer',
    description: 'Automated PPC campaign optimization with AI bidding, keyword research, and performance tracking across platforms.',
    icon: Target,
    features: ['AI Bidding', 'Keyword Research', 'Ad Optimization', 'Performance Tracking', 'Budget Management'],
    pricing: '$99 - $599/month',
    category: 'PPC & Advertising',
    benefits: ['Lower Costs', 'Higher ROI', 'Automated Optimization', 'Better Performance'],
    marketPrice: '$150 - $900/month',
    link: 'https://ziontechgroup.com/ppc-optimizer'
  },

  // Education & Training
  {
    title: 'AI-Powered Personalized E-Learning',
    description: 'Adaptive learning platform with AI-powered personalization, skill assessment, and progress tracking.',
    icon: BookOpen,
    features: ['Adaptive Learning', 'Skill Assessment', 'Progress Tracking', 'AI Tutoring', 'Certification Management'],
    pricing: '$49 - $299/month',
    category: 'Education & Training',
    benefits: ['Personalized Learning', 'Better Outcomes', 'Progress Tracking', 'Skill Development'],
    marketPrice: '$75 - $450/month',
    link: 'https://ziontechgroup.com/personalized-elearning'
  },
  {
    title: 'AI Corporate Training Platform',
    description: 'Comprehensive corporate training solution with AI-powered content creation, assessment, and progress tracking.',
    icon: Users,
    features: ['Content Creation', 'Skill Assessment', 'Progress Tracking', 'Team Management', 'Certification'],
    pricing: '$199 - $999/month',
    category: 'Corporate Training',
    benefits: ['Scalable Training', 'Better Engagement', 'Progress Tracking', 'Cost Effective'],
    marketPrice: '$300 - $1,500/month',
    link: 'https://ziontechgroup.com/corporate-training'
  },

  // Blockchain & Crypto
  {
    title: 'AI-Powered Smart Contract Auditor',
    description: 'Automated smart contract security analysis and vulnerability detection using advanced AI algorithms.',
    icon: Shield,
    features: ['Security Analysis', 'Vulnerability Detection', 'Gas Optimization', 'Compliance Checking', 'Audit Reports'],
    pricing: '$299 - $1,499/month',
    category: 'Blockchain Security',
    benefits: ['Enhanced Security', 'Cost Savings', 'Risk Mitigation', 'Compliance Assurance'],
    marketPrice: '$500 - $2,500/month',
    link: 'https://ziontechgroup.com/smart-contract-auditor'
  },
  {
    title: 'AI-Powered Cryptocurrency Tax Calculator',
    description: 'Automated cryptocurrency tax calculation and reporting with AI-powered optimization and compliance checking.',
    icon: Bitcoin,
    features: ['Tax Calculation', 'Transaction Tracking', 'Report Generation', 'Compliance Checking', 'Multi-exchange Support'],
    pricing: '$49 - $299/month',
    category: 'Crypto Finance',
    benefits: ['Accurate Calculations', 'Time Savings', 'Compliance Assurance', 'Multi-platform Support'],
    marketPrice: '$75 - $450/month',
    link: 'https://ziontechgroup.com/crypto-tax-calculator'
  },
  {
    title: 'Smart Contract Deployment Manager',
    description: 'Automated smart contract deployment and management across multiple blockchains with version control.',
    icon: Rocket,
    features: ['Multi-chain Deployment', 'Version Control', 'Automated Testing', 'Monitoring', 'Gas Optimization'],
    pricing: '$99 - $499/month',
    category: 'Blockchain Development',
    benefits: ['Simplified Deployment', 'Version Control', 'Cost Optimization', 'Multi-chain Support'],
    marketPrice: '$150 - $750/month',
    link: 'https://ziontechgroup.com/smart-contract-manager'
  },

  // Health & Wellness
  {
    title: 'AI-Powered Mental Health Assistant',
    description: 'AI-powered mental health support and wellness tracking for employees and individuals with privacy protection.',
    icon: Heart,
    features: ['Mood Tracking', 'Wellness Insights', 'Resource Recommendations', 'Privacy Protection', 'Crisis Support'],
    pricing: '$19 - $99/month',
    category: 'Health & Wellness',
    benefits: ['Better Mental Health', 'Privacy Protection', '24/7 Support', 'Wellness Insights'],
    marketPrice: '$30 - $150/month',
    link: 'https://ziontechgroup.com/mental-health-assistant'
  },
  {
    title: 'AI Fitness Coach Platform',
    description: 'Personalized fitness coaching with AI-powered workout plans, nutrition tracking, and progress monitoring.',
    icon: Activity,
    features: ['Personalized Workouts', 'Nutrition Tracking', 'Progress Monitoring', 'Goal Setting', 'Community Features'],
    pricing: '$29 - $149/month',
    category: 'Fitness & Health',
    benefits: ['Personalized Training', 'Better Results', 'Progress Tracking', 'Motivation'],
    marketPrice: '$45 - $225/month',
    link: 'https://ziontechgroup.com/ai-fitness-coach'
  },

  // Sustainability & Environment
  {
    title: 'AI-Powered Carbon Footprint Tracker',
    description: 'Environmental impact tracking and sustainability optimization for businesses with detailed reporting.',
    icon: Sprout,
    features: ['Carbon Tracking', 'Sustainability Metrics', 'Optimization Recommendations', 'Reporting', 'Certification Support'],
    pricing: '$99 - $499/month',
    category: 'Sustainability',
    benefits: ['Environmental Impact', 'Cost Savings', 'Compliance', 'Brand Reputation'],
    marketPrice: '$150 - $750/month',
    link: 'https://ziontechgroup.com/carbon-footprint-tracker'
  },
  {
    title: 'Smart Energy Management System',
    description: 'AI-powered energy optimization for buildings and facilities with real-time monitoring and cost reduction.',
    icon: Zap,
    features: ['Energy Monitoring', 'Cost Optimization', 'Predictive Maintenance', 'Real-time Alerts', 'Reporting'],
    pricing: '$199 - $999/month',
    category: 'Energy Management',
    benefits: ['Cost Reduction', 'Energy Efficiency', 'Predictive Maintenance', 'Sustainability'],
    marketPrice: '$300 - $1,500/month',
    link: 'https://ziontechgroup.com/energy-management'
  },

  // Remote Work & Productivity
  {
    title: 'AI-Powered Remote Work Analytics',
    description: 'Productivity and engagement analytics for remote teams with AI insights and wellness monitoring.',
    icon: Monitor,
    features: ['Productivity Metrics', 'Engagement Tracking', 'Wellness Monitoring', 'Team Insights', 'Performance Analytics'],
    pricing: '$79 - $399/month',
    category: 'Remote Work',
    benefits: ['Better Productivity', 'Team Insights', 'Wellness Monitoring', 'Performance Tracking'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/remote-work-analytics'
  },
  {
    title: 'AI Meeting Assistant',
    description: 'Intelligent meeting management with transcription, action items, and follow-up automation.',
    icon: Video,
    features: ['Live Transcription', 'Action Items', 'Meeting Summaries', 'Follow-up Automation', 'Integration'],
    pricing: '$39 - $199/month',
    category: 'Meeting Management',
    benefits: ['Better Meetings', 'Time Savings', 'Action Tracking', 'Improved Productivity'],
    marketPrice: '$60 - $300/month',
    link: 'https://ziontechgroup.com/meeting-assistant'
  },

  // Development & DevOps
  {
    title: 'AI-Powered Code Documentation Generator',
    description: 'Automatically generate comprehensive documentation from code with AI analysis and interactive examples.',
    icon: FileText,
    features: ['Auto Documentation', 'API Documentation', 'Code Comments', 'Interactive Examples', 'Version Control'],
    pricing: '$79 - $399/month',
    category: 'Development Tools',
    popular: true,
    benefits: ['Time Savings', 'Better Documentation', 'Code Quality', 'Team Collaboration'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/code-documentation'
  },
  {
    title: 'AI-Powered Error Monitoring',
    description: 'Intelligent error tracking and debugging assistance for applications with automated fixes.',
    icon: AlertTriangle,
    features: ['Error Tracking', 'AI Debugging', 'Performance Monitoring', 'Alert Management', 'Automated Fixes'],
    pricing: '$39 - $199/month',
    category: 'Monitoring & Debugging',
    benefits: ['Faster Debugging', 'Better Reliability', 'Automated Fixes', 'Performance Insights'],
    marketPrice: '$60 - $300/month',
    link: 'https://ziontechgroup.com/error-monitoring'
  },
  {
    title: 'AI-Powered Code Refactoring Assistant',
    description: 'Intelligent code refactoring suggestions and automated improvements with best practices enforcement.',
    icon: Code,
    features: ['Refactoring Suggestions', 'Code Quality Analysis', 'Automated Fixes', 'Best Practices', 'Security Checks'],
    pricing: '$99 - $499/month',
    category: 'Development Tools',
    benefits: ['Better Code Quality', 'Time Savings', 'Automated Improvements', 'Best Practices'],
    marketPrice: '$150 - $750/month',
    link: 'https://ziontechgroup.com/code-refactoring'
  },

  // Database & Infrastructure
  {
    title: 'AI-Powered Database Query Optimizer',
    description: 'Intelligent database query optimization and performance monitoring with automated recommendations.',
    icon: Database,
    features: ['Query Analysis', 'Performance Monitoring', 'Index Recommendations', 'Cost Optimization', 'Automated Tuning'],
    pricing: '$149 - $799/month',
    category: 'Database Management',
    benefits: ['Better Performance', 'Cost Optimization', 'Automated Tuning', 'Monitoring'],
    marketPrice: '$225 - $1,200/month',
    link: 'https://ziontechgroup.com/database-optimizer'
  },
  {
    title: 'Smart Cloud Cost Optimizer',
    description: 'AI-powered cloud cost optimization with anomaly detection, rightsizing, and budget forecasting.',
    icon: Cloud,
    features: ['Cost Anomaly Detection', 'Auto Rightsizing', 'Budget Forecasting', 'Multi-cloud Support', 'Savings Reports'],
    pricing: '$299 - $1,499/month',
    category: 'Cloud Management',
    popular: true,
    benefits: ['Cost Reduction', 'Better Planning', 'Anomaly Detection', 'Multi-cloud Support'],
    marketPrice: '$450 - $2,250/month',
    link: 'https://ziontechgroup.com/cloud-cost-optimizer'
  },

  // Security & Compliance
  {
    title: 'AI-Powered Security Monitoring',
    description: 'Advanced security monitoring with threat detection, incident response, and compliance reporting.',
    icon: Shield,
    features: ['Threat Detection', 'Incident Response', 'Compliance Reporting', 'Vulnerability Scanning', 'Real-time Alerts'],
    pricing: '$199 - $999/month',
    category: 'Security & Compliance',
    benefits: ['Enhanced Security', 'Faster Response', 'Compliance Assurance', 'Threat Prevention'],
    marketPrice: '$300 - $1,500/month',
    link: 'https://ziontechgroup.com/security-monitoring'
  },
  {
    title: 'AI Compliance Manager',
    description: 'Automated compliance management with AI-powered monitoring, reporting, and audit preparation.',
    icon: CheckCircle,
    features: ['Compliance Monitoring', 'Automated Reporting', 'Audit Preparation', 'Risk Assessment', 'Policy Management'],
    pricing: '$299 - $1,499/month',
    category: 'Compliance Management',
    benefits: ['Automated Compliance', 'Risk Reduction', 'Audit Readiness', 'Cost Savings'],
    marketPrice: '$450 - $2,250/month',
    link: 'https://ziontechgroup.com/compliance-manager'
  },

  // Subscription & Revenue Management
  {
    title: 'AI-Powered Subscription Management',
    description: 'Intelligent subscription lifecycle management with churn prediction, pricing optimization, and customer insights.',
    icon: Settings,
    features: ['Churn Prediction', 'Lifecycle Management', 'Pricing Optimization', 'Customer Insights', 'Automated Billing'],
    pricing: '$99 - $599/month',
    category: 'Subscription Management',
    benefits: ['Reduced Churn', 'Revenue Optimization', 'Better Insights', 'Automated Management'],
    marketPrice: '$150 - $900/month',
    link: 'https://ziontechgroup.com/subscription-management'
  },
  {
    title: 'AI Revenue Optimization Platform',
    description: 'Advanced revenue optimization with pricing intelligence, demand forecasting, and customer lifetime value prediction.',
    icon: TrendingUp,
    features: ['Pricing Intelligence', 'Demand Forecasting', 'CLV Prediction', 'Revenue Analytics', 'Optimization Recommendations'],
    pricing: '$199 - $999/month',
    category: 'Revenue Management',
    benefits: ['Revenue Growth', 'Better Pricing', 'Customer Insights', 'Predictive Analytics'],
    marketPrice: '$300 - $1,500/month',
    link: 'https://ziontechgroup.com/revenue-optimization'
  },

  // Collaboration & Communication
  {
    title: 'Real-time Collaboration Whiteboard',
    description: 'AI-enhanced collaborative whiteboard with smart drawing, idea organization, and real-time collaboration.',
    icon: Target,
    features: ['Real-time Collaboration', 'AI Drawing Assistant', 'Idea Organization', 'Export Options', 'Version Control'],
    pricing: '$29 - $149/month',
    category: 'Collaboration',
    benefits: ['Better Collaboration', 'Idea Organization', 'Real-time Updates', 'Creative Tools'],
    marketPrice: '$45 - $225/month',
    link: 'https://ziontechgroup.com/collaboration-whiteboard'
  },
  {
    title: 'AI-Powered Team Communication Hub',
    description: 'Intelligent team communication platform with AI-powered insights, sentiment analysis, and productivity tracking.',
    icon: MessageCircle,
    features: ['Team Messaging', 'Sentiment Analysis', 'Productivity Insights', 'Integration', 'Analytics'],
    pricing: '$19 - $99/month',
    category: 'Team Communication',
    benefits: ['Better Communication', 'Team Insights', 'Productivity Tracking', 'Sentiment Analysis'],
    marketPrice: '$30 - $150/month',
    link: 'https://ziontechgroup.com/team-communication'
  }
];

const categories = [
  'All',
  'AI & Marketing',
  'AI & Sales',
  'AI & Analytics',
  'AI & Customer Service',
  'AI & Email Marketing',
  'AI & Voice Analytics',
  'Automation',
  'Project Management',
  'Inventory Management',
  'Scheduling & Booking',
  'E-commerce & Marketing',
  'Customer Retention',
  'Referral Marketing',
  'E-commerce Analytics',
  'SEO & Local Marketing',
  'Social Media Marketing',
  'PPC & Advertising',
  'Education & Training',
  'Corporate Training',
  'Blockchain Security',
  'Crypto Finance',
  'Blockchain Development',
  'Health & Wellness',
  'Fitness & Health',
  'Sustainability',
  'Energy Management',
  'Remote Work',
  'Meeting Management',
  'Development Tools',
  'Monitoring & Debugging',
  'Database Management',
  'Cloud Management',
  'Security & Compliance',
  'Compliance Management',
  'Subscription Management',
  'Revenue Management',
  'Collaboration',
  'Team Communication'
];

export default function MicroSaasPage() {
  return (
    <>
      <Head>
        <title>Micro SaaS Solutions - Zion Tech Group | 85+ Innovative Services</title>
        <meta name="description" content="Discover 85+ cutting-edge micro SaaS solutions from Zion Tech Group. AI-powered tools, automation platforms, and innovative services for modern businesses. Real pricing, proven results." />
        <meta name="keywords" content="micro SaaS, SaaS solutions, AI tools, business automation, software as a service, digital transformation" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="85+ innovative micro SaaS solutions for modern businesses. AI-powered tools, automation, and digital transformation services." />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Micro SaaS Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              85+ innovative micro SaaS solutions designed to accelerate your business growth, 
              automate processes, and drive digital transformation across all industries.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Started Today
              </Link>
              <Link href="/pricing" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                View Pricing
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-blue-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">85+</div>
                <div className="text-gray-300">Micro SaaS Solutions</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">Happy Clients</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive suite of micro SaaS solutions designed to solve real business challenges 
                with cutting-edge technology and proven results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-center mb-4">
                    <product.icon className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{product.title}</h3>
                    {product.popular && (
                      <span className="ml-auto bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">{product.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{product.pricing}</div>
                    <div className="text-sm text-gray-400">Market Price: {product.marketPrice}</div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-blue-900/50 text-blue-300 text-xs px-2 py-1 rounded-full mb-2">
                      {product.category}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.benefits?.slice(0, 2).map((benefit, idx) => (
                        <span key={idx} className="text-xs bg-green-900/50 text-green-300 px-2 py-1 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link 
                      href={product.link}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                    >
                      Learn More
                    </Link>
                    <Link 
                      href="/contact"
                      className="flex-1 bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                    >
                      Contact
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get in touch with our experts to discuss your specific needs and find the perfect 
              micro SaaS solution for your business.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">{contactInfo.phone}</p>
              </div>
              <div className="text-center">
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">{contactInfo.address}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg inline-flex items-center"
              >
                Contact Us Today <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/pricing"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}