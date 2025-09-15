"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
ArrowRightZapBrainTrendingUpUsersAwardClock
import Link from 'next/link';

const AI2025UltimateInnovationPromotionBanner: React.FC = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentStatsetCurrentStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % 3);
    }3000);
    return () => clearInterval(interval);
  }[]);

  const stats = [
    { icon: TrendingUpvalue: "5,000%"label: "ROI Increase"color: "from-green-500 to-emerald-500" },
    { icon: Usersvalue: "10M+"label: "Users Impacted"color: "from-blue-500 to-cyan-500" },
    { icon: Awardvalue: "99.9%"label: "Success Rate"color: "from-purple-500 to-pink-500" }
  ];

  const features = [
    "Quantum-AI Fusion Technology",
    "Autonomous Business Operations"
    "Neural Interface Revolution",
    "Transcendent Intelligence"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-12"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0x: -30 }}
              animate={{ opacity: isVisible ? 1 : 0x: isVisible ? 0 : -30 }}
              transition={{ delay: 0.2duration: 0.6 }}
              className="mb-4"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Zap className="w-4 h-4" />
                Limited Time Offer
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-4">
                AI 2025 Ultimate Innovation Showcase
              </h2>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl">
                Discover revolutionary AI breakthroughs that are transforming industries worldwide. 
                Experience the future of artificial intelligence today.
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.4duration: 0.6 }}
              className="grid grid-cols-2 gap-2 mb-6"
            >
              {features.map((featureindex) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.6duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/ai-2025-ultimate-breakthrough"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-400 text-white px-6 py-3 rounded-full font-semibold hover:border-gray-300 hover:bg-gray-800/50 transition-all duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0x: 30 }}
            animate={{ opacity: isVisible ? 1 : 0x: isVisible ? 0 : 30 }}
            transition={{ delay: 0.3duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 min-w-[300px]">
              <h3 className="text-xl font-bold text-white text-center mb-6">Proven Results</h3>
              
              {/* Animated Stat */}
              <motion.div
                key={currentStat}
                initial={{ opacity: 0scale: 0.8 }}
                animate={{ opacity: 1scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-6"
              >
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${stats[currentStat].color} mb-4`}>
                  <stats[currentStat].icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stats[currentStat].value}</div>
                <div className="text-gray-400 text-sm">{stats[currentStat].label}</div>
              </motion.div>

              {/* Static Stats */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Implementation Time</span>
                  <span className="text-white font-semibold">24-48 Hours</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Success Rate</span>
                  <span className="text-green-400 font-semibold">99.9%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Global Reach</span>
                  <span className="text-white font-semibold">150+ Countries</span>
                </div>
              </div>

              {/* Urgency Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1duration: 0.5 }}
                className="mt-6 flex items-center justify-center gap-2 text-orange-400 text-sm"
              >
                <Clock className="w-4 h-4" />
                <span>Limited time offer - Act now!</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AI2025UltimateInnovationPromotionBanner;