import React from 'react'
import { ArrowRight, CheckCircle, Image, Zap, Target, TrendingUp } from 'lucide-react';

const ImageOptimizer: React.FC = () => {
  const features = [
    {
      icon: Image,
      title: 'Image Optimization',
      description: 'Advanced image optimization techniques for better performance and quality.',
      benefits: ['Format optimization', 'Size reduction', 'Quality enhancement', 'Lazy loading']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Performance-focused image optimization for better Core Web Vitals.',
      benefits: ['Speed optimization', 'Resource optimization', 'Caching strategies', 'CDN integration']
    },
    {
      icon: Target,
      title: 'Smart Compression',
      description: 'Intelligent image compression that maintains quality while reducing file size.',
      benefits: ['Lossless compression', 'Quality preservation', 'Size reduction', 'Format conversion']
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Monitoring',
      description: 'Comprehensive image performance analytics and monitoring.',
      benefits: ['Performance metrics', 'Usage analytics', 'Optimization tracking', 'Quality monitoring']
    }
  ]

  const benefits = [
    'Improve page load speed by 40%',
    'Reduce bandwidth usage by 60%',
    'Enhance user experience with optimized images',
    'Optimize for Core Web Vitals',
    'Provide better SEO performance'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Image Optimizer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Advanced image optimization solutions for better performance and user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive image optimization features designed for optimal performance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
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
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of comprehensive image optimization features
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Optimize Your Images?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our image optimization solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Start Free Trial
            </button>
            <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ImageOptimizer