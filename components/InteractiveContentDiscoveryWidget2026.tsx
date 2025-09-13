import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  url: string;
  category: string;
  roi: string;
  status: string;
  description: string;
  tags: string[];
}

export default function InteractiveContentDiscoveryWidget2026() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      url: '/ai-2025-ultimate-breakthrough-revolution',
      category: 'breakthroughs',
      roi: '5,000%',
      status: 'BREAKTHROUGH',
      description: 'The most revolutionary AI breakthrough in history with guaranteed 5,000% ROI.',
      tags: ['AI 2025', 'Breakthrough', 'ROI', 'Revolution']
    },
    {
      id: '2',
      title: 'AI 2026 Quantum-Neural Fusion',
      url: '/ai-2026-quantum-neural-fusion-breakthrough',
      category: 'quantum',
      roi: '15,000%',
      status: 'QUANTUM',
      description: 'Revolutionary quantum computing integration with advanced neural networks.',
      tags: ['AI 2026', 'Quantum', 'Neural', 'Fusion']
    },
    {
      id: '3',
      title: 'Synthetic Intelligence Revolution',
      url: '/blog/ai-2025-synthetic-intelligence-revolution',
      category: 'breakthroughs',
      roi: '50,000%',
      status: 'REVOLUTIONARY',
      description: 'Next-generation synthetic intelligence transforming business operations.',
      tags: ['Synthetic', 'Intelligence', 'Revolution', 'AI 2025']
    },
    {
      id: '4',
      title: 'Global Transformation Success',
      url: '/case-studies/ai-2025-global-transformation-breakthrough',
      category: 'case-studies',
      roi: '10,000%',
      status: 'SUCCESS',
      description: 'Real-world case study of global business transformation with AI.',
      tags: ['Case Study', 'Global', 'Transformation', 'Success']
    },
    {
      id: '5',
      title: 'Ultimate Implementation Guide',
      url: '/resources/ai-2025-ultimate-implementation-guide',
      category: 'resources',
      roi: 'ESSENTIAL',
      status: 'GUIDE',
      description: 'Comprehensive guide for implementing AI solutions in your business.',
      tags: ['Implementation', 'Guide', 'Essential', 'Resources']
    },
    {
      id: '6',
      title: 'AI 2030 Future Predictions',
      url: '/blog/ai-2030-future-predictions',
      category: 'future',
      roi: '100,000%',
      status: 'TRANSCENDENT',
      description: 'Revolutionary predictions for AI development through 2030.',
      tags: ['AI 2030', 'Future', 'Predictions', 'Transcendent']
    }
  ];

  const categories = [
    { value: 'all', label: 'All Content' },
    { value: 'breakthroughs', label: 'Breakthroughs' },
    { value: 'quantum', label: 'Quantum' },
    { value: 'case-studies', label: 'Case Studies' },
    { value: 'resources', label: 'Resources' },
    { value: 'future', label: 'Future Vision' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'BREAKTHROUGH': return 'bg-red-500';
      case 'REVOLUTIONARY': return 'bg-purple-500';
      case 'QUANTUM': return 'bg-cyan-500';
      case 'SUCCESS': return 'bg-emerald-500';
      case 'GUIDE': return 'bg-amber-500';
      case 'TRANSCENDENT': return 'bg-indigo-500';
      default: return 'bg-gray-500';
    }
  };

  useEffect(() => {
    setIsLoading(true);
    
    let filtered = contentItems;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setTimeout(() => {
      setFilteredContent(filtered);
      setIsLoading(false);
    }, 300);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the perfect AI content for your business needs. Search, filter, and explore our revolutionary content library.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search content, tags, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <div className="col-span-full flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : filteredContent.length > 0 ? (
            filteredContent.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                  <span className="text-sm font-bold text-yellow-400">
                    {item.roi}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 text-lg">
                No content found matching your criteria.
              </div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="mt-4 text-blue-400 hover:text-blue-300 font-semibold"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            href="/ultimate-content-showcase-2026"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}