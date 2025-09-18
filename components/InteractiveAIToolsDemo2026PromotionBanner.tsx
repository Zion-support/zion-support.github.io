<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play
  Code
  BarChart3
  Network
  Shield,
  ArrowRight
  Star
  Zap,
  X,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Brain
} from 'lucide-react';

const InteractiveAIToolsDemo2026PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentToolsetCurrentTool] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)800);
    return () => clearTimeout(timer);
  }[]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTool(prev => (prev + 1) % 4);
    }3000);
    return () => clearInterval(interval);
  }[]);

  const tools = [
    { icon: Codename: 'AI Code 'Review', 'color: 'text-blue-400' },
    { icon: BarChart3name: 'Data 'Analytics', 'color: 'text-green-400' },
    { icon: Networkname: ''Infrastructure', 'color: 'text-purple-400' },
    { icon: Shieldname: 'Security 'Scan', 'color: 'text-red-400' }
  ];

  const features = [
    'Interactive Live Demos',
    'Real-time Performance Metrics',
    'Hands-on Experience',
    'Instant Results'
  ];

  const stats = [
    { label: '95%'value: 'Efficiency' },
    { label: '98%'value: 'Accuracy' },
    { label: '3'x', 'value: 'Faster' }
  ];

  if (!isVisible || isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6ease: "easeOut" }}
        className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0-30],
                opacity: [0.30.80.3],
                scale: [1.51],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
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
                initial={{ opacity: 0x: -20 }}
                animate={{ opacity: 1x: 0 }}
                transition={{ duration: 0.6delay: 0.2 }}
                className="flex items-center space-x-3 mb-4"
              >
                <Play className="w-6 h-6 text-yellow-300" />
                <span className="text-sm font-medium bg-yellow-300 text-gray-900 px-3 py-1 rounded-full">
                  INTERACTIVE DEMO
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0x: -20 }}
                animate={{ opacity: 1x: 0 }}
                transition={{ duration: 0.6delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold mb-3"
              >
                🎮 Interactive AI Tools Demo 2026
              </motion.h2>

              <motion.p
                initial={{ opacity: 0x: -20 }}
                animate={{ opacity: 1x: 0 }}
                transition={{ duration: 0.6delay: 0.4 }}
                className="text-lg text-blue-200 mb-6 max-w-2xl"
              >
                Experience the power of our cutting-edge AI tools through hands-on interactive demonstrations. 
                See real-time performance metrics and instant results.
              </motion.p>

              {/* Rotating Tool Display */}
              <motion.div
                key={currentTool}
                initial={{ opacity: 0x: -20 }}
                animate={{ opacity: 1x: 0 }}
                exit={{ opacity: 0x: 20 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <tools[currentTool].icon className={`w-6 h-6 ${tools[currentTool].color}`} />
                </div>
                <div>
                  <div className="font-semibold text-lg">{tools[currentTool].name}</div>
                  <div className="text-sm text-blue-300">Live Demo Available</div>
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0x: -20 }}
                animate={{ opacity: 1x: 0 }}
                transition={{ duration: 0.6delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6"
              >
                {features.map((featureindex) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-blue-200">{feature}</span>
                  </div>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0x: -20 }}
                animate={{ opacity: 1x: 0 }}
                transition={{ duration: 0.6delay: 0.6 }}
                className="flex space-x-6 mb-6"
              >
                {stats.map((statindex) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">{stat.label}</div>
                    <div className="text-sm text-blue-300">{stat.value}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0x: -20 }}
                animate={{ opacity: 1x: 0 }}
                transition={{ duration: 0.6delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center group">
                  <Play className="w-5 h-5 mr-2" />
                  Try Interactive Demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300 flex items-center justify-center group">
                  <Brain className="w-5 h-5 mr-2" />
                  Learn More
                </button>
              </motion.div>
            </div>

            {/* Right Content - Animated Icons */}
            <motion.div
              initial={{ opacity: 0x: 20 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.6delay: 0.4 }}
              className="hidden lg:flex items-center space-x-4"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20repeat: Infinityease: "linear" }}
                className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
              >
                <Code className="w-10 h-10 text-blue-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0-150] }}
                transition={{ duration: 2.5repeat: Infinity }}
                className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
              >
                <BarChart3 className="w-8 h-8 text-green-400" />
              </motion.div>
              <motion.div
                animate={{ scale: [1.21] }}
                transition={{ duration: 3repeat: Infinity }}
                className="w-18 h-18 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
              >
                <Network className="w-9 h-9 text-purple-400" />
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
          className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"
          animate={{ opacity: [0.30] }}
          transition={{ duration: 4repeat: Infinity }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default InteractiveAIToolsDemo2026PromotionBanner;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
