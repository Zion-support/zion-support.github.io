import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI breakthrough delivering 10,000% ROI with 99.9% accuracy',
      category: 'ai-breakthrough',
      roi: '10,000%',
      accuracy: '99.9%',
      url: '/ai-2025-ultimate-breakthrough-revolution',
      featured: true,
      tags: ['AI', 'Breakthrough', 'Revolution', 'ROI']
    },
    {
      id: 2,
      title: 'Quantum Computing Solutions 2025',
      description: 'Revolutionary quantum computing achieving quantum supremacy with 15,000% ROI',
      category: 'quantum',
      roi: '15,000%',
      accuracy: '99.9%',
      url: '/quantum-computing-solutions-2025',
      featured: true,
      tags: ['Quantum', 'Computing', 'Supremacy', 'Breakthrough']
    },
    {
      id: 3,
      title: 'Advanced Automation Solutions 2025',
      description: 'Intelligent process automation delivering 5,000% ROI with autonomous operations',
      category: 'automation',
      roi: '5,000%',
      accuracy: '99.8%',
      url: '/advanced-automation-solutions-2025',
      featured: true,
      tags: ['Automation', 'AI', 'Process', 'ROI']
    },
    {
      id: 4,
      title: 'AI 2026-2030 Future Predictions',
      description: 'Revolutionary predictions for AI development through 2030',
      category: 'predictions',
      roi: '∞',
      accuracy: '95%',
      url: '/ai-2026-2030-future-predictions',
      featured: false,
      tags: ['Predictions', 'Future', 'AI', 'Trends']
    },
    {
      id: 5,
      title: 'Neural Interface Revolution 2026',
      description: 'Direct brain-computer interface technology with 95% success rate',
      category: 'neural',
      roi: '3,000%',
      accuracy: '95%',
      url: '/neural-interface-revolution-2026',
      featured: false,
      tags: ['Neural', 'Interface', 'Brain', 'Computer']
    },
    {
      id: 6,
      title: 'Quantum AI Fusion Breakthrough',
      description: 'Revolutionary fusion of quantum computing and AI delivering 8,000% ROI',
      category: 'quantum',
      roi: '8,000%',
      accuracy: '99.7%',
      url: '/quantum-ai-fusion-breakthrough',
      featured: false,
      tags: ['Quantum', 'AI', 'Fusion', 'Breakthrough']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', icon: '📚' },
    { id: 'ai-breakthrough', name: 'AI Breakthroughs', icon: '🚀' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'automation', name: 'Automation', icon: '🤖' },
    { id: 'predictions', name: 'Predictions', icon: '🔮' },
    { id: 'neural', name: 'Neural Interface', icon: '🧠' }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      'ai-breakthrough': 'from-red-500 to-pink-500',
      'quantum': 'from-cyan-500 to-blue-500',
      'automation': 'from-green-500 to-emerald-500',
      'predictions': 'from-purple-500 to-indigo-500',
      'neural': 'from-orange-500 to-yellow-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-6 animate-pulse">
            🔍 INTERACTIVE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of revolutionary AI content, breakthrough technologies, and success stories. Find exactly what you need to transform your business.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search content, tags, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
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
              className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-yellow-400/50' : ''
              }`}
            >
              {item.featured && (
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full text-yellow-300 text-xs font-semibold mb-4">
                  ⭐ FEATURED
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-3 text-white">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-4 text-sm">
                {item.description}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{item.roi}</div>
                  <div className="text-xs text-gray-400">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{item.accuracy}</div>
                  <div className="text-xs text-gray-400">Accuracy</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href={item.url}
                className={`w-full px-4 py-3 bg-gradient-to-r ${getCategoryColor(item.category)} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 text-center block`}
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
            <h3 className="text-2xl font-bold mb-4 text-gray-300">No Content Found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search terms or category filter to find the content you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Our AI content library is constantly expanding. Contact us to request specific content or get personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Request Content
              </Link>
              <Link
                href="/resources"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}