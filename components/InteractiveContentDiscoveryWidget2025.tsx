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
  TrendingUp, 
  Users,
  ChevronDown,
  ChevronUp,
  Play,
  BookOpen,
  Code,
  Zap,
  Brain,
  Rocket,
  Shield,
  Globe,
  Target,
  Award,
  ArrowRight,
  X
} from 'lucide-react';

const InteractiveContentDiscoveryWidget2025 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('trending');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const categories = [
    { id: 'all', name: 'All Content', icon: Grid, count: 1247 },
    { id: 'ai-innovations', name: 'AI Innovations', icon: Brain, count: 342 },
    { id: 'automation', name: 'Automation', icon: Zap, count: 189 },
    { id: 'quantum', name: 'Quantum Computing', icon: Rocket, count: 156 },
    { id: 'security', name: 'Security', icon: Shield, count: 98 },
    { id: 'tutorials', name: 'Tutorials', icon: BookOpen, count: 234 },
    { id: 'case-studies', name: 'Case Studies', icon: Target, count: 128 },
    { id: 'tools', name: 'Tools & APIs', icon: Code, count: 100 }
  ];

  const sortOptions = [
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'newest', name: 'Newest', icon: Clock },
    { id: 'popular', name: 'Most Popular', icon: Users },
    { id: 'rating', name: 'Highest Rated', icon: Star }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'Neural Interface Revolution 2025',
      description: 'Discover how direct brain-computer interfaces are transforming human-AI interaction',
      category: 'ai-innovations',
      type: 'article',
      duration: '12 min read',
      rating: 4.9,
      views: '15.2k',
      tags: ['AI', 'Neural Networks', 'Human-Computer Interaction'],
      thumbnail: '/api/placeholder/400/250',
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough',
      description: 'Latest advances in quantum processing and their real-world applications',
      category: 'quantum',
      type: 'video',
      duration: '8:45',
      rating: 4.8,
      views: '23.1k',
      tags: ['Quantum', 'Computing', 'Physics'],
      thumbnail: '/api/placeholder/400/250',
      featured: true,
      trending: false
    },
    {
      id: 3,
      title: 'Autonomous Business Automation',
      description: 'Complete guide to implementing self-managing business processes',
      category: 'automation',
      type: 'tutorial',
      duration: '25 min',
      rating: 4.7,
      views: '8.9k',
      tags: ['Automation', 'Business Process', 'AI'],
      thumbnail: '/api/placeholder/400/250',
      featured: false,
      trending: true
    },
    {
      id: 4,
      title: 'Enterprise Security Solutions',
      description: 'Advanced security frameworks for enterprise applications',
      category: 'security',
      type: 'case-study',
      duration: '15 min read',
      rating: 4.6,
      views: '12.3k',
      tags: ['Security', 'Enterprise', 'Cybersecurity'],
      thumbnail: '/api/placeholder/400/250',
      featured: false,
      trending: false
    },
    {
      id: 5,
      title: 'AI Development Toolkit',
      description: 'Comprehensive toolkit for building next-generation AI applications',
      category: 'tools',
      type: 'resource',
      duration: 'Download',
      rating: 4.9,
      views: '45.7k',
      tags: ['Development', 'AI Tools', 'SDK'],
      thumbnail: '/api/placeholder/400/250',
      featured: true,
      trending: true
    },
    {
      id: 6,
      title: 'Global AI Implementation',
      description: 'Case study: How we helped 500+ companies implement AI solutions',
      category: 'case-studies',
      type: 'case-study',
      duration: '20 min read',
      rating: 4.8,
      views: '18.6k',
      tags: ['Case Study', 'Implementation', 'Success Story'],
      thumbnail: '/api/placeholder/400/250',
      featured: true,
      trending: false
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return Play;
      case 'article': return BookOpen;
      case 'tutorial': return Code;
      case 'case-study': return Target;
      case 'resource': return Download;
      default: return BookOpen;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'video': return 'from-red-500 to-pink-500';
      case 'article': return 'from-blue-500 to-cyan-500';
      case 'tutorial': return 'from-green-500 to-emerald-500';
      case 'case-study': return 'from-purple-500 to-indigo-500';
      case 'resource': return 'from-orange-500 to-yellow-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI innovations, automation solutions, and cutting-edge technology content.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, tags, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-white text-gray-600'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-white text-gray-600'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-8 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200 flex items-center"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
              {showFilters ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
            </button>
          </div>

          {/* Category Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t border-gray-200"
              >
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center ${
                        selectedCategory === category.id
                          ? 'bg-purple-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <category.icon className="w-4 h-4 mr-2" />
                      {category.name}
                      <span className="ml-2 text-xs opacity-75">({category.count})</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredContent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              {/* Thumbnail */}
              <div className={`relative ${viewMode === 'list' ? 'w-64 h-48' : 'h-48'}`}>
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-gray-400 text-sm">Content Preview</div>
                </div>
                
                {/* Type Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${getTypeColor(item.type)} text-white text-xs font-medium flex items-center`}>
                  <React.createElement(getTypeIcon(item.type), { className: "w-3 h-3 mr-1" }) />
                  {item.type}
                </div>

                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </div>
                )}

                {/* Trending Badge */}
                {item.trending && (
                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-medium flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </div>
                )}
              </div>

              {/* Content */}
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{item.duration}</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm text-gray-600">{item.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    {item.views} views
                  </div>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
            Load More Content
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscoveryWidget2025;