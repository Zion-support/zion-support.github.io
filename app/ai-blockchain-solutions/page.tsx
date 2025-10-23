'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const AiBlockchainSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Smart Contracts',
      description: 'AI-enhanced smart contracts for automated and intelligent blockchain operations.'
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Advanced security protocols and threat detection for blockchain networks.'
    },
    {
      icon: BarChart,
      title: 'Analytics Platform',
      description: 'Comprehensive analytics and monitoring for blockchain transactions and operations.'
    },
    {
      icon: Target,
      title: 'DeFi Integration',
      description: 'Seamless integration with DeFi protocols and decentralized applications.'
    },
    {
      icon: Globe,
      title: 'Multi-Chain Support',
      description: 'Support for multiple blockchain networks and cross-chain interoperability.'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Efficient data storage and management solutions for blockchain applications.'
    }
  ]

  const benefits = [
    'Reduce transaction costs by 70%',
    'Increase security and transparency',
    'Improve operational efficiency',
    'Enable decentralized applications',
    'Scale blockchain operations',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <>
      <Helmet>
        <title>AI Blockchain Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive blockchain solutions enhanced with AI technology." />
        <meta name="keywords" content="AI blockchain solutions, artificial intelligence, blockchain technology, AI solutions, intelligent blockchain" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Blockchain Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive blockchain solutions enhanced with AI technology for modern businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI blockchain solutions provide comprehensive tools for modern blockchain applications.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with our AI blockchain solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-8 border border-blue-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Contact our experts to learn how AI blockchain solutions can enhance your business.
                </p>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default AiBlockchainSolutionsPage