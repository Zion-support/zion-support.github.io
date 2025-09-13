import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  link: string;
  tags: string[];
  roi?: string;
  accuracy?: string;
  featured?: boolean;
}

export default function InteractiveContentDiscovery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-2025-breakthrough',
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI technology delivering 10,000% ROI with 99.9% accuracy and autonomous operations.',
      category: 'ai-2025',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      tags: ['AI', 'Revolution', 'ROI', 'Autonomous'],
      roi: '10,000%',
      accuracy: '99.9%',
      featured: true
    },
    {
      id: 'quantum-2026',
      title: 'Quantum Computing 2026 Ultimate Breakthrough',
      description: 'Error-corrected quantum computers achieving quantum supremacy with infinite computational power.',
      category: 'quantum',
      link: '/quantum-computing-2026-ultimate-breakthrough',
      tags: ['Quantum', 'Supremacy', 'Error-Corrected', 'Infinite'],
      roi: '∞',
      accuracy: '99.9%',
      featured: true
    },
    {
      id: 'neural-interface-2026',
      title: 'Neural Interface Revolution 2026',
      description: 'Direct brain-computer interface technology with 95% success rate and mind control capabilities.',
      category: 'neural',
      link: '/neural-interface-revolution-2026',
      tags: ['Neural', 'Brain-Computer', 'Interface', 'Mind Control'],
      roi: '5,000%',
      accuracy: '95%',
      featured: true
    },
    {
      id: 'consciousness-ai-2030',
      title: 'Consciousness AI 2030',
      description: 'Artificial consciousness and self-aware AI systems with transcendent intelligence capabilities.',
      category: 'consciousness',
      link: '/consciousness-ai-2030',
      tags: ['Consciousness', 'Self-Aware', 'Transcendent', 'Intelligence'],
      roi: '∞',
      accuracy: '100%',
      featured: true
    },
    {
      id: 'quantum-ai-fusion-2029',
      title: 'Quantum-AI Fusion 2029',
      description: 'Revolutionary fusion of quantum computing with artificial intelligence for infinite learning capacity.',
      category: 'quantum',
      link: '/quantum-ai-fusion-2029',
      tags: ['Quantum-AI', 'Fusion', 'Learning', 'Infinite'],
      roi: '8,000%',
      accuracy: '99.7%'
    },
    {
      id: 'space-technology-2035',
      title: 'Space Technology Solutions 2035',
      description: 'Advanced space technology enabling interstellar travel and galactic expansion with AI assistance.',
      category: 'space',
      link: '/space-technology-solutions-2035',
      tags: ['Space', 'Interstellar', 'Galactic', 'Expansion'],
      roi: '∞',
      accuracy: '99.8%'
    },
    {
      id: 'matter-creation-2035',
      title: 'Matter Creation Technology 2035',
      description: 'Revolutionary technology for creating matter from energy, enabling infinite resource generation.',
      category: 'matter',
      link: '/matter-creation-technology-2035',
      tags: ['Matter', 'Creation', 'Energy', 'Infinite'],
      roi: '∞',
      accuracy: '100%'
    },
    {
      id: 'dimension-transcendence-2035',
      title: 'Dimension Transcendence 2035',
      description: 'Breakthrough technology for transcending dimensional barriers and accessing parallel universes.',
      category: 'dimensions',
      link: '/dimension-transcendence-2035',
      tags: ['Dimensions', 'Transcendence', 'Parallel', 'Universes'],
      roi: '∞',
      accuracy: '100%'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'ai-2025', name: 'AI 2025', icon: '🤖' },
    { id: 'quantum', name: 'Quantum', icon: '⚛️' },
    { id: 'neural', name: 'Neural', icon: '🧠' },
    { id: 'consciousness', name: 'Consciousness', icon: '🌌' },
    { id: 'space', name: 'Space', icon: '🚀' },
    { id: 'matter', name: 'Matter', icon: '⚗️' },
    { id: 'dimensions', name: 'Dimensions', icon: '🌀' }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our revolutionary breakthrough technologies and discover the future of AI, quantum computing, and beyond.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search breakthrough technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-yellow-400' : ''
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="p-6">
                {/* Featured Badge */}
                {item.featured && (
                  <div className="flex items-center mb-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      ⭐ FEATURED
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="flex gap-4 mb-4">
                  {item.roi && (
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm font-bold">
                      💰 {item.roi} ROI
                    </div>
                  )}
                  {item.accuracy && (
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm font-bold">
                      🎯 {item.accuracy} Accuracy
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Link
                  href={item.link}
                  className={`block w-full text-center py-3 rounded-lg font-bold transition-all duration-300 ${
                    hoveredItem === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white transform scale-105'
                      : 'bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-blue-600 hover:to-purple-600'
                  }`}
                >
                  Explore Breakthrough →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Results Found</h3>
            <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Future?</h3>
            <p className="text-xl mb-6">Join thousands of companies already using our revolutionary technologies.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/case-studies"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}