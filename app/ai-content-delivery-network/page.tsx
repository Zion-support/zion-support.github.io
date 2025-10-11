'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Globe, Zap, Shield, BarChart, Settings } from 'lucide-react'

const AiContentDeliveryNetworkPage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Worldwide content delivery network for fast and reliable content distribution.',
      benefits: ['Global coverage', 'Edge locations', 'Low latency', 'High availability']
    },
    {
      icon: Zap,
      title: 'AI-Powered Optimization',
      description: 'Intelligent content optimization and caching for maximum performance.',
      benefits: ['Smart caching', 'Content optimization', 'Performance tuning', 'Automatic scaling']
    },
    {
      icon: Shield,
      title: 'Security & Protection',
      description: 'Advanced security features to protect your content and users.',
      benefits: ['DDoS protection', 'SSL/TLS encryption', 'Access controls', 'Threat detection']
    },
    {
      icon: BarChart,
      title: 'Analytics & Monitoring',
      description: 'Comprehensive analytics and monitoring for CDN performance.',
      benefits: ['Performance metrics', 'Usage analytics', 'Real-time monitoring', 'Custom reports']
    },
    {
      icon: Settings,
      title: 'Easy Configuration',
      description: 'Simple configuration and management of your CDN settings.',
      benefits: ['Easy setup', 'Custom rules', 'API management', 'Dashboard control']
    }
  ]

  const benefits = [
    'Improve content delivery speed by 80%',
    'Reduce bandwidth costs by 40%',
    'Enhance user experience globally',
    'Scale content delivery automatically',
    'Ensure high availability and reliability',
    'Optimize performance with AI insights'
  ]

  return (
    <>
      <Helmet>
        <title>AI Content Delivery Network - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered CDN for global content delivery, optimization, and performance enhancement." />
        <meta name="keywords" content="AI CDN, content delivery network, global CDN, content optimization, performance enhancement" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Content Delivery
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Network
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Deliver content faster and more efficiently with our AI-powered CDN. 
              Global distribution, intelligent optimization, and superior performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced CDN Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful tools to optimize and deliver content globally
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
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

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our CDN?
              </h2>
              <p className="text-xl text-gray-300">
                Proven results that drive content delivery success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Optimize Content Delivery?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your CDN needs and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                  Contact Us
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default AiContentDeliveryNetworkPage