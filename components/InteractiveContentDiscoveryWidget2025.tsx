'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Star, 
  Clock, 
  Users,
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
  Rocket,
  Shield,
  Award,
  CheckCircle,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const InteractiveContentDiscoveryWidget2025 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Content', icon: Zap, color: 'from-purple-500 to-blue-500' },
    { id: 'ai-solutions', name: 'AI Solutions', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Zap, color: 'from-cyan-500 to-green-500' },
    { id: 'future-tech', name: 'Future Tech', icon: Rocket, color: 'from-green-500 to-emerald-500' },
    { id: 'automation', name: 'Automation', icon: Shield, color: 'from-emerald-500 to-teal-500' },
    { id: 'analytics', name: 'Analytics', icon: TrendingUp, color: 'from-teal-500 to-blue-500' }
  ];

  const contentItems = [
    {
      id: '1',
      title: 'Advanced AI Automation Platform 2025',
      description: 'Revolutionary AI-powered automation that transforms business operations with 99.9% accuracy and 10x efficiency gains.',
      category: 'ai-solutions',
      type: 'platform',
      rating: 4.9,
      views: 12500,
      likes: 892,
      comments: 156,
      duration: '2 min read',
      difficulty: 'Advanced',
      tags: ['AI', 'Automation', 'Enterprise', '2025'],
      image: '/api/placeholder/400/250',
      author: 'Zion Tech Group',
      publishedAt: '2025-01-15',
      isTrending: true,
      isNew: true
    },
    {
      id: '2',
      title: 'Quantum Supremacy Platform',
      description: 'Achieve quantum supremacy with our cutting-edge quantum computing solutions for enterprise applications.',
      category: 'quantum-computing',
      type: 'platform',
      rating: 4.8,
      views: 8900,
      likes: 654,
      comments: 89,
      duration: '3 min read',
      difficulty: 'Expert',
      tags: ['Quantum', 'Computing', 'Supremacy', 'Enterprise'],
      image: '/api/placeholder/400/250',
      author: 'Quantum Labs',
      publishedAt: '2025-01-14',
      isTrending: true,
      isNew: false
    },
    {
      id: '3',
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interfaces that enable seamless human-AI interaction and enhanced cognitive capabilities.',
      category: 'future-tech',
      type: 'technology',
      rating: 4.7,
      views: 15600,
      likes: 1203,
      comments: 234,
      duration: '4 min read',
      difficulty: 'Advanced',
      tags: ['Neural', 'Interface', 'BCI', 'Future'],
      image: '/api/placeholder/400/250',
      author: 'Neural Tech',
      publishedAt: '2025-01-13',
      isTrending: false,
      isNew: true
    },
    {
      id: '4',
      title: 'Synthetic Intelligence Platform',
      description: 'Next-generation synthetic intelligence that surpasses human cognitive abilities in specific domains.',
      category: 'ai-solutions',
      type: 'platform',
      rating: 4.9,
      views: 22100,
      likes: 1890,
      comments: 445,
      duration: '5 min read',
      difficulty: 'Expert',
      tags: ['Synthetic', 'Intelligence', 'AI', 'Advanced'],
      image: '/api/placeholder/400/250',
      author: 'AI Research Lab',
      publishedAt: '2025-01-12',
      isTrending: true,
      isNew: false
    },
    {
      id: '5',
      title: 'Enterprise Automation Suite',
      description: 'Comprehensive automation solutions for enterprise workflows, processes, and operations.',
      category: 'automation',
      type: 'suite',
      rating: 4.6,
      views: 7800,
      likes: 456,
      comments: 78,
      duration: '3 min read',
      difficulty: 'Intermediate',
      tags: ['Enterprise', 'Automation', 'Workflow', 'Process'],
      image: '/api/placeholder/400/250',
      author: 'Enterprise Solutions',
      publishedAt: '2025-01-11',
      isTrending: false,
      isNew: false
    },
    {
      id: '6',
      title: 'Advanced Analytics Dashboard',
      description: 'Real-time analytics and insights for data-driven decision making and business intelligence.',
      category: 'analytics',
      type: 'dashboard',
      rating: 4.5,
      views: 11200,
      likes: 678,
      comments: 123,
      duration: '2 min read',
      difficulty: 'Intermediate',
      tags: ['Analytics', 'Dashboard', 'BI', 'Real-time'],
      image: '/api/placeholder/400/250',
      author: 'Data Insights Co',
      publishedAt: '2025-01-10',
      isTrending: false,
      isNew: true
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
        return (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0) || b.views - a.views;
      case 'newest':
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      case 'rating':
        return b.rating - a.rating;
      case 'views':
        return b.views - a.views;
      default:
        return 0;
    }
  });

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Zap;
  };

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : 'from-purple-500 to-blue-500';
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Search className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-300 text-sm font-medium">Interactive Content Discovery</span>
            <TrendingUp className="w-4 h-4 text-green-400 ml-2" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Amazing Content</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of AI solutions, quantum computing platforms, and future technology innovations.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search content, tags, or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Sort and Filter Toggle */}
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="trending">Trending</option>
                <option value="newest">Newest</option>
                <option value="rating">Highest Rated</option>
                <option value="views">Most Viewed</option>
              </select>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
              >
                <Filter className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Filters</span>
                {showFilters ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t border-white/10"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Difficulty</label>
                    <select className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white">
                      <option value="">All Levels</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Content Type</label>
                    <select className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white">
                      <option value="">All Types</option>
                      <option value="platform">Platform</option>
                      <option value="technology">Technology</option>
                      <option value="suite">Suite</option>
                      <option value="dashboard">Dashboard</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Rating</label>
                    <select className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white">
                      <option value="">All Ratings</option>
                      <option value="4.5+">4.5+ Stars</option>
                      <option value="4.0+">4.0+ Stars</option>
                      <option value="3.5+">3.5+ Stars</option>
                    </select>
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {sortedContent.map((item, index) => {
              const CategoryIcon = getCategoryIcon(item.category);
              const categoryColor = getCategoryColor(item.category);
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {item.isNew && (
                        <span className="px-2 py-1 bg-green-500/90 text-white text-xs font-medium rounded-full">
                          New
                        </span>
                      )}
                      {item.isTrending && (
                        <span className="px-2 py-1 bg-orange-500/90 text-white text-xs font-medium rounded-full">
                          Trending
                        </span>
                      )}
                    </div>

                    {/* Category Icon */}
                    <div className={`absolute top-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-r ${categoryColor} flex items-center justify-center`}>
                      <CategoryIcon className="w-5 h-5 text-white" />
                    </div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className={`p-2 rounded-lg transition-all duration-300 ${
                          favorites.includes(item.id)
                            ? 'text-red-400 bg-red-500/10'
                            : 'text-gray-400 hover:text-red-400 hover:bg-red-500/10'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${favorites.includes(item.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span>{item.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          <span>{item.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{item.duration}</span>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-white/10 rounded-lg text-xs">
                        {item.difficulty}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">
                          <Bookmark className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                      <Link
                        href={`/content/${item.id}`}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-medium hover:bg-white/20 transition-all duration-300">
            <Zap className="w-5 h-5 mr-2" />
            Load More Content
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscoveryWidget2025;