'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Rocket, 
  Star, 
  ArrowRight, 
  Sparkles,
  TrendingUp,
  Award,
  Lightbulb,
  Target
} from 'lucide-react';

const AI2025_2026UltimateInnovationPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Quantum AI Processing',
      description: '1000x faster computations',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Neural Interfaces',
      description: 'Direct brain-computer integration',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Rocket,
      title: 'Autonomous Systems',
      description: 'Self-evolving AI solutions',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Target,
      title: 'Predictive Intelligence',
      description: '95% accuracy forecasting',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const currentFeatureData = features[currentFeature];

  return (
    <div className="relative py-16 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
              <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-purple-200 text-sm font-medium">NEW: 2025-2026 Innovation Showcase</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ultimate AI Innovation
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Showcase 2025-2026
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Discover the most revolutionary AI technologies, quantum computing breakthroughs, 
                and automation solutions that are reshaping the future of business and technology.
              </p>
            </div>

            {/* Feature Highlight */}
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${currentFeatureData.color} flex items-center justify-center`}>
                  <currentFeatureData.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{currentFeatureData.title}</h3>
                  <p className="text-gray-300">{currentFeatureData.description}</p>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">10,000+</div>
                <div className="text-gray-400 text-sm">AI Models Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">1M+</div>
                <div className="text-gray-400 text-sm">Quantum Qubits</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-purple-500/25">
                <Award className="w-5 h-5 mr-2" />
                Explore Innovations
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center group">
                <Lightbulb className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/20 backdrop-blur-sm">
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
              >
                <Brain className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center"
              >
                <Rocket className="w-10 h-10 text-white" />
              </motion.div>

              {/* Central Content */}
              <div className="text-center pt-16 pb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6">
                  <Star className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Revolutionary AI Technologies
                </h3>
                <p className="text-gray-300 mb-6">
                  Experience the future of artificial intelligence with our cutting-edge innovations
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">1000x</div>
                    <div className="text-gray-400 text-sm">Faster Processing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <div className="text-gray-400 text-sm">Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AI2025_2026UltimateInnovationPromotionBanner;