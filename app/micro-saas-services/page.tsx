'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, Zap, Clock, DollarSign, Users, BarChart } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function MicroSaasServicesPage() {
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automated scheduling.',
      features: ['Smart prioritization', 'Auto-scheduling', 'Progress tracking', 'Team collaboration'],
      pricing: '$19/month',
      link: '/ai-task-manager'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning and intelligent categorization.',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget alerts', 'Tax preparation'],
      pricing: '$15/month',
      link: '/ai-expense-tracker'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      features: ['Secure storage', 'Password generation', 'Security alerts', 'Multi-device sync'],
      pricing: '$12/month',
      link: '/ai-password-manager'
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice generation with smart templates and payment tracking.',
      features: ['Auto-generation', 'Smart templates', 'Payment tracking', 'Tax calculations'],
      pricing: '$25/month',
      link: '/ai-invoice-generator'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights and wellness recommendations.',
      features: ['Health monitoring', 'AI insights', 'Wellness tips', 'Goal tracking'],
      pricing: '$18/month',
      link: '/ai-health-tracker'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with smart scheduling and meeting optimization.',
      features: ['Smart scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync'],
      pricing: '$22/month',
      link: '/ai-smart-calendar'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Email Optimizer',
      description: 'Email productivity tool with AI-powered writing assistance and inbox management.',
      features: ['Writing assistance', 'Inbox management', 'Email templates', 'Response suggestions'],
      pricing: '$16/month',
      link: '/ai-email-optimizer'
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-500" />,
      title: 'AI Time Tracker',
      description: 'Intelligent time tracking with productivity insights and automated reporting.',
      features: ['Auto-tracking', 'Productivity insights', 'Project billing', 'Team reports'],
      pricing: '$14/month',
      link: '/ai-time-tracker'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-pink-500" />,
      title: 'AI Budget Planner',
      description: 'Smart budget planning with AI recommendations and financial goal tracking.',
      features: ['Budget planning', 'AI recommendations', 'Goal tracking', 'Expense forecasting'],
      pricing: '$20/month',
      link: '/ai-budget-planner'
    },
    {
      icon: <Users className="w-8 h-8 text-teal-500" />,
      title: 'AI CRM Lite',
      description: 'Lightweight CRM with AI-powered lead scoring and customer insights.',
      features: ['Lead scoring', 'Customer insights', 'Pipeline management', 'Automated follow-ups'],
      pricing: '$28/month',
      link: '/ai-crm-lite'
    },
    {
      icon: <BarChart className="w-8 h-8 text-amber-500" />,
      title: 'AI Analytics Tools',
      description: 'Business analytics with AI-powered insights and automated reporting.',
      features: ['AI insights', 'Automated reports', 'Data visualization', 'Trend analysis'],
      pricing: '$35/month',
      link: '/analytics-tools'
    },
    {
      icon: <Globe className="w-8 h-8 text-rose-500" />,
      title: 'AI Website Builder',
      description: 'No-code website builder with AI-powered design and content generation.',
      features: ['No-code builder', 'AI design', 'Content generation', 'SEO optimization'],
      pricing: '$30/month',
      link: '/ai-website-builder'
    }
  ]

  const bundleOffers = [
    {
      name: 'Productivity Bundle',
      services: ['AI Task Manager', 'AI Time Tracker', 'AI Email Optimizer'],
      price: '$35/month',
      savings: 'Save $14/month'
    },
    {
      name: 'Finance Bundle',
      services: ['AI Expense Tracker', 'AI Invoice Generator', 'AI Budget Planner'],
      price: '$45/month',
      savings: 'Save $15/month'
    },
    {
      name: 'Complete Bundle',
      services: ['All 12 Micro SAAS Services'],
      price: '$199/month',
      savings: 'Save $100/month'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful, affordable micro SAAS applications designed to solve specific business problems with AI intelligence." />
        <meta name="keywords" content="micro SAAS, AI applications, productivity tools, business automation, affordable software" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Micro SAAS Applications
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Powerful, affordable micro applications designed to solve specific business problems with AI intelligence.
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
                  to="/demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Micro SAAS Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Choose from our collection of specialized AI-powered applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
              {microSaasServices.map((service, index) => (
                <Link key={index} to={service.link} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
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
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      Try Free
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bundle Offers */}
        <section className="px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Bundle Offers</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Save more with our carefully curated bundles
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
              {bundleOffers.map((bundle, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{bundle.name}</h3>
                  <div className="space-y-2 mb-6">
                    {bundle.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {service}
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{bundle.price}</div>
                    <div className="text-green-400 text-sm font-semibold mb-4">{bundle.savings}</div>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
                    >
                      Get Bundle
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Start your free trial today and experience the power of AI-driven micro applications.
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
                    to="/demo"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View Demo
                  </Link>
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