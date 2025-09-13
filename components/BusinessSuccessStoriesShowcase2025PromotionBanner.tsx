'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  ArrowRight, 
  X, 
  TrendingUp, 
  DollarSign, 
  Clock,
  Star,
  CheckCircle,
  Users,
  Target,
  Zap,
  BarChart3
} from 'lucide-react';

const BusinessSuccessStoriesShowcase2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { icon: TrendingUp, value: '+300%', label: 'Efficiency Gain', color: 'text-green-400' },
    { icon: DollarSign, value: '$2.5M', label: 'Cost Savings', color: 'text-blue-400' },
    { icon: Clock, value: '75%', label: 'Time Saved', color: 'text-purple-400' },
    { icon: Star, value: '98%', label: 'Satisfaction', color: 'text-yellow-400' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % stats.length);
    }, 1500);
    return () => clearInterval(interval);
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
          className="relative bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 text-white overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          {/* Floating Success Icons */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ 
                x: [0, 100, 0],
                y: [0, -20, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 12, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute top-6 right-20 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
            >
              <Award className="w-3 h-3" />
            </motion.div>
            <motion.div
              animate={{ 
                x: [0, -80, 0],
                y: [0, 30, 0],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute bottom-6 left-16 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center"
            >
              <Star className="w-3 h-3" />
            </motion.div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center justify-center lg:justify-start gap-2 mb-3"
                >
                  <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-medium">SUCCESS STORIES</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium">PROVEN RESULTS</span>
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-2xl lg:text-3xl font-bold mb-2"
                >
                  🏆 Business Success Stories 2025
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-green-100 text-lg mb-4"
                >
                  Real Companies • Real Results • Up to 500% Efficiency Gains
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm"
                >
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>4 Industries</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>98% Satisfaction</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>$15M+ Saved</span>
                  </div>
                </motion.div>
              </div>

              {/* Center - Rotating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="relative w-24 h-24">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStat}
                      initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-white/20 rounded-2xl flex flex-col items-center justify-center"
                    >
                      <stats[currentStat].icon className={`w-8 h-8 ${stats[currentStat].color} mb-1`} />
                      <div className="text-lg font-bold">{stats[currentStat].value}</div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <motion.div
                  key={currentStat}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className="text-sm font-medium">{stats[currentStat].label}</div>
                  <div className="text-xs text-green-200">Average improvement</div>
                </motion.div>
              </motion.div>

              {/* Right Content - CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col gap-4"
              >
                <div className="text-center lg:text-right">
                  <div className="text-3xl font-bold mb-1">Join Them</div>
                  <div className="text-green-200 text-sm">Start your success story</div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <Users className="w-4 h-4" />
                    View Stories
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                    Get Started
                  </button>
                </div>

                {/* Dismiss Button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  onClick={handleDismiss}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors duration-300 self-center"
                  aria-label="Dismiss banner"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BusinessSuccessStoriesShowcase2025PromotionBanner;