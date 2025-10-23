'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const AiAutonomousSystemsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Decision Making',
      description: 'AI systems that make autonomous decisions based on real-time data analysis and machine learning algorithms.'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Built-in security protocols and threat detection to ensure safe autonomous operations.'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive monitoring and analytics to track system performance and optimize operations.'
    },
    {
      icon: Target,
      title: 'Precision Control',
      description: 'High-precision control systems for accurate and reliable autonomous operations.'
    },
    {
      icon: Globe,
      title: 'Scalable Architecture',
      description: 'Designed to scale from single systems to enterprise-wide autonomous operations.'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamless integration with existing data sources and systems for comprehensive autonomous solutions.'
    }
  ]

  const benefits = [
    'Reduce operational costs by up to 60%',
    'Increase efficiency and productivity by 80%',
    'Minimize human error and improve accuracy',
    'Enable 24/7 autonomous operations',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <>
      <Helmet>
        <title>AI Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Cutting-edge autonomous systems powered by advanced AI technology." />
        <meta name="keywords" content="AI autonomous systems, artificial intelligence, autonomous technology, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Autonomous Systems
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Cutting-edge autonomous systems powered by advanced AI technology for modern businesses.
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
                Our AI autonomous systems come equipped with cutting-edge features designed for maximum efficiency and reliability.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
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
                Transform your business operations with our AI autonomous systems.
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
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg p-8 border border-purple-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Contact our experts to learn how AI autonomous systems can transform your business operations.
                </p>
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
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

export default AiAutonomousSystemsPage