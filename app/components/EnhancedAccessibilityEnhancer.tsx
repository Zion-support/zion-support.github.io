'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react'

const EnhancedAccessibilityEnhancerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Accessibility',
      description: 'Advanced AI technology to automatically enhance website accessibility and compliance'
    },
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'Instant accessibility improvements and real-time compliance monitoring'
    },
    {
      icon: Shield,
      title: 'Compliance Standards',
      description: 'Ensure WCAG 2.1 AA compliance and meet accessibility regulations'
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Support for multiple languages and international accessibility standards'
    }
  ]

  const benefits = [
    'Automatic accessibility scanning and fixes',
    'WCAG 2.1 AA compliance monitoring',
    'Screen reader optimization',
    'Keyboard navigation improvements',
    'Color contrast enhancement',
    'Alt text generation for images',
    'Focus management optimization',
    'ARIA labels and roles automation'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Enhanced Accessibility - Zion Tech Group</title>
        <meta name="description" content="Advanced accessibility enhancement solutions by Zion Tech Group. Make your website accessible to everyone." />
        <meta name="keywords" content="accessibility, WCAG compliance, web accessibility, inclusive design, Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Enhanced Accessibility
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Make your website accessible to everyone with our AI-powered accessibility enhancement solutions. 
            Ensure compliance with international standards and improve user experience for all users.
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
            Accessibility Features
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
            Ready to Enhance Accessibility?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact our experts to discuss your accessibility needs and get a customized solution.
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

export default EnhancedAccessibilityEnhancerPage