'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  Rocket, 
  Star, 
  TrendingUp, 
  Users, 
  ArrowRight,
  CheckCircle,
  Sparkles,
  Target,
  Lightbulb,
  Cpu,
  Database,
  BookOpen,
  Video,
  FileText,
  Code,
  Search,
  Filter,
  Grid,
  List,
  Clock,
  ChevronDown
} from 'lucide-react';
import SEO from '../../../components/SEO';
import ErrorBoundary from '../../../components/ErrorBoundary';

const ContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentCategories = [
    {
      id: 'ai-breakthroughs',
      title: 'AI Breakthroughs 2026',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      description: 'Revolutionary AI technologies transforming industries',
      content: [
        {
          title: 'Quantum-Enhanced Neural Networks',
          description: 'Next-generation AI powered by quantum computing principles',
          type: 'article',
          readTime: '12 min',
          rating: 4.9,
          views: 15420,
          featured: true
        },
        {
          title: 'Autonomous Business Intelligence',
          description: 'AI systems that make strategic decisions without human intervention',
          type: 'video',
          readTime: '18 min',
          rating: 4.8,
          views: 12300,
          featured: true
        },
        {
          title: 'Predictive Analytics 2.0',
          description: 'Advanced forecasting models with 99.7% accuracy',
          type: 'tutorial',
          readTime: '25 min',
          rating: 4.7,
          views: 8900,
          featured: false
        }
      ]
    },
    {
      id: 'automation-solutions',
      title: 'Advanced Automation',
      icon: Cpu,
      color: 'from-green-600 to-teal-600',
      description: 'Cutting-edge automation technologies for business optimization',
      content: [
        {
          title: 'Intelligent Process Automation',
          description: 'AI-driven workflow optimization that learns and adapts',
          type: 'article',
          readTime: '15 min',
          rating: 4.8,
          views: 11200,
          featured: true
        },
        {
          title: 'Robotic Process Automation (RPA)',
          description: 'Complete guide to implementing RPA in enterprise environments',
          type: 'tutorial',
          readTime: '30 min',
          rating: 4.6,
          views: 15600,
          featured: false
        },
        {
          title: 'Smart Document Processing',
          description: 'AI-powered document analysis and data extraction',
          type: 'video',
          readTime: '20 min',
          rating: 4.9,
          views: 9800,
          featured: true
        }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: Database,
      color: 'from-indigo-600 to-purple-600',
      description: 'Harnessing quantum power for complex problem solving',
      content: [
        {
          title: 'Quantum Machine Learning',
          description: 'Machine learning algorithms enhanced by quantum computing',
          type: 'article',
          readTime: '22 min',
          rating: 4.9,
          views: 18700,
          featured: true
        },
        {
          title: 'Quantum Cryptography',
          description: 'Unbreakable security through quantum principles',
          type: 'tutorial',
          readTime: '35 min',
          rating: 4.7,
          views: 13400,
          featured: false
        },
        {
          title: 'Quantum Optimization',
          description: 'Solving complex optimization problems with quantum algorithms',
          type: 'video',
          readTime: '28 min',
          rating: 4.8,
          views: 11200,
          featured: true
        }
      ]
    },
    {
      id: 'future-tech',
      title: 'Future Technologies',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      description: 'Emerging technologies defining the next decade',
      content: [
        {
          title: 'Neural Interface Technology',
          description: 'Direct brain-computer interfaces for enhanced productivity',
          type: 'article',
          readTime: '18 min',
          rating: 4.9,
          views: 22100,
          featured: true
        },
        {
          title: 'Augmented Reality Solutions',
          description: 'AR applications for business and enterprise environments',
          type: 'video',
          readTime: '24 min',
          rating: 4.6,
          views: 16800,
          featured: false
        },
        {
          title: 'Edge Computing Networks',
          description: 'Distributed computing for real-time applications',
          type: 'tutorial',
          readTime: '32 min',
          rating: 4.8,
          views: 14500,
          featured: true
        }
      ]
    }
  ];

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

  const filteredContent = contentCategories[activeTab]?.content.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  if (!isVisible) return null;

  return (
    <ErrorBoundary>
      <SEO
        title="Content Showcase 2026 - Zion Tech Group"
        description="Explore our comprehensive library of cutting-edge technology content, tutorials, and insights for 2026."
        keywords="AI content, technology tutorials, automation guides, quantum computing, future tech, 2026"
        url="/content-showcase-2026"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Content Showcase 2026
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Revolutionary Technology Content
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              Discover the most advanced technology solutions, tutorials, and insights that are reshaping industries and creating unprecedented opportunities for business growth.
            </p>
            
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search content, topics, or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-xl focus:ring-2 focus:ring-white/50 focus:outline-none"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Category Tabs */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="py-12 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {contentCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                      activeTab === index
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md hover:shadow-lg'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-semibold">{category.title}</div>
                      <div className="text-sm opacity-80">{category.description}</div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Content Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                {contentCategories[activeTab]?.title} Content
              </h2>
              <div className="flex items-center space-x-4">
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
              </div>
            </div>

            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              <AnimatePresence mode="wait">
                {filteredContent.map((item, index) => {
                  const TypeIcon = getTypeIcon(item.type);
                  const typeColor = getTypeColor(item.type);
                  
                  return (
                    <motion.div
                      key={`${activeTab}-${index}`}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group ${
                        viewMode === 'list' ? 'flex' : ''
                      }`}
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

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </motion.button>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get started with our cutting-edge technology solutions and join thousands of businesses already experiencing unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
    </ErrorBoundary>
  );
};

export default ContentShowcase2026;