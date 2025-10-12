'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react';

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

=======
import { CheckCircle, ArrowRight } from 'lucide-react'

const EnhancedSEOPage: React.FC = () => {
>>>>>>> cursor/analyze-improve-and-deploy-application-edcb
  const benefits = [
    'AI-powered SEO optimization',
    'Real-time ranking analysis',
    'White-hat SEO techniques',
    'Scalable SEO solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective SEO plans',
    'Proven track record of success'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Enhanced SEO | Zion Tech Group</title>
        <meta name="description" content="Professional Enhanced SEO services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="SEO, search engine optimization, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Enhanced SEO
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Optimize your website for search engines with our advanced AI-powered SEO solutions. 
              Improve rankings and drive more organic traffic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
<<<<<<< HEAD
              Why Choose Our SEO Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our SEO solutions deliver unmatched performance, security, and scalability.
=======
              Why Choose Our Enhanced SEO Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our advanced AI-powered SEO solutions deliver measurable results and drive sustainable growth.
>>>>>>> cursor/analyze-improve-and-deploy-application-edcb
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<<<<<<< HEAD
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our SEO solutions for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-edcb
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Feature {index + 1}</h3>
                </div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our SEO optimization solutions and how they can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Contact Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
=======
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Boost Your SEO Performance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to learn how our enhanced SEO solutions can transform your digital presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
>>>>>>> cursor/analyze-improve-and-deploy-application-edcb
          </div>
        </div>
      </section>
    </div>
  )
}

export default EnhancedSEOPage