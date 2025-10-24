<<<<<<< HEAD
'use client';

import React from 'react';
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle } from 'lucide-react';

const Page: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Keyword Research',
      description: 'Advanced AI-powered keyword research and analysis tools',
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive SEO performance tracking and reporting',
    },
    {
      icon: Brain,
      title: 'AI Optimization',
      description: 'Machine learning algorithms for content optimization',
    },
    {
      icon: TrendingUp,
      title: 'Rank Tracking',
      description: 'Monitor your search engine rankings in real-time',
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
=======
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EnhancedSEOOptimizer - Zion Tech Group',
  description: 'Comprehensive enhancedseooptimizer solutions for modern businesses.',
  keywords: ['enhancedseooptimizer', 'AI solutions', 'technology services'],
  openGraph: {
    title: 'EnhancedSEOOptimizer - Zion Tech Group',
    description: 'Comprehensive enhancedseooptimizer solutions for modern businesses.',
    type: 'website',
    url: 'https://ziontechgroup.com/components',
  },
};
>>>>>>> origin/main

const EnhancedSEOOptimizerPage = () => {
  return (
<<<<<<< HEAD
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="inline-flex p-3 rounded-lg bg-blue-600/20 mb-4">
                <feature.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Choose Our SEO Optimizer?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Boost Your SEO?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our AI-powered SEO optimization tools today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            EnhancedSEOOptimizer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive enhancedseooptimizer solutions for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
>>>>>>> origin/main
              Get Started
            </a>
<<<<<<< HEAD
            <a
              href="/pricing"
              className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Pricing
=======
            <a href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
>>>>>>> origin/main
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Page;
=======
export default EnhancedSEOOptimizerPage;
>>>>>>> origin/main
