import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  ArrowRight, 
  Star, 
  TrendingUp,
  Clock,
  Eye,
  Heart,
  Share2,
  Bookmark,
  Tag,
  Sparkles
} from 'lucide-react';

const InteractiveContentDiscovery2026 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('trending');
  const [filteredContent, setFilteredContent] = useState([]);

  const categories = [
    { id: 'all', name: 'All Content', icon: Grid },
    { id: 'ai', name: 'AI & Machine Learning', icon: TrendingUp },
    { id: 'quantum', name: 'Quantum Computing', icon: Sparkles },
    { id: 'automation', name: 'Automation', icon: Clock },
    { id: 'cloud', name: 'Cloud Infrastructure', icon: Eye }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'Quantum Neural Networks: The Future of AI',
      description: 'Explore how quantum computing is revolutionizing artificial intelligence with unprecedented processing power and capabilities.',
      category: 'quantum',
      tags: ['quantum', 'ai', 'neural-networks', 'computing'],
      image: '/api/placeholder/400/250',
      author: 'Dr. Sarah Chen',
      readTime: '8 min read',
      views: 12500,
      likes: 892,
      trending: true,
      featured: true,
      publishedAt: '2026-01-15'
    },
    {
      id: 2,
      title: 'Hyper-Automation: Transforming Enterprise Operations',
      description: 'Discover how advanced automation solutions are reshaping business processes and driving unprecedented efficiency.',
      category: 'automation',
      tags: ['automation', 'enterprise', 'efficiency', 'business'],
      image: '/api/placeholder/400/250',
      author: 'Michael Rodriguez',
      readTime: '12 min read',
      views: 8900,
      likes: 654,
      trending: true,
      featured: false,
      publishedAt: '2026-01-12'
    },
    {
      id: 3,
      title: 'Edge AI: Computing at the Network Periphery',
      description: 'Learn about distributed AI computing and how edge technologies are bringing intelligence closer to users.',
      category: 'ai',
      tags: ['edge-computing', 'ai', 'distributed', 'performance'],
      image: '/api/placeholder/400/250',
      author: 'Alex Thompson',
      readTime: '6 min read',
      views: 15600,
      likes: 1203,
      trending: false,
      featured: true,
      publishedAt: '2026-01-10'
    },
    {
      id: 4,
      title: 'Quantum Cloud Platforms: The Next Frontier',
      description: 'Explore how quantum computing is being integrated into cloud infrastructure for revolutionary applications.',
      category: 'cloud',
      tags: ['quantum', 'cloud', 'infrastructure', 'platform'],
      image: '/api/placeholder/400/250',
      author: 'Dr. Elena Volkov',
      readTime: '10 min read',
      views: 7200,
      likes: 445,
      trending: false,
      featured: false,
      publishedAt: '2026-01-08'
    },
    {
      id: 5,
      title: 'Synthetic Intelligence: Beyond Traditional AI',
      description: 'Dive deep into the world of synthetic intelligence and how it\'s creating truly autonomous systems.',
      category: 'ai',
      tags: ['synthetic-intelligence', 'ai', 'autonomous', 'consciousness'],
      image: '/api/placeholder/400/250',
      author: 'Prof. James Wilson',
      readTime: '15 min read',
      views: 18900,
      likes: 1456,
      trending: true,
      featured: true,
      publishedAt: '2026-01-05'
    },
    {
      id: 6,
      title: 'Autonomous Business Systems: The Future is Now',
      description: 'Learn how self-managing AI systems are running entire business operations without human intervention.',
      category: 'automation',
      tags: ['autonomous', 'business', 'ai', 'management'],
      image: '/api/placeholder/400/250',
      author: 'Lisa Park',
      readTime: '9 min read',
      views: 11200,
      likes: 789,
      trending: false,
      featured: false,
      publishedAt: '2026-01-03'
    }
  ];

  useEffect(() => {
    let filtered = contentItems;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort content
    switch (sortBy) {
      case 'trending':
        filtered = filtered.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0) || b.views - a.views);
        break;
      case 'popular':
        filtered = filtered.sort((a, b) => b.views - a.views);
        break;
      case 'recent':
        filtered = filtered.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        break;
      case 'likes':
        filtered = filtered.sort((a, b) => b.likes - a.likes);
        break;
    }

    setFilteredContent(filtered);
  }, [searchQuery, selectedCategory, sortBy]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Revolutionary
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technology Content
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore cutting-edge insights, breakthrough technologies, and revolutionary solutions 
            that are shaping the future of business and technology.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, topics, or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 border-blue-500 text-white'
                      : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Sort and View Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 pt-4 border-t border-white/10">
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="trending">Trending</option>
                <option value="popular">Most Popular</option>
                <option value="recent">Most Recent</option>
                <option value="likes">Most Liked</option>
              </select>
            </div>

            <div className="flex items-center space-x-2 mt-4 sm:mt-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${sortBy}-${viewMode}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}
          >
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden hover:transform hover:scale-105"
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                  {item.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Featured
                    </div>
                  )}
                  {item.trending && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold rounded-full flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Trending
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                    <span className="text-gray-400 text-sm">{item.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-lg"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>By {item.author}</span>
                    <span>{formatNumber(item.views)} views</span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-400">
                        <Eye className="w-4 h-4 mr-1" />
                        {formatNumber(item.views)}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Heart className="w-4 h-4 mr-1" />
                        {formatNumber(item.likes)}
                      </div>
                    </div>

                    <Link
                      href={`/content/${item.id}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
            Load More Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery2026;