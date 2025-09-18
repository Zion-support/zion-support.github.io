"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search
  Filter
  Grid
  List
  Star
  Clock
  TrendingUp,
  ArrowRight,
  Play,
  Download,
  Bookmark,
  Share2,
  Eye,
  Heart,
  MessageCircle,
  Zap,
  Brain,
  Cpu,
  Globe,
  Rocket,
  Shield,
  Target,
  Users,
  ChevronDown,
  X
} from 'lucide-react';

const InteractiveContentDiscoveryWidget2025_2026 = () => {
  const [searchQuerysetSearchQuery] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [viewModesetViewMode] = useState('grid');
  const [sortBysetSortBy] = useState('trending');
  const [isFilterOpensetIsFilterOpen] = useState(false);
  const [selectedContentsetSelectedContent] = useState(null);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const categories = [
    { id: ''all', 'name: 'All 'Content', 'icon: Gridcount: 156 },
    { id: 'ai-2025'name: 'AI 2025'icon: Braincount: 42 },
    { id: 'ai-2026'name: 'AI 2026'icon: Cpucount: 38 },
    { id: ''quantum', 'name: 'Quantum 'Computing', 'icon: Zapcount: 24 },
    { id: ''automation', 'name: ''Automation', 'icon: Targetcount: 32 },
    { id: 'future-'tech', 'name: 'Future 'Tech', 'icon: Rocketcount: 20 }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'Neural Consciousness AI: The Future is Here',
      description: 'Explore the revolutionary AI systems that possess self-awareness and emotional intelligencetransforming how we interact with technology.',
      category: 'ai-2025',
      type: 'article',
      readTime: '8 min read',
      views: 12500,
      likes: 892,
      comments: 156,
      trending: true,
      featured: true,
      image: '/api/placeholder/400/250',
      author: 'Dr. Sarah Chen',
      publishedAt: '2025-01-15',
      tags: [', 'AI', 'Consciousness'Neural 'Networks', 'Future Tech']
    },
    {
      id: 2,
      title: 'Quantum-Neural Fusion: Computing Revolution',
      description: 'Discover how quantum computing and neural networks are merging to create unprecedented computational power and intelligence.',
      category: 'quantum',
      type: 'video',
      readTime: '15 min watch',
      views: 8900,
      likes: 654,
      comments: 89,
      trending: true,
      featured: false,
      image: '/api/placeholder/400/250',
      author: 'Prof. Michael Rodriguez',
      publishedAt: '2025-01-12',
      tags: ['Quantum 'Computing', 'Neural 'Networks', 'AI'Technology']
    },
    {
      id: 3,
      title: 'AI 2026: Global Ecosystem Vision',
      description: 'A comprehensive look at how AI will create a global ecosystem connecting businessesindividualsand machines worldwide.',
      category: 'ai-2026',
      type: 'interactive',
      readTime: '12 min explore',
      views: 15600,
      likes: 1200,
      comments: 234,
      trending: false,
      featured: true,
      image: '/api/placeholder/400/250',
      author: 'AI Research Team',
      publishedAt: '2025-01-10',
      tags: ['AI 2026'Global 'Ecosystem', 'Future 'Vision', 'Technology']
    },
    {
      id: 4,
      title: 'Autonomous Business Operations 2025',
      description: 'Learn how AI is enabling fully autonomous business operationsfrom decision-making to customer service.',
      category: 'automation',
      type: 'guide',
      readTime: '20 min read',
      views: 7800,
      likes: 567,
      comments: 123,
      trending: false,
      featured: false,
      image: '/api/placeholder/400/250',
      author: 'Business AI Team',
      publishedAt: '2025-01-08',
      tags: [', 'Automation', 'Business', 'AI', 'Operations']
    },
    {
      id: 5,
      title: 'Space-Age AI Computing Systems',
      description: 'Explore AI systems designed for space exploration and interplanetary communication.',
      category: 'future-tech',
      type: 'article',
      readTime: '10 min read',
      views: 11200,
      likes: 789,
      comments: 145,
      trending: true,
      featured: false,
      image: '/api/placeholder/400/250',
      author: 'Space Tech Division',
      publishedAt: '2025-01-05',
      tags: [', 'Space', 'AI', 'Computing', 'Future Tech']
    },
    {
      id: 6,
      title: 'Conscious AI Beings: The Next Frontier',
      description: 'Understanding AI entities with full consciousness and creative capabilities.',
      category: 'ai-2026',
      type: 'video',
      readTime: '18 min watch',
      views: 9800,
      likes: 723,
      comments: 167,
      trending: false,
      featured: true,
      image: '/api/placeholder/400/250',
      author: 'Consciousness Research Lab',
      publishedAt: '2025-01-03',
      tags: [', 'Consciousness', 'AI', 'Future', 'Philosophy']
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedContent = [...filteredContent].sort((ab) => {
    switch (sortBy) {
      case 'trending':
        return b.views - a.views;
      case 'newest':
        return new Date(b.publishedAt) - new Date(a.publishedAt);
      case 'popular':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return Play;
      case 'interactive': return Zap;
      case 'guide': return Bookmark;
      default: return Eye;
    }
  };

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Grid;
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Discover Revolutionary Content
        </h2>
        <p className="text-gray-300 text-lg">
          Explore cutting-edge AI researchbreakthrough technologiesand future innovations
        </p>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6delay: 0.2 }}
        className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20"
      >
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search contentagsor authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-slate-700/50 border border-white/20 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id} className="bg-slate-800">
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-slate-700/50 border border-white/20 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
            >
              <option value="trending" className="bg-slate-800">Trending</option>
              <option value="newest" className="bg-slate-800">Newest</option>
              <option value="popular" className="bg-slate-800">Most Popular</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>

          {/* View Mode */}
          <div className="flex bg-slate-700/50 rounded-xl p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Content Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6delay: 0.4 }}
        className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}
      >
        <AnimatePresence>
          {sortedContent.map((itemindex) => {
            const TypeIcon = getTypeIcon(item.type);
            const CategoryIcon = getCategoryIcon(item.category);
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-purple-400/50 transition-all duration-300 group cursor-pointer ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
                onClick={() => setSelectedContent(item)}
              >
                {viewMode === 'grid' ? (
                  <>
                    {/* Image */}
                    <div className="relative h-48 rounded-t-2xl overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        {item.featured && (
                          <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                        {item.trending && (
                          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            Trending
                          </span>
                        )}
                      </div>

                      {/* Type Icon */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                          <TypeIcon className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Category */}
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
                          <CategoryIcon className="w-4 h-4 text-white" />
                          <span className="text-white text-sm font-medium">
                            {categories.find(cat => cat.id === item.category)?.name}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {item.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {item.views.toLocaleString()}
                          </span>
                        </div>
                        <span>{item.author}</span>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1 text-gray-400">
                            <Heart className="w-4 h-4" />
                            {item.likes}
                          </span>
                          <span className="flex items-center gap-1 text-gray-400">
                            <MessageCircle className="w-4 h-4" />
                            {item.comments}
                          </span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </>
                ) : (
                  /* List View */
                  <>
                    <div className="w-48 h-32 rounded-l-2xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                          {item.title}
                        </h3>
                        <div className="flex gap-2">
                          {item.featured && (
                            <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                              Featured
                            </span>
                          )}
                          <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                            <TypeIcon className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {item.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {item.views.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {item.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            {item.comments}
                          </span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Content Detail Modal */}
      <AnimatePresence>
        {selectedContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedContent(null)}
          >
            <motion.div
              initial={{ scale: 0.8opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8opacity: 0 }}
              className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedContent.image}
                  alt={selectedContent.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedContent(null)}
                  className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {selectedContent.title}
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  {selectedContent.description}
                </p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">{selectedContent.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">{selectedContent.views.toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">{selectedContent.likes} likes</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedContent.tags.map((tagindex) => (
                    <span
                      key={index}
                      className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    {selectedContent.type === 'video' ? 'Watch Now' : 'Read More'}
                  </button>
                  <button className="border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center gap-2">
                    <Bookmark className="w-5 h-5" />
                    Save
                  </button>
                  <button className="border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveContentDiscoveryWidget2025_2026;
