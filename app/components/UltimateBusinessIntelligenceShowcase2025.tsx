'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateBusinessIntelligenceShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const content = [
    {
      id: 'ultimate-business-intelligence-revolution',
      title: 'AI 2025: The Ultimate Business Intelligence Revolution - Ultimate Breakthrough Guide to 30,000% ROI',
      description: 'Transform your enterprise with next-generation AI-powered business intelligence that delivers unprecedented insights and competitive advantage.',
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough',
      type: 'Blog Post',
      category: 'blog',
      metrics: {
        roi: '30,000%',
        savings: '$750B+',
        accuracy: '99.99%',
        speed: '5,000% faster'
      },
      readingTime: '35 min read',
      featured: true,
      tags: ['AI Revolution', 'Business Intelligence', 'ROI', 'Fortune 500', '30,000% ROI']
    },
    {
      id: 'fortune-500-business-intelligence-success',
      title: 'Fortune 500 Ultimate Business Intelligence Success: $750B Annual Savings - 30,000% ROI Success Story',
      description: 'How a $15.2B manufacturing giant achieved unprecedented business intelligence transformation with AI-powered analytics and decision-making systems.',
      url: '/case-studies/fortune-500-ultimate-business-intelligence-30000-roi-success-story',
      type: 'Case Study',
      category: 'case-study',
      metrics: {
        roi: '30,000%',
        savings: '$750B',
        company: '$15.2B',
        timeline: '18 months'
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['Fortune 500', 'Success Story', '30,000% ROI', 'Manufacturing', 'Case Study']
    },
    {
      id: 'business-intelligence-implementation-guide',
      title: 'AI 2025 Ultimate Business Intelligence Implementation Guide: Complete Roadmap to 30,000% ROI',
      description: 'The definitive guide to implementing revolutionary AI-powered business intelligence that delivers unprecedented competitive advantage and financial returns.',
      url: '/resources/ai-2025-ultimate-business-intelligence-implementation-guide',
      type: 'Implementation Guide',
      category: 'resource',
      metrics: {
        roi: '30,000%',
        success: '99.8%',
        timeline: '18 months',
      featured: true,
      tags: ['Implementation', 'Guide', '30,000% ROI', 'Roadmap', 'Best Practices']
    }
  ];

  const filteredContent = activeFilter === 'all' 
    ? content 
    : content.filter(item => item.category === activeFilter);

  return (
<<<<<<< HEAD
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      <section className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-yellow-400 font-bold text-lg">🚀 ULTIMATE BREAKTHROUGH</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            AI 2025: Ultimate Business Intelligence Revolution
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary AI-powered business intelligence that's delivering 
            <span className="text-cyan-400 font-bold"> 30,000% ROI</span> and 
            <span className="text-green-400 font-bold"> $750B+ in annual savings</span> across Fortune 500 companies.
=======
>>>>>>> origin/merge-all-fixes
          </p>

<<<<<<< HEAD
        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">30,000%</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">$750B+</div>
            <div className="text-gray-300">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">99.99%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">5,000%</div>
            <div className="text-gray-300">Faster Decisions</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
=======
>>>>>>> origin/merge-all-fixes
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
<<<<<<< HEAD
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105"
            >
              {/* Content Type Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  item.category === 'blog' ? 'bg-blue-100 text-blue-800' :
                  item.category === 'case-study' ? 'bg-green-100 text-green-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {item.type}
                </span>
                {item.featured && (
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full">
                    FEATURED
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{item.metrics.roi}</div>
                    <div className="text-sm text-gray-400">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{item.metrics.savings}</div>
                    <div className="text-sm text-gray-400">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <Link
                    href={item.url}
                    className="group/btn flex items-center justify-center gap-3 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-2xl text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span>Read {item.type}</span>
                  </Link>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                    <span>{item.readingTime}</span>
                    <span>•</span>
                    <span>Ultimate Breakthrough</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Achieve 30,000% ROI?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join Fortune 500 companies transforming their business intelligence with AI-powered analytics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <span>Get Free Consultation</span>
            </Link>
            <Link
              href="/resources"
              className="group flex items-center gap-3 border-2 border-white/20 hover:border-white/40 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Download Guide</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
=======
>>>>>>> origin/merge-all-fixes
  );
};

export default UltimateBusinessIntelligenceShowcase2025;