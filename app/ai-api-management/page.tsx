'use client'
import React from 'react';
import { Helmet } from 'react-helmet-async'
import { BarChart, TrendingUp, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react'
import Footer from '../components/Footer'

const features = [
  {
    icon: BarChart,
    title: 'API Analytics',
    description: 'Comprehensive monitoring and analytics for your APIs',
    benefits: [
      'Real-time performance metrics',
      'Usage analytics and insights',
      'Error tracking and monitoring',
      'Custom dashboards'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Performance Optimization',
    description: 'AI-powered optimization for API performance',
    benefits: [
      'Automatic scaling',
      'Load balancing',
      'Caching strategies',
      'Response time optimization'
    ]
  },
  {
    icon: Shield,
    title: 'Security Management',
    description: 'Advanced security features for API protection',
    benefits: [
      'Authentication & authorization',
      'Rate limiting',
      'Threat detection',
      'Compliance monitoring'
    ]
  }
]

const benefits = [
  'Improve API performance by 60%',
  'Reduce downtime by 90%',
  'Enhance security posture',
  'Streamline API management',
  'Better developer experience',
  'Cost-effective scaling'
]

const AIAPIManagementPage = () => {
  return (
    <>
      <Helmet>
        <title>AI API Management - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered API management solutions for modern applications" />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI API Management
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Optimize, secure, and scale your APIs with our advanced AI-powered management platform.
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Powerful API Management Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage advanced AI technology to manage and optimize your APIs.
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
                Transform your API management with our AI-powered solutions.
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
              Ready to Optimize Your APIs?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start managing your APIs with AI-powered intelligence today.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center mx-auto">
              Start Your API Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default AIAPIManagementPage