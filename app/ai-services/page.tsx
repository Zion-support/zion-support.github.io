'use client';
import React, { useState } from 'react';
import { 
  Brain, 
  Zap, 
  BarChart, 
  Users, 
  Mail, 
  Calendar, 
  FileText, 
  Code, 
  Camera, 
  ShoppingCart, 
  Shield, 
  Globe, 
  Smartphone, 
  Database, 
  Settings, 
  TrendingUp, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Download,
  ExternalLink,
  DollarSign,
  Clock,
  Target,
  Lightbulb,
  Wrench,
  Palette,
  Search,
  MessageSquare,
  BookOpen,
  PieChart,
  Layers,
  Cpu,
  Cloud,
  Lock,
  Eye,
  Edit3,
  Send,
  Filter,
  RefreshCw,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  Mic,
  Share2,
  Bug,
  Activity,
  Grid,
  Award,
  Rocket,
  Sparkles
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All AI Services', icon: Grid, count: 25 },
    { id: 'content', name: 'Content & Writing', icon: Edit3, count: 8 },
    { id: 'marketing', name: 'Marketing & Sales', icon: Target, count: 6 },
    { id: 'analytics', name: 'Analytics & Insights', icon: BarChart, count: 4 },
    { id: 'automation', name: 'Automation', icon: Zap, count: 7 }
  ];

  const aiServices = [
    // Content & Writing
    {
      id: 'ai-writing-assistant',
      name: 'AI Writing Assistant',
      description: 'Advanced AI-powered writing tool for content creation, grammar checking, and SEO optimization',
      category: 'content',
      price: 29,
      priceType: 'month',
      features: ['Content Generation', 'Grammar Check', 'SEO Optimization', 'Multi-language', 'Tone Adjustment'],
      icon: Edit3,
      color: 'from-purple-500 to-pink-500',
      popularity: 95,
      rating: 4.8,
      users: 12500,
      status: 'live',
      demoUrl: '/ai-writing-assistant',
      tags: ['AI', 'Content', 'Writing', 'SEO', 'Marketing']
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      description: 'Generate high-quality content for blogs, social media, and marketing campaigns',
      category: 'content',
      price: 39,
      priceType: 'month',
      features: ['Blog Posts', 'Social Media', 'Email Campaigns', 'Product Descriptions', 'Templates'],
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      popularity: 92,
      rating: 4.7,
      users: 9800,
      status: 'live',
      demoUrl: '/ai-content-generation',
      tags: ['AI', 'Content', 'Generation', 'Marketing']
    },
    {
      id: 'ai-translator',
      name: 'AI Translator',
      description: 'Real-time translation service supporting 100+ languages with context awareness',
      category: 'content',
      price: 24,
      priceType: 'month',
      features: ['100+ Languages', 'Context Awareness', 'Real-time Translation', 'Document Support', 'API Access'],
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      popularity: 88,
      rating: 4.6,
      users: 15600,
      status: 'live',
      demoUrl: '/ai-translator',
      tags: ['AI', 'Translation', 'Languages', 'Global']
    },
    {
      id: 'ai-voice-cloner',
      name: 'AI Voice Cloner',
      description: 'Clone voices with 30 seconds of audio for voiceovers and personalized content',
      category: 'content',
      price: 59,
      priceType: 'month',
      features: ['Voice Cloning', 'Multiple Languages', 'Emotion Control', 'High Quality', 'Commercial License'],
      icon: Mic,
      color: 'from-orange-500 to-red-500',
      popularity: 85,
      rating: 4.5,
      users: 7200,
      status: 'live',
      demoUrl: '/ai-voice-cloner',
      tags: ['AI', 'Voice', 'Audio', 'Content Creation']
    },
    {
      id: 'ai-image-generator',
      name: 'AI Image Generator',
      description: 'Create stunning images, logos, and graphics using advanced AI models',
      category: 'content',
      price: 39,
      priceType: 'month',
      features: ['Multiple AI Models', 'High Resolution', 'Style Transfer', 'Batch Processing', 'Commercial License'],
      icon: Camera,
      color: 'from-pink-500 to-rose-500',
      popularity: 90,
      rating: 4.7,
      users: 18200,
      status: 'live',
      demoUrl: '/ai-image-generator',
      tags: ['AI', 'Images', 'Design', 'Graphics', 'Marketing']
    },
    {
      id: 'ai-video-editor',
      name: 'AI Video Editor',
      description: 'Automated video editing with AI-powered scene detection and optimization',
      category: 'content',
      price: 69,
      priceType: 'month',
      features: ['Auto Editing', 'Scene Detection', 'Color Correction', 'Audio Sync', 'Templates'],
      icon: Play,
      color: 'from-indigo-500 to-purple-500',
      popularity: 87,
      rating: 4.6,
      users: 11200,
      status: 'live',
      demoUrl: '/ai-video-editor',
      tags: ['AI', 'Video', 'Editing', 'Automation']
    },
    {
      id: 'ai-podcast-generator',
      name: 'AI Podcast Generator',
      description: 'Generate podcast episodes from text with natural-sounding voices and music',
      category: 'content',
      price: 49,
      priceType: 'month',
      features: ['Text to Speech', 'Music Integration', 'Multiple Voices', 'Episode Templates', 'Distribution'],
      icon: Mic,
      color: 'from-teal-500 to-blue-500',
      popularity: 82,
      rating: 4.4,
      users: 6400,
      status: 'live',
      demoUrl: '/ai-podcast-generator',
      tags: ['AI', 'Podcast', 'Audio', 'Content']
    },
    {
      id: 'ai-newsletter-writer',
      name: 'AI Newsletter Writer',
      description: 'Automated newsletter creation with personalized content and scheduling',
      category: 'content',
      price: 34,
      priceType: 'month',
      features: ['Auto Content', 'Personalization', 'Scheduling', 'Analytics', 'Templates'],
      icon: Mail,
      color: 'from-yellow-500 to-orange-500',
      popularity: 84,
      rating: 4.5,
      users: 8900,
      status: 'live',
      demoUrl: '/ai-newsletter-writer',
      tags: ['AI', 'Newsletter', 'Email', 'Marketing']
    },

    // Marketing & Sales
    {
      id: 'ai-marketing',
      name: 'AI Marketing Automation',
      description: 'Comprehensive marketing automation with AI-powered campaign optimization',
      category: 'marketing',
      price: 79,
      priceType: 'month',
      features: ['Campaign Automation', 'A/B Testing', 'Audience Segmentation', 'Performance Analytics', 'ROI Tracking'],
      icon: Target,
      color: 'from-red-500 to-pink-500',
      popularity: 93,
      rating: 4.7,
      users: 16800,
      status: 'live',
      demoUrl: '/ai-marketing',
      tags: ['AI', 'Marketing', 'Automation', 'Campaigns']
    },
    {
      id: 'ai-lead-generation',
      name: 'AI Lead Generation',
      description: 'Intelligent lead identification and qualification using AI and machine learning',
      category: 'marketing',
      price: 59,
      priceType: 'month',
      features: ['Lead Scoring', 'Qualification', 'Contact Discovery', 'Intent Analysis', 'CRM Integration'],
      icon: Users,
      color: 'from-cyan-500 to-blue-500',
      popularity: 89,
      rating: 4.6,
      users: 12400,
      status: 'live',
      demoUrl: '/ai-lead-generation',
      tags: ['AI', 'Leads', 'Sales', 'Marketing']
    },
    {
      id: 'ai-sales-automation',
      name: 'AI Sales Automation',
      description: 'Automate sales processes with AI-powered follow-ups and personalized outreach',
      category: 'marketing',
      price: 69,
      priceType: 'month',
      features: ['Auto Follow-ups', 'Personalization', 'Pipeline Management', 'Performance Tracking', 'Integration'],
      icon: TrendingUp,
      color: 'from-emerald-500 to-green-500',
      popularity: 86,
      rating: 4.5,
      users: 10200,
      status: 'live',
      demoUrl: '/ai-sales-automation',
      tags: ['AI', 'Sales', 'Automation', 'CRM']
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support',
      description: 'Intelligent chatbot and support automation for 24/7 customer service',
      category: 'marketing',
      price: 49,
      priceType: 'month',
      features: ['Chatbot Builder', 'Multi-channel', 'Sentiment Analysis', 'Escalation', 'Analytics'],
      icon: MessageSquare,
      color: 'from-violet-500 to-purple-500',
      popularity: 91,
      rating: 4.6,
      users: 15600,
      status: 'live',
      demoUrl: '/ai-customer-support',
      tags: ['AI', 'Support', 'Chatbot', 'Customer Service']
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automated social media management with content creation and scheduling',
      category: 'marketing',
      price: 45,
      priceType: 'month',
      features: ['Content Creation', 'Auto Scheduling', 'Engagement Analysis', 'Multi-platform', 'Trending Topics'],
      icon: Share2,
      color: 'from-blue-500 to-indigo-500',
      popularity: 88,
      rating: 4.5,
      users: 14200,
      status: 'live',
      demoUrl: '/ai-social-media-manager',
      tags: ['AI', 'Social Media', 'Marketing', 'Content']
    },
    {
      id: 'ai-email-optimizer',
      name: 'AI Email Optimizer',
      description: 'Optimize email campaigns with AI-powered subject lines and content analysis',
      category: 'marketing',
      price: 34,
      priceType: 'month',
      features: ['Subject Optimization', 'Content Analysis', 'Send Time Optimization', 'A/B Testing', 'Analytics'],
      icon: Mail,
      color: 'from-pink-500 to-rose-500',
      popularity: 85,
      rating: 4.4,
      users: 11600,
      status: 'live',
      demoUrl: '/ai-email-optimizer',
      tags: ['AI', 'Email', 'Marketing', 'Optimization']
    },

    // Analytics & Insights
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics',
      description: 'Advanced data analysis with AI-powered insights and predictive modeling',
      category: 'analytics',
      price: 79,
      priceType: 'month',
      features: ['Predictive Analytics', 'Data Visualization', 'Automated Reports', 'Trend Analysis', 'Custom Dashboards'],
      icon: BarChart,
      color: 'from-purple-500 to-pink-500',
      popularity: 92,
      rating: 4.7,
      users: 15600,
      status: 'live',
      demoUrl: '/ai-data-analytics',
      tags: ['AI', 'Analytics', 'Data', 'Insights']
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Comprehensive BI platform with AI-powered insights and automated reporting',
      category: 'analytics',
      price: 99,
      priceType: 'month',
      features: ['Advanced Analytics', 'Predictive Insights', 'Custom Dashboards', 'Data Visualization', 'Real-time Reports'],
      icon: PieChart,
      color: 'from-indigo-500 to-purple-500',
      popularity: 90,
      rating: 4.6,
      users: 12800,
      status: 'live',
      demoUrl: '/ai-business-intelligence',
      tags: ['AI', 'Business Intelligence', 'Analytics', 'Data']
    },
    {
      id: 'ai-predictive-analytics',
      name: 'AI Predictive Analytics',
      description: 'Predict future trends and outcomes with advanced machine learning models',
      category: 'analytics',
      price: 89,
      priceType: 'month',
      features: ['Trend Prediction', 'Risk Analysis', 'Forecasting', 'Model Training', 'Custom Algorithms'],
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      popularity: 87,
      rating: 4.5,
      users: 9800,
      status: 'live',
      demoUrl: '/ai-predictive-analytics',
      tags: ['AI', 'Predictive', 'Analytics', 'Machine Learning']
    },
    {
      id: 'ai-sentiment-analysis',
      name: 'AI Sentiment Analysis',
      description: 'Analyze customer sentiment across social media and reviews in real-time',
      category: 'analytics',
      price: 44,
      priceType: 'month',
      features: ['Real-time Analysis', 'Multi-platform', 'Emotion Detection', 'Trend Tracking', 'Alert System'],
      icon: Eye,
      color: 'from-orange-500 to-red-500',
      popularity: 83,
      rating: 4.4,
      users: 7200,
      status: 'live',
      demoUrl: '/ai-sentiment-analysis',
      tags: ['AI', 'Sentiment', 'Analysis', 'Social Media']
    },

    // Automation
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent workflow automation with AI-powered decision making and optimization',
      category: 'automation',
      price: 69,
      priceType: 'month',
      features: ['Process Automation', 'AI Decision Making', 'Integration', 'Monitoring', 'Optimization'],
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      popularity: 91,
      rating: 4.6,
      users: 13400,
      status: 'live',
      demoUrl: '/ai-workflow-automation',
      tags: ['AI', 'Automation', 'Workflow', 'Process']
    },
    {
      id: 'ai-document-processing',
      name: 'AI Document Processing',
      description: 'Automated document processing with OCR, classification, and data extraction',
      category: 'automation',
      price: 54,
      priceType: 'month',
      features: ['OCR Processing', 'Document Classification', 'Data Extraction', 'Form Processing', 'Batch Processing'],
      icon: FileText,
      color: 'from-slate-500 to-gray-500',
      popularity: 86,
      rating: 4.5,
      users: 10200,
      status: 'live',
      demoUrl: '/ai-document-processing',
      tags: ['AI', 'Documents', 'OCR', 'Automation']
    },
    {
      id: 'ai-email-assistant',
      name: 'AI Email Assistant',
      description: 'Intelligent email management with auto-responses, categorization, and scheduling',
      category: 'automation',
      price: 29,
      priceType: 'month',
      features: ['Auto Responses', 'Email Categorization', 'Smart Scheduling', 'Priority Detection', 'Integration'],
      icon: Mail,
      color: 'from-blue-500 to-cyan-500',
      popularity: 88,
      rating: 4.5,
      users: 16800,
      status: 'live',
      demoUrl: '/ai-email-assistant',
      tags: ['AI', 'Email', 'Automation', 'Productivity']
    },
    {
      id: 'ai-scheduler',
      name: 'AI Scheduler',
      description: 'Intelligent scheduling with automatic meeting optimization and conflict resolution',
      category: 'automation',
      price: 24,
      priceType: 'month',
      features: ['Auto Scheduling', 'Conflict Resolution', 'Calendar Sync', 'Time Optimization', 'Team Coordination'],
      icon: Calendar,
      color: 'from-teal-500 to-blue-500',
      popularity: 89,
      rating: 4.6,
      users: 11200,
      status: 'live',
      demoUrl: '/ai-scheduler',
      tags: ['AI', 'Scheduling', 'Calendar', 'Automation']
    },
    {
      id: 'ai-task-manager',
      name: 'AI Task Manager',
      description: 'Smart task management with AI-powered prioritization and automated workflows',
      category: 'automation',
      price: 34,
      priceType: 'month',
      features: ['AI Prioritization', 'Auto Workflows', 'Progress Tracking', 'Team Collaboration', 'Integration'],
      icon: CheckCircle,
      color: 'from-emerald-500 to-green-500',
      popularity: 87,
      rating: 4.5,
      users: 9800,
      status: 'live',
      demoUrl: '/ai-task-manager',
      tags: ['AI', 'Tasks', 'Productivity', 'Automation']
    },
    {
      id: 'ai-code-assistant',
      name: 'AI Code Assistant',
      description: 'Intelligent coding assistant with code generation, debugging, and optimization',
      category: 'automation',
      price: 79,
      priceType: 'month',
      features: ['Code Generation', 'Bug Detection', 'Code Review', 'Documentation', 'Multi-language'],
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      popularity: 90,
      rating: 4.7,
      users: 18200,
      status: 'live',
      demoUrl: '/ai-code-assistant',
      tags: ['AI', 'Development', 'Coding', 'Programming']
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity',
      description: 'Advanced threat detection and security automation with AI-powered monitoring',
      category: 'automation',
      price: 99,
      priceType: 'month',
      features: ['Threat Detection', 'Anomaly Detection', 'Auto Response', 'Security Monitoring', 'Compliance'],
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      popularity: 94,
      rating: 4.8,
      users: 14600,
      status: 'live',
      demoUrl: '/ai-cybersecurity',
      tags: ['AI', 'Security', 'Cybersecurity', 'Threat Detection']
    }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { label: 'AI Services', value: '25+', icon: Brain },
    { label: 'Active Users', value: '50K+', icon: Users },
    { label: 'Success Rate', value: '99.9%', icon: CheckCircle },
    { label: 'Uptime', value: '99.9%', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white neon-text">AI Services</h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI-powered services. 
              From content creation to advanced analytics, we provide cutting-edge AI solutions 
              that drive real results and measurable ROI.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-slate-800/50 rounded-xl p-6 mb-8 backdrop-blur-sm border border-purple-500/20">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300 ml-1">{service.rating}</span>
                  </div>
                  <span className="text-xs text-gray-500">({service.users.toLocaleString()})</span>
                </div>
              </div>

              {/* Service Info */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 3 && (
                    <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs rounded">
                      +{service.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold text-white">${service.price}</span>
                  <span className="text-gray-400 text-sm">/{service.priceType}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">Popularity</span>
                  <div className="w-16 bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
                      style={{ width: `${service.popularity}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {service.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <a
                  href={service.demoUrl}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Try Demo
                </a>
                <a
                  href="/contact"
                  className="px-4 py-2 border border-purple-500 text-purple-400 rounded-lg text-sm font-medium hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Status */}
              <div className="mt-3 flex items-center justify-between text-xs">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-2 bg-green-400"></div>
                  <span className="text-gray-400 capitalize">{service.status}</span>
                </div>
                <span className="text-gray-500">Live Service</span>
              </div>
            </div>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            Showing {filteredServices.length} of {aiServices.length} AI services
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-t border-purple-500/20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our AI services today and transform your business operations. 
              All services come with free trials and comprehensive support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-8 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Free
              </a>
              <a
                href="tel:+13024640950"
                className="border border-purple-500 text-purple-400 py-3 px-8 rounded-lg font-medium hover:bg-purple-500/10 transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;