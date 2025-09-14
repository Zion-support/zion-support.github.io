'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Brain, Zap, TrendingUp, Shield, ArrowRight, Star, Clock, Users, DollarSign } from 'lucide-react';

const RevolutionaryContentShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'neural-interface-revolution',
      type: 'blog',
      title: 'AI 2025: The Neural Interface Revolution',
      description: 'Discover how neural interface technology is revolutionizing enterprise operations with 1,200% ROI and 99.9% accuracy rates.',
      metrics: {
        roi: '1,200%',
        accuracy: '99.9%',
        savings: '$2.8B',
        efficiency: '400%'
      },
      tags: ['Neural Interface', 'Enterprise AI', 'ROI', 'Revolution'],
      link: '/blog/ai-2025-neural-interface-revolution-enterprise-breakthrough',
      readingTime: '22 min read',
      featured: true,
      icon: Brain,
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 'autonomous-ai-agents',
      type: 'blog',
      title: 'Autonomous AI Agents Enterprise Revolution',
      description: 'Self-managing AI systems delivering 800% ROI and 99.7% autonomous decision-making accuracy for Fortune 500 companies.',
      metrics: {
        roi: '800%',
        autonomy: '99.7%',
        savings: '$1.8B',
        uptime: '99.9%'
      },
      tags: ['Autonomous AI', 'Enterprise AI', 'ROI', 'Self-Managing'],
      link: '/blog/ai-2025-autonomous-ai-agents-enterprise-revolution',
      readingTime: '20 min read',
      featured: true,
      icon: Zap,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'enterprise-automation-success',
      type: 'case-study',
      title: 'Enterprise Automation Success: 800% ROI',
      description: 'How a $1.2B company achieved 800% ROI and $180M annual savings through comprehensive AI automation.',
      metrics: {
        roi: '800%',
        savings: '$180M',
        efficiency: '500%',
        satisfaction: '96%'
      },
      tags: ['Case Study', 'AI Automation', 'ROI', 'Success Story'],
      link: '/case-studies/ai-2025-enterprise-automation-800-roi-success-story',
      readingTime: '12 min read',
      featured: true,
      icon: TrendingUp,
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 'neural-interface-implementation',
      type: 'resource',
      title: 'Neural Interface Implementation Master Guide',
      description: 'Complete implementation guide for neural interface technology in enterprise environments. Achieve 1,200% ROI with proven strategies.',
      metrics: {
        roi: '1,200%',
        timeline: '8-18 months',
        success: '99%',
        savings: '$2.8B'
      },
      tags: ['Implementation Guide', 'Neural Interface', 'ROI', 'Strategy'],
      link: '/resources/neural-interface-implementation-master-guide-2025',
      readingTime: '28 min read',
      featured: true,
      icon: Shield,
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 'fortune-500-neural-transformation',
      type: 'case-study',
      title: 'Fortune 500 Neural Interface Transformation',
      description: 'Fortune 100 manufacturing company achieves 1,200% ROI and $2.8B annual savings through neural interface technology.',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '400%',
        accuracy: '99.9%'
      },
      tags: ['Case Study', 'Fortune 500', 'Neural Interface', 'ROI'],
      link: '/case-studies/fortune-500-neural-interface-transformation-2025-ultimate-success',
      readingTime: '15 min read',
      featured: true,
      icon: Brain,
      color: 'from-purple-600 to-pink-600'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'blog', label: 'Blog Posts', count: content.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: content.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: content.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.type === activeCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full px-6 py-2 mb-4">
            <Star className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">REVOLUTIONARY CONTENT 2025</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Your Business with Revolutionary AI Content
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest breakthroughs in AI technology with proven ROI metrics and real-world success stories from Fortune 500 companies.
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
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Header */}
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                
                <div className="p-6">
                  {/* Type and Featured Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {item.type === 'blog' ? '📝 Blog Post' : 
                       item.type === 'case-study' ? '📊 Case Study' : 
                       '📚 Resource Guide'}
                    </span>
                    {item.featured && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                      <div className="text-xs text-gray-600">ROI</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-blue-600">
                        {item.metrics.savings || item.metrics.timeline}
                      </div>
                      <div className="text-xs text-gray-600">
                        {item.metrics.savings ? 'Savings' : 'Timeline'}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readingTime}
                    </div>
                    
                    <Link
                      href={item.link}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 group-hover:shadow-lg"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6">
              Join Fortune 500 companies achieving extraordinary results with our revolutionary AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Users className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-200"
              >
                <DollarSign className="mr-2 w-5 h-5" />
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentShowcase2025;