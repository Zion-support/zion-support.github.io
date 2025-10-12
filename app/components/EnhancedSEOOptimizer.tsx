'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Shield, Brain } from 'lucide-react'

const EnhancedSEOOptimizer: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered SEO',
      description: 'Advanced AI technology to optimize your content and improve search rankings.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Fast Optimization',
      description: 'Quick and efficient SEO optimization for immediate results.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Secure & Compliant',
      description: 'SEO optimization that follows all security and compliance standards.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: 'Proven Results',
      description: 'Track record of successful SEO optimization for businesses of all sizes.'
    }
  ]

  const benefits = [
    'Advanced AI technology integration',
    'Real-time SEO analysis and optimization',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Helmet>
        <title>Enhanced SEO Optimizer | Zion Tech Group</title>
        <meta name="description" content="Professional SEO optimization services by Zion Tech Group. Advanced AI-powered solutions for your business." />
        <meta name="keywords" content="SEO optimization, AI solutions, IT services, Zion Tech Group, search engine optimization" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Enhanced SEO Optimizer
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Optimize your website's SEO with our advanced AI-powered tools and techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                Start Optimizing
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
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
              Our SEO Optimization Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive SEO optimization solutions designed to boost your online presence.
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
              Why Choose Our SEO Optimizer?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of our advanced SEO optimization solution.
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
            Ready to Optimize Your SEO?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start optimizing your website today and see the results.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mx-auto">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default EnhancedSEOOptimizer