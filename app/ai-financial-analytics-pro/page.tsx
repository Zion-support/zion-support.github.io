'use client'

import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, BarChart, Target, CheckCircle, ArrowRight, DollarSign, TrendingUp, Shield } from 'lucide-react'

const AIFinancialAnalyticsProPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze your financial data to provide actionable insights and predictions.'
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive financial analytics with real-time data visualization and custom reporting capabilities.'
    },
    {
      icon: Target,
      title: 'Risk Assessment',
      description: 'Intelligent risk analysis and portfolio optimization to maximize returns while minimizing exposure.'
    },
    {
      icon: Shield,
      title: 'Compliance Monitoring',
      description: 'Automated compliance tracking and regulatory reporting to ensure adherence to financial standards.'
    }
  ]

  const analyticsTypes = [
    {
      category: 'Revenue Analytics',
      icon: DollarSign,
      description: 'Track revenue streams, identify growth opportunities, and optimize pricing strategies.'
    },
    {
      category: 'Cost Analysis',
      icon: TrendingUp,
      description: 'Monitor expenses, identify cost-saving opportunities, and optimize budget allocation.'
    },
    {
      category: 'Investment Insights',
      icon: Target,
      description: 'Analyze investment performance and provide recommendations for portfolio optimization.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Financial Analytics
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Pro
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your financial data into actionable insights with our AI-powered analytics platform. 
            Make smarter investment decisions and optimize your financial performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-400/10 transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI-powered financial analytics for data-driven decision making
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/10 transition-all duration-300">
                <feature.icon className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Analytics Categories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive financial analysis across all key areas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {analyticsTypes.map((type, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{type.category}</h3>
                <p className="text-gray-300">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Optimize Your Finances?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start making data-driven financial decisions with AI-powered analytics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIFinancialAnalyticsProPage