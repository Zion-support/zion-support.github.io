import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Experience the most revolutionary AI breakthrough of 2025, delivering 2,500-5,000% ROI',
      category: 'breakthrough',
      href: '/ai-2025-ultimate-breakthrough-revolution',
      badge: 'BREAKTHROUGH',
      color: 'from-red-500 to-pink-500',
      featured: true
    },
    {
      id: 2,
      title: 'AI 2026 Quantum-Neural Fusion',
      description: 'Revolutionary quantum-neural fusion technology delivering 15,000% ROI',
      category: 'future',
      href: '/ai-2026-quantum-neural-fusion-breakthrough',
      badge: 'FUTURE',
      color: 'from-cyan-500 to-purple-500',
      featured: true
    },
    {
      id: 3,
      title: 'Revolutionary Content Showcase 2025',
      description: 'Comprehensive collection of revolutionary AI content and technologies',
      category: 'showcase',
      href: '/revolutionary-content-showcase-2025',
      badge: 'SHOWCASE',
      color: 'from-purple-500 to-indigo-500',
      featured: true
    },
    {
      id: 4,
      title: 'Synthetic Intelligence Revolution',
      description: 'Advanced AI systems that think, learn, and adapt with human-like intelligence',
      category: 'breakthrough',
      href: '/blog/ai-2025-synthetic-intelligence-revolution',
      badge: 'REVOLUTIONARY',
      color: 'from-purple-500 to-pink-500',
      featured: false
    },
    {
      id: 5,
      title: 'Quantum Computing Solutions 2025',
      description: 'Revolutionary quantum processors solving complex problems 10,000x faster',
      category: 'technology',
      href: '/quantum-computing-solutions-2025',
      badge: 'TECHNOLOGY',
      color: 'from-blue-500 to-cyan-500',
      featured: false
    },
    {
      id: 6,
      title: 'Global Enterprise Transformation',
      description: 'Fortune 500 company achieves 10,000% ROI with AI implementation',
      category: 'success',
      href: '/case-studies/ai-2025-global-transformation-breakthrough',
      badge: 'SUCCESS',
      color: 'from-green-500 to-emerald-500',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'breakthrough', name: 'Breakthroughs', count: contentItems.filter(item => item.category === 'breakthrough').length },
    { id: 'future', name: 'Future Tech', count: contentItems.filter(item => item.category === 'future').length },
    { id: 'showcase', name: 'Showcases', count: contentItems.filter(item => item.category === 'showcase').length },
    { id: 'technology', name: 'Technology', count: contentItems.filter(item => item.category === 'technology').length },
    { id: 'success', name: 'Success Stories', count: contentItems.filter(item => item.category === 'success').length }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            🚀 Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most revolutionary AI content, breakthrough technologies, and success stories 
            that are transforming industries worldwide.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Input */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-purple-500/30' : ''
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ⭐ FEATURED
                  </span>
                  <span className={`bg-gradient-to-r ${item.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                    {item.badge}
                  </span>
                </div>
              )}
              
              {!item.featured && (
                <div className="flex items-center justify-end mb-4">
                  <span className={`bg-gradient-to-r ${item.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                    {item.badge}
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-3 text-white">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-6 text-sm">
                {item.description}
              </p>
              
              <Link 
                href={item.href}
                className={`bg-gradient-to-r ${item.color} hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg text-sm transition-all duration-300 inline-block w-full text-center`}
              >
                Explore Content →
              </Link>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-300">No content found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search terms or category filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Can't find what you're looking for?
          </h3>
          <p className="text-gray-300 mb-6">
            Contact us to discuss your specific AI needs and get personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link 
              href="/revolutionary-content-showcase-2025"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              View All Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}