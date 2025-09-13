'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain,
  X,
  CheckCircle,
  TrendingUp,
  Award
} from 'lucide-react';

const NewContentShowcase2026PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    'Revolutionary AI Technologies',
    'Advanced Automation Solutions',
    'Cloud Infrastructure Excellence',
    'Enterprise Security & Compliance'
  ];

  const stats = [
    { label: '500+', value: 'Projects' },
    { label: '99%', value: 'Satisfaction' },
    { label: '300%', value: 'ROI' }
  ];

  if (!isVisible || isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 transform rotate-12 scale-150"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            {/* Left Content */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-3 mb-4"
              >
                <Sparkles className="w-6 h-6 text-yellow-300" />
                <span className="text-sm font-medium bg-yellow-300 text-blue-900 px-3 py-1 rounded-full">
                  NEW 2026 CONTENT
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold mb-3"
              >
                🚀 Revolutionary Content Showcase 2026
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg opacity-90 mb-6 max-w-2xl"
              >
                Discover cutting-edge AI innovations, advanced automation solutions, and enterprise-grade infrastructure that will transform your business in 2026.
              </motion.p>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6"
              >
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-300 flex-shrink-0" />
                    <span className="text-sm opacity-90">{feature}</span>
                  </div>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex space-x-6 mb-6"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">{stat.label}</div>
                    <div className="text-sm opacity-80">{stat.value}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center group">
                  <Brain className="w-5 h-5 mr-2" />
                  Explore Content
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center group">
                  <Zap className="w-5 h-5 mr-2" />
                  Get Started
                </button>
              </motion.div>
            </div>

            {/* Right Content - Icons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:flex items-center space-x-4"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
              >
                <Brain className="w-8 h-8 text-yellow-300" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
              >
                <Zap className="w-6 h-6 text-green-300" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
              >
                <Award className="w-7 h-7 text-pink-300" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Pulse Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0"
          animate={{ opacity: [0, 0.1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContentShowcase2026PromotionBanner;