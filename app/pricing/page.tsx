import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, CheckCircle, Star, Zap, Shield, Globe, Database, 
  Code, Cloud, Brain, Cpu, Rocket, Network, BarChart3, Bot, 
  Lock, Clock, Users, TrendingUp, MessageCircle, Mail, Phone, 
  MapPin, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, 
  Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, 
  Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, 
  ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, 
  Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, 
  Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, 
  Minimize, Square, Circle, Triangle, Hexagon, Octagon, 
  Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, 
  Surprised, Confused, Wink, Kiss, Tongue, FileText, Package, 
  DollarSign, Award, Sparkles, Layers, Target, Lightbulb, 
  Monitor, Server, CircuitBoard, Atom, Satellite, Wrench, 
  BarChart, PieChart, LineChart, Activity, Eye, Search, Filter, 
  Download, Upload, Share 
} from 'lucide-react'

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const aiPlans = [
    {
      name: 'Starter',
      price: { monthly: 99, yearly: 990 },
      description: 'Perfect for small businesses getting started with AI',
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      features: [
        'AI Content Generation (1,000 words/month)',
        'Basic Chatbot (100 conversations/month)',
        'Email Support',
        'Standard Analytics',
        '1 User Account',
        'Basic Templates'
      ],
      limitations: [
        'Limited AI models',
        'Basic customization',
        'Standard response time'
      ],
      popular: false,
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Professional',
      price: { monthly: 299, yearly: 2990 },
      description: 'Ideal for growing businesses with advanced AI needs',
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      features: [
        'AI Content Generation (10,000 words/month)',
        'Advanced Chatbot (1,000 conversations/month)',
        'AI Analytics Dashboard',
        'Priority Support',
        '5 User Accounts',
        'Custom AI Models',
        'API Access',
        'Advanced Analytics',
        'Custom Integrations',
        'Phone Support'
      ],
      limitations: [
        'Limited custom training',
        'Standard SLA'
      ],
      popular: true,
      cta: 'Most Popular',
      link: '/contact'
    },
    {
      name: 'Enterprise',
      price: { monthly: 599, yearly: 5990 },
      description: 'Complete AI solution for large organizations',
      icon: <Crown className="w-8 h-8 text-gold-400" />,
      features: [
        'Unlimited AI Content Generation',
        'Unlimited Chatbot Conversations',
        'Full AI Suite Access',
        '24/7 Dedicated Support',
        'Unlimited User Accounts',
        'Custom AI Training',
        'White-label Solutions',
        'Advanced Security',
        'Custom Integrations',
        'Dedicated Account Manager',
        'SLA Guarantee',
        'On-premise Deployment'
      ],
      limitations: [],
      popular: false,
      cta: 'Contact Sales',
      link: '/contact'
    }
  ]

  const itPlans = [
    {
      name: 'Basic',
      price: { monthly: 199, yearly: 1990 },
      description: 'Essential IT services for small businesses',
      icon: <Server className="w-8 h-8 text-emerald-400" />,
      features: [
        'Website Maintenance',
        'Basic Security Monitoring',
        'Email Support',
        'Monthly Reports',
        'Backup Management',
        'Software Updates'
      ],
      limitations: [
        'Limited support hours',
        'Basic monitoring',
        'Standard response time'
      ],
      popular: false,
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Professional',
      price: { monthly: 499, yearly: 4990 },
      description: 'Comprehensive IT services for growing businesses',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      features: [
        'Cloud Migration Support',
        'Advanced Security Suite',
        'Priority Support',
        'Weekly Reports',
        'Automated Backups',
        'Performance Monitoring',
        'Network Management',
        'Database Administration',
        'API Development',
        'Mobile App Support'
      ],
      limitations: [
        'Limited custom development',
        'Standard SLA'
      ],
      popular: true,
      cta: 'Most Popular',
      link: '/contact'
    },
    {
      name: 'Enterprise',
      price: { monthly: 999, yearly: 9990 },
      description: 'Full-service IT solutions for large organizations',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      features: [
        'Complete IT Infrastructure',
        'Advanced Cybersecurity',
        '24/7 Dedicated Support',
        'Real-time Monitoring',
        'Custom Development',
        'Disaster Recovery',
        'Compliance Management',
        'Dedicated Team',
        'Custom Integrations',
        'SLA Guarantee',
        'On-site Support',
        'Training & Documentation'
      ],
      limitations: [],
      popular: false,
      cta: 'Contact Sales',
      link: '/contact'
    }
  ]

  const microSaasPlans = [
    {
      name: 'Individual',
      price: { monthly: 29, yearly: 290 },
      description: 'Perfect for individuals and freelancers',
      icon: <User className="w-8 h-8 text-green-400" />,
      features: [
        '1 Micro SaaS Tool',
        'Basic Analytics',
        'Email Support',
        'Standard Templates',
        '1 User Account',
        'Basic Customization'
      ],
      limitations: [
        'Limited integrations',
        'Basic features',
        'Standard support'
      ],
      popular: false,
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Business',
      price: { monthly: 79, yearly: 790 },
      description: 'Ideal for small to medium businesses',
      icon: <Building className="w-8 h-8 text-orange-400" />,
      features: [
        '5 Micro SaaS Tools',
        'Advanced Analytics',
        'Priority Support',
        'Custom Templates',
        '5 User Accounts',
        'API Access',
        'Custom Integrations',
        'Advanced Features',
        'Phone Support'
      ],
      limitations: [
        'Limited custom development',
        'Standard SLA'
      ],
      popular: true,
      cta: 'Most Popular',
      link: '/contact'
    },
    {
      name: 'Enterprise',
      price: { monthly: 199, yearly: 1990 },
      description: 'Complete solution for large organizations',
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      features: [
        'Unlimited Micro SaaS Tools',
        'Full Analytics Suite',
        '24/7 Dedicated Support',
        'White-label Solutions',
        'Unlimited User Accounts',
        'Custom Development',
        'Advanced Security',
        'Dedicated Account Manager',
        'SLA Guarantee',
        'On-premise Options'
      ],
      limitations: [],
      popular: false,
      cta: 'Contact Sales',
      link: '/contact'
    }
  ]

  const addOns = [
    {
      name: 'Additional AI Training',
      description: 'Custom AI model training for your specific use case',
      price: { monthly: 199, yearly: 1990 },
      icon: <Brain className="w-6 h-6 text-cyan-400" />
    },
    {
      name: 'Priority Support',
      description: '24/7 priority support with guaranteed response times',
      price: { monthly: 99, yearly: 990 },
      icon: <MessageCircle className="w-6 h-6 text-emerald-400" />
    },
    {
      name: 'Custom Integrations',
      description: 'Custom integrations with your existing systems',
      price: { monthly: 299, yearly: 2990 },
      icon: <Settings className="w-6 h-6 text-purple-400" />
    },
    {
      name: 'White-label Solutions',
      description: 'Rebrand our solutions with your company branding',
      price: { monthly: 199, yearly: 1990 },
      icon: <Award className="w-6 h-6 text-orange-400" />
    }
  ]

  const faqs = [
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Absolutely! We offer custom pricing and solutions for enterprise clients. Contact our sales team to discuss your specific needs.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, bank transfers, and can arrange custom payment terms for enterprise clients.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all our plans. No credit card required to start your trial.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you when you\'re approaching your limits. You can upgrade your plan or purchase additional capacity as needed.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all our services. If you\'re not satisfied, we\'ll provide a full refund.'
    }
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price)
  }

  const getDiscount = () => {
    return billingCycle === 'yearly' ? 17 : 0
  }

  return (
    <>
      <Helmet>
        <title>Pricing - Transparent Pricing for AI and IT Services | Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI services, IT solutions, and Micro SaaS tools. Choose the perfect plan for your business with flexible options and no hidden fees." />
        <meta name="keywords" content="pricing, AI services pricing, IT services pricing, Micro SaaS pricing, transparent pricing, business plans, enterprise solutions" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Zion Tech Group" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Pricing - Transparent Pricing for AI and IT Services | Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for our AI services, IT solutions, and Micro SaaS tools. Choose the perfect plan for your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
        <meta property="og:image" content="https://ziontechgroup.com/pricing-og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing - Transparent Pricing for AI and IT Services | Zion Tech Group" />
        <meta name="twitter:description" content="Transparent pricing for our AI services, IT solutions, and Micro SaaS tools. Choose the perfect plan for your business." />
        <meta name="twitter:image" content="https://ziontechgroup.com/pricing-twitter-image.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Pricing - Zion Tech Group",
            "description": "Transparent pricing for AI services, IT solutions, and Micro SaaS tools.",
            "url": "https://ziontechgroup.com/pricing",
            "mainEntity": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <DollarSign className="w-4 h-4" />
              <span>Transparent Pricing</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Simple, Transparent
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Pricing
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Choose the perfect plan for your business. No hidden fees, no surprises. 
              Start with a free trial and scale as you grow.
              <br />
              <span className="text-cyan-400 font-semibold">Save up to 17% with annual billing.</span>
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-16">
              <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save 17%
                </span>
              )}
            </div>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Services <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions to transform your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiPlans.map((plan, index) => (
                <div key={index} className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${plan.popular ? 'ring-2 ring-cyan-400/50' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-white">
                        {formatPrice(plan.price[billingCycle])}
                      </span>
                      <span className="text-gray-400 text-lg">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-green-400 text-sm font-semibold">
                        Save {formatPrice(plan.price.monthly * 12 - plan.price.yearly)} per year
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-center space-x-3">
                        <Minus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        <span className="text-gray-500 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={plan.link}
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25' 
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                IT Services <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete IT solutions to modernize your infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {itPlans.map((plan, index) => (
                <div key={index} className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 relative ${plan.popular ? 'ring-2 ring-emerald-400/50' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-white">
                        {formatPrice(plan.price[billingCycle])}
                      </span>
                      <span className="text-gray-400 text-lg">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-green-400 text-sm font-semibold">
                        Save {formatPrice(plan.price.monthly * 12 - plan.price.yearly)} per year
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-center space-x-3">
                        <Minus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        <span className="text-gray-500 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={plan.link}
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-emerald-500 to-blue-600 text-white hover:from-emerald-600 hover:to-blue-700 shadow-lg hover:shadow-emerald-500/25' 
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SaaS Pricing */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/50" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Micro SaaS <span className="bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-deploy micro software solutions for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {microSaasPlans.map((plan, index) => (
                <div key={index} className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 relative ${plan.popular ? 'ring-2 ring-green-400/50' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-white">
                        {formatPrice(plan.price[billingCycle])}
                      </span>
                      <span className="text-gray-400 text-lg">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-green-400 text-sm font-semibold">
                        Save {formatPrice(plan.price.monthly * 12 - plan.price.yearly)} per year
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-center space-x-3">
                        <Minus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        <span className="text-gray-500 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={plan.link}
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-green-500 to-orange-600 text-white hover:from-green-600 hover:to-orange-700 shadow-lg hover:shadow-green-500/25' 
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Additional <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your plan with these additional services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addOn, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center space-x-3 mb-4">
                    {addOn.icon}
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {addOn.name}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {addOn.description}
                  </p>
                  <div className="text-cyan-400 font-semibold text-lg">
                    {formatPrice(addOn.price[billingCycle])}/{billingCycle === 'monthly' ? 'month' : 'year'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Common questions about our pricing and services.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
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
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Ready to Get <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Started?</span>
                  </h2>
                  
                  <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                    Start your free trial today and experience the power of our solutions. 
                    No credit card required, cancel anytime.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link 
                      to="/contact" 
                      className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span>Start Free Trial</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      to="/contact" 
                      className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                    >
                      <span>Contact Sales</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}