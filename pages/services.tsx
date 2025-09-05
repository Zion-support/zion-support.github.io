import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Brain,
  Network,
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Clock,
  Shield,
  Zap,
  BarChart3,
  Target,
  TrendingUp,
  Globe,
  Lock,
  Cpu,
  Bot,
  FileText,
  MessageSquare,
  Search,
  Eye,
  Mic,
  Code,
  Settings,
  Monitor,
  Smartphone,
  Server,
  Car,
  Rocket,
  Heart,
  Building,
  Sprout,
  Mail,
  ShoppingCart,
  BookOpen,
  Home,
  Gamepad2,
  Package,
  Truck,
  Factory,
  Banknote,
  Calendar,
  MapPin,
  Phone,
  Headphones,
  Wrench,
  Cog,
  Layers,
  GitBranch,
  Terminal,
  Plus,
  Minus,
  DollarSign,
  CreditCard,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Battery,
  BatteryLow,
  Signal,
  SignalHigh,
  SignalLow,
  SignalZero
} from 'lucide-react';
import Layout from '../components/Layout';

const serviceCategories = [
  {
    title: 'AI Services',
    description: 'Cutting-edge artificial intelligence solutions for modern businesses',
    icon: Brain,
    href: '/ai-services',
    color: 'from-blue-500 to-purple-600',
    count: '25+ Solutions',
    pricing: 'Starting at $2,000/month',
    features: [
      'Machine Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI Content Generation',
      'Voice AI Assistant',
      'Fraud Detection',
      'Drug Discovery'
    ],
    popular: true
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT solutions to power your digital transformation',
    icon: Network,
    href: '/it-services',
    color: 'from-green-500 to-blue-600',
    count: '18+ Solutions',
    pricing: 'Starting at $1,500/month',
    features: [
      'Cloud Migration',
      'Cybersecurity',
      'Network Infrastructure',
      'Database Management',
      'DevOps & Automation',
      'IT Support & Helpdesk',
      'Backup & Recovery',
      'IT Consulting'
    ],
    popular: true
  },
  {
    title: 'Micro SaaS',
    description: 'Innovative software as a service solutions for specialized business needs',
    icon: Cloud,
    href: '/micro-saas',
    color: 'from-purple-500 to-pink-600',
    count: '20+ Products',
    pricing: 'Starting at $19/month',
    features: [
      'AI Content Marketing',
      'Smart Lead Management',
      'Analytics Dashboard',
      'Workflow Automation',
      'Customer Support Bot',
      'Inventory Management',
      'Email Marketing',
      'Project Management'
    ],
    popular: true
  }
];

