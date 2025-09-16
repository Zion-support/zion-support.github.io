"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Play
  ArrowRight
  Code
  Brain
  Zap
  Shield,
  X,
  Star,
  CheckCircle,
  Monitor,
  Smartphone,
  Laptop
} from 'lucide-react';

const InteractiveTechShowcase2026Banner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)3000);
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
      className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 border-b border-indigo-500/30"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 left-4 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-indigo-400 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="w-2.5 h-2.5 text-yellow-800" />
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-white">
                  🎮 Interactive Tech Showcase 2026
                </h2>
                <p className="text-indigo-200 text-sm">
                  Try our demos and tools - No commitment required!
                </p>
              </div>
            </div>

            {/* Feature Icons */}
            <div className="hidden md:flex items-center space-x-4 ml-8">
              <div className="flex items-center space-x-1 text-indigo-200">
                <Brain className="w-4 h-4" />
                <span className="text-sm">AI Demos</span>
              </div>
              <div className="flex items-center space-x-1 text-purple-200">
                <Zap className="w-4 h-4" />
                <span className="text-sm">Automation</span>
              </div>
              <div className="flex items-center space-x-1 text-pink-200">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Security</span>
              </div>
              <div className="flex items-center space-x-1 text-green-200">
                <Code className="w-4 h-4" />
                <span className="text-sm">Tools</span>
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Platform Icons */}
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-indigo-200">
                <Laptop className="w-4 h-4" />
                <span>Web</span>
              </div>
              <div className="flex items-center space-x-1 text-purple-200">
                <Smartphone className="w-4 h-4" />
                <span>Mobile</span>
              </div>
              <div className="flex items-center space-x-1 text-pink-200">
                <Monitor className="w-4 h-4" />
                <span>Desktop</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button className="group flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40">
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                <span>Try Demos</span>
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

        {/* Mobile Platform Icons */}
        <div className="md:hidden mt-4 flex justify-center space-x-6 text-sm">
          <div className="flex items-center space-x-1 text-indigo-200">
            <Laptop className="w-4 h-4" />
            <span>Web</span>
          </div>
          <div className="flex items-center space-x-1 text-purple-200">
            <Smartphone className="w-4 h-4" />
            <span>Mobile</span>
          </div>
          <div className="flex items-center space-x-1 text-pink-200">
            <Monitor className="w-4 h-4" />
            <span>Desktop</span>
          </div>
        </div>
      </div>

      {/* Pulse Effect */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="h-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-pulse"></div>
      </div>
    </motion.div>
  );
};

export default InteractiveTechShowcase2026Banner;