'use client'
import React from 'react'
import { Brain, BarChart, ArrowRight } from 'lucide-react';

const EnhancedPerformanceOptimizer: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'Advanced AI algorithms that continuously analyze and optimize your application performance in real-time.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Dramatically improve loading times and response rates with our cutting-edge optimization techniques.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee and comprehensive monitoring.',
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Detailed performance metrics and actionable insights to drive continuous improvement.',
    }
  ];
  const benefits = [
    'Up to 80% faster page load times',
    'Reduced server costs by 40%',
    'Improved SEO rankings',
    'Enhanced user experience',
    'Real-time performance monitoring',
    'Automatic optimization updates'
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="neon-text">Enhanced Performance Optimizer</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your application's performance with our advanced AI-powered optimization solutions.
            Experience lightning-fast speeds and superior user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="cyber-button-secondary px-8 py-4 text-lg font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 text-center group hover:scale-105 transition-transform">
                <feature.icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our enhanced performance optimizer solutions for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Performance Improvements</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Expert Team</h4>
                    <p className="text-gray-300 text-sm">Our experienced developers and performance engineers work tirelessly to optimize your applications.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Proven Results</h4>
                    <p className="text-gray-300 text-sm">We've helped hundreds of businesses achieve significant performance improvements and cost savings.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">24/7 Support</h4>
                    <p className="text-gray-300 text-sm">Round-the-clock monitoring and support to ensure your applications run smoothly at all times.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card hologram-card p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Performance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss your performance optimization needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg font-semibold">
                Get Free Consultation
              </button>
              <button className="cyber-button-secondary px-8 py-4 text-lg font-semibold">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EnhancedPerformanceOptimizer;