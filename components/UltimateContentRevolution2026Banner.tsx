<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles
  ArrowRight
  Zap
  Brain
  Shield
  Globe,
  X,
  Play,
  Star
} from 'lucide-react';

const UltimateContentRevolution2026Banner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)1000);
    return () => clearTimeout(timer);
  }[]);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ 
        opacity: isVisible ? 1 : 0
        y: isVisible ? 0 : -100 
      }}
      transition={{ 
        duration: 0.8
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-pink-900 to-blue-900 border-b border-purple-500/30"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-8 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="w-2.5 h-2.5 text-yellow-800" />
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-white">
                  🚀 Ultimate Content Revolution 2026
                </h2>
                <p className="text-purple-200 text-sm">
                  Experience the future of AI and automation - Live Now!
                </p>
              </div>
            </div>

            {/* Feature Icons */}
            <div className="hidden md:flex items-center space-x-4 ml-8">
              <div className="flex items-center space-x-1 text-purple-200">
                <Brain className="w-4 h-4" />
                <span className="text-sm">AI Breakthroughs</span>
              </div>
              <div className="flex items-center space-x-1 text-pink-200">
                <Zap className="w-4 h-4" />
                <span className="text-sm">Automation</span>
              </div>
              <div className="flex items-center space-x-1 text-blue-200">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Security</span>
              </div>
              <div className="flex items-center space-x-1 text-green-200">
                <Globe className="w-4 h-4" />
                <span className="text-sm">Global Impact</span>
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Stats */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <div className="text-center">
                <div className="text-white font-bold">2.5M+</div>
                <div className="text-purple-200">Users</div>
              </div>
              <div className="text-center">
                <div className="text-white font-bold">500%</div>
                <div className="text-pink-200">ROI</div>
              </div>
              <div className="text-center">
                <div className="text-white font-bold">150+</div>
                <div className="text-blue-200">Countries</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button className="group flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                <span>Explore Now</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={handleDismiss}
                className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="md:hidden mt-4 flex justify-center space-x-6 text-sm">
          <div className="text-center">
            <div className="text-white font-bold">2.5M+</div>
            <div className="text-purple-200">Users</div>
          </div>
          <div className="text-center">
            <div className="text-white font-bold">500%</div>
            <div className="text-pink-200">ROI</div>
          </div>
          <div className="text-center">
            <div className="text-white font-bold">150+</div>
            <div className="text-blue-200">Countries</div>
          </div>
        </div>
      </div>

      {/* Pulse Effect */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
        <div className="h-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse"></div>
      </div>
    </motion.div>
  );
};

export default UltimateContentRevolution2026Banner;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
