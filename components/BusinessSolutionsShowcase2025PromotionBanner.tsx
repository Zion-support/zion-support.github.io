'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Zap,
  X,
  Play,
  Star,
  CheckCircle
} from 'lucide-react';

const BusinessSolutionsShowcase2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isDismissed) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-900 via-green-900 to-emerald-900 border-b border-white/20 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Animated Icon */}
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
              >
                <TrendingUp className="w-2 h-2 text-white" />
              </motion.div>
            </motion.div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 text-black px-2 py-1 rounded text-xs font-bold">
                  BUSINESS SOLUTIONS
                </span>
                <span className="text-white font-semibold text-sm">
                  Transform Your Operations 2025
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                AI-powered automation • Advanced analytics • Enterprise security • 
                <span className="text-blue-300 font-semibold"> Boost productivity by 300%</span>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Feature Icons */}
            <div className="hidden md:flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
              >
                <Zap className="w-4 h-4 text-white" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
              >
                <TrendingUp className="w-4 h-4 text-white" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
              >
                <Users className="w-4 h-4 text-white" />
              </motion.div>
            </div>

            {/* Success Metrics */}
            <div className="hidden lg:flex items-center gap-4 text-xs text-gray-300">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>10,000+ Companies</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-400" />
                <span>99.8% Success Rate</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 hover:from-blue-700 hover:to-green-700 transition-all duration-300"
            >
              <Play className="w-4 h-4" />
              Get Started
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            {/* Dismiss Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDismissed(true)}
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          transition={{ duration: 25, ease: "linear" }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-green-500"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -8, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-2 left-1/4 w-2 h-2 bg-blue-400 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 8, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-4 right-1/3 w-1 h-1 bg-green-400 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -6, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-3 right-1/4 w-1.5 h-1.5 bg-emerald-400 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default BusinessSolutionsShowcase2025PromotionBanner;