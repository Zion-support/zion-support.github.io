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
  // NEW INNOVATIVE SERVICES
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

    features: [
      'Up to 10,000 users',

      'Advanced analytics',
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
    price: 'Custom',
    period: '',

    features: [
      'Unlimited users',

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
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20 overflow-hidden">

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

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Micro SaaS?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Built with modern technology and designed for real-world business needs.
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
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
          >

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transform your business operations with our intelligent micro SaaS solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (

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
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center ${
                    tier.popular

                      ? 'bg-purple-600 hover:bg-purple-700 text-white'

                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">

        <div className="container mx-auto px-4 text-center">
          <motion.div

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center"
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
              <Link href="/contact" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Schedule a Demo
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