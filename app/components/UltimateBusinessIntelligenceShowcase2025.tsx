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
        guide: '60 min read'
      },
      readingTime: '60 min read',
      featured: true,
      tags: ['Implementation Guide', 'ROI', 'Strategy', 'Framework', '30,000% ROI']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'blog', label: 'Blog Posts', count: content.filter(item => item.category === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: content.filter(item => item.category === 'case-study').length },
    { id: 'resource', label: 'Resources', count: content.filter(item => item.category === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? content 
    : content.filter(item => item.category === activeFilter);

  return (
            Discover the revolutionary AI-powered business intelligence that's delivering 
            <span className="text-cyan-400 font-bold"> 30,000% ROI</span> and 
            <span className="text-green-400 font-bold"> $750B+ in annual savings</span> across Fortune 500 companies.
          </p>
        </div>

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
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105"
            >
              {/* Content Type Badge */}
                    FEATURED
                  </span>
                )}
              </div>

              {/* Content */}
                  {item.description}
                </p>

                {/* Metrics */}
                  </div>
                </div>

                {/* Tags */}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
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
  );
};

export default UltimateBusinessIntelligenceShowcase2025;