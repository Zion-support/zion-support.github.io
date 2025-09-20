<<<<<<< HEAD
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain
  Zap
  ArrowRight
  Sparkles
  Code
  BarChart3
  Shield,
  X,
  Play
} from 'lucide-react';

export default function AIToolsShowcase2025PromotionBanner() {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  if (isDismissed) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6ease: "easeOut" }}
      className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 border-b border-purple-500/20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-purple-600/10 animate-pulse" />
      
      {/* Floating Elements */}
      <div className="absolute top-4 left-8 text-purple-400/20">
        <Brain className="w-6 h-6 animate-bounce" style={{ animationDelay: '0s' }} />
      </div>
      <div className="absolute top-6 right-12 text-pink-400/20">
        <Zap className="w-4 h-4 animate-bounce" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="absolute bottom-4 left-16 text-blue-400/20">
        <Code className="w-5 h-5 animate-bounce" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-6 right-8 text-green-400/20">
        <BarChart3 className="w-4 h-4 animate-bounce" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-2 h-2 text-white" />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-white">
                  🚀 New AI Tools Showcase 2025
                </h3>
                <p className="text-sm text-purple-200">
                  Discover revolutionary AI tools transforming industries
                </p>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Quantum Security</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Code className="w-4 h-4 text-blue-400" />
              <span>AI Code Assistant</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <BarChart3 className="w-4 h-4 text-purple-400" />
              <span>Neural Analytics</span>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            <button className="hidden sm:flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300 group">
              <Play className="w-4 h-4" />
              <span className="text-sm font-medium">Watch Demo</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg transition-all duration-300 group shadow-lg shadow-purple-500/25">
              <span className="text-sm font-medium">Explore Tools</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={() => setIsDismissed(true)}
              className="text-gray-400 hover:text-white transition-colors duration-300 p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Quantum Security</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Code className="w-4 h-4 text-blue-400" />
              <span>AI Code Assistant</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <BarChart3 className="w-4 h-4 text-purple-400" />
              <span>Neural Analytics</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Brain className="w-4 h-4 text-pink-400" />
              <span>AI Assistant</span>
            </div>
          </div>

          <div className="flex space-x-3">
            <button className="flex-1 flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300">
              <Play className="w-4 h-4" />
              <span className="text-sm font-medium">Watch Demo</span>
            </button>
            
            <button className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-all duration-300">
              <span className="text-sm font-medium">Explore</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-pulse" />
    </motion.div>
  );
}
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
