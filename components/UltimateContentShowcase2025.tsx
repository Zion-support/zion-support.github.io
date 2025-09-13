'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Users, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe, 
  Brain,
  Rocket,
  Target,
  Award,
  CheckCircle,
  Play,
  Download,
  Share2,
  Heart,
  MessageCircle,
  BookOpen,
  Lightbulb,
  Code,
  Database,
  Cloud,
  Smartphone,
  Laptop,
  Server
} from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('ai-solutions');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentCategories = {
    'ai-solutions': {
      title: 'AI-Powered Solutions',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Revolutionary AI technologies transforming businesses'
    },
    'automation': {
      title: 'Advanced Automation',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      description: 'Intelligent automation for maximum efficiency'
    },
    'quantum': {
      title: 'Quantum Computing',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      description: 'Next-generation quantum solutions'
    },
    'neural': {
      title: 'Neural Interfaces',
      icon: Cpu,
      color: 'from-green-500 to-teal-500',
      description: 'Brain-computer interface technologies'
    }
  };

  const featuredContent = [
    {
      id: 1,
      title: 'AI Consciousness Evolution Platform 2025',
      description: 'Revolutionary AI system achieving synthetic consciousness with 99.7% accuracy in complex reasoning tasks.',
      category: 'ai-solutions',
      image: '/api/placeholder/600/400',
      stats: { views: '2.3M', likes: '45K', shares: '12K' },
      tags: ['AI', 'Consciousness', 'Revolutionary', '2025'],
      featured: true,
      readTime: '8 min read',
      author: 'Dr. Sarah Chen',
      publishDate: '2025-01-15'
    },
    {
      id: 2,
      title: 'Quantum Neural Fusion Breakthrough',
      description: 'First successful integration of quantum computing with neural networks, achieving 1000x processing speed.',
      category: 'quantum',
      image: '/api/placeholder/600/400',
      stats: { views: '1.8M', likes: '38K', shares: '9K' },
      tags: ['Quantum', 'Neural', 'Breakthrough', 'Fusion'],
      featured: true,
      readTime: '12 min read',
      author: 'Prof. Michael Rodriguez',
      publishDate: '2025-01-12'
    },
    {
      id: 3,
      title: 'Autonomous Business Operations Suite',
      description: 'Complete automation platform reducing operational costs by 85% while increasing productivity by 300%.',
      category: 'automation',
      image: '/api/placeholder/600/400',
      stats: { views: '1.5M', likes: '32K', shares: '7K' },
      tags: ['Automation', 'Business', 'ROI', 'Efficiency'],
      featured: false,
      readTime: '6 min read',
      author: 'Alex Thompson',
      publishDate: '2025-01-10'
    },
    {
      id: 4,
      title: 'Neural Interface Revolution 2025',
      description: 'Direct brain-computer interface enabling thought-controlled computing with 99.9% accuracy.',
      category: 'neural',
      image: '/api/placeholder/600/400',
      stats: { views: '2.1M', likes: '41K', shares: '11K' },
      tags: ['Neural', 'Interface', 'BCI', 'Revolution'],
      featured: true,
      readTime: '10 min read',
      author: 'Dr. Elena Volkov',
      publishDate: '2025-01-08'
    },
    {
      id: 5,
      title: 'Edge AI Computing Platform',
      description: 'Distributed AI processing at the edge, reducing latency by 95% and enabling real-time decision making.',
      category: 'ai-solutions',
      image: '/api/placeholder/600/400',
      stats: { views: '1.2M', likes: '28K', shares: '5K' },
      tags: ['Edge AI', 'Computing', 'Real-time', 'Platform'],
      featured: false,
      readTime: '7 min read',
      author: 'James Wilson',
      publishDate: '2025-01-05'
    },
    {
      id: 6,
      title: 'Synthetic Intelligence Framework',
      description: 'Advanced framework for creating synthetic intelligence systems with human-level reasoning capabilities.',
      category: 'ai-solutions',
      image: '/api/placeholder/600/400',
      stats: { views: '1.9M', likes: '36K', shares: '8K' },
      tags: ['Synthetic', 'Intelligence', 'Framework', 'Reasoning'],
      featured: false,
      readTime: '9 min read',
      author: 'Dr. Maria Santos',
      publishDate: '2025-01-03'
    }
  ];

  const filteredContent = featuredContent.filter(item => 
    activeTab === 'all' || item.category === activeTab
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-white">Ultimate Content Showcase 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Revolutionary
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Content Hub
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the most advanced AI technologies, breakthrough innovations, and revolutionary solutions 
            that are reshaping the future of business and technology in 2025.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(contentCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                <span className="font-medium">{category.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredContent.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 ${
                item.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold">
                    <Star className="w-4 h-4 mr-1" />
                    Featured
                  </div>
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Play Button for Video Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {item.readTime}
                  </div>
                  <div className="flex items-center">
                    <span>{item.publishDate}</span>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold mr-3">
                    {item.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{item.author}</p>
                    <p className="text-xs text-gray-400">AI Research Scientist</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {item.stats.views}
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {item.stats.likes}
                    </div>
                    <div className="flex items-center">
                      <Share2 className="w-4 h-4 mr-1" />
                      {item.stats.shares}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read More
                  </button>
                  <button className="p-2 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20 hover:text-white transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20 hover:text-white transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <AnimatePresence>
                {hoveredCard === item.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent pointer-events-none"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies already using our revolutionary AI solutions 
              to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Transformation
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download Resources
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;