'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Zap, Star, DollarSign, Clock, Users, Shield, Globe, Code, BarChart, Brain, Mail, Calendar, FileText, Image, Video, Music, ShoppingCart, CreditCard, Smartphone, Monitor, Database, Cloud, Lock, TrendingUp, Target, Award, Lightbulb, Settings, MessageCircle, Phone, Mail as MailIcon, MapPin } from 'lucide-react'

const MicroSaaSPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai', name: 'AI-Powered', icon: Brain },
    { id: 'productivity', name: 'Productivity', icon: Target },
    { id: 'marketing', name: 'Marketing', icon: TrendingUp },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'communication', name: 'Communication', icon: MessageCircle },
    { id: 'finance', name: 'Finance', icon: DollarSign },
    { id: 'development', name: 'Development', icon: Code }
  ]

  const microSaasServices = [
    {
      id: 'ai-content-writer',
      name: 'AI Content Writer Pro',
      category: 'ai',
      description: 'Advanced AI-powered content creation platform with multi-language support and SEO optimization.',
      features: ['GPT-4 Integration', 'SEO Optimization', 'Multi-language Support', 'Brand Voice Training', 'Content Templates', 'Plagiarism Check'],
      pricing: { starter: 29, pro: 79, enterprise: 199 },
      icon: FileText,
      popular: true,
      link: '/micro-saas/ai-content-writer'
    },
    {
      id: 'analytics-dashboard',
      name: 'Smart Analytics Dashboard',
      category: 'analytics',
      description: 'Real-time business intelligence dashboard with customizable widgets and automated reporting.',
      features: ['Real-time Data', 'Custom Dashboards', 'Automated Reports', 'Data Visualization', 'API Integration', 'Mobile App'],
      pricing: { starter: 39, pro: 99, enterprise: 249 },
      icon: BarChart,
      popular: false,
      link: '/micro-saas/analytics-dashboard'
    },
    {
      id: 'appointment-scheduler',
      name: 'Smart Appointment Scheduler',
      category: 'productivity',
      description: 'Intelligent scheduling system with calendar integration and automated reminders.',
      features: ['Calendar Sync', 'Automated Reminders', 'Payment Integration', 'Multi-timezone', 'Custom Booking Forms', 'SMS/Email Notifications'],
      pricing: { starter: 19, pro: 49, enterprise: 129 },
      icon: Calendar,
      popular: true,
      link: '/micro-saas/appointment-scheduler'
    },
    {
      id: 'email-marketing',
      name: 'AI Email Marketing Suite',
      category: 'marketing',
      description: 'Intelligent email marketing platform with AI-powered subject line optimization and send time prediction.',
      features: ['AI Subject Lines', 'Send Time Optimization', 'A/B Testing', 'Email Templates', 'List Management', 'Analytics'],
      pricing: { starter: 25, pro: 65, enterprise: 159 },
      icon: Mail,
      popular: false,
      link: '/micro-saas/email-marketing'
    },
    {
      id: 'expense-tracker',
      name: 'Smart Expense Tracker',
      category: 'finance',
      description: 'AI-powered expense management with receipt scanning and automated categorization.',
      features: ['Receipt Scanning', 'AI Categorization', 'Tax Preparation', 'Multi-currency', 'Team Management', 'Reporting'],
      pricing: { starter: 15, pro: 35, enterprise: 89 },
      icon: CreditCard,
      popular: false,
      link: '/micro-saas/expense-tracker'
    },
    {
      id: 'inventory-management',
      name: 'Inventory Management Pro',
      category: 'productivity',
      description: 'Advanced inventory tracking with predictive analytics and automated reordering.',
      features: ['Real-time Tracking', 'Predictive Analytics', 'Automated Reordering', 'Barcode Scanning', 'Multi-location', 'Reporting'],
      pricing: { starter: 45, pro: 95, enterprise: 199 },
      icon: Package,
      popular: false,
      link: '/micro-saas/inventory-management'
    },
    {
      id: 'lead-scoring',
      name: 'AI Lead Scoring Engine',
      category: 'marketing',
      description: 'Machine learning-powered lead scoring to identify high-value prospects automatically.',
      features: ['ML Scoring', 'Behavioral Tracking', 'CRM Integration', 'Custom Models', 'Real-time Updates', 'ROI Analytics'],
      pricing: { starter: 35, pro: 85, enterprise: 179 },
      icon: Target,
      popular: true,
      link: '/micro-saas/lead-scoring'
    },
    {
      id: 'seo-optimizer',
      name: 'SEO Optimization Suite',
      category: 'marketing',
      description: 'Comprehensive SEO tool with keyword research, content optimization, and rank tracking.',
      features: ['Keyword Research', 'Content Optimization', 'Rank Tracking', 'Technical SEO', 'Competitor Analysis', 'Reporting'],
      pricing: { starter: 29, pro: 69, enterprise: 149 },
      icon: TrendingUp,
      popular: false,
      link: '/micro-saas/seo-optimizer'
    },
    {
      id: 'social-manager',
      name: 'Social Media Manager',
      category: 'marketing',
      description: 'AI-powered social media management with content scheduling and performance analytics.',
      features: ['Multi-platform', 'Content Scheduling', 'AI Content Ideas', 'Analytics', 'Hashtag Research', 'Team Collaboration'],
      pricing: { starter: 39, pro: 89, enterprise: 189 },
      icon: MessageCircle,
      popular: false,
      link: '/micro-saas/social-manager'
    },
    {
      id: 'support-bot',
      name: 'AI Customer Support Bot',
      category: 'communication',
      description: 'Intelligent chatbot with natural language processing and seamless human handoff.',
      features: ['NLP Processing', 'Multi-language', 'Human Handoff', 'Knowledge Base', 'Analytics', 'Custom Training'],
      pricing: { starter: 49, pro: 119, enterprise: 249 },
      icon: MessageCircle,
      popular: true,
      link: '/micro-saas/support-bot'
    },
    {
      id: 'document-processor',
      name: 'AI Document Processor',
      category: 'ai',
      description: 'Intelligent document processing with OCR, data extraction, and automated workflows.',
      features: ['OCR Technology', 'Data Extraction', 'Workflow Automation', 'Multi-format Support', 'API Integration', 'Batch Processing'],
      pricing: { starter: 35, pro: 79, enterprise: 169 },
      icon: FileText,
      popular: false,
      link: '/micro-saas/document-processor'
    },
    {
      id: 'chat-analytics',
      name: 'Conversation Analytics',
      category: 'analytics',
      description: 'Advanced chat and conversation analytics with sentiment analysis and insights.',
      features: ['Sentiment Analysis', 'Conversation Insights', 'Performance Metrics', 'Real-time Monitoring', 'Custom Dashboards', 'Export Reports'],
      pricing: { starter: 25, pro: 59, enterprise: 129 },
      icon: BarChart,
      popular: false,
      link: '/micro-saas/chat-analytics'
    },
    {
      id: 'ai-video-editor',
      name: 'AI Video Editor',
      category: 'ai',
      description: 'Automated video editing with AI-powered scene detection and content optimization.',
      features: ['Auto-editing', 'Scene Detection', 'Content Optimization', 'Multi-format Export', 'Cloud Processing', 'Templates'],
      pricing: { starter: 45, pro: 99, enterprise: 199 },
      icon: Video,
      popular: true,
      link: '/micro-saas/ai-video-editor'
    },
    {
      id: 'ai-image-generator',
      name: 'AI Image Generator Pro',
      category: 'ai',
      description: 'Advanced AI image generation with style transfer and brand consistency features.',
      features: ['Style Transfer', 'Brand Consistency', 'High Resolution', 'Batch Generation', 'API Access', 'Custom Models'],
      pricing: { starter: 29, pro: 69, enterprise: 149 },
      icon: Image,
      popular: false,
      link: '/micro-saas/ai-image-generator'
    },
    {
      id: 'ai-music-composer',
      name: 'AI Music Composer',
      category: 'ai',
      description: 'Intelligent music composition with genre adaptation and mood-based generation.',
      features: ['Genre Adaptation', 'Mood-based Generation', 'Instrument Selection', 'MIDI Export', 'Royalty-free', 'Custom Training'],
      pricing: { starter: 39, pro: 89, enterprise: 179 },
      icon: Music,
      popular: false,
      link: '/micro-saas/ai-music-composer'
    },
    {
      id: 'ecommerce-optimizer',
      name: 'E-commerce Optimizer',
      category: 'productivity',
      description: 'AI-powered e-commerce optimization with conversion rate optimization and personalization.',
      features: ['CRO Tools', 'Personalization', 'A/B Testing', 'Analytics', 'Inventory Optimization', 'Pricing Intelligence'],
      pricing: { starter: 55, pro: 125, enterprise: 249 },
      icon: ShoppingCart,
      popular: true,
      link: '/micro-saas/ecommerce-optimizer'
    },
    {
      id: 'ai-translator',
      name: 'AI Translation Suite',
      category: 'ai',
      description: 'Advanced translation service with context awareness and industry-specific terminology.',
      features: ['100+ Languages', 'Context Awareness', 'Industry Terms', 'Real-time Translation', 'API Integration', 'Quality Assurance'],
      pricing: { starter: 19, pro: 49, enterprise: 99 },
      icon: Globe,
      popular: false,
      link: '/micro-saas/ai-translator'
    },
    {
      id: 'ai-code-reviewer',
      name: 'AI Code Reviewer',
      category: 'development',
      description: 'Intelligent code review with security analysis and best practice recommendations.',
      features: ['Security Analysis', 'Best Practices', 'Performance Review', 'Bug Detection', 'Code Quality', 'Integration'],
      pricing: { starter: 35, pro: 79, enterprise: 159 },
      icon: Code,
      popular: false,
      link: '/micro-saas/ai-code-reviewer'
    },
    {
      id: 'ai-testing-suite',
      name: 'AI Testing Suite',
      category: 'development',
      description: 'Automated testing platform with AI-powered test generation and execution.',
      features: ['Auto Test Generation', 'Cross-browser Testing', 'Performance Testing', 'API Testing', 'CI/CD Integration', 'Reporting'],
      pricing: { starter: 45, pro: 99, enterprise: 199 },
      icon: Settings,
      popular: false,
      link: '/micro-saas/ai-testing-suite'
    },
    {
      id: 'ai-data-cleaner',
      name: 'AI Data Cleaner',
      category: 'analytics',
      description: 'Intelligent data cleaning and preprocessing with automated quality checks.',
      features: ['Auto Data Cleaning', 'Quality Checks', 'Duplicate Detection', 'Format Standardization', 'API Integration', 'Batch Processing'],
      pricing: { starter: 25, pro: 59, enterprise: 129 },
      icon: Database,
      popular: false,
      link: '/micro-saas/ai-data-cleaner'
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      category: 'productivity',
      description: 'Intelligent workflow automation with process optimization and smart routing.',
      features: ['Process Optimization', 'Smart Routing', 'Conditional Logic', 'Integration Hub', 'Analytics', 'Custom Workflows'],
      pricing: { starter: 39, pro: 89, enterprise: 179 },
      icon: Settings,
      popular: true,
      link: '/micro-saas/ai-workflow-automation'
    }
  ]

  const filteredServices = selectedCategory === 'all' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory)

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Launch your software-as-a-service business quickly with our comprehensive suite of pre-built micro-SaaS platforms. 
              From AI-powered tools to productivity solutions, we have everything you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-cyan-400 text-sm">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Pricing:</h4>
                  <div className="flex justify-between text-sm">
                    <div className="text-gray-300">
                      <span className="text-green-400">Starter:</span> ${service.pricing.starter}/mo
                    </div>
                    <div className="text-gray-300">
                      <span className="text-blue-400">Pro:</span> ${service.pricing.pro}/mo
                    </div>
                    <div className="text-gray-300">
                      <span className="text-purple-400">Enterprise:</span> ${service.pricing.enterprise}/mo
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm">
                    Try Free
                  </button>
                  <button className="flex-1 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your needs. All plans include 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$19<span className="text-lg text-gray-300">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 3 micro-SaaS tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard templates
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300">
                Start Free Trial
              </button>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-cyan-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$79<span className="text-lg text-gray-300">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 10 micro-SaaS tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom branding
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  API access
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300">
                Start Free Trial
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg text-gray-300">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited micro-SaaS tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-label solution
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom development
                </li>
              </ul>
              <button className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white py-3 px-6 rounded-lg font-medium transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Launch Your Micro-SaaS?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch with our team to discuss your requirements and start building your SaaS business today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">{contactInfo.phone}</p>
            </div>
            <div className="flex flex-col items-center">
              <MailIcon className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-gray-300 text-center">{contactInfo.address}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MicroSaaSPage