const allServices = [
  // AI Services
  {
    title: 'AI-Powered Email Responder',
    description: 'Automated email responses using advanced NLP and machine learning algorithms.',
    category: 'AI Services',
    pricing: '$2,000 - $8,000 setup',
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-categorization', 'Smart Routing'],
    popular: true
  },
  {
    title: 'Predictive Analytics Platform',
    description: 'Advanced forecasting and predictive modeling for business intelligence.',
    category: 'AI Services',
    pricing: '$4,000 - $20,000 project',
    features: ['Time Series Analysis', 'Machine Learning Models', 'Real-time Predictions', 'Custom Dashboards'],
    popular: true
  },
  {
    title: 'Intelligent Chatbot System',
    description: 'AI-powered customer support with natural conversation capabilities.',
    category: 'AI Services',
    pricing: '$1,000 - $6,000/month',
    features: ['Natural Language Understanding', 'Context Awareness', 'Multi-language Support', 'Integration APIs'],
    popular: true
  },
  {
    title: 'Computer Vision Solutions',
    description: 'Image and video analysis using deep learning and computer vision.',
    category: 'AI Services',
    pricing: '$3,000 - $15,000 project',
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analytics']
  },
  {
    title: 'AI Content Generation',
    description: 'Automated content creation using advanced language models.',
    category: 'AI Services',
    pricing: '$1,500 - $8,000/month',
    features: ['Text Generation', 'Content Optimization', 'SEO Integration', 'Multi-format Output']
  },
  {
    title: 'Voice AI Assistant',
    description: 'Voice-controlled AI assistant with speech recognition and synthesis.',
    category: 'AI Services',
    pricing: '$2,500 - $12,000 project',
    features: ['Speech-to-Text', 'Text-to-Speech', 'Voice Commands', 'Multi-language Support']
  },
  {
    title: 'AI-Powered Fraud Detection',
    description: 'Real-time fraud detection using machine learning and behavioral analytics.',
    category: 'AI Services',
    pricing: '$5,000 - $25,000 setup',
    features: ['Real-time Analysis', 'Behavioral Patterns', 'Risk Scoring', 'Automated Alerts'],
    popular: true
  },
  {
    title: 'AI Drug Discovery Platform',
    description: 'Accelerated drug discovery using AI for molecular design and optimization.',
    category: 'AI Services',
    pricing: '$50,000 - $200,000 project',
    features: ['Molecular Modeling', 'Drug-Target Interaction', 'Toxicity Prediction', 'Clinical Trial Optimization']
  },
  {
    title: 'AI Financial Modeling',
    description: 'Advanced financial modeling and risk assessment using machine learning.',
    category: 'AI Services',
    pricing: '$10,000 - $50,000 project',
    features: ['Portfolio Optimization', 'Risk Assessment', 'Market Prediction', 'Algorithmic Trading']
  },
  {
    title: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain management with predictive analytics and automation.',
    category: 'AI Services',
    pricing: '$15,000 - $75,000 project',
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Risk Analysis']
  },
  {
    title: 'AI-Powered Recommendation Engine',
    description: 'Personalized recommendation system for e-commerce and content platforms.',
    category: 'AI Services',
    pricing: '$3,000 - $15,000 setup',
    features: ['Collaborative Filtering', 'Content-Based Filtering', 'Real-time Updates', 'A/B Testing']
  },
  {
    title: 'AI Social Media Manager',
    description: 'Automated social media management with content creation and scheduling.',
    category: 'AI Services',
    pricing: '$500 - $2,500/month',
    features: ['Content Generation', 'Optimal Posting Times', 'Engagement Analysis', 'Brand Voice Consistency']
  },
  {
    title: 'AI-Powered Code Review Assistant',
    description: 'Automated code review with security analysis, performance optimization, and best practices enforcement.',
    category: 'AI Services',
    pricing: '$1,200 - $5,000/month',
    features: ['Security Vulnerability Detection', 'Performance Analysis', 'Code Quality Metrics', 'Automated Fixes'],
    popular: true
  },
  {
    title: 'AI Customer Sentiment Analytics',
    description: 'Real-time customer sentiment analysis across all communication channels.',
    category: 'AI Services',
    pricing: '$800 - $3,500/month',
    features: ['Multi-channel Analysis', 'Real-time Alerts', 'Trend Analysis', 'Actionable Insights']
  },
  {
    title: 'AI-Powered Document Processing',
    description: 'Intelligent document extraction, classification, and data processing using OCR and NLP.',
    category: 'AI Services',
    pricing: '$1,500 - $7,000/month',
    features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Workflow Automation']
  },
  {
    title: 'AI Predictive Maintenance',
    description: 'Predictive maintenance for industrial equipment using IoT sensors and machine learning.',
    category: 'AI Services',
    pricing: '$5,000 - $25,000/setup',
    features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization']
  },
  {
    title: 'AI-Powered Legal Document Analysis',
    description: 'Automated legal document review, contract analysis, and compliance checking.',
    category: 'AI Services',
    pricing: '$3,000 - $15,000/month',
    features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Clause Extraction']
  },
  {
    title: 'AI Real Estate Valuation',
    description: 'Automated property valuation using market data, location analysis, and predictive modeling.',
    category: 'AI Services',
    pricing: '$2,000 - $10,000/month',
    features: ['Market Analysis', 'Property Valuation', 'Investment Insights', 'Risk Assessment']
  },
  {
    title: 'AI Video Analytics',
    description: 'Intelligent video analysis with object detection, behavior analysis, and insights.',
    category: 'AI Services',
    pricing: '$3,000 - $15,000/month',
    features: ['Object Detection', 'Behavior Analysis', 'Real-time Alerts', 'Analytics Dashboard']
  },
  {
    title: 'AI Translation Manager',
    description: 'Automated translation and localization platform with AI-powered accuracy.',
    category: 'AI Services',
    pricing: '$2,000 - $10,000/month',
    features: ['AI Translation', 'Multi-language Support', 'Quality Assurance', 'Workflow Management']
  },
  {
    title: 'AI Compliance Monitor',
    description: 'Automated compliance monitoring and reporting for various industry standards.',
    category: 'AI Services',
    pricing: '$5,000 - $25,000/setup',
    features: ['Compliance Monitoring', 'Automated Reports', 'Risk Assessment', 'Audit Trail']
  },
  {
    title: 'AI Energy Management',
    description: 'AI-powered energy monitoring and optimization for businesses and homes.',
    category: 'AI Services',
    pricing: '$1,500 - $8,000/month',
    features: ['Energy Monitoring', 'Usage Optimization', 'Cost Analysis', 'Predictive Maintenance']
  },
  {
    title: 'AI E-commerce Analytics',
    description: 'AI-powered e-commerce insights with customer behavior analysis and recommendations.',
    category: 'AI Services',
    pricing: '$2,500 - $12,000/month',
    features: ['Customer Analytics', 'Product Recommendations', 'Sales Forecasting', 'Inventory Insights']
  },
  {
    title: 'AI HR Management',
    description: 'AI-powered HR platform with recruitment, performance management, and analytics.',
    category: 'AI Services',
    pricing: '$3,000 - $15,000/month',
    features: ['AI Recruitment', 'Performance Analytics', 'Employee Engagement', 'Compliance']
  },
  {
    title: 'AI Website Optimizer',
    description: 'Automated website performance optimization and SEO enhancement platform.',
    category: 'AI Services',
    pricing: '$1,000 - $5,000/month',
    features: ['Performance Optimization', 'SEO Enhancement', 'A/B Testing', 'Analytics']
  },
  {
    title: 'AI Document Management',
    description: 'AI-powered document processing, OCR, and intelligent filing system.',
    category: 'AI Services',
    pricing: '$1,200 - $6,000/month',
    features: ['OCR Processing', 'Smart Filing', 'Search & Retrieval', 'Version Control']
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Expert Team",
    description: "Certified professionals with years of experience in cutting-edge technologies"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support and monitoring for all services"
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security measures and compliance with industry standards"
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of successful implementations and satisfied clients"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We analyze your requirements and propose the best solution for your needs"
  },
  {
    step: "02",
    title: "Planning",
    description: "Detailed project planning with clear milestones and timelines"
  },
  {
    step: "03",
    title: "Development",
    description: "Build and implement your solution with regular updates and communication"
  },
  {
    step: "04",
    title: "Deployment",
    description: "Launch your solution with full support, training, and ongoing maintenance"
  }
];

export default function ServicesPage() {
  return (
    <Layout
      title="Our Services - Zion Tech Group"
      description="Comprehensive technology services including AI solutions, IT services, and micro SaaS products. Expert team delivering innovative results for businesses of all sizes."
      keywords="AI services, IT services, micro saas, technology consulting, cloud solutions, digital transformation, machine learning, cybersecurity"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Comprehensive{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Technology Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                From AI-powered solutions to IT infrastructure and micro SaaS products, we deliver innovative technology services that drive business growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="#services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Service Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to meet your specific business needs and objectives
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative border border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {category.popular && (
                      <div className="absolute -top-3 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </div>
                    )}
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                        <p className="text-sm text-blue-600 font-semibold">{category.count}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                    <div className="mb-6">
                      <span className="text-xl font-semibold text-blue-600">{category.pricing}</span>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        {category.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={category.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                    >
                      Explore {category.title}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* All Services Section */}
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
                All Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our complete portfolio of technology services and solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  {service.popular && (
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  )}
                  <div className="mb-4">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-blue-600">{service.pricing}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 text-sm"
                  >
                    Get Quote
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional value through expertise, innovation, and customer-focused solutions
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
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                Our Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery and long-term success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our innovative technology services can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="/ai-services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}