<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain
  Zap
  Code
  BarChart3
  Image
  Shield
  Globe,
  ArrowRight
  Star
  Users,
  CheckCircle,
  X,
  Play,
  Rocket,
  TrendingUp,
  Award,
  Sparkles
} from 'lucide-react';

const AIToolsUltimateShowcase2026PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentToolsetCurrentTool] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate tools
    const interval = setInterval(() => {
      setCurrentTool(prev => (prev + 1) % tools.length);
    }2500);

    return () => clearInterval(interval);
  }[]);

  const tools = [
    {
      icon: Brain,
      name: 'AI Code Generator',
      category: 'Development',
      rating: 4.9,
      users: '200K+',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      name: 'Smart Task Manager',
      category: 'Productivity',
      rating: 4.8,
      users: '150K+',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      name: 'Predictive Analytics',
      category: 'Analytics',
      rating: 4.9,
      users: '90K+',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Image,
      name: 'AI Image Creator',
      category: 'Multimedia',
      rating: 4.9,
      users: '500K+',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      name: 'Threat Detector',
      category: 'Security',
      rating: 4.8,
      users: '100K+',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: Globe,
      name: 'Translation Hub',
      category: 'Communication',
      rating: 4.9,
      users: '300K+',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const categories = [
    { name: ''Productivity', 'count: '12 'tools', 'icon: Zap },
    { name: ''Development', 'count: '15 'tools', 'icon: Code },
    { name: ''Analytics', 'count: '8 'tools', 'icon: BarChart3 },
    { name: ''Multimedia', 'count: '10 'tools', 'icon: Image },
    { name: ''Security', 'count: '6 'tools', 'icon: Shield },
    { name: ''Communication', 'count: '9 'tools', 'icon: Globe }
  ];

  const features = [
    '50+ AI Tools Available',
    '1M+ Active Users',
    '99.9% Uptime Guarantee',
    'Free Trial Available'
  ];

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6ease: "easeOut" }}
          className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 border-b border-indigo-500/30"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-indigo-600/20 animate-pulse"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <div className="flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30">
                    <Sparkles className="w-4 h-4 text-indigo-400 mr-2" />
                    <span className="text-indigo-300 font-medium text-sm">AI TOOLS ULTIMATE 2026</span>
                  </div>
                  
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="ml-2 text-sm font-medium">4.8/5 Rating</span>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                  🚀 50+ Powerful AI Tools
                  <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    for Every Business Need
                  </span>
                </h2>

                <p className="text-lg text-gray-300 mb-6 max-w-2xl">
                  Discover our comprehensive collection of AI-powered tools for productivity
                  developmentanalyticsmultimediasecurityand communication. 
                  <span className="text-yellow-400 font-bold"> Start your free trial today!</span>
                </p>

                {/* Tool Rotation */}
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTool}
                      initial={{ opacity: 0x: 20 }}
                      animate={{ opacity: 1x: 0 }}
                      exit={{ opacity: 0x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${tools[currentTool].color}`}>
                        <tools[currentTool].icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white">{tools[currentTool].name}</div>
                        <div className="text-sm text-gray-300">
                          {tools[currentTool].category} • {tools[currentTool].rating}★ • {tools[currentTool].users}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Features */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6">
                  {features.map((featureindex) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-indigo-500/25">
                    <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Explore All Tools
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button className="group border-2 border-indigo-400 text-indigo-300 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-400 hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </button>
                </div>
              </div>

              {/* Right Content - Interactive Preview */}
              <div className="flex-shrink-0">
                <div className="relative">
                  {/* Main Card */}
                  <motion.div
                    initial={{ scale: 0.8opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6delay: 0.3 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 w-80 shadow-2xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">AI Tools Dashboard</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-400">Live</span>
                      </div>
                    </div>

                    {/* Categories Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {categories.slice(04).map((categoryindex) => {
                        const CategoryIcon = category.icon;
                        return (
                          <div key={index} className="bg-white/5 rounded-lg p-3 text-center">
                            <CategoryIcon className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                            <div className="text-sm font-bold text-white">{category.name}</div>
                            <div className="text-xs text-gray-400">{category.count}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Active Tool */}
                    <div className="bg-white/5 rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${tools[currentTool].color}`}>
                          <tools[currentTool].icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm">{tools[currentTool].name}</div>
                          <div className="text-xs text-gray-400">{tools[currentTool].category}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-3 h-3 fill-current mr-1" />
                          {tools[currentTool].rating}
                        </div>
                        <div className="text-gray-400">{tools[currentTool].users}</div>
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex justify-center gap-2">
                      {tools.map((_index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentTool ? 'bg-indigo-400 w-6' : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ 
                      y: [0-10],
                      rotate: [050]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                  >
                    NEW!
                  </motion.div>

                  <motion.div
                    animate={{ 
                      y: [010],
                      x: [050]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-emerald-400 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                  >
                    1M+ Users
                  </motion.div>

                  <motion.div
                    animate={{ 
                      scale: [1.1],
                      opacity: [0.710.7]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                    className="absolute top-1/2 -left-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                  >
                    Free Trial
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AIToolsUltimateShowcase2026PromotionBanner;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
