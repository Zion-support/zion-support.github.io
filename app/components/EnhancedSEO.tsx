'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, CheckCircle, Phone, Mail, MapPin, Zap, Shield, Globe } from 'lucide-react'
import Navigation from './Navigation'

const EnhancedSEO: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered SEO',
      description: 'Advanced AI algorithms analyze and optimize your content for maximum search visibility.',
      benefits: [
        'Automated keyword research',
        'Content optimization suggestions',
        'Competitor analysis',
        'Search trend predictions'
      ]
    },
    {
      icon: Zap,
      title: 'Real-Time Optimization',
      description: 'Monitor and optimize your SEO performance with real-time insights and recommendations.',
      benefits: [
        'Live ranking updates',
        'Instant performance alerts',
        'Automated optimization',
        'A/B testing capabilities'
      ]
    },
    {
      icon: Shield,
      title: 'White-Hat Techniques',
      description: 'Ethical SEO practices that build long-term authority and avoid penalties.',
      benefits: [
        'Google-compliant strategies',
        'Quality content focus',
        'Natural link building',
        'Penalty prevention'
      ]
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Optimize for multiple markets and languages with localized SEO strategies.',
      benefits: [
        'Multi-language optimization',
        'Local market targeting',
        'Cultural adaptation',
        'International rankings'
      ]
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
        <title>Enhanced SEO Services | Zion Tech Group</title>
        <meta name="description" content="AI-powered SEO services with real-time optimization, white-hat techniques, and global reach capabilities." />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enhanced SEO Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Dominate search rankings with our AI-powered SEO solutions and real-time optimization strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Get SEO Audit
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our SEO Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive SEO services powered by cutting-edge AI technology and proven strategies.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our SEO Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of our comprehensive SEO approach and proven track record.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Contact our experts to discuss your SEO needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <Phone className="mr-2 h-5 w-5 inline" />
                  Call Now
                </button>
                <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <Mail className="mr-2 h-5 w-5 inline" />
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default EnhancedSEO