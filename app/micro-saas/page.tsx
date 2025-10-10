'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, Globe, Smartphone, Database, BarChart3, Mail, Calendar, FileText, Image, Video, Music, Code, Palette, Search, Lock, Cloud, Wifi, Monitor, Headphones, Camera, Printer, HardDrive, Cpu, MemoryStick, Wrench, Settings, Bell, Heart, ThumbsUp, Share2, Download, Upload, Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, Brain, Cpu as CpuIcon, Bot, Target, Layers, BarChart, PieChart, LineChart, Activity, Zap as ZapIcon, Sparkles, Atom, Cpu as CpuIcon2 } from 'lucide-react';
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
}

const microSAASServices: MicroSAASService[] = [
  // AI-Powered Tools
  {
    id: 'ai-content-writer',
    name: 'AI Content Writer Pro',
    description: 'Advanced AI-powered content creation tool that generates high-quality blog posts, articles, and marketing copy.',
    features: [
      'GPT-4 powered content generation',
      'SEO optimization suggestions',
      'Multiple content formats (blog, social, email)',
      'Brand voice customization',
      'Plagiarism detection',
      'Content calendar integration',
      'Multi-language support',
      'Team collaboration tools'
    ],
    pricing: { monthly: 49, yearly: 490, setup: 0 },
    category: 'AI Tools',
    icon: '✍️',
    popular: true
  },
  {
    id: 'ai-chatbot-builder',
    name: 'AI Chatbot Builder',
    description: 'Create intelligent chatbots for customer support, sales, and lead generation without coding.',
    features: [
      'Drag-and-drop chatbot builder',
      'Natural language processing',
      'Multi-channel deployment',
      'Analytics and insights',
      'Custom integrations',
      'Voice and text support',
      'A/B testing capabilities',
      '24/7 customer support'
    ],
    pricing: { monthly: 79, yearly: 790, setup: 99 },
    category: 'AI Tools',
    icon: '🤖'
  },
  {
    id: 'ai-image-generator',
    name: 'AI Image Generator',
    description: 'Generate stunning images, logos, and graphics using advanced AI technology.',
    features: [
      'DALL-E 3 integration',
      'Custom style training',
      'High-resolution output',
      'Batch processing',
      'Commercial license included',
      'API access',
      'Brand consistency tools',
      'Stock photo replacement'
    ],
    pricing: { monthly: 39, yearly: 390, setup: 0 },
    category: 'AI Tools',
    icon: '🎨'
  },

  // Business Automation
  {
    id: 'workflow-automation',
    name: 'Workflow Automation Hub',
    description: 'Automate repetitive business processes with visual workflow builder and 1000+ integrations.',
    features: [
      'Visual workflow designer',
      '1000+ app integrations',
      'Conditional logic',
      'Scheduled triggers',
      'Error handling',
      'Performance monitoring',
      'Team collaboration',
      'Custom webhooks'
    ],
    pricing: { monthly: 99, yearly: 990, setup: 199 },
    category: 'Automation',
    icon: '⚙️',
    popular: true
  },
  {
    id: 'email-marketing-ai',
    name: 'AI Email Marketing Suite',
    description: 'Intelligent email marketing platform with AI-powered personalization and automation.',
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
    pricing: { monthly: 59, yearly: 590, setup: 0 },
    category: 'Marketing',
    icon: '📧'
  },
  {
    id: 'social-media-scheduler',
    name: 'Social Media AI Scheduler',
    description: 'AI-powered social media management with optimal posting times and content suggestions.',
    features: [
      'AI-optimized posting schedule',
      'Content suggestion engine',
      'Multi-platform management',
      'Hashtag optimization',
      'Engagement analytics',
      'Competitor analysis',
      'Influencer collaboration tools',
      'White-label options'
    ],
    pricing: { monthly: 29, yearly: 290, setup: 0 },
    category: 'Marketing',
    icon: '📱'
  },

  // Data & Analytics
  {
    id: 'business-intelligence-ai',
    name: 'AI Business Intelligence',
    description: 'Transform your data into actionable insights with AI-powered analytics and reporting.',
    features: [
      'Natural language queries',
      'Automated report generation',
      'Predictive analytics',
      'Real-time dashboards',
      'Data visualization',
      'Anomaly detection',
      'Custom KPI tracking',
      'API integrations'
    ],
    pricing: { monthly: 149, yearly: 1490, setup: 299 },
    category: 'Analytics',
    icon: '📊',
    popular: true
  },
  {
    id: 'customer-insights-ai',
    name: 'AI Customer Insights',
    description: 'Understand your customers better with AI-powered sentiment analysis and behavior prediction.',
    features: [
      'Sentiment analysis',
      'Customer journey mapping',
      'Churn prediction',
      'Lifetime value calculation',
      'Segmentation automation',
      'Feedback analysis',
      'Competitive intelligence',
      'ROI tracking'
    ],
    pricing: { monthly: 89, yearly: 890, setup: 149 },
    category: 'Analytics',
    icon: '👥'
  },

  // Productivity Tools
  {
    id: 'ai-meeting-assistant',
    name: 'AI Meeting Assistant',
    description: 'Record, transcribe, and analyze meetings with AI-powered insights and action items.',
    features: [
      'Real-time transcription',
      'Meeting summaries',
      'Action item extraction',
      'Speaker identification',
      'Sentiment analysis',
      'Integration with calendars',
      'Searchable recordings',
      'Team collaboration'
    ],
    pricing: { monthly: 39, yearly: 390, setup: 0 },
    category: 'Productivity',
    icon: '🎤'
  },
  {
    id: 'ai-project-manager',
    name: 'AI Project Manager',
    description: 'Intelligent project management with AI-powered task prioritization and resource allocation.',
    features: [
      'AI task prioritization',
      'Resource optimization',
      'Risk prediction',
      'Timeline forecasting',
      'Team workload balancing',
      'Progress tracking',
      'Stakeholder communication',
      'Integration ecosystem'
    ],
    pricing: { monthly: 69, yearly: 690, setup: 99 },
    category: 'Productivity',
    icon: '📋'
  },

  // E-commerce & Sales
  {
    id: 'ai-ecommerce-optimizer',
    name: 'AI E-commerce Optimizer',
    description: 'Boost your online store performance with AI-powered product recommendations and pricing optimization.',
    features: [
      'Dynamic pricing optimization',
      'Product recommendation engine',
      'Inventory forecasting',
      'Customer behavior analysis',
      'A/B testing automation',
      'Conversion rate optimization',
      'Fraud detection',
      'Multi-channel sync'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 399 },
    category: 'E-commerce',
    icon: '🛒',
    popular: true
  },
  {
    id: 'ai-sales-predictor',
    name: 'AI Sales Predictor',
    description: 'Predict sales outcomes and optimize your sales process with AI-powered forecasting.',
    features: [
      'Sales forecasting',
      'Lead scoring',
      'Deal probability calculation',
      'Pipeline optimization',
      'Performance analytics',
      'Territory planning',
      'Commission tracking',
      'CRM integration'
    ],
    pricing: { monthly: 79, yearly: 790, setup: 149 },
    category: 'Sales',
    icon: '📈'
  },

  // Security & Compliance
  {
    id: 'ai-security-monitor',
    name: 'AI Security Monitor',
    description: 'Protect your business with AI-powered threat detection and security monitoring.',
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
    pricing: { monthly: 129, yearly: 1290, setup: 299 },
    category: 'Security',
    icon: '🔒'
  },

  // HR & Recruitment
  {
    id: 'ai-recruitment-assistant',
    name: 'AI Recruitment Assistant',
    description: 'Streamline your hiring process with AI-powered candidate screening and interview scheduling.',
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
    pricing: { monthly: 99, yearly: 990, setup: 199 },
    category: 'HR',
    icon: '👔'
  },

  // Financial Tools
  {
    id: 'ai-expense-tracker',
    name: 'AI Expense Tracker',
    description: 'Automate expense tracking and financial reporting with AI-powered categorization and insights.',
    features: [
      'Receipt scanning',
      'Automatic categorization',
      'Expense approval workflows',
      'Budget monitoring',
      'Tax preparation',
      'Multi-currency support',
      'Team management',
      'Financial reporting'
    ],
    pricing: { monthly: 49, yearly: 490, setup: 0 },
    category: 'Finance',
    icon: '💰'
  },

  // Development Tools
  {
    id: 'ai-code-assistant',
    name: 'AI Code Assistant',
    description: 'Accelerate development with AI-powered code generation, review, and optimization.',
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
    icon: '💻'
  },

  // Coming Soon Services
  {
    id: 'ai-voice-assistant',
    name: 'AI Voice Assistant Builder',
    description: 'Create custom voice assistants for your business with natural language processing.',
    features: [
      'Custom voice training',
      'Multi-language support',
      'Integration APIs',
      'Analytics dashboard',
      'Custom wake words',
      'Offline capabilities',
      'Team management',
      'White-label options'
    ],
    pricing: { monthly: 149, yearly: 1490, setup: 299 },
    category: 'AI Tools',
    icon: '🎙️',
    comingSoon: true
  },
  {
    id: 'ai-video-generator',
    name: 'AI Video Generator',
    description: 'Create professional videos from text prompts with AI-powered video generation.',
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
    category: 'AI Tools',
    icon: '🎬',
    comingSoon: true
  }
];

