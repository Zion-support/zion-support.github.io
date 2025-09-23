'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Brain, Zap, TrendingUp, ArrowRight, Star, Clock, Users, Award } from 'lucide-react';

const AdvancedContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'neural-interface',
      title: 'Neural Interface Revolution',
      description: 'Fortune 500 companies achieve 750% ROI through revolutionary brain-computer interface technology.',
      type: 'blog',
      url: '/blog/ai-2025-neural-interface-revolution-enterprise-breakthrough',
      metrics: {
        roi: '750%',
        savings: '$4.2B',
        accuracy: '99.9%',
        satisfaction: '99.7%'
      },
      readingTime: '18 min read',
      featured: true,
      category: 'breakthrough',
      icon: Brain,
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 'autonomous-agents',
      title: 'Autonomous AI Agents Revolution',
      description: 'Revolutionary autonomous AI agents achieving 900% ROI through self-managing systems.',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-ai-agents-enterprise-revolution',
      metrics: {
        roi: '900%',
        savings: '$5.8B',
        automation: '95%',
        satisfaction: '99.9%'
      },
      readingTime: '20 min read',
      featured: true,
      category: 'breakthrough',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'predictive-analytics',
      title: 'Advanced Predictive Analytics Revolution',
      description: 'AI-powered forecasting and intelligent insights delivering 650% ROI.',
      type: 'blog',
      url: '/blog/ai-2025-advanced-predictive-analytics-revolution',
      metrics: {
        roi: '650%',
        savings: '$3.6B',
        accuracy: '99.8%',
        satisfaction: '99.5%'
      },
      readingTime: '22 min read',
      featured: true,
      category: 'intelligence',
      icon: TrendingUp,
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 'neural-interface-case-study',
      title: 'Neural Interface Fortune 500 Success',
      description: 'How a Fortune 500 company achieved 850% ROI with brain-computer integration.',
      type: 'case-study',
      url: '/case-studies/ai-2025-neural-interface-fortune-500-success-story',
      metrics: {
        roi: '850%',
        savings: '$3.2B',
        efficiency: '97%',
        satisfaction: '99.8%'
      },
      readingTime: '16 min read',
      featured: true,
      category: 'success',
      icon: Award,
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 'autonomous-systems-case-study',
      title: 'Autonomous Systems Enterprise Success',
      description: '$2.8B company achieves 1,200% ROI with self-managing operations.',
      type: 'case-study',
      url: '/case-studies/ai-2025-autonomous-systems-enterprise-transformation-success',
      metrics: {
        roi: '1,200%',
        savings: '$4.2B',
        automation: '98%',
        satisfaction: '99.9%'
      },
      readingTime: '18 min read',
      featured: true,
      category: 'success',
      icon: Users,
      color: 'from-teal-600 to-blue-600'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'breakthrough', name: 'Breakthrough Technology', count: content.filter(c => c.category === 'breakthrough').length },
    { id: 'intelligence', name: 'AI Intelligence', count: content.filter(c => c.category === 'intelligence').length },
    { id: 'success', name: 'Success Stories', count: content.filter(c => c.category === 'success').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <Star className="w-5 h-5 mr-2" />
            <span className="font-medium">🚀 ADVANCED CONTENT 2025</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover breakthrough AI technologies and success stories achieving unprecedented ROI through cutting-edge implementations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${item.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <IconComponent className="w-6 h-6" />
                        <span className="text-sm font-medium uppercase tracking-wide">
                          {item.type === 'blog' ? 'Blog Post' : 'Case Study'}
                        </span>
                      </div>
                      {item.featured && (
                        <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                          FEATURED
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {Object.entries(item.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">
                          {key.replace('_', ' ')}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.readingTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>5.0</span>
                    </div>
                  </div>

                  <Link
                    href={item.url}
                    className="group/btn w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Metrics Summary */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              Proven Success Metrics
            </h3>
            <p className="text-white/90">
              Our advanced AI content delivers exceptional results for enterprise clients
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-2">1,200%</div>
              <div className="text-sm text-white/80">Maximum ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-2">$5.8B</div>
              <div className="text-sm text-white/80">Total Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-2">99.9%</div>
              <div className="text-sm text-white/80">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm text-white/80">Success Stories</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span>Start Your AI Transformation</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdvancedContentShowcase2025;