'use client';
import React from 'react';
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, Phone, Mail, MapPin, Zap, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: "Target",
    title: 'Keyword Research',
    description: 'Advanced AI-powered keyword research and analysis tools'
  },
  {
    icon: "BarChart",
    title: 'Performance Analytics',
    description: 'Comprehensive SEO performance tracking and reporting'
  },
  {
    icon: "Brain",
    title: 'AI Content Optimization',
    description: 'Intelligent content optimization for better search rankings'
  },
  {
    icon: "TrendingUp",
    title: 'Rank Tracking',
    description: 'Monitor your website rankings across search engines'
  }
];

const EnhancedSEOOptimizer: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enhanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">SEO Optimizer</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Boost your website's search engine rankings with our advanced AI-powered SEO optimization tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon as any;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Optimize Your SEO?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI-powered SEO tools help you achieve better search engine rankings and drive more organic traffic.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center text-lg">
              Start Optimizing <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedSEOOptimizer;