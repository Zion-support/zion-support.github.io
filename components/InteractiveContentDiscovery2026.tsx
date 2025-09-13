'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  ArrowRight, 
  Star, 
  Clock, 
  Eye,
  BookOpen,
  Play,
  Download,
  Share2,
  Heart,
  Bookmark,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Brain,
  Cloud,
  Target,
  BarChart3,
  Cpu,
  Database,
  Network,
  Rocket,
  Lightbulb,
  Award,
  Globe,
  Lock
} from 'lucide-react';

const InteractiveContentDiscovery2026 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [isVisible, setIsVisible] = useState(false);
  const [favorites, setFavorites] = useState(new Set());

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Content', icon: Grid },
    { id: 'ai-solutions', name: 'AI Solutions', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud Infrastructure', icon: Cloud },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'automation', name: 'Automation', icon: Zap },
    { id: 'quantum', name: 'Quantum Computing', icon: Cpu },
    { id: 'neural', name: 'Neural Interfaces', icon: Network }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'Neural Interface Revolution 2026',
      description: 'Direct brain-computer interfaces for unprecedented productivity and control.',
      category: 'neural',
      type: 'article',
      readTime: '8 min',
      views: '12.5k',
      rating: 4.9,
      tags: ['AI', 'Neural Networks', 'Productivity', 'Innovation'],
      thumbnail: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Security Framework',
      description: 'Military-grade encryption using quantum principles for unbreakable security.',
      category: 'cybersecurity',
      type: 'guide',
      readTime: '15 min',
      views: '8.2k',
      rating: 4.8,
      tags: ['Security', 'Quantum', 'Encryption', 'Enterprise'],
      thumbnail: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 3,
      title: 'Edge Computing Mastery',
      description: 'Process data closer to the source for maximum efficiency and speed.',
      category: 'cloud',
      type: 'tutorial',
      readTime: '12 min',
      views: '15.3k',
      rating: 4.7,
      tags: ['Cloud', 'Edge Computing', 'Performance', 'Scalability'],
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Predictive Analytics Platform',
      description: 'Turn data into strategic insights with 95% accuracy predictions.',
      category: 'analytics',
      type: 'case-study',
      readTime: '10 min',
      views: '9.7k',
      rating: 4.9,
      tags: ['Analytics', 'Predictions', 'Business Intelligence', 'Data'],
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'AI Automation Suite 2026',
      description: 'Complete business automation with self-learning AI systems.',
      category: 'automation',
      type: 'demo',
      readTime: '6 min',
      views: '18.1k',
      rating: 4.8,
      tags: ['Automation', 'AI', 'Business', 'Efficiency'],
      thumbnail: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 6,
      title: 'Quantum AI Fusion',
      description: 'Revolutionary combination of quantum computing and artificial intelligence.',
      category: 'quantum',
      type: 'whitepaper',
      readTime: '20 min',
      views: '6.4k',
      rating: 4.9,
      tags: ['Quantum', 'AI', 'Fusion', 'Breakthrough'],
      thumbnail: '/api/placeholder/400/250'
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'article': return BookOpen;
      case 'guide': return BookOpen;
      case 'tutorial': return Play;
      case 'case-study': return BarChart3;
      case 'demo': return Play;
      case 'whitepaper': return Download;
      default: return BookOpen;
    }
  };

  const getCategoryIcon = (category) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : Grid;
  };

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Search className="w-4 h-4" />
            INTERACTIVE CONTENT DISCOVERY
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Revolutionary</span>
            <br />
            Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive library of cutting-edge technology content, 
            guides, and insights designed to transform your business.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-xl mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, tags, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
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
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.name}
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'
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
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          <AnimatePresence>
            {filteredContent.map((item, index) => {
              const TypeIcon = getTypeIcon(item.type);
              const CategoryIcon = getCategoryIcon(item.category);
              const isFavorite = favorites.has(item.id);

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group ${
                    viewMode === 'list' ? 'flex' : ''
                  } ${item.featured ? 'ring-2 ring-purple-500' : ''}`}
                >
                  {/* Thumbnail */}
                  <div className={`relative overflow-hidden rounded-t-2xl ${viewMode === 'list' ? 'w-80 flex-shrink-0' : ''}`}>
                    <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                      <CategoryIcon className="w-16 h-16 text-white opacity-80" />
                    </div>
                    {item.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                        Featured
                      </div>
                    )}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                        <Bookmark className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <TypeIcon className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-gray-500 capitalize">{item.type}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-500">{item.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {item.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          {item.rating}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {item.readTime}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 group">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                        <Share2 className="w-4 h-4 text-gray-600" />
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
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 mx-auto group">
            Load More Content
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery2026;