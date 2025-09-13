import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI breakthroughs transforming industries with 10,000% ROI success stories',
      category: 'breakthroughs',
      tags: ['AI 2025', 'Breakthrough', '10,000% ROI', 'Revolutionary'],
      href: '/ai-2025-ultimate-breakthrough-revolution',
      icon: '🚀',
      featured: true
    },
    {
      id: 2,
      title: 'AI 2026-2030 Future Predictions Showcase',
      description: 'Explore revolutionary AI predictions for 2026-2030 with quantum neural fusion and consciousness AI',
      category: 'predictions',
      tags: ['Future', 'Predictions', 'Quantum Neural', 'Consciousness AI'],
      href: '/ai-2026-2030-future-predictions-showcase',
      icon: '🔮',
      featured: true
    },
    {
      id: 3,
      title: 'Quantum Computing Solutions',
      description: 'Revolutionary quantum computing solutions with 10,000x faster processing and quantum supremacy',
      category: 'quantum',
      tags: ['Quantum', 'Computing', '10,000x Faster', 'Supremacy'],
      href: '/quantum-computing-solutions',
      icon: '⚛️',
      featured: true
    },
    {
      id: 4,
      title: 'AI 2026 Breakthrough Revolutionary Content',
      description: 'Next-generation AI breakthroughs with quantum neural fusion and autonomous systems',
      category: 'breakthroughs',
      tags: ['AI 2026', 'Quantum Neural', 'Autonomous', 'Revolutionary'],
      href: '/ai-2026-breakthrough-revolutionary-content',
      icon: '🌌',
      featured: false
    },
    {
      id: 5,
      title: 'Enterprise Automation Mastery 2025',
      description: 'Complete guide to enterprise automation with AI-powered solutions and 2,500% ROI',
      category: 'automation',
      tags: ['Enterprise', 'Automation', '2,500% ROI', 'Mastery'],
      href: '/enterprise-automation-mastery-2025',
      icon: '🤖',
      featured: false
    },
    {
      id: 6,
      title: 'Neural Interface Solutions 2026',
      description: 'Revolutionary neural interface technology with 95% patient recovery rates in healthcare',
      category: 'neural',
      tags: ['Neural Interface', 'Healthcare', '95% Recovery', 'Revolutionary'],
      href: '/neural-interface-solutions-2026',
      icon: '🧠',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', icon: '📚' },
    { id: 'breakthroughs', name: 'Breakthroughs', icon: '🚀' },
    { id: 'predictions', name: 'Future Predictions', icon: '🔮' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'automation', name: 'Automation', icon: '🤖' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧠' }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold mb-6">
            🔍 INTERACTIVE DISCOVERY
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Discover Revolutionary Content
          </h2>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthroughs, future predictions, and revolutionary technologies. Use our interactive discovery tool to find exactly what you need.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-semibold text-gray-700 mb-2">
                Search Content
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="Search for AI breakthroughs, quantum computing, future predictions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-80">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Filter by Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                item.featured 
                  ? 'border-gradient-to-r from-purple-200 to-pink-200 hover:from-purple-300 hover:to-pink-300' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}>
                {item.featured && (
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full mb-4">
                    ⭐ FEATURED
                  </div>
                )}
                
                <div className="text-4xl mb-4">{item.icon}</div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                  Explore Content
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Content Found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or category filter to find the content you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-xl mb-6 opacity-90">
              Our expert team can help you discover the perfect AI solutions for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Contact Our Experts
              </Link>
              <Link
                href="/resources"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}