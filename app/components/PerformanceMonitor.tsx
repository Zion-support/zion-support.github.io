'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react'

const PerformanceMonitorPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Monitoring',
      description: 'Advanced AI technology to monitor and analyze your system performance'
    },
    {
      icon: Zap,
      title: 'Real-time Analytics',
      description: 'Get instant insights into your system performance with comprehensive analytics'
    },
    {
      icon: Shield,
      title: 'Security Monitoring',
      description: 'Monitor security threats and vulnerabilities with advanced detection systems'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Monitor performance across multiple locations and data centers worldwide'
    }
  ]

  const benefits = [
    'Real-time performance monitoring',
    'AI-powered anomaly detection',
    'Automated performance optimization',
    'Comprehensive reporting and analytics',
    'Security threat monitoring',
    'Scalability recommendations',
    'Cost optimization insights',
    '24/7 monitoring and alerting'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Performance Monitor - Zion Tech Group</title>
        <meta name="description" content="Advanced performance monitoring solutions by Zion Tech Group. Monitor and optimize your system performance." />
        <meta name="keywords" content="performance monitoring, system monitoring, analytics, optimization, Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Performance Monitor
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Monitor and optimize your system performance with our advanced monitoring solutions. 
            Get real-time insights and automated optimizations for maximum efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Performance Monitoring Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Monitor Performance?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact our experts to discuss your performance monitoring needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerformanceMonitorPage