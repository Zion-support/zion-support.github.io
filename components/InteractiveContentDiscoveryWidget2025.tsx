'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  TrendingUp,
  BookOpen,
  Play,
  Download,
  Share2,
  Heart,
  ArrowRight,
  Brain,
  Zap,
  Globe,
  Shield
} from 'lucide-react';

const InteractiveContentDiscoveryWidget2025 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [favorites, setFavorites] = useState(new Set());

  const categories = [
    { id: 'all', label: 'All Content', icon: Globe },
    { id: 'ai-innovations', label: 'AI Innovations', icon: Brain },
    { id: 'case-studies', label: 'Case Studies', icon: Users },
    { id: 'tutorials', label: 'Tutorials', icon: BookOpen },
    { id: 'tools', label: 'Interactive Tools', icon: Zap },
    { id: 'security', label: 'Security', icon: Shield }
  ];

  const contentItems = [
    {
      id: 'quantum-ai-fusion',
      title: 'Quantum-AI Fusion Technology',
      description: 'Revolutionary fusion of quantum computing and artificial intelligence',
      category: 'ai-innovations',
      type: 'article',
      readTime: '8 min read',
      views: '12.5K',
      likes: 847,
      trending: true,
      featured: true,
      tags: ['quantum', 'ai', 'breakthrough', 'technology'],
      image: '/api/placeholder/400/250',
      author: 'AI Research Team',
      date: '2025-01-15'
    },
    {
      id: 'techcorp-success-story',
      title: 'TechCorp AI Transformation Success',
      description: 'How TechCorp achieved 95% efficiency gains with AI automation',
      category: 'case-studies',
      type: 'case-study',
      readTime: '6 min read',
      views: '8.2K',
      likes: 623,
      trending: true,
      featured: false,
      tags: ['success-story', 'automation', 'efficiency', 'business'],
      image: '/api/placeholder/400/250',
      author: 'Success Stories Team',
      date: '2025-01-12'
    },
    {
      id: 'ai-security-guide',
      title: 'AI Security Best Practices Guide',
      description: 'Comprehensive guide to securing AI systems and preventing attacks',
      category: 'tutorials',
      type: 'guide',
      readTime: '12 min read',
      views: '15.3K',
      likes: 1204,
      trending: false,
      featured: true,
      tags: ['security', 'ai', 'best-practices', 'guide'],
      image: '/api/placeholder/400/250',
      author: 'Security Team',
      date: '2025-01-10'
    },
    {
      id: 'neural-interface-demo',
      title: 'Neural Interface Interactive Demo',
      description: 'Hands-on demonstration of brain-computer interface technology',
      category: 'tools',
      type: 'interactive',
      readTime: '15 min demo',
      views: '25.7K',
      likes: 1892,
      trending: true,
      featured: true,
      tags: ['neural-interface', 'demo', 'interactive', 'technology'],
      image: '/api/placeholder/400/250',
      author: 'Tech Demo Team',
      date: '2025-01-08'
    },
    {
      id: 'ai-trends-2025',
      title: 'AI Trends 2025: Ultimate Predictions',
      description: 'Comprehensive analysis of AI trends that will shape 2025',
      category: 'ai-innovations',
      type: 'article',
      readTime: '10 min read',
      views: '18.9K',
      likes: 1456,
      trending: true,
      featured: false,
      tags: ['trends', 'predictions', '2025', 'future'],
      image: '/api/placeholder/400/250',
      author: 'Trends Analysis Team',
      date: '2025-01-05'
    },
    {
      id: 'automation-roi-calculator',
      title: 'AI Automation ROI Calculator',
      description: 'Calculate the return on investment for AI automation projects',
      category: 'tools',
      type: 'calculator',
      readTime: '5 min use',
      views: '9.4K',
      likes: 567,
      trending: false,
      featured: false,
      tags: ['calculator', 'roi', 'automation', 'business'],
      image: '/api/placeholder/400/250',
      author: 'Business Tools Team',
      date: '2025-01-03'
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
        return b.likes - a.likes;
      case 'newest':
        return new Date(b.date) - new Date(a.date);
      case 'popular':
        return parseInt(b.views.replace('K', '')) - parseInt(a.views.replace('K', ''));
      default:
        return 0;
    }
  });

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'article': return BookOpen;
      case 'case-study': return Users;
      case 'guide': return BookOpen;
      case 'interactive': return Play;
      case 'calculator': return TrendingUp;
      default: return BookOpen;
    }
  };

  const getCategoryIcon = (category) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : Globe;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium mb-4"
          >
            <Search className="w-4 h-4 mr-2" />
            Interactive Content Discovery
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Discover Amazing
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI Content</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore our comprehensive library of AI innovations, success stories, tutorials, and interactive tools. 
            Find exactly what you need with our intelligent discovery system.
          </motion.p>
        </div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="relative">
              <TrendingUp className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="trending">Trending</option>
                <option value="newest">Newest</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {sortedContent.map((item, index) => {
              const TypeIcon = getTypeIcon(item.type);
              const CategoryIcon = getCategoryIcon(item.category);
              const isFavorite = favorites.has(item.id);
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100">
                    {item.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                    {item.trending && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-red-400 to-pink-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Trending
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <CategoryIcon className="w-16 h-16 text-blue-500 opacity-50" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <TypeIcon className="w-5 h-5 text-blue-500" />
                        <span className="text-sm text-gray-500 capitalize">{item.type}</span>
                      </div>
                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className={`p-2 rounded-full transition-colors duration-300 ${
                          isFavorite 
                            ? 'text-red-500 bg-red-50' 
                            : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.readTime}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {item.views}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {item.likes}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/content/${item.id}`}
                        className="flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform duration-300"
                      >
                        {item.type === 'interactive' ? 'Try Demo' : 'Read More'}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-300">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-300">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
            Load More Content
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscoveryWidget2025;