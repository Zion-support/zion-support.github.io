'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Clock, 
  TrendingUp, 
  BookOpen,
  Video,
  FileText,
  Image,
  Code,
  Zap,
  ArrowRight,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const InteractiveContentDiscoveryWidget2026 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('trending');
  const [showFilters, setShowFilters] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const searchRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Content', icon: Grid, count: 1247 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Zap, count: 342 },
    { id: 'automation', name: 'Automation', icon: Code, count: 189 },
    { id: 'quantum', name: 'Quantum Computing', icon: TrendingUp, count: 156 },
    { id: 'tutorials', name: 'Tutorials', icon: BookOpen, count: 298 },
    { id: 'case-studies', name: 'Case Studies', icon: FileText, count: 87 },
    { id: 'videos', name: 'Videos', icon: Video, count: 175 }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'Revolutionary AI Breakthroughs 2026',
      description: 'Discover the latest AI innovations that are reshaping industries and creating unprecedented opportunities.',
      category: 'ai',
      type: 'article',
      rating: 4.9,
      views: 15420,
      readTime: '8 min',
      tags: ['AI', 'Innovation', 'Technology'],
      featured: true,
      image: '/api/placeholder/400/250',
      author: 'Dr. Sarah Chen',
      publishedAt: '2026-01-15'
    },
    {
      id: 2,
      title: 'Quantum Computing Implementation Guide',
      description: 'Complete guide to implementing quantum computing solutions in your business infrastructure.',
      category: 'quantum',
      type: 'tutorial',
      rating: 4.8,
      views: 8930,
      readTime: '15 min',
      tags: ['Quantum', 'Implementation', 'Guide'],
      featured: true,
      image: '/api/placeholder/400/250',
      author: 'Prof. Michael Rodriguez',
      publishedAt: '2026-01-12'
    },
    {
      id: 3,
      title: 'Automation Success Stories',
      description: 'Real-world case studies of businesses that transformed their operations with advanced automation.',
      category: 'case-studies',
      type: 'video',
      rating: 4.7,
      views: 12350,
      readTime: '12 min',
      tags: ['Automation', 'Success', 'Case Study'],
      featured: false,
      image: '/api/placeholder/400/250',
      author: 'Alex Thompson',
      publishedAt: '2026-01-10'
    },
    {
      id: 4,
      title: 'Neural Interface Technology Deep Dive',
      description: 'Exploring the future of human-computer interaction through neural interface technologies.',
      category: 'ai',
      type: 'article',
      rating: 4.9,
      views: 22100,
      readTime: '10 min',
      tags: ['Neural', 'Interface', 'Future Tech'],
      featured: true,
      image: '/api/placeholder/400/250',
      author: 'Dr. Elena Volkov',
      publishedAt: '2026-01-08'
    },
    {
      id: 5,
      title: 'Building Scalable Microservices',
      description: 'Best practices for creating and maintaining scalable microservices architecture.',
      category: 'tutorials',
      type: 'tutorial',
      rating: 4.6,
      views: 6750,
      readTime: '20 min',
      tags: ['Microservices', 'Scalability', 'Architecture'],
      featured: false,
      image: '/api/placeholder/400/250',
      author: 'David Kim',
      publishedAt: '2026-01-05'
    },
    {
      id: 6,
      title: 'The Future of Edge Computing',
      description: 'How edge computing is revolutionizing data processing and real-time applications.',
      category: 'ai',
      type: 'video',
      rating: 4.8,
      views: 18900,
      readTime: '14 min',
      tags: ['Edge Computing', 'Real-time', 'Data Processing'],
      featured: true,
      image: '/api/placeholder/400/250',
      author: 'Maria Santos',
      publishedAt: '2026-01-03'
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return Video;
      case 'tutorial': return BookOpen;
      case 'article': return FileText;
      default: return FileText;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'video': return 'from-red-500 to-pink-500';
      case 'tutorial': return 'from-blue-500 to-cyan-500';
      case 'article': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  if (!isVisible) return null;

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
            Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of cutting-edge technology content, tutorials, and insights.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search content, tags, or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none min-w-[200px]"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option value="trending">Trending</option>
                <option value="newest">Newest</option>
                <option value="rating">Highest Rated</option>
                <option value="views">Most Viewed</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          <AnimatePresence>
            {filteredContent.map((item, index) => {
              const TypeIcon = getTypeIcon(item.type);
              const typeColor = getTypeColor(item.type);
              
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                  onClick={() => setSelectedContent(item)}
                >
                  {/* Image */}
                  <div className={`relative ${viewMode === 'list' ? 'w-64 h-48' : 'h-48'}`}>
                    <div className={`w-full h-full bg-gradient-to-br ${typeColor} flex items-center justify-center`}>
                      <TypeIcon className="w-16 h-16 text-white/80" />
                    </div>
                    {item.featured && (
                      <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                        Featured
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                      {item.type}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-gray-600">{item.rating}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.readTime}
                        </div>
                        <div className="flex items-center">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          {item.views.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author and Date */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>By {item.author}</span>
                      <span>{new Date(item.publishedAt).toLocaleDateString()}</span>
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full mt-4 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
          >
            Load More Content
          </motion.button>
        </motion.div>
      </div>

      {/* Content Detail Modal */}
      <AnimatePresence>
        {selectedContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedContent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedContent.title}
                  </h3>
                  <button
                    onClick={() => setSelectedContent(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <p className="text-gray-600 mb-6">{selectedContent.description}</p>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {selectedContent.rating}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {selectedContent.readTime}
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {selectedContent.views.toLocaleString()} views
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedContent.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    By {selectedContent.author} • {new Date(selectedContent.publishedAt).toLocaleDateString()}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Read Full Article
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InteractiveContentDiscoveryWidget2026;