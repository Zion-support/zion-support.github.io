'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Code, 
  Database, 
  Cpu, 
  Network,
  Brain,
  Zap,
  BarChart3,
  Eye,
  MousePointer,
  Monitor,
  Smartphone,
  Globe,
  CheckCircle,
  ArrowRight,
  Download,
  Share2,
  Star,
  Users,
  Award,
  Clock,
  X
} from 'lucide-react';

const InteractiveTechDemo2026PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
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
          className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-400/20 rounded-full blur-2xl -z-10" />
          
          {/* Floating Elements */}
          <div className="absolute top-4 left-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
          <div className="absolute top-8 right-8 w-2 h-2 bg-pink-400 rounded-full animate-bounce" />
          <div className="absolute bottom-4 right-4 w-4 h-4 bg-green-400 rounded-full animate-ping" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4"
                >
                  <Play className="w-4 h-4" />
                  <span>Interactive Demo</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  Experience Technology in Action
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl"
                >
                  Interact with cutting-edge AI, quantum computing, and automation technologies. See real-time performance metrics and experience the future today.
                </motion.p>

                {/* Demo Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
                >
                  {[
                    { icon: Brain, label: 'AI Processing', color: 'text-blue-300' },
                    { icon: Cpu, label: 'Quantum Simulation', color: 'text-purple-300' },
                    { icon: Zap, label: 'Smart Automation', color: 'text-pink-300' },
                    { icon: BarChart3, label: 'Live Analytics', color: 'text-green-300' }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <feature.icon className={`w-5 h-5 ${feature.color}`} />
                      <span className="text-sm font-medium">{feature.label}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Interactive Demo Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold">Live Demo Preview</h4>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePlayPause}
                        className={`p-2 rounded-full transition-all duration-300 ${
                          isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                        }`}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                      <button className="p-2 rounded-full bg-gray-500 hover:bg-gray-600 transition-all duration-300">
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                      style={{ width: isPlaying ? '75%' : '0%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white/10 rounded-lg p-2">
                      <div className="text-sm font-bold">2.5ms</div>
                      <div className="text-xs opacity-70">Processing</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2">
                      <div className="text-sm font-bold">99.7%</div>
                      <div className="text-xs opacity-70">Accuracy</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2">
                      <div className="text-sm font-bold">10K/s</div>
                      <div className="text-xs opacity-70">Throughput</div>
                    </div>
                  </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm"
                >
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>50,000+ Users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Industry Leading</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Real-time</span>
                  </div>
                </motion.div>
              </div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col gap-4 items-center"
              >
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Try Interactive Demo
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Watch Tutorial
                </button>
                
                {/* Quick Actions */}
                <div className="flex gap-2 mt-4">
                  <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300">
                    <Download className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Bottom Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 pt-6 border-t border-white/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">No Installation</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Instant Access</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Mobile Friendly</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Free Forever</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InteractiveTechDemo2026PromotionBanner;