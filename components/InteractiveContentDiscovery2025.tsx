import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  roi: string;
  icon: string;
  href: string;
  featured: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-2025-breakthrough',
    title: 'AI 2025 Ultimate Breakthrough Revolution',
    description: 'Revolutionary quantum-neural fusion with consciousness-level intelligence',
    category: 'AI Breakthrough',
    roi: '10,000%',
    icon: '⚛️',
    href: '/ai-2025-ultimate-breakthrough-revolution',
    featured: true
  },
  {
    id: 'quantum-computing-2026',
    title: 'Quantum Computing Solutions 2026',
    description: 'Error-corrected quantum computers with infinite processing power',
    category: 'Quantum Computing',
    roi: '20,000%',
    icon: '⚛️',
    href: '/quantum-computing-solutions-2026',
    featured: true
  },
  {
    id: 'automation-2025',
    title: 'Advanced Automation Solutions 2025',
    description: 'Intelligent process automation with 24/7 autonomous operation',
    category: 'Automation',
    roi: '5,000%',
    icon: '🤖',
    href: '/advanced-automation-solutions-2025',
    featured: true
  },
  {
    id: 'neural-interfaces',
    title: 'Neural Interface Revolution 2026',
    description: 'Direct brain-computer interfaces for enhanced human-AI collaboration',
    category: 'Neural Technology',
    roi: '15,000%',
    icon: '🧠',
    href: '/neural-interface-revolution-2026',
    featured: false
  },
  {
    id: 'consciousness-ai',
    title: 'Consciousness AI Evolution 2027',
    description: 'AI systems achieving consciousness-level awareness and self-evolution',
    category: 'Consciousness AI',
    roi: '∞',
    icon: '🌌',
    href: '/consciousness-ai-evolution-2027',
    featured: false
  },
  {
    id: 'quantum-neural-fusion',
    title: 'Quantum-Neural Fusion 2026',
    description: 'Breakthrough fusion of quantum computing and neural networks',
    category: 'Quantum AI',
    roi: '25,000%',
    icon: '⚛️',
    href: '/quantum-neural-fusion-2026',
    featured: false
  }
];

const categories = ['All', 'AI Breakthrough', 'Quantum Computing', 'Automation', 'Neural Technology', 'Consciousness AI', 'Quantum AI'];

export default function InteractiveContentDiscovery2025() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most revolutionary AI content tailored to your interests. 
            Use our intelligent discovery engine to find content that matches your business needs.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search for AI content, technologies, or solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-black'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                item.featured 
                  ? 'border-yellow-500/50 hover:border-yellow-400/70' 
                  : 'border-gray-600/50 hover:border-cyan-500/50'
              }`}
            >
              {item.featured && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-pink-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                  FEATURED
                </div>
              )}
              
              <div className="text-3xl mb-4">{item.icon}</div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>
              
              <div className="flex justify-between items-center">
                <span className="text-xs bg-gray-700/50 px-2 py-1 rounded text-gray-300">
                  {item.category}
                </span>
                <span className="text-lg font-bold text-green-400">
                  {item.roi} ROI
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2 text-gray-300">No content found</h3>
            <p className="text-gray-400">Try adjusting your search terms or category filter</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Can't find what you're looking for? Our AI can create custom content for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform"
            >
              🤖 Request Custom Content
            </Link>
            <Link 
              href="/content-showcase"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-colors"
            >
              📚 Browse All Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}