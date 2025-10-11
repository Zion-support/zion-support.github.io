'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, BarChart, Shield, Zap, Globe, Cpu } from 'lucide-react'

const AIBlockchainAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that analyze blockchain data and provide intelligent insights.',
      benefits: ['Pattern recognition', 'Anomaly detection', 'Predictive analytics', 'Smart insights']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time blockchain data visualization.',
      benefits: ['Real-time data', 'Custom dashboards', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Shield,
      title: 'Security Analysis',
      description: 'Advanced security analysis to detect threats and vulnerabilities in blockchain networks.',
      benefits: ['Threat detection', 'Vulnerability scanning', 'Security monitoring', 'Risk assessment']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Process blockchain data in real-time with high-speed analytics and instant insights.',
      benefits: ['Real-time processing', 'High-speed analytics', 'Instant insights', 'Live monitoring']
    },
    {
      icon: Globe,
      title: 'Multi-chain Support',
      description: 'Support for multiple blockchain networks with unified analytics and reporting.',
      benefits: ['Multi-chain', 'Unified analytics', 'Cross-chain insights', 'Network comparison']
    },
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'Machine learning models that continuously improve analysis accuracy and insights.',
      benefits: ['ML models', 'Continuous learning', 'Accuracy improvement', 'Adaptive analysis']
    }
  ]

  const benefits = [
    'Increase analysis accuracy by 90%',
    'Reduce analysis time by 80%',
    'Detect 95% of blockchain anomalies',
    'Provide real-time insights 24/7'
  ]

  return (
    <>
      <Helmet>
        <title>AI Blockchain Analytics - Zion Tech Group | Advanced Crypto Analytics</title>
        <meta name="description" content="Advanced blockchain analytics powered by AI for comprehensive insights. Analyze crypto markets, detect patterns, and make informed decisions with intelligent data analysis." />
        <meta name="keywords" content="AI blockchain analytics, artificial intelligence, blockchain technology, crypto analytics, cryptocurrency analysis, AI solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Blockchain Analytics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced blockchain analytics powered by AI for comprehensive insights. Analyze crypto markets, detect patterns, and make informed decisions with intelligent data analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
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
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300">
                Advanced analytics capabilities for blockchain data analysis
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0" />
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
                Why Choose AI Blockchain Analytics?
              </h2>
              <p className="text-xl text-gray-300">
                Transform your blockchain analysis with intelligent automation
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
                Ready to Analyze Blockchain Data?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn how our AI blockchain analytics can revolutionize your crypto insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
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

export default AIBlockchainAnalyticsPage