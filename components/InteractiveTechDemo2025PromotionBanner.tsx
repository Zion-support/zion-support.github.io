'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Rocket, 
  Shield,
  X,
  CheckCircle,
  Sparkles,
  Target,
  TrendingUp
} from 'lucide-react';

const InteractiveTechDemo2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const demos = [
    { name: 'AI Automation', icon: Brain, color: 'from-purple-600 to-pink-600' },
    { name: 'Quantum Computing', icon: Rocket, color: 'from-blue-600 to-cyan-600' },
    { name: 'Neural Interface', icon: Zap, color: 'from-green-600 to-emerald-600' },
    { name: 'Quantum-AI Fusion', icon: Sparkles, color: 'from-orange-600 to-red-600' }
  ];

  const benefits = [
    'Live Technology Demonstrations',
    'Real-time Performance Metrics',
    'Interactive Experience Controls',
    'Immediate Results Visualization'
  ];

  const stats = [
    { value: '4', label: 'Live Demos' },
    { value: '99.9%', label: 'Accuracy' },
    { value: 'Real-time', label: 'Updates' },
    { value: '100%', label: 'Interactive' }
  ];

  if (isDismissed || !isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-4 left-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-8 right-8 w-16 h-16 bg-purple-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute bottom-4 left-1/4 w-12 h-12 bg-cyan-500/20 rounded-full blur-md animate-pulse delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Play className="w-4 h-4" />
                INTERACTIVE DEMO
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Experience Technology
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  in Real-Time
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl">
                Watch live demonstrations of revolutionary AI, quantum computing, and neural interface technologies. 
                Control the demos and see real-time performance metrics.
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-3 mb-6"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-4 gap-4 mb-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                <Play className="w-5 h-5" />
                Start Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 border border-white/20">
                <Star className="w-5 h-5" />
                Learn More
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
            <div className="relative w-80 h-80">
              {/* Demo Container */}
              <div className="absolute inset-0 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-lg p-6">
                {/* Demo Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="text-xs text-gray-400 ml-4">Interactive Demo</div>
                </div>

                {/* Demo Content */}
                <div className="space-y-4">
                  {/* Demo Selector */}
                  <div className="grid grid-cols-2 gap-2">
                    {demos.map((demo, index) => (
                      <div
                        key={index}
                        className={`p-2 rounded-lg border text-center transition-all duration-300 ${
                          index === 0 
                            ? 'border-blue-500 bg-blue-500/20' 
                            : 'border-white/20 bg-white/5'
                        }`}
                      >
                        <demo.icon className={`w-4 h-4 mx-auto mb-1 ${
                          index === 0 ? 'text-blue-400' : 'text-gray-400'
                        }`} />
                        <div className={`text-xs ${
                          index === 0 ? 'text-white' : 'text-gray-300'
                        }`}>
                          {demo.name}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Play Button */}
                  <div className="flex justify-center">
                    <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      <Play className="w-4 h-4" />
                      Play Demo
                    </button>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Progress</span>
                      <span>45%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 h-1 rounded-full w-[45%]"></div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-sm font-bold text-white">300%</div>
                      <div className="text-xs text-gray-400">Speed</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">99.9%</div>
                      <div className="text-xs text-gray-400">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">$2.5M</div>
                      <div className="text-xs text-gray-400">Savings</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center"
              >
                <Target className="w-4 h-4 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center"
              >
                <TrendingUp className="w-3 h-3 text-white" />
              </motion.div>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  style={{
                    left: `${20 + (i * 15)}%`,
                    top: `${10 + (i * 12)}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </motion.div>
  );
};

export default InteractiveTechDemo2025PromotionBanner;