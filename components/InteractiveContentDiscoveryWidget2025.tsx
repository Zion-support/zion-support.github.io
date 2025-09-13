'use client';

import React, { useState, useEffect } from 'react';
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
  Users,
  Calendar,
  Tag,
  ChevronDown,
  ChevronUp,
  Play,
  Download,
  Share2,
  Heart,
  Bookmark,
  Eye,
  MessageCircle,
  ThumbsUp
} from 'lucide-react';

const InteractiveContentDiscoveryWidget2025 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('recent');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Content', icon: Grid, count: 156 },
    { id: 'ai-solutions', name: 'AI Solutions', icon: Brain, count: 42 },
    { id: 'automation', name: 'Automation', icon: Zap, count: 38 },
    { id: 'cloud', name: 'Cloud Infrastructure', icon: Cloud, count: 28 },
    { id: 'tutorials', name: 'Tutorials', icon: BookOpen, count: 24 },
    { id: 'case-studies', name: 'Case Studies', icon: FileText, count: 18 },
    { id: 'webinars', name: 'Webinars', icon: Video, count: 12 }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'Revolutionary AI Solutions 2025',
      description: 'Discover the latest breakthroughs in artificial intelligence and machine learning technologies.',
      category: 'ai-solutions',
      type: 'article',
      author: 'Dr. Sarah Chen',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      views: 1250,
      likes: 89,
      comments: 23,
      tags: ['AI', 'Machine Learning', 'Innovation'],
      image: '/api/placeholder/400/250',
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: 'Intelligent Automation Masterclass',
      description: 'Learn how to implement smart automation solutions that transform your business operations.',
      category: 'automation',
      type: 'video',
      author: 'Michael Rodriguez',
      publishDate: '2025-01-14',
      readTime: '45 min',
      views: 2100,
      likes: 156,
      comments: 45,
      tags: ['Automation', 'Business Process', 'Efficiency'],
      image: '/api/placeholder/400/250',
      featured: true,
      trending: false
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Best Practices',
      description: 'Essential strategies for building scalable and secure cloud infrastructure solutions.',
      category: 'cloud',
      type: 'guide',
      author: 'Emily Johnson',
      publishDate: '2025-01-13',
      readTime: '12 min read',
      views: 980,
      likes: 67,
      comments: 18,
      tags: ['Cloud Computing', 'Infrastructure', 'Security'],
      image: '/api/placeholder/400/250',
      featured: false,
      trending: true
    },
    {
      id: 4,
      title: 'Case Study: Enterprise AI Transformation',
      description: 'How TechCorp increased efficiency by 300% using our AI solutions.',
      category: 'case-studies',
      type: 'case-study',
      author: 'Alex Thompson',
      publishDate: '2025-01-12',
      readTime: '6 min read',
      views: 750,
      likes: 45,
      comments: 12,
      tags: ['Case Study', 'Enterprise', 'ROI'],
      image: '/api/placeholder/400/250',
      featured: false,
      trending: false
    },
    {
      id: 5,
      title: 'Micro SaaS Development Guide',
      description: 'Complete guide to building and scaling micro SaaS applications.',
      category: 'tutorials',
      type: 'tutorial',
      author: 'David Kim',
      publishDate: '2025-01-11',
      readTime: '15 min read',
      views: 1650,
      likes: 98,
      comments: 31,
      tags: ['SaaS', 'Development', 'Scaling'],
      image: '/api/placeholder/400/250',
      featured: true,
      trending: false
    },
    {
      id: 6,
      title: 'Future of Quantum Computing',
      description: 'Exploring the next frontier in computational technology and its business applications.',
      category: 'ai-solutions',
      type: 'webinar',
      author: 'Dr. Lisa Wang',
      publishDate: '2025-01-10',
      readTime: '60 min',
      views: 3200,
      likes: 234,
      comments: 67,
      tags: ['Quantum Computing', 'Future Tech', 'Innovation'],
      image: '/api/placeholder/400/250',
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
      case 'recent':
        return new Date(b.publishDate) - new Date(a.publishDate);
      case 'popular':
        return b.views - a.views;
      case 'trending':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return Video;
      case 'article': return FileText;
      case 'webinar': return Video;
      case 'tutorial': return BookOpen;
      case 'case-study': return FileText;
      default: return FileText;
    }
  };

  if (!isVisible) return null;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold">Content Discovery Hub</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search content, tags, or authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/50"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors flex items-center"
          >
            <Filter className="w-5 h-5 mr-2" />
            Filters
            {showFilters ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
          </button>
        </div>
      </div>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-gray-200 p-6 bg-gray-50"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="recent">Most Recent</option>
                  <option value="popular">Most Popular</option>
                  <option value="trending">Most Liked</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
                <div className="flex flex-wrap gap-2">
                  {['All', 'Articles', 'Videos', 'Webinars', 'Tutorials'].map(type => (
                    <button
                      key={type}
                      className="px-3 py-1 text-sm rounded-full border border-gray-300 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Grid/List */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <h4 className="text-lg font-semibold text-gray-900">
              {sortedContent.length} Results
            </h4>
            {selectedCategory !== 'all' && (
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {categories.find(c => c.id === selectedCategory)?.name}
              </span>
            )}
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <div className="text-6xl text-blue-300">
                      {React.createElement(getTypeIcon(item.type), { className: "w-16 h-16" })}
                    </div>
                  </div>
                  {item.featured && (
                    <div className="absolute top-3 left-3 px-2 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full">
                      Featured
                    </div>
                  )}
                  {item.trending && (
                    <div className="absolute top-3 right-3 px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{item.category}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                  </div>
                  
                  <h5 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h5>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {item.views}
                      </span>
                      <span className="flex items-center">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {item.likes}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {item.comments}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Bookmark className="w-4 h-4" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {sortedContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 p-4"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    {React.createElement(getTypeIcon(item.type), { className: "w-8 h-8 text-blue-500" })}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm text-gray-500">{item.category}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{item.readTime}</span>
                      {item.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">
                          Featured
                        </span>
                      )}
                      {item.trending && (
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded flex items-center">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </span>
                      )}
                    </div>
                    
                    <h5 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h5>
                    
                    <p className="text-gray-600 text-sm mb-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {item.views}
                        </span>
                        <span className="flex items-center">
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          {item.likes}
                        </span>
                        <span className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {item.comments}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                          <Play className="w-4 h-4 mr-1 inline" />
                          View
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Bookmark className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {sortedContent.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveContentDiscoveryWidget2025;