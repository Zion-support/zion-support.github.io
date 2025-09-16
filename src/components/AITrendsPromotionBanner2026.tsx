import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  BarChart3, 
  Target, 
  ArrowRight, 
  X, 
  Star,
  Zap,
  Brain,
  Calendar
} from 'lucide-react';

const AITrendsPromotionBanner2026 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { value: "500%", label: "Average ROI", icon: <TrendingUp className="w-4 h-4" /> },
    { value: "85%", label: "Adoption Rate", icon: <BarChart3 className="w-4 h-4" /> },
    { value: "1000x", label: "Speed Increase", icon: <Zap className="w-4 h-4" /> },
    { value: "2026", label: "Breakthrough Year", icon: <Calendar className="w-4 h-4" /> }
  ];

  const trends = [
    "Conscious AI Systems",
    "Quantum AI Integration", 
    "Autonomous Operations",
    "Global AI Networks"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-b border-white/20 overflow-hidden"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 animate-pulse" />
          <div className="absolute top-4 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-bounce" />
          <div className="absolute bottom-4 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
        </div>

        {/* Floating Icons */}
        <div className="absolute top-2 left-1/4 w-6 h-6 text-blue-400 animate-bounce">
          <Brain className="w-full h-full" />
        </div>
        <div className="absolute top-4 right-1/3 w-4 h-4 text-purple-400 animate-pulse">
          <Star className="w-full h-full" />
        </div>
        <div className="absolute bottom-2 left-1/3 w-5 h-5 text-pink-400 animate-bounce">
          <Zap className="w-full h-full" />
        </div>

        <div className="relative z-10 py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Left Content */}
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="flex-shrink-0"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">
                      TRENDING NOW
                    </span>
                    <div className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse" />
                  </div>
                  
                  <h3 className="text-white font-bold text-lg sm:text-xl">
                    AI Trends & Insights 2026
                  </h3>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-gray-300 text-sm">Top Trends:</span>
                    <div className="flex gap-1">
                      {trends.slice(0, 2).map((trend, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                          {trend}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Stats */}
              <div className="hidden md:flex items-center gap-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStat}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center gap-2 mb-1">
                      {stats[currentStat].icon}
                      <span className="text-2xl font-bold text-white">{stats[currentStat].value}</span>
                    </div>
                    <div className="text-sm text-gray-300">{stats[currentStat].label}</div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Content */}
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <Target className="w-4 h-4 text-green-400" />
                    <span>Live Predictions</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart3 className="w-4 h-4 text-blue-400" />
                    <span>Real-time Data</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                >
                  View Trends
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500">
          <motion.div
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AITrendsPromotionBanner2026;