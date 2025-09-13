'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Sparkles, 
  Play, 
  BookOpen, 
  Code, 
  Users, 
  TrendingUp,
  Clock,
  Star,
  ArrowRight,
  Zap,
  Brain,
  Rocket,
  Globe,
  Shield,
  Target,
  Lightbulb,
  ChevronDown,
  X
} from 'lucide-react';

const InteractiveContentDiscovery2026 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Categories', icon: Sparkles, color: 'from-purple-600 to-blue-600' },
    { id: 'ai', name: 'Artificial Intelligence', icon: Brain, color: 'from-purple-600 to-pink-600' },
    { id: 'quantum', name: 'Quantum Computing', icon: Zap, color: 'from-blue-600 to-cyan-600' },
    { id: 'automation', name: 'Automation', icon: Target, color: 'from-green-600 to-teal-600' },
    { id: 'future-tech', name: 'Future Tech', icon: Rocket, color: 'from-orange-600 to-red-600' },
    { id: 'tutorials', name: 'Tutorials', icon: Lightbulb, color: 'from-yellow-600 to-orange-600' },
    { id: 'case-studies', name: 'Case Studies', icon: BookOpen, color: 'from-indigo-600 to-purple-600' }
  ];

  const contentTypes = [
    { id: 'all', name: 'All Types', icon: Sparkles },
    { id: 'video', name: 'Videos', icon: Play },
    { id: 'article', name: 'Articles', icon: BookOpen },
    { id: 'demo', name: 'Demos', icon: Code },
    { id: 'webinar', name: 'Webinars', icon: Users },
    { id: 'tutorial', name: 'Tutorials', icon: Lightbulb }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'Neural Interface Revolution: Direct Brain-Computer Integration',
      description: 'Explore the cutting-edge technology that enables direct communication between the human brain and computers.',
      category: 'ai',
      type: 'video',
      duration: '12 min',
      views: '2.3M',
      rating: 4.9,
      tags: ['neural-interface', 'brain-computer', 'future-tech'],
      thumbnail: '/api/placeholder/400/225',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum AI Fusion: The Next Computing Paradigm',
      description: 'Discover how quantum computing is revolutionizing artificial intelligence and machine learning.',
      category: 'quantum',
      type: 'article',
      duration: '8 min read',
      views: '1.8M',
      rating: 4.8,
      tags: ['quantum-computing', 'ai', 'fusion'],
      thumbnail: '/api/placeholder/400/225',
      featured: true
    },
    {
      id: 3,
      title: 'Autonomous Business Operations: Zero Human Intervention',
      description: 'Learn how to implement fully automated business processes that run without human oversight.',
      category: 'automation',
      type: 'demo',
      duration: '15 min',
      views: '1.5M',
      rating: 4.7,
      tags: ['automation', 'business', 'operations'],
      thumbnail: '/api/placeholder/400/225',
      featured: false
    },
    {
      id: 4,
      title: 'Synthetic Intelligence: Consciousness-Level AI Systems',
      description: 'Understand the development of AI systems that exhibit consciousness and creative thinking.',
      category: 'ai',
      type: 'webinar',
      duration: '45 min',
      views: '950K',
      rating: 4.6,
      tags: ['synthetic-intelligence', 'consciousness', 'ai'],
      thumbnail: '/api/placeholder/400/225',
      featured: false
    },
    {
      id: 5,
      title: 'Future Technology Predictions 2030-2040',
      description: 'Expert predictions about the technologies that will shape the next decade.',
      category: 'future-tech',
      type: 'video',
      duration: '25 min',
      views: '3.2M',
      rating: 4.9,
      tags: ['predictions', 'future', 'technology'],
      thumbnail: '/api/placeholder/400/225',
      featured: true
    },
    {
      id: 6,
      title: 'Quantum Neural Networks: A Complete Guide',
      description: 'Step-by-step tutorial on building and implementing quantum neural networks.',
      category: 'tutorials',
      type: 'tutorial',
      duration: '30 min',
      views: '1.2M',
      rating: 4.8,
      tags: ['quantum', 'neural-networks', 'tutorial'],
      thumbnail: '/api/placeholder/400/225',
      featured: false
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesType = selectedType === 'all' || item.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getTypeIcon = (type: string) => {
    const typeMap = {
      video: Play,
      article: BookOpen,
      demo: Code,
      webinar: Users,
      tutorial: Lightbulb
    };
    return typeMap[type] || Sparkles;
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Sparkles;
  };

  if (!isVisible) return null;

  return (
    <div className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Search className="w-4 h-4" />
            INTERACTIVE CONTENT DISCOVERY 2026
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Discover Your
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Perfect Content
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Use our advanced AI-powered discovery engine to find exactly the content 
            you need, when you need it.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for content, topics, or technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              <Filter className="w-5 h-5" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            <div className="text-gray-300">
              {filteredContent.length} content items found
            </div>
          </div>

          {/* Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6"
              >
                {/* Categories */}
                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-3">
                    {categories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
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

                {/* Content Types */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Content Types</h3>
                  <div className="flex flex-wrap gap-3">
                    {contentTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <button
                          key={type.id}
                          onClick={() => setSelectedType(type.id)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                            selectedType === type.id
                              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                              : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          {type.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredContent.map((item, index) => {
              const TypeIcon = getTypeIcon(item.type);
              const CategoryIcon = getCategoryIcon(item.category);
              const category = categories.find(cat => cat.id === item.category);
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 ${
                    item.featured ? 'ring-2 ring-purple-500/50' : ''
                  }`}
                >
                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
                    <div className="relative z-10 text-center">
                      <TypeIcon className="w-16 h-16 text-white/80 mx-auto mb-2" />
                      <div className="text-white/60 text-sm">{item.type.toUpperCase()}</div>
                    </div>
                    
                    {/* Play Button for Videos */}
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category and Type */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`p-1.5 rounded-lg bg-gradient-to-r ${category?.color || 'from-purple-600 to-blue-600'}`}>
                        <CategoryIcon className="w-3 h-3 text-white" />
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <TypeIcon className="w-3 h-3" />
                        {item.type}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {item.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        {item.rating}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                      {item.type === 'video' ? 'Watch Now' : item.type === 'article' ? 'Read More' : 'Explore'}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">No content found</h3>
            <p className="text-gray-300 mb-6">Try adjusting your search terms or filters</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedType('all');
              }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Our AI is constantly learning and adding new content. Request specific topics 
              or suggest new content categories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Request Content
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery2026;