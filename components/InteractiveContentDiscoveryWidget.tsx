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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);

  const categories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'breakthrough', name: 'Breakthroughs', icon: '🚀' },
    { id: 'predictions', name: 'Predictions', icon: '🔮' },
    { id: 'case-studies', name: 'Case Studies', icon: '🏆' },
    { id: 'guides', name: 'Implementation', icon: '📚' }
  ];

  const allContent: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary synthetic intelligence delivering 5,000% ROI through quantum computing fusion',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      category: 'breakthrough',
      roi: '5,000%',
      badge: 'BREAKTHROUGH',
      color: 'from-red-500 to-pink-500',
      icon: '🚀'
    },
    {
      id: '2',
      title: 'AI 2026-2030 Future Predictions',
      description: 'Revolutionary breakthrough predictions featuring quantum-neural fusion and consciousness AI',
      link: '/ai-2026-2030-future-predictions-breakthrough',
      category: 'predictions',
      roi: '∞',
      badge: 'REVOLUTIONARY',
      color: 'from-cyan-500 to-purple-500',
      icon: '🔮'
    },
    {
      id: '3',
      title: '10,000% ROI Success Story',
      description: 'Fortune 500 company achieves unprecedented transformation through AI breakthrough',
      link: '/case-studies/ai-2025-ultimate-transformation-success',
      category: 'case-studies',
      roi: '10,000%',
      badge: 'SUCCESS',
      color: 'from-green-500 to-emerald-500',
      icon: '🏆'
    },
    {
      id: '4',
      title: 'AI 2025 Implementation Guide',
      description: 'Complete guide to implementing revolutionary AI solutions in your business',
      link: '/resources/ai-2025-ultimate-implementation-guide',
      category: 'guides',
      roi: '2,500%',
      badge: 'ESSENTIAL',
      color: 'from-blue-500 to-indigo-500',
      icon: '📚'
    },
    {
      id: '5',
      title: 'Quantum Computing Solutions 2025',
      description: 'Breakthrough quantum computing integration delivering unprecedented processing power',
      link: '/quantum-computing-solutions-2025',
      category: 'breakthrough',
      roi: '8,000%',
      badge: 'BREAKTHROUGH',
      color: 'from-purple-500 to-pink-500',
      icon: '⚛️'
    },
    {
      id: '6',
      title: 'AI 2029 Singularity Predictions',
      description: 'Revolutionary predictions for AI singularity and transcendent intelligence',
      link: '/blog/ai-2029-singularity-breakthrough',
      category: 'predictions',
      roi: '∞',
      badge: 'FUTURE',
      color: 'from-indigo-500 to-purple-500',
      icon: '🌌'
    }
  ];

  useEffect(() => {
    let filtered = allContent;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setContentItems(filtered);
  }, [selectedCategory, searchTerm]);

  const filteredContent = contentItems;

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-40"
        aria-label="Open content discovery"
      >
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🔍</span>
          <span className="hidden sm:block font-semibold">Discover Content</span>
        </div>
      </button>

      {/* Widget Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-[80vh] overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-t-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Content Discovery</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close widget"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <div className="absolute right-3 top-2.5 text-gray-400">
                🔍
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-1">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Content List */}
          <div className="max-h-96 overflow-y-auto">
            {filteredContent.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <div className="text-4xl mb-2">🔍</div>
                <p>No content found matching your criteria</p>
              </div>
            ) : (
              <div className="p-4 space-y-3">
                {filteredContent.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    className="block p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{item.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-gray-900 truncate">{item.title}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color} text-white`}>
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 capitalize">{item.category}</span>
                          <span className="text-sm font-bold text-green-600">{item.roi} ROI</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <div className="text-center">
              <Link
                href="/content-showcase"
                className="text-purple-600 hover:text-purple-700 font-semibold text-sm"
                onClick={() => setIsOpen(false)}
              >
                View All Content →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}