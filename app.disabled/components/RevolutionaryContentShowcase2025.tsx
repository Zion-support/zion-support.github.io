'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  roi: string;
  savings: string;
  readingTime: string;
  description: string;
  featured: boolean;
  tags: string[];
}

const RevolutionaryContentShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentItems: ContentItem[] = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      roi: '1,500%',
      savings: '$2.8B',
      readingTime: '25 min read',
      description: 'Transform your enterprise with revolutionary AI implementation strategies delivering 1,500% ROI and $2.8B in annual savings.',
      featured: true,
      tags: ['Enterprise AI', 'ROI', 'Transformation', 'Fortune 500']
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings in 18 Months',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      roi: '1,200%',
      savings: '$2.8B',
      readingTime: '18 min read',
      description: 'Real-world case study of how a Fortune 50 company achieved 1,200% ROI and $2.8B in annual savings through strategic AI deployment.',
      featured: true,
      tags: ['Case Study', 'Fortune 500', 'Success Story', 'ROI']
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap: From Strategy to 800% ROI',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-roadmap-800-roi',
      roi: '800%',
      savings: '$5.6B',
      readingTime: '30 min read',
      description: 'Complete step-by-step guide to achieving 800% ROI through strategic AI implementation in 18 months.',
      featured: true,
      tags: ['Implementation', 'Roadmap', 'ROI', 'Strategy']
    },
    {
      id: 'quantum-ai-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution - Ultimate Guide',
      type: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-revolution-ultimate-guide',
      roi: '1,200%',
      savings: '$2.8B',
      readingTime: '28 min read',
      description: 'Discover how quantum AI is delivering 1,200% ROI and transforming Fortune 500 operations with breakthrough capabilities.',
      featured: true,
      tags: ['Quantum AI', 'Revolution', 'ROI', 'Breakthrough']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === selectedCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getROIColor = (roi: string) => {
    const roiValue = parseInt(roi.replace(/[%,]/g, ''));
    if (roiValue >= 1000) return 'text-red-600';
    if (roiValue >= 500) return 'text-orange-600';
    return 'text-green-600';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Breakthrough AI Content That Delivers Results
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI implementation guides, 
            success stories, and breakthrough strategies proven to deliver up to <span className="font-bold text-purple-600">1,500% ROI</span>
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-700 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Content Header */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                      {item.type.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  {item.featured && (
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      ⭐ Featured
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
                    <div className="text-sm text-green-600 font-medium mb-1">Expected ROI</div>
                    <div className={`text-2xl font-bold ${getROIColor(item.roi)}`}>
                      {item.roi}
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
                    <div className="text-sm text-blue-600 font-medium mb-1">Potential Savings</div>
                    <div className="text-2xl font-bold text-blue-600">
                      {item.savings}
                    </div>
                  </div>
                </div>

                {/* Reading Time */}
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item.readingTime}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={item.url}
                    className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
                  >
                    Read Full Article
                  </Link>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Save for Later
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics Summary */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Proven Results Across 500+ Companies</h3>
            <p className="text-xl opacity-90">
              Our content is based on real-world implementations delivering measurable results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">1,500%</div>
              <div className="text-sm opacity-75">Maximum ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300 mb-2">$2.8B</div>
              <div className="text-sm opacity-75">Maximum Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">500+</div>
              <div className="text-sm opacity-75">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">98%</div>
              <div className="text-sm opacity-75">Implementation Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join 500+ Fortune 500 companies achieving breakthrough results with our proven AI implementation strategies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
            >
              Get Your Free AI Strategy Session
            </Link>
            <Link
              href="/services"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-600 hover:text-white transition-all"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentShowcase2025;