'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  ArrowRight, 
  Sparkles,
  TrendingUp,
  BookOpen,
  Play,
  Users,
  Star,
  Zap,
  Brain,
  Cpu,
  Globe,
  CheckCircle,
  Eye,
  Heart,
  Download
} from 'lucide-react';

const InteractiveContentDiscovery2026PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    'AI-Powered Search & Discovery',
    'Advanced Filtering & Sorting',
    'Personalized Recommendations',
    'Real-Time Content Updates'
  ];

  const contentTypes = [
    { icon: BookOpen, label: 'Articles', count: '342' },
    { icon: Play, label: 'Videos', count: '156' },
    { icon: TrendingUp, label: 'Case Studies', count: '89' },
    { icon: Search, label: 'Research', count: '50' }
  ];

  const stats = [
    { value: '1,247', label: 'Total Content' },
    { value: '10,000+', label: 'Monthly Views' },
    { value: '4.9/5', label: 'User Rating' },
    { value: '99%', label: 'Satisfaction' }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500/10 to-pink-500/10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-indigo-500/30">
              <Sparkles className="w-5 h-5 text-indigo-400 mr-2" />
              <span className="text-indigo-300 font-medium">Interactive Discovery Engine</span>
            </div>

            {/* Main Heading */}
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Interactive Content
                <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent"> Discovery</span>
                <br />
                <span className="text-3xl md:text-5xl">2026 Edition</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Explore our comprehensive library of cutting-edge content with AI-powered search, 
                intelligent filtering, and personalized recommendations that adapt to your interests.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center text-gray-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center"
              >
                Explore Content
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                Try Search
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Search Demo */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Search className="w-6 h-6 mr-2 text-indigo-400" />
                AI-Powered Search
              </h3>
              
              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for AI innovations, quantum computing..."
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-sm rounded-full border border-indigo-500/30">
                  neural-interface
                </span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-sm rounded-full border border-pink-500/30">
                  quantum-computing
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                  automation
                </span>
              </div>
            </div>

            {/* Content Types */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">
                Content Library
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {contentTypes.map((type, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-indigo-500/30 mb-3">
                      <type.icon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div className="text-white font-medium">{type.label}</div>
                    <div className="text-gray-400 text-sm">{type.count} items</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center"
                >
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Interactive Features Preview */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">
                Interactive Features
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-300">
                    <Filter className="w-4 h-4 mr-2" />
                    Advanced Filtering
                  </div>
                  <div className="w-8 h-4 bg-indigo-500 rounded-full flex items-center justify-end pr-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-300">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Trending Content
                  </div>
                  <div className="w-8 h-4 bg-indigo-500 rounded-full flex items-center justify-end pr-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-300">
                    <Star className="w-4 h-4 mr-2" />
                    Personalized Feed
                  </div>
                  <div className="w-8 h-4 bg-indigo-500 rounded-full flex items-center justify-end pr-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery2026PromotionBanner;