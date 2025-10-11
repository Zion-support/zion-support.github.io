'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Check, Star, Zap, DollarSign, Clock, Users, Shield, Cloud, Code, BarChart, Brain, MessageCircle, FileText, Image, Video, Music, ShoppingCart, CreditCard, Smartphone, Monitor, Database, Lock, TrendingUp, Settings, Calendar, Mail, Phone, MapPin, Award, Lightbulb, Cpu, Wifi, MessageSquare, Rocket, Heart, Box, Package, Mic, Workflow, Gauge, Eye, Target, ArrowRight, ExternalLink } from 'lucide-react'

const PricingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [billingPeriod, setBillingPeriod] = useState('monthly')

  const categories = [
    { id: 'all', name: 'All Services', icon: DollarSign },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'it', name: 'IT Services', icon: Settings },
    { id: 'saas', name: 'Micro SaaS', icon: Cloud }
  ]

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  }

  const aiServicesPricing = [
    {
      name: 'AI Content Generation Suite',
      description: 'Advanced AI-powered content creation platform with multi-format support.',
      pricing: { starter: 99, professional: 299, enterprise: 799 },
      features: ['GPT-4 Integration', 'Multi-language Support', 'Brand Voice Training', 'SEO Optimization', 'Content Templates', 'Plagiarism Detection'],
      popular: true
    },
    {
      name: 'AI Chatbot Builder Pro',
      description: 'Intelligent chatbot platform with natural language processing.',
      pricing: { starter: 149, professional: 399, enterprise: 999 },
      features: ['NLP Processing', 'Multi-language Support', 'Human Handoff', 'Knowledge Base Integration', 'Analytics Dashboard', 'Custom Training'],
      popular: false
    },
    {
      name: 'AI Data Analytics Platform',
      description: 'Intelligent data analysis with predictive insights and automated reporting.',
      pricing: { starter: 199, professional: 499, enterprise: 1299 },
      features: ['Predictive Analytics', 'Real-time Processing', 'Automated Reports', 'Data Visualization', 'Anomaly Detection', 'Custom Models'],
      popular: false
    },
    {
      name: 'AI Computer Vision Suite',
      description: 'Advanced image and video analysis with object detection capabilities.',
      pricing: { starter: 179, professional: 449, enterprise: 1199 },
      features: ['Object Detection', 'Facial Recognition', 'Image Classification', 'Video Analysis', 'Quality Control', 'Real-time Processing'],
      popular: false
    },
    {
      name: 'AI Workflow Automation',
      description: 'Intelligent process automation with machine learning-powered decision making.',
      pricing: { starter: 129, professional: 349, enterprise: 899 },
      features: ['Process Automation', 'Smart Routing', 'Decision Trees', 'Integration Hub', 'Performance Analytics', 'Custom Workflows'],
      popular: true
    },
    {
      name: 'AI Predictive Modeling',
      description: 'Advanced machine learning models for forecasting and predictive analytics.',
      pricing: { starter: 249, professional: 599, enterprise: 1499 },
      features: ['Time Series Analysis', 'Regression Models', 'Classification', 'Clustering', 'Model Training', 'A/B Testing'],
      popular: false
    }
  ]

  const itServicesPricing = [
    {
      name: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure solutions with multi-cloud support.',
      pricing: { starter: 299, professional: 699, enterprise: 1499 },
      features: ['Multi-cloud Management', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery', 'Cost Optimization', '24/7 Monitoring'],
      popular: true
    },
    {
      name: 'Advanced Cybersecurity Suite',
      description: 'Comprehensive security solutions with threat detection and incident response.',
      pricing: { starter: 399, professional: 899, enterprise: 1999 },
      features: ['Threat Detection', 'Incident Response', 'Compliance Management', 'Security Audits', 'Penetration Testing', 'Security Training'],
      popular: false
    },
    {
      name: 'Custom Web Development',
      description: 'Modern web applications built with cutting-edge technologies.',
      pricing: { starter: 199, professional: 499, enterprise: 1299 },
      features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization', 'Security Implementation', 'API Integration', 'Maintenance'],
      popular: false
    },
    {
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      pricing: { starter: 299, professional: 699, enterprise: 1599 },
      features: ['Native Development', 'Cross-platform', 'UI/UX Design', 'App Store Optimization', 'Push Notifications', 'Analytics Integration'],
      popular: false
    },
    {
      name: 'IT Strategy Consulting',
      description: 'Strategic IT consulting to align technology with business goals.',
      pricing: { starter: 149, professional: 349, enterprise: 799 },
      features: ['IT Strategy', 'Technology Assessment', 'Digital Transformation', 'Process Optimization', 'Vendor Management', 'ROI Analysis'],
      popular: true
    },
    {
      name: '24/7 IT Support Services',
      description: 'Comprehensive IT support with helpdesk and remote assistance.',
      pricing: { starter: 199, professional: 449, enterprise: 899 },
      features: ['24/7 Helpdesk', 'Remote Support', 'Proactive Monitoring', 'Issue Resolution', 'User Training', 'Documentation'],
      popular: false
    }
  ]

  const microSaasPricing = [
    {
      name: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation platform with multi-language support.',
      pricing: { starter: 29, professional: 79, enterprise: 199 },
      features: ['GPT-4 Integration', 'SEO Optimization', 'Multi-language Support', 'Brand Voice Training', 'Content Templates', 'Plagiarism Check'],
      popular: true
    },
    {
      name: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence dashboard with customizable widgets.',
      pricing: { starter: 39, professional: 99, enterprise: 249 },
      features: ['Real-time Data', 'Custom Dashboards', 'Automated Reports', 'Data Visualization', 'API Integration', 'Mobile App'],
      popular: false
    },
    {
      name: 'Smart Appointment Scheduler',
      description: 'Intelligent scheduling system with calendar integration and automated reminders.',
      pricing: { starter: 19, professional: 49, enterprise: 129 },
      features: ['Calendar Sync', 'Automated Reminders', 'Payment Integration', 'Multi-timezone', 'Custom Booking Forms', 'SMS/Email Notifications'],
      popular: true
    },
    {
      name: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing platform with AI-powered subject line optimization.',
      pricing: { starter: 25, professional: 65, enterprise: 159 },
      features: ['AI Subject Lines', 'Send Time Optimization', 'A/B Testing', 'Email Templates', 'List Management', 'Analytics'],
      popular: false
    },
    {
      name: 'Smart Expense Tracker',
      description: 'AI-powered expense management with receipt scanning and automated categorization.',
      pricing: { starter: 15, professional: 35, enterprise: 89 },
      features: ['Receipt Scanning', 'AI Categorization', 'Tax Preparation', 'Multi-currency', 'Team Management', 'Reporting'],
      popular: false
    },
    {
      name: 'Inventory Management Pro',
      description: 'Advanced inventory tracking with predictive analytics and automated reordering.',
      pricing: { starter: 45, professional: 95, enterprise: 199 },
      features: ['Real-time Tracking', 'Predictive Analytics', 'Automated Reordering', 'Barcode Scanning', 'Multi-location', 'Reporting'],
      popular: false
    }
  ]

  const getAllServices = () => {
    return [
      ...aiServicesPricing.map(service => ({ ...service, category: 'ai' })),
      ...itServicesPricing.map(service => ({ ...service, category: 'it' })),
      ...microSaasPricing.map(service => ({ ...service, category: 'saas' }))
    ]
  }

  const getFilteredServices = () => {
    const allServices = getAllServices()
    return selectedCategory === 'all' 
      ? allServices 
      : allServices.filter(service => service.category === selectedCategory)
  }

  const getPrice = (price: number) => {
    if (billingPeriod === 'yearly') {
      return Math.round(price * 10) // 10 months for yearly billing
    }
    return price
  }

  const getPeriod = () => {
    return billingPeriod === 'yearly' ? '/year' : '/month'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI and IT services with flexible pricing options.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-1 text-xs text-green-400">(Save 17%)</span>
              </span>
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

      {/* Services Pricing Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredServices().map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">${getPrice(service.pricing.starter)}</span>
                    <span className="text-gray-300 ml-1">{getPeriod()}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Pricing Tiers:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Starter:</span>
                      <span className="text-green-400">${getPrice(service.pricing.starter)}{getPeriod()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Professional:</span>
                      <span className="text-blue-400">${getPrice(service.pricing.professional)}{getPeriod()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Enterprise:</span>
                      <span className="text-purple-400">${getPrice(service.pricing.enterprise)}{getPeriod()}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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

                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm">
                    Get Started
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

      {/* Enterprise Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Custom solutions tailored to your specific business requirements and scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">AI Enterprise Suite</h3>
              </div>
              <p className="text-gray-300 mb-6">Complete AI solution with custom models, dedicated support, and white-label options.</p>
              <div className="text-3xl font-bold text-cyan-400 mb-4">Custom Pricing</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  Custom AI models
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  Dedicated support team
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  White-label solution
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  On-premise deployment
                </li>
              </ul>
              <button className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white py-3 px-6 rounded-lg font-medium transition-all duration-300">
                Contact Sales
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">IT Enterprise Suite</h3>
              </div>
              <p className="text-gray-300 mb-6">Comprehensive IT infrastructure with 24/7 support and custom development.</p>
              <div className="text-3xl font-bold text-cyan-400 mb-4">Custom Pricing</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  Custom infrastructure
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  Custom development
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  SLA guarantee
                </li>
              </ul>
              <button className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white py-3 px-6 rounded-lg font-medium transition-all duration-300">
                Contact Sales
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Micro SaaS Enterprise</h3>
              </div>
              <p className="text-gray-300 mb-6">Complete micro-SaaS platform with unlimited tools and custom development.</p>
              <div className="text-3xl font-bold text-cyan-400 mb-4">Custom Pricing</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  Unlimited micro-SaaS tools
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  Custom analytics
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  White-label solution
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
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
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We understand that every business is unique. Contact us to discuss your specific requirements and get a tailored quote.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                {contactInfo.phone}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-gray-300 text-center">{contactInfo.address}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Contact Sales
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

export default PricingPage