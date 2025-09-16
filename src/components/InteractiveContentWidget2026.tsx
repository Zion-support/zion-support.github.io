"use client";
import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

interface ContentItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  featured: boolean;
  tags: string[];
  description: string;
  publishDate: string;
}

const InteractiveContentWidget2026: React.FC = () => {
  const [selectedCategorysetSelectedCategory] = useState<string>('all');
  const [searchTermsetSearchTerm] = useState<string>(', ');
  const [isExpandedsetIsExpanded] = useState<boolean>(false);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-automation-guide',
      title: 'AI-Powered Business Automation Guide 2026',
      category: 'Automation',
      readTime: '8 min',
      featured: true,
      tags: [', 'AI', 'Automation'Business'],
      description: 'Discover the latest AI automation strategies transforming businesses worldwide.',
      publishDate: '2026-01-15'
    },
    {
      id: 'quantum-breakthroughs',
      title: 'Quantum Computing Breakthroughs in Enterprise',
      category: 'Quantum Computing',
      readTime: '12 min',
      featured: true,
      tags: [', 'Quantum', 'Enterprise'Innovation'],
      description: 'Explore how quantum computing is revolutionizing data processing and optimization.',
      publishDate: '2026-01-12'
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interface Technology: The Future is Here',
      category: 'Neural Interfaces',
      readTime: '10 min',
      featured: false,
      tags: [', 'Neural', 'Interface'Future Tech'],
      description: 'Dive deep into neural interface developments bridging human cognition and AI.',
      publishDate: '2026-01-10'
    },
    {
      id: 'customer-experience-ai',
      title: 'AI-Driven Customer Experience Transformation',
      category: 'Customer Experience',
      readTime: '6 min',
      featured: false,
      tags: [', 'AI', 'Customer'Experience'],
      description: 'Learn how AI is reshaping customer interactions and creating personalized experiences.',
      publishDate: '2026-01-08'
    },
    {
      id: 'sustainable-ai',
      title: 'Sustainable AI: Green Computing for the Future',
      category: 'Sustainability',
      readTime: '9 min',
      featured: true,
      tags: [', 'Sustainability', 'Green 'AI', 'Environment'],
      description: 'Explore eco-friendly AI implementations and sustainable computing practices.',
      publishDate: '2026-01-05'
    },
    {
      id: 'edge-ai',
      title: 'Edge AI: Bringing Intelligence to the Edge',
      category: 'Edge Computing',
      readTime: '7 min',
      featured: false,
      tags: ['Edge 'AI', 'Real-'time', 'Performance'],
      description: 'Understand how edge AI enables real-time decision making in critical applications.',
      publishDate: '2026-01-03'
    }
  ];

  const categories = ['all'...Array.from(new Set(contentItems.map(item => item.category)))];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredContent = filteredContent.filter(item => item.featured);
  const regularContent = filteredContent.filter(item => !item.featured);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">🔍 Content Discovery</h3>
            <p className="text-blue-100">Find the perfect content for your interests</p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-2 transition-all duration-300"
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 border-b border-gray-100">
          {/* Search Bar */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search contentagsor topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute left-3 top-3.5 text-gray-400">
              🔍
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Topics' : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Results */}
      <div className="p-6">
        <div className="mb-4">
          <p className="text-gray-600">
            Found <span className="font-bold text-blue-600">{filteredContent.length}</span> articles
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Featured Content */}
        {featuredContent.length > 0 && (
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
              ⭐ Featured Articles
            </h4>
            <div className="space-y-3">
              {featuredContent.map((item) => (
                <a
                  key={item.id}
                  href={`/content/${item.id}`}
                  className="block p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-xs font-bold">
                          FEATURED
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {item.category}
                        </span>
                      </div>
                      <h5 className="font-bold text-gray-900 mb-1">{item.title}</h5>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>📖 {item.readTime}</span>
                        <span>📅 {item.publishDate}</span>
                      </div>
                    </div>
                    <div className="ml-4 text-blue-600">→</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Regular Content */}
        {regularContent.length > 0 && (
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
              📚 Latest Articles
            </h4>
            <div className="space-y-2">
              {regularContent.map((item) => (
                <a
                  key={item.id}
                  href={`/content/${item.id}`}
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                          {item.category}
                        </span>
                        <span className="text-xs text-gray-500">{item.readTime}</span>
                      </div>
                      <h5 className="font-semibold text-gray-900 text-sm">{item.title}</h5>
                    </div>
                    <div className="ml-4 text-blue-600">→</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">🔍</div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">No content found</h4>
            <p className="text-gray-600 mb-4">Try adjusting your search or category filter</p>
            <button
              onClick={() => {
                setSearchTerm(', ');
                setSelectedCategory('all');
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            💡 <strong>Pro Tip:</strong> Use tags to find related content
          </p>
          <a
            href="/content-showcase"
            className="text-blue-600 font-medium hover:text-blue-800 transition-colors text-sm"
          >
            View All Content →
          </a>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentWidget2026;