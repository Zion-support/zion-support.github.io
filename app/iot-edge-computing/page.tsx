'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Cpu, Wifi, Database, Shield, Brain, Globe, Zap, BarChart3, Cloud, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const IoTEdgeComputingPage: React.FC = () => {
  const features = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: 'Edge Processing',
      description: 'Process data locally at the edge for reduced latency and improved performance.',
      benefits: ['Real-time processing', 'Reduced latency', 'Bandwidth optimization', 'Offline capability']
    },
    {
      icon: <Wifi className="w-8 h-8 text-green-500" />,
      title: 'IoT Connectivity',
      description: 'Comprehensive IoT connectivity solutions for seamless device communication.',
      benefits: ['Multiple protocols', 'Secure communication', 'Device management', 'Network optimization']
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Edge Data Management',
      description: 'Efficient data storage and management at the edge for optimal performance.',
      benefits: ['Local storage', 'Data synchronization', 'Backup solutions', 'Data analytics']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Edge Security',
      description: 'Comprehensive security measures to protect edge devices and data.',
      benefits: ['Device authentication', 'Data encryption', 'Access control', 'Threat detection']
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: 'AI at the Edge',
      description: 'Deploy AI models directly on edge devices for intelligent processing.',
      benefits: ['Local AI inference', 'Model optimization', 'Real-time decisions', 'Privacy protection']
    },
    {
      icon: <Cloud className="w-8 h-8 text-indigo-500" />,
      title: 'Cloud Integration',
      description: 'Seamless integration between edge devices and cloud platforms.',
      benefits: ['Hybrid architecture', 'Data synchronization', 'Scalable processing', 'Centralized management']
    }
  ]

  const applications = [
    'Smart Manufacturing',
    'Autonomous Vehicles',
    'Smart Cities',
    'Healthcare Monitoring',
    'Retail Analytics',
    'Energy Management',
    'Agriculture IoT',
    'Industrial Automation'
  ]

  const pricingPlans = [
    {
      name: 'Basic Edge',
      price: '$1,999/month',
      description: 'Essential edge computing for small deployments',
      features: [
        'Basic edge devices',
        'Standard connectivity',
        'Email support',
        'Basic monitoring',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'Professional Edge',
      price: '$4,999/month',
      description: 'Advanced edge computing for growing businesses',
      features: [
        'Advanced edge devices',
        'High-speed connectivity',
        'Priority support',
        'Advanced monitoring',
        'AI capabilities',
        'Custom integration',
        'Training programs'
      ],
      popular: true
    },
    {
      name: 'Enterprise Edge',
      price: 'Custom',
      description: 'Full-scale edge computing for large organizations',
      features: [
        'Custom edge infrastructure',
        'Dedicated connectivity',
        '24/7 dedicated support',
        'Full monitoring suite',
        'Advanced AI',
        'Custom solutions',
        'Full integration',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const stats = [
    { number: '50%', label: 'Latency Reduction' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Monitoring' },
    { number: '100%', label: 'Security Compliance' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IoT Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IoT edge computing solutions including edge processing, connectivity, data management, and AI deployment at the edge." />
        <meta name="keywords" content="IoT edge computing, edge processing, IoT connectivity, edge AI, smart devices, real-time processing, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              IoT Edge
            </span>
            <br />
            <span className="text-white">Computing</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your IoT infrastructure with edge computing solutions. Process data locally, 
            reduce latency, and enable real-time decision making at the edge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Edge Computing Consultation
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
              Edge Computing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive edge computing solutions designed to optimize IoT performance and enable real-time processing.
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
              Edge Computing Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our edge computing solutions are designed for various industries and use cases.
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
              Choose the plan that fits your edge computing needs. All plans include our core infrastructure.
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
                Ready to Deploy Edge Computing?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let our edge computing experts help you design and implement the perfect IoT edge solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Edge Computing Consultation
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

export default IoTEdgeComputingPage