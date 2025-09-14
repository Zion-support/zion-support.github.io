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
  ChevronUp,
  X,
  Video,
  FileText,
  Download,
  Share2,
  Heart,
  Bookmark
} from 'lucide-react';
import Link from 'next/link';

const UltimateContentDiscoveryWidget2026 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('trending');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [bookmarks, setBookmarks] = useState(new Set());
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All Content', icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
    { id: 'ai-predictions', name: 'AI Predictions', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Zap, color: 'from-green-500 to-emerald-500' },
    { id: 'automation', name: 'Automation', icon: Rocket, color: 'from-orange-500 to-red-500' },
    { id: 'tutorials', name: 'Tutorials', icon: Video, color: 'from-yellow-500 to-orange-500' },
    { id: 'case-studies', name: 'Case Studies', icon: FileText, color: 'from-indigo-500 to-purple-500' },
    { id: 'research', name: 'Research', icon: Globe, color: 'from-teal-500 to-cyan-500' }
  ];

  const sortOptions = [
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'newest', name: 'Newest', icon: Clock },
    { id: 'popular', name: 'Most Popular', icon: Users },
    { id: 'relevance', name: 'Most Relevant', icon: Star }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'AI 2026-2030 Ultimate Predictions',
      description: 'Comprehensive analysis of revolutionary AI breakthroughs that will reshape our world over the next five years.',
      category: 'ai-predictions',
      type: 'interactive-showcase',
      duration: '15 min read',
      views: 12500,
      likes: 892,
      tags: ['AI', 'Predictions', 'Future', 'Technology'],
      thumbnail: '/api/placeholder/400/250',
      featured: true,
      publishedAt: '2024-01-15',
      author: 'AI Research Team',
      rating: 4.9,
      trending: true
    },
    {
      id: 2,
      title: 'Quantum Computing Revolution 2026',
      description: 'Deep dive into quantum computing advancements and their practical applications in business.',
      category: 'quantum-computing',
      type: 'video',
      duration: '22 min video',
      views: 8900,
      likes: 654,
      tags: ['Quantum', 'Computing', 'Technology', 'Innovation'],
      thumbnail: '/api/placeholder/400/250',
      featured: false,
      publishedAt: '2024-01-12',
      author: 'Quantum Labs',
      rating: 4.7,
      trending: false
    },
    {
      id: 3,
      title: 'Automation Success Stories 2026',
      description: 'Real-world case studies of companies achieving 300%+ efficiency gains through intelligent automation.',
      category: 'automation',
      type: 'case-study',
      duration: '12 min read',
      views: 15600,
      likes: 1203,
      tags: ['Automation', 'ROI', 'Business', 'Success'],
      thumbnail: '/api/placeholder/400/250',
      featured: true,
      publishedAt: '2024-01-10',
      author: 'Automation Experts',
      rating: 4.8,
      trending: true
    },
    {
      id: 4,
      title: 'Neural Interface Breakthroughs',
      description: 'Exploring the latest developments in brain-computer interfaces and their implications.',
      category: 'research',
      type: 'interactive-showcase',
      duration: '18 min read',
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
    switch (selectedSort) {
      case 'newest':
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      case 'popular':
        return b.views - a.views;
      case 'relevance':
        return b.likes - a.likes;
      default: // trending
        return (b.views + b.likes) - (a.views + a.likes);
    }
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const toggleBookmark = (id: number) => {
    const newBookmarks = new Set(bookmarks);
    if (newBookmarks.has(id)) {
      newBookmarks.delete(id);
    } else {
      newBookmarks.add(id);
    }
    setBookmarks(newBookmarks);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Ultimate Content Discovery 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover revolutionary AI content, breakthrough technologies, and transformative insights that will shape the future.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for content, tutorials, guides..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="appearance-none bg-white/10 border border-white/20 rounded-xl px-4 py-3 pr-8 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id} className="bg-slate-800">
                    {option.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-white/10 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          <AnimatePresence>
            {sortedContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                <div className={`${viewMode === 'list' ? 'w-1/3' : 'w-full'} aspect-video bg-gradient-to-br from-purple-500 to-blue-500 relative`}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {item.featured && (
                    <div className="absolute top-3 left-3 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : 'w-full'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categories.find(c => c.id === item.category)?.color} text-white`}>
                      {categories.find(c => c.id === item.category)?.name}
                    </span>
                    {item.trending && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-500 text-white">
                        TRENDING
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{item.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {item.views.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {item.rating}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          favorites.has(item.id) ? 'text-red-500 bg-red-500/20' : 'text-gray-400 hover:text-red-500'
                        }`}
                      >
                        <Heart className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => toggleBookmark(item.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          bookmarks.has(item.id) ? 'text-blue-500 bg-blue-500/20' : 'text-gray-400 hover:text-blue-500'
                        }`}
                      >
                        <Bookmark className="w-5 h-5" />
                      </button>
                      <button className="p-2 rounded-lg text-gray-400 hover:text-white transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <Link
                      href={`/content/${item.id}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                    >
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {sortedContent.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No content found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default UltimateContentDiscoveryWidget2026;