import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  link: string;
  category: string;
  tags: string[];
  roi?: string;
  badge?: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

export default function InteractiveContentDiscoveryWidget() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-2025-breakthrough',
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Experience the most revolutionary AI breakthrough in history with 2,500-5,000% ROI',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      category: 'ai-2025',
      tags: ['AI', 'Breakthrough', 'Revolution', 'ROI'],
      roi: '2,500-5,000%',
      badge: 'BREAKTHROUGH',
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50',
      borderColor: 'border-red-200'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Solutions 2025',
      description: 'Achieve quantum supremacy with error-corrected quantum computers and quantum-AI fusion',
      link: '/quantum-computing-solutions',
      category: 'quantum',
      tags: ['Quantum', 'Computing', 'Supremacy', 'AI Fusion'],
      roi: '15,000%',
      badge: 'REVOLUTIONARY',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50',
      borderColor: 'border-indigo-200'
    },
    {
      id: 'automation-2026',
      title: 'Advanced Automation Solutions 2026-2030',
      description: 'Complete business autonomy with intelligent process automation and transcendent AI systems',
      link: '/advanced-automation-solutions-2026',
      category: 'automation',
      tags: ['Automation', 'Autonomous', 'Process', 'AI Systems'],
      roi: '8,500%',
      badge: 'FUTURE',
      color: 'from-emerald-500 to-cyan-500',
      bgColor: 'from-emerald-50 to-cyan-50',
      borderColor: 'border-emerald-200'
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Revolution 2026',
      description: 'Breakthrough neural interface technology with 95% patient recovery success rate',
      link: '/blog/ai-2026-neural-interface-revolution',
      category: 'ai-2026',
      tags: ['Neural', 'Interface', 'Healthcare', 'Breakthrough'],
      roi: '3,000%',
      badge: 'BREAKTHROUGH',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200'
    },
    {
      id: 'quantum-ai-fusion',
      title: 'Quantum-AI Fusion Breakthrough',
      description: 'Revolutionary fusion of quantum computing and AI delivering 15,000% ROI potential',
      link: '/blog/quantum-neural-fusion-2026',
      category: 'quantum',
      tags: ['Quantum', 'AI Fusion', 'Breakthrough', 'ROI'],
      roi: '15,000%',
      badge: 'REVOLUTIONARY',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-50 to-blue-50',
      borderColor: 'border-cyan-200'
    },
    {
      id: 'autonomous-manufacturing',
      title: 'Autonomous Manufacturing Revolution',
      description: '8,500% ROI manufacturing transformation with fully autonomous production systems',
      link: '/case-studies/ai-2026-autonomous-manufacturing-revolution',
      category: 'automation',
      tags: ['Manufacturing', 'Autonomous', 'Production', 'ROI'],
      roi: '8,500%',
      badge: 'SUCCESS',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      borderColor: 'border-orange-200'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'ai-2025', name: 'AI 2025', count: contentItems.filter(item => item.category === 'ai-2025').length },
    { id: 'ai-2026', name: 'AI 2026', count: contentItems.filter(item => item.category === 'ai-2026').length },
    { id: 'quantum', name: 'Quantum Computing', count: contentItems.filter(item => item.category === 'quantum').length },
    { id: 'automation', name: 'Automation', count: contentItems.filter(item => item.category === 'automation').length }
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

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Discover Revolutionary Content
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our comprehensive library of AI breakthroughs, quantum computing solutions, and automation technologies
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search Input */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search content, tags, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => (
          <div
            key={item.id}
            className={`bg-gradient-to-br ${item.bgColor} p-6 rounded-xl border ${item.borderColor} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
          >
            {/* Badge */}
            {item.badge && (
              <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-semibold mb-4`}>
                {item.badge}
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-4 text-sm">
              {item.description}
            </p>

            {/* ROI */}
            {item.roi && (
              <div className="text-2xl font-bold text-green-600 mb-4">
                {item.roi} ROI
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href={item.link}
              className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${item.color} text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-all duration-300`}
            >
              Explore Content
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
          <p className="text-gray-600">Try adjusting your search terms or category filters</p>
        </div>
      )}

      {/* View All Link */}
      <div className="text-center mt-8">
        <Link
          href="/content-showcase"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
        >
          View All Content
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}