<<<<<<< HEAD
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot
  MessageCircle
  Send
  Sparkles
  Zap
  Brain
  Rocket
  Star,
  Play,
  X,
  ChevronRight,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';

const InteractiveAIDemo2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentDemosetCurrentDemo] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)2000);
    return () => clearTimeout(timer);
  }[]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length);
    }4000);
    return () => clearInterval(interval);
  }[]);

  const demos = [
    {
      icon: Brain,
      title: 'Neural Interface Demo',
      description: 'Experience 500% efficiency boost',
      color: 'from-purple-500 to-pink-500',
      users: '2.5K+ active'
    },
    {
      icon: Zap,
      title: 'Quantum AI Demo',
      description: 'See 1000x faster processing',
      color: 'from-blue-500 to-cyan-500',
      users: '1.8K+ active'
    },
    {
      icon: TrendingUp,
      title: 'Business Automation',
      description: 'Witness 90% cost reduction',
      color: 'from-green-500 to-emerald-500',
      users: '3.2K+ active'
    },
    {
      icon: Star,
      title: 'Future Predictions',
      description: 'Explore 95% accuracy rate',
      color: 'from-orange-500 to-red-500',
      users: '4.1K+ active'
    }
  ];

  if (isDismissed || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative bg-gradient-to-r from-blue-900 via-slate-900 to-purple-900 border-b border-blue-500/30 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="20" cy="20" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="flex items-center gap-6">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    🤖 Interactive AI Demo 2025
                  </h3>
                  <p className="text-blue-200 text-sm">
                    Chat with the Future of AI Technology
                  </p>
                </div>
              </motion.div>

              {/* Rotating Demo Features */}
              <div className="hidden md:flex items-center gap-4">
                <div className="w-px h-8 bg-blue-500/30"></div>
                <div className="flex items-center gap-3">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentDemo}
                      initial={{ opacity: 0x: 20 }}
                      animate={{ opacity: 1x: 0 }}
                      exit={{ opacity: 0x: -20 }}
                      className="flex items-center gap-2"
                    >
                      <div className={`w-8 h-8 bg-gradient-to-r ${demos[currentDemo].color} rounded-lg flex items-center justify-center`}>
                        {React.createElement(demos[currentDemo].icon{ className: "w-4 h-4 text-white" })}
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">
                          {demos[currentDemo].title}
                        </div>
                        <div className="text-blue-300 text-xs">
                          {demos[currentDemo].description}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex items-center gap-4">
              {/* Live Stats */}
              <div className="hidden lg:flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg border border-white/20">
                  <Users className="w-4 h-4 text-green-400" />
                  <span className="text-white text-sm font-medium">
                    {demos[currentDemo].users}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg border border-white/20">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span className="text-white text-sm font-medium">
                    Live Demo
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <motion.button
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Chat Now</span>
                </motion.button>

                <motion.button
                  className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25"
                  whileHover={{ scale: 1.05y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-4 h-4" />
                  <span>Try Demo</span>
                  <ChevronRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  onClick={() => setIsDismissed(true)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 text-gray-400 hover:text-white" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Demo Features */}
          <div className="md:hidden mt-4">
            <div className="flex items-center justify-center gap-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDemo}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2"
                >
                  <div className={`w-6 h-6 bg-gradient-to-r ${demos[currentDemo].color} rounded-lg flex items-center justify-center`}>
                    {React.createElement(demos[currentDemo].icon{ className: "w-3 h-3 text-white" })}
                  </div>
                  <div className="text-center">
                    <div className="text-white font-semibold text-sm">
                      {demos[currentDemo].title}
                    </div>
                    <div className="text-blue-300 text-xs">
                      {demos[currentDemo].description}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Animated Border */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 4repeat: Infinityease: "linear" }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InteractiveAIDemo2025PromotionBanner;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
