import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  roi: string;
  badge: string;
  link: string;
  gradient: string;
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
      description: 'Revolutionary AI breakthrough delivering 5,000% ROI through quantum-enhanced neural networks.',
      category: 'ai-2025',
      roi: '5,000%',
      badge: 'BREAKTHROUGH',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      gradient: 'from-red-500 to-pink-500',
      icon: '🚀',
      featured: true
    },
    {
      id: 'quantum-2026',
      title: 'Quantum Computing Breakthrough 2026',
      description: 'Revolutionary quantum computing with 10,000x processing power and error-corrected systems.',
      category: 'quantum',
      roi: '10,000x',
      badge: 'REVOLUTIONARY',
      link: '/quantum-computing-breakthrough-2026',
      gradient: 'from-cyan-500 to-blue-500',
      icon: '⚛️',
      featured: true
    },
    {
      id: 'ai-2026-quantum-neural',
      title: 'AI 2026 Quantum-Neural Fusion',
      description: 'Breakthrough quantum-neural fusion technology delivering 15,000% ROI.',
      category: 'ai-2026',
      roi: '15,000%',
      badge: 'FUTURE',
      link: '/ai-2026-quantum-neural-fusion-breakthrough',
      gradient: 'from-purple-500 to-indigo-500',
      icon: '🧠',
      featured: true
    },
    {
      id: 'ai-2030-transcendent',
      title: 'AI 2030 Transcendent Intelligence',
      description: 'Transcendent AI intelligence that transcends human limitations with infinite ROI.',
      category: 'ai-2030',
      roi: '∞',
      badge: 'TRANSCENDENT',
      link: '/ai-2030-transcendent-intelligence',
      gradient: 'from-yellow-500 to-orange-500',
      icon: '🌌',
      featured: true
    },
    {
      id: 'enterprise-transformation',
      title: 'Enterprise AI Transformation',
      description: 'Complete enterprise transformation with 2,500% ROI in 90 days.',
      category: 'enterprise',
      roi: '2,500%',
      badge: 'SUCCESS',
      link: '/case-studies/ai-2025-enterprise-transformation-breakthrough',
      gradient: 'from-green-500 to-emerald-500',
      icon: '🏢',
      featured: false
    },
    {
      id: 'neural-interface-2026',
      title: 'Neural Interface Revolution 2026',
      description: 'Revolutionary neural interface technology with 95% patient recovery success.',
      category: 'neural',
      roi: '95%',
      badge: 'BREAKTHROUGH',
      link: '/blog/ai-2026-neural-interface-revolution',
      gradient: 'from-indigo-500 to-purple-500',
      icon: '🧠',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'ai-2025', name: 'AI 2025', icon: '🚀' },
    { id: 'ai-2026', name: 'AI 2026', icon: '🧠' },
    { id: 'ai-2030', name: 'AI 2030', icon: '🌌' },
    { id: 'quantum', name: 'Quantum', icon: '⚛️' },
    { id: 'enterprise', name: 'Enterprise', icon: '🏢' },
    { id: 'neural', name: 'Neural', icon: '🧠' }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-xl border border-gray-800 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
          🔍 Interactive Content Discovery
        </h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>

      {isExpanded && (
        <>
          {/* Search and Filter */}
          <div className="mb-6 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search revolutionary content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <div className="absolute right-3 top-3 text-gray-400">
                🔍
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredContent.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-all hover:scale-105"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-2xl">{item.icon}</div>
                  <div className={`px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.gradient} text-white`}>
                    {item.badge}
                  </div>
                </div>
                
                <h4 className="font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h4>
                
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-green-400 font-bold text-lg">
                    {item.roi} ROI
                  </div>
                  {item.featured && (
                    <div className="text-yellow-400 text-sm">⭐ Featured</div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* View All CTA */}
          <div className="mt-6 text-center">
            <Link
              href="/content-showcase"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              🌟 View All Revolutionary Content
            </Link>
          </div>
        </>
      )}
    </div>
  );
}