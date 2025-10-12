'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Shield, Brain } from 'lucide-react'

const EnhancedPerformanceMonitor: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: 'Real-time Monitoring',
      description: 'Monitor your application performance in real-time with detailed metrics and alerts.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Performance Optimization',
      description: 'Automatically optimize your application for maximum performance and speed.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Security Monitoring',
      description: 'Monitor security threats and vulnerabilities in real-time.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and recommendations for performance improvements.'
    }
  ]

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]

  return (
    <>
      <Helmet>
        <title>Enhanced Performance Monitor - Zion Tech Group</title>
        <meta name="description" content="Advanced performance monitoring and optimization solutions for modern applications." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Enhanced Performance Monitor
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Monitor, analyze, and optimize your application performance with our advanced AI-powered monitoring solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Start Monitoring
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful Performance Monitoring
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive monitoring solutions designed to keep your applications running at peak performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Performance Monitor?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the benefits of our advanced performance monitoring solution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Optimize Your Performance?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start monitoring your application performance today and see the difference.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mx-auto">
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default EnhancedPerformanceMonitor