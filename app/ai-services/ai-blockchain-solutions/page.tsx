import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, Brain, Zap, Lock, Clock, DollarSign, CheckCircle, Star, ArrowRight, Link as LinkIcon, Database, Globe, Key, Activity } from 'lucide-react'
import { Link } from 'react-router-dom'

const AIBlockchainSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: 'AI-Enhanced Security',
      description: 'Advanced AI algorithms for threat detection and smart contract security auditing'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Decentralized Architecture',
      description: 'Secure, transparent, and tamper-proof blockchain solutions for enterprise needs'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: 'Smart Contract Automation',
      description: 'AI-powered smart contracts that execute automatically based on predefined conditions'
    },
    {
      icon: <Lock className="w-6 h-6 text-orange-500" />,
      title: 'Cryptographic Security',
      description: 'Military-grade encryption and cryptographic protocols for maximum data protection'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small projects',
      features: [
        'Basic blockchain setup',
        'Smart contract deployment',
        'Basic AI security',
        'Standard support',
        'Documentation',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced blockchain features',
        'Custom smart contracts',
        'AI-powered security',
        'Priority support',
        'API access',
        'Custom integrations',
        'Performance monitoring',
        '24/7 monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Full blockchain suite',
        'Custom AI models',
        'White-label solution',
        '24/7 dedicated support',
        'SLA guarantee',
        'Custom deployment',
        'Advanced security',
        'Compliance support'
      ],
      popular: false
    }
  ]

  const solutions = [
    {
      title: 'Supply Chain Tracking',
      description: 'End-to-end supply chain visibility with immutable blockchain records',
      icon: <LinkIcon className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Digital Identity',
      description: 'Secure digital identity management with AI-powered verification',
      icon: <Key className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Smart Contracts',
      description: 'Automated contract execution with AI-enhanced security and compliance',
      icon: <Shield className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'DeFi Solutions',
      description: 'Decentralized finance applications with AI-powered risk management',
      icon: <Globe className="w-8 h-8 text-orange-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Blockchain Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered blockchain solutions with smart contracts, decentralized applications, and enterprise-grade security for modern businesses." />
        <meta name="keywords" content="AI blockchain, smart contracts, decentralized applications, blockchain security, DeFi, supply chain blockchain" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            AI-Powered Blockchain Technology
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Blockchain
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionize your business with AI-enhanced blockchain solutions. Build secure, 
            transparent, and intelligent decentralized applications that transform industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Start Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center">
              <Shield className="mr-2 h-5 w-5" />
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Blockchain Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge blockchain technology enhanced with artificial intelligence for maximum security and efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Blockchain Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From supply chain to DeFi, we provide end-to-end blockchain solutions for every industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300">{solution.description}</p>
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
              Enterprise Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the blockchain solution that fits your enterprise needs and security requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:bg-white/20 ${
                plan.popular ? 'border-purple-500 bg-purple-500/10' : 'border-white/20'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'border border-white text-white hover:bg-white hover:text-gray-900'
                  }`}
                >
                  Get Started
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
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform with Blockchain?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join forward-thinking enterprises already using AI-powered blockchain solutions to secure their future and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Consultation
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AIBlockchainSolutionsPage