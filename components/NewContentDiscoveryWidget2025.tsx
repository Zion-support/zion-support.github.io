import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'showcase' | 'case-study' | 'guide' | 'prediction';
  roi?: string;
  featured?: boolean;
  href: string;
  icon: string;
  tags: string[];
}

const newContentItems: ContentItem[] = [
  {
    id: 'ultimate-breakthrough',
    title: 'AI 2025 Ultimate Breakthrough Revolution',
    description: 'Experience the most revolutionary AI breakthroughs of 2025 with unprecedented ROI ranging from 2000% to 50,000%.',
    category: 'AI 2025',
    type: 'showcase',
    roi: '5000%',
    featured: true,
    href: '/ai-2025-ultimate-breakthrough-revolution',
    icon: '🚀',
    tags: ['BREAKTHROUGH', 'REVOLUTIONARY', 'ULTIMATE']
  },
  {
    id: 'future-predictions',
    title: 'AI 2026-2030 Future Predictions Showcase',
    description: 'Revolutionary AI predictions with quantum consciousness, neural interfaces, and transcendent systems.',
    category: 'Future AI',
    type: 'prediction',
    roi: '∞',
    featured: true,
    href: '/ai-2026-2030-future-predictions-showcase',
    icon: '🔮',
    tags: ['FUTURE', 'QUANTUM', 'TRANSCENDENT']
  },
  {
    id: 'quantum-computing',
    title: 'Advanced Quantum Computing Solutions',
    description: 'Revolutionary quantum solutions with neural fusion, consciousness algorithms, and infinite scalability.',
    category: 'Quantum AI',
    type: 'showcase',
    roi: '15,000%',
    featured: true,
    href: '/quantum-computing-solutions-advanced',
    icon: '⚛️',
    tags: ['QUANTUM', 'CONSCIOUSNESS', 'ADVANCED']
  },
  {
    id: 'quantum-neural-fusion',
    title: 'Quantum-Neural Fusion Success',
    description: 'Global manufacturing company achieved 15,000% ROI through quantum-neural fusion implementation.',
    category: 'Case Studies',
    type: 'case-study',
    roi: '15,000%',
    href: '/case-studies/quantum-neural-fusion-success',
    icon: '🏆',
    tags: ['SUCCESS', 'QUANTUM', 'FUSION']
  },
  {
    id: 'consciousness-breakthrough',
    title: 'Quantum Consciousness Breakthrough',
    description: 'Revolutionary quantum consciousness system enabling AI to achieve true understanding and emotional intelligence.',
    category: 'Case Studies',
    type: 'case-study',
    roi: '∞',
    href: '/case-studies/quantum-consciousness-breakthrough',
    icon: '🧠',
    tags: ['CONSCIOUSNESS', 'BREAKTHROUGH', 'INFINITE']
  },
  {
    id: 'implementation-guide',
    title: 'Quantum Implementation Guide',
    description: 'Complete step-by-step guide to implementing quantum computing solutions with guaranteed results.',
    category: 'Resources',
    type: 'guide',
    href: '/resources/quantum-implementation-guide',
    icon: '📚',
    tags: ['GUIDE', 'IMPLEMENTATION', 'QUANTUM']
  }
];

const categories = ['All', 'AI 2025', 'Future AI', 'Quantum AI', 'Case Studies', 'Resources'];

export default function NewContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContent = newContentItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'showcase': return 'from-purple-500 to-pink-500';
      case 'case-study': return 'from-green-500 to-emerald-500';
      case 'guide': return 'from-blue-500 to-cyan-500';
      case 'prediction': return 'from-indigo-500 to-purple-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'showcase': return 'SHOWCASE';
      case 'case-study': return 'CASE STUDY';
      case 'guide': return 'GUIDE';
      case 'prediction': return 'PREDICTION';
      default: return 'CONTENT';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold mb-4 animate-pulse">
            🔍 NEW CONTENT DISCOVERY
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Discover Revolutionary New Content
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest AI breakthroughs, quantum computing solutions, and future predictions with advanced filtering and search.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search content, tags, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters Display */}
          <div className="flex flex-wrap gap-2">
            {selectedCategory !== 'All' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">
                Category: {selectedCategory}
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            )}
            {searchTerm && (
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm">
                Search: "{searchTerm}"
                <button
                  onClick={() => setSearchTerm('')}
                  className="ml-2 text-purple-600 hover:text-purple-800"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="relative p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getTypeColor(item.type)}`}>
                        {getTypeLabel(item.type)}
                      </span>
                      {item.featured && (
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                          FEATURED
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* ROI Badge */}
                  {item.roi && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 mb-4">
                      <span className="text-green-800 font-bold text-sm">{item.roi} ROI</span>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">
                        +{item.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.category}</span>
                    <span className="text-blue-600 font-semibold group-hover:underline">
                      {item.type === 'case-study' ? 'View Case Study' :
                       item.type === 'guide' ? 'Get Guide' :
                       item.type === 'prediction' ? 'Explore Future' :
                       'Explore Showcase'} →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search terms or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Results Summary */}
        {filteredContent.length > 0 && (
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Showing {filteredContent.length} of {newContentItems.length} content items
            </p>
          </div>
        )}
      </div>
    </div>
  );
}