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
  ChevronDown,
  Heart,
  Share2,
  Eye,
  Play
} from 'lucide-react';
import Link from 'next/link';

const UltimateContentDiscoveryWidget2026 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('trending');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [isSearching, setIsSearching] = useState(false);

  const categories = [
    { id: 'all', name: 'All Content', icon: <Search className="w-4 h-4" /> },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Zap className="w-4 h-4" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'blockchain', name: 'Blockchain & Crypto', icon: <Users className="w-4 h-4" /> },
    { id: 'tutorials', name: 'Tutorials', icon: <Video className="w-4 h-4" /> },
    { id: 'case-studies', name: 'Case Studies', icon: <FileText className="w-4 h-4" /> }
  ];

  const content = [
    {
      id: 1,
      title: 'AI 2026-2030 Ultimate Predictions',
      description: 'Comprehensive analysis of revolutionary AI breakthroughs that will reshape our world over the next five years.',
      category: 'ai',
      type: 'article',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '12 min',
      views: '2.3M',
      rating: 4.9,
      trending: true,
      thumbnail: '/api/placeholder/400/225',
      tags: ['AI', 'Future', 'Technology', 'Predictions']
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough 2030',
      description: 'Revolutionary quantum supremacy achieved through error-corrected quantum computers and quantum internet.',
      category: 'quantum',
      type: 'video',
      author: 'Prof. Michael Rodriguez',
      date: '2024-01-12',
      duration: '25 min',
      views: '1.8M',
      rating: 4.8,
      trending: true,
      thumbnail: '/api/placeholder/400/225',
      tags: ['Quantum', 'Computing', 'Breakthrough', '2030']
    },
    {
      id: 3,
      title: 'Blockchain Revolution 2026',
      description: 'How next-generation blockchain technology will transform finance, governance, and digital identity.',
      category: 'blockchain',
      type: 'article',
      author: 'Alex Thompson',
      date: '2024-01-10',
      readTime: '8 min',
      views: '1.2M',
      rating: 4.7,
      trending: false,
      thumbnail: '/api/placeholder/400/225',
      tags: ['Blockchain', 'Finance', 'Revolution', '2026']
    },
    {
      id: 4,
      title: 'Space Technology 2030',
      description: 'Revolutionary space exploration technologies including quantum propulsion and space-based manufacturing.',
      category: 'ai',
      type: 'video',
      author: 'Dr. Elena Volkov',
      date: '2024-01-08',
      duration: '32 min',
      views: '2.8M',
      rating: 4.8,
      trending: true,
      thumbnail: '/api/placeholder/400/225',
      tags: ['Space', 'AI', 'Exploration', 'Communication']
    }
  ];

  const filteredContent = content.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (selectedSort) {
      case 'trending':
        return b.trending - a.trending;
      case 'rating':
        return b.rating - a.rating;
      case 'views':
        return parseInt(b.views.replace('M', '000000').replace('k', '000')) - parseInt(a.views.replace('M', '000000').replace('k', '000'));
      case 'date':
        return new Date(b.date) - new Date(a.date);
      default:
        return 0;
    }
  });

  const handleSearch = (query) => {
    setSearchQuery(query);
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 1000);
  };

  const toggleFavorite = (id) => {
    // Implementation for favorite toggle
    console.log('Toggle favorite:', id);
  };

  const shareContent = (id) => {
    // Implementation for sharing
    console.log('Share content:', id);
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Ultimate Content
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Discovery
            </span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most revolutionary content about AI, quantum computing, blockchain, and future technologies.
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
                  <option key={category.id} value={category.id} className="bg-gray-800 text-white">
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
                className="appearance-none bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="trending" className="bg-gray-800 text-white">Trending</option>
                <option value="rating" className="bg-gray-800 text-white">Highest Rated</option>
                <option value="views" className="bg-gray-800 text-white">Most Viewed</option>
                <option value="date" className="bg-gray-800 text-white">Newest</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-white/10 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${selectedSort}-${viewMode}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}
          >
            {sortedContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 group ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {/* Thumbnail */}
                <div className={`relative ${viewMode === 'list' ? 'w-1/3' : 'w-full'} h-48 bg-gradient-to-br from-purple-500 to-pink-500`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {item.type === 'video' ? (
                      <Play className="w-12 h-12 text-white" />
                    ) : (
                      <BookOpen className="w-12 h-12 text-white" />
                    )}
                  </div>
                  {item.trending && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Trending
                    </div>
                  )}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={() => toggleFavorite(item.id)}
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Heart className="w-4 h-4 text-white" />
                    </button>
                    <button
                      onClick={() => shareContent(item.id)}
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Share2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                    <span className="text-xs text-gray-400">
                      {item.type === 'video' ? item.duration : item.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {item.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        {item.rating}
                      </div>
                    </div>
                    <span>{item.date}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {item.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm text-gray-300">{item.author}</span>
                    </div>
                    <Link
                      href={`/content/${item.id}`}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                    >
                      {item.type === 'video' ? 'Watch' : 'Read'}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {sortedContent.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No content found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default UltimateContentDiscoveryWidget2026;