<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
<<<<<<< HEAD
  Layers, BarChart3, Calendar, MessageCircle, FileText, 
  Mail, DollarSign, Package, Clock, Users, Shield, 
  CheckCircle, ArrowRight, Sparkles, Target, Award, 
  Lightbulb, Monitor, Server, CircuitBoard, Atom, 
  Satellite, Wrench, PieChart, LineChart, Activity, 
  Search, Filter, Download, Upload, Share, Phone, 
  MapPin, Globe, TrendingUp, Star, Zap, Brain
} from 'lucide-react'
=======
  ArrowRight, 
  CheckCircle, 
  Star,
  Brain,
  Cloud,
  Shield,
  Database,
  Code,
  Smartphone,
  Cpu,
  Globe,
  Lock,
  Users,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Settings,
  FileText,
  BarChart3,
  MessageSquare,
  Calendar,
  CreditCard,
  Zap
} from 'lucide-react';
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
=======
import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Brain, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
>>>>>>> cursor/fix-errors-and-merge-to-main-33db

export default function MicroSAASServicesPage() {
  const microSaasServices = [
    {
<<<<<<< HEAD
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      title: 'AI Customer Insights',
      description: 'Transform customer data into actionable insights with AI-powered analytics and churn prediction.',
      price: '$299/month',
      features: ['Real-time insights', 'Churn prediction', 'Customer segmentation', 'Personalization engine'],
      link: '/ai-customer-insights'
    },
    {
      icon: <Zap className="w-8 h-8 text-emerald-400" />,
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent AI that learns and adapts to your workflow.',
      price: '$299/month',
      features: ['Smart automation', 'Visual workflow builder', 'AI decision engine', '500+ integrations'],
      link: '/ai-workflow-automation'
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-400" />,
      title: 'Smart Appointment Scheduler',
      description: 'Intelligent scheduling system with automated reminders and calendar integration.',
      price: '$79/month',
      features: ['Auto-scheduling', 'Calendar sync', 'SMS/Email reminders', 'Payment processing'],
      link: '/micro-saas/appointment-scheduler'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-400" />,
      title: 'AI Chat Analytics',
      description: 'Advanced chat analytics with sentiment analysis and customer insights.',
      price: '$129/month',
      features: ['Sentiment analysis', 'Response optimization', 'Customer insights', 'Live monitoring'],
      link: '/micro-saas/chat-analytics'
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-400" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing campaigns.',
      price: '$99/month',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content templates'],
      link: '/micro-saas/content-generator'
    },
    {
      icon: <Package className="w-8 h-8 text-pink-400" />,
      title: 'Document Processor',
      description: 'Automated document processing with OCR and intelligent data extraction.',
      price: '$179/month',
      features: ['OCR technology', 'Data extraction', 'Format conversion', 'Batch processing'],
      link: '/micro-saas/document-processor'
    },
    {
      icon: <Mail className="w-8 h-8 text-green-400" />,
      title: 'AI Email Marketing',
      description: 'Intelligent email campaigns with AI-powered personalization and optimization.',
      price: '$149/month',
      features: ['AI personalization', 'A/B testing', 'Automated campaigns', 'Analytics dashboard'],
      link: '/micro-saas/email-marketing'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-indigo-400" />,
      title: 'Expense Tracker Pro',
      description: 'Smart expense management with receipt scanning and automated categorization.',
      price: '$59/month',
      features: ['Receipt scanning', 'Auto-categorization', 'Expense reports', 'Tax preparation'],
      link: '/micro-saas/expense-tracker'
    }
  ]

  const additionalServices = [
    {
      icon: <Package className="w-6 h-6 text-cyan-400" />,
      title: 'Inventory Manager',
      description: 'Smart inventory tracking with predictive analytics and automated reordering.',
      price: '$199/month',
      link: '/micro-saas/inventory-management'
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      title: 'Lead Generation Suite',
      description: 'AI-powered lead generation and qualification with CRM integration.',
      price: '$249/month',
      link: '/micro-saas/lead-generation'
    },
    {
      icon: <Share className="w-6 h-6 text-blue-400" />,
      title: 'Social Media Scheduler',
      description: 'Automated social media posting with AI-optimized timing and content.',
      price: '$89/month',
      link: '/micro-saas/social-scheduler'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Password Manager Pro',
      description: 'Enterprise-grade password management with team sharing and security features.',
      price: '$39/month',
      link: '/micro-saas/password-manager'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-400" />,
      title: 'Task Manager AI',
      description: 'Intelligent task management with AI prioritization and team collaboration.',
      price: '$79/month',
      link: '/micro-saas/task-manager'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-pink-400" />,
      title: 'Analytics Dashboard',
      description: 'Custom analytics dashboards with real-time data visualization and reporting.',
      price: '$159/month',
      link: '/micro-saas/analytics-dashboard'
    }
  ]

  const stats = [
    { number: '50+', label: 'Micro SaaS Solutions', icon: <Layers className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-emerald-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Monitor className="w-6 h-6 text-blue-400" /> },
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6 text-purple-400" /> }
  ]
=======
      icon: <Brain className="w-8 h-8 text-cyan-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automation.',
      features: ['Smart prioritization', 'Automated scheduling', 'Progress tracking', 'Team collaboration'],
      pricing: 'Starting at $29/month',
      link: '/ai-task-manager',
      popular: true
    },
    {
      icon: <CreditCard className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with AI categorization and budget insights.',
      features: ['Auto categorization', 'Budget alerts', 'Receipt scanning', 'Financial reports'],
      pricing: 'Starting at $19/month',
      link: '/ai-expense-tracker',
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      features: ['Secure storage', 'Auto-generation', 'Breach monitoring', 'Multi-device sync'],
      pricing: 'Starting at $15/month',
      link: '/ai-password-manager',
      popular: false
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered customization and tracking.',
      features: ['Auto-generation', 'Custom templates', 'Payment tracking', 'Tax calculations'],
      pricing: 'Starting at $25/month',
      link: '/ai-invoice-generator',
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Business intelligence with AI-powered insights and predictive analytics.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Data visualization'],
      pricing: 'Starting at $49/month',
      link: '/ai-analytics-dashboard',
      popular: true
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-pink-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer service and support automation.',
      features: ['No-code builder', 'Multi-channel support', 'Sentiment analysis', 'Custom training'],
      pricing: 'Starting at $39/month',
      link: '/ai-chatbot-builder',
      popular: false
    },
    {
      icon: <Calendar className="w-8 h-8 text-indigo-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent scheduling with AI-powered optimization and conflict resolution.',
      features: ['Smart scheduling', 'Conflict detection', 'Meeting optimization', 'Integration sync'],
      pricing: 'Starting at $22/month',
      link: '/ai-smart-calendar',
      popular: false
    },
    {
      icon: <Settings className="w-8 h-8 text-pink-500" />,
      title: 'AI Climate Solutions',
      description: 'Environmental monitoring and sustainability solutions powered by AI.',
      features: ['Carbon tracking', 'Sustainability goals', 'Impact reporting', 'Green recommendations'],
      pricing: 'Starting at $35/month',
      link: '/ai-climate-solutions-pro',
      popular: true
    }
  ];

  const stats = [
    { number: '50+', label: 'Micro SAAS Products', icon: <Brain className="w-6 h-6" /> },
    { number: '10K+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Phone className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'StartupCo',
      content: 'The AI Task Manager has revolutionized how we manage our projects. The AI prioritization is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'TechFlow',
      content: 'AI Expense Tracker saved us hours every week. The automatic categorization is spot-on.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'DataDriven Inc.',
      content: 'The AI Analytics Dashboard provides insights we never knew we needed. Game changer for our business.',
      rating: 5
    }
  ];
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Micro SaaS Services - Zion Tech Group | Ready-to-Deploy Software Solutions</title>
        <meta name="description" content="Powerful micro SaaS solutions that integrate seamlessly with your workflow. From AI automation to business tools, deploy instantly and scale effortlessly." />
        <meta name="keywords" content="micro SaaS, software as a service, business tools, automation, AI solutions, ready-to-deploy, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.4)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-pink-400/30">
            <Layers className="w-4 h-4" />
            <span>Micro SaaS Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Ready-to-Deploy <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Micro SaaS
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Powerful, scalable micro software solutions that integrate seamlessly with your existing workflow. 
            No complex setup, just instant value.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/demo" 
              className="group border-2 border-pink-400 text-pink-400 px-10 py-4 rounded-xl font-semibold hover:bg-pink-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>Try Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Micro SaaS Services */}
      <section className="py-20 px-4 relative">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Micro SaaS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our most popular micro SaaS solutions designed to solve specific business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-4">
                  <div className="text-pink-400 font-semibold text-lg">
                    {service.price}
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={service.link}
                    className="block w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-pink-500/25"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              More <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Explore our complete suite of micro SaaS solutions for every business need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-cyan-400 font-semibold">
                    {service.price}
                  </div>
                  <Link 
                    to={service.link}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready to <span className="bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent">Deploy</span> Your Solution?
                </h2>
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Choose from our ready-to-deploy micro SaaS solutions or let us build a custom solution for your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-pink-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Start Building</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                  >
                    <span>View Pricing</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
=======
        <title>Micro SAAS Services - Zion Tech Group | AI-Powered Solutions</title>
        <meta name="description" content="Discover our collection of AI-powered micro SAAS solutions including task management, expense tracking, password management, and more. Streamline your business operations." />
        <meta name="keywords" content="micro SAAS, AI solutions, task management, expense tracking, password manager, invoice generator, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Micro SAAS Services - Zion Tech Group" />
        <meta property="og:description" content="Discover our collection of AI-powered micro SAAS solutions including task management, expense tracking, password management, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Micro SAAS Services - Zion Tech Group" />
        <meta name="twitter:description" content="Discover our collection of AI-powered micro SAAS solutions including task management, expense tracking, password management, and more." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Micro SAAS Solutions
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Powerful AI-driven micro applications designed to streamline your business operations and boost productivity.
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
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Micro SAAS Products</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                AI-powered solutions designed to solve specific business challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {microSaasServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-500/50' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-white mb-4">{service.pricing}</div>
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Users Say</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Don't just take our word for it - hear from users who have transformed their workflows
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Streamline Your Business?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Choose from our collection of AI-powered micro SAAS solutions and start optimizing your workflows today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Start Your Trial
                  </Link>
                  <Link 
                    to="/about" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dfc2
}