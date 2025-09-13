'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Brain, 
  Zap, 
  Cpu, 
  Rocket,
  Star,
  TrendingUp,
  X
} from 'lucide-react';

const AI2025_2026UltimateInnovationPromotionBanner = () => {
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
          className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 border-b border-purple-500/30 overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 animate-pulse"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-4 left-8 animate-bounce">
            <Brain className="w-6 h-6 text-purple-300 opacity-60" />
          </div>
          <div className="absolute top-6 right-12 animate-bounce delay-300">
            <Zap className="w-5 h-5 text-blue-300 opacity-60" />
          </div>
          <div className="absolute bottom-4 left-16 animate-bounce delay-700">
            <Cpu className="w-4 h-4 text-cyan-300 opacity-60" />
          </div>
          <div className="absolute bottom-6 right-8 animate-bounce delay-1000">
            <Rocket className="w-5 h-5 text-pink-300 opacity-60" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="flex items-center justify-center lg:justify-start gap-3 mb-3"
                >
                  <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    <Sparkles className="w-4 h-4" />
                    NEW 2025-2026
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-2xl lg:text-3xl font-bold text-white mb-2"
                >
                  🚀 Ultimate AI Innovation Showcase 2025-2026
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="text-lg text-purple-100 mb-4 max-w-2xl"
                >
                  Experience revolutionary AI breakthroughs, quantum computing, and neural interfaces that will transform your business forever!
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="flex flex-wrap items-center gap-4 text-sm text-purple-200"
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span>5000% Performance Increase</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>100x Faster Processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-blue-400" />
                    <span>99.9% Accuracy Rate</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Content - CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 items-center"
              >
                <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3">
                  <span>Explore Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="text-purple-200 hover:text-white px-6 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10">
                  Watch Demo
                </button>
              </motion.div>

              {/* Dismiss Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.3 }}
                onClick={handleDismiss}
                className="absolute top-4 right-4 text-purple-300 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AI2025_2026UltimateInnovationPromotionBanner;