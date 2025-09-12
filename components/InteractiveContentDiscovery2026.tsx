import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Filter, Star, TrendingUp, Clock, ArrowRight, Sparkles, Brain, Settings, Zap } from 'lucide-react';

const contentCategories = [
  {
    id: 'ai-2025',
    name: 'AI 2025 Breakthroughs',
    icon: Sparkles,
    color: 'from-red-500 to-pink-500',
    count: 15
  },
  {
    id: 'ai-2026',
    name: 'AI 2026 Quantum',
    icon: Brain,
    color: 'from-purple-500 to-blue-500',
    count: 12
  },
  {
    id: 'automation',
    name: 'Enterprise Automation',
    icon: Settings,
    color: 'from-blue-500 to-cyan-500',
    count: 8
  },
  {
    id: 'quantum',
    name: 'Quantum Computing',
    icon: Zap,
    color: 'from-green-500 to-teal-500',
    count: 6
  }
];

const featuredContent = [
  {
    title: 'AI 2025 Breakthrough Revolution',
    description: 'Revolutionary AI breakthroughs delivering 15,000% ROI',
    href: '/ai-2025-breakthrough-revolution',
    category: 'ai-2025',
    rating: 5,
    views: '2.5K',
    readTime: '8 min',
    featured: true
  },
  {
    title: 'AI 2026 Quantum Neural Fusion',
    description: 'Experience quantum-neural fusion with 99.9% accuracy',
    href: '/ai-2026-quantum-neural-fusion',
    category: 'ai-2026',
    rating: 5,
    views: '1.8K',
    readTime: '12 min',
    featured: true
  },
  {
    title: 'Enterprise Automation Mastery 2026',
    description: 'Master automation with 400% productivity increase',
    href: '/enterprise-automation-mastery-2026',
    category: 'automation',
    rating: 5,
    views: '3.2K',
    readTime: '10 min',
    featured: true
  },
  {
    title: 'Quantum Computing Solutions',
    description: 'Revolutionary quantum computing for enterprise',
    href: '/quantum-computing-solutions',
    category: 'quantum',
    rating: 4.8,
    views: '1.5K',
    readTime: '15 min',
    featured: false
  }
];

const trendingContent = [
  {
    title: 'AI 2025 Comprehensive Trends Analysis',
    description: 'Complete analysis of AI trends and predictions',
    href: '/blog/ai-2025-comprehensive-trends-analysis',
    category: 'ai-2025',
    trending: true
  },
  {
    title: 'Neural Interface Revolution 2026',
    description: 'Breakthrough in human-AI interaction',
    href: '/blog/ai-2026-neural-interface-revolution',
    category: 'ai-2026',
    trending: true
  },
  {
    title: 'Automation ROI Calculator 2026',
    description: 'Calculate your automation return on investment',
    href: '/tools/automation-roi-calculator-2026',
    category: 'automation',
    trending: true
  }
];

export default function InteractiveContentDiscovery2026() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredContent, setFilteredContent] = useState(featuredContent);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let filtered = featuredContent;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredContent(filtered);
  }, [searchQuery, selectedCategory]);

  const getCategoryInfo = (categoryId: string) => {
    return contentCategories.find(cat => cat.id === categoryId) || contentCategories[0];
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our comprehensive library of AI breakthroughs, automation solutions, and quantum computing innovations.
          </p>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, topics, or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All Content
              </button>
              {contentCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((content, index) => {
            const categoryInfo = getCategoryInfo(content.category);
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {content.featured && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 text-sm font-semibold text-center">
                    ⭐ FEATURED CONTENT
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${categoryInfo.color} text-white text-sm font-semibold`}>
                      <categoryInfo.icon className="w-4 h-4 mr-1" />
                      {categoryInfo.name}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {content.rating}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {content.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {content.description}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {content.views}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {content.readTime}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={content.href}
                    className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Explore Content
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trending Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-6 h-6 text-orange-500 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Trending Now</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingContent.map((content, index) => {
              const categoryInfo = getCategoryInfo(content.category);
              return (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${categoryInfo.color} text-white`}>
                    <categoryInfo.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {content.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {content.description}
                    </p>
                    <Link
                      href={content.href}
                      className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Content
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}