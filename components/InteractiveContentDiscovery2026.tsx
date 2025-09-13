import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscovery2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'ai-2025', name: 'AI 2025', icon: '🚀' },
    { id: 'ai-2026', name: 'AI 2026', icon: '⚛️' },
    { id: 'ai-2035', name: 'AI 2035', icon: '🌌' },
    { id: 'quantum', name: 'Quantum', icon: '🔬' },
    { id: 'case-studies', name: 'Case Studies', icon: '📊' },
    { id: 'resources', name: 'Resources', icon: '📚' }
  ];

  const featuredContent = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Content Revolution',
      description: 'Revolutionary AI content that transforms businesses with 2,500-5,000% ROI',
      category: 'ai-2025',
      url: '/ai-2025-ultimate-content-revolution',
      icon: '🚀',
      roi: '2,500-5,000%',
      featured: true
    },
    {
      id: 2,
      title: 'AI 2026 Quantum Neural Fusion',
      description: 'Quantum-neural fusion technology delivering 15,000% ROI through transcendent intelligence',
      category: 'ai-2026',
      url: '/ai-2026-quantum-neural-fusion-revolutionary',
      icon: '⚛️',
      roi: '15,000%',
      featured: true
    },
    {
      id: 3,
      title: 'AI 2035 Singularity Breakthrough',
      description: 'Singularity breakthrough technology that transcends human limitations',
      category: 'ai-2035',
      url: '/ai-2035-singularity-breakthrough',
      icon: '🌌',
      roi: '∞',
      featured: true
    },
    {
      id: 4,
      title: 'Ultimate Content Showcase 2026',
      description: 'Comprehensive collection of revolutionary AI content and breakthrough technologies',
      category: 'resources',
      url: '/ultimate-content-showcase-2026',
      icon: '🌟',
      roi: 'N/A',
      featured: false
    }
  ];

  const filteredContent = featuredContent.filter(content => {
    const matchesCategory = selectedCategory === 'all' || content.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      content.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our AI-powered discovery system to find the perfect revolutionary content for your needs
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Content
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for revolutionary content..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {contentCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map(content => (
            <div key={content.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{content.icon}</span>
                  {content.featured && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      FEATURED
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {content.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-green-600">
                    {content.roi} ROI
                  </div>
                  <Link
                    href={content.url}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/ultimate-content-showcase-2026"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            View All Revolutionary Content
          </Link>
        </div>
      </div>
    </div>
  );
}