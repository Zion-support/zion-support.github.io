'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  ArrowRight, 
  X, 
  Code, 
  Cpu,
  Zap,
  Brain,
  Network,
  TrendingUp,
  Award,
  Sparkles
} from 'lucide-react';

const InteractiveTechDemo2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
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
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <motion.div
              animate={{ 
                x: [0, 120, 0],
                y: [0, -60, 0],
                rotate: [0, 360, 720]
              }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute top-8 left-8 w-16 h-16 bg-cyan-400/20 rounded-full blur-lg"
            />
            <motion.div
              animate={{ 
                x: [0, -100, 0],
                y: [0, 80, 0],
                rotate: [0, -180, -360]
              }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute top-16 right-16 w-12 h-12 bg-blue-400/20 rounded-full blur-md"
            />
            <motion.div
              animate={{ 
                x: [0, 80, 0],
                y: [0, -40, 0],
                rotate: [0, 90, 180]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute bottom-8 left-1/4 w-10 h-10 bg-purple-400/20 rounded-full blur-sm"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center justify-center lg:justify-start gap-2 mb-4"
                >
                  <Play className="w-6 h-6 text-cyan-300 animate-pulse" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                    INTERACTIVE TECH DEMO
                  </span>
                  <div className="flex items-center gap-1 ml-2">
                    <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                    <span className="text-xs text-yellow-300 font-bold">LIVE</span>
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                >
                  Experience Technology
                  <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    in Real-Time
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-xl text-blue-100 mb-6 max-w-2xl"
                >
                  Interact with our cutting-edge AI and automation technologies through live demonstrations and real-time performance metrics.
                </motion.p>

                {/* Tech Icons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-6"
                >
                  <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-cyan-300" />
                    <span className="text-sm font-medium">AI Processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-300" />
                    <span className="text-sm font-medium">Smart Automation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-purple-300" />
                    <span className="text-sm font-medium">Quantum Computing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Network className="w-5 h-5 text-green-300" />
                    <span className="text-sm font-medium">Edge Computing</span>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <button className="group bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Start Demo
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                    <Code className="w-5 h-5 mr-2" />
                    View Code
                  </button>
                </motion.div>
              </div>

              {/* Right Content - Demo Preview */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex-shrink-0"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-md">
                  <h3 className="text-xl font-bold mb-6 text-center">Live Demo Preview</h3>
                  
                  {/* Demo Stats */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100">Processing Speed</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "85%" }}
                            transition={{ duration: 2, delay: 0.5 }}
                          />
                        </div>
                        <span className="text-cyan-300 font-bold">2.5M ops/sec</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100">Accuracy</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "99%" }}
                            transition={{ duration: 2, delay: 0.7 }}
                          />
                        </div>
                        <span className="text-green-300 font-bold">99.7%</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100">Latency</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "95%" }}
                            transition={{ duration: 2, delay: 0.9 }}
                          />
                        </div>
                        <span className="text-purple-300 font-bold">0.3ms</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Live Indicator */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      Live Demo Active
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InteractiveTechDemo2025PromotionBanner;