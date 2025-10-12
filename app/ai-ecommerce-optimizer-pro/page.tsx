'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  ShoppingCart, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  BarChart3, 
  Target, 
  Shield, 
  Globe,
  Smartphone,
  Monitor,
  AlertCircle,
  Sparkles,
  FileText,
  Database,
  Clock,
  Users,
  Building2,
  CreditCard,
  TrendingUp,
  PieChart,
  Activity,
  Eye,
  Search,
  Heart,
  MessageSquare,
  Settings,
  DollarSign,
  Percent,
  Package,
  Truck
} from 'lucide-react';

export default function AiEcommerceOptimizerProPage() {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Personalization',
      description: 'Advanced machine learning algorithms personalize the shopping experience for each customer',
      benefits: ['Product recommendations', 'Dynamic pricing', 'Personalized content', 'Behavioral analysis']
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-green-400" />,
      title: 'Conversion Optimization',
      description: 'Intelligent A/B testing and optimization to maximize your conversion rates',
      benefits: ['Smart testing', 'Conversion tracking', 'Funnel optimization', 'Revenue maximization']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive e-commerce analytics with actionable insights and predictions',
      benefits: ['Sales forecasting', 'Customer analytics', 'Inventory optimization', 'Performance metrics']
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: 'Marketing Automation',
      description: 'Automated marketing campaigns with AI-driven targeting and personalization',
      benefits: ['Email automation', 'Retargeting campaigns', 'Social media ads', 'Customer segmentation']
    },
    {
      icon: <Zap className="w-8 h-8 text-red-400" />,
      title: 'Real-Time Optimization',
      description: 'Continuous optimization of your store based on real-time data and user behavior',
      benefits: ['Live optimization', 'Instant adjustments', 'Performance monitoring', 'Dynamic content']
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: 'Multi-Channel Management',
      description: 'Unified management across all sales channels with consistent optimization',
      benefits: ['Channel synchronization', 'Inventory management', 'Order processing', 'Customer data']
    }
  ];

  const optimizationAreas = [
    {
      category: 'Product Optimization',
      icon: <Package className="w-6 h-6 text-cyan-400" />,
      items: [
        'Product recommendations',
        'Pricing optimization',
        'Inventory management',
        'Product descriptions',
        'Image optimization'
      ]
    },
    {
      category: 'Customer Experience',
      icon: <Users className="w-6 h-6 text-green-400" />,
      items: [
        'Personalized shopping',
        'Customer journey mapping',
        'User experience optimization',
        'Mobile optimization',
        'Accessibility features'
      ]
    },
    {
      category: 'Marketing & Sales',
      icon: <Target className="w-6 h-6 text-purple-400" />,
      items: [
        'Email marketing automation',
        'Social media optimization',
        'Search engine optimization',
        'Paid advertising optimization',
        'Content marketing'
      ]
    },
    {
      category: 'Analytics & Reporting',
      icon: <BarChart3 className="w-6 h-6 text-orange-400" />,
      items: [
        'Sales performance tracking',
        'Customer behavior analysis',
        'Revenue forecasting',
        'ROI measurement',
        'Custom dashboards'
      ]
    },
    {
      category: 'Operations & Logistics',
      icon: <Truck className="w-6 h-6 text-red-400" />,
      items: [
        'Order processing optimization',
        'Shipping optimization',
        'Inventory forecasting',
        'Supply chain management',
        'Returns processing'
      ]
    },
    {
      category: 'Security & Compliance',
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      items: [
        'Payment security',
        'Data protection',
        'PCI compliance',
        'Fraud prevention',
        'Privacy compliance'
      ]
    }
  ];
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ShoppingCart, ArrowRight, CheckCircle, Zap, Brain, Smartphone, Globe, Shield, BarChart3, Star, Sparkles, TrendingUp, Users, Target, CreditCard } from 'lucide-react'
import Layout from '../layout'

