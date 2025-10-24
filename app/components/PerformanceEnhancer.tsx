'use client';

import React from 'react';
import { Brain, CheckCircle, ArrowRight } from 'lucide-react';

const PerformanceEnhancerPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'Leverage advanced AI algorithms to optimize your application performance automatically.',
      benefits: [
        'Real-time performance monitoring',
        'Automated optimization suggestions',
        'Predictive performance analytics',
        'Resource usage optimization'
      ]
    },
    {
      icon: Brain,
      title: 'Code Analysis',
      description: 'Comprehensive code analysis to identify performance bottlenecks and optimization opportunities.',
      benefits: [
        'Static code analysis',
        'Dynamic performance profiling',
        'Memory leak detection',
        'CPU usage optimization'
      ]
    },
    {
      icon: Brain,
      title: 'Database Optimization',
      description: 'Optimize your database queries and structure for maximum performance.',
      benefits: [
        'Query optimization',
        'Index recommendations',
        'Connection pooling',
        'Caching strategies'
      ]
    },
    {
      icon: Brain,
      title: 'Infrastructure Scaling',
      description: 'Scale your infrastructure efficiently based on performance metrics and demand.',
      benefits: [
        'Auto-scaling configuration',
        'Load balancing optimization',
        'Resource allocation tuning',
        'Performance-based scaling'
      ]
    }
  ];

  const benefits = [
    'Gain competitive advantage with advanced technology',
    'Reduce operational costs through optimization',
    'Improve user experience and satisfaction',
    'Scale efficiently with growing demand',
    'Maintain high performance standards',
    'Get expert guidance and support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Performance Enhancer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional Performance Enhancement services by Zion Tech Group. Advanced AI and IT solutions for your business.
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
              Powerful AI-driven features designed to transform your business operations
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
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Performance Enhancement</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of professional performance optimization
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
    </div>
  );
};

export default PerformanceEnhancerPage;