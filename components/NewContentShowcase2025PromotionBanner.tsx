'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Zap, 
  TrendingUp, 
  Sparkles,
  X,
  Play,
  ExternalLink
} from 'lucide-react';

const NewContentShowcase2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
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
          className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-indigo-600/90" />
          
          {/* Floating Elements */}
          <div className="absolute top-4 left-8 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
          <div className="absolute top-8 right-12 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-6 left-16 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-2000" />
          <div className="absolute bottom-4 right-8 w-1 h-1 bg-white/50 rounded-full animate-pulse delay-500" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center justify-center lg:justify-start gap-3 mb-3"
                >
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-5 h-5 text-yellow-300" />
                    <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wide">
                      New Content Available
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-300 fill-current" />
                    <Star className="w-4 h-4 text-yellow-300 fill-current" />
                    <Star className="w-4 h-4 text-yellow-300 fill-current" />
                    <Star className="w-4 h-4 text-yellow-300 fill-current" />
                    <Star className="w-4 h-4 text-yellow-300 fill-current" />
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-2xl lg:text-3xl font-bold text-white mb-2"
                >
                  🚀 Revolutionary Technology Solutions 2025
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-blue-100 text-lg mb-4 max-w-2xl"
                >
                  Discover cutting-edge AI, automation, and cloud solutions that are transforming businesses worldwide. 
                  <span className="font-semibold text-white"> 95% accuracy improvement</span> and 
                  <span className="font-semibold text-white"> 10x faster processing</span> guaranteed.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                >
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl">
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    Watch Demo
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center group">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    Explore Now
                  </button>
                </motion.div>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row lg:flex-col gap-4 text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">500+</div>
                  <div className="text-blue-100 text-sm">Projects</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-blue-100 text-sm">Satisfaction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-blue-100 text-sm">Support</div>
                </div>
              </motion.div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-300 p-1"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Animated Border */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 animate-pulse" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewContentShowcase2025PromotionBanner;