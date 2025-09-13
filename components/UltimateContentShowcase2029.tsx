'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  Star, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowRight,
  Play,
  BookOpen,
  Lightbulb,
  Target,
  Award,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const UltimateContentShowcase2029 = () => {
  const [activeTab, setActiveTab] = useState('ai-innovations');
  const [hoveredCard, setHoveredCard] = useState(null);

  const contentSections = {
    'ai-innovations': {
      title: 'Revolutionary AI Innovations 2029',
      subtitle: 'Discover the future of artificial intelligence',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      content: [
        {
          title: 'Quantum Neural Networks',
          description: 'Breakthrough in quantum computing and neural network fusion',
          image: '/api/placeholder/400/250',
          category: 'Quantum AI',
          readTime: '8 min read',
          featured: true,
          stats: { views: '2.3M', likes: '45K', shares: '12K' }
        },
        {
          title: 'Conscious AI Systems',
          description: 'The emergence of self-aware artificial intelligence',
          image: '/api/placeholder/400/250',
          category: 'Consciousness',
          readTime: '12 min read',
          featured: true,
          stats: { views: '1.8M', likes: '38K', shares: '9K' }
        },
        {
          title: 'Edge AI Revolution',
          description: 'Decentralized AI processing at the edge',
          image: '/api/placeholder/400/250',
          category: 'Edge Computing',
          readTime: '6 min read',
          featured: false,
          stats: { views: '1.2M', likes: '25K', shares: '6K' }
        },
        {
          title: 'Synthetic Intelligence',
          description: 'Creating artificial minds that think and feel',
          image: '/api/placeholder/400/250',
          category: 'Synthetic Intelligence',
          readTime: '10 min read',
          featured: true,
          stats: { views: '3.1M', likes: '67K', shares: '18K' }
        }
      ]
    },
    'business-transformation': {
      title: 'Business Transformation 2029',
      subtitle: 'Revolutionary business solutions and strategies',
      icon: TrendingUp,
      color: 'from-green-600 to-emerald-600',
      content: [
        {
          title: 'Autonomous Business Operations',
          description: 'Fully automated business processes and decision making',
          image: '/api/placeholder/400/250',
          category: 'Automation',
          readTime: '7 min read',
          featured: true,
          stats: { views: '1.9M', likes: '42K', shares: '11K' }
        },
        {
          title: 'Quantum Business Intelligence',
          description: 'Quantum-powered analytics and business insights',
          image: '/api/placeholder/400/250',
          category: 'Analytics',
          readTime: '9 min read',
          featured: true,
          stats: { views: '2.1M', likes: '48K', shares: '13K' }
        },
        {
          title: 'Neural Market Prediction',
          description: 'AI-powered market forecasting and trading',
          image: '/api/placeholder/400/250',
          category: 'Finance',
          readTime: '11 min read',
          featured: false,
          stats: { views: '1.6M', likes: '35K', shares: '8K' }
        }
      ]
    },
    'future-tech': {
      title: 'Future Technology 2029',
      subtitle: 'Cutting-edge technologies shaping tomorrow',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      content: [
        {
          title: 'Neural Interface Revolution',
          description: 'Direct brain-computer interfaces for seamless interaction',
          image: '/api/placeholder/400/250',
          category: 'Neural Interfaces',
          readTime: '13 min read',
          featured: true,
          stats: { views: '2.8M', likes: '59K', shares: '16K' }
        },
        {
          title: 'Quantum Internet',
          description: 'Ultra-secure quantum communication networks',
          image: '/api/placeholder/400/250',
          category: 'Quantum Computing',
          readTime: '8 min read',
          featured: true,
          stats: { views: '2.2M', likes: '46K', shares: '12K' }
        },
        {
          title: 'Holographic Displays',
          description: '3D holographic technology for immersive experiences',
          image: '/api/placeholder/400/250',
          category: 'Display Technology',
          readTime: '6 min read',
          featured: false,
          stats: { views: '1.4M', likes: '31K', shares: '7K' }
        }
      ]
    }
  };

  const tabs = [
    { id: 'ai-innovations', label: 'AI Innovations', icon: Brain },
    { id: 'business-transformation', label: 'Business', icon: TrendingUp },
    { id: 'future-tech', label: 'Future Tech', icon: Rocket }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Ultimate Content Showcase 2029</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
            Revolutionary Content
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore the most groundbreaking innovations, business transformations, and future technologies that are reshaping our world in 2029.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {contentSections[activeTab].content.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(item.title)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      <span>FEATURED</span>
                    </div>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-sm">{item.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{item.stats.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{item.stats.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ExternalLink className="w-4 h-4" />
                        <span>{item.stats.shares}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore the Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of innovators, entrepreneurs, and tech enthusiasts who are already shaping tomorrow's world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>Start Learning</span>
              </button>
              <button className="bg-white/10 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                <Lightbulb className="w-5 h-5" />
                <span>Get Inspired</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2029;