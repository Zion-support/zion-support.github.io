import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, CheckCircle, Star, Zap, Shield, Brain, Server, Layers, 
  Mail, Phone, MapPin, DollarSign, Clock, Users, TrendingUp, Sparkles, 
  Target, Award, Lightbulb, Monitor, CircuitBoard, Globe, Lock, Cpu, 
  Rocket, Network, BarChart3, Bot, MessageCircle, Calendar, Timer, 
  Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, 
  Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, 
  Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, 
  HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, 
  Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, 
  Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, 
  Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, FileText, 
  Package, Code, Database, Cloud, Wrench, BarChart, PieChart, LineChart, 
  Activity, Eye, Search, Filter, Download, Upload, Share
} from '../components/Icons'

export default function PricingPage() {
  const aiServices = [
    {
      name: 'AI Chatbot Builder',
      price: '$199',
      period: 'month',
      description: 'Create intelligent chatbots for customer service and sales automation',
      features: ['No-code builder', 'Multi-language support', 'API integrations', 'Analytics dashboard', 'Custom training'],
      popular: false
    },
    {
      name: 'AI Analytics Dashboard',
      price: '$299',
      period: 'month',
      description: 'Transform data into actionable insights with AI-powered analytics',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'Data visualization', 'Automated reports'],
      popular: true
    },
    {
      name: 'AI Code Assistant',
      price: '$149',
      period: 'month',
      description: 'Boost developer productivity with AI-powered code generation',
      features: ['Code generation', 'Bug detection', 'Performance optimization', 'Documentation', 'Code review'],
      popular: false
    },
    {
      name: 'AI Customer Support',
      price: '$249',
      period: 'month',
      description: 'Automate customer support with intelligent ticket routing',
      features: ['Ticket routing', 'Sentiment analysis', 'Auto-responses', 'Multi-channel support', 'Performance metrics'],
      popular: false
    },
    {
      name: 'AI Email Marketing',
      price: '$179',
      period: 'month',
      description: 'Create personalized email campaigns with AI-driven content',
      features: ['Personalized content', 'Send time optimization', 'A/B testing', 'Performance analytics', 'List segmentation'],
      popular: false
    },
    {
      name: 'AI Content Generator',
      price: '$99',
      period: 'month',
      description: 'Generate high-quality content for blogs, social media, and marketing',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content templates', 'Plagiarism check'],
      popular: false
    }
  ]

  const itServices = [
    {
      name: 'Web Development',
      price: '$2,500',
      period: 'project',
      description: 'Custom web applications built with modern technologies',
      features: ['Custom development', 'Responsive design', 'SEO optimization', 'Performance tuning', 'Maintenance support'],
      popular: false
    },
    {
      name: 'Mobile Development',
      price: '$3,500',
      period: 'project',
      description: 'Native and cross-platform mobile apps for iOS and Android',
      features: ['iOS & Android apps', 'Cross-platform solutions', 'App store optimization', 'Push notifications', 'Offline functionality'],
      popular: true
    },
    {
      name: 'Cloud Migration',
      price: '$1,500',
      period: 'migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud',
      features: ['Zero downtime migration', 'Security hardening', 'Cost optimization', 'Performance monitoring', '24/7 support'],
      popular: false
    },
    {
      name: 'Cybersecurity',
      price: '$399',
      period: 'month',
      description: 'Comprehensive security solutions including penetration testing',
      features: ['Penetration testing', 'Vulnerability scanning', 'Security monitoring', 'Compliance audit', 'Incident response'],
      popular: false
    },
    {
      name: 'Database Management',
      price: '$299',
      period: 'month',
      description: 'Expert database design, optimization, and maintenance',
      features: ['Database design', 'Performance optimization', 'Backup & recovery', 'Security hardening', 'Monitoring'],
      popular: false
    },
    {
      name: 'DevOps Solutions',
      price: '$499',
      period: 'month',
      description: 'Automate deployment, monitoring, and scaling with CI/CD pipelines',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Container orchestration', 'Monitoring & alerting', 'Auto-scaling'],
      popular: false
    }
  ]

  const microSaasServices = [
    {
      name: 'AI Customer Insights',
      price: '$299',
      period: 'month',
      description: 'Transform customer data into actionable insights with AI-powered analytics',
      features: ['Real-time insights', 'Churn prediction', 'Customer segmentation', 'Personalization engine', 'ROI tracking'],
      popular: true
    },
    {
      name: 'AI Workflow Automation',
      price: '$299',
      period: 'month',
      description: 'Automate complex business processes with intelligent AI',
      features: ['Smart automation', 'Visual workflow builder', 'AI decision engine', '500+ integrations', 'Custom triggers'],
      popular: false
    },
    {
      name: 'Smart Appointment Scheduler',
      price: '$79',
      period: 'month',
      description: 'Intelligent scheduling system with automated reminders',
      features: ['Auto-scheduling', 'Calendar sync', 'SMS/Email reminders', 'Payment processing', 'Multi-timezone support'],
      popular: false
    },
    {
      name: 'AI Content Generator',
      price: '$99',
      period: 'month',
      description: 'Generate high-quality content for blogs, social media, and marketing',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content templates', 'Plagiarism check'],
      popular: false
    },
    {
      name: 'Document Processor',
      price: '$179',
      period: 'month',
      description: 'Automated document processing with OCR and intelligent data extraction',
      features: ['OCR technology', 'Data extraction', 'Format conversion', 'Batch processing', 'API integration'],
      popular: false
    },
    {
      name: 'Expense Tracker Pro',
      price: '$59',
      period: 'month',
      description: 'Smart expense tracking with receipt scanning and automated categorization',
      features: ['Receipt scanning', 'Auto-categorization', 'Expense reports', 'Tax preparation', 'Team collaboration'],
      popular: false
    }
  ]

  const enterprisePlans = [
    {
      name: 'AI Enterprise Suite',
      price: '$2,999',
      period: 'month',
      description: 'Complete AI solution suite for large enterprises',
      features: [
        'All AI services included',
        'Unlimited users',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'Custom training',
        'Advanced analytics',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'IT Enterprise Suite',
      price: '$4,999',
      period: 'month',
      description: 'Comprehensive IT services for enterprise infrastructure',
      features: [
        'All IT services included',
        '24/7 dedicated support',
        'Custom development',
        'Infrastructure management',
        'Security monitoring',
        'Compliance management',
        'Disaster recovery',
        'Performance optimization'
      ],
      popular: false
    },
    {
      name: 'Complete Business Suite',
      price: '$7,999',
      period: 'month',
      description: 'Everything you need to transform your business',
      features: [
        'All services included',
        'Unlimited everything',
        'Custom solutions',
        'Dedicated team',
        'Priority support',
        'Custom integrations',
        'Advanced reporting',
        'White-label options'
      ],
      popular: false
    }
  ]

  return (
    <>
      <Helmet>
        <title>Pricing - Transparent Pricing for AI, IT & Micro SAAS Services | Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI services, IT solutions, and micro SAAS platforms. Starting from $29/month with no hidden fees. 30-day free trial available." />
        <meta name="keywords" content="pricing, AI services pricing, IT services pricing, micro SAAS pricing, transparent pricing, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Pricing - Transparent Pricing for AI, IT & Micro SAAS Services | Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for our AI services, IT solutions, and micro SAAS platforms. Starting from $29/month with no hidden fees." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
        <meta property="og:image" content="https://ziontechgroup.com/og-pricing.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing - Transparent Pricing for AI, IT & Micro SAAS Services" />
        <meta name="twitter:description" content="Transparent pricing for our AI services, IT solutions, and micro SAAS platforms. Starting from $29/month with no hidden fees." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-pricing.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.4)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
            <DollarSign className="w-4 h-4" />
            <span>Transparent Pricing</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Simple, Transparent
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Pricing
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Choose the perfect plan for your business needs. No hidden fees, no surprises. 
            Start with a 30-day free trial and scale as you grow.
            <br />
            <span className="text-cyan-400 font-semibold">All plans include 24/7 support and 99.9% uptime guarantee.</span>
          </p>
        </div>
      </section>

      {/* AI Services Pricing */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Services</span> Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI solutions to transform your business operations and drive innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${service.popular ? 'ring-2 ring-cyan-400/50' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-400 ml-2">/{service.period}</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Pricing */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">IT Services</span> Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional IT solutions to power your business infrastructure and operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 relative ${service.popular ? 'ring-2 ring-blue-400/50' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-400">{service.price}</span>
                    <span className="text-gray-400 ml-2">/{service.period}</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Pricing */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS</span> Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-deploy micro software solutions that scale with your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10 relative ${service.popular ? 'ring-2 ring-pink-400/50' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-pink-400">{service.price}</span>
                    <span className="text-gray-400 ml-2">/{service.period}</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-pink-500/25"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Plans */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Enterprise</span> Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions for large enterprises with custom requirements and dedicated support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enterprisePlans.map((plan, index) => (
              <div key={index} className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative ${plan.popular ? 'ring-2 ring-purple-400/50' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white text-center py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25"
                >
                  Contact Sales
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about our pricing and services.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Do you offer a free trial?</h3>
              <p className="text-gray-300">Yes! We offer a 30-day free trial for all our services. No credit card required to get started.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Can I change my plan anytime?</h3>
              <p className="text-gray-300">Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">What payment methods do you accept?</h3>
              <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for enterprise customers.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Is there a setup fee?</h3>
              <p className="text-gray-300">No setup fees for any of our services. You only pay for what you use, when you use it.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Do you offer custom pricing?</h3>
              <p className="text-gray-300">Yes! We offer custom pricing for enterprise customers with specific requirements. Contact our sales team for more information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/30">
                  <Sparkles className="w-4 h-4" />
                  <span>Ready to Get Started?</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Start Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Free Trial</span> Today
                </h2>
                
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Join thousands of businesses already using our solutions to streamline operations, 
                  boost productivity, and drive growth. No credit card required.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/demo" 
                    className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                  >
                    <span>Schedule Demo</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-300" />
                    <span className="text-sm">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-300" />
                    <span className="text-sm">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-pink-300" />
                    <span className="text-sm">Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}