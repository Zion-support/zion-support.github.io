import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  roi: string;
  year: string;
  href: string;
  featured: boolean;
  icon: string;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-2025-breakthrough',
    title: 'AI 2025 Ultimate Breakthrough Revolution',
    description: 'Revolutionary AI breakthroughs transforming industries with 2,500-5,000% ROI',
    category: 'AI 2025',
    roi: '10,000%',
    year: '2025',
    href: '/ai-2025-ultimate-breakthrough-revolution',
    featured: true,
    icon: '🚀'
  },
  {
    id: 'ai-2026-revolutionary',
    title: 'AI 2026 Breakthrough Revolutionary Content',
    description: 'Quantum-neural fusion and transcendent intelligence delivering unprecedented results',
    category: 'AI 2026',
    roi: '15,000%',
    year: '2026',
    href: '/ai-2026-breakthrough-revolutionary-content',
    featured: true,
    icon: '🌌'
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing Solutions 2025',
    description: 'Error-corrected quantum computers achieving quantum supremacy',
    category: 'Quantum',
    roi: '8,000%',
    year: '2025',
    href: '/quantum-computing-solutions',
    featured: false,
    icon: '⚛️'
  },
  {
    id: 'neural-interfaces',
    title: 'Neural Interface Revolution 2026',
    description: 'Direct brain-computer interfaces with 95% success rates',
    category: 'Neural',
    roi: '5,000%',
    year: '2026',
    href: '/neural-interface-solutions',
    featured: false,
    icon: '🧠'
  },
  {
    id: 'autonomous-systems',
    title: 'Autonomous Operations 2025',
    description: 'Fully autonomous business systems with 99.9% accuracy',
    category: 'Autonomous',
    roi: '2,500%',
    year: '2025',
    href: '/autonomous-business-systems-2025',
    featured: false,
    icon: '🤖'
  },
  {
    id: 'space-technology',
    title: 'Space Technology Solutions 2025',
    description: 'AI-powered space exploration and interplanetary missions',
    category: 'Space',
    roi: '10,000%',
    year: '2025',
    href: '/space-technology-solutions-2025',
    featured: false,
    icon: '🚀'
  }
];

export default function InteractiveContentDiscoveryWidget2026() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(contentItems);

  const categories = ['All', 'AI 2025', 'AI 2026', 'Quantum', 'Neural', 'Autonomous', 'Space'];

  useEffect(() => {
    let filtered = contentItems;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            🔍 Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover revolutionary AI content, case studies, and implementation guides tailored to your needs. 
            Explore breakthrough technologies and success stories from 2025-2030.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search content, technologies, or ROI..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
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
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
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
              className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                item.featured
                  ? 'border-cyan-500/50 hover:border-cyan-400/70 shadow-cyan-500/10'
                  : 'border-gray-600/50 hover:border-gray-500/70'
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                  FEATURED
                </div>
              )}

              {/* Icon and Category */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{item.icon}</div>
                <div className="text-sm text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                  {item.category}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* ROI and Year */}
              <div className="flex justify-between items-center mb-4">
                <div className="text-2xl font-bold text-green-400">
                  {item.roi} ROI
                </div>
                <div className="text-sm text-gray-400">
                  {item.year}
                </div>
              </div>

              {/* Action Button */}
              <Link
                href={item.href}
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                  item.featured
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400'
                    : 'bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500'
                }`}
              >
                Explore Content →
              </Link>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No content found</h3>
            <p className="text-gray-500">Try adjusting your search terms or category filters</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-800/30 to-purple-800/30 p-8 rounded-xl border border-cyan-500/30">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-300 mb-6">
              Our AI-powered content recommendation system can help you discover the perfect solutions for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                💬 Get Personalized Recommendations
              </Link>
              <Link
                href="/resources"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-bold hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
              >
                📚 Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}