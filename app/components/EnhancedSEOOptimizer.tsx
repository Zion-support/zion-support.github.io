"use client"

import React from 'react';
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, Phone, Mail, MapPin, Zap, Shield, Globe } from 'lucide-react';

const Page: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Keyword Research',
      description: 'Advanced AI-powered keyword research and analysis tools'
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive SEO performance tracking and reporting'
    },
    {
      icon: Brain,
      title: 'AI Optimization',
      description: 'Machine learning algorithms for content optimization'
    },
    {
      icon: TrendingUp,
      title: 'Rank Tracking',
      description: 'Monitor your search engine rankings in real-time'
    }
  ];

  const benefits = [
    'Increase organic traffic by up to 300%',
    'Improve search engine rankings',
    'AI-powered content optimization',
    'Real-time performance monitoring',
    'Competitor analysis tools',
    'Automated SEO reports'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enhanced SEO Optimizer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Boost your website's search engine visibility with our advanced AI-powered SEO optimization tools.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Boost Your SEO?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with our advanced SEO optimization tools and see results in just 30 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;