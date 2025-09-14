'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const InteractiveContentDiscovery2025 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedROI, setSelectedROI] = useState('all');
  const [isSearching, setIsSearching] = useState(false);

  const categories = [
    { id: 'all', label: 'All Categories', count: 45 },
    { id: 'ai-revolution', label: 'AI Revolution', count: 12 },
    { id: 'autonomous-systems', label: 'Autonomous Systems', count: 8 },
    { id: 'quantum-computing', label: 'Quantum Computing', count: 6 },
    { id: 'neural-networks', label: 'Neural Networks', count: 7 },
    { id: 'business-intelligence', label: 'Business Intelligence', count: 5 },
    { id: 'digital-transformation', label: 'Digital Transformation', count: 7 }
  ];

  const roiRanges = [
    { id: 'all', label: 'All ROI Ranges', min: 0, max: 50000 },
    { id: 'high', label: 'High ROI (10,000%+)', min: 10000, max: 50000 },
    { id: 'medium', label: 'Medium ROI (1,000-10,000%)', min: 1000, max: 10000 },
    { id: 'proven', label: 'Proven ROI (100-1,000%)', min: 100, max: 1000 }
  ];

  const contentItems = [
    {
      id: 'ai-2025-ultimate-autonomous-enterprise-revolution',
      title: 'AI 2025: The Ultimate Autonomous Enterprise Revolution',
      category: 'ai-revolution',
      roi: 7500,
      savings: '$25.8B+',
      readingTime: '35 min read',
      description: 'Complete guide to achieving 7,500% ROI through autonomous enterprise systems',
      url: '/blog/ai-2025-ultimate-autonomous-enterprise-revolution-ultimate-breakthrough',
      tags: ['AI Revolution', 'Autonomous Enterprise', 'ROI', 'Fortune 500'],
      featured: true
    },
    {
      id: 'quantum-neural-fusion-revolution',
      title: 'AI 2025: Quantum-Neural Fusion Revolution',
      category: 'quantum-computing',
      roi: 25000,
      savings: '$500B+',
      readingTime: '35 min read',
      description: 'Revolutionary quantum-neural fusion technology transforming business operations',
      url: '/blog/ai-2025-quantum-neural-fusion-revolution-ultimate-breakthrough',
      tags: ['Quantum Computing', 'Neural Networks', 'AI Revolution', 'ROI'],
      featured: true
    },
    {
      id: 'neural-superintelligence-revolution',
      title: 'AI 2025-2026: The Ultimate Neural Superintelligence Revolution',
      category: 'neural-networks',
      roi: 12000,
      savings: '$45.8B+',
      readingTime: '35 min read',
      description: 'Complete guide to 12,000% ROI through next-generation AI consciousness',
      url: '/blog/ai-2025-2026-ultimate-neural-superintelligence-revolution',
      tags: ['Neural Superintelligence', 'AI Revolution', 'ROI', 'Fortune 500'],
      featured: true
    },
    {
      id: 'advanced-neural-architectures',
      title: 'AI 2025: Advanced Neural Architectures Revolution',
      category: 'neural-networks',
      roi: 2800,
      savings: '$4.2B+',
      readingTime: '25 min read',
      description: 'Next-generation neural architectures delivering unprecedented business results',
      url: '/blog/ai-2025-advanced-neural-architectures-revolution',
      tags: ['Neural Architectures', 'AI Revolution', 'ROI', 'Breakthrough'],
      featured: false
    },
    {
      id: 'ultimate-digital-transformation',
      title: 'AI 2025: Ultimate Digital Transformation Revolution',
      category: 'digital-transformation',
      roi: 35000,
      savings: '$500B+',
      readingTime: '40 min read',
      description: 'Complete digital transformation guide achieving unprecedented ROI results',
      url: '/blog/ai-2025-ultimate-digital-transformation-revolution-ultimate-breakthrough',
      tags: ['Digital Transformation', 'AI Revolution', 'ROI', 'Breakthrough'],
      featured: true
    },
    {
      id: 'business-intelligence-revolution',
      title: 'AI 2025: Ultimate Business Intelligence Revolution',
      category: 'business-intelligence',
      roi: 18000,
      savings: '$89.2B+',
      readingTime: '35 min read',
      description: 'Revolutionary business intelligence solutions delivering massive ROI improvements',
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough',
      tags: ['Business Intelligence', 'AI Revolution', 'ROI', 'Data Analytics'],
      featured: false
    }
  ];

  const [filteredContent, setFilteredContent] = useState(contentItems);

  useEffect(() => {
    setIsSearching(true);
    
    const timeout = setTimeout(() => {
      let filtered = contentItems;

      // Filter by search term
      if (searchTerm) {
        filtered = filtered.filter(item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      }

      // Filter by category
      if (selectedCategory !== 'all') {
        filtered = filtered.filter(item => item.category === selectedCategory);
      }

      // Filter by ROI range
      if (selectedROI !== 'all') {
        const roiRange = roiRanges.find(range => range.id === selectedROI);
        if (roiRange) {
          filtered = filtered.filter(item => 
            item.roi >= roiRange.min && item.roi <= roiRange.max
          );
        }
      }

      setFilteredContent(filtered);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchTerm, selectedCategory, selectedROI]);

  const getCategoryColor = (category: string) => {
    const colors = {
      'ai-revolution': 'bg-purple-500',
      'autonomous-systems': 'bg-blue-500',
      'quantum-computing': 'bg-green-500',
      'neural-networks': 'bg-orange-500',
      'business-intelligence': 'bg-indigo-500',
      'digital-transformation': 'bg-pink-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  const getROIColor = (roi: number) => {
    if (roi >= 10000) return 'text-red-600';
    if (roi >= 1000) return 'text-orange-600';
    if (roi >= 100) return 'text-green-600';
    return 'text-blue-600';
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect AI content for your business needs. Search, filter, and discover 
            breakthrough technologies with proven ROI results.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Search Bar */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Search Content
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by title, description, or tags..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* ROI Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                ROI Range
              </label>
              <select
                value={selectedROI}
                onChange={(e) => setSelectedROI(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {roiRanges.map((range) => (
                  <option key={range.id} value={range.id}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Categories
            </label>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-900">
              {isSearching ? 'Searching...' : `Found ${filteredContent.length} Results`}
            </h3>
            {isSearching && (
              <div className="flex items-center space-x-2 text-purple-600">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
                <span className="text-sm font-medium">Searching...</span>
              </div>
            )}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                content.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {content.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-center font-semibold">
                  ⭐ FEATURED
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${getCategoryColor(content.category)}`}>
                      {categories.find(cat => cat.id === content.category)?.label}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{content.readingTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {content.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-4">
                    <div className="text-center">
                      <div className={`text-lg font-bold ${getROIColor(content.roi)}`}>
                        {content.roi.toLocaleString()}%
                      </div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{content.savings}</div>
                      <div className="text-xs text-gray-500">Savings</div>
                    </div>
                  </div>
                </div>

                <Link
                  href={content.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
                >
                  Read Full Article
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredContent.length === 0 && !isSearching && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Results Found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or filters to find more content.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedROI('all');
              }}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery2025;