'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Brain, Target, TrendingUp, Star } from 'lucide-react';

const QuantumAI2026BreakthroughBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { value: '$15.8B', label: 'Value Created', icon: TrendingUp },
    { value: '1000x', label: 'Performance Boost', icon: Zap },
    { value: '99.9%', label: 'Accuracy Rate', icon: Target },
    { value: '8 Months', label: 'Implementation', icon: Star }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-25 animate-pulse"></div>
            <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-purple-400 rounded-full opacity-40 animate-bounce"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-3 mb-6"
              >
                <Brain className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">🚀 QUANTUM AI 2026 BREAKTHROUGH</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent"
              >
                The Quantum AI Revolution
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Experience 1000x performance improvements with quantum-enhanced AI. 
                Discover how Fortune 100 companies achieved $15.8B in value creation.
              </motion.p>
            </div>

            {/* Dynamic Stats Display */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: currentStat === index ? 1 : 0.7,
                      scale: currentStat === index ? 1.05 : 1
                    }}
                    transition={{ duration: 0.5 }}
                    className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center border ${
                      currentStat === index 
                        ? 'border-purple-400 shadow-lg shadow-purple-500/25' 
                        : 'border-white/20'
                    }`}
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3 text-purple-300" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-purple-200 text-sm">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Content Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            >
              {/* Blog Post Link */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 rounded-lg p-3">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">
                      Quantum Neural Breakthrough Guide
                    </h3>
                    <p className="text-purple-200 mb-4">
                      Discover how quantum computing meets neural networks to create 
                      1000x performance improvements and solve previously impossible problems.
                    </p>
                    <Link
                      href="/blog/ai-2026-quantum-neural-breakthrough-ultimate-guide"
                      className="inline-flex items-center text-purple-300 hover:text-white font-semibold group"
                    >
                      Read the Complete Guide
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Case Study Link */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-400 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 rounded-lg p-3">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">
                      $15.8B Success Story
                    </h3>
                    <p className="text-blue-200 mb-4">
                      Learn how a Fortune 100 company achieved unprecedented value 
                      creation through quantum AI transformation in just 8 months.
                    </p>
                    <Link
                      href="/case-studies/quantum-ai-transformation-2026-ultimate-success"
                      className="inline-flex items-center text-blue-300 hover:text-white font-semibold group"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Transform Your Business with Quantum AI?
                </h3>
                <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
                  Join the quantum AI revolution and unlock unprecedented computational power 
                  for your organization. Get started with our comprehensive solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Your Quantum AI Journey
                  </Link>
                  <Link
                    href="/services/quantum-ai"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
                  >
                    Explore Quantum AI Services
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default QuantumAI2026BreakthroughBanner;