export default function AIEcommerceOptimizerPro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Optimization',
      description: 'Machine learning algorithms optimize every aspect of your e-commerce store'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
      title: 'Revenue Growth',
      description: 'Increase sales by up to 40% with intelligent product recommendations and pricing'
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-400" />,
      title: 'Customer Insights',
      description: 'Deep customer behavior analysis to improve conversion rates and retention'
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-green-400" />,
      title: 'Cart Optimization',
      description: 'Reduce cart abandonment with smart checkout optimization and recovery campaigns'
    }
  ]

  const optimizationFeatures = [
    {
      category: 'Product Optimization',
      items: ['Smart Recommendations', 'Dynamic Pricing', 'Inventory Management', 'Product Search', 'Cross-selling', 'Upselling']
    },
    {
      category: 'Customer Experience',
      items: ['Personalized Shopping', 'Behavioral Analytics', 'Customer Segmentation', 'Loyalty Programs', 'Retargeting', 'A/B Testing']
    },
    {
      category: 'Conversion Optimization',
      items: ['Checkout Flow', 'Payment Processing', 'Mobile Optimization', 'Page Speed', 'SEO Enhancement', 'Cart Recovery']
    },
    {
      category: 'Analytics & Reporting',
      items: ['Real-time Dashboard', 'Sales Analytics', 'Customer Insights', 'ROI Tracking', 'Performance Metrics', 'Custom Reports']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small online stores and startups',
      features: [
        'Up to 1,000 products',
        'Basic personalization',
        'Standard analytics',
        'Email support',
        'Basic integrations',
        '1GB data storage'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$599',
      price: '$79',
      period: '/month',
      description: 'Perfect for small online stores',
      features: [
        'Up to 1,000 products',
        'Basic AI optimization',
        'Standard analytics',
        'Email support',
        'Mobile optimization'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing e-commerce businesses',
      features: [
        'Up to 10,000 products',
        'Advanced AI personalization',
        'Comprehensive analytics',
        'Priority support',
        'Premium integrations',
        '10GB data storage',
        'Marketing automation',
        'A/B testing suite'
      ],
      popular: true,
      cta: 'Get Started'
    },
    {
      name: 'Enterprise',
      price: '$1,499',
      period: '/month',
      description: 'For large e-commerce operations',
      features: [
        'Unlimited products',
        'Custom AI models',
        'White-label options',
        'Dedicated support',
        'Unlimited storage',
        'API access',
        'Custom integrations',
        'On-premise deployment'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      company: 'Fashion Forward',
      role: 'E-commerce Director',
      content: 'AI E-commerce Optimizer Pro has increased our conversion rate by 45% and average order value by 30%. The personalization features are game-changing.',
      rating: 5,
      avatar: 'JM',
      results: '45% conversion increase'
    },
    {
      name: 'Robert Kim',
      company: 'TechGadgets Store',
      role: 'Marketing Manager',
      content: 'The automated marketing campaigns have saved us 20+ hours per week while improving our ROI by 60%. The AI recommendations are incredibly accurate.',
      rating: 5,
      avatar: 'RK',
      results: '60% ROI improvement'
    },
    {
      name: 'Amanda Wilson',
      company: 'Home & Garden Plus',
      role: 'Operations Director',
      content: 'The inventory optimization features have reduced our stockouts by 80% and improved our cash flow significantly. The predictive analytics are spot-on.',
      rating: 5,
      avatar: 'AW',
      results: '80% reduction in stockouts'
    }
  ];

  const stats = [
    { number: '500+', label: 'E-commerce Stores', icon: <ShoppingCart className="w-6 h-6" /> },
    { number: '35%', label: 'Average Conversion Increase', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'AI Optimization', icon: <Zap className="w-6 h-6" /> }
  ];

  const integrations = [
    { name: 'Shopify', icon: <ShoppingCart className="w-6 h-6" />, category: 'E-commerce Platform' },
    { name: 'WooCommerce', icon: <Package className="w-6 h-6" />, category: 'E-commerce Platform' },
    { name: 'Magento', icon: <Building2 className="w-6 h-6" />, category: 'E-commerce Platform' },
    { name: 'BigCommerce', icon: <Globe className="w-6 h-6" />, category: 'E-commerce Platform' },
    { name: 'Mailchimp', icon: <MessageSquare className="w-6 h-6" />, category: 'Email Marketing' },
    { name: 'Klaviyo', icon: <Target className="w-6 h-6" />, category: 'Email Marketing' },
    { name: 'Google Analytics', icon: <BarChart3 className="w-6 h-6" />, category: 'Analytics' },
    { name: 'Facebook Ads', icon: <Eye className="w-6 h-6" />, category: 'Advertising' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI E-commerce Optimizer Pro - Zion Tech Group | Advanced E-commerce Intelligence Platform</title>
        <meta name="description" content="Transform your e-commerce business with AI E-commerce Optimizer Pro. Advanced personalization, conversion optimization, and analytics for maximum sales growth. Start your free trial today." />
        <meta name="keywords" content="AI e-commerce optimization, conversion optimization, e-commerce personalization, online store optimization, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI E-commerce Optimizer Pro - Advanced E-commerce Intelligence Platform" />
        <meta property="og:description" content="Transform your e-commerce business with AI-powered personalization, conversion optimization, and advanced analytics for maximum sales growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-ecommerce-optimizer-pro" />
        <meta property="og:image" content="https://ziontechgroup.com/og-ai-ecommerce-optimizer.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI E-commerce Optimizer Pro - Advanced E-commerce Intelligence Platform" />
        <meta name="twitter:description" content="Transform your e-commerce business with AI-powered personalization, conversion optimization, and advanced analytics." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-ai-ecommerce-optimizer.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI E-commerce Optimizer Pro",
            "description": "Advanced AI-powered e-commerce optimization platform with personalization, conversion optimization, and analytics for maximum sales growth.",
            "url": "https://ziontechgroup.com/ai-ecommerce-optimizer-pro",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "199",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "199",
                "priceCurrency": "USD",
                "unitText": "MONTH"
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI E-commerce Optimizer{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Pro
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your e-commerce business with AI-powered personalization, conversion optimization, 
            and advanced analytics. Increase sales by 35% with intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/ai-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              View All AI Services
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            ✓ 14-day free trial • ✓ No setup fees • ✓ 35% average sales increase
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
        'Advanced AI features',
        'Custom recommendations',
        'Priority support',
        'A/B testing tools',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large e-commerce platforms',
      features: [
        'Unlimited products',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Jessica Park',
      company: 'Fashion Forward Store',
      content: 'AI E-commerce Optimizer Pro increased our conversion rate by 35% and reduced cart abandonment by 50%.',
      rating: 5
    },
    {
      name: 'David Wilson',
      company: 'Tech Gadgets Plus',
      content: 'The personalized recommendations feature is incredible. Our average order value increased by 28%.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'Home & Garden Co.',
      content: 'Real-time analytics and optimization helped us understand our customers better than ever before.',
      rating: 5
    }
  ]

  return (
    <Layout
      title="AI E-commerce Optimizer Pro - Boost Sales with AI | Zion Tech Group"
      description="Transform your e-commerce store with AI-powered optimization. Increase sales by 40%, reduce cart abandonment, and boost conversion rates. Start your free trial today."
      keywords="e-commerce optimization, AI shopping, conversion optimization, online store, sales boost, cart abandonment"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6">
                <ShoppingCart className="w-4 h-4 mr-2" />
                E-commerce AI Optimization
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                AI E-commerce Optimizer Pro
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your e-commerce store with AI-powered optimization. Increase sales by up to 40%, 
                reduce cart abandonment, and boost conversion rates with intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="#demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Powerful E-commerce Optimization
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                AI-driven features that transform your online store performance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Advanced AI Features</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI E-commerce Optimizer Pro leverages cutting-edge artificial intelligence 
              to maximize your online store's performance and profitability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
        {/* Optimization Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Comprehensive Optimization Suite
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Everything you need to maximize your e-commerce success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {optimizationFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.category}</h3>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Optimization Areas Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Optimization</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Optimize every aspect of your e-commerce business with our comprehensive AI-powered tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {optimizationAreas.map((area, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {area.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{area.category}</h3>
                </div>
                <ul className="space-y-2">
                  {area.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Seamless Integrations</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect with your existing e-commerce platform and marketing tools for unified optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 text-center group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-3 group-hover:scale-110 transition-transform">
                  {integration.icon}
                </div>
                <h3 className="text-white font-semibold mb-1">{integration.name}</h3>
                <p className="text-gray-400 text-sm">{integration.category}</p>
              </div>
            ))}
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Flexible pricing plans designed to scale with your e-commerce business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 relative ${
                plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover:border-cyan-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join hundreds of e-commerce businesses already growing with AI optimization.
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the plan that scales with your e-commerce business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-cyan-400 text-sm font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-3">"{testimonial.content}"</p>
                  <div className="text-cyan-400 font-semibold text-sm">
                    Result: {testimonial.results}
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-orange-400/40 scale-105 shadow-2xl shadow-orange-500/20' 
                    : 'border-orange-500/20 hover:border-orange-400/40'
                }`}>
                  {plan.popular && (
                    <div className="inline-flex items-center px-3 py-1 bg-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-4">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-orange-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white hover:from-orange-600 hover:to-purple-700'
                        : 'border-2 border-orange-400 text-orange-400 hover:bg-orange-400/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-gray-300">
                See how our AI optimization transforms e-commerce businesses
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Optimize Your E-commerce Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your free trial today and experience the power of AI-driven e-commerce optimization. 
              Join hundreds of businesses already growing with our advanced intelligence platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                Start Free Trial
                <Sparkles className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Learn More
                <ShoppingCart className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="mt-8 text-white/80 text-sm">
              <p>✓ 14-day free trial • ✓ No setup fees • ✓ 35% average sales increase • ✓ Cancel anytime</p>
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-2xl p-8 border border-orange-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Boost Your E-commerce Sales Today
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join thousands of successful online stores using AI E-commerce Optimizer Pro
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Your Free Trial
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
    </Layout>
  )
}