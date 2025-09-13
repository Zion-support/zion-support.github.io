'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  TrendingUp,
  X,
  Play,
  BookOpen
} from 'lucide-react';

const UltimateContentShowcase2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -100 
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-5 rounded-full"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -bottom-10 -left-10 w-32 h-32 bg-white opacity-5 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-blur-sm text-sm font-medium mb-4"
            >
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              NEW: Ultimate Content Showcase 2025
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            >
              Discover Revolutionary AI Breakthroughs
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl"
            >
              Explore cutting-edge AI innovations, enterprise solutions, and success stories 
              delivering extraordinary ROI. See what's possible in 2025.
            </motion.p>

            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-6 justify-center lg:justify-start"
            >
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-3 py-2 rounded-full">
                <Brain className="w-4 h-4" />
                <span className="text-sm font-medium">Quantum-Neural Fusion</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-3 py-2 rounded-full">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">2,500% ROI</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-3 py-2 rounded-full">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">10,000x Faster</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#ultimate-content-showcase"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100 transition-colors group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Explore Showcase
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/ai-2025-breakthroughs"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-blue-600 transition-colors group"
              >
                <BookOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex-shrink-0 lg:ml-8"
          >
            <div className="relative">
              {/* Main Visual */}
              <div className="w-80 h-80 bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 flex flex-col items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4"
                >
                  <Star className="w-16 h-16 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-2">2025 Breakthroughs</h3>
                <p className="text-center opacity-80">
                  Revolutionary AI innovations transforming industries
                </p>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center"
              >
                <Brain className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
        aria-label="Dismiss banner"
      >
        <X className="w-5 h-5" />
      </button>
    </motion.div>
  );
};

export default UltimateContentShowcase2025PromotionBanner;