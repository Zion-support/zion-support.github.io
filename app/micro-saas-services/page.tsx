'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, Cpu, DollarSign, Clock, Users, Star, Zap } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function MicroSAASServicesPage() {
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization, scheduling, and productivity insights.',
      features: ['Smart Prioritization', 'Auto Scheduling', 'Progress Tracking', 'Team Collaboration'],
      pricing: '$19/month',
      link: '/ai-task-manager',
      popular: true
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning, categorization, and financial insights.',
      features: ['Receipt Scanning', 'Auto Categorization', 'Budget Alerts', 'Tax Preparation'],
      pricing: '$15/month',
      link: '/ai-expense-tracker',
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: ['Secure Storage', 'Auto Generation', 'Breach Monitoring', 'Multi-device Sync'],
      pricing: '$12/month',
      link: '/ai-password-manager',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Create professional invoices automatically with AI-powered templates and payment tracking.',
      features: ['Auto Generation', 'Custom Templates', 'Payment Tracking', 'Tax Calculations'],
      pricing: '$25/month',
      link: '/ai-invoice-generator',
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights, medication reminders, and wellness recommendations.',
      features: ['Health Monitoring', 'Medication Reminders', 'Wellness Tips', 'Doctor Reports'],
      pricing: '$18/month',
      link: '/ai-health-tracker',
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8 text-red-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and time blocking.',
      features: ['Smart Scheduling', 'Meeting Optimization', 'Time Blocking', 'Integration Sync'],
      pricing: '$22/month',
      link: '/ai-smart-calendar',
      popular: false
    },
    {
      icon: <Cpu className="w-8 h-8 text-indigo-500" />,
      title: 'AI Time Tracker',
      description: 'Automated time tracking with AI-powered productivity analysis and work pattern insights.',
      features: ['Auto Tracking', 'Productivity Analysis', 'Work Patterns', 'Team Reports'],
      pricing: '$16/month',
      link: '/ai-time-tracker',
      popular: false
    },
    {
      icon: <Brain className="w-8 h-8 text-teal-500" />,
      title: 'AI Project Manager',
      description: 'Intelligent project management with AI risk assessment, resource optimization, and timeline prediction.',
      features: ['Risk Assessment', 'Resource Optimization', 'Timeline Prediction', 'Team Coordination'],
      pricing: '$29/month',
      link: '/ai-project-manager',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-cyan-500" />,
      title: 'AI CRM Assistant',
      description: 'Customer relationship management with AI-powered lead scoring, follow-up automation, and insights.',
      features: ['Lead Scoring', 'Follow-up Automation', 'Customer Insights', 'Sales Forecasting'],
      pricing: '$35/month',
      link: '/ai-crm-assistant',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-yellow-500" />,
      title: 'AI Email Manager',
      description: 'Smart email management with AI filtering, auto-responses, and priority organization.',
      features: ['Smart Filtering', 'Auto Responses', 'Priority Organization', 'Spam Protection'],
      pricing: '$14/month',
      link: '/ai-email-manager',
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8 text-emerald-500" />,
      title: 'AI Social Media Manager',
      description: 'Automated social media management with AI content creation, scheduling, and engagement optimization.',
      features: ['Content Creation', 'Auto Scheduling', 'Engagement Optimization', 'Analytics'],
      pricing: '$28/month',
      link: '/ai-social-media-manager',
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8 text-rose-500" />,
      title: 'AI Backup Manager',
      description: 'Intelligent backup management with AI-powered file organization and recovery optimization.',
      features: ['Auto Backup', 'File Organization', 'Recovery Optimization', 'Version Control'],
      pricing: '$11/month',
      link: '/ai-backup-manager',
      popular: false
    }
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: 'Instant Setup',
      description: 'Get started in minutes with our intuitive, AI-powered micro applications.'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: 'Affordable Pricing',
      description: 'Access powerful AI tools starting from just $11/month with no hidden fees.'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Scalable Solutions',
      description: 'Easily upgrade or add more micro apps as your business grows.'
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: 'AI-Powered',
      description: 'Every micro app is enhanced with artificial intelligence for maximum efficiency.'
    }
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: ['3 Micro Apps', 'Basic AI Features', 'Email Support', '5GB Storage'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: ['8 Micro Apps', 'Advanced AI Features', 'Priority Support', '50GB Storage'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: ['Unlimited Apps', 'Custom AI Models', '24/7 Support', 'Unlimited Storage'],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SAAS applications with AI intelligence. Task management, expense tracking, password management, and more. Starting from $11/month." />
        <meta name="keywords" content="micro SAAS, AI applications, task manager, expense tracker, password manager, productivity tools" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SAAS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, affordable micro applications designed to solve specific business problems with AI intelligence. 
              Get the tools you need without the complexity of enterprise software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Apps
              </Link>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Micro SAAS Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <span className="text-sm text-gray-400">per month</span>
                  </div>
                  <Link 
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Try Free
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Tiers */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${tier.popular ? 'ring-2 ring-purple-400' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-1">{tier.period}</span>
                    </div>
                    <p className="text-gray-300">{tier.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of users who are already using our AI-powered micro applications to streamline their workflows and increase productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
