'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  Zap, 
  TrendingUp,
  X,
  Play,
  BookOpen,
  Users,
  Award
} from 'lucide-react';

const NewContentShowcase2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: -100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    },
    exit: {
      opacity: 0,
      y: -100,
      scale: 0.9,
      transition: {
        duration: 0.5
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.6
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6,
        duration: 0.4
      }
    }
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white shadow-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              {/* Left Content */}
              <motion.div 
                className="flex items-center space-x-4 flex-1"
                variants={textVariants}
              >
                <div className="flex items-center space-x-2">
                  <motion.div
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5 text-white" />
                  </motion.div>
                  <div className="hidden sm:block">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-300" />
                      <Star className="w-4 h-4 text-yellow-300" />
                      <Star className="w-4 h-4 text-yellow-300" />
                      <Star className="w-4 h-4 text-yellow-300" />
                      <Star className="w-4 h-4 text-yellow-300" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">
                    🚀 New Content Showcase 2025 is Live!
                  </h3>
                  <p className="text-sm opacity-90 hidden sm:block">
                    Discover revolutionary AI innovations, business solutions, and future technologies
                  </p>
                </div>
              </motion.div>

              {/* Center Stats */}
              <motion.div 
                className="hidden md:flex items-center space-x-6"
                variants={textVariants}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-xs opacity-80">AI Models</div>
                </div>
                <div className="w-px h-8 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">60%</div>
                  <div className="text-xs opacity-80">Cost Reduction</div>
                </div>
                <div className="w-px h-8 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">300%</div>
                  <div className="text-xs opacity-80">ROI Increase</div>
                </div>
              </motion.div>

              {/* Right Actions */}
              <motion.div 
                className="flex items-center space-x-3"
                variants={buttonVariants}
              >
                <button className="hidden sm:flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-200 backdrop-blur-sm">
                  <Play className="w-4 h-4" />
                  <span className="text-sm font-medium">Watch Demo</span>
                </button>
                
                <button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 shadow-lg">
                  <span>Explore Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button 
                  onClick={handleDismiss}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            </div>

            {/* Mobile Stats */}
            <motion.div 
              className="md:hidden flex items-center justify-center space-x-6 py-2 border-t border-white/20"
              variants={textVariants}
            >
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">500+ AI Models</span>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="flex items-center space-x-1">
                <Zap className="w-4 h-4" />
                <span className="text-sm">60% Cost Reduction</span>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="flex items-center space-x-1">
                <Award className="w-4 h-4" />
                <span className="text-sm">300% ROI</span>
              </div>
            </motion.div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/5 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 4,
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

export default NewContentShowcase2025PromotionBanner;