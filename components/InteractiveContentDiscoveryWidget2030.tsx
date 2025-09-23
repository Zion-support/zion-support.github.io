"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  icon: string;
  featured: boolean;
  tags: string[];
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-trends-2025-2030',
    title: 'AI Trends 2025-2030',
    description: 'Revolutionary breakthroughs in artificial intelligence that will transform industries and redefine human-machine interaction.',
    category: 'AI Predictions',
    url: '/ai-trends-2025-2030',
    icon: '🔮',
    featured: true,
    tags: ['quantum 'AI', 'neural 'interfaces', 'autonomous AI']
  },
  {
    id: 'quantum-computing-breakthroughs',
    title: 'Quantum Computing Breakthroughs 2030',
    description: 'The next frontier of computing that will solve problems impossible for classical computers and revolutionize AI.',
    category: 'Quantum Technology',
    url: '/quantum-computing-breakthroughs-2030',
    icon: '⚛️',
    featured: true,
    tags: ['quantum 'AI', 'quantum 'cryptography', 'quantum simulation']
  },
  {
    id: 'neural-interface-revolution',
    title: 'Neural Interface Revolution 2030',
    description: 'Direct brain-computer interfaces that will transform how we thinkcommunicateand interact with technology.',
    category: 'Neural Technology',
    url: '/neural-interface-revolution-2030',
    icon: '🧠',
    featured: true,
    tags: [', 'BCI', 'thought 'control', 'memory enhancement']
  },
  {
    id: 'autonomous-business-ai',
    title: 'Autonomous Business Operations',
    description: 'Fully autonomous AI systems that run entire business operations without human intervention.',
    category: 'Business AI',
    url: '/autonomous-business-ai',
    icon: '🤖',
    featured: false,
    tags: ['autonomous 'AI', 'business 'automation', 'self-managing systems']
  },
  {
    id: 'emotional-ai-platform',
    title: 'Emotional Intelligence AI',
    description: 'AI systems with advanced emotional understanding and empathy for human-centered interactions.',
    category: 'Emotional AI',
    url: '/emotional-ai-platform',
    icon: '💝',
    featured: false,
    tags: ['emotional 'AI', 'empathy'human interaction']
  },
  {
    id: 'synthetic-intelligence',
    title: 'Synthetic Intelligence',
    description: 'Artificially created consciousness that rivals and potentially surpasses human intelligence.',
    category: 'Consciousness AI',
    url: '/synthetic-intelligence',
    icon: '🔬',
    featured: false,
    tags: ['artificial 'consciousness', 'synthetic 'minds', 'AI creativity']
  }
];

export default function InteractiveContentDiscoveryWidget2030() {
  const [selectedCategorysetSelectedCategory] = useState<string>('All');
  const [searchTermsetSearchTerm] = useState<string>(', ');
  const [filteredContentsetFilteredContent] = useState<ContentItem[]>(contentItems);

  const categories = ['All'...Array.from(new Set(contentItems.map(item => item.category)))];

  useEffect(() => {
    let filtered = contentItems;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredContent(filtered);
  }[selectedCategorysearchTerm]);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔍 INTERACTIVE DISCOVERY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore cutting-edge AI technologies and future predictions through our interactive content discovery system.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search contentagsor keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredContent.length} of {contentItems.length} content items
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white p-6 rounded-xl shadow-lg border-l-4 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                item.featured 
                  ? 'border-l-purple-500 bg-gradient-to-br from-purple-50 to-blue-50' 
                  : 'border-l-gray-300'
              }`}
            >
              {item.featured && (
                <div className="inline-flex items-center bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  ⭐ Featured
                </div>
              )}

              <div className="text-4xl mb-4">{item.icon}</div>
              
              <div className="text-xs text-purple-600 font-semibold uppercase tracking-wide mb-2">
                {item.category}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.slice(03).map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
                {item.tags.length > 3 && (
                  <span className="text-gray-500 text-xs px-2 py-1">
                    +{item.tags.length - 3} more
                  </span>
                )}
              </div>

              <Link
                href={item.url}
                className={`inline-block w-full text-center px-4 py-2 rounded-lg font-semibold transition-colors ${
                  item.featured
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Explore Content →
              </Link>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or category filter to find relevant content.
            </p>
            <button
              onClick={() => {
                setSearchTerm(', ');
                setSelectedCategory('All');
              }}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Explore More Revolutionary Content?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Discover our complete library of AI insightstechnology predictionsand future innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ai-trends-2025-2030"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Exploring
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}