const categories = [
  'All',
  'AI Tools',
  'Automation',
  'Marketing',
  'Analytics',
  'Productivity',
  'E-commerce',
  'Sales',
  'Security',
  'HR',
  'Finance',
  'Development'
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
=======
import React, { useState } from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Brain, Cloud, Shield, Code, BarChart, Users, Award, Target, Star, ArrowRight, Sparkles, Cpu, Database, Smartphone, Lock, Zap, Globe, Calendar, FileText, Settings, CheckSquare, MessageSquare, Building, Clock, Send, DollarSign, Rocket, Shield as ShieldIcon, Users as UsersIcon, TrendingUp as TrendingUpIcon, Star as StarIcon, Award as AwardIcon, Target as TargetIcon, Brain as BrainIcon, Cloud as CloudIcon, Code as CodeIcon, BarChart as BarChartIcon, Users as UsersIcon2, Zap as ZapIcon, Globe as GlobeIcon, Database as DatabaseIcon, Smartphone as SmartphoneIcon, Lock as LockIcon, Settings as SettingsIcon, CheckSquare as CheckSquareIcon, MessageSquare as MessageSquareIcon, Building as BuildingIcon, Clock as ClockIcon, Send as SendIcon, DollarSign as DollarSignIcon, Rocket as RocketIcon } from 'lucide-react';

