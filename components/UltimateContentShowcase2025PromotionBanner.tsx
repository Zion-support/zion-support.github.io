'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  X, 
  Star,
  Zap,
  Brain,
  Rocket,
  Globe
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
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 border-b border-purple-500/30 shadow-2xl"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Left Content */}
              <div className="flex items-center gap-4">
                <motion.div
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-full"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="text-white font-bold text-sm">NEW</span>
                </motion.div>
                
                <div className="hidden md:flex items-center gap-2 text-white">
                  <Brain className="w-5 h-5 text-purple-300" />
                  <Zap className="w-5 h-5 text-blue-300" />
                  <Rocket className="w-5 h-5 text-purple-300" />
                  <Globe className="w-5 h-5 text-blue-300" />
                </div>
              </div>

              {/* Center Content */}
              <div className="flex-1 text-center px-4">
                <motion.h2 
                  className="text-lg md:text-xl font-bold text-white mb-1"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    background: 'linear-gradient(90deg, #ffffff, #a855f7, #3b82f6, #ffffff)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  🚀 ULTIMATE CONTENT SHOWCASE 2025 - Revolutionary AI & Quantum Technologies
                </motion.h2>
                <p className="text-sm text-purple-200 hidden sm:block">
                  Discover cutting-edge AI, quantum computing, and neural interfaces that will transform your business
                </p>
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-3">
                <motion.button
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Star className="w-4 h-4" />
                  Explore Now
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                
                <motion.button
                  onClick={handleDismiss}
                  className="text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden mt-3 pt-3 border-t border-purple-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white">
                  <Brain className="w-4 h-4 text-purple-300" />
                  <Zap className="w-4 h-4 text-blue-300" />
                  <Rocket className="w-4 h-4 text-purple-300" />
                  <Globe className="w-4 h-4 text-blue-300" />
                </div>
                <p className="text-xs text-purple-200 text-right">
                  Revolutionary AI & Quantum Technologies
                </p>
              </div>
            </div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500/20 rounded-full"
              animate={{
                y: [0, 20, 0],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -top-2 -right-8 w-6 h-6 bg-blue-500/20 rounded-full"
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            <motion.div
              className="absolute top-1/2 -right-4 w-4 h-4 bg-purple-400/30 rounded-full"
              animate={{
                x: [0, -10, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UltimateContentShowcase2025PromotionBanner;