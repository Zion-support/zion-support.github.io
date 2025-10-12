import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Smartphone, BarChart3, Shield, Users, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MicroSaasServicesPage() {
  const services = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automation.',
      features: ['Smart prioritization', 'Automated scheduling', 'Progress tracking', 'Team collaboration'],
      pricing: '$9.99/month'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'Expense Tracker',
      description: 'AI-powered expense tracking with automatic categorization and insights.',
      features: ['Auto categorization', 'Receipt scanning', 'Budget alerts', 'Financial reports'],
      pricing: '$7.99/month'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Password Manager',
      description: 'Secure password management with AI-enhanced security features.',
      features: ['Secure storage', 'Auto-fill', 'Breach monitoring', 'Multi-device sync'],
      pricing: '$4.99/month'
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-500" />,
      title: 'Invoice Generator',
      description: 'Automated invoice generation with AI-powered templates and customization.',
      features: ['Auto generation', 'Custom templates', 'Payment tracking', 'Tax calculations'],
      pricing: '$12.99/month'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Health Tracker',
      description: 'Comprehensive health tracking with AI insights and recommendations.',
      features: ['Activity tracking', 'Health insights', 'Goal setting', 'Progress reports'],
      pricing: '$6.99/month'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-500" />,
      title: 'Smart Calendar',
      description: 'AI-powered calendar management with smart scheduling and optimization.',
      features: ['Smart scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync'],
      pricing: '$8.99/month'
    }
  ]

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Affordable Pricing',
      description: 'Powerful tools at micro SaaS prices that fit any budget.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'AI-Powered',
      description: 'Leverage artificial intelligence for smarter, more efficient workflows.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and workflows.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Regular Updates',
      description: 'Continuous improvements and new features based on user feedback.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SaaS tools for productivity, finance, health, and more. AI-powered solutions at affordable prices." />
        <meta name="keywords" content="micro SaaS, productivity tools, AI-powered, task management, expense tracking, password manager" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS Tools That
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Simplify</span>
                <br />
                Your Life
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, AI-powered micro SaaS tools designed to boost your productivity 
                and streamline your daily tasks at affordable prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Try Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-24 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SaaS Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose from our collection of specialized tools designed to solve specific problems efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SaaS Tools?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We focus on creating simple, powerful tools that solve real problems without complexity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your free trial today and experience the power of AI-driven micro SaaS tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View All Tools
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}