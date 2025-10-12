'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react'

const LoadingPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards for your data'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for your business needs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Loading - Zion Tech Group</title>
        <meta name="description" content="Loading page for Zion Tech Group - Advanced AI and IT Solutions" />
      </Helmet>

      <div className="text-center">
        {/* Loading Spinner */}
        <div className="mb-8">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto"></div>
        </div>

        {/* Loading Text */}
        <h1 className="text-3xl font-bold text-white mb-4">
          Loading Amazing Content
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto">
          Please wait while we prepare your personalized experience...
        </p>

        {/* Loading Progress */}
        <div className="w-full max-w-md mx-auto mb-8">
          <div className="bg-white/10 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <feature.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <h3 className="text-sm font-semibold text-white mb-1">{feature.title}</h3>
              <p className="text-xs text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Loading Tips */}
        <div className="mt-8 text-sm text-gray-400">
          <p>💡 Pro tip: Our AI is analyzing your preferences to provide the best experience</p>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage