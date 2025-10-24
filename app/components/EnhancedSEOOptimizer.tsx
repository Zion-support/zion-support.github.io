'use client';
import React from 'react';
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, Phone, Mail, MapPin, Zap, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Keyword Research',
    description: 'Advanced AI-powered keyword research and analysis tools',
  },
  {
    icon: BarChart,
    title: 'Performance Analytics',
    description: 'Comprehensive SEO performance tracking and reporting',
  },
  {
    icon: Brain,
    title: 'Content Optimization',
    description: 'AI-driven content optimization for better search rankings',
  },
  {
    icon: TrendingUp,
    title: 'Rank Tracking',
    description: 'Monitor your search engine rankings across multiple keywords',
  },
];

const EnhancedSEOOptimizer: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enhanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">SEO Optimizer</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Boost your website's search engine visibility with our advanced SEO optimization tools and AI-powered insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">SEO Features</h2>
            <p className="text-xl text-gray-300">Comprehensive SEO optimization tools</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your SEO?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start improving your search engine rankings today with our advanced SEO tools.
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
            Start SEO Optimization
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default EnhancedSEOOptimizer;