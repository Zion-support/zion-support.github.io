import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Settings, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Award, 
  Star,
  Globe,
  Lock,
  Cpu,
  Bot,
  FileText,
  Image,
  Video,
  Mic,
  Code,
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
<<<<<<< HEAD
  ShoppingCart,
  BookOpen,
  Package,
  DollarSign,
  TrendingUp,
  Target,
  Eye,
  Brain
=======
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
  Trash2
>>>>>>> 8391ff08d5a213489d27660faf5d33b8ff91b13c
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const microSaaSProducts = [
  {
<<<<<<< HEAD
    title: 'Cloud Cost Guard',
    description: 'Automated cloud cost monitoring and optimization for AWS, Azure, and GCP.',
    icon: Cloud,
    features: ['Cost Tracking', 'Budget Alerts', 'Optimization Recommendations', 'Multi-cloud Support'],
    pricing: '$29 - $299/month',
    category: 'Cloud Management',
=======
    title: 'Cloud Cost Guard (FinOps Assistant)',
    description: 'Anomaly detection, rightsizing, forecasting and budget guardrails across AWS/Azure/GCP.',
    icon: DollarSign,
    features: ['Cost Anomaly Detection', 'Auto Rightsizing', 'Budget Forecasting', 'Multi-cloud Support'],
    pricing: '$299 - $1,499/month',
    category: 'FinOps',
>>>>>>> 8391ff08d5a213489d27660faf5d33b8ff91b13c
    popular: true
  },
  {
    title: 'LLM Evaluation Suite',
    description: 'Comprehensive testing and evaluation platform for large language models.',
    icon: Brain,
    features: ['Model Testing', 'Performance Metrics', 'Bias Detection', 'Automated Reports'],
    pricing: '$199 - $1,999/month',
    category: 'AI Tools',
    popular: true
  },
  {
    title: 'Customer Feedback App',
    description: 'Collect, analyze, and act on customer feedback across multiple channels.',
    icon: Users,
    features: ['Multi-channel Collection', 'Sentiment Analysis', 'Action Tracking', 'Integration APIs'],
    pricing: '$49 - $499/month',
    category: 'Customer Experience',
    popular: true
  },
  {
    title: 'API Rate Limiting',
    description: 'Intelligent API rate limiting and throttling to protect your services.',
    icon: Shield,
<<<<<<< HEAD
    features: ['Dynamic Rate Limiting', 'DDoS Protection', 'Analytics Dashboard', 'Custom Rules'],
    pricing: '$99 - $999/month',
    category: 'API Management',
    popular: false
=======
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
>>>>>>> 8391ff08d5a213489d27660faf5d33b8ff91b13c
  },
  {
    title: 'Content Moderation AI',
    description: 'Automated content moderation using AI for text, images, and videos.',
    icon: Eye,
<<<<<<< HEAD
    features: ['Multi-media Support', 'Custom Rules', 'Real-time Processing', 'Human Review Queue'],
    pricing: '$149 - $1,499/month',
    category: 'Content Management',
    popular: true
=======
    features: ['Multi-modal Detection', 'Custom Rules', 'Real-time Processing', 'API Integration'],
    pricing: '$399 - $1,999/month',
    category: 'Content Safety'
>>>>>>> 8391ff08d5a213489d27660faf5d33b8ff91b13c
  },
  {
    title: 'Workflow Automation',
    description: 'Visual workflow builder for automating business processes and integrations.',
    icon: Zap,
    features: ['Drag & Drop Builder', 'Pre-built Templates', 'Integration Library', 'Analytics'],
    pricing: '$79 - $799/month',
    category: 'Automation',
    popular: true
<<<<<<< HEAD
  },
  {
    title: 'AI Lead Scoring',
    description: 'Intelligent lead scoring and qualification using machine learning.',
    icon: Target,
    features: ['ML Models', 'Behavioral Analysis', 'Scoring Algorithms', 'CRM Integration'],
    pricing: '$199 - $1,999/month',
    category: 'Sales Tools',
    popular: false
=======
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
>>>>>>> 8391ff08d5a213489d27660faf5d33b8ff91b13c
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
    title: 'AI-Powered Legal Document Analyzer',
    description: 'Automated legal document analysis and contract review using AI.',
    icon: FileText,
    features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Clause Extraction'],
<<<<<<< HEAD
    pricing: '$299 - $2,999/month',
    category: 'Legal Tech',
    popular: true
  },
  {
    title: 'Smart Energy Management',
    description: 'IoT-based energy monitoring and optimization for buildings and facilities.',
    icon: Sprout,
    features: ['Real-time Monitoring', 'Energy Analytics', 'Cost Optimization', 'Sustainability Reporting'],
    pricing: '$199 - $1,999/month',
    category: 'IoT Solutions',
    popular: false
  },
  {
    title: 'AI Medical Diagnosis Assistant',
    description: 'AI-powered medical diagnosis support with symptom analysis and treatment recommendations.',
    icon: Heart,
    features: ['Symptom Analysis', 'Diagnosis Support', 'Treatment Recommendations', 'Medical Records Integration'],
    pricing: '$499 - $4,999/month',
    category: 'Healthcare',
    popular: true
  },
  {
    title: 'Blockchain Analytics Dashboard',
    description: 'Comprehensive blockchain data analysis and visualization platform.',
    icon: Globe,
    features: ['Multi-chain Support', 'Transaction Analysis', 'DeFi Analytics', 'Custom Dashboards'],
    pricing: '$299 - $2,999/month',
    category: 'Blockchain',
    popular: false
  },
  {
    title: 'AI Personal Finance Manager',
    description: 'Intelligent personal finance tracking, budgeting, and investment advice.',
    icon: DollarSign,
    features: ['Expense Tracking', 'Budget Planning', 'Investment Analysis', 'Goal Setting'],
    pricing: '$9.99 - $99/month',
    category: 'FinTech',
    popular: true
  },
  {
    title: 'Smart Home Automation Hub',
    description: 'Centralized control and automation for smart home devices and systems.',
    icon: Building,
    features: ['Device Integration', 'Automation Rules', 'Voice Control', 'Energy Management'],
    pricing: '$49 - $499/month',
    category: 'Smart Home',
    popular: false
  },
  {
    title: 'AI Code Review Assistant',
    description: 'Automated code review and quality analysis using machine learning.',
    icon: Code,
    features: ['Code Analysis', 'Bug Detection', 'Security Scanning', 'Performance Optimization'],
    pricing: '$99 - $999/month',
    category: 'Developer Tools',
    popular: true
  },
  {
    title: 'Digital Marketing Analytics',
    description: 'Comprehensive marketing analytics and campaign optimization platform.',
=======
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
>>>>>>> 8391ff08d5a213489d27660faf5d33b8ff91b13c
    icon: BarChart3,
    features: ['Multi-channel Tracking', 'ROI Analysis', 'A/B Testing', 'Predictive Analytics'],
    pricing: '$149 - $1,499/month',
    category: 'Marketing',
    popular: true
  },
  {
    title: 'AI-Powered Email Marketing',
    description: 'Intelligent email marketing with personalization and automation.',
    icon: Mail,
    features: ['Personalization', 'Send Time Optimization', 'A/B Testing', 'Analytics'],
    pricing: '$79 - $799/month',
    category: 'Marketing',
    popular: false
  },
  {
    title: 'E-commerce Inventory Optimizer',
    description: 'AI-driven inventory management and demand forecasting for e-commerce.',
    icon: ShoppingCart,
    features: ['Demand Forecasting', 'Stock Optimization', 'Reorder Alerts', 'Analytics'],
    pricing: '$199 - $1,999/month',
    category: 'E-commerce',
    popular: true
  },
  {
    title: 'AI Learning Management System',
    description: 'Intelligent learning platform with personalized content and progress tracking.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Progress Tracking', 'Content Generation', 'Assessment Tools'],
    pricing: '$99 - $999/month',
    category: 'EdTech',
    popular: false
  },
  {
    title: 'Smart Fleet Management',
    description: 'IoT-based fleet tracking, maintenance, and optimization platform.',
    icon: Car,
    features: ['Real-time Tracking', 'Maintenance Alerts', 'Route Optimization', 'Driver Analytics'],
    pricing: '$299 - $2,999/month',
    category: 'Fleet Management',
    popular: false
  },
  {
    title: 'AI-Powered HR Analytics',
    description: 'Human resources analytics and employee engagement platform.',
    icon: Users,
    features: ['Employee Analytics', 'Engagement Tracking', 'Performance Metrics', 'Predictive Insights'],
    pricing: '$199 - $1,999/month',
    category: 'HR Tech',
    popular: true
  }
];

const categories = ['All', 'Cloud Management', 'AI Tools', 'Customer Experience', 'API Management', 'Content Management', 'Automation', 'Sales Tools', 'Supply Chain', 'Legal Tech', 'IoT Solutions', 'Healthcare', 'Blockchain', 'FinTech', 'Smart Home', 'Developer Tools', 'Marketing', 'E-commerce', 'EdTech', 'Fleet Management', 'HR Tech'];

export default function MicroSaaSPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = microSaaSProducts.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Innovative, focused software solutions that solve specific business problems 
                with minimal overhead and maximum impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-300"
                >
<<<<<<< HEAD
                  Get Free Trial
=======
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
>>>>>>> 8391ff08d5a213489d27660faf5d33b8ff91b13c
                </Link>
                <Link 
                  href="#services" 
                  className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-900 rounded-lg font-semibold transition-all duration-300"
                >
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search Micro SaaS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        {service.popular && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm text-gray-500">Starting at</span>
                          <div className="text-lg font-bold text-purple-600">
                            {service.pricing}
                          </div>
                        </div>
                        <Link
                          href="/contact"
                          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Your Micro SaaS?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our development team can help you create, launch, and scale your micro SaaS solution 
                with modern technology and best practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/ai-services" 
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold"
                >
                  Explore AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}