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
  featured: boolean;
}

const InteractiveContentDiscoveryWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);

  const categories = [
    { id: 'all', name: 'All Content', icon: '📚' },
    { id: 'ai-2025', name: 'AI 2025', icon: '🚀' },
    { id: 'ai-2026', name: 'AI 2026', icon: '⚛️' },
    { id: 'ai-2035', name: 'AI 2035+', icon: '🌌' },
    { id: 'case-studies', name: 'Case Studies', icon: '🏆' },
    { id: 'breakthroughs', name: 'Breakthroughs', icon: '💡' }
  ];

  useEffect(() => {
    // Simulate content loading
    const mockContent: ContentItem[] = [
      {
        id: '1',
        title: 'AI 2025 Ultimate Breakthrough Success',
        description: '5000% ROI Case Study - Revolutionary AI Implementation',
        link: '/case-studies/ai-2025-ultimate-breakthrough-success',
        category: 'ai-2025',
        roi: '5000%',
        badge: 'BREAKTHROUGH',
        color: 'from-red-500 to-pink-500',
        icon: '🚀',
        featured: true
      },
      {
        id: '2',
        title: 'AI 2026 Quantum-Neural Fusion',
        description: '15,000% ROI - Revolutionary Quantum Computing Breakthrough',
        link: '/blog/ai-2026-quantum-neural-fusion-breakthrough',
        category: 'ai-2026',
        roi: '15,000%',
        badge: 'REVOLUTIONARY',
        color: 'from-purple-500 to-blue-500',
        icon: '⚛️',
        featured: true
      },
      {
        id: '3',
        title: 'AI 2035 Matter Creation',
        description: 'Infinite ROI - Transcendent Consciousness Breakthrough',
        link: '/blog/ai-2035-matter-creation',
        category: 'ai-2035',
        roi: '∞',
        badge: 'TRANSCENDENT',
        color: 'from-purple-500 to-pink-500',
        icon: '⚛️',
        featured: true
      },
      {
        id: '4',
        title: 'AI 2025 Global Transformation',
        description: '10,000% ROI - Fortune 500 Success Story',
        link: '/case-studies/ai-2025-global-transformation-breakthrough',
        category: 'case-studies',
        roi: '10,000%',
        badge: 'SUCCESS',
        color: 'from-green-500 to-emerald-500',
        icon: '🏆',
        featured: false
      },
      {
        id: '5',
        title: 'AI 2026 Neural Interface Revolution',
        description: '95% Patient Recovery - Healthcare Breakthrough',
        link: '/case-studies/ai-2026-neural-interface-healthcare-breakthrough',
        category: 'breakthroughs',
        roi: '95%',
        badge: 'BREAKTHROUGH',
        color: 'from-blue-500 to-cyan-500',
        icon: '🧠',
        featured: false
      },
      {
        id: '6',
        title: 'AI 2035 Consciousness Integration',
        description: 'Infinite ROI - Universal Peace Algorithm',
        link: '/blog/ai-2035-universal-peace',
        category: 'ai-2035',
        roi: '∞',
        badge: 'TRANSCENDENT',
        color: 'from-indigo-500 to-purple-500',
        icon: '🌍',
        featured: false
      }
    ];
    setContentItems(mockContent);
  }, []);

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredContent = contentItems.filter(item => item.featured);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🔍</span>
            <h3 className="text-lg font-bold">Interactive Content Discovery</h3>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <svg className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Featured Content Preview */}
      <div className="p-4 border-b border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">🌟 Featured Breakthroughs</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {featuredContent.slice(0, 3).map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group block p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-lg">{item.icon}</span>
                <span className="text-xs font-semibold text-gray-600">{item.badge}</span>
              </div>
              <h5 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                {item.title}
              </h5>
              <p className="text-xs text-gray-600 mt-1 line-clamp-2">{item.description}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs font-bold text-green-600">{item.roi} ROI</span>
                <span className="text-xs text-blue-600 group-hover:text-blue-800">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Expandable Content */}
      {isOpen && (
        <div className="p-4">
          {/* Search and Filter */}
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex space-x-2 overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredContent.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="group block p-4 border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-300 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <span className={`inline-block px-2 py-1 text-xs font-bold text-white rounded bg-gradient-to-r ${item.color}`}>
                        {item.badge}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-green-600">{item.roi} ROI</span>
                </div>
                
                <h5 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h5>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 capitalize">{item.category.replace('-', ' ')}</span>
                  <span className="text-xs text-blue-600 group-hover:text-blue-800 font-medium">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filteredContent.length === 0 && (
            <div className="text-center py-8">
              <div className="text-4xl mb-2">🔍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No content found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InteractiveContentDiscoveryWidget;