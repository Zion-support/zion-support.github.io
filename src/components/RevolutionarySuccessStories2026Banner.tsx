"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Award
  ArrowRight
  TrendingUp
  Users
  Star,
  X,
  Play,
  CheckCircle,
  BarChart3
} from 'lucide-react';

const RevolutionarySuccessStories2026Banner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)2000);
    return () => clearTimeout(timer);
  }[]);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ 
        opacity: isVisible ? 1 : 0
        y: isVisible ? 0 : -100 
      }}
      transition={{ 
        duration: 0.8
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
      className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 border-b border-blue-500/30"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="w-2.5 h-2.5 text-yellow-800" />
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-white">
                  🏆 Revolutionary Success Stories 2026
                </h2>
                <p className="text-blue-200 text-sm">
                  Real companies achieving 500%+ ROI - See their results!
                </p>
              </div>
            </div>

            {/* Feature Icons */}
            <div className="hidden md:flex items-center space-x-4 ml-8">
              <div className="flex items-center space-x-1 text-blue-200">
                <Users className="w-4 h-4" />
                <span className="text-sm">500+ Companies</span>
              </div>
              <div className="flex items-center space-x-1 text-purple-200">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">475% Avg ROI</span>
              </div>
              <div className="flex items-center space-x-1 text-green-200">
                <BarChart3 className="w-4 h-4" />
                <span className="text-sm">Real Results</span>
              </div>
              <div className="flex items-center space-x-1 text-yellow-200">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">Proven Success</span>
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Stats */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <div className="text-center">
                <div className="text-white font-bold">500+</div>
                <div className="text-blue-200">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-white font-bold">475%</div>
                <div className="text-purple-200">Avg ROI</div>
              </div>
              <div className="text-center">
                <div className="text-white font-bold">50K+</div>
                <div className="text-green-200">Hours Saved</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button className="group flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                <span>View Stories</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={handleDismiss}
                className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="md:hidden mt-4 flex justify-center space-x-6 text-sm">
          <div className="text-center">
            <div className="text-white font-bold">500+</div>
            <div className="text-blue-200">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-white font-bold">475%</div>
            <div className="text-purple-200">Avg ROI</div>
          </div>
          <div className="text-center">
            <div className="text-white font-bold">50K+</div>
            <div className="text-green-200">Hours Saved</div>
          </div>
        </div>
      </div>

      {/* Pulse Effect */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
        <div className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 animate-pulse"></div>
      </div>
    </motion.div>
  );
};

export default RevolutionarySuccessStories2026Banner;