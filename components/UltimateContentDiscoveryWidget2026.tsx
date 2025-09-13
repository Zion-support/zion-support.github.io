import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  roi: string;
  badge: string;
  href: string;
  featured: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-2025-ultimate-breakthrough',
    title: 'AI 2025 Ultimate Breakthrough Revolution',
    description: 'Revolutionary AI breakthrough delivering 5,000% ROI with quantum consciousness and synthetic intelligence.',
    category: 'AI 2025',
    roi: '5,000% ROI',
    badge: 'BREAKTHROUGH',
    href: '/ai-2025-ultimate-breakthrough-revolution',
    featured: true
  },
  {
    id: 'ai-2026-quantum-neural',
    title: 'AI 2026 Quantum-Neural Fusion',
    description: 'Quantum-neural fusion technology delivering 15,000% ROI with transcendent intelligence.',
    category: 'AI 2026',
    roi: '15,000% ROI',
    badge: 'REVOLUTIONARY',
    href: '/ai-2026-quantum-neural-fusion-breakthrough',
    featured: true
  },
  {
    id: 'ai-2027-future-predictions',
    title: 'AI 2027 Future Predictions',
    description: 'Comprehensive predictions for AI development and business transformation in 2027.',
    category: 'AI 2027',
    roi: '8,000% ROI',
    badge: 'FUTURE',
    href: '/ai-2027-future-predictions',
    featured: false
  },
  {
    id: 'ai-2028-automotive-breakthrough',
    title: 'AI 2028 Automotive Breakthrough',
    description: 'Revolutionary automotive AI solutions delivering 3,000% ROI in transportation.',
    category: 'AI 2028',
    roi: '3,000% ROI',
    badge: 'BREAKTHROUGH',
    href: '/case-studies/ai-2028-automotive-transformation-breakthrough',
    featured: false
  },
  {
    id: 'ai-2029-singularity',
    title: 'AI 2029 Singularity Breakthrough',
    description: 'Singularity-level AI technology achieving infinite ROI and transcendent capabilities.',
    category: 'AI 2029',
    roi: '∞ ROI',
    badge: 'SINGULARITY',
    href: '/ai-2029-singularity-breakthrough',
    featured: true
  },
  {
    id: 'ai-2030-transcendent',
    title: 'AI 2030 Transcendent Intelligence',
    description: 'Transcendent AI systems delivering infinite ROI and universal consciousness.',
    category: 'AI 2030',
    roi: '∞ ROI',
    badge: 'TRANSCENDENT',
    href: '/ai-2030-transcendent-intelligence',
    featured: true
  }
];

const categories = ['All', 'AI 2025', 'AI 2026', 'AI 2027', 'AI 2028', 'AI 2029', 'AI 2030'];

export default function UltimateContentDiscoveryWidget2026() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContent, setFilteredContent] = useState(contentItems);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay
    const timer = setTimeout(() => {
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
      
      setFilteredContent(filtered);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [selectedCategory, searchTerm]);

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'BREAKTHROUGH':
        return 'bg-red-500/20 border-red-500/30 text-red-400';
      case 'REVOLUTIONARY':
        return 'bg-purple-500/20 border-purple-500/30 text-purple-400';
      case 'FUTURE':
        return 'bg-blue-500/20 border-blue-500/30 text-blue-400';
      case 'SINGULARITY':
        return 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400';
      case 'TRANSCENDENT':
        return 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400';
      default:
        return 'bg-gray-500/20 border-gray-500/30 text-gray-400';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">
              🔍 ULTIMATE CONTENT DISCOVERY
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Discover Revolutionary AI Content
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of breakthrough AI content, case studies, and revolutionary technologies.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search revolutionary content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
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
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContent.map((item) => (
              <div
                key={item.id}
                className={`group relative bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105 ${
                  item.featured ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {item.featured && (
                  <div className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    FEATURED
                  </div>
                )}
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-cyan-400 font-semibold">{item.category}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold border ${getBadgeColor(item.badge)}`}>
                      {item.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-green-400">{item.roi}</div>
                  <Link
                    href={item.href}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading && filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No Content Found</h3>
            <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            View All Content
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}