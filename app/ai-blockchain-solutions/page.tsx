import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Link as LinkIcon, Shield, Zap, BarChart3, Lock, Database, Smartphone } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIBlockchainSolutionsPage() {
  const features = [
    {
      icon: <LinkIcon className="w-8 h-8 text-blue-500" />,
      title: 'Smart Contract Development',
      description: 'AI-powered smart contract creation and optimization for secure, automated business processes.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'DeFi Security Audits',
      description: 'Comprehensive security audits for DeFi protocols using AI to identify vulnerabilities and risks.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Blockchain Analytics',
      description: 'Advanced analytics and insights for blockchain transactions, trends, and market behavior.'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'NFT Marketplace Development',
      description: 'Complete NFT marketplace solutions with AI-powered features for creators and collectors.'
    }
  ]

  const blockchainServices = [
    'Smart contract development and auditing',
    'DeFi protocol design and implementation',
    'NFT marketplace and platform development',
    'Blockchain integration and migration',
    'Cryptocurrency wallet development',
    'Token economics and governance design',
    'Cross-chain bridge development',
    'Blockchain consulting and strategy'
  ]

  const pricingPlans = [
    {
      name: 'Startup',
      price: '$2,500',
      period: '/project',
      description: 'For new blockchain projects',
      features: [
        'Basic smart contract development',
        'Security audit report',
        'Documentation and testing',
        '2 weeks delivery',
        'Email support',
        '1 revision included'
      ],
      popular: false
    },
    {
      name: 'Growth',
      price: '$7,500',
      period: '/project',
      description: 'Most popular for growing projects',
      features: [
        'Advanced smart contracts',
        'Comprehensive security audit',
        'DeFi protocol development',
        '4 weeks delivery',
        'Phone & email support',
        '3 revisions included',
        'Post-launch support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$25,000',
      period: '/project',
      description: 'For large-scale implementations',
      features: [
        'Custom blockchain solutions',
        'Full security audit suite',
        'Multi-chain integration',
        '8+ weeks delivery',
        'Dedicated project manager',
        'Unlimited revisions',
        'Ongoing maintenance',
        'White-label options'
      ],
      popular: false
    }
  ]

  const stats = [
    { number: '50+', label: 'Blockchain Projects' },
    { number: '99.9%', label: 'Security Score' },
    { number: '$2M+', label: 'Assets Secured' },
    { number: '24/7', label: 'Monitoring' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Blockchain Solutions | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered blockchain solutions including smart contracts, DeFi protocols, NFT marketplaces, and security audits. Starting at $2,500/project." />
        <meta name="keywords" content="blockchain development, smart contracts, DeFi, NFT marketplace, cryptocurrency, blockchain security" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Blockchain Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build the future of decentralized applications with our AI-powered blockchain solutions. 
              From smart contracts to DeFi protocols, we deliver secure, scalable blockchain technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="#demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Blockchain Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our blockchain solutions leverage artificial intelligence to create more secure, efficient, and intelligent decentralized applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Blockchain Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end blockchain solutions for your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blockchainServices.map((service, index) => (
              <div key={index} className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                <span className="text-gray-300">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Project Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the package that best fits your blockchain project requirements and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-purple-500/50 scale-105' 
                    : 'border-white/20 hover:border-purple-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold text-center mb-6">
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
                  className={`w-full py-3 rounded-lg font-semibold text-center block transition-all duration-300 ${
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build on the Blockchain?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your blockchain project and create a secure, scalable solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}