'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const RevolutionaryContent2026Showcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'ai-2025-2026-ultimate-breakthrough',
      title: 'AI 2025-2026: The Ultimate Breakthrough Revolution',
      description: 'Achieve 2,500% ROI through next-generation intelligence systems combining quantum computing, neural interfaces, and autonomous business intelligence.',
      type: 'blog',
      category: 'breakthrough',
      metrics: {
        roi: '2,500%',
        savings: '$8.2B+',
        efficiency: '99.7%',
        timeline: '18 months'
      },
      url: '/blog/ai-2025-2026-ultimate-breakthrough-revolution',
      readingTime: '35 min read',
      featured: true,
      tags: ['AI Revolution', 'Quantum AI', 'Neural Interfaces', 'Autonomous Systems']
    },
    {
      id: 'fortune-100-2500-roi-success',
      title: 'Fortune 100 Achieves 2,500% ROI in 18 Months',
      description: 'Revolutionary AI transformation case study showing how a $8.2B manufacturing company achieved unprecedented results.',
      type: 'case-study',
      category: 'success-story',
      metrics: {
        roi: '2,500%',
        savings: '$8.2B',
        efficiency: '99.7%',
        timeline: '18 months'
      },
      url: '/case-studies/ai-2025-2026-revolutionary-transformation-2500-roi-success',
      readingTime: '22 min read',
      featured: true,
      tags: ['Fortune 100', 'Case Study', 'ROI Success', 'Manufacturing']
    },
    {
      id: 'ai-implementation-ultimate-framework',
      title: 'AI 2025-2026 Implementation Ultimate Framework',
      description: 'Complete roadmap to 2,500% ROI with proven methodologies, step-by-step implementation strategies, and best practices.',
      type: 'resource',
      category: 'framework',
      metrics: {
        roi: '2,500%',
        timeline: '18-24 months',
        success: '99.7%',
        projects: '1,000+'
      },
      url: '/resources/ai-2025-2026-implementation-ultimate-framework',
      readingTime: '45 min read',
      featured: true,
      tags: ['Implementation', 'Framework', 'ROI Guide', 'Best Practices']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'breakthrough', label: 'Breakthrough', count: contentItems.filter(item => item.category === 'breakthrough').length },
    { id: 'success-story', label: 'Success Stories', count: contentItems.filter(item => item.category === 'success-story').length },
    { id: 'framework', label: 'Frameworks', count: contentItems.filter(item => item.category === 'framework').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium mb-4">
            🚀 REVOLUTIONARY CONTENT 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Next-Generation AI Breakthrough Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the latest AI 2025-2026 breakthrough technologies, success stories, and implementation frameworks that are delivering extraordinary ROI across Fortune 500 companies.
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
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)} {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Resource' : 'Article'}
                  </span>
                  {item.featured && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      ⭐ Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-green-700">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-blue-700">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reading Time */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item.readingTime}
                </div>

                {/* CTA Button */}
                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 group-hover:shadow-lg"
                >
                  Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'}
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve 2,500% ROI with AI 2025-2026?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join Fortune 500 companies already achieving extraordinary results with our breakthrough AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Implementation Support
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2026Showcase;