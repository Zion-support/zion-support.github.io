"use client";
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
  borderColor: string;
  roi?: string;
  featured?: boolean;
}

export default function EnhancedContentDiscoveryWidget() {
  const [searchTermsetSearchTerm] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [isExpandedsetIsExpanded] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-2025-breakthrough',
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI breakthrough delivering 5,000% ROI through advanced neural networks and quantum computing integration.',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      category: 'ai-2025',
      badge: 'BREAKTHROUGH',
      color: 'from-red-500 to-orange-500',
      bgColor: 'from-red-500/20 to-orange-500/20',
      borderColor: 'border-red-500/30',
      roi: '5,000%',
      featured: true
    },
    {
      id: 'quantum-2026',
      title: 'Quantum Computing 2026 Breakthrough',
      description: 'Revolutionary quantum computing solutions delivering 15,000% ROI through quantum supremacy and error-corrected quantum computers.',
      link: '/quantum-computing-2026-breakthrough',
      category: 'quantum',
      badge: 'REVOLUTIONARY',
      color: 'from-cyan-500 to-purple-500',
      bgColor: 'from-cyan-500/20 to-purple-500/20',
      borderColor: 'border-cyan-500/30',
      roi: '15,000%',
      featured: true
    },
    {
      id: 'ai-2026-2030-predictions',
      title: 'AI 2026-2030 Future Predictions',
      description: 'Comprehensive AI predictions for 2026-2030 featuring breakthrough technologies and revolutionary developments.',
      link: '/ai-2026-2030-future-predictions-breakthrough',
      category: 'predictions',
      badge: 'FUTURE',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      roi: '∞',
      featured: true
    },
    {
      id: 'neural-interface-2026',
      title: 'Neural Interface Revolution 2026',
      description: 'Direct brain-computer interfaces achieving 99.9% accuracy in thought-to-text conversion and seamless human-AI communication.',
      link: '/neural-interface-revolution-2026',
      category: 'ai-2026',
      badge: 'BREAKTHROUGH',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'from-indigo-500/20 to-blue-500/20',
      borderColor: 'border-indigo-500/30',
      roi: '10,000%'
    },
    {
      id: 'quantum-ai-fusion-2027',
      title: 'Quantum-AI Fusion 2027',
      description: 'Revolutionary integration of quantum computing with AI creating superintelligent systems with exponential processing capabilities.',
      link: '/quantum-ai-fusion-2027',
      category: 'quantum',
      badge: 'REVOLUTIONARY',
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-500/20 to-teal-500/20',
      borderColor: 'border-green-500/30',
      roi: '8,000%'
    },
    {
      id: 'autonomous-systems-2028',
      title: 'Autonomous Everything 2028',
      description: 'Fully autonomous systems managing entire industries with 99.99% reliability and zero human intervention required.',
      link: '/autonomous-systems-2028',
      category: 'automation',
      badge: 'AUTONOMOUS',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/30',
      roi: '20,000%'
    },
    {
      id: 'consciousness-ai-2029',
      title: 'Consciousness AI 2029',
      description: 'AI systems achieving true consciousness and self-awarenesscapable of creative thinking and emotional understanding.',
      link: '/consciousness-ai-2029',
      category: 'ai-2029',
      badge: 'CONSCIOUSNESS',
      color: 'from-pink-500 to-purple-500',
      bgColor: 'from-pink-500/20 to-purple-500/20',
      borderColor: 'border-pink-500/30',
      roi: '∞'
    },
    {
      id: 'transcendent-intelligence-2030',
      title: 'Transcendent Intelligence 2030',
      description: 'AI transcending human-level intelligence by orders of magnitudenabling solutions to global challenges.',
      link: '/transcendent-intelligence-2030',
      category: 'ai-2030',
      badge: 'TRANSCENDENT',
      color: 'from-violet-500 to-indigo-500',
      bgColor: 'from-violet-500/20 to-indigo-500/20',
      borderColor: 'border-violet-500/30',
      roi: '∞'
    }
  ];

  const categories = [
    { id: ''all', 'name: 'All 'Content', 'count: contentItems.length },
    { id: 'ai-2025'name: 'AI 2025'count: contentItems.filter(item => item.category === 'ai-2025').length },
    { id: 'ai-2026'name: 'AI 2026'count: contentItems.filter(item => item.category === 'ai-2026').length },
    { id: 'ai-2029'name: 'AI 2029'count: contentItems.filter(item => item.category === 'ai-2029').length },
    { id: 'ai-2030'name: 'AI 2030'count: contentItems.filter(item => item.category === 'ai-2030').length },
    { id: ''quantum', 'name: 'Quantum 'Computing', 'count: contentItems.filter(item => item.category === 'quantum').length },
    { id: ''predictions', 'name: 'Future 'Predictions', 'count: contentItems.filter(item => item.category === 'predictions').length },
    { id: ''automation', 'name: ''Automation', 'count: contentItems.filter(item => item.category === 'automation').length }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredContent = contentItems.filter(item => item.featured);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 mb-6">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wide">
              🔍 CONTENT DISCOVERY
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthrough contentquantum computing solutions
            and future predictions that will transform your business.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id} className="bg-gray-800 text-white">
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Content */}
        {selectedCategory === 'all' && searchTerm === ', ' && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">⭐ Featured Content</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredContent.map((item) => (
                <div
                  key={item.id}
                  className={`relative bg-gradient-to-br ${item.bgColor} rounded-2xl p-6 border ${item.borderColor} hover:border-opacity-50 transition-all duration-300 transform hover:scale-105 cursor-pointer group`}
                  onClick={() => window.location.href = item.link}
                >
                  {/* Badge */}
                  <div className="absolute -top-2 -right-2">
                    <span className={`bg-gradient-to-r ${item.color} text-white text-xs px-3 py-1 rounded-full font-bold`}>
                      {item.badge}
                    </span>
                  </div>
                  
                  {/* ROI Badge */}
                  {item.roi && (
                    <div className="absolute -top-2 -left-2">
                      <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                        {item.roi} ROI
                      </span>
                    </div>
                  )}
                  
                  {/* Content */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    
                    <Link
                      href={item.link}
                      className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.color} text-white font-semibold rounded-lg text-sm transition-all duration-300 hover:scale-105`}
                    >
                      Explore Now →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Content */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">
              {selectedCategory === 'all' ? 'All Content' : categories.find(c => c.id === selectedCategory)?.name}
              <span className="text-gray-400 text-lg ml-2">({filteredContent.length})</span>
            </h3>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              {isExpanded ? 'Show Less' : 'Show All'}
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(isExpanded ? filteredContent : filteredContent.slice(06)).map((item) => (
              <div
                key={item.id}
                className={`bg-gradient-to-br ${item.bgColor} rounded-xl p-6 border ${item.borderColor} hover:border-opacity-50 transition-all duration-300 transform hover:scale-105 cursor-pointer group`}
                onClick={() => window.location.href = item.link}
              >
                {/* Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`bg-gradient-to-r ${item.color} text-white text-xs px-3 py-1 rounded-full font-bold`}>
                    {item.badge}
                  </span>
                  {item.roi && (
                    <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                      {item.roi} ROI
                    </span>
                  )}
                </div>
                
                {/* Content */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <Link
                    href={item.link}
                    className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.color} text-white font-semibold rounded-lg text-sm transition-all duration-300 hover:scale-105`}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              'Can', 't Find What 'You', 're Looking For?
            </h3>
            <p className="text-gray-300 mb-6">
              Our AI-powered content recommendation system can help you discover 
              the perfect content for your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Personalized Recommendations
              </Link>
              <Link
                href="/content-showcase"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Browse All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}