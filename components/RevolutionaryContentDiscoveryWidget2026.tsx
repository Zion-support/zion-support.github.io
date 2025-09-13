'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Clock, 
  Users, 
  Eye,
  Bookmark,
  Share2,
  Download,
  Play,
  ChevronDown,
  X,
  Sparkles,
  Brain,
  Zap,
  Target,
  Rocket,
  Lightbulb,
  Globe,
  Award,
  Flame,
  Crown,
  ArrowRight,
  RefreshCw,
  Grid,
  List,
  SlidersHorizontal
} from 'lucide-react';

const RevolutionaryContentDiscoveryWidget2026 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('trending');
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [bookmarkedItems, setBookmarkedItems] = useState(new Set());

  const categories = [
    { id: 'all', name: 'All Content', icon: Globe, color: 'from-gray-500 to-gray-600' },
    { id: 'ai-breakthroughs', name: 'AI Breakthroughs', icon: Brain, color: 'from-blue-500 to-purple-600' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Zap, color: 'from-green-500 to-teal-600' },
    { id: 'neural-interfaces', name: 'Neural Interfaces', icon: Target, color: 'from-orange-500 to-red-600' },
    { id: 'autonomous-systems', name: 'Autonomous Systems', icon: Rocket, color: 'from-purple-500 to-indigo-600' },
    { id: 'future-predictions', name: 'Future Predictions', icon: Lightbulb, color: 'from-yellow-500 to-orange-600' },
    { id: 'business-ai', name: 'Business AI', icon: Award, color: 'from-pink-500 to-rose-600' },
    { id: 'tech-trends', name: 'Tech Trends', icon: TrendingUp, color: 'from-cyan-500 to-blue-600' }
  ];

  const sortOptions = [
    { id: 'trending', name: 'Trending Now', icon: Flame },
    { id: 'newest', name: 'Newest First', icon: Clock },
    { id: 'popular', name: 'Most Popular', icon: Users },
    { id: 'rating', name: 'Highest Rated', icon: Star },
    { id: 'views', name: 'Most Viewed', icon: Eye }
  ];

  const timeframes = [
    { id: 'all', name: 'All Time' },
    { id: 'today', name: 'Today' },
    { id: 'week', name: 'This Week' },
    { id: 'month', name: 'This Month' },
    { id: 'year', name: 'This Year' }
  ];

  const contentData = [
    {
      id: 1,
      title: "AI 2026: The Neural Consciousness Revolution",
      description: "Discover how artificial intelligence is evolving beyond traditional computing to achieve true neural consciousness and emotional intelligence.",
      category: "ai-breakthroughs",
      readTime: "12 min",
      views: 2300000,
      likes: 45200,
      rating: 4.9,
      isTrending: true,
      isNew: true,
      publishedAt: "2026-01-15",
      tags: ["AI 2026", "Neural Networks", "Consciousness", "Breakthrough"],
      author: "Dr. Sarah Chen",
      image: "/api/placeholder/400/300",
      content: "The convergence of quantum computing and neural networks has created unprecedented opportunities..."
    },
    {
      id: 2,
      title: "Quantum Neural Fusion: The Next Computing Paradigm",
      description: "Explore how quantum computing and neural interfaces are merging to create the most powerful computational system ever conceived.",
      category: "quantum-computing",
      readTime: "15 min",
      views: 1800000,
      likes: 38700,
      rating: 4.8,
      isTrending: true,
      isNew: false,
      publishedAt: "2026-01-12",
      tags: ["Quantum Computing", "Neural Fusion", "Computing", "Revolution"],
      author: "Prof. Michael Rodriguez",
      image: "/api/placeholder/400/300",
      content: "Quantum neural fusion represents the ultimate synthesis of quantum mechanics and biological neural processing..."
    },
    {
      id: 3,
      title: "Autonomous Business Systems: 10,000% ROI Achieved",
      description: "Real-world case studies showing how autonomous AI systems are delivering unprecedented returns on investment across industries.",
      category: "business-ai",
      readTime: "18 min",
      views: 3100000,
      likes: 67300,
      rating: 4.9,
      isTrending: true,
      isNew: true,
      publishedAt: "2026-01-10",
      tags: ["Autonomous Systems", "ROI", "Business", "AI Implementation"],
      author: "Zion Tech Research Team",
      image: "/api/placeholder/400/300",
      content: "Our latest research reveals how autonomous AI systems are transforming business operations..."
    },
    {
      id: 4,
      title: "Neural Interface Revolution: Direct Brain-Computer Integration",
      description: "The future of human-computer interaction through direct neural interfaces and brain-computer integration technologies.",
      category: "neural-interfaces",
      readTime: "14 min",
      views: 2700000,
      likes: 52100,
      rating: 4.7,
      isTrending: false,
      isNew: true,
      publishedAt: "2026-01-08",
      tags: ["Neural Interface", "BCI", "Human-Computer", "Integration"],
      author: "Dr. Elena Volkov",
      image: "/api/placeholder/400/300",
      content: "Neural interfaces are bridging the gap between human cognition and digital systems..."
    },
    {
      id: 5,
      title: "AI 2030 Predictions: The Singularity Approaches",
      description: "Comprehensive predictions for AI development through 2030, including the potential for artificial general intelligence.",
      category: "future-predictions",
      readTime: "20 min",
      views: 4200000,
      likes: 89400,
      rating: 4.9,
      isTrending: true,
      isNew: false,
      publishedAt: "2026-01-05",
      tags: ["AI 2030", "Singularity", "Predictions", "AGI"],
      author: "Dr. James Mitchell",
      image: "/api/placeholder/400/300",
      content: "Our analysis of current AI trends suggests we're approaching a critical inflection point..."
    },
    {
      id: 6,
      title: "Revolutionary Content Discovery: AI-Powered Learning",
      description: "How AI is transforming content discovery and personalized learning experiences for maximum knowledge retention.",
      category: "tech-trends",
      readTime: "10 min",
      views: 1500000,
      likes: 31800,
      rating: 4.6,
      isTrending: false,
      isNew: true,
      publishedAt: "2026-01-03",
      tags: ["Content Discovery", "AI Learning", "Personalization", "Education"],
      author: "Dr. Maria Santos",
      image: "/api/placeholder/400/300",
      content: "Advanced AI algorithms are revolutionizing how we discover, consume, and retain information..."
    },
    {
      id: 7,
      title: "Quantum Supremacy in Business: Real-World Applications",
      description: "How quantum computing is solving complex business problems that were previously impossible to tackle.",
      category: "quantum-computing",
      readTime: "16 min",
      views: 1900000,
      likes: 41200,
      rating: 4.8,
      isTrending: false,
      isNew: false,
      publishedAt: "2026-01-01",
      tags: ["Quantum Supremacy", "Business Applications", "Quantum Computing", "Innovation"],
      author: "Dr. Alex Chen",
      image: "/api/placeholder/400/300",
      content: "Quantum supremacy is no longer a theoretical concept but a practical reality in business applications..."
    },
    {
      id: 8,
      title: "The Future of Work: AI-Human Collaboration",
      description: "Exploring how AI and humans will work together in the future workplace, creating unprecedented productivity gains.",
      category: "business-ai",
      readTime: "13 min",
      views: 2200000,
      likes: 45600,
      rating: 4.7,
      isTrending: true,
      isNew: false,
      publishedAt: "2025-12-28",
      tags: ["Future of Work", "AI-Human Collaboration", "Productivity", "Workplace"],
      author: "Dr. Lisa Wang",
      image: "/api/placeholder/400/300",
      content: "The future workplace will be defined by seamless collaboration between AI and human intelligence..."
    }
  ];

  const filteredAndSortedContent = useMemo(() => {
    let filtered = contentData;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by timeframe
    if (selectedTimeframe !== 'all') {
      const now = new Date();
      const itemDate = new Date();
      
      filtered = filtered.filter(item => {
        itemDate.setTime(new Date(item.publishedAt).getTime());
        
        switch (selectedTimeframe) {
          case 'today':
            return itemDate.toDateString() === now.toDateString();
          case 'week':
            const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
            return itemDate >= weekAgo;
          case 'month':
            const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
            return itemDate >= monthAgo;
          case 'year':
            const yearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
            return itemDate >= yearAgo;
          default:
            return true;
        }
      });
    }

    // Sort content
    filtered.sort((a, b) => {
      switch (selectedSort) {
        case 'newest':
          return new Date(b.publishedAt) - new Date(a.publishedAt);
        case 'popular':
          return b.likes - a.likes;
        case 'rating':
          return b.rating - a.rating;
        case 'views':
          return b.views - a.views;
        case 'trending':
        default:
          if (a.isTrending && !b.isTrending) return -1;
          if (!a.isTrending && b.isTrending) return 1;
          return b.views - a.views;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedSort, selectedTimeframe]);

  const handleBookmark = (itemId) => {
    setBookmarkedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4"
        >
          <Sparkles className="w-4 h-4" />
          Revolutionary Content Discovery 2026
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
          Discover Revolutionary AI Content
        </h2>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find the most advanced AI breakthroughs, quantum innovations, and future predictions 
          with our intelligent content discovery system.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search content, authors, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Filters
            <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>

          {/* View Mode Toggle */}
          <div className="flex bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
            >
              <List className="w-5 h-5" />
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
              className="mt-6 pt-6 border-t border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Sort By</label>
                  <select
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {sortOptions.map(option => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Timeframe Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Timeframe</label>
                  <select
                    value={selectedTimeframe}
                    onChange={(e) => setSelectedTimeframe(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {timeframes.map(timeframe => (
                      <option key={timeframe.id} value={timeframe.id}>
                        {timeframe.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">
          Showing {filteredAndSortedContent.length} of {contentData.length} results
        </p>
        <button
          onClick={() => {
            setSearchQuery('');
            setSelectedCategory('all');
            setSelectedSort('trending');
            setSelectedTimeframe('all');
          }}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Reset Filters
        </button>
      </div>

      {/* Content Grid/List */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      }`}>
        {filteredAndSortedContent.map((content, index) => (
          <motion.div
            key={content.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${
              viewMode === 'list' ? 'flex' : ''
            }`}
          >
            {/* Image */}
            <div className={`relative bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden ${
              viewMode === 'list' ? 'w-64 h-48 flex-shrink-0' : 'h-48'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              {content.isNew && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  NEW
                </div>
              )}
              {content.isTrending && (
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Flame className="w-3 h-3" />
                  TRENDING
                </div>
              )}
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4" />
                  {content.readTime}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
              <div className="flex flex-wrap gap-2 mb-3">
                {content.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                {content.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {content.description}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {formatNumber(content.views)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {content.rating}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {formatNumber(content.likes)}
                  </div>
                </div>
                <span>{content.publishedAt}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {content.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{content.author}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleBookmark(content.id)}
                    className={`p-2 rounded-full transition-colors ${
                      bookmarkedItems.has(content.id)
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'text-gray-400 hover:text-yellow-600 hover:bg-yellow-50'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarkedItems.has(content.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {filteredAndSortedContent.length > 0 && (
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
            Load More Content
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* No Results */}
      {filteredAndSortedContent.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">No content found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search terms or filters</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedSort('trending');
              setSelectedTimeframe('all');
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default RevolutionaryContentDiscoveryWidget2026;