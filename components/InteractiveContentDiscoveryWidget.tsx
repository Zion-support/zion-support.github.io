import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  roi: string;
  link: string;
  featured: boolean;
  tags: string[];
}

export default function InteractiveContentDiscoveryWidget() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI technology delivering 15,000% ROI through autonomous operations and quantum-neural fusion.',
      category: 'breakthrough',
      roi: '15,000%',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      featured: true,
      tags: ['revolutionary', 'breakthrough', 'roi', 'autonomous']
    },
    {
      id: '2',
      title: 'Global Transformation: 15,000% ROI Success',
      description: 'Fortune 500 company achieves unprecedented success with our revolutionary AI implementation.',
      category: 'case-study',
      roi: '15,000%',
      link: '/case-studies/ai-2025-global-transformation-15000-roi',
      featured: true,
      tags: ['success-story', 'fortune-500', 'transformation', 'roi']
    },
    {
      id: '3',
      title: 'Quantum-Neural Fusion Technology',
      description: '10,000x faster processing through revolutionary quantum-neural fusion breakthrough.',
      category: 'technology',
      roi: '10,000x',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      featured: false,
      tags: ['quantum', 'neural', 'fusion', 'speed']
    },
    {
      id: '4',
      title: 'Transcendent Intelligence Platform',
      description: '99.9% accuracy in decision-making through transcendent AI consciousness integration.',
      category: 'technology',
      roi: '99.9%',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      featured: false,
      tags: ['intelligence', 'consciousness', 'accuracy', 'transcendent']
    },
    {
      id: '5',
      title: 'Autonomous Operations Mastery',
      description: '24/7 fully autonomous business operations with 99.99% uptime and zero human intervention.',
      category: 'automation',
      roi: '99.99%',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      featured: false,
      tags: ['autonomous', 'operations', 'uptime', 'automation']
    },
    {
      id: '6',
      title: 'Predictive Analytics Revolution',
      description: '95% accuracy in predicting future trends and market movements for competitive advantage.',
      category: 'analytics',
      roi: '95%',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      featured: false,
      tags: ['predictive', 'analytics', 'trends', 'accuracy']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'breakthrough', name: 'Breakthroughs', count: contentItems.filter(item => item.category === 'breakthrough').length },
    { id: 'case-study', name: 'Success Stories', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'technology', name: 'Technology', count: contentItems.filter(item => item.category === 'technology').length },
    { id: 'automation', name: 'Automation', count: contentItems.filter(item => item.category === 'automation').length },
    { id: 'analytics', name: 'Analytics', count: contentItems.filter(item => item.category === 'analytics').length }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
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

    setFilteredContent(filtered);
  }, [selectedCategory, searchTerm]);

  const getCategoryColor = (category: string) => {
    const colors = {
      breakthrough: 'from-purple-600 to-pink-600',
      'case-study': 'from-green-600 to-blue-600',
      technology: 'from-blue-600 to-cyan-600',
      automation: 'from-orange-600 to-red-600',
      analytics: 'from-indigo-600 to-purple-600'
    };
    return colors[category as keyof typeof colors] || 'from-gray-600 to-gray-700';
  };

  const getROIColor = (roi: string) => {
    if (roi.includes('%') && parseInt(roi) >= 1000) return 'text-green-400';
    if (roi.includes('%') && parseInt(roi) >= 100) return 'text-blue-400';
    if (roi.includes('x')) return 'text-purple-400';
    return 'text-yellow-400';
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6">
            <span className="text-blue-400 font-semibold">🔍 INTERACTIVE CONTENT DISCOVERY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthroughs, success stories, and revolutionary technologies.
          </p>
        </div>

        {/* Search and Filter */}
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
                  className="w-full px-4 py-3 pl-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id} className="bg-gray-800">
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
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
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${getCategoryColor(item.category)}/20 rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-yellow-400/50' : ''
              }`}
            >
              {item.featured && (
                <div className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 mb-4">
                  <span className="text-yellow-400 text-xs font-semibold">⭐ FEATURED</span>
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{item.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <span className={`text-lg font-bold ${getROIColor(item.roi)}`}>
                  {item.roi} ROI
                </span>
                <span className="text-xs text-gray-400 capitalize">
                  {item.category.replace('-', ' ')}
                </span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {item.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300"
                  >
                    #{tag}
                  </span>
                ))}
                {item.tags.length > 3 && (
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                    +{item.tags.length - 3}
                  </span>
                )}
              </div>

              <Link
                href={item.link}
                className="block w-full text-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore Content →
              </Link>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-300">No Content Found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search terms or category filter.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 rounded-xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6">
              Join thousands of companies achieving unprecedented success with our revolutionary AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/ai-2025-ultimate-breakthrough-revolution"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}