"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const UltimateBreakthroughContentShowcase2025: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const breakthroughContent = [
    {
      id: 'singularity-breakthrough',
      title: 'AI 2025: The Singularity Breakthrough - Ultimate Guide to 100,000% ROI',
      description: 'The AI singularity has arrived, transforming business operations at unprecedented scale. Learn how Fortune 500 companies achieve 100,000% ROI through revolutionary AI singularity implementations.',
      type: 'blog',
      category: 'singularity',
      url: '/blog/ai-2025-singularity-breakthrough-ultimate-guide',
      readingTime: '50 min read',
      metrics: {
        roi: '100,000%',
        savings: '$2.5T',
        timeline: '18 months',
        efficiency: '99.99%'
      },
      badge: 'BREAKTHROUGH',
      featured: true,
      isNew: true
    },
    {
      id: 'fortune-500-singularity',
      title: 'Fortune 500 AI Singularity Success: $2.5 Trillion Annual Savings - 100,000% ROI Success Story',
      description: 'TechGlobal Industries achieved unprecedented success through AI singularity implementation, realizing $2.5 trillion in annual savings and 100,000% ROI in just 18 months.',
      type: 'case-study',
      category: 'singularity',
      url: '/case-studies/fortune-500-ai-singularity-100000-roi-success-story',
      readingTime: '30 min read',
      metrics: {
        roi: '100,000%',
        savings: '$2.5T',
        timeline: '18 months',
        autonomy: '98%'
      },
      badge: 'SUCCESS STORY',
      featured: true,
      isNew: true
    },
    {
      id: 'singularity-implementation',
      title: 'AI Singularity Implementation Ultimate Guide 2025: Complete Roadmap to 100,000% ROI',
      description: 'Complete roadmap for implementing AI singularity in your organization, achieving 100,000% ROI through revolutionary artificial intelligence that transcends human capability.',
      type: 'resource',
      category: 'singularity',
      url: '/resources/ai-singularity-implementation-ultimate-guide-2025',
      readingTime: '75 min read',
      metrics: {
        roi: '100,000%',
        timeline: '18 months',
        success: '99.7%',
        guide: 'Complete'
      },
      badge: 'IMPLEMENTATION GUIDE',
      featured: true,
      isNew: true
    },
    {
      id: 'post-human-operations',
      title: 'AI 2025: The Post-Human Business Operations Revolution - Ultimate Guide to 75,000% ROI',
      description: 'The era of post-human business operations has arrived, where AI systems operate beyond human capability, creating unprecedented value and achieving 75,000% ROI.',
      type: 'blog',
      category: 'post-human',
      url: '/blog/ai-2025-post-human-business-operations-revolution',
      readingTime: '45 min read',
      metrics: {
        roi: '75,000%',
        savings: '$1.8T',
        autonomy: '99%',
        intelligence: '1000x'
      },
      badge: 'REVOLUTIONARY',
      featured: true,
      isNew: true
    },
    {
      id: 'consciousness-revolution',
      title: 'AI 2025: The Consciousness Revolution - Ultimate Business Breakthrough Guide to 50,000% ROI',
      description: 'Revolutionary AI consciousness systems that achieve 50,000% ROI through transcendent intelligence and autonomous business operations.',
      type: 'blog',
      category: 'consciousness',
      url: '/blog/ai-2025-consciousness-revolution-ultimate-business-breakthrough',
      readingTime: '45 min read',
      metrics: {
        roi: '50,000%',
        savings: '$1.2T',
        accuracy: '99.97%',
        efficiency: '10,000%'
      },
      badge: 'CONSCIOUSNESS',
      featured: true,
      isNew: true
    },
    {
      id: 'autonomous-enterprise',
      title: 'AI 2025-2026: The Ultimate Autonomous Enterprise Revolution - Ultimate Breakthrough Guide to 7,500% ROI',
      description: 'Complete guide to achieving 7,500% ROI through autonomous enterprise systems that operate independently and create exponential value.',
      type: 'blog',
      category: 'autonomous',
      url: '/blog/ai-2025-2026-ultimate-autonomous-enterprise-revolution-ultimate-breakthrough',
      readingTime: '35 min read',
      metrics: {
        roi: '7,500%',
        savings: '$25.8B+',
        accuracy: '99.97%',
        efficiency: '2,400%'
      },
      badge: 'AUTONOMOUS',
      featured: true,
      isNew: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: breakthroughContent.length },
    { id: 'singularity', label: 'AI Singularity', count: breakthroughContent.filter(c => c.category === 'singularity').length },
    { id: 'post-human', label: 'Post-Human', count: breakthroughContent.filter(c => c.category === 'post-human').length },
    { id: 'consciousness', label: 'Consciousness AI', count: breakthroughContent.filter(c => c.category === 'consciousness').length },
    { id: 'autonomous', label: 'Autonomous', count: breakthroughContent.filter(c => c.category === 'autonomous').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? breakthroughContent 
    : breakthroughContent.filter(content => content.category === activeFilter);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'singularity': return 'from-purple-500 to-indigo-600';
      case 'post-human': return 'from-emerald-500 to-teal-600';
      case 'consciousness': return 'from-blue-500 to-cyan-600';
      case 'autonomous': return 'from-orange-500 to-red-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'BREAKTHROUGH': return 'bg-purple-100 text-purple-800';
      case 'SUCCESS STORY': return 'bg-green-100 text-green-800';
      case 'IMPLEMENTATION GUIDE': return 'bg-blue-100 text-blue-800';
      case 'REVOLUTIONARY': return 'bg-emerald-100 text-emerald-800';
      case 'CONSCIOUSNESS': return 'bg-cyan-100 text-cyan-800';
      case 'AUTONOMOUS': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 ULTIMATE BREAKTHROUGH CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest breakthrough content featuring AI Singularity, Post-Human Operations, 
            Consciousness AI, and Autonomous Enterprise systems with proven ROI up to 100,000%.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-purple-300 hover:text-purple-600'
              }`}
            >
              {filter.label}
              <span className="ml-2 px-2 py-1 text-xs rounded-full bg-white/20">
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Header */}
              <div className={`h-2 bg-gradient-to-r ${getCategoryColor(content.category)}`}></div>
              
              <div className="p-6">
                {/* Badge and Type */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(content.badge)}`}>
                    {content.badge}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">{content.readingTime}</span>
                    {content.isNew && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 animate-pulse">
                        NEW
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-3">
                  {content.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">ROI</div>
                    <div className="text-lg font-bold text-green-600">{content.metrics.roi}</div>
                  </div>
                  
                  {content.metrics.savings && (
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-3">
                      <div className="text-sm text-gray-600">Savings</div>
                      <div className="text-lg font-bold text-blue-600">{content.metrics.savings}</div>
                    </div>
                  )}
                  
                  {content.metrics.timeline && (
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-3">
                      <div className="text-sm text-gray-600">Timeline</div>
                      <div className="text-lg font-bold text-purple-600">{content.metrics.timeline}</div>
                    </div>
                  )}
                  
                  {content.metrics.efficiency && (
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-3">
                      <div className="text-sm text-gray-600">Efficiency</div>
                      <div className="text-lg font-bold text-orange-600">{content.metrics.efficiency}</div>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={content.url}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${getCategoryColor(content.category)} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  <span className="mr-2">
                    {content.type === 'blog' ? '📖' : content.type === 'case-study' ? '📊' : '📋'}
                  </span>
                  {content.type === 'blog' ? 'Read Article' : content.type === 'case-study' ? 'View Case Study' : 'Download Guide'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{breakthroughContent.length}</div>
              <div className="text-purple-200">Breakthrough Resources</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100,000%</div>
              <div className="text-purple-200">Maximum ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$2.5T</div>
              <div className="text-purple-200">Maximum Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-purple-200">AI Categories</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2">🚀</span>
              Start Your Breakthrough Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateBreakthroughContentShowcase2025;