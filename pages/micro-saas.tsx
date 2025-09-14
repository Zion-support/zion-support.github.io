import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Heart, 
  Building, 
  Cloud,
  Zap,
  Shield,
  Bot,
  Database,
  Sprout,
  FileText,
  Image,
  Video,
  Mail,
  MessageSquare,
  Search,
  BarChart3,
  Users,
  Globe,
  Lock,
  Star,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Package,
  Calendar,
  BookOpen,
  Code,
  Network,
  Cpu,
  Monitor,
  Server,
  Mic,
  Car,
  Settings,
  Eye,
  ShoppingCart,
  Home,
  Vote,
  Brain,
  Lightbulb,
  Target,
  Award,
  Clock,
  DollarSign,
  Trash2,
  Camera,
  HardDrive,
  Droplets
} from 'lucide-react';
import Layout from '../components/Layout';

const microSaasServices = [
  {
    title: 'AI Content Generator',
    description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
    icon: Bot,
    features: ['AI-powered content creation', 'Multiple content formats', 'Brand voice customization', 'SEO optimization'],
    pricing: '$29/month',
    category: 'Content & Marketing',
    benefits: ['Save 80% time on content creation', 'Consistent brand voice', 'SEO-optimized output'],
    marketPrice: '$50-200/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Social Media Scheduler',
    description: 'Schedule and manage all your social media posts across multiple platforms from one dashboard.',
    icon: Calendar,
    features: ['Multi-platform posting', 'Optimal timing suggestions', 'Content calendar', 'Analytics dashboard'],
    pricing: '$19/month',
    category: 'Social Media',
    benefits: ['Increase engagement by 40%', 'Save 5 hours per week', 'Better content planning'],
    marketPrice: '$15-50/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Email Marketing Automation',
    description: 'Create, send, and track email campaigns with advanced automation and personalization.',
    icon: Mail,
    features: ['Drag-and-drop editor', 'Advanced segmentation', 'A/B testing', 'Detailed analytics'],
    pricing: '$39/month',
    category: 'Email Marketing',
    benefits: ['Increase open rates by 25%', 'Automate customer journeys', 'Better ROI tracking'],
    marketPrice: '$20-100/month',
    link: '/contact',
    popular: false
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
    description: 'Comprehensive CRM solution for real estate professionals and agencies.',
    icon: Home,
    features: ['Lead Management', 'Property Listings', 'Client Communication', 'Transaction Tracking'],
    pricing: '$99 - $499/month',
    category: 'Real Estate'
  },
  {
    title: 'AI-Powered Code Review Assistant',
    description: 'Automated code review with security, performance, and best practice analysis.',
    icon: Code,
    features: ['Security Scanning', 'Performance Analysis', 'Code Quality Metrics', 'Learning Recommendations'],
    pricing: '$199 - $999/month',
    category: 'Development Tools',
    popular: true
  },
  {
    title: 'Blockchain Transaction Monitor',
    description: 'Real-time blockchain transaction monitoring and analytics across multiple networks.',
    icon: Network,
    features: ['Multi-chain Support', 'Transaction Tracking', 'Smart Contract Monitoring', 'Alert System'],
    pricing: '$299 - $1,499/month',
    category: 'Blockchain',
    popular: true
  },
  {
    title: 'IoT Device Management Platform',
    description: 'Centralized management and monitoring for IoT devices and sensors.',
    icon: Cpu,
    features: ['Device Registration', 'Remote Monitoring', 'Firmware Updates', 'Data Analytics'],
    pricing: '$149 - $799/month',
    category: 'IoT'
  },
  {
    title: 'Quantum Computing Simulator',
    description: 'Cloud-based quantum computing simulation and algorithm development platform.',
    icon: Cpu,
    features: ['Quantum Circuit Design', 'Algorithm Testing', 'Performance Simulation', 'Educational Tools'],
    pricing: '$499 - $2,999/month',
    category: 'Quantum Computing',
    popular: true
  },
  {
    title: 'AR/VR Content Creation Studio',
    description: 'No-code AR/VR content creation and deployment platform for businesses.',
    icon: Monitor,
    features: ['Visual Editor', '3D Asset Library', 'Multi-platform Deployment', 'Analytics Dashboard'],
    pricing: '$199 - $1,299/month',
    category: 'AR/VR'
  },
  {
    title: 'Edge Computing Orchestrator',
    description: 'Intelligent edge computing resource management and application deployment.',
    icon: Server,
    features: ['Edge Node Management', 'Load Balancing', 'Auto-scaling', 'Performance Monitoring'],
    pricing: '$399 - $1,999/month',
    category: 'Edge Computing'
  },
  {
    title: 'Digital Twin Platform',
    description: 'Create and manage digital twins of physical assets and processes.',
    icon: Building,
    features: ['3D Modeling', 'Real-time Sync', 'Predictive Analytics', 'Simulation Engine'],
    pricing: '$599 - $3,999/month',
    category: 'Digital Twin',
    popular: true
  },
  {
    title: 'AI Model Marketplace',
    description: 'Marketplace for buying, selling, and deploying pre-trained AI models.',
    icon: ShoppingCart,
    features: ['Model Discovery', 'API Integration', 'Performance Metrics', 'Revenue Sharing'],
    pricing: '$99 - $999/month',
    category: 'AI Marketplace'
  },
  {
    title: 'Cybersecurity Threat Intelligence',
    description: 'Real-time threat intelligence and security monitoring for organizations.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Scanning', 'Incident Response', 'Compliance Reporting'],
    pricing: '$299 - $1,999/month',
    category: 'Cybersecurity',
    popular: true
  },
  {
    title: 'Sustainable Tech Carbon Tracker',
    description: 'Track and optimize carbon footprint of digital operations and cloud usage.',
    icon: Sprout,
    features: ['Carbon Footprint Tracking', 'Optimization Recommendations', 'Sustainability Reporting', 'Green Energy Integration'],
    pricing: '$149 - $799/month',
    category: 'Sustainability'
  },
  {
    title: 'Voice Commerce Platform',
    description: 'Voice-activated e-commerce and customer service platform.',
    icon: Mic,
    features: ['Voice Shopping', 'Order Management', 'Payment Processing', 'Customer Analytics'],
    pricing: '$199 - $1,299/month',
    category: 'Voice Commerce'
  },
  {
    title: 'Neural Network Visualizer',
    description: 'Interactive visualization and debugging tools for machine learning models.',
    icon: Brain,
    features: ['Model Visualization', 'Layer Analysis', 'Training Monitoring', 'Debugging Tools'],
    pricing: '$99 - $599/month',
    category: 'ML Tools'
  },
  {
    title: 'Smart Contract Auditor',
    description: 'Automated smart contract security analysis and vulnerability detection.',
    icon: Lock,
    features: ['Security Analysis', 'Vulnerability Detection', 'Gas Optimization', 'Compliance Checks'],
    pricing: '$199 - $1,499/month',
    category: 'Blockchain Security'
  },
  {
    title: '5G Network Optimizer',
    description: 'AI-powered 5G network optimization and performance monitoring platform.',
    icon: Network,
    features: ['Network Analysis', 'Performance Optimization', 'Predictive Maintenance', 'Quality Metrics'],
    pricing: '$399 - $2,499/month',
    category: '5G Technology'
  },
  {
    title: 'Robotic Process Automation (RPA) Studio',
    description: 'Visual RPA development platform for automating business processes.',
    icon: Bot,
    features: ['Visual Designer', 'Process Recording', 'Bot Management', 'Analytics Dashboard'],
    pricing: '$149 - $999/month',
    category: 'RPA',
    popular: true
  },
  {
    title: 'Federated Learning Platform',
    description: 'Distributed machine learning platform that preserves data privacy.',
    icon: Database,
    features: ['Privacy-Preserving ML', 'Distributed Training', 'Model Aggregation', 'Compliance Tools'],
    pricing: '$299 - $1,999/month',
    category: 'Privacy-Preserving AI'
  },
  {
    title: 'Graph Database Analytics',
    description: 'Advanced graph database analytics and relationship mapping platform.',
    icon: Network,
    features: ['Graph Visualization', 'Relationship Analysis', 'Pattern Detection', 'Query Optimization'],
    pricing: '$199 - $1,299/month',
    category: 'Graph Analytics'
  },
  {
    title: 'Microservices Orchestrator',
    description: 'Intelligent microservices management and orchestration platform.',
    icon: Server,
    features: ['Service Discovery', 'Load Balancing', 'Circuit Breakers', 'Health Monitoring'],
    pricing: '$299 - $1,999/month',
    category: 'Microservices'
  },
  {
    title: 'AI Ethics Compliance Monitor',
    description: 'Automated AI ethics compliance monitoring and bias detection platform.',
    icon: Shield,
    features: ['Bias Detection', 'Fairness Metrics', 'Compliance Reporting', 'Ethics Guidelines'],
    pricing: '$199 - $1,499/month',
    category: 'AI Ethics'
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
    features: ['Kanban boards', 'Gantt charts', 'Team collaboration', 'Time tracking'],
    pricing: '$25/month',
    category: 'Productivity',
    benefits: ['Improve team efficiency by 30%', 'Better project visibility', 'Reduced missed deadlines'],
    marketPrice: '$10-50/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Customer Support Chat',
    description: 'Provide instant customer support with AI-powered chatbots and live chat integration.',
    icon: MessageSquare,
    features: ['AI chatbot', 'Live chat widget', 'Knowledge base', 'Ticket management'],
    pricing: '$35/month',
    category: 'Customer Service',
    benefits: ['24/7 customer support', 'Reduce response time by 90%', 'Improve customer satisfaction'],
    marketPrice: '$20-80/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics and reporting for your business metrics and KPIs.',
    icon: BarChart3,
    features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Automated insights'],
    pricing: '$45/month',
    category: 'Analytics',
    benefits: ['Make data-driven decisions', 'Identify growth opportunities', 'Track performance metrics'],
    marketPrice: '$30-150/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Invoice Generator',
    description: 'Create professional invoices, track payments, and manage billing with ease.',
    icon: FileText,
    features: ['Professional templates', 'Payment tracking', 'Automated reminders', 'Tax calculations'],
    pricing: '$15/month',
    category: 'Finance',
    benefits: ['Get paid 30% faster', 'Reduce billing errors', 'Professional appearance'],
    marketPrice: '$10-40/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Password Manager',
    description: 'Secure password storage and management for individuals and teams.',
    icon: Lock,
    features: ['Secure encryption', 'Password generation', 'Team sharing', 'Breach monitoring'],
    pricing: '$12/month',
    category: 'Security',
    benefits: ['Enhanced security', 'Easy password management', 'Team collaboration'],
    marketPrice: '$5-20/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'File Storage & Sharing',
    description: 'Secure cloud storage with advanced sharing and collaboration features.',
    icon: Cloud,
    features: ['Secure cloud storage', 'File sharing', 'Version control', 'Team collaboration'],
    pricing: '$20/month',
    category: 'Storage',
    benefits: ['Access files anywhere', 'Secure sharing', 'Version history'],
    marketPrice: '$10-50/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Time Tracking Tool',
    description: 'Track time spent on projects and tasks with detailed reporting and insights.',
    icon: Clock,
    features: ['Time tracking', 'Project management', 'Detailed reports', 'Team insights'],
    pricing: '$18/month',
    category: 'Productivity',
    benefits: ['Better time management', 'Accurate billing', 'Productivity insights'],
    marketPrice: '$10-30/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Website Builder',
    description: 'Create professional websites with drag-and-drop builder and responsive templates.',
    icon: Globe,
    features: ['Drag-and-drop builder', 'Responsive templates', 'SEO tools', 'E-commerce integration'],
    pricing: '$35/month',
    category: 'Web Development',
    benefits: ['No coding required', 'Professional results', 'SEO optimized'],
    marketPrice: '$15-100/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'CRM System',
    description: 'Manage customer relationships with comprehensive CRM features and automation.',
    icon: Users,
    features: ['Contact management', 'Sales pipeline', 'Automation', 'Reporting'],
    pricing: '$50/month',
    category: 'CRM',
    benefits: ['Improve sales by 25%', 'Better customer relationships', 'Automated workflows'],
    marketPrice: '$25-150/month',
    link: '/contact',
    popular: true
  }
];

const categories = [
  'All',
  'Content & Marketing',
  'Social Media',
  'Email Marketing',
  'Productivity',
  'Customer Service',
  'Analytics',
  'Finance',
  'Security',
  'Storage',
  'Web Development',
  'CRM'
];

export default function MicroSaasPage() {
  return (
    <Layout
      title="Micro SaaS Services - Zion Tech Group"
      description="Discover our comprehensive collection of micro SaaS services designed to streamline your business operations and boost productivity."
      keywords="micro saas, software as a service, business tools, productivity software, automation tools"
    >
      <div className="min-h-screen bg-gray-50">
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
                Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span> Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, focused software solutions designed to solve specific business problems. 
                Choose from our curated collection of micro SaaS tools.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-6 py-3 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-colors duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      {service.popular && (
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <span className="text-sm text-gray-500">Category:</span>
                      <span className="ml-2 text-sm font-medium text-blue-600">{service.category}</span>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-gray-900">{service.pricing}</span>
                        <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-600">
                            <Star className="w-4 h-4 text-yellow-500 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      href={service.link}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Analysis Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Market Analysis & Competitive Advantages
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our micro SaaS services are priced competitively and offer superior value compared to market alternatives.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Pricing</h3>
                <p className="text-gray-600">Our services are priced 20-40% below market rates while offering superior features and support.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Quality</h3>
                <p className="text-gray-600">Enterprise-grade features and reliability at small business prices.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation Focus</h3>
                <p className="text-gray-600">Cutting-edge technology and regular updates to keep you ahead of the competition.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-lg text-gray-600 mb-6">
                Contact us today to discuss your specific needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Call: +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold inline-flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email: kleber@ziontechgroup.com
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                364 E Main St STE 1008, Middletown, DE 19709
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}