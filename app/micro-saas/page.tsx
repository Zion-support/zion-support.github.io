import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  BarChart3, 
  Mail, 
  Calendar, 
  FileText, 
  CreditCard, 
  Users, 
  Globe, 
  Smartphone,
  Camera,
  Lock,
  TrendingUp,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  Database,
  Cloud,
  Cpu,
  Wifi,
  MessageSquare,
  Settings,
  PieChart,
  Search,
  Filter,
  Download,
  Upload,
  Share2,
  Bell,
  Heart,
  ThumbsUp,
  Award,
  Rocket,
  Sparkles
} from 'lucide-react'

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      id: 'ai-content-writer-pro',
      title: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation tool with SEO optimization, multi-language support, and brand voice customization.',
      icon: <FileText className="w-8 h-8 text-cyan-400" />,
      price: '$29/month',
      features: ['SEO optimization', 'Multi-language support', 'Brand voice training', 'Content templates', 'Plagiarism checker'],
      category: 'Content & Writing',
      link: '/micro-saas/ai-content-writer-pro',
      popular: true
    },
    {
      id: 'ai-task-manager',
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization, deadline prediction, and productivity insights.',
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      price: '$19/month',
      features: ['AI prioritization', 'Deadline prediction', 'Productivity analytics', 'Team collaboration', 'Smart notifications'],
      category: 'Productivity',
      link: '/micro-saas/ai-task-manager',
      popular: false
    },
    {
      id: 'ai-expense-tracker',
      title: 'AI Expense Tracker',
      description: 'Smart expense tracking with automatic categorization, receipt scanning, and financial insights.',
      icon: <CreditCard className="w-8 h-8 text-blue-400" />,
      price: '$15/month',
      features: ['Receipt scanning', 'Auto categorization', 'Budget tracking', 'Tax preparation', 'Financial reports'],
      category: 'Finance',
      link: '/micro-saas/expense-tracker',
      popular: false
    },
    {
      id: 'ai-password-manager',
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security analysis and breach monitoring.',
      icon: <Lock className="w-8 h-8 text-red-400" />,
      price: '$12/month',
      features: ['Password generation', 'Security analysis', 'Breach monitoring', 'Multi-device sync', '2FA support'],
      category: 'Security',
      link: '/micro-saas/ai-password-manager',
      popular: false
    },
    {
      id: 'ai-invoice-generator',
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered pricing suggestions and payment tracking.',
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      price: '$25/month',
      features: ['Auto generation', 'Pricing suggestions', 'Payment tracking', 'Tax calculations', 'Client management'],
      category: 'Business',
      link: '/micro-saas/ai-invoice-generator',
      popular: false
    },
    {
      id: 'ai-health-tracker',
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights, symptom analysis, and wellness recommendations.',
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      price: '$22/month',
      features: ['Symptom analysis', 'Health insights', 'Wellness tips', 'Medication reminders', 'Doctor reports'],
      category: 'Health',
      link: '/micro-saas/ai-health-tracker',
      popular: false
    },
    {
      id: 'ai-smart-calendar',
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and time blocking.',
      icon: <Calendar className="w-8 h-8 text-orange-400" />,
      price: '$18/month',
      features: ['Smart scheduling', 'Meeting optimization', 'Time blocking', 'Conflict resolution', 'Productivity insights'],
      category: 'Productivity',
      link: '/micro-saas/ai-smart-calendar',
      popular: false
    },
    {
      id: 'ai-email-assistant',
      title: 'AI Email Assistant',
      description: 'Smart email management with AI-powered responses, priority sorting, and spam filtering.',
      icon: <Mail className="w-8 h-8 text-indigo-400" />,
      price: '$20/month',
      features: ['Smart responses', 'Priority sorting', 'Spam filtering', 'Email templates', 'Sentiment analysis'],
      category: 'Communication',
      link: '/micro-saas/ai-email-assistant',
      popular: true
    },
    {
      id: 'ai-social-manager',
      title: 'AI Social Media Manager',
      description: 'Automated social media management with AI content creation, scheduling, and analytics.',
      icon: <Share2 className="w-8 h-8 text-cyan-400" />,
      price: '$35/month',
      features: ['Content creation', 'Auto scheduling', 'Engagement analytics', 'Hashtag optimization', 'Multi-platform'],
      category: 'Marketing',
      link: '/micro-saas/social-manager',
      popular: true
    },
    {
      id: 'ai-appointment-scheduler',
      title: 'AI Appointment Scheduler',
      description: 'Smart appointment booking with AI optimization, conflict resolution, and automated reminders.',
      icon: <Clock className="w-8 h-8 text-teal-400" />,
      price: '$16/month',
      features: ['Smart booking', 'Conflict resolution', 'Auto reminders', 'Time zone handling', 'Client management'],
      category: 'Scheduling',
      link: '/micro-saas/appointment-scheduler',
      popular: false
    },
    {
      id: 'ai-support-bot',
      title: 'AI Support Bot',
      description: 'Intelligent customer support with AI-powered responses, ticket routing, and knowledge base integration.',
      icon: <MessageSquare className="w-8 h-8 text-green-400" />,
      price: '$30/month',
      features: ['AI responses', 'Ticket routing', 'Knowledge base', 'Multi-language', 'Analytics'],
      category: 'Support',
      link: '/micro-saas/support-bot',
      popular: true
    },
    {
      id: 'ai-analytics-dashboard',
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive analytics with AI insights, predictive analytics, and automated reporting.',
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
      price: '$40/month',
      features: ['AI insights', 'Predictive analytics', 'Auto reporting', 'Custom dashboards', 'Data visualization'],
      category: 'Analytics',
      link: '/micro-saas/analytics-dashboard',
      popular: false
    },
    {
      id: 'ai-seo-optimizer',
      title: 'AI SEO Optimizer',
      description: 'Advanced SEO optimization with AI keyword research, content analysis, and ranking predictions.',
      icon: <Search className="w-8 h-8 text-purple-400" />,
      price: '$28/month',
      features: ['Keyword research', 'Content analysis', 'Ranking predictions', 'Competitor analysis', 'Technical SEO'],
      category: 'SEO',
      link: '/micro-saas/seo-optimizer',
      popular: false
    },
    {
      id: 'ai-document-processor',
      title: 'AI Document Processor',
      description: 'Intelligent document processing with OCR, data extraction, and automated categorization.',
      icon: <FileText className="w-8 h-8 text-blue-400" />,
      price: '$24/month',
      features: ['OCR processing', 'Data extraction', 'Auto categorization', 'Format conversion', 'Batch processing'],
      category: 'Document Management',
      link: '/micro-saas/document-processor',
      popular: false
    },
    {
      id: 'ai-inventory-management',
      title: 'AI Inventory Manager',
      description: 'Smart inventory management with AI demand forecasting, automated reordering, and optimization.',
      icon: <Database className="w-8 h-8 text-indigo-400" />,
      price: '$32/month',
      features: ['Demand forecasting', 'Auto reordering', 'Inventory optimization', 'Multi-location', 'Analytics'],
      category: 'Inventory',
      link: '/micro-saas/inventory-management',
      popular: false
    },
    {
      id: 'ai-lead-scoring',
      title: 'AI Lead Scoring',
      description: 'Intelligent lead qualification with AI scoring, behavior analysis, and conversion prediction.',
      icon: <Target className="w-8 h-8 text-red-400" />,
      price: '$26/month',
      features: ['Lead scoring', 'Behavior analysis', 'Conversion prediction', 'CRM integration', 'ROI tracking'],
      category: 'Sales',
      link: '/micro-saas/lead-scoring',
      popular: false
    },
    {
      id: 'ai-chat-analytics',
      title: 'AI Chat Analytics',
      description: 'Advanced chat analysis with sentiment analysis, conversation insights, and performance metrics.',
      icon: <MessageSquare className="w-8 h-8 text-cyan-400" />,
      price: '$21/month',
      features: ['Sentiment analysis', 'Conversation insights', 'Performance metrics', 'Trend analysis', 'Custom reports'],
      category: 'Analytics',
      link: '/micro-saas/chat-analytics',
      popular: false
    },
    {
      id: 'ai-email-marketing',
      title: 'AI Email Marketing',
      description: 'Intelligent email marketing with AI segmentation, send time optimization, and performance analytics.',
      icon: <Mail className="w-8 h-8 text-green-400" />,
      price: '$33/month',
      features: ['AI segmentation', 'Send time optimization', 'A/B testing', 'Performance analytics', 'Automation'],
      category: 'Marketing',
      link: '/micro-saas/email-marketing',
      popular: true
    }
  ];

  const categories = [...new Set(microSaasServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS solutions powered by AI. From content creation to analytics, we provide affordable, intelligent tools for modern businesses." />
        <meta name="keywords" content="micro saas, AI tools, business software, productivity apps, content creation, analytics, automation" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Discover our comprehensive suite of micro SAAS solutions powered by AI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <meta property="og:image" content="https://ziontechgroup.com/og-micro-saas.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta name="twitter:description" content="Discover our comprehensive suite of micro SAAS solutions powered by AI." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-micro-saas.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Powerful, AI-driven micro SAAS tools designed to streamline your business operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            <div className="text-center px-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">18+</div>
              <div className="text-gray-300 text-xs sm:text-sm">Micro SAAS Tools</div>
            </div>
            <div className="text-center px-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">$12-40</div>
              <div className="text-gray-300 text-xs sm:text-sm">Monthly Pricing</div>
            </div>
            <div className="text-center px-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">24/7</div>
              <div className="text-gray-300 text-xs sm:text-sm">AI Support</div>
            </div>
            <div className="text-center px-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">99.9%</div>
              <div className="text-gray-300 text-xs sm:text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Micro SAAS Solutions</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Choose from our comprehensive suite of AI-powered micro SAAS tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                
                <div className="mb-2">
                  <span className="text-xs text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                  <span className="text-gray-400 text-sm ml-1">/month</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center text-sm"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 border border-white/30 text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center text-sm"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start with any of our micro SAAS solutions and scale as you grow. No long-term contracts, cancel anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}