'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, CheckCircle, Phone, Mail, MapPin, Zap, Shield, Globe } from 'lucide-react'
import Navigation from '../components/Navigation'

const EnhancedSEOPage: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Enhanced SEO | Zion Tech Group</title>
        <meta name="description" content="Professional SEO optimization services and solutions for modern businesses." />
      </Helmet>
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Enhanced SEO</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional SEO optimization services and solutions for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnhancedSEOPage