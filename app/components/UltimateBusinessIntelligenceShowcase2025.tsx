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
      tags: ['Fortune 500', 'Case Study', 'Success Story', 'Manufacturing', 'ROI']
    },
    {
      id: 'business-intelligence-implementation-guide',
      title: 'AI 2025 Ultimate Business Intelligence Implementation Guide: Complete Roadmap to 30,000% ROI',
      description: 'Complete roadmap to 30,000% ROI through revolutionary AI-powered business intelligence transformation with step-by-step implementation strategies.',
      url: '/resources/ai-2025-ultimate-business-intelligence-implementation-guide',
      type: 'Implementation Guide',
      category: 'guide',
      metrics: {
        roi: '30,000%',
        success: '99.8%',
        timeline: '18 months',
        adoption: '100%'
      },
      readingTime: '45 min read',
      featured: true,
      tags: ['Implementation', 'Guide', 'Roadmap', 'Strategy', 'ROI']
    }
  ];

  const filteredContent = activeFilter === 'all' 
    ? content 
    : content.filter(item => item.category === activeFilter);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500/10 to-red-500/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-cyan-400 font-bold text-xl">
              ULTIMATE SHOWCASE: AI 2025 BUSINESS INTELLIGENCE REVOLUTION
            </span>
            <span className="text-2xl">⚡</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ultimate Business Intelligence Showcase 2025
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the complete collection of AI-powered business intelligence resources that are transforming 
            enterprises worldwide with unprecedented ROI and competitive advantage.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'all', label: 'All Content' },
              { id: 'blog', label: 'Blog Posts' },
              { id: 'case-study', label: 'Case Studies' },
              { id: 'guide', label: 'Guides' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item, index) => (
            <Link key={item.id} href={item.url} className="group">
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2 h-full">
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  {/* Type Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 text-sm font-semibold rounded-full border border-cyan-500/30">
                      {item.type}
                    </span>
                    {item.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 text-sm font-semibold rounded-full border border-yellow-500/30">
                        ⭐ Featured
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors leading-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {Object.entries(item.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-cyan-400">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Reading Time & CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">⏱️ {item.readingTime}</span>
                    <span className="text-cyan-400 font-semibold text-sm group-hover:text-white transition-colors">
                      Read More →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business Intelligence?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join Fortune 500 companies achieving unprecedented ROI through AI-powered business intelligence. 
            Get expert guidance from Zion Tech Group's AI transformation specialists.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="text-xl">🚀</span>
              <span>Start Your AI Journey</span>
            </Link>
            
            <Link
              href="/blog"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/30"
            >
              <span>Explore All Content</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateBusinessIntelligenceShowcase2025;