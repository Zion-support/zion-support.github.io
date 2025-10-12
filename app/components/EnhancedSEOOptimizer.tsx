'use client';
import React from 'react';
import { Brain, Zap, BarChart3, Target, CheckCircle, ArrowRight } from 'lucide-react';

interface SEOFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const EnhancedSEOOptimizer: React.FC = () => {
  const features: SEOFeature[] = [
    {
      icon: Brain,
      title: 'AI-Powered SEO Optimization',
      description: 'Advanced AI technology to automatically optimize your website for search engines'
    },
    {
      icon: Zap,
      title: 'Real-time Analysis',
      description: 'Lightning-fast SEO analysis and optimization with instant recommendations'
    },
    {
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Comprehensive analytics to track your SEO performance and rankings'
    },
    {
      icon: Target,
      title: 'Keyword Optimization',
      description: 'Intelligent keyword research and optimization for better search visibility'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Enhanced SEO Optimization
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Boost your website's search engine rankings with our AI-powered SEO optimization tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="mb-4">
                <feature.icon className="w-12 h-12 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedSEOOptimizer;
