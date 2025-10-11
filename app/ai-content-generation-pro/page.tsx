'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, FileText, Zap, Brain, BarChart, Settings } from 'lucide-react'

const AIContentGenerationProPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Advanced Content Creation',
      description: 'Generate high-quality content across multiple formats and industries.',
      benefits: ['Multi-format support', 'Industry-specific content', 'Quality optimization', 'Brand consistency']
    },
    {
      icon: Zap,
      title: 'Rapid Content Production',
      description: 'Produce content at scale with AI-powered automation and optimization.',
      benefits: ['Bulk generation', 'Automated workflows', 'Fast processing', 'Scalable production']
    },
    {
      icon: Brain,
      title: 'Intelligent Content Strategy',
      description: 'AI-driven content strategy and optimization for maximum engagement.',
      benefits: ['Strategy planning', 'Audience targeting', 'Content optimization', 'Performance prediction']
    },
    {
      icon: BarChart,
      title: 'Content Analytics',
      description: 'Comprehensive analytics and insights for content performance and optimization.',
      benefits: ['Performance metrics', 'Engagement analysis', 'ROI tracking', 'Optimization insights']
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Tailored content generation solutions for specific business needs.',
      benefits: ['Custom models', 'Brand adaptation', 'Integration support', 'Scalable solutions']
    }
  ]

  const benefits = [
    'Increase content production by 300%',
    'Improve content quality and consistency',
    'Reduce content creation costs by 60%',
    'Enhance content engagement and performance',
    'Scale content marketing efforts efficiently',
    'Drive business growth with better content'
  ]

  return (
    <>
      <Helmet>
        <title>AI Content Generation Pro - Zion Tech Group</title>
        <meta name="description" content="Professional-grade AI content generation platform for advanced content creation, strategy, and optimization." />
        <meta name="keywords" content="AI content generation, content creation, content marketing, content strategy, content optimization" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Content Generation
              <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional-grade AI content generation for advanced content creation, strategy, and optimization. 
              Scale your content marketing with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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
                Professional Content Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced tools for professional content creation and optimization
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
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
                Why Choose Our Pro Solution?
              </h2>
              <p className="text-xl text-gray-300">
                Professional-grade results that drive content success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
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
                Ready for Professional Content Generation?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your professional content needs and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-blue-700 transition-all duration-300">
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

export default AIContentGenerationProPage