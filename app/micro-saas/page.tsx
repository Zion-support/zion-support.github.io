'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, Globe, Smartphone, Database, BarChart3, Mail, Calendar, FileText, Image, Video, Music, Code, Palette, Search, Lock, Cloud, Wifi, Monitor, Headphones, Camera, Printer, HardDrive, Cpu, MemoryStick, Wrench, Settings, Bell, Heart, ThumbsUp, Share2, Download, Upload, Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, Brain, Cpu as CpuIcon, Bot, Target, Layers, BarChart, PieChart, LineChart, Activity, Zap as ZapIcon, Sparkles, Atom, Cpu as CpuIcon2, DollarSign, Award, MessageSquare, Phone, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

interface MicroSAASService {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
    setup?: number;
  };
  category: string;
  icon: string;
  popular?: boolean;
  comingSoon?: boolean;
  link: string;
  trial: string;
  roi: string;
}

const microSAASServices: MicroSAASService[] = [
  // AI-Powered Business Tools
  {
    id: 'ai-project-manager-pro',
    name: 'AI Project Manager Pro',
    description: 'Intelligent project management with predictive analytics, automated resource allocation, and smart task prioritization.',
    features: [
      'Smart Task Assignment',
      'Risk Prediction & Mitigation',
      'Resource Optimization',
      'Progress Tracking',
      'Team Collaboration Tools',
      'Timeline Forecasting',
      'Budget Management',
      'Stakeholder Communication'
    ],
    pricing: { monthly: 299, yearly: 2990, setup: 0 },
    category: 'Productivity',
    icon: '📋',
    popular: true,
    link: 'https://ziontechgroup.com/ai-project-manager',
    trial: '14-day free trial',
    roi: '300% ROI in 6 months'
  },
  {
    id: 'ai-social-media-manager',
    name: 'AI Social Media Manager Pro',
    description: 'Automated social media content creation, scheduling, and engagement optimization across all platforms.',
    features: [
      'Content Generation',
      'Post Scheduling',
      'Engagement Analytics',
      'Hashtag Optimization',
      'Multi-platform Management',
      'Sentiment Analysis',
      'Competitor Analysis',
      'Influencer Collaboration'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 0 },
    category: 'Marketing',
    icon: '📱',
    popular: true,
    link: 'https://ziontechgroup.com/ai-social-media-manager',
    trial: '7-day free trial',
    roi: '250% ROI in 3 months'
  },
  {
    id: 'ai-analytics-dashboard',
    name: 'AI Analytics Dashboard Pro',
    description: 'Real-time business intelligence with predictive insights, automated reporting, and custom dashboards.',
    features: [
      'Real-time Analytics',
      'Predictive Insights',
      'Custom Dashboards',
      'Automated Reports',
      'Data Visualization',
      'Anomaly Detection',
      'KPI Tracking',
      'API Integrations'
    ],
    pricing: { monthly: 399, yearly: 3990, setup: 0 },
    category: 'Analytics',
    icon: '📊',
    popular: true,
    link: 'https://ziontechgroup.com/ai-analytics-dashboard',
    trial: '14-day free trial',
    roi: '400% ROI in 4 months'
  },
  {
    id: 'ai-email-marketing-suite',
    name: 'AI Email Marketing Suite',
    description: 'Intelligent email campaigns with personalization, A/B testing automation, and performance optimization.',
    features: [
      'Smart Personalization',
      'A/B Testing Automation',
      'Send Time Optimization',
      'Performance Analytics',
      'List Segmentation',
      'Deliverability Monitoring',
      'Revenue Attribution',
      'Unlimited Sends'
    ],
    pricing: { monthly: 149, yearly: 1490, setup: 0 },
    category: 'Marketing',
    icon: '📧',
    popular: false,
    link: 'https://ziontechgroup.com/ai-email-marketing',
    trial: '7-day free trial',
    roi: '200% ROI in 2 months'
  },

  // Customer Experience Solutions
  {
    id: 'ai-customer-support-bot',
    name: 'AI Customer Support Bot Pro',
    description: '24/7 intelligent customer support with natural language processing and escalation management.',
    features: [
      '24/7 Availability',
      'Multi-language Support',
      'Sentiment Analysis',
      'Escalation Management',
      'Knowledge Base Integration',
      'Live Chat Handoff',
      'Performance Analytics',
      'Custom Training'
    ],
    pricing: { monthly: 249, yearly: 2490, setup: 0 },
    category: 'Customer Support',
    icon: '🤖',
    popular: true,
    link: 'https://ziontechgroup.com/ai-customer-support-bot',
    trial: '14-day free trial',
    roi: '350% ROI in 5 months'
  },
  {
    id: 'ai-lead-generation-engine',
    name: 'AI Lead Generation Engine',
    description: 'Automated lead identification, qualification, and nurturing with AI-powered scoring and outreach.',
    features: [
      'Lead Scoring',
      'Automated Outreach',
      'Qualification Logic',
      'CRM Integration',
      'Performance Tracking',
      'Email Sequences',
      'Social Media Mining',
      'Intent Detection'
    ],
    pricing: { monthly: 349, yearly: 3490, setup: 0 },
    category: 'Sales',
    icon: '🎯',
    popular: true,
    link: 'https://ziontechgroup.com/ai-lead-generation',
    trial: '14-day free trial',
    roi: '450% ROI in 6 months'
  },
  {
    id: 'ai-chatbot-builder',
    name: 'AI Chatbot Builder Pro',
    description: 'No-code chatbot creation platform with advanced conversation flows and integrations.',
    features: [
      'Drag & Drop Builder',
      'Multi-channel Deployment',
      'Analytics Dashboard',
      'Integration APIs',
      'Custom Templates',
      'Voice Support',
      'A/B Testing',
      'White-label Options'
    ],
    pricing: { monthly: 99, yearly: 990, setup: 0 },
    category: 'Customer Support',
    icon: '💬',
    popular: false,
    link: 'https://ziontechgroup.com/ai-chatbot-builder',
    trial: '7-day free trial',
    roi: '150% ROI in 2 months'
  },

  // Content & Marketing Automation
  {
    id: 'ai-content-studio',
    name: 'AI Content Studio Pro',
    description: 'Complete content creation suite with AI writing, editing, and optimization tools.',
    features: [
      'AI Writing Assistant',
      'Content Optimization',
      'SEO Analysis',
      'Brand Voice Training',
      'Multi-format Support',
      'Plagiarism Detection',
      'Content Calendar',
      'Team Collaboration'
    ],
    pricing: { monthly: 179, yearly: 1790, setup: 0 },
    category: 'Content',
    icon: '✍️',
    popular: true,
    link: 'https://ziontechgroup.com/ai-content-studio',
    trial: '7-day free trial',
    roi: '200% ROI in 3 months'
  },
  {
    id: 'ai-seo-optimizer',
    name: 'AI SEO Optimizer Pro',
    description: 'Automated SEO analysis, keyword research, and content optimization recommendations.',
    features: [
      'Keyword Research',
      'Content Analysis',
      'Technical SEO',
      'Competitor Analysis',
      'Rank Tracking',
      'Link Building',
      'Local SEO',
      'Performance Monitoring'
    ],
    pricing: { monthly: 129, yearly: 1290, setup: 0 },
    category: 'Marketing',
    icon: '🔍',
    popular: false,
    link: 'https://ziontechgroup.com/ai-seo-optimizer',
    trial: '7-day free trial',
    roi: '180% ROI in 4 months'
  },
  {
    id: 'ai-video-generator',
    name: 'AI Video Generator Pro',
    description: 'Create professional videos from text prompts with AI-powered video generation and editing.',
    features: [
      'Text-to-Video Generation',
      'Multiple Video Styles',
      'Voice Synthesis',
      'Background Music',
      'Subtitle Generation',
      'Brand Customization',
      'Batch Processing',
      'HD Export Options'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 0 },
    category: 'Content',
    icon: '🎬',
    popular: true,
    link: 'https://ziontechgroup.com/ai-video-generator',
    trial: '7-day free trial',
    roi: '220% ROI in 3 months'
  },

  // Financial & Business Intelligence
  {
    id: 'ai-invoice-generator',
    name: 'AI Invoice Generator Pro',
    description: 'Automated invoice creation, tracking, and payment processing with smart reminders.',
    features: [
      'Auto Invoice Generation',
      'Payment Tracking',
      'Smart Reminders',
      'Multi-currency Support',
      'Integration APIs',
      'Tax Calculations',
      'Recurring Billing',
      'Client Portal'
    ],
    pricing: { monthly: 79, yearly: 790, setup: 0 },
    category: 'Finance',
    icon: '🧾',
    popular: false,
    link: 'https://ziontechgroup.com/ai-invoice-generator',
    trial: '7-day free trial',
    roi: '120% ROI in 2 months'
  },
  {
    id: 'ai-expense-tracker',
    name: 'AI Expense Tracker Pro',
    description: 'Intelligent expense categorization, receipt scanning, and budget management.',
    features: [
      'Receipt Scanning',
      'Auto Categorization',
      'Budget Alerts',
      'Tax Preparation',
      'Mobile App',
      'Team Management',
      'Approval Workflows',
      'Financial Reporting'
    ],
    pricing: { monthly: 59, yearly: 590, setup: 0 },
    category: 'Finance',
    icon: '💰',
    popular: false,
    link: 'https://ziontechgroup.com/ai-expense-tracker',
    trial: '7-day free trial',
    roi: '100% ROI in 1 month'
  },
  {
    id: 'ai-financial-advisor',
    name: 'AI Financial Advisor Pro',
    description: 'Personalized financial planning and investment recommendations based on AI analysis.',
    features: [
      'Portfolio Analysis',
      'Risk Assessment',
      'Investment Recommendations',
      'Goal Tracking',
      'Market Insights',
      'Tax Optimization',
      'Retirement Planning',
      'Wealth Management'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 0 },
    category: 'Finance',
    icon: '📈',
    popular: true,
    link: 'https://ziontechgroup.com/ai-financial-advisor',
    trial: '14-day free trial',
    roi: '300% ROI in 6 months'
  },

  // Productivity & Workflow Tools
  {
    id: 'ai-scheduler-pro',
    name: 'AI Scheduler Pro',
    description: 'Intelligent meeting scheduling with conflict resolution and time zone management.',
    features: [
      'Smart Scheduling',
      'Conflict Resolution',
      'Time Zone Management',
      'Calendar Integration',
      'Meeting Analytics',
      'Resource Booking',
      'Automated Reminders',
      'Team Coordination'
    ],
    pricing: { monthly: 89, yearly: 890, setup: 0 },
    category: 'Productivity',
    icon: '📅',
    popular: false,
    link: 'https://ziontechgroup.com/ai-scheduler',
    trial: '7-day free trial',
    roi: '140% ROI in 2 months'
  },
  {
    id: 'ai-password-manager',
    name: 'AI Password Manager Pro',
    description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
    features: [
      'Secure Storage',
      'Password Generation',
      'Breach Monitoring',
      'Multi-device Sync',
      'Security Alerts',
      'Team Sharing',
      '2FA Integration',
      'Dark Web Monitoring'
    ],
    pricing: { monthly: 39, yearly: 390, setup: 0 },
    category: 'Security',
    icon: '🔐',
    popular: false,
    link: 'https://ziontechgroup.com/ai-password-manager',
    trial: '7-day free trial',
    roi: '80% ROI in 1 month'
  },
  {
    id: 'ai-workflow-automation',
    name: 'AI Workflow Automation Pro',
    description: 'Visual workflow builder with AI-powered process optimization and integration capabilities.',
    features: [
      'Visual Builder',
      'Process Optimization',
      'Integration Library',
      'Performance Analytics',
      'Custom Triggers',
      'Error Handling',
      'Team Collaboration',
      'API Management'
    ],
    pricing: { monthly: 299, yearly: 2990, setup: 0 },
    category: 'Automation',
    icon: '⚙️',
    popular: true,
    link: 'https://ziontechgroup.com/ai-workflow-automation',
    trial: '14-day free trial',
    roi: '400% ROI in 5 months'
  },

  // E-commerce & Sales
  {
    id: 'ai-ecommerce-optimizer',
    name: 'AI E-commerce Optimizer Pro',
    description: 'Boost your online store performance with AI-powered product recommendations and pricing optimization.',
    features: [
      'Dynamic Pricing',
      'Product Recommendations',
      'Inventory Forecasting',
      'Customer Behavior Analysis',
      'A/B Testing Automation',
      'Conversion Optimization',
      'Fraud Detection',
      'Multi-channel Sync'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 0 },
    category: 'E-commerce',
    icon: '🛒',
    popular: true,
    link: 'https://ziontechgroup.com/ai-ecommerce-optimizer',
    trial: '14-day free trial',
    roi: '250% ROI in 4 months'
  },
  {
    id: 'ai-sales-predictor',
    name: 'AI Sales Predictor Pro',
    description: 'Predict sales outcomes and optimize your sales process with AI-powered forecasting.',
    features: [
      'Sales Forecasting',
      'Lead Scoring',
      'Deal Probability',
      'Pipeline Optimization',
      'Performance Analytics',
      'Territory Planning',
      'Commission Tracking',
      'CRM Integration'
    ],
    pricing: { monthly: 79, yearly: 790, setup: 0 },
    category: 'Sales',
    icon: '📊',
    popular: false,
    link: 'https://ziontechgroup.com/ai-sales-predictor',
    trial: '7-day free trial',
    roi: '180% ROI in 3 months'
  },

  // Security & Compliance
  {
    id: 'ai-security-monitor',
    name: 'AI Security Monitor Pro',
    description: 'Protect your business with AI-powered threat detection and security monitoring.',
    features: [
      'Real-time Threat Detection',
      'Anomaly Identification',
      'Automated Response',
      'Compliance Monitoring',
      'Vulnerability Scanning',
      'Security Reporting',
      'Team Notifications',
      'Integration APIs'
    ],
    pricing: { monthly: 129, yearly: 1290, setup: 0 },
    category: 'Security',
    icon: '🛡️',
    popular: false,
    link: 'https://ziontechgroup.com/ai-security-monitor',
    trial: '7-day free trial',
    roi: '200% ROI in 4 months'
  },

  // HR & Recruitment
  {
    id: 'ai-recruitment-assistant',
    name: 'AI Recruitment Assistant Pro',
    description: 'Streamline your hiring process with AI-powered candidate screening and interview scheduling.',
    features: [
      'Resume Screening',
      'Candidate Matching',
      'Interview Scheduling',
      'Skill Assessment',
      'Background Check Integration',
      'Diversity Analytics',
      'Onboarding Automation',
      'Performance Tracking'
    ],
    pricing: { monthly: 99, yearly: 990, setup: 0 },
    category: 'HR',
    icon: '👔',
    popular: false,
    link: 'https://ziontechgroup.com/ai-recruitment-assistant',
    trial: '7-day free trial',
    roi: '160% ROI in 3 months'
  },

  // Development Tools
  {
    id: 'ai-code-assistant',
    name: 'AI Code Assistant Pro',
    description: 'Accelerate development with AI-powered code generation, review, and optimization.',
    features: [
      'Code Generation',
      'Bug Detection',
      'Performance Optimization',
      'Code Review Automation',
      'Documentation Generation',
      'Test Case Creation',
      'Security Scanning',
      'Multi-language Support'
    ],
    pricing: { monthly: 89, yearly: 890, setup: 0 },
    category: 'Development',
    icon: '💻',
    popular: false,
    link: 'https://ziontechgroup.com/ai-code-assistant',
    trial: '7-day free trial',
    roi: '170% ROI in 3 months'
  }
];

const categories = [
  'All',
  'Productivity',
  'Marketing',
  'Analytics',
  'Customer Support',
  'Sales',
  'Content',
  'Finance',
  'Automation',
  'E-commerce',
  'Security',
  'HR',
  'Development'
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Proven ROI',
    description: 'Our micro SAAS solutions deliver an average ROI of 250% within 6 months',
    stat: '250%'
  },
  {
    icon: Clock,
    title: 'Quick Setup',
    description: 'Get up and running in under 24 hours with our streamlined onboarding',
    stat: '24h'
  },
  {
    icon: DollarSign,
    title: 'Cost Effective',
    description: 'Starting from just $39/month with no long-term contracts required',
    stat: '$39/mo'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with 99.9% uptime guarantee and data encryption',
    stat: '99.9%'
  }
];

const pricingTiers = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 5 users',
      'Basic AI features',
      'Email support',
      'Standard integrations',
      'Basic analytics'
    ],
    popular: false,
    cta: 'Start Free Trial'
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 25 users',
      'Advanced AI features',
      'Priority support',
      'All integrations',
      'Advanced analytics',
      'Custom workflows'
    ],
    popular: true,
    cta: 'Start Free Trial'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: [
      'Unlimited users',
      'Full AI capabilities',
      '24/7 dedicated support',
      'Custom integrations',
      'Advanced security',
      'White-label options'
    ],
    popular: false,
    cta: 'Contact Sales'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    role: 'CEO',
    content: 'AI Project Manager Pro transformed our productivity. We saw a 300% increase in project completion rates within 3 months.',
    rating: 5,
    avatar: '/images/testimonials/sarah.jpg'
  },
  {
    name: 'Michael Chen',
    company: 'Digital Marketing Co.',
    role: 'Marketing Director',
    content: 'The AI Social Media Manager saved us 20 hours per week and increased our engagement by 150%.',
    rating: 5,
    avatar: '/images/testimonials/michael.jpg'
  },
  {
    name: 'Emily Rodriguez',
    company: 'E-commerce Solutions',
    role: 'Operations Manager',
    content: 'AI Analytics Dashboard gave us insights we never had before. Our decision-making is now data-driven.',
    rating: 5,
    avatar: '/images/testimonials/emily.jpg'
  }
];

export default function MicroSaasPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(microSAASServices);

  useEffect(() => {
    let filtered = microSAASServices;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredServices(filtered);
  }, [selectedCategory, searchTerm]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <ScrollToTop />
      
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI-Powered Micro SAAS Solutions
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Streamline your business operations with our intelligent micro SAAS applications. 
              From project management to customer support, we have the tools you need to succeed.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">250% Average ROI</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Award Winning</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search micro SAAS solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 group relative"
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm">{service.category}</p>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="text-sm text-gray-400 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-cyan-400">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>
              
              <div className="border-t border-gray-700 pt-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">
                    {formatPrice(service.pricing.monthly)}
                    <span className="text-lg text-gray-400">/month</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    or {formatPrice(service.pricing.yearly)}/year (save 17%)
                  </div>
                  <div className="text-sm text-green-400 mt-1">
                    {service.trial} • {service.roi}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
                  >
                    Learn More
                  </a>
                  <a
                    href="/contact"
                    className="w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center block"
                  >
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
            <p className="text-gray-300 mb-8">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven results and enterprise-grade solutions that deliver measurable business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include free trials and no setup fees.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${tier.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all block text-center ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real customers who have transformed their businesses with our solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already transformed their operations with our micro SAAS solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-200">
            <p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:text-cyan-200">+1 (302) 464-0950</a></p>
            <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200">kleber@ziontechgroup.com</a></p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}