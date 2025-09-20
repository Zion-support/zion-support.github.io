"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain
  Zap
  Rocket
  Star
  Play
  Download
  Share2
  Heart,
  BookOpen,
  Users,
  Clock,
  ArrowRight,
  ChevronRight,
  Search,
  Filter,
  Grid,
  List,
  Sparkles,
  Target,
  Award,
  TrendingUp,
  Globe,
  Shield,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Laptop
} from 'lucide-react';

const InteractiveAIToolsShowcase2027 = () => {
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [viewModesetViewMode] = useState('grid');
  const [searchQuerysetSearchQuery] = useState('');
  const [selectedToolsetSelectedTool] = useState(null);
  const [isPlayingsetIsPlaying] = useState(false);

  const categories = [
    { id: ''all', 'name: 'All 'Tools', 'icon: Gridcolor: 'from-purple-600 to-pink-600' },
    { id: 'ai-'assistants', 'name: 'AI 'Assistants', 'icon: Braincolor: 'from-blue-600 to-cyan-600' },
    { id: ''automation', 'name: ''Automation', 'icon: Zapcolor: 'from-green-600 to-emerald-600' },
    { id: ''analytics', 'name: ''Analytics', 'icon: TrendingUpcolor: 'from-orange-600 to-red-600' },
    { id: ''development', 'name: ''Development', 'icon: Cpucolor: 'from-indigo-600 to-purple-600' },
    { id: ''security', 'name: ''Security', 'icon: Shieldcolor: 'from-red-600 to-pink-600' }
  ];

  const aiTools = [
    {
      id: 1,
      name: "Neural Consciousness AI",
      description: "Advanced AI system with near-human consciousness capabilitiescapable of complex reasoning and emotional intelligence.",
      category: "ai-assistants",
      image: "/api/placeholder/400/300",
      rating: 4.9,
      downloads: "2.3M",
      price: "Free",
      tags: ["AI"Consciousness"Neural Networks"2027"],
      features: ["Natural Language Processing"Emotional Intelligence"Complex Reasoning"Learning Capabilities"],
      demo: true,
      featured: true
    },
    {
      id: 2,
      name: "Quantum Automation Suite",
      description: "Revolutionary automation platform powered by quantum computing for unprecedented processing speeds.",
      category: "automation",
      image: "/api/placeholder/400/300",
      rating: 4.8,
      downloads: "1.8M",
      price: "$299/month",
      tags: ["Quantum"Automation"High Performance"2027"],
      features: ["Quantum Processing"Real-time Automation"Scalable Architecture"Advanced Analytics"],
      demo: true,
      featured: true
    },
    {
      id: 3,
      name: "Predictive Analytics Engine",
      description: "AI-powered analytics platform that predicts future trends and behaviors with 99.7% accuracy.",
      category: "analytics",
      image: "/api/placeholder/400/300",
      rating: 4.7,
      downloads: "3.1M",
      price: "$199/month",
      tags: ["Analytics"Prediction"Machine Learning"2027"],
      features: ["Predictive Modeling"Real-time Analysis"Custom Dashboards"API Integration"],
      demo: true,
      featured: false
    },
    {
      id: 4,
      name: "Code Generation AI",
      description: "Advanced AI that generatesreviewsand optimizes code in multiple programming languages.",
      category: "development",
      image: "/api/placeholder/400/300",
      rating: 4.9,
      downloads: "4.2M",
      price: "Free",
      tags: ["Development"Code Generation"AI"2027"],
      features: ["Multi-language Support"Code Review"Optimization"Documentation"],
      demo: true,
      featured: true
    },
    {
      id: 5,
      name: "Quantum Security Vault",
      description: "Next-generation security platform using quantum encryption to protect against all known threats.",
      category: "security",
      image: "/api/placeholder/400/300",
      rating: 4.8,
      downloads: "1.5M",
      price: "$399/month",
      tags: ["Security"Quantum"Encryption"2027"],
      features: ["Quantum Encryption"Threat Detection"Zero Trust"Compliance"],
      demo: false,
      featured: false
    },
    {
      id: 6,
      name: "Neural Interface SDK",
      description: "Development kit for creating brain-computer interface applications and neural control systems.",
      category: "development",
      image: "/api/placeholder/400/300",
      rating: 4.6,
      downloads: "890K",
      price: "$599/month",
      tags: ["Neural Interface"SDK"BCI"2027"],
      features: ["Neural Signal Processing"Real-time Control"Multi-platform"Documentation"],
      demo: true,
      featured: false
    }
  ];

  const filteredTools = aiTools.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredTools = filteredTools.filter(tool => tool.featured);

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            animate={{
              x: [0Math.random() * 1000],
              y: [0Math.random() * 1000],
              scale: [010],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            INTERACTIVE AI TOOLS SHOWCASE 2027
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Revolutionary
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}AI Tools
            </span>
            <br />
            <span className="text-4xl md:text-6xl">Showcase</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover and interact with the most advanced AI tools and technologies 
            that are transforming industries in 2027.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className={`group flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                        selectedCategory === category.id
                          ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                          : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-semibold">{category.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-white/10 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Tools */}
        {featuredTools.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-6 h-6 text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">Featured AI Tools</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTools.map((toolindex) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5delay: index * 0.1 }}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedTool(tool)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-white text-sm font-semibold">{tool.rating}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex gap-2">
                        {tool.tags.slice(02).map((tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    {tool.demo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                        >
                          <Play className="w-6 h-6 text-white ml-1" />
                        </motion.button>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {tool.name}
                      </h3>
                      <span className="text-lg font-bold text-green-400">{tool.price}</span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {tool.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          {tool.downloads}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {tool.rating}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                        {tool.demo ? 'Try Demo' : 'Learn More'}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button className="p-3 border border-white/30 text-white rounded-xl hover:bg-white/10 transition-all duration-300">
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">All AI Tools</h2>
            <div className="text-gray-300">
              Showing {filteredTools.length} of {aiTools.length} tools
            </div>
          </div>
          
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredTools.map((toolindex) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5delay: index * 0.05 }}
                className={`group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 cursor-pointer ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
                onClick={() => setSelectedTool(tool)}
              >
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'w-48 aspect-video' : 'aspect-video'
                }`}>
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-white text-sm font-semibold">{tool.rating}</span>
                    </div>
                  </div>
                  {tool.demo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                      >
                        <Play className="w-5 h-5 text-white ml-1" />
                      </motion.button>
                    </div>
                  )}
                </div>
                
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {tool.name}
                    </h3>
                    <span className="text-lg font-bold text-green-400">{tool.price}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {tool.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.tags.slice(03).map((tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        {tool.downloads}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {tool.rating}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                      {tool.demo ? 'Try Demo' : 'Learn More'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="p-3 border border-white/30 text-white rounded-xl hover:bg-white/10 transition-all duration-300">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="p-3 border border-white/30 text-white rounded-xl hover:bg-white/10 transition-all duration-300">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-12 backdrop-blur-sm border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI tools to automate
              optimizeand revolutionize their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <Rocket className="w-5 h-5" />
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                <Globe className="w-5 h-5" />
                View All Tools
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tool Detail Modal */}
      <AnimatePresence>
        {selectedTool && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTool(null)}
          >
            <motion.div
              initial={{ scale: 0.8opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8opacity: 0 }}
              className="bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedTool.name}</h2>
                    <p className="text-gray-300">{selectedTool.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedTool(null)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={selectedTool.image}
                      alt={selectedTool.name}
                      className="w-full aspect-video object-cover rounded-2xl mb-6"
                    />
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="font-semibold">{selectedTool.rating}</span>
                        </div>
                        <div className="text-gray-300">
                          {selectedTool.downloads} downloads
                        </div>
                        <div className="text-green-400 font-semibold">
                          {selectedTool.price}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {selectedTool.tags.map((tagindex) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Features</h3>
                    <ul className="space-y-2 mb-6">
                      {selectedTool.features.map((featureindex) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex gap-3">
                      <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                        {selectedTool.demo ? 'Try Demo' : 'Get Started'}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button className="p-3 border border-white/30 text-white rounded-xl hover:bg-white/10 transition-all duration-300">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="p-3 border border-white/30 text-white rounded-xl hover:bg-white/10 transition-all duration-300">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveAIToolsShowcase2027;
