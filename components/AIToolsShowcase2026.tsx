<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles
  Zap
  Brain
  Rocket
  Star
  TrendingUp
  Users
  Award,
  ChevronRight,
  Play,
  BookOpen,
  Lightbulb,
  Target,
  Globe,
  Code,
  Database,
  Shield,
  BarChart3,
  MessageSquare,
  Image,
  Video,
  FileText,
  Search,
  Settings,
  Cpu,
  Network
} from 'lucide-react';

const AIToolsShowcase2026 = () => {
  const [activeCategorysetActiveCategory] = useState('all');
  const [hoveredToolsetHoveredTool] = useState<number | null>(null);

  const categories = [
    { id: ''all', 'label: 'All 'Tools', 'icon: Gridcount: 24 },
    { id: ''automation', 'label: ''Automation', 'icon: Settingscount: 8 },
    { id: ''analytics', 'label: ''Analytics', 'icon: BarChart3count: 6 },
    { id: ''content', 'label: ''Content', 'icon: FileTextcount: 5 },
    { id: ''communication', 'label: ''Communication', 'icon: MessageSquarecount: 3 },
    { id: ''development', 'label: ''Development', 'icon: Codecount: 2 }
  ];

  const aiTools = [
    {
      id: 1,
      name: 'Neural Code Generator',
      description: 'AI-powered code generation that understands context and creates production-ready code',
      category: 'development',
      icon: Code,
      color: 'from-blue-600 to-cyan-600',
      features: ['Multi-language 'support', 'Context-aware 'generation', 'Real-time suggestions'],
      rating: 4.9,
      users: '50K+',
      price: 'Free',
      isNew: true,
      isPopular: true
    },
    {
      id: 2,
      name: 'Intelligent Data Analyzer',
      description: 'Advanced analytics platform that automatically discovers insights from your data',
      category: 'analytics',
      icon: BarChart3,
      color: 'from-green-600 to-emerald-600',
      features: ['Auto-'discovery', 'Predictive 'modeling', 'Visual dashboards'],
      rating: 4.8,
      users: '35K+',
      price: '$99/mo',
      isNew: false,
      isPopular: true
    },
    {
      id: 3,
      name: 'Content Creation Suite',
      description: 'Complete content generation platform for blogsocial mediand marketing',
      category: 'content',
      icon: FileText,
      color: 'from-purple-600 to-pink-600',
      features: ['Multi-format 'support', 'SEO 'optimization', 'Brand voice matching'],
      rating: 4.7,
      users: '75K+',
      price: '$149/mo',
      isNew: true,
      isPopular: false
    },
    {
      id: 4,
      name: 'Smart Automation Hub',
      description: 'Workflow automation that learns and adapts to your business processes',
      category: 'automation',
      icon: Settings,
      color: 'from-orange-600 to-red-600',
      features: ['Process 'learning', 'Custom 'workflows', 'Integration hub'],
      rating: 4.9,
      users: '40K+',
      price: '$199/mo',
      isNew: false,
      isPopular: true
    },
    {
      id: 5,
      name: 'AI Customer Assistant',
      description: 'Intelligent chatbot that provides personalized customer support 24/7',
      category: 'communication',
      icon: MessageSquare,
      color: 'from-indigo-600 to-purple-600',
      features: ['Natural 'conversations', 'Multi-'language', 'Sentiment analysis'],
      rating: 4.6,
      users: '60K+',
      price: '$79/mo',
      isNew: false,
      isPopular: false
    },
    {
      id: 6,
      name: 'Visual Content Creator',
      description: 'AI-powered image and video generation for marketing and social media',
      category: 'content',
      icon: Image,
      color: 'from-pink-600 to-rose-600',
      features: ['Image 'generation', 'Video 'creation', 'Style transfer'],
      rating: 4.8,
      users: '45K+',
      price: '$129/mo',
      isNew: true,
      isPopular: true
    },
    {
      id: 7,
      name: 'Predictive Analytics Engine',
      description: 'Machine learning platform for forecasting and trend analysis',
      category: 'analytics',
      icon: TrendingUp,
      color: 'from-teal-600 to-cyan-600',
      features: ['Time series 'analysis', 'Anomaly 'detection', 'Custom models'],
      rating: 4.7,
      users: '25K+',
      price: '$299/mo',
      isNew: false,
      isPopular: false
    },
    {
      id: 8,
      name: 'Smart Search Engine',
      description: 'AI-powered search that understands intent and context',
      category: 'automation',
      icon: Search,
      color: 'from-yellow-600 to-orange-600',
      features: ['Semantic 'search', 'Auto-'categorization', 'Smart filters'],
      rating: 4.5,
      users: '30K+',
      price: '$59/mo',
      isNew: false,
      isPopular: false
    }
  ];

  const filteredTools = activeCategory === 'all' 
    ? aiTools 
    : aiTools.filter(tool => tool.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50"></div>
        <div className="absolute inset-0">
          {[...Array(15)].map((_i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0-50],
                opacity: [010],
                scale: [0.510.5],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Cpu className="w-4 h-4" />
            AI Tools Showcase 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Powerful AI Tools for
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Every Business</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered tools designed to automateoptimizeand transform your business operations.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredTools.map((toolindex) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.id}
                  layout
                  initial={{ opacity: 0scale: 0.8 }}
                  animate={{ opacity: 1scale: 1 }}
                  exit={{ opacity: 0scale: 0.8 }}
                  transition={{ duration: 0.3delay: index * 0.05 }}
                  onHoverStart={() => setHoveredTool(tool.id)}
                  onHoverEnd={() => setHoveredTool(null)}
                  className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  {/* Badges */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-2">
                      {tool.isNew && (
                        <span className="text-xs font-medium text-green-300 bg-green-500/20 px-2 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                      {tool.isPopular && (
                        <span className="text-xs font-medium text-yellow-300 bg-yellow-500/20 px-2 py-1 rounded-full">
                          POPULAR
                        </span>
                      )}
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Tool Info */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {tool.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {tool.features.slice(02).map((featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                        <span className="text-xs text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-white font-medium">{tool.rating}</span>
                    </div>
                    <div className="text-sm text-gray-300">
                      {tool.users} users
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">
                      {tool.price}
                    </span>
                    <button className="flex items-center gap-1 text-cyan-300 hover:text-white transition-colors group">
                      <span className="text-sm">Try Now</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Hover Overlay */}
                  <AnimatePresence>
                    {hoveredTool === tool.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                      >
                        <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                          Get Started
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI tools to automate processesgain insightsand drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                View All Tools
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIToolsShowcase2026;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
