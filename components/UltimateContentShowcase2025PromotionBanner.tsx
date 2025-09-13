'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  Star,
  ChevronRight,
  Play,
  X,
  Clock,
  Users,
  Award
} from 'lucide-react';

const UltimateContentShowcase2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    setIsVisible(true);
    
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (isDismissed || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 border-b border-purple-500/30"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-4 -right-4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl animate-ping" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left side - Main content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="flex items-center gap-2"
                >
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                  <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">
                    Limited Time Offer
                  </span>
                </motion.div>
                <div className="flex items-center gap-1 text-green-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    {formatTime(timeLeft)}
                  </span>
                </div>
              </div>

              <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
                🚀 Ultimate Content Showcase 2025
              </h2>
              
              <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl">
                Discover revolutionary AI innovations, quantum computing breakthroughs, and future technologies that will transform your business.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
                <div className="flex items-center text-green-400">
                  <Users className="w-4 h-4 mr-1" />
                  <span>1M+ Active Users</span>
                </div>
                <div className="flex items-center text-yellow-400">
                  <Star className="w-4 h-4 mr-1" />
                  <span>5.0 Rating</span>
                </div>
                <div className="flex items-center text-blue-400">
                  <Award className="w-4 h-4 mr-1" />
                  <span>Industry Leader</span>
                </div>
              </div>
            </div>

            {/* Right side - CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Explore Now
                <ChevronRight className="w-4 h-4 ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Brain className="w-5 h-5 mr-2" />
                Learn More
              </motion.button>
            </div>

            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDismissed(true)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Progress bar */}
          <div className="mt-4 w-full bg-white/10 rounded-full h-1">
            <motion.div
              className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              initial={{ width: "100%" }}
              animate={{ width: `${(timeLeft / (24 * 60 * 60)) * 100}%` }}
              transition={{ duration: 1, ease: "linear" }}
            />
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce" />
        <div className="absolute top-8 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping" />
        <div className="absolute bottom-4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
      </motion.div>
    </AnimatePresence>
  );
};

export default UltimateContentShowcase2025PromotionBanner;