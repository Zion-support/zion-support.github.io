'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Smartphone, Brain, Database, Shield, Code, Cloud, Zap, Users, BarChart3, CreditCard } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function MicroSaasServicesPage() {
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, scheduling, and productivity insights.',
      features: ['Smart Prioritization', 'Auto-scheduling', 'Team Collaboration', 'Productivity Analytics'],
      pricing: '$29/month',
      href: '/ai-task-manager',
      category: 'Productivity'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning, categorization, and financial insights.',
      features: ['Receipt Scanning', 'Auto-categorization', 'Budget Tracking', 'Financial Reports'],
      pricing: '$19/month',
      href: '/ai-expense-tracker',
      category: 'Finance'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: ['Secure Storage', 'Auto-fill', 'Security Alerts', 'Team Sharing'],
      pricing: '$15/month',
      href: '/ai-password-manager',
      category: 'Security'
    },
    {
      icon: <Code className="w-8 h-8 text-red-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with smart templates, payment tracking, and client management.',
      features: ['Smart Templates', 'Payment Tracking', 'Client Portal', 'Tax Calculations'],
      pricing: '$25/month',
      href: '/ai-invoice-generator',
      category: 'Business'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business analytics with AI-powered insights and predictive forecasting.',
      features: ['Real-time Data', 'Predictive Analytics', 'Custom Dashboards', 'Automated Reports'],
      pricing: '$39/month',
      href: '/ai-analytics-dashboard',
      category: 'Analytics'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: 'AI CRM Assistant',
      description: 'Intelligent customer relationship management with automated follow-ups and lead scoring.',
      features: ['Lead Scoring', 'Auto Follow-ups', 'Email Templates', 'Sales Pipeline'],
      pricing: '$45/month',
      href: '/ai-crm-assistant',
      category: 'Sales'
    },
    {
      icon: <Cloud className="w-8 h-8 text-indigo-500" />,
      title: 'AI Backup Manager',
      description: 'Intelligent backup solutions with automated scheduling and disaster recovery planning.',
      features: ['Auto Backup', 'Cloud Storage', 'Version Control', 'Disaster Recovery'],
      pricing: '$35/month',
      href: '/ai-backup-manager',
      category: 'Storage'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management with automated responses, scheduling, and priority filtering.',
      features: ['Smart Responses', 'Email Scheduling', 'Priority Filtering', 'Template Library'],
      pricing: '$22/month',
      href: '/ai-email-assistant',
      category: 'Communication'
    }
  ]

  const categories = [
    { name: 'All', count: microSaasServices.length, active: true },
    { name: 'Productivity', count: microSaasServices.filter(s => s.category === 'Productivity').length, active: false },
    { name: 'Finance', count: microSaasServices.filter(s => s.category === 'Finance').length, active: false },
    { name: 'Security', count: microSaasServices.filter(s => s.category === 'Security').length, active: false },
    { name: 'Business', count: microSaasServices.filter(s => s.category === 'Business').length, active: false },
    { name: 'Analytics', count: microSaasServices.filter(s => s.category === 'Analytics').length, active: false },
    { name: 'Sales', count: microSaasServices.filter(s => s.category === 'Sales').length, active: false },
    { name: 'Storage', count: microSaasServices.filter(s => s.category === 'Storage').length, active: false },
    { name: 'Communication', count: microSaasServices.filter(s => s.category === 'Communication').length, active: false }
  ]

  const benefits = [
    {
      icon: <Smartphone className="w-6 h-6 text-blue-500" />,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and workflows'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive setup process'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Specialized micro SaaS solutions for modern businesses. AI-powered tools for productivity, finance, security, and more. Start with our affordable micro SaaS services." />
        <meta name="keywords" content="micro SaaS, SaaS tools, business software, productivity tools, AI tools, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized AI-powered tools designed for modern businesses. Streamline your operations 
              with our affordable micro SaaS solutions that solve specific business challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SaaS Tools?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for efficiency, designed for success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive collection of specialized business tools
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  category.active
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-400">{service.pricing}</span>
                  <a
                    href={service.href}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-transform text-sm"
                  >
                    Try Now
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No hidden fees, no long-term contracts. Choose the tools you need, when you need them.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">$15<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  1 Micro SaaS Tool
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Basic Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Standard Features
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-500 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">$35<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Up to 3 Micro SaaS Tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Priority Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Advanced Features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Team Collaboration
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">$75<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Unlimited Tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  24/7 Premium Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  All Features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  Custom Integrations
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Streamline Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start with our micro SaaS tools and see the difference they can make in your daily operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Start Free Trial
              </a>
              <a 
                href="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View All Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}