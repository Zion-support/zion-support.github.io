'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Rocket,
  CheckCircle,
  X,
  Play,
  TrendingUp
} from 'lucide-react';

const UltimateContentShowcase2026PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  const handlePlay = () => {
    setIsPlaying(true);
    // Simulate video play
    setTimeout(() => setIsPlaying(false), 3000);
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden"
        >
          {/* Background with animated gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
            <div className="absolute inset-0 bg-black/20"></div>
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full">
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
                className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
              />
              <motion.div
                animate={{ 
                  x: [0, -80, 0],
                  y: [0, 60, 0],
                  rotate: [360, 180, 0]
                }}
                transition={{ 
                  duration: 25, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400/20 rounded-full blur-lg"
              />
              <motion.div
                animate={{ 
                  x: [0, 120, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-400/20 rounded-full blur-md"
              />
            </div>
          </div>

          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex items-center justify-between">
                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleDismiss}
                  className="text-white/80 hover:text-white transition-colors duration-200 p-2"
                >
                  <X className="w-6 h-6" />
                </motion.button>

                {/* Main content */}
                <div className="flex-1 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-4"
                  >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-4">
                      <Sparkles className="w-4 h-4 mr-2" />
                      🚀 NEW: Ultimate Content Showcase 2026
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                      Revolutionary Technology Solutions
                    </h2>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
                      Discover the most advanced AI, automation, and quantum computing solutions that are reshaping industries and creating unprecedented opportunities for business growth.
                    </p>
                  </motion.div>

                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-6 mb-8"
                  >
                    {[
                      { icon: Brain, text: "AI Breakthroughs" },
                      { icon: Zap, text: "Advanced Automation" },
                      { icon: Rocket, text: "Quantum Computing" },
                      { icon: TrendingUp, text: "Future Technologies" }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white"
                      >
                        <feature.icon className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{feature.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Explore Showcase
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handlePlay}
                      className="inline-flex items-center px-6 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Watch Demo
                    </motion.button>
                  </motion.div>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="flex flex-wrap justify-center gap-8 mt-8 text-white/80"
                  >
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      <span className="text-sm">4.9/5 Rating</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1 text-green-400" />
                      <span className="text-sm">10,000+ Users</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1 text-blue-400" />
                      <span className="text-sm">340% ROI</span>
                    </div>
                  </motion.div>
                </div>

                {/* Video placeholder */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="hidden lg:block ml-8"
                >
                  <div className="relative w-64 h-48 bg-black/30 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20">
                    {isPlaying ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500"
                      >
                        <div className="text-center text-white">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2"
                          >
                            <Play className="w-8 h-8" />
                          </motion.div>
                          <p className="text-sm">Playing Demo...</p>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={handlePlay}
                          className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                        >
                          <Play className="w-8 h-8 ml-1" />
                        </motion.button>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom border animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 origin-left"
            style={{ width: '100%' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UltimateContentShowcase2026PromotionBanner;