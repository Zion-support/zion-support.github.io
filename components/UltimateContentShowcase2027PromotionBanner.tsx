'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Zap, 
  Brain, 
  Rocket, 
  Globe,
  Star,
  TrendingUp,
  X
} from 'lucide-react';

const UltimateContentShowcase2027PromotionBanner = () => {
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
      animate={{ isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 } }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-sm font-medium">NEW 2027</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                ))}
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-4xl font-bold mb-3"
            >
              🚀 Ultimate Content Showcase 2027
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl"
            >
              Discover revolutionary AI, quantum computing, neural interfaces, and advanced automation technologies that will reshape our future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 group">
                Explore Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                Watch Demo
              </button>
            </motion.div>
          </div>

          {/* Right Content - Technology Icons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex items-center gap-6"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium">AI Innovation</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium">Automation</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium">Quantum</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium">Neural</span>
            </div>
          </motion.div>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6"
        >
          <div className="flex items-center justify-between text-sm text-white/80 mb-2">
            <span>Content Loading Progress</span>
            <span>87% Complete</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "87%" }}
              transition={{ duration: 2, delay: 1 }}
              className="h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
            />
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
        >
          <TrendingUp className="w-4 h-4 text-white" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
        >
          <Sparkles className="w-3 h-3 text-white" />
        </motion.div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
      >
        <X className="w-4 h-4 text-white" />
      </button>
    </motion.div>
  );
};

export default UltimateContentShowcase2027PromotionBanner;