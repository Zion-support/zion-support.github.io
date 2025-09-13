import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  link: string;
  category: string;
  roi: string;
  badge: string;
  color: string;
  icon: string;
}

export default function InteractiveContentDiscoveryWidget() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-2025-breakthrough',
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI technology delivering 10,000% ROI through quantum-enhanced automation',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      category: 'ai-2025',
      roi: '10,000% ROI',
      badge: 'BREAKTHROUGH',
      color: 'from-red-500 to-pink-500',
      icon: '🚀'
    },
    {
      id: 'quantum-solutions',
      title: 'Quantum Computing Solutions 2025',
      description: 'Revolutionary quantum technology with 15,000% ROI through quantum supremacy',
      link: '/quantum-computing-solutions-2025',
      category: 'quantum',
      roi: '15,000% ROI',
      badge: 'REVOLUTIONARY',
      color: 'from-cyan-500 to-blue-500',
      icon: '⚛️'
    },
    {
      id: 'ai-master-guide',
      title: 'AI 2025 Ultimate Implementation Master Guide',
      description: 'Complete transformation blueprint for achieving 10,000% ROI',
      link: '/resources/ai-2025-ultimate-implementation-master-guide',
      category: 'resources',
      roi: '10,000% ROI',
      badge: 'MASTER GUIDE',
      color: 'from-yellow-500 to-orange-500',
      icon: '📚'
    },
    {
      id: 'ai-2026-predictions',
      title: 'AI 2026 Future Predictions',
      description: 'Comprehensive predictions for AI breakthroughs in 2026',
      link: '/ai-2026-future-predictions',
      category: 'ai-2026',
      roi: '5,000% ROI',
      badge: 'FUTURE',
      color: 'from-purple-500 to-indigo-500',
      icon: '🔮'
    },
    {
      id: 'quantum-ai-fusion',
      title: 'Quantum-AI Fusion Breakthrough',
      description: 'Revolutionary fusion of quantum computing and AI',
      link: '/quantum-ai-fusion-2026',
      category: 'quantum',
      roi: '20,000% ROI',
      badge: 'FUSION',
      color: 'from-green-500 to-emerald-500',
      icon: '🧠'
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Revolution',
      description: 'Breakthrough neural interface technology for 2026',
      link: '/neural-interface-revolution-2026',
      category: 'ai-2026',
      roi: '8,000% ROI',
      badge: 'REVOLUTION',
      color: 'from-pink-500 to-rose-500',
      icon: '🧠'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'ai-2025', name: 'AI 2025', count: contentItems.filter(item => item.category === 'ai-2025').length },
    { id: 'ai-2026', name: 'AI 2026', count: contentItems.filter(item => item.category === 'ai-2026').length },
    { id: 'quantum', name: 'Quantum', count: contentItems.filter(item => item.category === 'quantum').length },
    { id: 'resources', name: 'Resources', count: contentItems.filter(item => item.category === 'resources').length }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Discover Revolutionary Content
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our comprehensive library of AI breakthroughs, quantum solutions, 
          and implementation guides designed to transform your business.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 ${
              hoveredItem === item.id ? 'border-l-8' : ''
            }`}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              borderLeftColor: item.color.includes('red') ? '#ef4444' :
                              item.color.includes('cyan') ? '#06b6d4' :
                              item.color.includes('yellow') ? '#eab308' :
                              item.color.includes('purple') ? '#8b5cf6' :
                              item.color.includes('green') ? '#10b981' :
                              item.color.includes('pink') ? '#ec4899' : '#6b7280'
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-3xl">{item.icon}</div>
              <div className={`inline-flex items-center px-2 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-bold`}>
                {item.badge}
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
              {item.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {item.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-green-600">
                {item.roi}
              </div>
              <Link
                href={item.link}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-400 hover:to-purple-400 transition-all duration-300"
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">
          Can't find what you're looking for? Our AI experts are here to help.
        </p>
        <Link
          href="/contact"
          className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-3 rounded-lg text-lg font-bold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
        >
          Get Personalized Recommendations
        </Link>
      </div>
    </div>
  );
}