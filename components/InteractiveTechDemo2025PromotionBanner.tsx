'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Brain, 
  Zap, 
  Cpu, 
  Shield,
  Star,
  ChevronRight,
  X,
  Users,
  Award,
  Clock,
  Sparkles
} from 'lucide-react';

const InteractiveTechDemo2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);

  const demos = [
    { icon: Brain, name: 'AI Processing', color: 'from-purple-500 to-pink-500' },
    { icon: Zap, name: 'Quantum Computing', color: 'from-blue-500 to-cyan-500' },
    { icon: Cpu, name: 'Smart Automation', color: 'from-green-500 to-emerald-500' },
    { icon: Shield, name: 'Advanced Security', color: 'from-red-500 to-orange-500' }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Rotate through demos
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentDemoData = demos[currentDemo];

  if (isDismissed || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 border-b border-blue-500/30"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-4 -right-4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-ping" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left side - Main content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="flex items-center gap-2"
                >
                  <Sparkles className="w-6 h-6 text-cyan-400" />
                  <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider">
                    Interactive Demo
                  </span>
                </motion.div>
                <div className="flex items-center gap-1 text-green-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-semibold">Live Now</span>
                </div>
              </div>

              <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
                🚀 Interactive Tech Demo 2025
              </h2>
              
              <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl">
                Experience cutting-edge technologies in real-time. Try AI processing, quantum computing, automation, and security systems hands-on.
              </p>

              {/* Rotating demo showcase */}
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <motion.div
                  key={currentDemo}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${currentDemoData.color} text-white`}
                >
                  <currentDemoData.icon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">{currentDemoData.name}</span>
                </motion.div>
                <div className="flex items-center text-green-400">
                  <Users className="w-4 h-4 mr-1" />
                  <span className="text-sm">500K+ Demos Run</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
                <div className="flex items-center text-yellow-400">
                  <Star className="w-4 h-4 mr-1" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center text-blue-400">
                  <Award className="w-4 h-4 mr-1" />
                  <span>Industry Award Winner</span>
                </div>
                <div className="flex items-center text-green-400">
                  <Play className="w-4 h-4 mr-1" />
                  <span>No Registration Required</span>
                </div>
              </div>
            </div>

            {/* Right side - CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Try Demo Now
                <ChevronRight className="w-4 h-4 ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Brain className="w-5 h-5 mr-2" />
                View All Demos
              </motion.button>
            </div>

            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDismissed(true)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Demo indicators */}
          <div className="flex justify-center lg:justify-start mt-4 space-x-2">
            {demos.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentDemo ? 'bg-cyan-400 w-8' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
        <div className="absolute top-8 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping" />
        <div className="absolute bottom-4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
      </motion.div>
    </AnimatePresence>
  );
};

export default InteractiveTechDemo2025PromotionBanner;