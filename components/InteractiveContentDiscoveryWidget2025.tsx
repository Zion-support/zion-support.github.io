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
  Users,
  ChevronDown,
  X,
  Play,
  BookOpen,
  Download,
  Share2,
  Heart,
  Eye
} from 'lucide-react';

const InteractiveContentDiscoveryWidget2025 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('trending');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const categories = [
    { id: 'all', name: 'All Content', count: 156 },
    { id: 'ai-tools', name: 'AI Tools', count: 42 },
    { id: 'tutorials', name: 'Tutorials', count: 38 },
    { id: 'case-studies', name: 'Case Studies', count: 28 },
    { id: 'whitepapers', name: 'Whitepapers', count: 24 },
    { id: 'webinars', name: 'Webinars', count: 24 }
  ];

  const contentItems = [
    {
      id: '1',
      title: 'AI-Powered Business Automation: Complete Guide 2025',
      category: 'ai-tools',
      type: 'tutorial',
      description: 'Learn how to implement AI automation in your business with our comprehensive step-by-step guide.',
      author: 'Dr. Sarah Chen',
      authorRole: 'AI Research Director',
      duration: '15 min read',
      views: 12500,
      likes: 892,
      rating: 4.9,
      tags: ['AI', 'Automation', 'Business', 'Guide'],
      thumbnail: '/api/placeholder/400/250',
      featured: true,
      trending: true
    },
    {
      id: '2',
      title: 'Quantum Computing Breakthrough: What It Means for Your Business',
      category: 'whitepapers',
      type: 'whitepaper',
      description: 'Deep dive into quantum computing advancements and their practical business applications.',
      author: 'Michael Rodriguez',
      authorRole: 'Quantum Computing Expert',
      duration: '25 min read',
      views: 8900,
      likes: 654,
      rating: 4.8,
      tags: ['Quantum', 'Computing', 'Technology', 'Future'],
      thumbnail: '/api/placeholder/400/250',
      featured: false,
      trending: true
    },
    {
      id: '3',
      title: 'Case Study: How TechCorp Increased ROI by 300% with AI',
      category: 'case-studies',
      type: 'case-study',
      description: 'Real-world success story of AI implementation leading to unprecedented business growth.',
      author: 'Emily Watson',
      authorRole: 'Success Manager',
      duration: '12 min read',
      views: 15600,
      likes: 1205,
      rating: 4.9,
      tags: ['Case Study', 'ROI', 'Success', 'AI Implementation'],
      thumbnail: '/api/placeholder/400/250',
      featured: true,
      trending: false
    },
    {
      id: '4',
      title: 'Micro SaaS Development: From Idea to $10K MRR',
      category: 'tutorials',
      type: 'tutorial',
      description: 'Complete roadmap for building and scaling micro SaaS products in 2025.',
      author: 'Alex Thompson',
      authorRole: 'SaaS Expert',
      duration: '20 min read',
      views: 9800,
      likes: 743,
      rating: 4.7,
      tags: ['SaaS', 'Development', 'Startup', 'Revenue'],
      thumbnail: '/api/placeholder/400/250',
      featured: false,
      trending: true
    },
    {
      id: '5',
      title: 'Cloud Infrastructure Best Practices for Enterprise',
      category: 'whitepapers',
      type: 'whitepaper',
      description: 'Comprehensive guide to building scalable and secure cloud infrastructure.',
      author: 'David Kim',
      authorRole: 'Cloud Architect',
      duration: '30 min read',
      views: 7200,
      likes: 456,
      rating: 4.6,
      tags: ['Cloud', 'Infrastructure', 'Enterprise', 'Security'],
      thumbnail: '/api/placeholder/400/250',
      featured: false,
      trending: false
    },
    {
      id: '6',
      title: 'Live Webinar: Future of AI in Business (Recording)',
      category: 'webinars',
      type: 'webinar',
      description: 'Expert panel discussion on the future of AI and its impact on business operations.',
      author: 'Panel of Experts',
      authorRole: 'Industry Leaders',
      duration: '45 min watch',
      views: 23400,
      likes: 1890,
      rating: 4.9,
      tags: ['Webinar', 'AI', 'Future', 'Panel Discussion'],
      thumbnail: '/api/placeholder/400/250',
      featured: true,
      trending: true
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
        return (b.trending ? 1 : 0) - (a.trending ? 1 : 0) || b.views - a.views;
      case 'popular':
        return b.views - a.views;
      case 'rating':
        return b.rating - a.rating;
      case 'recent':
        return b.views - a.views; // Simplified for demo
      default:
        return 0;
    }
  });

  const toggleFavorite = (id: string) => {
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

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Amazing
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Content</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI tools, tutorials, case studies, and expert insights 
            designed to accelerate your business growth.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, topics, or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
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
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="trending">Trending</option>
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="recent">Most Recent</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* View Mode Toggle */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          layout
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
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {/* Thumbnail */}
                <div className={`relative ${viewMode === 'list' ? 'w-64 h-40' : 'h-48'}`}>
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white opacity-80" />
                  </div>
                  {item.featured && (
                    <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                      Featured
                    </div>
                  )}
                  {item.trending && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </div>
                  )}
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="absolute bottom-3 right-3 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <Heart className={`w-4 h-4 ${favorites.has(item.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                  </button>
                </div>

                {/* Content */}
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                    <span className="text-xs text-gray-500">{item.type}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {item.views.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {item.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      {item.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.duration}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {item.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{item.author}</div>
                        <div className="text-xs text-gray-500">{item.authorRole}</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300">
                        <BookOpen className="w-4 h-4 inline mr-1" />
                        Read
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Load More Content
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscoveryWidget2025;