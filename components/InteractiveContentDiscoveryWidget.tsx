import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  link: string;
  category: string;
  badge: string;
  color: string;
  bgColor: string;
  icon: string;
  featured: boolean;
}

export default function InteractiveContentDiscoveryWidget() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-2025-breakthrough',
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Experience the most revolutionary AI breakthrough in history with 2,500-5,000% ROI',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      category: 'ai-2025',
      badge: 'BREAKTHROUGH',
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50',
      icon: '🚀',
      featured: true
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Solutions 2025',
      description: 'Revolutionary quantum computing delivering breakthrough performance and quantum supremacy',
      link: '/quantum-computing-solutions',
      category: 'quantum',
      badge: 'REVOLUTIONARY',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50',
      icon: '⚛️',
      featured: true
    },
    {
      id: 'automation-2026',
      title: 'Advanced Automation Solutions 2026-2030',
      description: '100% autonomous operations with 5,000%+ ROI across all business processes',
      link: '/advanced-automation-solutions-2026',
      category: 'automation',
      badge: 'FUTURE',
      color: 'from-emerald-500 to-cyan-500',
      bgColor: 'from-emerald-50 to-cyan-50',
      icon: '🤖',
      featured: true
    },
    {
      id: 'ai-2026-predictions',
      title: 'AI 2026 Future Predictions',
      description: 'Comprehensive predictions and trends for the next generation of AI technology',
      link: '/ai-2026-future-predictions',
      category: 'ai-2026',
      badge: 'NEW',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      icon: '🔮',
      featured: false
    },
    {
      id: 'quantum-neural-fusion',
      title: 'Quantum-Neural Fusion 2026',
      description: 'Breakthrough technology combining quantum computing with neural networks for unprecedented power',
      link: '/quantum-neural-fusion-2026',
      category: 'quantum',
      badge: 'BREAKTHROUGH',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      icon: '🧠',
      featured: false
    },
    {
      id: 'neural-interface-2026',
      title: 'Neural Interface Revolution 2026',
      description: 'Revolutionary brain-computer interfaces that enable direct neural communication',
      link: '/neural-interface-revolution-2026',
      category: 'ai-2026',
      badge: 'REVOLUTIONARY',
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-50 to-teal-50',
      icon: '🧠',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', icon: '📚' },
    { id: 'ai-2025', name: 'AI 2025', icon: '🚀' },
    { id: 'ai-2026', name: 'AI 2026', icon: '🔮' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'automation', name: 'Automation', icon: '🤖' }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredContent = contentItems.filter(item => item.featured);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Discover Revolutionary Content</h2>
            <p className="text-blue-100">Explore our latest AI breakthroughs and quantum computing solutions</p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-white/20 hover:bg-white/30 rounded-lg p-2 transition-colors duration-300"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            <svg 
              className={`w-6 h-6 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
      <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-none' : 'max-h-96'}`}>
        <div className="p-6">
          {/* Featured Content */}
          {selectedCategory === 'all' && searchTerm === '' && (
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">⭐</span>
                Featured Content
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredContent.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    className="group block bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{item.icon}</div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color} text-white`}>
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                      Explore Now
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All Content */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-2xl mr-2">📚</span>
              {selectedCategory === 'all' ? 'All Content' : categories.find(c => c.id === selectedCategory)?.name}
              <span className="ml-2 text-sm font-normal text-gray-500">({filteredContent.length} items)</span>
            </h3>
            
            {filteredContent.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">No content found</h4>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredContent.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    className="group block bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{item.icon}</div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color} text-white`}>
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                      Explore Now
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Discover more revolutionary content and stay ahead of the AI curve
          </p>
          <Link
            href="/content-showcase"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
          >
            View All Content
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}