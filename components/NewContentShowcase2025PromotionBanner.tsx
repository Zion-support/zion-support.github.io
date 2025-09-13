'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Star, 
  Zap, 
  Brain, 
  Rocket, 
  TrendingUp,
  X,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

const NewContentShowcase2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    'AI Breakthroughs 2025',
    'Quantum Computing Revolution',
    'Advanced Automation Solutions',
    'Future Technology Preview'
  ];

  const stats = [
    { value: '2.5M+', label: 'Active Users' },
    { value: '99.9%', label: 'Success Rate' },
    { value: '150+', label: 'Countries' },
    { value: '47', label: 'Awards' }
  ];

  if (isDismissed || !isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-pink-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-4 left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-8 right-8 w-16 h-16 bg-pink-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute bottom-4 left-1/4 w-12 h-12 bg-blue-500/20 rounded-full blur-md animate-pulse delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                NEW CONTENT 2025
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Revolutionary Technology
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Showcase
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl">
                Discover cutting-edge AI breakthroughs, quantum computing innovations, and advanced automation solutions 
                that are reshaping our world in 2025.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-3 mb-6"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-4 gap-4 mb-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                <Play className="w-5 h-5" />
                Explore Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 border border-white/20">
                <Star className="w-5 h-5" />
                Get Early Access
              </button>
            </motion.div>
          </div>

          {/* Right Content - Technology Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-shrink-0"
          >
            <div className="relative w-80 h-80">
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50">
                <Sparkles className="w-12 h-12 text-white" />
              </div>

              {/* Orbiting Technology Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-purple-400 rounded-full"
                  style={{
                    left: `${20 + (i * 10)}%`,
                    top: `${15 + (i * 8)}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </motion.div>
  );
};

export default NewContentShowcase2025PromotionBanner;