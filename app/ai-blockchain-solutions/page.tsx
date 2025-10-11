'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Shield, Zap, Globe, Database, BarChart } from 'lucide-react'

const AIBlockchainSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Smart Contracts',
      description: 'AI-enhanced smart contracts with advanced security and optimization features.',
      benefits: ['Security auditing', 'Gas optimization', 'Automated testing', 'Vulnerability detection']
    },
    {
      icon: Zap,
      title: 'High-Performance Networks',
      description: 'Scalable blockchain networks optimized for speed and efficiency.',
      benefits: ['High throughput', 'Low latency', 'Scalable architecture', 'Cost optimization']
    },
    {
      icon: Globe,
      title: 'Cross-Chain Integration',
      description: 'Seamless integration across multiple blockchain networks and protocols.',
      benefits: ['Multi-chain support', 'Interoperability', 'Bridge solutions', 'Unified experience']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Advanced data management and storage solutions for blockchain applications.',
      benefits: ['Decentralized storage', 'Data integrity', 'Privacy protection', 'Scalable solutions']
    },
    {
      icon: BarChart,
      title: 'Analytics & Monitoring',
      description: 'Comprehensive analytics and monitoring for blockchain operations.',
      benefits: ['Real-time monitoring', 'Performance analytics', 'Usage tracking', 'Optimization insights']
    }
  ]

  const benefits = [
    'Reduce development time by 60%',
    'Improve security and reliability',
    'Enhance scalability and performance',
    'Lower operational costs',
    'Accelerate time to market',
    'Ensure compliance and standards'
  ]

  return (
    <>
      <Helmet>
        <title>AI Blockchain Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive blockchain solutions enhanced with AI technology. Smart contracts, DeFi, and enterprise blockchain solutions." />
        <meta name="keywords" content="AI blockchain solutions, smart contracts, DeFi, enterprise blockchain, blockchain development" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Blockchain
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive blockchain solutions enhanced with AI technology. 
              Build secure, scalable, and intelligent blockchain applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Blockchain Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful tools to build and manage blockchain solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
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
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Blockchain Solutions?
              </h2>
              <p className="text-xl text-gray-300">
                Proven results that drive blockchain success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Build Blockchain Solutions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your blockchain needs and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                  Contact Us
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default AIBlockchainSolutionsPage