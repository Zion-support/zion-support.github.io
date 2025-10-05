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
  Tags: ['AI Revolution', 'Business Intelligence', 'ROI', 'Fortune 500', '30,000% ROI']
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
  Tags: ['Fortune 500', 'Success Story', '30,000% ROI', 'Manufacturing', 'Case Study']
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
  Tags: ['Implementation Guide', 'ROI', 'Strategy', 'Framework', '30,000% ROI']
    }
  ];

  const filters = [
    { id: 'all',
  label: 'All Content',
  count: content.length },
    { id: 'blog',
  label: 'Blog Posts',
  count: content.filter(item => item.category === 'blog').length },
    { id: 'case-study',
  label: 'Case Studies',
  count: content.filter(item => item.category === 'case-study').length },
    { id: 'resource',
  label: 'Resources',
  count: content.filter(item => item.category === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? content 
    : content.filter(item => item.category === activeFilter);

  return (
    <section>
      <div>
        {/* Header */}
        <div>
          <div>
            <span>🚀 ULTIMATE BREAKTHROUGH</span>
          </div>
          <h2>
            AI 2025: Ultimate Business Intelligence Revolution
          </h2>
          <p>
            Discover the revolutionary AI-powered business intelligence that's delivering 
            <span> 30,000% ROI</span> and 
            <span> $750B+ in annual savings</span> across Fortune 500 companies.
          </p>
        </div>

        {/* Success Metrics */}
        <div>
          <div>
            <div>30,000%</div>
            <div>Average ROI</div>
          </div>
          <div>
            <div>$750B+</div>
            <div>Annual Savings</div>
          </div>
          <div>
            <div>99.99%</div>
            <div>Accuracy Rate</div>
          </div>
          <div>
            <div>5,000%</div>
            <div>Faster Decisions</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
<<<<<<< HEAD
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
=======
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
>>>>>>> b47e9d4b5bd1af22dc9e86e7460fed7a11146a22
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div>
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Content Type Badge */}
              <div className="p-4 pb-0">
                <div className="flex items-center justify-between mb-3">
<<<<<<< HEAD
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
=======
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
>>>>>>> b47e9d4b5bd1af22dc9e86e7460fed7a11146a22
                    {item.type}
                  </span>
                  {item.featured && (
                    <span>
                      FEATURED
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3>
                  {item.title}
                </h3>
                <p>
                  {item.description}
                </p>

                {/* Metrics */}
                <div>
                  <div>
                    <div>{item.metrics.roi}</div>
                    <div>ROI</div>
                  </div>
                  <div>
                    <div>{item.metrics.savings}</div>
                    <div>Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  {item.Tags.slice(0, 3).map((Tag) => (
                    <span
                      key={Tag}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {Tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link
                    href={item.url}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center block"
                  >
                    Read {item.type}
                  </Link>
                  <div className="flex items-center justify-between text-sm text-gray-500">
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
        <div>
          <div>
            <h3>
              Ready to Achieve 30,000% ROI?
            </h3>
            <p>
              Join Fortune 500 companies transforming their business intelligence with AI-powered analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Download Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateBusinessIntelligenceShowcase2025;