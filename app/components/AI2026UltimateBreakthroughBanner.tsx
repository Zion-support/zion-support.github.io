'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const AI2026UltimateBreakthroughBanner: React.FC = () => {
  const [currentBreakthrough, setCurrentBreakthrough] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const breakthroughs = [
    {
      title: "Quantum AI Fusion",
      description: "Revolutionary quantum computing integration with AI systems",
      impact: "5000% Performance Boost",
      color: "from-purple-600 to-blue-600",
      icon: "⚛️"
    },
    {
      title: "Neural Consensus Networks",
      description: "Breakthrough in distributed AI decision-making",
      impact: "3000% Accuracy Improvement",
      color: "from-green-600 to-teal-600",
      icon: "🧠"
    },
    {
      title: "Autonomous Enterprise",
      description: "Complete business process automation with AI",
      impact: "2500% ROI Guarantee",
      color: "from-orange-600 to-red-600",
      icon: "🚀"
    },
    {
      title: "Real-time Learning",
      description: "AI systems that learn and adapt in real-time",
      impact: "4000% Speed Enhancement",
      color: "from-indigo-600 to-purple-600",
      icon: "⚡"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBreakthrough((prev) => (prev + 1) % breakthroughs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentData = breakthroughs[currentBreakthrough];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          {/* Background */}
          <div className={`bg-gradient-to-r ${currentData.color} py-16 relative`}>
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"
              />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center">
                {/* Main Content */}
                <motion.div
                  key={currentBreakthrough}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <div className="text-6xl mb-4">{currentData.icon}</div>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    AI 2026 Ultimate Breakthrough
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">
                    {currentData.title}
                  </h2>
                  <p className="text-xl text-white/80 max-w-3xl mx-auto mb-6">
                    {currentData.description}
                  </p>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-8">
                    {currentData.impact}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/ai-2026-ultimate-breakthrough"
                      className="inline-block px-8 py-4 bg-white text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Explore Breakthrough
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contact"
                      className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
                    >
                      Get Early Access
                    </Link>
                  </motion.div>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center space-x-2 mb-8">
                  {breakthroughs.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentBreakthrough(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentBreakthrough
                          ? 'bg-white scale-125'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                  {breakthroughs.map((breakthrough, index) => (
                    <motion.div
                      key={breakthrough.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 ${
                        index === currentBreakthrough ? 'bg-white/20 scale-105' : ''
                      } transition-all duration-300`}
                    >
                      <div className="text-3xl mb-3">{breakthrough.icon}</div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {breakthrough.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-3">
                        {breakthrough.description}
                      </p>
                      <div className="text-yellow-300 font-bold text-sm">
                        {breakthrough.impact}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Close Button */}
                <motion.button
                  onClick={() => setIsVisible(false)}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Bottom Wave */}
          <div className="relative">
            <svg
              className="w-full h-16 text-white"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AI2026UltimateBreakthroughBanner;
