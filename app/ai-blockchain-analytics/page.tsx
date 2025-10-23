'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const AiBlockchainAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced Analytics',
      description: 'AI-powered blockchain analytics for comprehensive insights and pattern recognition.'
    },
    {
      icon: Shield,
      title: 'Security Monitoring',
      description: 'Real-time security monitoring and threat detection across blockchain networks.'
    },
    {
      icon: BarChart,
      title: 'Performance Metrics',
      description: 'Detailed performance metrics and analytics for blockchain operations.'
    },
    {
      icon: Target,
      title: 'Transaction Analysis',
      description: 'Deep transaction analysis and anomaly detection using machine learning.'
    },
    {
      icon: Globe,
      title: 'Multi-Chain Support',
      description: 'Support for multiple blockchain networks and cross-chain analytics.'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamless integration with existing data sources and blockchain networks.'
    }
  ]

  const benefits = [
    'Reduce fraud detection time by 90%',
    'Increase transaction security by 95%',
    'Improve compliance monitoring efficiency',
    'Enable real-time risk assessment',
    'Scale analytics across multiple chains',
    'Gain competitive advantage with advanced insights'
  ]

  return (
    <>
      <Helmet>
        <title>AI Blockchain Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced blockchain analytics powered by AI for comprehensive insights." />
        <meta name="keywords" content="AI blockchain analytics, artificial intelligence, blockchain technology, AI solutions, intelligent analytics" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Blockchain Analytics
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced blockchain analytics powered by AI for comprehensive insights and security monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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
                Our AI blockchain analytics platform provides comprehensive insights and security monitoring.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-indigo-400 mb-4" />
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
                Transform your blockchain operations with our AI analytics platform.
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
              <div className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-lg p-8 border border-indigo-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Contact our experts to learn how AI blockchain analytics can enhance your operations.
                </p>
                <button className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
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

export default AiBlockchainAnalyticsPage