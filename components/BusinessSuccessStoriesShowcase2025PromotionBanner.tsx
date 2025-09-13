'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Award,
  Play,
  X,
  DollarSign,
  Users,
  Clock,
  CheckCircle
} from 'lucide-react';

const BusinessSuccessStoriesShowcase2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { icon: TrendingUp, value: "65%", label: "Avg. Productivity Increase" },
    { icon: DollarSign, value: "$2.8M", label: "Average Cost Savings" },
    { icon: Users, value: "500+", label: "Companies Transformed" },
    { icon: Clock, value: "1,200h", label: "Monthly Time Saved" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  if (isDismissed) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -100 
      }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut" 
      }}
      className="relative bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 via-blue-600/90 to-purple-600/90"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/200')] bg-cover bg-center opacity-15"></div>
        
        {/* Floating Success Icons */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
            style={{
              left: `${5 + (i * 8)}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <CheckCircle className="w-3 h-3 text-white" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="flex-shrink-0"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
            </motion.div>
            
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-3 mb-1"
              >
                <span className="text-white font-bold text-lg">
                  🏆 REAL BUSINESS SUCCESS STORIES
                </span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="flex items-center space-x-1"
                >
                  <Star className="w-4 h-4 text-yellow-300" />
                  <Star className="w-4 h-4 text-yellow-300" />
                  <Star className="w-4 h-4 text-yellow-300" />
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center space-x-4"
              >
                <p className="text-white/90 text-sm md:text-base">
                  See how 500+ companies achieved 65% productivity gains and $2.8M average savings
                </p>
                
                {/* Rotating Stats Display */}
                <div className="hidden md:flex items-center space-x-2">
                  <span className="text-white/70 text-sm">Proven results:</span>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStat}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20"
                    >
                      <stats[currentStat].icon className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-medium">
                        {stats[currentStat].value} {stats[currentStat].label}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all duration-300"
            >
              <Play className="w-4 h-4" />
              <span className="text-sm font-medium">Watch Stories</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-white text-green-600 hover:bg-gray-100 px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg"
            >
              <TrendingUp className="w-4 h-4" />
              <span>Join Them</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDismissed(true)}
              className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all duration-300"
            >
              <Play className="w-4 h-4" />
              <span className="text-sm font-medium">Watch Stories</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-white text-green-600 hover:bg-gray-100 px-4 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg"
            >
              <TrendingUp className="w-4 h-4" />
              <span>Join Them</span>
            </motion.button>
          </div>
          
          {/* Mobile Stats Display */}
          <div className="flex items-center space-x-2">
            <span className="text-white/70 text-sm">Proven results:</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStat}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20"
              >
                <stats[currentStat].icon className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">
                  {stats[currentStat].value}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-white/30"
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: 30, ease: "linear" }}
      />
    </motion.div>
  );
};

export default BusinessSuccessStoriesShowcase2025PromotionBanner;