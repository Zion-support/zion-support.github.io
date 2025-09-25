import React, { useState } from 'react';
import Link from 'next/link';

const InteractiveContentDiscovery2025 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'ai', name: 'AI Solutions', icon: '🤖' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚡' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧠' },
    { id: 'automation', name: 'Automation', icon: '⚙️' },
    { id: 'security', name: 'Cybersecurity', icon: '🛡️' },
    { id: 'analytics', name: 'Analytics', icon: '📊' },
    { id: 'future', name: 'Future Tech', icon: '🔮' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'Neural Superintelligence 2025',
      description: 'Advanced AI systems with unprecedented learning capabilities',
      category: 'ai',
      roi: '50,000%',
      featured: true,
      link: '/ai-2025/neural-superintelligence'
    },
    {
      id: 2,
      title: 'Quantum AI Revolution',
      description: 'Breakthrough quantum computing meets artificial intelligence',
      category: 'quantum',
      roi: '75,000%',
      featured: true,
      link: '/quantum-ai-2026'
    },
    {
      id: 3,
      title: 'Autonomous Business Systems',
      description: 'Self-managing business ecosystems for maximum efficiency',
      category: 'automation',
      roi: '40,000%',
      featured: false,
      link: '/autonomous-business-systems-2026'
    },
    {
      id: 4,
      title: 'Neural Interface Technology',
      description: 'Direct brain-computer interfaces for enhanced productivity',
      category: 'neural',
      roi: '60,000%',
      featured: true,
      link: '/neural-interface-2025'
    },
    {
      id: 5,
      title: 'Advanced Cybersecurity Suite',
      description: 'Next-generation security with AI and quantum encryption',
      category: 'security',
      roi: '35,000%',
      featured: false,
      link: '/ai-2025-cybersecurity'
    },
    {
      id: 6,
      title: 'Predictive Analytics Engine',
      description: 'AI-powered forecasting with 95% accuracy',
      category: 'analytics',
      roi: '45,000%',
      featured: false,
      link: '/ai-2025-analytics'
    },
    {
      id: 7,
      title: 'Future Technology Predictions',
      description: 'Comprehensive forecasts for 2025-2030 technology trends',
      category: 'future',
      roi: 'N/A',
      featured: true,
      link: '/ai-2026-future-predictions'
    },
    {
      id: 8,
      title: 'Synthetic Intelligence Platform',
      description: 'Artificial consciousness and decision-making systems',
      category: 'ai',
      roi: '55,000%',
      featured: false,
      link: '/synthetic-intelligence-2026'
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🔍 INTERACTIVE DISCOVERY</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Your Perfect AI Solution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive library of AI solutions, breakthrough technologies, and revolutionary business tools.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for AI solutions, technologies, or business tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300">
                🔍
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                    : 'bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 text-white hover:bg-opacity-20'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''
              }`}
            >
              {item.featured && (
                <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-3 py-1 text-xs font-bold mb-4">
                  ⭐ FEATURED
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-gray-400">
                  Category: <span className="text-white font-semibold capitalize">{item.category}</span>
                </div>
                {item.roi !== 'N/A' && (
                  <div className="text-lg font-bold text-yellow-400">
                    {item.roi} ROI
                  </div>
                )}
              </div>
              
              <Link
                href={item.link}
                className="inline-flex items-center w-full justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
              >
                Explore Solution →
              </Link>
            </div>
          ))}
        </div>

        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-4">No Results Found</h3>
            <p className="text-gray-300 mb-6">Try adjusting your search terms or category filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg inline-block mb-6">
            🎯 Can't Find What You're Looking For?
          </div>
          <p className="text-lg opacity-90 mb-8">
            Our AI experts can create custom solutions tailored to your specific needs
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
          >
            Get Custom Solution
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery2025;