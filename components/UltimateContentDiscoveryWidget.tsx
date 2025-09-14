"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentDiscoveryWidget = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedROI, setSelectedROI] = useState('all');
  const [isExpanded, setIsExpanded] = useState(false);

  const contentItems = [
    {
      id: 'ai-2025-ultimate-automation-revolution',
      title: 'AI 2025: The Ultimate Automation Revolution',
      description: 'Transform your business with 50,000% ROI through revolutionary AI automation',
      category: 'AI Automation',
      roi: '50,000%',
      savings: '$2.8B+',
      readingTime: '25 min read',
      url: '/blog/ai-2025-ultimate-automation-revolution-50000-roi-breakthrough',
      tags: ['AI', 'Automation', 'ROI', 'Business Transformation'],
      featured: true
    },
    {
      id: 'fortune-500-ai-automation-success',
      title: 'Fortune 500 AI Automation Success Story',
      description: 'How TechGlobal Industries achieved $2.8B annual savings with 50,000% ROI',
      category: 'Case Study',
      roi: '50,000%',
      savings: '$2.8B',
      readingTime: '22 min read',
      url: '/case-studies/fortune-500-ai-automation-50000-roi-success-story',
      tags: ['Fortune 500', 'Success Story', 'ROI', 'Manufacturing'],
      featured: true
    },
    {
      id: 'ai-2025-consciousness-revolution',
      title: 'AI 2025: The Consciousness Revolution',
      description: 'Ultimate business breakthrough guide to 50,000% ROI through consciousness AI',
      category: 'AI Revolution',
      roi: '50,000%',
      savings: '$1.2T',
      readingTime: '45 min read',
      url: '/blog/ai-2025-consciousness-revolution-ultimate-business-breakthrough',
      tags: ['Consciousness AI', 'Breakthrough', 'ROI', 'Revolution'],
      featured: true
    },
    {
      id: 'ai-2025-singularity-breakthrough',
      title: 'AI 2025: The Singularity Breakthrough',
      description: 'Ultimate guide to 100,000% ROI through AI singularity achievement',
      category: 'AI Revolution',
      roi: '100,000%',
      savings: '$2.5T',
      readingTime: '50 min read',
      url: '/blog/ai-2025-singularity-breakthrough-ultimate-guide',
      tags: ['AI Singularity', 'Breakthrough', 'ROI', 'Revolution'],
      featured: true
    },
    {
      id: 'quantum-neural-fusion-revolution',
      title: 'AI 2025: The Quantum-Neural Fusion Revolution',
      description: 'Ultimate breakthrough guide to 25,000% ROI through quantum-neural fusion',
      category: 'Quantum AI',
      roi: '25,000%',
      savings: '$500B+',
      readingTime: '35 min read',
      url: '/blog/ai-2025-quantum-neural-fusion-revolution-ultimate-breakthrough',
      tags: ['Quantum Computing', 'Neural Networks', 'ROI', 'Fusion'],
      featured: true
    },
    {
      id: 'ai-business-intelligence-revolution',
      title: 'AI 2025: The Ultimate Business Intelligence Revolution',
      description: 'Ultimate guide to 18,000% ROI through advanced business intelligence',
      category: 'Business Intelligence',
      roi: '18,000%',
      savings: '$89.2B+',
      readingTime: '35 min read',
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough',
      tags: ['Business Intelligence', 'Analytics', 'ROI', 'Data'],
      featured: true
    }
  ];

  const categories = ['all', 'AI Automation', 'Case Study', 'AI Revolution', 'Quantum AI', 'Business Intelligence'];
  const roiRanges = [
    { id: 'all', label: 'All ROI' },
    { id: 'high', label: '50,000%+' },
    { id: 'ultra', label: '100,000%+' }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    const matchesROI = selectedROI === 'all' || 
                      (selectedROI === 'high' && parseInt(item.roi.replace(/,/g, '')) >= 50000) ||
                      (selectedROI === 'ultra' && parseInt(item.roi.replace(/,/g, '')) >= 100000);
    
    return matchesSearch && matchesCategory && matchesROI;
  });

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">🔍 ULTIMATE CONTENT DISCOVERY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find the perfect content for your business transformation journey with our intelligent discovery widget.
          </p>
        </div>

        {/* Search and Filter Interface */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Search Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Search Content</label>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by title, description, or tags..."
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* ROI Filter */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">ROI Range</label>
              <select
                value={selectedROI}
                onChange={(e) => setSelectedROI(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {roiRanges.map(range => (
                  <option key={range.id} value={range.id}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Advanced Filters Toggle */}
          <div className="text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-purple-600 hover:text-purple-700 font-semibold flex items-center justify-center mx-auto"
            >
              {isExpanded ? 'Hide' : 'Show'} Advanced Filters
              <svg className={`ml-2 w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Advanced Filters */}
          {isExpanded && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Reading Time</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option>Any Length</option>
                    <option>Under 30 min</option>
                    <option>30-45 min</option>
                    <option>45+ min</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Content Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option>All Types</option>
                    <option>Blog Posts</option>
                    <option>Case Studies</option>
                    <option>Implementation Guides</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Industry</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option>All Industries</option>
                    <option>Manufacturing</option>
                    <option>Technology</option>
                    <option>Finance</option>
                    <option>Healthcare</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Sort By</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option>Most Recent</option>
                    <option>Highest ROI</option>
                    <option>Most Popular</option>
                    <option>Reading Time</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-900">
              {filteredContent.length} Content {filteredContent.length === 1 ? 'Item' : 'Items'} Found
            </h3>
            <div className="text-sm text-gray-600">
              Showing results for "{searchTerm || 'all content'}"
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-bold">
                      {item.category}
                    </span>
                    {item.featured && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center bg-green-50 rounded-lg p-2">
                    <div className="text-sm font-bold text-green-600">{item.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center bg-blue-50 rounded-lg p-2">
                    <div className="text-sm font-bold text-blue-600">{item.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                <Link
                  href={item.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Read Content →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Content Found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or browse all content
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedROI('all');
              }}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-xl mb-6 opacity-90">
              Our AI experts can help you discover the perfect content for your specific needs
            </p>
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Personalized Recommendations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentDiscoveryWidget;