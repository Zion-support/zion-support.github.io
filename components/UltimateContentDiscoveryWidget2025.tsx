import React, { useState } from 'react';
import Link from 'next/link';

export default function UltimateContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🚀', color: 'from-purple-500 to-pink-500' },
    { id: 'ai-2025', name: 'AI 2025', icon: '🧠', color: 'from-blue-500 to-cyan-500' },
    { id: 'ai-2026', name: 'AI 2026', icon: '⚛️', color: 'from-indigo-500 to-purple-500' },
    { id: 'case-studies', name: 'Case Studies', icon: '🏆', color: 'from-green-500 to-emerald-500' },
    { id: 'resources', name: 'Resources', icon: '📚', color: 'from-orange-500 to-red-500' },
    { id: 'webinars', name: 'Webinars', icon: '🔥', color: 'from-pink-500 to-rose-500' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Announcement',
      description: 'Revolutionary technology delivering 5,000% ROI through synthetic intelligence and quantum computing fusion.',
      category: 'ai-2025',
      type: 'breakthrough',
      roi: '5,000%',
      link: '/ai-2025-ultimate-breakthrough-announcement',
      featured: true
    },
    {
      id: 2,
      title: 'AI 2026 Quantum-Neural Fusion Breakthrough',
      description: 'The world\'s first quantum-neural fusion AI system delivering 15,000% ROI through consciousness integration.',
      category: 'ai-2026',
      type: 'breakthrough',
      roi: '15,000%',
      link: '/ai-2026-quantum-neural-fusion-breakthrough',
      featured: true
    },
    {
      id: 3,
      title: 'Global Enterprise Transformation Success',
      description: 'Fortune 500 company achieves 1,200% ROI through AI 2025 implementation across 50+ countries.',
      category: 'case-studies',
      type: 'success-story',
      roi: '1,200%',
      link: '/case-studies/ai-2025-global-enterprise-transformation-breakthrough',
      featured: true
    },
    {
      id: 4,
      title: 'AI 2025 Implementation Master Guide',
      description: 'Complete implementation guide with 47 resources for deploying AI 2025 across your organization.',
      category: 'resources',
      type: 'guide',
      roi: 'N/A',
      link: '/resources/ai-2025-ultimate-implementation-guide',
      featured: false
    },
    {
      id: 5,
      title: 'Revolutionary Breakthroughs Webinar Series',
      description: 'Live webinars showcasing the latest AI breakthroughs and implementation strategies.',
      category: 'webinars',
      type: 'webinar',
      roi: 'N/A',
      link: '/webinars/ai-2025-revolutionary-breakthroughs',
      featured: false
    },
    {
      id: 6,
      title: 'AI 2025 ROI Calculator',
      description: 'Calculate your potential ROI with AI 2025 implementation using our advanced calculator.',
      category: 'resources',
      type: 'tool',
      roi: 'N/A',
      link: '/tools/ai-2025-roi-calculator',
      featured: false
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'breakthrough': return 'from-red-500 to-pink-500';
      case 'success-story': return 'from-green-500 to-emerald-500';
      case 'guide': return 'from-blue-500 to-cyan-500';
      case 'webinar': return 'from-purple-500 to-pink-500';
      case 'tool': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'breakthrough': return '🚀';
      case 'success-story': return '🏆';
      case 'guide': return '📚';
      case 'webinar': return '🔥';
      case 'tool': return '🛠️';
      default: return '📄';
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white p-8 rounded-2xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Ultimate Content Discovery
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Explore our revolutionary AI content library and discover breakthrough technologies
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for AI breakthroughs, case studies, resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {contentCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === category.id
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => (
          <div
            key={item.id}
            className={`bg-gradient-to-br from-slate-800/50 to-blue-800/50 p-6 rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 ${
              item.featured ? 'ring-2 ring-cyan-500/50' : ''
            }`}
          >
            {/* Type Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${getTypeColor(item.type)} text-white text-sm font-semibold`}>
                <span className="mr-1">{getTypeIcon(item.type)}</span>
                {item.type.replace('-', ' ').toUpperCase()}
              </div>
              {item.featured && (
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-semibold">
                  ⭐ FEATURED
                </div>
              )}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 text-white hover:text-cyan-400 transition-colors">
              <Link href={item.link}>
                {item.title}
              </Link>
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {item.description}
            </p>

            {/* ROI Badge */}
            {item.roi !== 'N/A' && (
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold mb-4">
                📈 {item.roi} ROI
              </div>
            )}

            {/* CTA Button */}
            <Link
              href={item.link}
              className={`inline-flex items-center px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                item.featured
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                  : 'bg-gradient-to-r from-slate-600 to-slate-700 text-white hover:from-slate-500 hover:to-slate-600'
              }`}
            >
              {item.type === 'webinar' ? 'Watch Now' : 
               item.type === 'tool' ? 'Use Tool' : 
               item.type === 'guide' ? 'Read Guide' : 'Learn More'}
              <span className="ml-2">→</span>
            </Link>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold mb-4 text-gray-300">No content found</h3>
          <p className="text-gray-400 mb-6">Try adjusting your search terms or category filters</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Footer CTA */}
      <div className="text-center mt-12 pt-8 border-t border-white/20">
        <p className="text-gray-300 mb-6">
          Can't find what you're looking for? Let us help you discover the perfect AI solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Personalized Recommendations
          </Link>
          <Link
            href="/resources"
            className="px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white font-bold text-lg rounded-lg hover:from-slate-500 hover:to-slate-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Browse All Resources
          </Link>
        </div>
      </div>
    </div>
  );
}