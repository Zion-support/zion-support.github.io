import React, { useState } from 'react';
import Link from 'next/link';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  TrendingUp, 
  BookOpen, 
  Video, 
  FileText,
  Users,
  Zap,
  Brain,
  Rocket,
  ChevronDown,
  ChevronUp,
  X,
  Play,
  Download,
  Share2,
  Heart,
  Bookmark
} from 'lucide-react';

const UltimateContentDiscoveryWidget2026 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('trending');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [bookmarks, setBookmarks] = useState(new Set());

  const categories = [
    { id: 'all', name: 'All Content', icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
    { id: 'ai-predictions', name: 'AI Predictions', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Zap, color: 'from-green-500 to-emerald-500' },
    { id: 'automation', name: 'Automation', icon: Rocket, color: 'from-orange-500 to-red-500' },
    { id: 'tutorials', name: 'Tutorials', icon: Video, color: 'from-yellow-500 to-orange-500' },
    { id: 'case-studies', name: 'Case Studies', icon: FileText, color: 'from-indigo-500 to-purple-500' }
  ];

  const sortOptions = [
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'newest', name: 'Newest', icon: Clock },
    { id: 'popular', name: 'Most Popular', icon: Star },
    { id: 'relevance', name: 'Most Relevant', icon: Search }
  ];

  const featuredContent = [
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
      publishedAt: '2025-01-15'
    },
    {
      id: 2,
      title: 'Quantum Neural Fusion: The Next Breakthrough',
      description: 'Deep dive into how quantum computing and neural networks will merge to create unprecedented AI capabilities.',
      category: 'quantum-computing',
      type: 'video',
      duration: '22 min',
      views: 8900,
      likes: 654,
      tags: ['Quantum', 'Neural Networks', 'AI', 'Computing'],
      thumbnail: '/api/placeholder/400/250',
      featured: false,
      publishedAt: '2025-01-14'
    },
    {
      id: 3,
      title: 'Autonomous Business Operations 2026',
      description: 'Complete guide to implementing fully autonomous business systems and processes.',
      category: 'automation',
      type: 'guide',
      duration: '30 min read',
      views: 15600,
      likes: 1203,
      tags: ['Automation', 'Business', 'Operations', 'AI'],
      thumbnail: '/api/placeholder/400/250',
      featured: true,
      publishedAt: '2025-01-13'
    },
    {
      id: 4,
      title: 'Neural Interface Implementation Tutorial',
      description: 'Step-by-step tutorial for building and implementing neural interface technologies.',
      category: 'tutorials',
      type: 'tutorial',
      duration: '45 min',
      views: 6700,
      likes: 445,
      tags: ['Tutorial', 'Neural Interface', 'Implementation', 'Technology'],
      thumbnail: '/api/placeholder/400/250',
      featured: false,
      publishedAt: '2025-01-12'
    },
    {
      id: 5,
      title: 'Enterprise AI Transformation Case Study',
      description: 'Real-world case study of a Fortune 500 company\'s complete AI transformation journey.',
      category: 'case-studies',
      type: 'case-study',
      duration: '18 min read',
      views: 9800,
      likes: 723,
      tags: ['Case Study', 'Enterprise', 'Transformation', 'AI'],
      thumbnail: '/api/placeholder/400/250',
      featured: false,
      publishedAt: '2025-01-11'
    },
    {
      id: 6,
      title: 'Consciousness Integration: The Future of AI',
      description: 'Exploring how AI systems will develop forms of consciousness and what it means for humanity.',
      category: 'ai-predictions',
      type: 'article',
      duration: '25 min read',
      views: 11200,
      likes: 891,
      tags: ['Consciousness', 'AI', 'Future', 'Philosophy'],
      thumbnail: '/api/placeholder/400/250',
      featured: true,
      publishedAt: '2025-01-10'
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

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const toggleBookmark = (id) => {
    setBookmarks(prev => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(id)) {
        newBookmarks.delete(id);
      } else {
        newBookmarks.add(id);
      }
      return newBookmarks;
    });
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return Video;
      case 'tutorial': return Play;
      case 'case-study': return FileText;
      default: return BookOpen;
    }
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
            Ultimate Content Discovery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover, explore, and engage with the most comprehensive collection of AI and technology content
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, tags, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white/10 border border-white/20 rounded-lg px-4 py-3 pr-8 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                className="appearance-none bg-white/10 border border-white/20 rounded-lg px-4 py-3 pr-8 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id} className="bg-slate-800">
                    {option.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* Advanced Filters Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-all duration-300 flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
              {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t border-white/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Content Type</label>
                    <div className="space-y-2">
                      {['All', 'Video', 'Article', 'Tutorial', 'Case Study'].map(type => (
                        <label key={type} className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm text-gray-300">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Duration</label>
                    <div className="space-y-2">
                      {['Any', 'Under 10 min', '10-30 min', '30+ min'].map(duration => (
                        <label key={duration} className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm text-gray-300">{duration}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Features</label>
                    <div className="space-y-2">
                      {['Featured', 'Trending', 'New', 'Popular'].map(feature => (
                        <label key={feature} className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {sortedContent.map((item, index) => {
              const TypeIcon = getTypeIcon(item.type);
              const CategoryIcon = categories.find(cat => cat.id === item.category)?.icon || BookOpen;
              const categoryColor = categories.find(cat => cat.id === item.category)?.color || 'from-blue-500 to-cyan-500';
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300 group"
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <TypeIcon className="w-16 h-16 text-white/70" />
                    </div>
                    
                    {/* Featured Badge */}
                    {item.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                        Featured
                      </div>
                    )}
                    
                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                          favorites.has(item.id) 
                            ? 'bg-red-500/80 text-white' 
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${favorites.has(item.id) ? 'fill-current' : ''}`} />
                      </button>
                      <button
                        onClick={() => toggleBookmark(item.id)}
                        className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                          bookmarks.has(item.id) 
                            ? 'bg-blue-500/80 text-white' 
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                      >
                        <Bookmark className={`w-4 h-4 ${bookmarks.has(item.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`p-1 rounded bg-gradient-to-r ${categoryColor}`}>
                        <CategoryIcon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-gray-400 capitalize">{item.category.replace('-', ' ')}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {item.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {item.likes}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {item.duration}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                        <Play className="w-4 h-4" />
                        {item.type === 'video' ? 'Watch' : 'Read'}
                      </button>
                      <button className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
            Load More Content
          </button>
        </motion.div>
      </div>
    </div>
  );
};

      {/* CTA */}
      <div className="mt-8 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span className="mr-2">🚀</span>
          Get Started with AI
        </Link>
      </div>
    </div>
  );
}