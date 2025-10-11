'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Server, Cpu, Zap, Globe, Shield, Brain, Wifi, Database } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIEdgeComputingPage() {
  const features = [
    {
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: 'Distributed AI Processing',
      description: 'Deploy AI models at the edge for ultra-low latency processing and real-time decision making.',
      benefits: ['Sub-10ms Latency', 'Real-time Processing', 'Distributed Models', 'Edge Optimization']
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: 'Edge Hardware Integration',
      description: 'Seamless integration with edge devices, IoT sensors, and industrial equipment.',
      benefits: ['IoT Integration', 'Industrial Equipment', 'Sensor Networks', 'Hardware Optimization']
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'Intelligent Caching',
      description: 'Smart caching algorithms that predict and pre-load data for optimal performance.',
      benefits: ['Predictive Caching', 'Smart Pre-loading', 'Bandwidth Optimization', 'Performance Boost']
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: 'Global Edge Network',
      description: 'Worldwide edge infrastructure with automatic failover and load balancing.',
      benefits: ['Global Coverage', 'Auto Failover', 'Load Balancing', 'Geographic Distribution']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Edge Security',
      description: 'Advanced security protocols designed specifically for edge computing environments.',
      benefits: ['Edge Security', 'Data Encryption', 'Secure Communication', 'Threat Detection']
    },
    {
      icon: <Brain className="w-8 h-8 text-cyan-500" />,
      title: 'AI Model Optimization',
      description: 'Automated model compression and optimization for edge deployment.',
      benefits: ['Model Compression', 'Quantization', 'Pruning', 'Edge Optimization']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small deployments',
      features: [
        'Up to 10 edge nodes',
        'Basic AI models',
        'Standard support',
        '1TB data transfer',
        'Basic monitoring',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 100 edge nodes',
        'Advanced AI models',
        'Priority support',
        '10TB data transfer',
        'Advanced monitoring',
        '24/7 support',
        'Custom models'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'Full-featured solution for large organizations',
      features: [
        'Unlimited edge nodes',
        'Custom AI models',
        'Dedicated support',
        'Unlimited data transfer',
        'Full monitoring suite',
        '24/7 dedicated support',
        'White-label options',
        'Custom infrastructure'
      ],
      popular: false
    }
  ]

  const useCases = [
    {
      title: 'Autonomous Vehicles',
      description: 'Real-time AI processing for self-driving cars and autonomous systems',
      icon: <Wifi className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Smart Manufacturing',
      description: 'AI-powered quality control and predictive maintenance in factories',
      icon: <Cpu className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Retail Analytics',
      description: 'Real-time customer behavior analysis and inventory management',
      icon: <Brain className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Healthcare IoT',
      description: 'Real-time patient monitoring and medical device integration',
      icon: <Shield className="w-6 h-6 text-red-500" />
    }
  ]

  const benefits = [
    {
      title: 'Ultra-Low Latency',
      description: 'Process data locally for sub-10ms response times',
      value: '< 10ms'
    },
    {
      title: 'Bandwidth Savings',
      description: 'Reduce data transfer costs by processing at the edge',
      value: '90%'
    },
    {
      title: 'Reliability',
      description: 'Continue operating even when cloud connectivity is lost',
      value: '99.9%'
    },
    {
      title: 'Scalability',
      description: 'Easily scale from single devices to global networks',
      value: '∞'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI edge computing platform with distributed processing, ultra-low latency, and global edge infrastructure." />
        <meta name="keywords" content="AI edge computing, distributed AI, edge processing, IoT AI, real-time AI, edge infrastructure" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-blue-600/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-6">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Edge Computing
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Bring AI to the edge with our revolutionary platform. Ultra-low latency processing, 
                distributed intelligence, and global edge infrastructure for the next generation of applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Edge AI?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your applications with the power of edge computing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105 text-center">
                  <div className="text-4xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">{benefit.value}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Industry Applications</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Edge AI solutions for every industry and use case
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105 text-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Advanced Edge Features</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge technology for distributed AI processing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Enterprise Pricing</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Scale your edge AI deployment with our flexible pricing plans
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105 relative ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
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
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-4">Deploy AI at the Edge</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Start your free trial and experience the power of distributed AI processing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Contact Sales
                  </button>
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