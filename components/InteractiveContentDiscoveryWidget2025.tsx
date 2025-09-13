import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  roi: string;
  accuracy: string;
  href: string;
  icon: string;
  gradient: string;
  borderColor: string;
  textColor: string;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-2025-breakthrough',
    title: 'AI 2025 Ultimate Breakthrough Revolution',
    description: 'Revolutionary AI breakthrough with 10,000% ROI and 99.9% accuracy',
    category: 'AI Breakthrough',
    roi: '10,000%',
    accuracy: '99.9%',
    href: '/ai-2025-ultimate-breakthrough-revolution',
    icon: '🚀',
    gradient: 'from-red-500/20 to-pink-500/20',
    borderColor: 'border-red-500/30',
    textColor: 'text-red-300'
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing Solutions 2025',
    description: 'Achieve quantum supremacy with infinite computational power',
    category: 'Quantum Computing',
    roi: '30,000%',
    accuracy: '99.9%',
    href: '/quantum-computing-solutions-2025',
    icon: '⚛️',
    gradient: 'from-purple-500/20 to-indigo-500/20',
    borderColor: 'border-purple-500/30',
    textColor: 'text-purple-300'
  },
  {
    id: 'automation-solutions',
    title: 'Advanced Automation Solutions 2025',
    description: 'Intelligent automation delivering 5,000% ROI through self-managing systems',
    category: 'Automation',
    roi: '5,000%',
    accuracy: '99.9%',
    href: '/advanced-automation-solutions-2025',
    icon: '🤖',
    gradient: 'from-green-500/20 to-blue-500/20',
    borderColor: 'border-green-500/30',
    textColor: 'text-green-300'
  },
  {
    id: 'neural-interface',
    title: 'Neural Interface Revolution 2026',
    description: 'Direct brain-computer integration with 95% patient recovery success',
    category: 'Neural Interface',
    roi: '3,000%',
    accuracy: '95%',
    href: '/ai-2026-neural-interface-revolution',
    icon: '🧠',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    textColor: 'text-blue-300'
  },
  {
    id: 'space-technology',
    title: 'Space Technology Solutions 2025',
    description: 'Interplanetary AI systems enabling space exploration with 5,000% ROI',
    category: 'Space Technology',
    roi: '5,000%',
    accuracy: '99.7%',
    href: '/space-technology-solutions-2025',
    icon: '🚀',
    gradient: 'from-orange-500/20 to-red-500/20',
    borderColor: 'border-orange-500/30',
    textColor: 'text-orange-300'
  },
  {
    id: 'quantum-ai-fusion',
    title: 'Quantum-AI Fusion 2026',
    description: 'Revolutionary quantum-AI fusion delivering 15,000% ROI',
    category: 'Quantum AI',
    roi: '15,000%',
    accuracy: '99.7%',
    href: '/quantum-ai-fusion-2026',
    icon: '⚛️',
    gradient: 'from-indigo-500/20 to-purple-500/20',
    borderColor: 'border-indigo-500/30',
    textColor: 'text-indigo-300'
  }
];

const categories = ['All', 'AI Breakthrough', 'Quantum Computing', 'Automation', 'Neural Interface', 'Space Technology', 'Quantum AI'];

export default function InteractiveContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(contentItems);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    let filtered = contentItems;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredItems(filtered);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-6 animate-pulse">
            🔍 INTERACTIVE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our revolutionary AI content library. Find breakthrough solutions, case studies, and implementation guides tailored to your needs.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {/* Search Bar */}
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search revolutionary content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${item.gradient} p-6 rounded-2xl border ${item.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer group`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link href={item.href}>
                <div className="h-full flex flex-col">
                  {/* Icon and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300">
                      {item.category}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-3 ${item.textColor} group-hover:text-white transition-colors duration-300`}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 flex-grow">
                    {item.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{item.roi}</div>
                      <div className="text-xs text-gray-400">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{item.accuracy}</div>
                      <div className="text-xs text-gray-400">Accuracy</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                      Explore →
                    </span>
                    {hoveredItem === item.id && (
                      <div className="text-xs text-gray-400 animate-pulse">
                        Click to discover
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-300 mb-2">No content found</h3>
            <p className="text-gray-400">Try adjusting your search terms or category filter</p>
          </div>
        )}

        {/* Results Count */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            Showing {filteredItems.length} of {contentItems.length} revolutionary content pieces
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link 
            href="/content-showcase"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            View All Revolutionary Content
          </Link>
        </div>
      </div>
    </div>
  );
}