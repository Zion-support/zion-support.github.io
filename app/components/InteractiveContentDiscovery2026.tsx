import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const InteractiveContentDiscovery2026 = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContent, setFilteredContent] = useState([]);

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'quantum', name: 'Quantum AI', icon: '⚛️' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧠' },
    { id: 'autonomous', name: 'Autonomous Systems', icon: '🤖' },
    { id: 'business', name: 'Business AI', icon: '💼' },
    { id: 'future', name: 'Future Tech', icon: '🚀' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'Quantum AI Revolution 2026',
      description: 'Comprehensive guide to quantum-enhanced artificial intelligence',
      category: 'quantum',
      type: 'Guide',
      readTime: '15 min',
      featured: true,
      url: '/content/quantum-ai-revolution-2026'
    },
    {
      id: 2,
      title: 'Neural Interface Implementation',
      description: 'Step-by-step guide to implementing brain-computer interfaces',
      category: 'neural',
      type: 'Implementation',
      readTime: '12 min',
      featured: true,
      url: '/content/neural-interface-implementation'
    },
    {
      id: 3,
      title: 'Autonomous Business Operations',
      description: 'Building self-operating business systems that run 24/7',
      category: 'autonomous',
      type: 'Blueprint',
      readTime: '20 min',
      featured: true,
      url: '/content/autonomous-business-operations'
    },
    {
      id: 4,
      title: 'AI-Powered Business Intelligence',
      description: 'Transforming data into actionable business insights',
      category: 'business',
      type: 'Case Study',
      readTime: '8 min',
      featured: false,
      url: '/content/ai-business-intelligence'
    },
    {
      id: 5,
      title: 'Future of Work with AI',
      description: 'How AI will reshape the workplace and human-AI collaboration',
      category: 'future',
      type: 'Report',
      readTime: '25 min',
      featured: false,
      url: '/content/future-work-ai'
    },
    {
      id: 6,
      title: 'Quantum Computing for Business',
      description: 'Practical applications of quantum computing in enterprise',
      category: 'quantum',
      type: 'White Paper',
      readTime: '18 min',
      featured: true,
      url: '/content/quantum-computing-business'
    }
  ];

  useEffect(() => {
    let filtered = contentItems;
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredContent(filtered);
  }, [activeCategory, searchTerm]);

  const getTypeColor = (type) => {
    const colors = {
      'Guide': 'bg-blue-600',
      'Implementation': 'bg-green-600',
      'Blueprint': 'bg-purple-600',
      'Case Study': 'bg-orange-600',
      'Report': 'bg-red-600',
      'White Paper': 'bg-indigo-600'
    };
    return colors[type] || 'bg-gray-600';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 bg-opacity-10 rounded-full px-8 py-4 mb-8">
            <span className="text-lg font-semibold text-blue-700">🔍 INTERACTIVE CONTENT DISCOVERY</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Discover Your Next
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI Innovation</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive library of AI guides, implementations, and insights. 
            Find exactly what you need to transform your business with cutting-edge technology.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search content, guides, implementations..."
                className="block w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {contentCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 text-sm font-semibold text-center">
                  ⭐ Featured Content
                </div>
              )}

              <div className="p-8">
                {/* Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getTypeColor(item.type)}`}>
                    {item.type}
                  </span>
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {item.description}
                </p>

                {/* Action Button */}
                <Link
                  href={item.url}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Read {item.type} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No content found</h3>
            <p className="text-gray-600 mb-8">
              Try adjusting your search terms or browse different categories.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Load More */}
        {filteredContent.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
              Load More Content
            </button>
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600 font-semibold">AI Guides</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
            <div className="text-gray-600 font-semibold">Implementations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
            <div className="text-gray-600 font-semibold">Case Studies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">1M+</div>
            <div className="text-gray-600 font-semibold">Readers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery2026;