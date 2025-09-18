<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Play
  Zap
  Brain
  Code
  BarChart3
  Image,
  ArrowRight,
  Star,
  X,
  Sparkles
} from 'lucide-react';

const InteractiveAIToolsDemo2027PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentToolsetCurrentTool] = useState(0);

  const tools = [
    { icon: Codename: 'Code 'Generator', 'color: 'from-blue-500 to-cyan-500' },
    { icon: BarChart3name: 'Data 'Analyzer', 'color: 'from-green-500 to-emerald-500' },
    { icon: Imagename: 'Image 'Generator', 'color: 'from-purple-500 to-pink-500' },
    { icon: Brainame: 'AI 'Assistant', 'color: 'from-orange-500 to-red-500' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)1500);
    return () => clearTimeout(timer);
  }[]);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentTool(prev => (prev + 1) % tools.length);
      }2000);
      return () => clearInterval(interval);
    }
  }[isVisibletools.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 } }}
      transition={{ duration: 0.8ease: "easeOut" }}
      className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0x: -30 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.6delay: 0.2 }}
              className="flex items-center gap-3 mb-3"
            >
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <Play className="w-4 h-4 text-yellow-300" />
                <span className="text-sm font-medium">INTERACTIVE DEMO</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                ))}
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0x: -30 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.6delay: 0.3 }}
              className="text-xl md:text-3xl font-bold mb-2"
            >
              🎮 Try AI Tools Live - Interactive Demo 2027
            </motion.h2>

            <motion.p
              initial={{ opacity: 0x: -30 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.6delay: 0.4 }}
              className="text-base md:text-lg text-white/90 mb-4 max-w-2xl"
            >
              Experience the power of AI tools with live demonstrations. Generate codeanalyze datacreate imagesand more in real-time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0x: -30 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.6delay: 0.5 }}
              className="flex flex-wrap items-center gap-3"
            >
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 group">
                <Play className="w-4 h-4" />
                Try Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                View All Tools
              </button>
            </motion.div>
          </div>

          {/* Right Content - Rotating Tool Icons */}
          <motion.div
            initial={{ opacity: 0x: 30 }}
            animate={{ opacity: 1x: 0 }}
            transition={{ duration: 0.6delay: 0.4 }}
            className="hidden lg:flex items-center gap-6"
          >
            <div className="relative w-20 h-20">
              {tools.map((toolindex) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0scale: 0.8 }}
                  animate={{
                    opacity: currentTool === index ? 1 : 0,
                    scale: currentTool === index ? 1 : 0.8
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs font-medium mt-1 text-center">{tool.name}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {tools.length}+
              </div>
              <div className="text-sm text-white/80">
                AI Tools
              </div>
            </div>
          </motion.div>
        </div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6delay: 0.8 }}
          className="mt-4"
        >
          <div className="flex items-center justify-between text-sm text-white/80 mb-2">
            <span>Demo Loading</span>
            <span>Ready to Use</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-1.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3delay: 1 }}
              className="h-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
            />
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0-80],
            rotate: [030]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-3 right-3 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
        >
          <Sparkles className="w-3 h-3 text-white" />
        </motion.div>

        <motion.div
          animate={{
            y: [080],
            rotate: [0-30]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-3 left-3 w-4 h-4 bg-white/20 rounded-full flex items-center justify-center"
        >
          <Zap className="w-2 h-2 text-white" />
        </motion.div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-3 right-3 w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
      >
        <X className="w-3 h-3 text-white" />
      </button>
    </motion.div>
  );
};

export default InteractiveAIToolsDemo2027PromotionBanner;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
