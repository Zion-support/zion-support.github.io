'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Star, Clock, TrendingUp, BookOpen, Video, FileText, Users, Zap } from 'lucide-react';
<<<<<<< HEAD
=======
=======
>>>>>>> main
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
<<<<<<< HEAD
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
    { id: 'popular', name: 'Most Popular', icon: Star },
    { id: 'relevance', name: 'Most Relevant', icon: Search }
=======
>>>>>>> main
  const [isSearching, setIsSearching] = useState(false);

  const categories = [
    { id: 'all', name: 'All Content', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'ai', name: 'AI Solutions', icon: <Zap className="w-4 h-4" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'automation', name: 'Automation', icon: <Users className="w-4 h-4" /> },
    { id: 'tutorials', name: 'Tutorials', icon: <Video className="w-4 h-4" /> },
    { id: 'case-studies', name: 'Case Studies', icon: <FileText className="w-4 h-4" /> }
<<<<<<< HEAD
=======
=======
>>>>>>> main
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
<<<<<<< HEAD
    { id: 'popular', name: 'Most Popular', icon: Users },
    { id: 'relevance', name: 'Most Relevant', icon: Star }
=======
>>>>>>> main
  ];

  const contentItems = [
    {
      id: 1,
<<<<<<< HEAD
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
=======
>>>>>>> main
      title: "AI-Powered Business Transformation Guide 2026",
      category: 'ai',
      type: 'guide',
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
<<<<<<< HEAD
      duration: '18 min video',
      views: '7.4k',
      featured: false,
      description: "Understanding quantum encryption and security protocols for modern applications."
      views: '2.8M',
      rating: 4.8,
=======
>>>>>>> main
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

<<<<<<< HEAD
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
=======
>>>>>>> main
  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => setIsSearching(false), 1000);
  };
<<<<<<< HEAD
=======
=======
>>>>>>> main

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ultimate Content Discovery
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Powered by AI 2026
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

<<<<<<< HEAD
        {/* Search and Filter Interface */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
=======
>>>>>>> main
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
<<<<<<< HEAD
                placeholder="Search content, tags, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
=======
>>>>>>> main
                placeholder="Search for content, tutorials, guides..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
<<<<<<< HEAD
=======
=======
>>>>>>> main
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
<<<<<<< HEAD
                className="appearance-none bg-white/10 border border-white/20 rounded-lg px-4 py-3 pr-8 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
=======
>>>>>>> main
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
<<<<<<< HEAD

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
=======
>>>>>>> main
            {/* Filter Button */}
            <button className="flex items-center px-6 py-4 bg-white/20 border border-white/30 rounded-xl text-white hover:bg-white/30 transition-colors">
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </button>
          </div>
<<<<<<< HEAD
=======
=======
>>>>>>> main

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
<<<<<<< HEAD
=======

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
=======
  );
};

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-300">
            Showing {sortedContent.length} of {contentItems.length} results
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <TrendingUp className="w-4 h-4" />
            <span>Real-time updates</span>
          </div>
>>>>>>> main
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
<<<<<<< HEAD
    </section>
    </motion.div>
    </div>
=======
    </motion.div>
>>>>>>> main
  );
};

export default UltimateContentDiscoveryWidget2026;