export default function MicroSaasPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const microSaasServices = [
    {
      category: 'AI-Powered Business Tools',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'AI Project Manager Pro',
          description: 'Intelligent project management with predictive analytics and automated resource allocation',
          features: ['Smart Task Assignment', 'Risk Prediction', 'Resource Optimization', 'Progress Tracking', 'Team Collaboration'],
          pricing: '$299/month',
          trial: '14-day free trial',
          roi: '300% ROI in 6 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-project-manager'
        },
        {
          name: 'AI Social Media Manager',
          description: 'Automated social media content creation, scheduling, and engagement optimization',
          features: ['Content Generation', 'Post Scheduling', 'Engagement Analytics', 'Hashtag Optimization', 'Multi-platform Management'],
          pricing: '$199/month',
          trial: '7-day free trial',
          roi: '250% ROI in 3 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-social-media-manager'
        },
        {
          name: 'AI Analytics Dashboard',
          description: 'Real-time business intelligence with predictive insights and automated reporting',
          features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Automated Reports', 'Data Visualization'],
          pricing: '$399/month',
          trial: '14-day free trial',
          roi: '400% ROI in 4 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-analytics-dashboard'
        },
        {
          name: 'AI Email Marketing Suite',
          description: 'Intelligent email campaigns with personalization and automated A/B testing',
          features: ['Smart Personalization', 'A/B Testing', 'Send Time Optimization', 'Performance Analytics', 'List Segmentation'],
          pricing: '$149/month',
          trial: '7-day free trial',
          roi: '200% ROI in 2 months',
          popular: false,
          link: 'https://ziontechgroup.com/ai-email-marketing'
        }
      ]
    },
    {
      category: 'Customer Experience Solutions',
      icon: Users,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      services: [
        {
          name: 'AI Customer Support Bot',
          description: '24/7 intelligent customer support with natural language processing and escalation management',
          features: ['24/7 Availability', 'Multi-language Support', 'Sentiment Analysis', 'Escalation Management', 'Knowledge Base Integration'],
          pricing: '$249/month',
          trial: '14-day free trial',
          roi: '350% ROI in 5 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-customer-support-bot'
        },
        {
          name: 'AI Lead Generation Engine',
          description: 'Automated lead identification, qualification, and nurturing with AI-powered scoring',
          features: ['Lead Scoring', 'Automated Outreach', 'Qualification Logic', 'CRM Integration', 'Performance Tracking'],
          pricing: '$349/month',
          trial: '14-day free trial',
          roi: '450% ROI in 6 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-lead-generation'
        },
        {
          name: 'AI Chatbot Builder',
          description: 'No-code chatbot creation platform with advanced conversation flows and integrations',
          features: ['Drag & Drop Builder', 'Multi-channel Deployment', 'Analytics Dashboard', 'Integration APIs', 'Custom Templates'],
          pricing: '$99/month',
          trial: '7-day free trial',
          roi: '150% ROI in 2 months',
          popular: false,
          link: 'https://ziontechgroup.com/ai-chatbot-builder'
        }
      ]
    },
    {
      category: 'Content & Marketing Automation',
      icon: FileText,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: 'AI Content Studio',
          description: 'Complete content creation suite with AI writing, editing, and optimization tools',
          features: ['AI Writing Assistant', 'Content Optimization', 'SEO Analysis', 'Brand Voice Training', 'Multi-format Support'],
          pricing: '$179/month',
          trial: '7-day free trial',
          roi: '200% ROI in 3 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-content-studio'
        },
        {
          name: 'AI SEO Optimizer',
          description: 'Automated SEO analysis, keyword research, and content optimization recommendations',
          features: ['Keyword Research', 'Content Analysis', 'Technical SEO', 'Competitor Analysis', 'Rank Tracking'],
          pricing: '$129/month',
          trial: '7-day free trial',
          roi: '180% ROI in 4 months',
          popular: false,
          link: 'https://ziontechgroup.com/ai-seo-optimizer'
        },
        {
          name: 'AI Social Media Analytics',
          description: 'Advanced social media performance tracking with sentiment analysis and trend prediction',
          features: ['Performance Tracking', 'Sentiment Analysis', 'Trend Prediction', 'Competitor Analysis', 'ROI Measurement'],
          pricing: '$159/month',
          trial: '7-day free trial',
          roi: '220% ROI in 3 months',
          popular: false,
          link: 'https://ziontechgroup.com/ai-social-media-analytics'
        }
      ]
    },
    {
      category: 'Financial & Business Intelligence',
      icon: BarChart,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      services: [
        {
          name: 'AI Invoice Generator',
          description: 'Automated invoice creation, tracking, and payment processing with smart reminders',
          features: ['Auto Invoice Generation', 'Payment Tracking', 'Smart Reminders', 'Multi-currency Support', 'Integration APIs'],
          pricing: '$79/month',
          trial: '7-day free trial',
          roi: '120% ROI in 2 months',
          popular: false,
          link: 'https://ziontechgroup.com/ai-invoice-generator'
        },
        {
          name: 'AI Expense Tracker',
          description: 'Intelligent expense categorization, receipt scanning, and budget management',
          features: ['Receipt Scanning', 'Auto Categorization', 'Budget Alerts', 'Tax Preparation', 'Mobile App'],
          pricing: '$59/month',
          trial: '7-day free trial',
          roi: '100% ROI in 1 month',
          popular: false,
          link: 'https://ziontechgroup.com/ai-expense-tracker'
        },
        {
          name: 'AI Financial Advisor',
          description: 'Personalized financial planning and investment recommendations based on AI analysis',
          features: ['Portfolio Analysis', 'Risk Assessment', 'Investment Recommendations', 'Goal Tracking', 'Market Insights'],
          pricing: '$199/month',
          trial: '14-day free trial',
          roi: '300% ROI in 6 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-financial-advisor'
        }
      ]
    },
    {
      category: 'Productivity & Workflow Tools',
      icon: Zap,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      services: [
        {
          name: 'AI Scheduler Pro',
          description: 'Intelligent meeting scheduling with conflict resolution and time zone management',
          features: ['Smart Scheduling', 'Conflict Resolution', 'Time Zone Management', 'Calendar Integration', 'Meeting Analytics'],
          pricing: '$89/month',
          trial: '7-day free trial',
          roi: '140% ROI in 2 months',
          popular: false,
          link: 'https://ziontechgroup.com/ai-scheduler'
        },
        {
          name: 'AI Password Manager',
          description: 'Secure password management with AI-powered security recommendations and breach monitoring',
          features: ['Secure Storage', 'Password Generation', 'Breach Monitoring', 'Multi-device Sync', 'Security Alerts'],
          pricing: '$39/month',
          trial: '7-day free trial',
          roi: '80% ROI in 1 month',
          popular: false,
          link: 'https://ziontechgroup.com/ai-password-manager'
        },
        {
          name: 'AI Workflow Automation',
          description: 'Visual workflow builder with AI-powered process optimization and integration capabilities',
          features: ['Visual Builder', 'Process Optimization', 'Integration Library', 'Performance Analytics', 'Custom Triggers'],
          pricing: '$299/month',
          trial: '14-day free trial',
          roi: '400% ROI in 5 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-workflow-automation'
        }
      ]
    }
  ];

