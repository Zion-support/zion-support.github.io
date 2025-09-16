"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp
  Brain
  Zap
  Globe
  ArrowRight,
  X,
  CheckCircle,
  Star,
  Lightbulb,
  Rocket
} from 'lucide-react';

const TechnologyTrendsShowcase2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentTrendsetCurrentTrend] = useState(0);

  const trends = [
    { name: "AI-Powered Automation"icon: Brainadoption: "85%" },
    { name: "Edge Computing"icon: Zapadoption: "70%" },
    { name: "Quantum Security"icon: Globeadoption: "60%" },
    { name: "Sustainable Tech"icon: TrendingUpadoption: "90%" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrend((prev) => (prev + 1) % trends.length);
    }3000);
    return () => clearInterval(interval);
  }[]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse" />
          <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-500" />
          <div className="absolute bottom-8 right-4 w-2 h-2 bg-white rounded-full animate-pulse delay-700" />
        </div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2repeat: Infinityease: "linear" }}
                  className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
                >
                  <TrendingUp className="w-3 h-3" />
                </motion.div>
                <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                  NEW: Technology Trends Showcase 2025
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                The Future of Technology is Here Today
              </h2>
              
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <span className="text-lg opacity-90">Trending:</span>
                <motion.div
                  key={currentTrend}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2"
                >
                  <trends[currentTrend].icon className="w-4 h-4" />
                  <span className="text-lg font-semibold bg-white/20 px-3 py-1 rounded-full">
                    {trends[currentTrend].name} ({trends[currentTrend].adoption})
                  </span>
                </motion.div>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>AI Automation</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>Edge Computing</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>Quantum Security</span>
                </div>
              </div>
            </div>

            {/* Center - Rotating Trends */}
            <div className="hidden md:flex items-center gap-8">
              {trends.map((trendindex) => {
                const Icon = trend.icon;
                return (
                  <motion.div
                    key={index}
                    animate={{
                      scale: currentTrend === index ? 1.1 : 1,
                      opacity: currentTrend === index ? 1 : 0.7
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <Icon className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-xs font-medium">{trend.name}</div>
                    <div className="text-lg font-bold">{trend.adoption}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Content - CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                <Lightbulb className="w-4 h-4" />
                Explore Trends
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                <Rocket className="w-4 h-4" />
                Future Ready
              </motion.button>
            </div>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-white/20">
          <motion.div
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 15ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TechnologyTrendsShowcase2025PromotionBanner;