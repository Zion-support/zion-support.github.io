'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Clock, 
  Users, 
  TrendingUp,
  ArrowRight,
  Play,
  BookOpen,
  Zap,
  Brain,
  Rocket,
  Globe,
  ChevronDown,
  X
} from 'lucide-react';
import Link from 'next/link';

const UltimateContentDiscoveryWidget2026 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('trending');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Content', icon: Grid, color: 'from-purple-500 to-pink-500' },
    { id: 'ai-innovations', name: 'AI Innovations', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'automation', name: 'Automation', icon: Zap, color: 'from-green-500 to-emerald-500' },
    { id: 'future-tech', name: 'Future Tech', icon: Rocket, color: 'from-orange-500 to-red-500' },
    { id: 'tutorials', name: 'Tutorials', icon: BookOpen, color: 'from-indigo-500 to-purple-500' },
    { id: 'case-studies', name: 'Case Studies', icon: TrendingUp, color: 'from-pink-500 to-rose-500' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'Neural Interface Revolution 2026',
      description: 'Breakthrough brain-computer interfaces enabling direct neural communication with AI systems',
      category: 'ai-innovations',
      type: 'Video',
      duration: '15 min',
      views: '2.3M',
      rating: 4.9,
      trending: true,
      thumbnail: '/api/placeholder/400/225',
      tags: ['AI', 'Neural Networks', 'Brain-Computer Interface', 'Revolutionary']
    },
    {
      id: 2,
      title: 'Quantum AI Fusion Platform',
      description: 'Revolutionary quantum computing integration with artificial intelligence for unprecedented power',
      category: 'future-tech',
      type: 'Article',
      duration: '8 min read',
      views: '1.8M',
      rating: 4.8,
      trending: true,
      thumbnail: '/api/placeholder/400/225',
      tags: ['Quantum Computing', 'AI', 'Fusion', 'Advanced']
    },
    {
      id: 3,
      title: 'Autonomous Business Operations',
      description: 'Complete business process automation with zero human intervention using advanced AI',
      category: 'automation',
      type: 'Case Study',
      duration: '12 min read',
      views: '1.5M',
      rating: 4.7,
      trending: false,
      thumbnail: '/api/placeholder/400/225',
      tags: ['Automation', 'Business', 'AI', 'Operations']
    },
    {
      id: 4,
      title: 'Consciousness AI Systems',
      description: 'Next-generation AI with self-awareness and emotional intelligence capabilities',
      category: 'ai-innovations',
      type: 'Interactive',
      duration: '25 min',
      views: '3.1M',
      rating: 4.9,
      trending: true,
      thumbnail: '/api/placeholder/400/225',
      tags: ['Consciousness', 'AI', 'Self-Awareness', 'Emotional Intelligence']
    },
    {
      id: 5,
      title: 'Smart Manufacturing 4.0',
      description: 'AI-powered manufacturing with predictive maintenance and optimization systems',
      category: 'automation',
      type: 'Video',
      duration: '20 min',
      views: '2.1M',
      rating: 4.8,
      trending: false,
      thumbnail: '/api/placeholder/400/225',
      tags: ['Manufacturing', 'AI', 'Predictive Maintenance', 'Industry 4.0']
    },
    {
      id: 6,
      title: 'Space Technology Integration',
      description: 'AI systems for space exploration and interplanetary communication networks',
      category: 'future-tech',
      type: 'Documentary',
      duration: '60 min',
      views: '2.8M',
      rating: 4.8,
      trending: true,
      thumbnail: '/api/placeholder/400/225',
      tags: ['Space', 'AI', 'Exploration', 'Communication']
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'trending':
        return b.trending - a.trending || b.views.localeCompare(a.views);
      case 'rating':
        return b.rating - a.rating;
      case 'views':
        return parseInt(b.views) - parseInt(a.views);
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Header */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Search className="w-4 h-4" />
            Ultimate Content Discovery 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Revolutionary
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Content
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the most advanced AI innovations, automation solutions, and future technologies
            with our intelligent content discovery system.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for content, topics, or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id} className="bg-slate-800">
                    {category.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* Sort Options */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="trending" className="bg-slate-800">Trending</option>
                <option value="rating" className="bg-slate-800">Highest Rated</option>
                <option value="views" className="bg-slate-800">Most Viewed</option>
                <option value="newest" className="bg-slate-800">Newest</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-white/10 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map(category => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-300">
            Showing {sortedContent.length} of {contentItems.length} results
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <TrendingUp className="w-4 h-4" />
            <span>Real-time updates</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {sortedContent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Thumbnail */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white/60" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {item.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                  {item.duration}
                </div>
                {item.trending && (
                  <div className="absolute bottom-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Trending
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{item.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2 group">
                  Explore Content
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {sortedContent.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-white/10 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 mx-auto">
              Load More Content
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default UltimateContentDiscoveryWidget2026;