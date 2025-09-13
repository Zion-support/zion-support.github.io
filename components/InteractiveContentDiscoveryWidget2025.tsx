import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🌟', count: 150 },
    { id: 'ai-predictions', name: 'AI Predictions', icon: '🔮', count: 45 },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: '⚛️', count: 32 },
    { id: 'neural-interfaces', name: 'Neural Interfaces', icon: '🧠', count: 28 },
    { id: 'case-studies', name: 'Case Studies', icon: '📊', count: 25 },
    { id: 'implementation-guides', name: 'Implementation Guides', icon: '📚', count: 20 }
  ];

  const featuredContent = [
    {
      id: 1,
      title: 'AI 2025-2030 Ultimate Predictions',
      description: 'Revolutionary AI predictions that will transform reality',
      category: 'ai-predictions',
      roi: '15,000%',
      difficulty: 'Advanced',
      timeToRead: '45 min',
      image: '🔮',
      href: '/ai-2025-2030-ultimate-predictions',
      tags: ['Revolutionary', 'Breakthrough', 'Future Tech']
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs 2030',
      description: 'Error-corrected quantum computers and quantum internet',
      category: 'quantum-computing',
      roi: '20,000%',
      difficulty: 'Expert',
      timeToRead: '60 min',
      image: '⚛️',
      href: '/quantum-computing-breakthroughs-2030',
      tags: ['Quantum', 'Revolutionary', 'Breakthrough']
    },
    {
      id: 3,
      title: 'Neural Interface Revolution 2030',
      description: 'Direct brain-computer integration and consciousness upload',
      category: 'neural-interfaces',
      roi: '25,000%',
      difficulty: 'Expert',
      timeToRead: '50 min',
      image: '🧠',
      href: '/neural-interface-revolution-2030',
      tags: ['Neural', 'Revolutionary', 'Consciousness']
    },
    {
      id: 4,
      title: 'AI 2025 Global Transformation Success',
      description: 'How Fortune 500 companies achieved 10,000% ROI',
      category: 'case-studies',
      roi: '10,000%',
      difficulty: 'Intermediate',
      timeToRead: '30 min',
      image: '📊',
      href: '/case-studies/ai-2025-global-transformation-breakthrough',
      tags: ['Success Story', 'ROI', 'Enterprise']
    },
    {
      id: 5,
      title: 'Ultimate AI Implementation Guide 2025',
      description: 'Complete step-by-step implementation roadmap',
      category: 'implementation-guides',
      roi: '5,000%',
      difficulty: 'Beginner',
      timeToRead: '90 min',
      image: '📚',
      href: '/resources/ai-2025-ultimate-implementation-guide',
      tags: ['Guide', 'Implementation', 'Step-by-Step']
    },
    {
      id: 6,
      title: 'Quantum-Neural Fusion Technology',
      description: 'Merging quantum computing with neural networks',
      category: 'quantum-computing',
      roi: '18,000%',
      difficulty: 'Expert',
      timeToRead: '55 min',
      image: '⚛️',
      href: '/blog/quantum-neural-fusion-2026',
      tags: ['Quantum', 'Neural', 'Fusion']
    }
  ];

  const filteredContent = featuredContent.filter(content => {
    const matchesCategory = selectedCategory === 'all' || content.category === selectedCategory;
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold mb-6">
            🔍 INTERACTIVE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our comprehensive library of AI predictions, quantum computing breakthroughs, 
            and neural interface technologies. Find content that matches your interests and goals.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for content, topics, or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {contentCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((content) => (
            <Link
              key={content.id}
              href={content.href}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
            >
              {/* Content Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{content.image}</div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">{content.roi}</div>
                  <div className="text-xs text-gray-500">ROI</div>
                </div>
              </div>

              {/* Content Info */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                {content.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {content.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {content.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <span>📊</span>
                    {content.difficulty}
                  </span>
                  <span className="flex items-center gap-1">
                    <span>⏱️</span>
                    {content.timeToRead}
                  </span>
                </div>
                <span className="text-purple-600 font-semibold group-hover:text-purple-700">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Content Found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or category filter to find more content.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View All Content ({featuredContent.length}+ Articles)
          </Link>
        </div>
      </div>
    </div>
  );
}