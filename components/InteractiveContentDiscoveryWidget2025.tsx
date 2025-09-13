import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI breakthrough delivering 10,000% ROI through quantum-enhanced neural networks',
      category: 'breakthrough',
      roi: '10,000%',
      type: 'Revolutionary',
      href: '/ai-2025-ultimate-breakthrough-revolution',
      icon: '🚀',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 2,
      title: 'AI 2026-2030 Ultimate Content Revolution',
      description: 'Quantum neural fusion predictions and consciousness AI breakthroughs for the future',
      category: 'future',
      roi: '15,000%',
      type: 'Future',
      href: '/ai-2026-2030-ultimate-content-revolution',
      icon: '🌌',
      color: 'from-cyan-500 to-purple-500'
    },
    {
      id: 3,
      title: 'Global Transformation Breakthrough Case Study',
      description: 'Fortune 500 company achieves 10,000% ROI through AI 2025 implementation',
      category: 'case-study',
      roi: '10,000%',
      type: 'Success Story',
      href: '/case-studies/ai-2025-global-transformation-breakthrough',
      icon: '🏆',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      title: 'Revolutionary Implementation Guide',
      description: 'Complete step-by-step guide to implementing AI 2025 breakthrough technologies',
      category: 'guide',
      roi: '10,000%',
      type: 'Implementation',
      href: '/resources/ai-2025-revolutionary-implementation-guide',
      icon: '📚',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 5,
      title: 'Quantum Computing Breakthroughs 2030',
      description: 'Revolutionary quantum computing solutions delivering infinite processing power',
      category: 'quantum',
      roi: '20,000%',
      type: 'Quantum',
      href: '/quantum-computing-breakthroughs-2030',
      icon: '⚛️',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 6,
      title: 'Neural Interface Revolution 2026',
      description: 'Breakthrough neural interface technology enabling direct brain-computer interaction',
      category: 'neural',
      roi: '8,000%',
      type: 'Neural',
      href: '/neural-interface-revolution-2026',
      icon: '🧠',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'breakthrough', name: 'Breakthroughs', icon: '🚀' },
    { id: 'future', name: 'Future Predictions', icon: '🔮' },
    { id: 'case-study', name: 'Success Stories', icon: '🏆' },
    { id: 'guide', name: 'Implementation', icon: '📚' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧠' }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-full mb-6 animate-pulse">
            🔍 INTERACTIVE CONTENT DISCOVERY - REVOLUTIONARY AI CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of revolutionary AI content, breakthrough technologies, 
            and success stories that deliver unprecedented ROI.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search revolutionary content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 backdrop-blur-sm"
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
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600'
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
            <Link
              key={item.id}
              href={item.href}
              className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-xl border border-gray-600/30 hover:border-purple-500/60 transition-all duration-300 backdrop-blur-sm hover:transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Content Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{item.icon}</div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color} text-white`}>
                  {item.type}
                </div>
              </div>

              {/* Content Title */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                {item.title}
              </h3>

              {/* Content Description */}
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* ROI Badge */}
              <div className="flex items-center justify-between">
                <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold">
                  {item.roi} ROI
                </div>
                <div className="text-purple-400 group-hover:text-white transition-colors">
                  Explore →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-400">No Content Found</h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search terms or category filter to discover more revolutionary content.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg font-bold text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 p-8 rounded-xl border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of companies already experiencing revolutionary success with our AI 2025 breakthrough technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg font-bold text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/ai-2025-ultimate-breakthrough-revolution"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 rounded-lg font-bold text-white hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Learn About AI 2025
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}