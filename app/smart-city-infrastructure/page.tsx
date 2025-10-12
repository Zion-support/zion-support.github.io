'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Building, Wifi, Cpu, Database, Shield, Brain, Globe, Zap, BarChart3, Cloud, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const SmartCityInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: <Building className="w-8 h-8 text-blue-500" />,
      title: 'Smart Buildings',
      description: 'Intelligent building management systems for energy efficiency and occupant comfort.',
      benefits: ['Energy management', 'HVAC optimization', 'Lighting control', 'Occupant analytics']
    },
    {
      icon: <Wifi className="w-8 h-8 text-green-500" />,
      title: 'IoT Networks',
      description: 'Comprehensive IoT infrastructure for city-wide connectivity and data collection.',
      benefits: ['Sensor networks', 'Data collection', 'Real-time monitoring', 'Predictive maintenance']
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: 'Smart Traffic Management',
      description: 'AI-powered traffic management systems for optimized flow and reduced congestion.',
      benefits: ['Traffic optimization', 'Signal control', 'Incident detection', 'Route planning']
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Analytics Platform',
      description: 'Centralized data platform for city-wide analytics and decision making.',
      benefits: ['Data integration', 'Real-time analytics', 'Predictive modeling', 'Decision support']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security measures to protect smart city infrastructure and data.',
      benefits: ['Network security', 'Data protection', 'Access control', 'Threat monitoring']
    },
    {
      icon: <Cloud className="w-8 h-8 text-indigo-500" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud infrastructure to support smart city applications and services.',
      benefits: ['Scalable computing', 'Data storage', 'Service delivery', 'Cost optimization']
    }
  ]

  const applications = [
    'Smart Transportation',
    'Energy Management',
    'Waste Management',
    'Public Safety',
    'Environmental Monitoring',
    'Citizen Services',
    'Urban Planning',
    'Emergency Response'
  ]

  const pricingPlans = [
    {
      name: 'Basic Smart City',
      price: '$99,999/month',
      description: 'Essential smart city infrastructure for small municipalities',
      features: [
        'Basic IoT sensors',
        'Standard monitoring',
        'Email support',
        'Basic analytics',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'Professional Smart City',
      price: '$299,999/month',
      description: 'Advanced smart city solutions for growing municipalities',
      features: [
        'Advanced IoT networks',
        'Real-time monitoring',
        'Priority support',
        'Advanced analytics',
        'Custom applications',
        'Training programs',
        'Integration services'
      ],
      popular: true
    },
    {
      name: 'Enterprise Smart City',
      price: 'Custom',
      description: 'Full-scale smart city solutions for large metropolitan areas',
      features: [
        'Comprehensive IoT infrastructure',
        'Full monitoring suite',
        '24/7 dedicated support',
        'Custom analytics',
        'Full application suite',
        'Custom training',
        'Full integration',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const stats = [
    { number: '30%', label: 'Energy Savings' },
    { number: '50%', label: 'Traffic Reduction' },
    { number: '99.9%', label: 'System Uptime' },
    { number: '24/7', label: 'Monitoring' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Smart City Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Comprehensive smart city infrastructure solutions including IoT networks, smart buildings, traffic management, and data analytics." />
        <meta name="keywords" content="smart city, smart infrastructure, IoT, smart buildings, traffic management, urban planning, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Smart City
            </span>
            <br />
            <span className="text-white">Infrastructure</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your city with comprehensive smart infrastructure solutions. 
            IoT networks, smart buildings, traffic management, and data analytics for sustainable urban development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Smart City Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smart City Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive smart city infrastructure solutions designed to create sustainable, efficient, and livable urban environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smart City Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our smart city solutions address various urban challenges and improve quality of life for citizens.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {applications.map((application, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <p className="text-gray-300">{application}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your smart city needs. All plans include our core infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-white/20'
              } hover:border-purple-500 transition-all duration-300 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Build Your Smart City?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let our smart city experts help you design and implement the perfect infrastructure solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Smart City Consultation
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SmartCityInfrastructurePage