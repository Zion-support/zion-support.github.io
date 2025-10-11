'use client'
import React from 'react';
import { Helmet } from 'react-helmet-async'
import { BarChart, TrendingUp, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react'
import Footer from '../components/Footer'

const features = [
  {
    icon: BarChart,
    title: 'Automated Bookkeeping',
    description: 'AI-powered automation for all your accounting needs',
    benefits: [
      'Automated data entry',
      'Transaction categorization',
      'Receipt processing',
      'Invoice management'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Financial Analytics',
    description: 'Comprehensive financial insights and reporting',
    benefits: [
      'Real-time financial dashboards',
      'Profit & loss analysis',
      'Cash flow forecasting',
      'Budget tracking'
    ]
  },
  {
    icon: Shield,
    title: 'Compliance Management',
    description: 'Stay compliant with automated tax and regulatory reporting',
    benefits: [
      'Tax preparation assistance',
      'Regulatory compliance',
      'Audit trail maintenance',
      'Custom workflows'
    ]
  }
]

const benefits = [
  'Reduce accounting time by 80%',
  'Eliminate manual data entry errors',
  'Improve financial accuracy',
  'Ensure regulatory compliance',
  'Real-time financial insights',
  'Seamless integration with existing systems'
]

const AIAccountingAssistantPage = () => {
  return (
    <>
      <Helmet>
        <title>AI Accounting Assistant - Zion Tech Group</title>
        <meta name="description" content="Streamline your accounting with our AI-powered assistant. Automated bookkeeping, financial analytics, and compliance management." />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">AI Accounting Assistant</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your accounting operations with our intelligent AI assistant. Automate bookkeeping, gain financial insights, and ensure compliance effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Powerful AI Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage advanced AI technology to streamline your accounting processes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Key Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your accounting operations with our AI-powered assistant.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Accounting?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered accounting solutions.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center mx-auto">
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default AIAccountingAssistantPage