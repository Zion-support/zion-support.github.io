'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, 
  Globe, Smartphone, Database, BarChart3, Mail, Calendar, FileText, 
  Image, Video, Music, Code, Palette, Search, Lock, Cloud, Wifi, 
  Monitor, Headphones, Camera, Printer, HardDrive, Cpu, MemoryStick, 
  Wrench, Settings, Bell, Heart, ThumbsUp, Share2, Download, Upload, 
  Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, 
  HelpCircle, ExternalLink, Brain, Bot, Target, Layers, BarChart, 
  PieChart, LineChart, Activity, Sparkles, Atom, DollarSign, Award,
  MessageSquare, Phone, MapPin, Building, Rocket, Target as TargetIcon
} from 'lucide-react';
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
  icon: React.ComponentType<any>;
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
      'AI-powered task prioritization',
      'Predictive timeline forecasting',
      'Resource optimization algorithms',
      'Risk assessment and mitigation',
      'Team workload balancing',
      'Progress tracking automation',
      'Stakeholder communication tools',
      'Integration with 50+ tools'
    ],
    pricing: { monthly: 299, yearly: 2990, setup: 199 },
    category: 'Productivity',
    icon: BarChart3,
    popular: true,
    link: 'https://ziontechgroup.com/ai-project-manager',
    trial: '14-day free trial',
    roi: '300% ROI in 6 months'
  },
  {
    id: 'ai-social-media-manager',
    name: 'AI Social Media Manager Pro',
    description: 'Automated social media content creation, optimal posting scheduling, and engagement optimization across all platforms.',
    features: [
      'AI content generation',
      'Optimal posting time prediction',
      'Hashtag optimization',
      'Engagement analytics',
      'Multi-platform management',
      'Competitor analysis',
      'Influencer collaboration tools',
      'White-label options'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 99 },
    category: 'Marketing',
    icon: Share2,
    popular: true,
    link: 'https://ziontechgroup.com/ai-social-media-manager',
    trial: '7-day free trial',
    roi: '250% ROI in 3 months'
  },
  {
    id: 'ai-analytics-dashboard',
    name: 'AI Analytics Dashboard Pro',
    description: 'Real-time business intelligence with predictive insights, automated reporting, and data visualization.',
    features: [
      'Real-time analytics',
      'Predictive insights',
      'Custom dashboard creation',
      'Automated report generation',
      'Data visualization tools',
      'Anomaly detection',
      'Custom KPI tracking',
      'API integrations'
    ],
    pricing: { monthly: 399, yearly: 3990, setup: 299 },
    category: 'Analytics',
    icon: BarChart,
    popular: true,
    link: 'https://ziontechgroup.com/ai-analytics-dashboard',
    trial: '14-day free trial',
    roi: '400% ROI in 4 months'
  },
  {
    id: 'ai-email-marketing-suite',
    name: 'AI Email Marketing Suite Pro',
    description: 'Intelligent email campaigns with AI-powered personalization, A/B testing automation, and performance optimization.',
    features: [
      'AI-powered subject line optimization',
      'Dynamic content personalization',
      'Send time optimization',
      'A/B testing automation',
      'Advanced segmentation',
      'Deliverability monitoring',
      'Revenue attribution',
      'Unlimited sends'
    ],
    pricing: { monthly: 149, yearly: 1490, setup: 0 },
    category: 'Marketing',
    icon: Mail,
    popular: false,
    link: 'https://ziontechgroup.com/ai-email-marketing',
    trial: '7-day free trial',
    roi: '200% ROI in 2 months'
  },

  // Customer Experience Solutions
  {
    id: 'ai-customer-support-bot',
    name: 'AI Customer Support Bot Pro',
    description: '24/7 intelligent customer support with natural language processing, sentiment analysis, and escalation management.',
    features: [
      '24/7 availability',
      'Multi-language support',
      'Sentiment analysis',
      'Escalation management',
      'Knowledge base integration',
      'Voice and text support',
      'A/B testing capabilities',
      'Custom integrations'
    ],
    pricing: { monthly: 249, yearly: 2490, setup: 199 },
    category: 'Customer Support',
    icon: Bot,
    popular: true,
    link: 'https://ziontechgroup.com/ai-customer-support-bot',
    trial: '14-day free trial',
    roi: '350% ROI in 5 months'
  },
  {
    id: 'ai-lead-generation-engine',
    name: 'AI Lead Generation Engine Pro',
    description: 'Automated lead identification, qualification, and nurturing with AI-powered scoring and outreach optimization.',
    features: [
      'AI lead scoring',
      'Automated outreach',
      'Qualification logic',
      'CRM integration',
      'Performance tracking',
      'Territory planning',
      'Commission tracking',
      'Custom workflows'
    ],
    pricing: { monthly: 349, yearly: 3490, setup: 299 },
    category: 'Sales',
    icon: Target,
    popular: true,
    link: 'https://ziontechgroup.com/ai-lead-generation',
    trial: '14-day free trial',
    roi: '450% ROI in 6 months'
  },
  {
    id: 'ai-chatbot-builder',
    name: 'AI Chatbot Builder Pro',
    description: 'No-code chatbot creation platform with advanced conversation flows, multi-channel deployment, and analytics.',
    features: [
      'Drag & drop builder',
      'Multi-channel deployment',
      'Analytics dashboard',
      'Integration APIs',
      'Custom templates',
      'Voice and text support',
      'A/B testing',
      'Team collaboration'
    ],
    pricing: { monthly: 99, yearly: 990, setup: 99 },
    category: 'Customer Support',
    icon: MessageSquare,
    popular: false,
    link: 'https://ziontechgroup.com/ai-chatbot-builder',
    trial: '7-day free trial',
    roi: '150% ROI in 2 months'
  },

  // Content & Marketing Automation
  {
    id: 'ai-content-studio',
    name: 'AI Content Studio Pro',
    description: 'Complete content creation suite with AI writing, editing, optimization, and multi-format support.',
    features: [
      'AI writing assistant',
      'Content optimization',
      'SEO analysis',
      'Brand voice training',
      'Multi-format support',
      'Plagiarism detection',
      'Content calendar',
      'Team collaboration'
    ],
    pricing: { monthly: 179, yearly: 1790, setup: 99 },
    category: 'Content',
    icon: FileText,
    popular: true,
    link: 'https://ziontechgroup.com/ai-content-studio',
    trial: '7-day free trial',
    roi: '200% ROI in 3 months'
  },
  {
    id: 'ai-seo-optimizer',
    name: 'AI SEO Optimizer Pro',
    description: 'Automated SEO analysis, keyword research, content optimization, and rank tracking across search engines.',
    features: [
      'Keyword research',
      'Content analysis',
      'Technical SEO',
      'Competitor analysis',
      'Rank tracking',
      'Backlink analysis',
      'Site speed optimization',
      'Local SEO tools'
    ],
    pricing: { monthly: 129, yearly: 1290, setup: 0 },
    category: 'Marketing',
    icon: Search,
    popular: false,
    link: 'https://ziontechgroup.com/ai-seo-optimizer',
    trial: '7-day free trial',
    roi: '180% ROI in 4 months'
  },
  {
    id: 'ai-video-generator',
    name: 'AI Video Generator Pro',
    description: 'Create professional videos from text prompts with AI-powered video generation, voice synthesis, and editing.',
    features: [
      'Text-to-video generation',
      'Multiple video styles',
      'Voice synthesis',
      'Background music',
      'Subtitle generation',
      'Brand customization',
      'Batch processing',
      'HD export options'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 399 },
    category: 'Content',
    icon: Video,
    popular: true,
    link: 'https://ziontechgroup.com/ai-video-generator',
    trial: '7-day free trial',
    roi: '300% ROI in 4 months'
  },

  // Financial & Business Intelligence
  {
    id: 'ai-invoice-generator',
    name: 'AI Invoice Generator Pro',
    description: 'Automated invoice creation, tracking, payment processing with smart reminders and multi-currency support.',
    features: [
      'Auto invoice generation',
      'Payment tracking',
      'Smart reminders',
      'Multi-currency support',
      'Integration APIs',
      'Tax calculation',
      'Recurring billing',
      'Mobile app'
    ],
    pricing: { monthly: 79, yearly: 790, setup: 0 },
    category: 'Finance',
    icon: DollarSign,
    popular: false,
    link: 'https://ziontechgroup.com/ai-invoice-generator',
    trial: '7-day free trial',
    roi: '120% ROI in 2 months'
  },
  {
    id: 'ai-expense-tracker',
    name: 'AI Expense Tracker Pro',
    description: 'Intelligent expense categorization, receipt scanning, budget management, and tax preparation tools.',
    features: [
      'Receipt scanning',
      'Auto categorization',
      'Budget alerts',
      'Tax preparation',
      'Mobile app',
      'Team management',
      'Financial reporting',
      'Integration APIs'
    ],
    pricing: { monthly: 59, yearly: 590, setup: 0 },
    category: 'Finance',
    icon: Calculator,
    popular: false,
    link: 'https://ziontechgroup.com/ai-expense-tracker',
    trial: '7-day free trial',
    roi: '100% ROI in 1 month'
  },
  {
    id: 'ai-financial-advisor',
    name: 'AI Financial Advisor Pro',
    description: 'Personalized financial planning, investment recommendations, portfolio analysis, and market insights.',
    features: [
      'Portfolio analysis',
      'Risk assessment',
      'Investment recommendations',
      'Goal tracking',
      'Market insights',
      'Tax optimization',
      'Retirement planning',
      'Real-time alerts'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 149 },
    category: 'Finance',
    icon: TrendingUp,
    popular: true,
    link: 'https://ziontechgroup.com/ai-financial-advisor',
    trial: '14-day free trial',
    roi: '300% ROI in 6 months'
  },

  // Productivity & Workflow Tools
  {
    id: 'ai-scheduler-pro',
    name: 'AI Scheduler Pro',
    description: 'Intelligent meeting scheduling with conflict resolution, time zone management, and calendar integration.',
    features: [
      'Smart scheduling',
      'Conflict resolution',
      'Time zone management',
      'Calendar integration',
      'Meeting analytics',
      'Resource booking',
      'Team coordination',
      'Mobile app'
    ],
    pricing: { monthly: 89, yearly: 890, setup: 0 },
    category: 'Productivity',
    icon: Calendar,
    popular: false,
    link: 'https://ziontechgroup.com/ai-scheduler',
    trial: '7-day free trial',
    roi: '140% ROI in 2 months'
  },
  {
    id: 'ai-password-manager',
    name: 'AI Password Manager Pro',
    description: 'Secure password management with AI-powered security recommendations, breach monitoring, and multi-device sync.',
    features: [
      'Secure storage',
      'Password generation',
      'Breach monitoring',
      'Multi-device sync',
      'Security alerts',
      'Team sharing',
      '2FA integration',
      'Dark web monitoring'
    ],
    pricing: { monthly: 39, yearly: 390, setup: 0 },
    category: 'Security',
    icon: Lock,
    popular: false,
    link: 'https://ziontechgroup.com/ai-password-manager',
    trial: '7-day free trial',
    roi: '80% ROI in 1 month'
  },
  {
    id: 'ai-workflow-automation',
    name: 'AI Workflow Automation Pro',
    description: 'Visual workflow builder with AI-powered process optimization, integration capabilities, and performance analytics.',
    features: [
      'Visual builder',
      'Process optimization',
      'Integration library',
      'Performance analytics',
      'Custom triggers',
      'Error handling',
      'Team collaboration',
      'API access'
    ],
    pricing: { monthly: 299, yearly: 2990, setup: 199 },
    category: 'Automation',
    icon: Settings,
    popular: true,
    link: 'https://ziontechgroup.com/ai-workflow-automation',
    trial: '14-day free trial',
    roi: '400% ROI in 5 months'
  },

  // Development & Technical Tools
  {
    id: 'ai-code-assistant',
    name: 'AI Code Assistant Pro',
    description: 'Accelerate development with AI-powered code generation, review, optimization, and security scanning.',
    features: [
      'Code generation',
      'Bug detection',
      'Performance optimization',
      'Code review automation',
      'Documentation generation',
      'Test case creation',
      'Security scanning',
      'Multi-language support'
    ],
    pricing: { monthly: 89, yearly: 890, setup: 99 },
    category: 'Development',
    icon: Code,
    popular: false,
    link: 'https://ziontechgroup.com/ai-code-assistant',
    trial: '7-day free trial',
    roi: '200% ROI in 3 months'
  },
  {
    id: 'ai-api-manager',
    name: 'AI API Manager Pro',
    description: 'Intelligent API management with monitoring, optimization, security, and automated documentation generation.',
    features: [
      'API monitoring',
      'Performance optimization',
      'Security management',
      'Documentation generation',
      'Rate limiting',
      'Analytics dashboard',
      'Integration testing',
      'Version control'
    ],
    pricing: { monthly: 179, yearly: 1790, setup: 149 },
    category: 'Development',
    icon: Cloud,
    popular: false,
    link: 'https://ziontechgroup.com/ai-api-manager',
    trial: '7-day free trial',
    roi: '250% ROI in 4 months'
  },

  // Security & Compliance
  {
    id: 'ai-cybersecurity-monitor',
    name: 'AI Cybersecurity Monitor Pro',
    description: 'Protect your business with AI-powered threat detection, security monitoring, and automated incident response.',
    features: [
      'Real-time threat detection',
      'Anomaly identification',
      'Automated incident response',
      'Compliance monitoring',
      'Vulnerability scanning',
      'Security reporting',
      'Team notifications',
      'Integration with security tools'
    ],
    pricing: { monthly: 249, yearly: 2490, setup: 299 },
    category: 'Security',
    icon: Shield,
    popular: true,
    link: 'https://ziontechgroup.com/ai-cybersecurity-monitor',
    trial: '14-day free trial',
    roi: '300% ROI in 6 months'
  },

  // HR & Recruitment
  {
    id: 'ai-recruitment-assistant',
    name: 'AI Recruitment Assistant Pro',
    description: 'Streamline hiring with AI-powered candidate screening, interview scheduling, and skill assessment.',
    features: [
      'Resume screening',
      'Candidate matching',
      'Interview scheduling',
      'Skill assessment',
      'Background check integration',
      'Diversity analytics',
      'Onboarding automation',
      'Performance tracking'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 299 },
    category: 'HR',
    icon: Users,
    popular: false,
    link: 'https://ziontechgroup.com/ai-recruitment-assistant',
    trial: '14-day free trial',
    roi: '250% ROI in 5 months'
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
  'Security',
  'Automation',
  'Development',
  'HR'
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

export default function MicroSAASPage() {
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
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
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
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center group"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SAAS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
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
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 group relative ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{formatPrice(service.pricing.monthly)}</div>
                    <div className="text-sm text-gray-400">/month</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Trial:</span>
                    <span className="text-cyan-400 font-medium">{service.trial}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Expected ROI:</span>
                    <span className="text-green-400 font-medium">{service.roi}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all block text-center"
                  >
                    Learn More
                  </a>
                  <a
                    href="/contact"
                    className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all block text-center"
                  >
                    Start Free Trial
                  </a>
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
                className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-800/30">
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
      <section className="py-20">
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
      <section className="py-20 bg-slate-800/30">
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