'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Search, 
  Filter,
  Star,
  Users,
  Clock,
  Shield,
  TrendingUp,
  Brain,
  Cloud,
  Smartphone,
  BarChart3,
  Mail,
  MessageSquare,
  FileText,
  Image,
  Video,
  Code,
  Database,
  Globe,
  Lock,
  Target,
  Lightbulb,
  Rocket,
  Settings,
  PieChart,
  Calendar,
  CreditCard,
  Headphones,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  Menu,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Phone,
  Mail as MailIcon,
  MapPin,
  Clock as ClockIcon
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts = [
    // AI & Machine Learning Tools
    {
      icon: Brain,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with 50+ templates, SEO optimization, and multi-language support',
      features: ['50+ Content Templates', 'SEO Optimization', 'Multi-language Support', 'Brand Voice Training', 'Plagiarism Checker', 'Social Media Integration'],
      price: '$49/month',
      users: 'Up to 5 users',
      category: 'AI & ML',
      popular: true,
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-content-generator'
    },
    {
      icon: BarChart3,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics, custom dashboards, and automated reporting',
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Mobile App', 'API Integration', 'Data Visualization'],
      price: '$99/month',
      users: 'Up to 50 users',
      category: 'AI & ML',
      popular: true,
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/ai-analytics'
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation with no coding required',
      features: ['No-Code Builder', 'Multi-channel Support', 'Natural Language Processing', 'Analytics Dashboard', 'Integration APIs', 'Custom Training'],
      price: '$79/month',
      users: 'Unlimited',
      category: 'AI & ML',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-chatbot'
    },
    {
      icon: Target,
      title: 'AI Lead Scoring Engine',
      description: 'Intelligent lead qualification and scoring with automated follow-up sequences and CRM integration',
      features: ['Lead Scoring Algorithm', 'Automated Follow-ups', 'CRM Integration', 'Behavioral Tracking', 'Conversion Analytics', 'A/B Testing'],
      price: '$129/month',
      users: 'Up to 100 users',
      category: 'AI & ML',
      trial: '21-day free trial',
      link: 'https://ziontechgroup.com/ai-lead-scoring'
    },
    {
      icon: Image,
      title: 'AI Image Generator',
      description: 'Create stunning images, logos, and graphics with AI-powered design tools and brand consistency',
      features: ['AI Image Generation', 'Brand Consistency', 'Multiple Formats', 'Batch Processing', 'Style Transfer', 'Commercial License'],
      price: '$39/month',
      users: 'Up to 10 users',
      category: 'AI & ML',
      trial: '7-day free trial',
      link: 'https://ziontechgroup.com/ai-image-generator'
    },
    {
      icon: Video,
      title: 'AI Video Creator',
      description: 'Automated video creation with AI voiceovers, templates, and social media optimization',
      features: ['AI Voiceovers', 'Video Templates', 'Social Media Optimization', 'Auto-captions', 'Brand Kit', 'Analytics'],
      price: '$89/month',
      users: 'Up to 5 users',
      category: 'AI & ML',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-video-creator'
    },

    // Business & Productivity Tools
    {
      icon: Users,
      title: 'Smart CRM Pro',
      description: 'Intelligent customer relationship management with AI insights, automation, and advanced analytics',
      features: ['AI Lead Scoring', 'Email Automation', 'Sales Forecasting', 'Pipeline Management', 'Integration Hub', 'Mobile App'],
      price: '$149/month',
      users: 'Up to 100 users',
      category: 'Business',
      popular: true,
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/smart-crm'
    },
    {
      icon: Calendar,
      title: 'AI Scheduler Pro',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and time zone management',
      features: ['Smart Scheduling', 'Calendar Sync', 'Time Zone Management', 'Meeting Analytics', 'Team Coordination', 'Mobile App'],
      price: '$29/month',
      users: 'Up to 25 users',
      category: 'Business',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-scheduler'
    },
    {
      icon: FileText,
      title: 'Document AI Processor',
      description: 'Automated document processing with OCR, data extraction, and intelligent categorization',
      features: ['OCR Technology', 'Data Extraction', 'Smart Categorization', 'Batch Processing', 'API Integration', 'Compliance Tools'],
      price: '$59/month',
      users: 'Up to 20 users',
      category: 'Business',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/document-ai'
    },
    {
      icon: CreditCard,
      title: 'Expense Tracker AI',
      description: 'AI-powered expense management with receipt scanning, categorization, and budget insights',
      features: ['Receipt Scanning', 'Auto-categorization', 'Budget Tracking', 'Expense Reports', 'Tax Preparation', 'Mobile App'],
      price: '$19/month',
      users: 'Up to 10 users',
      category: 'Business',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/expense-tracker'
    },
    {
      icon: PieChart,
      title: 'Business Intelligence Suite',
      description: 'Comprehensive BI solution with data visualization, reporting, and predictive analytics',
      features: ['Data Visualization', 'Custom Reports', 'Predictive Analytics', 'Real-time Dashboards', 'Data Integration', 'Mobile Access'],
      price: '$199/month',
      users: 'Up to 50 users',
      category: 'Business',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/business-intelligence'
    },
    {
      icon: Mail,
      title: 'Email Marketing AI',
      description: 'AI-powered email marketing with personalization, automation, and advanced analytics',
      features: ['AI Personalization', 'Email Automation', 'A/B Testing', 'Analytics Dashboard', 'Template Library', 'List Management'],
      price: '$79/month',
      users: 'Up to 25 users',
      category: 'Business',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/email-marketing-ai'
    },

    // Development & Technical Tools
    {
      icon: Code,
      title: 'AI Code Assistant',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages',
      features: ['Code Completion', 'Bug Detection', 'Code Optimization', 'Multi-language Support', 'IDE Integration', 'Learning Mode'],
      price: '$39/month',
      users: 'Up to 10 users',
      category: 'Development',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-code-assistant'
    },
    {
      icon: Database,
      title: 'Database Optimizer Pro',
      description: 'AI-powered database performance optimization and monitoring with automated tuning',
      features: ['Performance Monitoring', 'Auto-tuning', 'Query Optimization', 'Index Recommendations', 'Alert System', 'Reporting'],
      price: '$99/month',
      users: 'Up to 5 databases',
      category: 'Development',
      trial: '21-day free trial',
      link: 'https://ziontechgroup.com/database-optimizer'
    },
    {
      icon: Globe,
      title: 'API Management Suite',
      description: 'Comprehensive API management with monitoring, analytics, and security features',
      features: ['API Gateway', 'Rate Limiting', 'Analytics Dashboard', 'Security Controls', 'Documentation', 'Testing Tools'],
      price: '$149/month',
      users: 'Up to 100 APIs',
      category: 'Development',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/api-management'
    },
    {
      icon: Settings,
      title: 'DevOps Automation Hub',
      description: 'Automated CI/CD pipelines with monitoring, testing, and deployment optimization',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Deployment Automation', 'Monitoring', 'Rollback Capabilities', 'Team Collaboration'],
      price: '$199/month',
      users: 'Up to 25 users',
      category: 'Development',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/devops-automation'
    },

    // Marketing & Sales Tools
    {
      icon: TrendingUp,
      title: 'SEO Optimizer Pro',
      description: 'AI-powered SEO analysis and optimization with keyword research and content suggestions',
      features: ['Keyword Research', 'Content Analysis', 'Ranking Tracking', 'Competitor Analysis', 'Technical SEO', 'Reporting'],
      price: '$69/month',
      users: 'Up to 5 websites',
      category: 'Marketing',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/seo-optimizer'
    },
    {
      icon: Smartphone,
      title: 'Social Media Manager AI',
      description: 'AI-driven social media management with content creation, scheduling, and performance analytics',
      features: ['Content Creation', 'Auto-scheduling', 'Performance Analytics', 'Hashtag Optimization', 'Multi-platform', 'Engagement Tracking'],
      price: '$89/month',
      users: 'Up to 10 accounts',
      category: 'Marketing',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/social-media-ai'
    },
    {
      icon: Eye,
      title: 'Ad Campaign Optimizer',
      description: 'AI-powered ad campaign management with optimization across Google, Facebook, and LinkedIn',
      features: ['Multi-platform Ads', 'AI Optimization', 'A/B Testing', 'Budget Management', 'Performance Analytics', 'ROI Tracking'],
      price: '$129/month',
      users: 'Up to 20 campaigns',
      category: 'Marketing',
      trial: '21-day free trial',
      link: 'https://ziontechgroup.com/ad-optimizer'
    },
    {
      icon: Target,
      title: 'Lead Generation Engine',
      description: 'Automated lead generation with AI prospecting, email sequences, and CRM integration',
      features: ['AI Prospecting', 'Email Sequences', 'Lead Scoring', 'CRM Integration', 'Analytics Dashboard', 'A/B Testing'],
      price: '$159/month',
      users: 'Up to 50 users',
      category: 'Marketing',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/lead-generation'
    },

    // Security & Compliance Tools
    {
      icon: Shield,
      title: 'Security Monitor Pro',
      description: 'Comprehensive security monitoring with threat detection and automated response',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Compliance Reporting', '24/7 Monitoring', 'Incident Response', 'Security Analytics'],
      price: '$199/month',
      users: 'Up to 200 users',
      category: 'Security',
      popular: true,
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/security-monitor'
    },
    {
      icon: Lock,
      title: 'Compliance Manager',
      description: 'Automated compliance management with monitoring, reporting, and audit trail features',
      features: ['Compliance Monitoring', 'Audit Trails', 'Automated Reporting', 'Risk Assessment', 'Policy Management', 'Training Modules'],
      price: '$149/month',
      users: 'Up to 100 users',
      category: 'Security',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/compliance-manager'
    },
    {
      icon: Headphones,
      title: 'Customer Support AI',
      description: 'AI-powered customer support with chatbots, ticket routing, and knowledge base management',
      features: ['AI Chatbots', 'Ticket Routing', 'Knowledge Base', 'Sentiment Analysis', 'Multi-channel', 'Analytics'],
      price: '$99/month',
      users: 'Up to 50 agents',
      category: 'Security',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/customer-support-ai'
    },

    // Cloud & Infrastructure Tools
    {
      icon: Cloud,
      title: 'Cloud Cost Optimizer',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Cost Optimization', 'Resource Management', 'Multi-cloud Support', 'Auto-scaling', 'Usage Analytics', 'Budget Alerts'],
      price: '$299/month',
      users: 'Unlimited',
      category: 'Cloud',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/cloud-optimizer'
    },
    {
      icon: Database,
      title: 'Data Backup Pro',
      description: 'Automated data backup and recovery with encryption and multi-location storage',
      features: ['Automated Backups', 'Encryption', 'Multi-location Storage', 'Recovery Testing', 'Compliance', 'Monitoring'],
      price: '$79/month',
      users: 'Up to 1TB',
      category: 'Cloud',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/data-backup'
    },
    {
      icon: Globe,
      title: 'Website Performance Monitor',
      description: 'Real-time website performance monitoring with optimization recommendations and alerts',
      features: ['Performance Monitoring', 'Uptime Tracking', 'Speed Optimization', 'Alert System', 'Analytics', 'Mobile Testing'],
      price: '$49/month',
      users: 'Up to 10 websites',
      category: 'Cloud',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/website-monitor'
    }
  ];

  const categories = [
    'All',
    'AI & ML',
    'Business',
    'Development',
    'Marketing',
    'Security',
    'Cloud'
  ];

  const benefits = [
    'No upfront costs',
    'Quick deployment',
    'Scalable solutions',
    'Regular updates',
    '24/7 support',
    'Easy integration'
  ];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive collection of micro SAAS solutions. 25+ AI-powered tools for business, marketing, development, and more. Start your free trial today." />
        <meta name="keywords" content="micro saas, AI tools, business software, productivity tools, marketing automation, development tools, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              25+ AI-powered micro SAAS tools designed to transform your business operations. 
              Affordable, scalable, and ready to deploy in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SAAS solutions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Micro SAAS Solutions' : `${selectedCategory} Solutions`}
              </h2>
              <span className="text-gray-300">
                {filteredProducts.length} solution{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                  {product.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <product.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{product.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{product.price}</div>
                    <div className="text-sm text-gray-300 mb-1">{product.users}</div>
                    <div className="text-sm text-green-400 font-medium">{product.trial}</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                    >
                      Try Free
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="/contact"
                      className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300 text-center"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call: (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
