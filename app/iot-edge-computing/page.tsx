import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Cpu, Zap, Shield, Globe, BarChart3, Network, Database, Clock } from 'lucide-react'

export default function IoTEdgeComputingPage() {
  const features = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: 'Edge Processing',
      description: 'Process data locally at the edge for reduced latency and improved performance.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Real-time Analytics',
      description: 'Instant data processing and analytics for immediate decision-making capabilities.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Secure Communication',
      description: 'End-to-end encryption and secure protocols for IoT device communication.'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Global Connectivity',
      description: 'Connect IoT devices worldwide with reliable, low-latency communication networks.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-500" />,
      title: 'Data Intelligence',
      description: 'AI-powered insights from IoT data to optimize operations and predict maintenance.'
    },
    {
      icon: <Network className="w-8 h-8 text-indigo-500" />,
      title: 'Scalable Infrastructure',
      description: 'Easily scale your IoT infrastructure as your business grows and evolves.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small IoT deployments',
      features: [
        'Up to 100 devices',
        'Basic edge processing',
        'Standard analytics',
        'Email support',
        'Basic security',
        'Cloud storage (10GB)',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing IoT operations',
      features: [
        'Up to 1,000 devices',
        'Advanced edge processing',
        'Real-time analytics',
        'Priority support',
        'Advanced security',
        'Cloud storage (100GB)',
        'Custom integrations',
        'White-label options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large-scale IoT deployments',
      features: [
        'Unlimited devices',
        'Premium edge processing',
        'AI-powered analytics',
        'Dedicated account manager',
        'Enterprise security',
        'Unlimited cloud storage',
        'Custom development',
        '24/7 phone support'
      ],
      popular: false
    }
  ]

  const useCases = [
    'Smart Manufacturing',
    'Predictive Maintenance',
    'Smart Cities',
    'Connected Vehicles',
    'Healthcare Monitoring',
    'Agricultural IoT',
    'Energy Management',
    'Retail Analytics'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IoT Edge Computing - Zion Tech Group | Advanced IoT Solutions</title>
        <meta name="description" content="Transform your IoT operations with our advanced edge computing solutions. Real-time processing, analytics, and secure connectivity for IoT devices." />
        <meta name="keywords" content="IoT edge computing, IoT solutions, edge processing, real-time analytics, IoT security, connected devices" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              IoT Edge Computing
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your IoT operations with advanced edge computing solutions. 
              Process data locally, reduce latency, and gain real-time insights from your connected devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced IoT Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful edge computing solutions for modern IoT deployments
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your IoT deployment needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-500 bg-gradient-to-br from-purple-500/20 to-blue-500/20' 
                  : 'border-white/20 hover:border-white/40'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect For
              </h2>
              <p className="text-xl text-gray-300">
                Our IoT edge computing solutions are trusted across various industries
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IoT Operations?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start leveraging the power of edge computing for your IoT devices today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/it-services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View All IT Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}