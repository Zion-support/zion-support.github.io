'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Calculator, BarChart, Shield, Zap, Globe, Cpu } from 'lucide-react'

const AIAccountingAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Calculator,
      title: 'Automated Bookkeeping',
      description: 'AI-powered bookkeeping that automatically categorizes transactions and maintains accurate records.',
      benefits: ['Transaction categorization', 'Automatic reconciliation', 'Error detection', 'Real-time updates']
    },
    {
      icon: BarChart,
      title: 'Financial Analytics',
      description: 'Advanced analytics and reporting with insights into your financial performance and trends.',
      benefits: ['Financial dashboards', 'Trend analysis', 'Custom reports', 'Performance metrics']
    },
    {
      icon: Shield,
      title: 'Tax Preparation',
      description: 'Automated tax preparation and filing with compliance monitoring and deadline reminders.',
      benefits: ['Tax calculations', 'Compliance monitoring', 'Deadline reminders', 'Automated filing']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant processing of financial data with real-time updates and notifications.',
      benefits: ['Real-time updates', 'Instant processing', 'Live notifications', 'Immediate insights']
    },
    {
      icon: Globe,
      title: 'Multi-currency Support',
      description: 'Support for multiple currencies with automatic conversion and international compliance.',
      benefits: ['Multi-currency', 'Auto conversion', 'International compliance', 'Exchange rate tracking']
    },
    {
      icon: Cpu,
      title: 'AI Insights',
      description: 'Intelligent insights and recommendations based on your financial data and patterns.',
      benefits: ['Smart recommendations', 'Pattern recognition', 'Predictive analytics', 'Financial forecasting']
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Accounting Assistant | Zion Tech Group - Intelligent Financial Management</title>
        <meta name="description" content="Streamline your accounting with AI-powered financial management tools. Automated bookkeeping, tax preparation, and financial analytics." />
        <meta name="keywords" content="AI accounting, financial management, bookkeeping automation, tax preparation, accounting software" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Accounting Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamline your accounting with AI-powered financial management tools. Automated bookkeeping, tax preparation, and financial analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Comprehensive Accounting Features
              </h2>
              <p className="text-xl text-gray-300">
                Our AI-powered accounting assistant covers all aspects of financial management
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0" />
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

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Automate Your Accounting?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn how our AI accounting assistant can streamline your financial management.
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

export default AIAccountingAssistantPage