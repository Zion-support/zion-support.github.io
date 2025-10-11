'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, BarChart, Shield, Zap, Globe, Cpu } from 'lucide-react'

const AIBlockchainSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that enhance blockchain operations with intelligent automation.',
      benefits: ['Smart contracts', 'Automated execution', 'Intelligent routing', 'Predictive analytics']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time blockchain data visualization.',
      benefits: ['Real-time data', 'Custom dashboards', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced security features with AI-powered threat detection and prevention.',
      benefits: ['Threat detection', 'Security monitoring', 'Risk assessment', 'Compliance standards']
    },
    {
      icon: Zap,
      title: 'Smart Contracts',
      description: 'AI-enhanced smart contracts that adapt and optimize based on conditions.',
      benefits: ['Adaptive contracts', 'Auto-optimization', 'Conditional logic', 'Dynamic execution']
    },
    {
      icon: Globe,
      title: 'Multi-chain Support',
      description: 'Support for multiple blockchain networks with seamless interoperability.',
      benefits: ['Multi-chain', 'Interoperability', 'Cross-chain', 'Unified platform']
    },
    {
      icon: Cpu,
      title: 'Scalable Infrastructure',
      description: 'Scalable blockchain infrastructure that grows with your business needs.',
      benefits: ['Horizontal scaling', 'Performance optimization', 'Load balancing', 'Resource management']
    }
  ]

  const benefits = [
    'Increase transaction speed by 90%',
    'Reduce costs by 70%',
    'Improve security by 95%',
    'Enable seamless multi-chain operations'
  ]

  return (
    <>
      <Helmet>
        <title>AI Blockchain Solutions - Zion Tech Group | Intelligent Blockchain Technology</title>
        <meta name="description" content="Comprehensive blockchain solutions enhanced with AI technology. Smart contracts, DeFi platforms, and enterprise blockchain solutions powered by artificial intelligence." />
        <meta name="keywords" content="AI blockchain solutions, artificial intelligence, blockchain technology, smart contracts, DeFi, enterprise blockchain, AI solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Blockchain Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive blockchain solutions enhanced with AI technology. Smart contracts, DeFi platforms, and enterprise blockchain solutions powered by artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Learn More
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
              <p className="text-xl text-gray-300">
                Cutting-edge blockchain technology enhanced with AI capabilities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI Blockchain Solutions?
              </h2>
              <p className="text-xl text-gray-300">
                Transform your blockchain operations with intelligent automation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 text-white">✓</div>
                  </div>
                  <p className="text-gray-300 text-lg font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Deploy Blockchain Solutions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn how our AI blockchain solutions can revolutionize your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AIBlockchainSolutionsPage