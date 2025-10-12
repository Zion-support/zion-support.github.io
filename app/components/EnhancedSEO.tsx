'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react'

const EnhancedSEOPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered SEO',
      description: 'Advanced AI technology to optimize your website for search engines and improve rankings'
    },
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'Get instant SEO insights and recommendations for better search performance'
    },
    {
      icon: Shield,
      title: 'Technical SEO',
      description: 'Comprehensive technical SEO audits and optimization for better search visibility'
    },
    {
      icon: Globe,
      title: 'Global SEO',
      description: 'Optimize your website for international markets and multiple languages'
    }
  ]

  const benefits = [
    'AI-powered keyword research and optimization',
    'Real-time SEO monitoring and alerts',
    'Technical SEO audits and fixes',
    'Content optimization recommendations',
    'Link building strategies',
    'Local SEO optimization',
    'Mobile SEO optimization',
    'Performance and Core Web Vitals optimization'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Enhanced SEO - Zion Tech Group</title>
        <meta name="description" content="Advanced SEO optimization solutions by Zion Tech Group. Improve your search engine rankings and visibility." />
        <meta name="keywords" content="SEO optimization, search engine optimization, digital marketing, Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Enhanced SEO
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Boost your search engine rankings with our AI-powered SEO optimization solutions. 
            Get more organic traffic and improve your online visibility.
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
            SEO Optimization Features
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
            Ready to Boost Your SEO?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact our experts to discuss your SEO needs and get a customized optimization strategy.
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

export default EnhancedSEOPage