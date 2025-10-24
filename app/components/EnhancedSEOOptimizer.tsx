'use client';
import React from 'react';
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, Phone, Mail, MapPin, Zap, Shield, Globe } from 'lucide-react';

interface EnhancedSEOOptimizerProps {
  className?: string;
}

const EnhancedSEOOptimizer: React.FC<EnhancedSEOOptimizerProps> = ({ className = '' }) => {
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
    },
  ];

  const benefits = [
    'Increase organic traffic by up to 300%',
    'Improve search engine rankings',
    'AI-powered content optimization',
    'Real-time performance monitoring',
    'Competitor analysis tools',
    'Automated SEO reports',
  ];

  return (
    <div className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Enhanced SEO Optimization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Boost your search engine rankings with our advanced SEO optimization tools and AI-powered insights.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <feature.icon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            SEO Benefits
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedSEOOptimizer;