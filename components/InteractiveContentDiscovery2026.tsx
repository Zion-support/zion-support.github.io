'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  TrendingUp, 
  Clock, 
  BookOpen,
  Play,
  Download,
  Share2,
  Heart,
  Bookmark,
  ArrowRight,
  ChevronDown,
  X,
  Sparkles,
  Zap,
  Brain,
  Rocket,
  Target,
  Award,
  Users,
  Globe
} from 'lucide-react';

const InteractiveContentDiscovery2026 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('trending');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());

  const categories = [
    { id: 'all', name: 'All Content', icon: <Grid className="w-4 h-4" />, count: 1247 },
    { id: 'breakthroughs', name: 'AI Breakthroughs', icon: <Sparkles className="w-4 h-4" />, count: 342 },
    { id: 'predictions', name: 'Future Predictions', icon: <Brain className="w-4 h-4" />, count: 189 },
    { id: 'solutions', name: 'Enterprise Solutions', icon: <Rocket className="w-4 h-4" />, count: 456 },
    { id: 'tutorials', name: 'Tutorials & Guides', icon: <BookOpen className="w-4 h-4" />, count: 156 },
    { id: 'case-studies', name: 'Case Studies', icon: <Target className="w-4 h-4" />, count: 104 }
  ];

  const sortOptions = [
    { id: 'trending', name: 'Trending', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'newest', name: 'Newest', icon: <Clock className="w-4 h-4" /> },
    { id: 'popular', name: 'Most Popular', icon: <Star className="w-4 h-4" /> },
    { id: 'rating', name: 'Highest Rated', icon: <Award className="w-4 h-4" /> }
  ];

  const contentItems = [
    {
      id: '1',
      title: 'Quantum Neural Fusion: The Next Revolution',
      description: 'Discover how quantum computing is merging with neural networks to create unprecedented AI capabilities.',
      category: 'breakthroughs',
      image: '/api/placeholder/400/300',
      author: 'Dr. Sarah Chen',
      readTime: '12 min',
      views: '2.3M',
      likes: '45K',
      rating: 4.9,
      tags: ['Quantum AI', 'Neural Networks', 'Breakthrough'],
      featured: true,
      publishedAt: '2026-01-15'
    },
    {
      id: '2',
      title: 'AI Consciousness: The 2026 Breakthrough',
      description: 'First AI systems achieving human-level consciousness and emotional intelligence.',
      category: 'breakthroughs',
      image: '/api/placeholder/400/300',
      author: 'Prof. Michael Rodriguez',
      readTime: '15 min',
      views: '1.8M',
      likes: '38K',
      rating: 4.8,
      tags: ['Consciousness', 'AI Ethics', 'Breakthrough'],
      featured: true,
      publishedAt: '2026-01-12'
    },
    {
      id: '3',
      title: '10,000% ROI: Enterprise AI Transformation',
      description: 'How leading companies are achieving unprecedented returns with AI automation.',
      category: 'solutions',
      image: '/api/placeholder/400/300',
      author: 'Zion Tech Group',
      readTime: '8 min',
      views: '3.1M',
      likes: '52K',
      rating: 4.9,
      tags: ['ROI', 'Enterprise', 'Automation'],
      featured: false,
      publishedAt: '2026-01-10'
    },
    {
      id: '4',
      title: 'AI Singularity Timeline: 2027 Predictions',
      description: 'Comprehensive analysis of when AI will surpass human intelligence across all domains.',
      category: 'predictions',
      image: '/api/placeholder/400/300',
      author: 'Dr. Alex Thompson',
      readTime: '20 min',
      views: '4.2M',
      likes: '67K',
      rating: 4.7,
      tags: ['Singularity', 'Predictions', 'Future'],
      featured: false,
      publishedAt: '2026-01-08'
    },
    {
      id: '5',
      title: 'Neural Interface Revolution: Direct Brain Control',
      description: 'Breakthrough technology enabling direct brain-computer interfaces.',
      category: 'breakthroughs',
      image: '/api/placeholder/400/300',
      author: 'Dr. Elena Volkov',
      readTime: '10 min',
      views: '2.7M',
      likes: '41K',
      rating: 4.6,
      tags: ['Neural Interface', 'BCI', 'Breakthrough'],
      featured: false,
      publishedAt: '2026-01-05'
    },
    {
      id: '6',
      title: 'Complete AI Implementation Guide 2026',
      description: 'Step-by-step guide to implementing AI solutions in your business.',
      category: 'tutorials',
      image: '/api/placeholder/400/300',
      author: 'Zion Tech Academy',
      readTime: '25 min',
      views: '1.2M',
      likes: '28K',
      rating: 4.8,
      tags: ['Tutorial', 'Implementation', 'Guide'],
      featured: false,
      publishedAt: '2026-01-03'
    }
  ];

  const [filteredContent, setFilteredContent] = useState(contentItems);

  // Filter and search functionality
  useEffect(() => {
    let filtered = contentItems;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        break;
      case 'popular':
        filtered.sort((a, b) => parseInt(b.views.replace('M', '')) - parseInt(a.views.replace('M', '')));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default: // trending
        filtered.sort((a, b) => parseInt(b.likes.replace('K', '')) - parseInt(a.likes.replace('K', '')));
    }

    setFilteredContent(filtered);
  }, [searchQuery, selectedCategory, sortBy]);

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const toggleBookmark = (id: string) => {
    const newBookmarks = new Set(bookmarks);
    if (newBookmarks.has(id)) {
      newBookmarks.delete(id);
    } else {
      newBookmarks.add(id);
    }
    setBookmarks(newBookmarks);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Interactive Content Discovery
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our vast library of AI content, breakthrough technologies, and enterprise solutions. 
          Find exactly what you need with our intelligent discovery system.
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
              placeholder="Search content, tags, or authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>

          {/* View Mode Toggle */}
          <div className="flex border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-white text-gray-600'}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-white text-gray-600'}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-6">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                {category.name}
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Grid/List */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      }`}>
        <AnimatePresence>
          {filteredContent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              } ${viewMode === 'list' ? 'flex' : ''}`}
            >
              {item.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </span>
                </div>
              )}

              <div className={`relative ${viewMode === 'list' ? 'w-1/3 h-48' : 'h-48'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                      favorites.has(item.id) 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${favorites.has(item.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={() => toggleBookmark(item.id)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                      bookmarks.has(item.id) 
                        ? 'bg-yellow-500 text-white' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarks.has(item.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-semibold">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">{item.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {item.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {item.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {item.likes}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    By {item.author}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
        >
          Load More Content
        </motion.button>
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery2026;