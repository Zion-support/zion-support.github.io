"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star
  TrendingUp
  Clock
  Users
  Heart
  Bookmark
  Share2
  Play
  Download,
  ArrowRight,
  Sparkles,
  Zap,
  Brain,
  Rocket,
  Target,
  Award,
  Globe,
  Lightbulb,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const RevolutionaryContentShowcase2026 = () => {
  const [activeSlidesetActiveSlide] = useState(0);
  const [favoritesetFavorites] = useState(new Set());
  const [bookmarksetBookmarks] = useState(new Set());

  const featuredContent = [
    {
      id: 1,
      title: 'AI 2026-2030 Ultimate Predictions',
      description: 'Comprehensive analysis of revolutionary AI breakthroughs that will reshape our world over the next five years. From neural interfaces to consciousness integration.',
      category: 'AI Predictions',
      type: 'Interactive Showcase',
      duration: '15 min',
      views: 12500,
      likes: 892,
      rating: 4.9,
      thumbnail: '/api/placeholder/800/400',
      featured: true,
      tags: [', 'AI', 'Predictions', 'Future', 'Technology'Revolutionary'],
      author: 'AI Research Team',
      publishedAt: '2025-01-15',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Quantum Neural Fusion: The Next Breakthrough',
      description: 'Deep dive into how quantum computing and neural networks will merge to create unprecedented AI capabilities that solve previously impossible problems.',
      category: 'Quantum Computing',
      type: 'Video Series',
      duration: '22 min',
      views: 8900,
      likes: 654,
      rating: 4.8,
      thumbnail: '/api/placeholder/800/400',
      featured: true,
      tags: [', 'Quantum', 'Neural 'Networks', 'AI', 'Computing', 'Breakthrough'],
      author: 'Quantum AI Lab',
      publishedAt: '2025-01-14',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Autonomous Business Operations 2026',
      description: 'Complete guide to implementing fully autonomous business systems and processes that eliminate human intervention in routine operations.',
      category: 'Automation',
      type: 'Comprehensive Guide',
      duration: '30 min',
      views: 15600,
      likes: 1203,
      rating: 4.9,
      thumbnail: '/api/placeholder/800/400',
      featured: true,
      tags: [', 'Automation', 'Business', 'Operations', 'AI'Autonomous'],
      author: 'Business AI Institute',
      publishedAt: '2025-01-13',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Neural Interface Implementation Tutorial',
      description: 'Step-by-step tutorial for building and implementing neural interface technologies that enable direct brain-computer communication.',
      category: 'Tutorials',
      type: 'Interactive Tutorial',
      duration: '45 min',
      views: 6700,
      likes: 445,
      rating: 4.7,
      thumbnail: '/api/placeholder/800/400',
      featured: false,
      tags: [', 'Tutorial', 'Neural 'Interface', 'Implementation'Technology'],
      author: 'NeuroTech Academy',
      publishedAt: '2025-01-12',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Consciousness Integration: The Future of AI',
      description: 'Exploring how AI systems will develop forms of consciousness and what it means for humanityethicsand the future of intelligence.',
      category: 'AI Philosophy',
      type: 'Deep Dive Article',
      duration: '25 min',
      views: 11200,
      likes: 891,
      rating: 4.8,
      thumbnail: '/api/placeholder/800/400',
      featured: true,
      tags: [', 'Consciousness', 'AI', 'Future', 'Philosophy'Ethics'],
      author: 'Consciousness Research Group',
      publishedAt: '2025-01-10',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const categories = [
    { id: ''all', 'name: 'All 'Content', 'count: 156icon: Globe },
    { id: 'ai-'predictions', 'name: 'AI 'Predictions', 'count: 42icon: Brain },
    { id: 'quantum-'computing', 'name: 'Quantum 'Computing', 'count: 28icon: Zap },
    { id: ''automation', 'name: ''Automation', 'count: 35icon: Rocket },
    { id: ''tutorials', 'name: ''Tutorials', 'count: 31icon: Play },
    { id: 'case-'studies', 'name: 'Case 'Studies', 'count: 20icon: Target }
  ];

  const stats = [
    { label: 'Total 'Content', 'value: '500+'icon: Globe },
    { label: 'Active 'Users', 'value: '50K+'icon: Users },
    { label: 'Content 'Views', 'value: '2M+'icon: TrendingUp },
    { label: 'Average 'Rating', 'value: '4.8'icon: Star }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featuredContent.length);
    }8000);
    return () => clearInterval(interval);
  }[]);

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

  const toggleBookmark = (id) => {
    setBookmarks(prev => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(id)) {
        newBookmarks.delete(id);
      } else {
        newBookmarks.add(id);
      }
      return newBookmarks;
    });
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % featuredContent.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>REVOLUTIONARY CONTENT 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Revolutionary Content
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Showcase 2026
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Discover the most groundbreaking AI and technology content that will shape the future
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {stats.map((statindex) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0scale: 0.8 }}
                  animate={{ opacity: 1scale: 1 }}
                  transition={{ delay: index * 0.1duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center min-w-[150px]"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Content Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Featured Content
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The most revolutionary and impactful content 'that', 's changing how we think about AI and technology
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0x: 100 }}
                animate={{ opacity: 1x: 0 }}
                exit={{ opacity: 0x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Content Image */}
                  <div className="relative h-80 lg:h-96">
                    <div className={`absolute inset-0 bg-gradient-to-br ${featuredContent[activeSlide].color} bg-opacity-20`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r ${featuredContent[activeSlide].color} flex items-center justify-center`}>
                          <Brain className="w-12 h-12 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-white mb-2">
                          {featuredContent[activeSlide].type}
                        </div>
                      </div>
                    </div>
                    
                    {/* Featured Badge */}
                    {featuredContent[activeSlide].featured && (
                      <div className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Featured
                      </div>
                    )}
                    
                    {/* Action Buttons */}
                    <div className="absolute top-6 right-6 flex gap-2">
                      <button
                        onClick={() => toggleFavorite(featuredContent[activeSlide].id)}
                        className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
                          favorites.has(featuredContent[activeSlide].id) 
                            ? 'bg-red-500/80 text-white' 
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${favorites.has(featuredContent[activeSlide].id) ? 'fill-current' : ''}`} />
                      </button>
                      <button
                        onClick={() => toggleBookmark(featuredContent[activeSlide].id)}
                        className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
                          bookmarks.has(featuredContent[activeSlide].id) 
                            ? 'bg-blue-500/80 text-white' 
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                      >
                        <Bookmark className={`w-5 h-5 ${bookmarks.has(featuredContent[activeSlide].id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm font-medium rounded-full">
                        {featuredContent[activeSlide].category}
                      </span>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">{featuredContent[activeSlide].rating}</span>
                      </div>
                    </div>

                    <h4 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                      {featuredContent[activeSlide].title}
                    </h4>

                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      {featuredContent[activeSlide].description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredContent[activeSlide].tags.map((tagindex) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/10 text-white text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-6 mb-8 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{featuredContent[activeSlide].views.toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        <span>{featuredContent[activeSlide].likes} likes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredContent[activeSlide].duration}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                        <Play className="w-5 h-5" />
                        {featuredContent[activeSlide].type.includes('Video') ? 'Watch Now' : 'Explore Content'}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      
                      <button className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                        <Share2 className="w-4 h-4" />
                        Share
                      </button>
                      
                      <button className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {featuredContent.map((_index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeSlide ? 'bg-purple-500 w-8' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Content Categories
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore content organized by topic and expertise level
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((categoryindex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{category.name}</h4>
              <p className="text-2xl font-bold text-purple-400">{category.count}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1duration: 0.8 }}
          className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Ready to Explore?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of innovatorsresearchersand technology enthusiasts who are already exploring the future of AI and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2">
              Start Exploring
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Get Recommendations
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;