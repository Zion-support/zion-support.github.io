'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Smartphone, Code, Star, Users, Clock, DollarSign } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function MicroSAASServicesPage() {
  const microSAASServices = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, automated scheduling, and smart notifications.',
      features: ['AI Priority Scoring', 'Smart Scheduling', 'Team Collaboration', 'Progress Analytics', 'Mobile App', 'API Integration'],
      pricing: '$19/month',
      originalPrice: '$39/month',
      popular: true,
      link: '/zion-ai-task-manager'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning, categorization, and financial insights powered by AI.',
      features: ['Receipt Scanning', 'Auto Categorization', 'Budget Alerts', 'Tax Preparation', 'Multi-Currency', 'Export Reports'],
      pricing: '$15/month',
      originalPrice: '$29/month',
      popular: false,
      link: '/zion-ai-expense-tracker'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security analysis and breach monitoring.',
      features: ['Secure Storage', 'Password Generator', 'Breach Monitoring', '2FA Integration', 'Team Sharing', 'Security Score'],
      pricing: '$12/month',
      originalPrice: '$24/month',
      popular: false,
      link: '/zion-ai-password-manager'
    },
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates, payment tracking, and client management.',
      features: ['Auto Templates', 'Payment Tracking', 'Client Management', 'Tax Calculations', 'Multi-Language', 'PDF Export'],
      pricing: '$25/month',
      originalPrice: '$49/month',
      popular: true,
      link: '/zion-ai-invoice-generator'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'AI CRM Lite',
      description: 'Lightweight CRM with AI-powered lead scoring, automated follow-ups, and sales analytics.',
      features: ['Lead Scoring', 'Auto Follow-ups', 'Sales Pipeline', 'Email Integration', 'Analytics Dashboard', 'Mobile Access'],
      pricing: '$29/month',
      originalPrice: '$59/month',
      popular: false,
      link: '/zion-ai-crm-lite'
    },
    {
      icon: <Clock className="w-8 h-8 text-cyan-500" />,
      title: 'AI Time Tracker',
      description: 'Intelligent time tracking with automatic project detection, productivity insights, and team monitoring.',
      features: ['Auto Detection', 'Productivity Insights', 'Team Monitoring', 'Project Tracking', 'Billable Hours', 'Reports'],
      pricing: '$18/month',
      originalPrice: '$35/month',
      popular: false,
      link: '/zion-ai-time-tracker'
    },
    {
      icon: <Globe className="w-8 h-8 text-pink-500" />,
      title: 'AI SEO Optimizer',
      description: 'AI-powered SEO analysis and optimization with keyword research, content suggestions, and ranking tracking.',
      features: ['Keyword Research', 'Content Analysis', 'Ranking Tracking', 'Competitor Analysis', 'Site Audit', 'Reports'],
      pricing: '$22/month',
      originalPrice: '$44/month',
      popular: true,
      link: '/zion-ai-seo-optimizer'
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-500" />,
      title: 'AI Data Cleaner',
      description: 'Automated data cleaning and validation with AI-powered duplicate detection and data quality scoring.',
      features: ['Duplicate Detection', 'Data Validation', 'Quality Scoring', 'Auto Correction', 'Bulk Processing', 'API Access'],
      pricing: '$35/month',
      originalPrice: '$69/month',
      popular: false,
      link: '/zion-ai-data-cleaner'
    }
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'AI-Powered Intelligence',
      description: 'All our micro SAAS applications leverage advanced AI to automate tasks and provide intelligent insights.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, SOC 2 compliance, and regular security audits.'
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: 'Global Accessibility',
      description: 'Access your applications from anywhere in the world with 99.9% uptime and multi-region deployment.'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'Team Collaboration',
      description: 'Built-in collaboration features that allow teams to work together seamlessly across all applications.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful, affordable micro SAAS applications designed to solve specific business problems with AI intelligence. Starting from $12/month." />
        <meta name="keywords" content="micro saas, AI applications, business tools, productivity, automation" />
      </Helmet>
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
      
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Micro <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">SAAS Services</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Powerful, affordable micro applications designed to solve specific business problems with AI intelligence. 
                Start from just $12/month and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#services" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  View All Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Get Free Trial
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Micro SAAS Applications</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Choose from our comprehensive suite of AI-powered micro applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-20">
              {microSAASServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105 relative ${service.popular ? 'ring-2 ring-purple-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-white">{service.pricing}</span>
                      <span className="text-gray-400 line-through text-sm">{service.originalPrice}</span>
                    </div>
                    <div className="text-green-400 text-sm font-semibold">50% OFF - Limited Time</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Try Free
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Choose Our Micro SAAS?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Built with enterprise-grade security and AI intelligence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 animate-pulse"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Get Started?</h2>
                  <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                    Start your free trial today and experience the power of AI-driven micro SAAS applications.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/contact"
                      className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group"
                    >
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                    >
                      Call +1 302 464 0950
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}