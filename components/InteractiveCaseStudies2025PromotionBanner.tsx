<<<<<<< HEAD
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp
  Users
  Award
  ArrowRight
  X,
  Play,
  Star,
  Target,
  Zap
} from 'lucide-react';

export default function InteractiveCaseStudies2025PromotionBanner() {
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
      className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 border-b border-blue-500/20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-blue-600/10 animate-pulse" />
      
      {/* Floating Elements */}
      <div className="absolute top-4 left-8 text-blue-400/20">
        <TrendingUp className="w-6 h-6 animate-bounce" style={{ animationDelay: '0s' }} />
      </div>
      <div className="absolute top-6 right-12 text-cyan-400/20">
        <Award className="w-4 h-4 animate-bounce" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="absolute bottom-4 left-16 text-green-400/20">
        <Target className="w-5 h-5 animate-bounce" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-6 right-8 text-purple-400/20">
        <Zap className="w-4 h-4 animate-bounce" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                  <Star className="w-2 h-2 text-white" />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-white">
                  🏆 Real Success Stories
                </h3>
                <p className="text-sm text-blue-200">
                  See how companies achieved 35%+ ROI with AI
                </p>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span>$2.3M Saved</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Users className="w-4 h-4 text-blue-400" />
              <span>94% Satisfaction</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Target className="w-4 h-4 text-purple-400" />
              <span>60% Faster</span>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            <button className="hidden sm:flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300 group">
              <Play className="w-4 h-4" />
              <span className="text-sm font-medium">Watch Stories</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 rounded-lg transition-all duration-300 group shadow-lg shadow-blue-500/25">
              <span className="text-sm font-medium">View Case Studies</span>
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
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span>$2.3M Saved</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Users className="w-4 h-4 text-blue-400" />
              <span>94% Satisfaction</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Target className="w-4 h-4 text-purple-400" />
              <span>60% Faster</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>4.9 Rating</span>
            </div>
          </div>

          <div className="flex space-x-3">
            <button className="flex-1 flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300">
              <Play className="w-4 h-4" />
              <span className="text-sm font-medium">Watch Stories</span>
            </button>
            
            <button className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-2 rounded-lg transition-all duration-300">
              <span className="text-sm font-medium">View Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 animate-pulse" />
    </motion.div>
  );
}
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
