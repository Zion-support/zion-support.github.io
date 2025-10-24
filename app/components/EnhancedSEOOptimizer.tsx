'use client'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
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
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/pricing"
              className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
