import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  badge: string;
  badgeColor: string;
  icon: string;
  roi?: string;
  tags: string[];
  featured: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-2025-breakthrough',
    title: 'AI 2025 Ultimate Breakthrough Revolution',
    description: 'Revolutionary AI breakthrough delivering 5,000% ROI with autonomous operations and quantum-enhanced intelligence.',
    href: '/ai-2025-ultimate-breakthrough-revolution',
    category: 'AI 2025',
    badge: 'BREAKTHROUGH',
    badgeColor: 'from-red-500 to-pink-500',
    icon: '🚀',
    roi: '5,000% ROI',
    tags: ['AI', 'Breakthrough', 'ROI', 'Revolution', '2025'],
    featured: true
  },
  {
    id: 'quantum-2026',
    title: 'Quantum Computing Solutions 2026',
    description: 'Revolutionary quantum computing solutions with error-corrected quantum computers and quantum supremacy.',
    href: '/quantum-computing-solutions-2026',
    category: 'Quantum Computing',
    badge: 'REVOLUTIONARY',
    badgeColor: 'from-cyan-500 to-blue-500',
    icon: '⚛️',
    roi: '15,000% ROI',
    tags: ['Quantum', 'Computing', 'Breakthrough', '2026', 'ROI'],
    featured: true
  },
  {
    id: 'ai-2025-success',
    title: 'AI 2025 Ultimate Breakthrough Success',
    description: 'Real success story: Fortune 500 company achieves 5,000% ROI in just 12 months.',
    href: '/case-studies/ai-2025-ultimate-breakthrough-success',
    category: 'Case Studies',
    badge: 'SUCCESS STORY',
    badgeColor: 'from-green-500 to-emerald-500',
    icon: '🏆',
    roi: '5,000% ROI',
    tags: ['Case Study', 'Success', 'ROI', 'Fortune 500', 'AI'],
    featured: true
  },
  {
    id: 'ai-2026-predictions',
    title: 'AI 2026-2030 Future Predictions',
    description: 'Revolutionary predictions for AI development from 2026 to 2030 with breakthrough insights.',
    href: '/ai-2026-2030-future-predictions-breakthrough',
    category: 'AI 2026-2030',
    badge: 'FUTURE',
    badgeColor: 'from-purple-500 to-pink-500',
    icon: '🔮',
    roi: '25,000% ROI',
    tags: ['Predictions', 'Future', 'AI', '2026-2030', 'Breakthrough'],
    featured: false
  },
  {
    id: 'automation-2025',
    title: 'Advanced Automation Solutions 2025',
    description: 'Cutting-edge automation solutions delivering unprecedented efficiency and cost savings.',
    href: '/advanced-automation-solutions-2025',
    category: 'Automation',
    badge: 'NEW',
    badgeColor: 'from-orange-500 to-red-500',
    icon: '🤖',
    roi: '3,000% ROI',
    tags: ['Automation', 'Solutions', '2025', 'Efficiency', 'ROI'],
    featured: false
  },
  {
    id: 'neural-interface-2026',
    title: 'Neural Interface Revolution 2026',
    description: 'Revolutionary neural interface technology enabling direct brain-computer communication.',
    href: '/neural-interface-revolution-2026',
    category: 'Neural Interface',
    badge: 'REVOLUTIONARY',
    badgeColor: 'from-indigo-500 to-purple-500',
    icon: '🧠',
    roi: '10,000% ROI',
    tags: ['Neural Interface', 'Revolution', '2026', 'Brain-Computer', 'ROI'],
    featured: false
  },
  {
    id: 'ai-2028-predictions',
    title: 'AI 2028 Future Predictions',
    description: 'Revolutionary AI predictions for 2028 with breakthrough technology insights.',
    href: '/blog/ai-2028-future-predictions-breakthrough',
    category: 'AI 2028',
    badge: 'BREAKTHROUGH',
    badgeColor: 'from-violet-500 to-purple-500',
    icon: '🔮',
    roi: '8,000% ROI',
    tags: ['Predictions', 'AI', '2028', 'Breakthrough', 'Future'],
    featured: false
  },
  {
    id: 'ai-2029-singularity',
    title: 'AI 2029 Singularity Breakthrough',
    description: 'Revolutionary AI singularity breakthrough with transcendent intelligence capabilities.',
    href: '/blog/ai-2029-singularity-breakthrough',
    category: 'AI 2029',
    badge: 'SINGULARITY',
    badgeColor: 'from-rose-500 to-pink-500',
    icon: '🌌',
    roi: '∞ ROI',
    tags: ['Singularity', 'AI', '2029', 'Transcendent', 'Breakthrough'],
    featured: false
  }
];

const categories = ['All', 'AI 2025', 'AI 2026-2030', 'Quantum Computing', 'Case Studies', 'Automation', 'Neural Interface', 'AI 2028', 'AI 2029'];

export default function InteractiveContentDiscovery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>(contentItems);
  const [sortBy, setSortBy] = useState<'featured' | 'roi' | 'title'>('featured');

  useEffect(() => {
    let filtered = contentItems;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort content
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          return b.featured ? 1 : -1;
        case 'roi':
          const aRoi = a.roi ? parseInt(a.roi.replace(/[^\d]/g, '')) : 0;
          const bRoi = b.roi ? parseInt(b.roi.replace(/[^\d]/g, '')) : 0;
          return bRoi - aRoi;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    setFilteredContent(filtered);
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover revolutionary AI content, breakthrough technologies, and success stories with our intelligent content discovery system.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search content, tags, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-black'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex justify-center">
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'featured' | 'roi' | 'title')}
                className="bg-gray-800/50 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="featured">Featured</option>
                <option value="roi">ROI</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-600/30 hover:border-cyan-500/60 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="flex flex-col items-end space-y-1">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${item.badgeColor} text-white`}>
                      {item.badge}
                    </span>
                    {item.roi && (
                      <span className="text-yellow-400 text-sm font-bold">
                        {item.roi}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Category */}
                <div className="text-sm text-cyan-400 font-semibold">
                  {item.category}
                </div>

                {/* Arrow */}
                <div className="mt-4 text-cyan-400 group-hover:text-white transition-colors duration-300">
                  Explore Now →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-300 mb-2">No content found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* View All Content CTA */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold text-lg rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
          >
            View All Revolutionary Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}