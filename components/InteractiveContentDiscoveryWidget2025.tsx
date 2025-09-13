import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI breakthroughs with 10,000% ROI potential',
      category: 'ai-2025',
      roi: '10,000%',
      status: 'NEW',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      icon: '⚡',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 2,
      title: 'AI 2026-2030 Future Predictions Revolutionary',
      description: 'Quantum consciousness and transcendent intelligence predictions',
      category: 'ai-2026-2030',
      roi: '∞',
      status: 'REVOLUTIONARY',
      link: '/ai-2026-2030-future-predictions-revolutionary',
      icon: '🔮',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 3,
      title: 'Quantum Computing Breakthrough 2025',
      description: 'Error-corrected quantum computers with 15,000% ROI',
      category: 'quantum',
      roi: '15,000%',
      status: 'BREAKTHROUGH',
      link: '/quantum-computing-breakthrough-2025',
      icon: '⚛️',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 4,
      title: 'Enterprise Automation Mastery 2025',
      description: 'Advanced automation solutions with 8,500% ROI',
      category: 'automation',
      roi: '8,500%',
      status: 'MASTERY',
      link: '/enterprise-automation-mastery-2025',
      icon: '🤖',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 5,
      title: 'Neural Interface Revolution 2026',
      description: 'Direct brain-computer interfaces with 95% accuracy',
      category: 'neural',
      roi: '12,000%',
      status: 'REVOLUTIONARY',
      link: '/neural-interface-revolution-2026',
      icon: '🧠',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 6,
      title: 'Space Technology Solutions 2025',
      description: 'AI-powered space exploration with 5,000% ROI',
      category: 'space',
      roi: '5,000%',
      status: 'FUTURE',
      link: '/space-technology-solutions-2025',
      icon: '🚀',
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'ai-2025', name: 'AI 2025', icon: '⚡' },
    { id: 'ai-2026-2030', name: 'AI 2026-2030', icon: '🔮' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'automation', name: 'Automation', icon: '🤖' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧠' },
    { id: 'space', name: 'Space Technology', icon: '🚀' }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
            🚀 Interactive Content Discovery 2025 🚀
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover revolutionary AI content tailored to your interests. Filter by category, search by keywords, and explore content with unprecedented ROI potential.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
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
              className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{item.icon}</div>
                <div className="flex flex-col items-end">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.status === 'NEW' ? 'bg-green-500/20 text-green-400' :
                    item.status === 'REVOLUTIONARY' ? 'bg-purple-500/20 text-purple-400' :
                    item.status === 'BREAKTHROUGH' ? 'bg-blue-500/20 text-blue-400' :
                    item.status === 'MASTERY' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-orange-500/20 text-orange-400'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                {item.description}
              </p>

              {/* ROI Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-3 py-1 rounded-full">
                  <span className="text-yellow-400 font-bold">ROI: {item.roi}</span>
                </div>
              </div>

              {/* Action Button */}
              <Link
                href={item.link}
                className={`block w-full bg-gradient-to-r ${item.color} text-white text-center py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
              >
                Explore Content
              </Link>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No content found</h3>
            <p className="text-gray-500">Try adjusting your search terms or category filter</p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-cyan-400 mb-2">{contentItems.length}</div>
            <div className="text-gray-300">Total Content Items</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-gray-300">ROI Potential</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-300">Content Updates</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our revolutionary AI solutions to achieve unprecedented ROI and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              href="/ai-implementation-guide-2025"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
            >
              Download Implementation Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}