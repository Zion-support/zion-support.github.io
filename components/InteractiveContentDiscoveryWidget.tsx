import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  roi: string;
  link: string;
  tags: string[];
  featured: boolean;
}

export default function InteractiveContentDiscoveryWidget() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-2025-breakthrough',
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI technologies delivering 5,000% ROI through quantum computing and neural interfaces.',
      category: 'AI 2025',
      roi: '5,000%',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      tags: ['Breakthrough', 'Revolution', 'Quantum', 'Neural'],
      featured: true
    },
    {
      id: 'ai-2026-2030-predictions',
      title: 'AI 2026-2030 Future Predictions',
      description: 'Revolutionary predictions for quantum consciousness and dimensional AI systems.',
      category: 'Future Predictions',
      roi: '∞',
      link: '/ai-2026-2030-future-predictions-breakthrough',
      tags: ['Predictions', 'Quantum Consciousness', 'Future', 'Revolutionary'],
      featured: true
    },
    {
      id: 'quantum-computing-2025',
      title: 'Quantum Computing Solutions 2025',
      description: 'Revolutionary quantum computing delivering 15,000% ROI through quantum supremacy.',
      category: 'Quantum Computing',
      roi: '15,000%',
      link: '/quantum-computing-solutions-2025',
      tags: ['Quantum', 'Computing', 'Supremacy', 'Breakthrough'],
      featured: true
    },
    {
      id: 'global-transformation-case-study',
      title: 'Global Transformation Success Story',
      description: 'Fortune 500 enterprise achieved 10,000% ROI through AI breakthrough implementation.',
      category: 'Case Studies',
      roi: '10,000%',
      link: '/case-studies/ai-2025-global-transformation-breakthrough',
      tags: ['Case Study', 'Success', 'Fortune 500', 'Transformation'],
      featured: true
    },
    {
      id: 'neural-interface-revolution',
      title: 'Neural Interface Revolution 2026',
      description: 'Direct brain-computer interfaces enabling 99.7% accuracy in decision-making.',
      category: 'AI 2026',
      roi: '99.7%',
      link: '/neural-interface-revolution-2026',
      tags: ['Neural', 'Interface', 'Brain-Computer', 'Accuracy'],
      featured: false
    },
    {
      id: 'quantum-ai-fusion',
      title: 'Quantum-AI Fusion Breakthrough',
      description: 'Revolutionary integration of quantum computing with AI delivering exponential improvements.',
      category: 'Quantum Computing',
      roi: 'Exponential',
      link: '/quantum-ai-fusion-breakthrough',
      tags: ['Quantum', 'AI', 'Fusion', 'Exponential'],
      featured: false
    },
    {
      id: 'autonomous-systems-2025',
      title: 'Autonomous Decision Systems 2025',
      description: 'Self-evolving AI systems making complex business decisions with 10,000x faster processing.',
      category: 'AI 2025',
      roi: '10,000x',
      link: '/autonomous-systems-2025',
      tags: ['Autonomous', 'Decision', 'Self-Evolving', 'Fast'],
      featured: false
    },
    {
      id: 'synthetic-intelligence',
      title: 'Synthetic Intelligence Platform',
      description: 'Next-generation AI consciousness transcending traditional machine learning.',
      category: 'AI 2025',
      roi: '∞',
      link: '/synthetic-intelligence-platform',
      tags: ['Synthetic', 'Intelligence', 'Consciousness', 'Transcendent'],
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'AI 2025', name: 'AI 2025', count: contentItems.filter(item => item.category === 'AI 2025').length },
    { id: 'AI 2026', name: 'AI 2026', count: contentItems.filter(item => item.category === 'AI 2026').length },
    { id: 'Future Predictions', name: 'Future Predictions', count: contentItems.filter(item => item.category === 'Future Predictions').length },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: contentItems.filter(item => item.category === 'Quantum Computing').length },
    { id: 'Case Studies', name: 'Case Studies', count: contentItems.filter(item => item.category === 'Case Studies').length }
  ];

  useEffect(() => {
    let filtered = contentItems;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredContent(filtered);
  }, [selectedCategory, searchTerm]);

  const getROIColor = (roi: string) => {
    if (roi.includes('%')) {
      const value = parseInt(roi.replace('%', '').replace(',', ''));
      if (value >= 10000) return 'text-red-400';
      if (value >= 5000) return 'text-orange-400';
      if (value >= 1000) return 'text-yellow-400';
      return 'text-green-400';
    }
    if (roi === '∞') return 'text-purple-400';
    if (roi === 'Exponential') return 'text-blue-400';
    return 'text-gray-400';
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 border border-purple-500/30">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold mb-4 animate-pulse">
          🔍 CONTENT DISCOVERY
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Discover Revolutionary Content
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Explore our comprehensive library of AI breakthrough content, case studies, and future predictions.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search content, tags, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Expand/Collapse Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
          >
            {isExpanded ? 'Show Less' : 'Show All'}
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.slice(0, isExpanded ? filteredContent.length : 6).map((item) => (
          <div
            key={item.id}
            className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 ${
              item.featured ? 'ring-2 ring-yellow-500/50' : ''
            }`}
          >
            {item.featured && (
              <div className="inline-flex items-center px-2 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold mb-3">
                ⭐ Featured
              </div>
            )}
            
            <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
              {item.title}
            </h3>
            
            <p className="text-gray-300 text-sm mb-4 line-clamp-3">
              {item.description}
            </p>

            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                {item.category}
              </span>
              <span className={`text-lg font-bold ${getROIColor(item.roi)}`}>
                {item.roi}
              </span>
            </div>

            <div className="flex flex-wrap gap-1 mb-4">
              {item.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={item.link}
              className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
            >
              Explore Content
            </Link>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {!isExpanded && filteredContent.length > 6 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setIsExpanded(true)}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
          >
            Show {filteredContent.length - 6} More Content
          </button>
        </div>
      )}

      {/* No Results */}
      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-white mb-2">No Content Found</h3>
          <p className="text-gray-300 mb-4">
            Try adjusting your search terms or category filters.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}