<<<<<<< HEAD
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-804c

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Powerful AI-driven tools for modern businesses
=======
  const categories = ['All', 'Productivity', 'Creative', 'Security', 'Health', 'IoT', 'Finance', 'Education'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <ScrollToTop />
      
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, affordable AI-driven tools for modern businesses. 
              Choose from our comprehensive suite of specialized applications designed to boost productivity and efficiency.
>>>>>>> cursor/fix-errors-and-merge-to-main-e12a
            </p>
          </div>
<<<<<<< HEAD
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${
                    service.popular ? 'ring-2 ring-cyan-400' : ''
                  } ${service.comingSoon ? 'opacity-75' : ''}`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  {service.comingSoon && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2 neon-text">{service.name}</h3>
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
                          <span className="text-cyan-400 mr-2">✓</span>
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
                      {service.pricing.setup && service.pricing.setup > 0 && (
                        <div className="text-sm text-gray-400 mt-1">
                          + {formatPrice(service.pricing.setup)} setup fee
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <a
                        href={`/contact?service=${service.id}`}
                        className="w-full bg-cyan-400 text-slate-900 py-3 px-4 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300 text-center block"
                      >
                        Get Started
                      </a>
                      <a
                        href={`/micro-saas/${service.id}`}
                        className="w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center block"
                      >
                        Learn More
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
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
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
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-804c
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Don't see what you're looking for? We can create a custom micro SAAS solution tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-cyan-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Request Custom Solution
              </a>
            </div>
          </div>
        </section>
      </main>
=======
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === category.toLowerCase()
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
              onClick={() => setActiveTab(category.toLowerCase())}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {microSaasServices
            .filter(service => activeTab === 'all' || service.category.toLowerCase() === activeTab)
            .map((service) => (
            <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{service.icon}</div>
                {service.popular && (
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="mb-6">
                <div className="text-3xl font-bold text-white mb-1">${service.pricing.monthly}</div>
                <div className="text-sm text-gray-400">per month</div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 group-hover:shadow-lg">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e12a

      <Footer />
    </div>
  );
}
<<<<<<< HEAD
=======
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

      {/* Micro SAAS Services */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive micro SAAS solutions designed to solve real business challenges
            </p>
          </div>
          <div className="space-y-16">
            {microSaasServices.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 relative">
                      {service.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="space-y-3 mb-6">
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Pricing:</span>
                          <span className="text-sm font-medium text-white">{service.pricing}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Trial:</span>
                          <span className="text-sm font-medium text-cyan-400">{service.trial}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Expected ROI:</span>
                          <span className="text-sm font-medium text-green-400">{service.roi}</span>
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
      <section className="py-20 bg-slate-800/50">
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
    </div>
  );
}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-804c
=======

export default MicroSaasPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-e12a
