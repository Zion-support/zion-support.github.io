import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Star, TrendingUp, Clock, ArrowRight, Brain, Zap, Globe, Rocket, Shield, Heart } from 'lucide-react';

export default function InteractiveContentDiscoveryWidget2026() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');

  const categories = [
    { id: 'all', name: 'All Content', icon: Globe },
    { id: 'ai', name: 'AI Innovation', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Zap },
    { id: 'neural', name: 'Neural Interface', icon: Heart },
    { id: 'autonomous', name: 'Autonomous Systems', icon: Rocket },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
  ];

  const contentItems = [
    {
      id: 1,
      title: 'AI Innovation Showcase 2025-2026',
      description: 'Revolutionary AI breakthroughs and future technologies',
      category: 'ai',
      trending: true,
      featured: true,
      url: '/ai-innovation-showcase-2025-2026',
      tags: ['AI', 'Innovation', '2026', 'Breakthrough'],
      readTime: '8 min read',
      icon: Brain,
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 2,
      title: 'Quantum Computing Solutions 2026 Ultimate',
      description: '1000+ qubit processors and quantum applications',
      category: 'quantum',
      trending: true,
      featured: true,
      url: '/quantum-computing-solutions-2026-ultimate',
      tags: ['Quantum', 'Computing', '2026', 'Ultimate'],
      readTime: '12 min read',
      icon: Zap,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 3,
      title: 'Neural Interface Revolution 2026',
      description: 'Brain-computer interfaces and cognitive enhancement',
      category: 'neural',
      trending: true,
      featured: true,
      url: '/neural-interface-revolution-2026',
      tags: ['Neural', 'Interface', 'BCI', '2026'],
      readTime: '10 min read',
      icon: Heart,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'Autonomous Systems 2025',
      description: 'Self-driving vehicles and smart city management',
      category: 'autonomous',
      trending: false,
      featured: true,
      url: '/autonomous-systems-2025',
      tags: ['Autonomous', 'Systems', '2025', 'AI'],
      readTime: '9 min read',
      icon: Rocket,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 5,
      title: 'AI Cybersecurity 2025',
      description: 'Advanced AI-powered security systems',
      category: 'security',
      trending: false,
      featured: false,
      url: '/ai-cybersecurity-2025',
      tags: ['Cybersecurity', 'AI', 'Security', '2025'],
      readTime: '7 min read',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 6,
      title: 'Quantum Neural Fusion 2026',
      description: 'Hybrid quantum-neural computing systems',
      category: 'quantum',
      trending: true,
      featured: false,
      url: '/quantum-neural-fusion-2026',
      tags: ['Quantum', 'Neural', 'Fusion', '2026'],
      readTime: '15 min read',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'trending':
        return b.trending - a.trending;
      case 'featured':
        return b.featured - a.featured;
      case 'alphabetical':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-xl p-6 border border-purple-500/20 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white flex items-center">
          <Search className="h-6 w-6 text-purple-400 mr-3" />
          Content Discovery
        </h3>
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-green-400" />
          <span className="text-sm text-gray-400">Live Updates</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-6">
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search content, tags, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Options */}
          <div className="flex items-center space-x-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            >
              <option value="trending">Trending</option>
              <option value="featured">Featured</option>
              <option value="alphabetical">A-Z</option>
            </select>
          </div>
        </div>

        {/* Active Filters Display */}
        <div className="flex flex-wrap gap-2">
          {searchTerm && (
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
              Search: "{searchTerm}"
            </span>
          )}
          {selectedCategory !== 'all' && (
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
              Category: {categories.find(c => c.id === selectedCategory)?.name}
            </span>
          )}
          <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
            Sort: {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}
          </span>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedContent.map((item) => {
          const IconComponent = item.icon;
          return (
            <Link
              key={item.id}
              href={item.url}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-gradient-to-r ${item.color} rounded-lg`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  {item.trending && (
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                      <TrendingUp className="h-3 w-3 inline mr-1" />
                      Trending
                    </span>
                  )}
                  {item.featured && (
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  )}
                </div>
              </div>

              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {item.title}
              </h4>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {item.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  {item.readTime}
                </div>
                <div className="flex items-center text-purple-400 text-sm font-semibold group-hover:text-purple-300">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Results Summary */}
      <div className="mt-6 pt-4 border-t border-slate-700/50">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>
            Showing {sortedContent.length} of {contentItems.length} content items
          </span>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
              {contentItems.filter(item => item.trending).length} Trending
            </span>
            <span className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              {contentItems.filter(item => item.featured).length} Featured
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}