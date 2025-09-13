'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Rocket,
  TrendingUp,
  Award,
  Play,
  Users,
  CheckCircle
} from 'lucide-react';

const AI2025_2026UltimateInnovationPromotionBanner: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    "Neural Synthesis Engine",
    "Quantum Neural Networks", 
    "Autonomous Business Systems",
    "Predictive Analytics 2026",
    "Neural Interface Technology",
    "AI Security Fortress"
  ];

  const benefits = [
    "95%+ Efficiency Improvement",
    "Revolutionary AI Capabilities",
    "Future-Ready Technology",
    "Industry-Leading Innovation"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-transparent to-blue-600/20 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-bounce" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-semibold">2025-2026 Innovation Showcase</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Discover the{' '}
                <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Future
                </span>{' '}
                of AI
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Explore revolutionary AI technologies that will transform industries and reshape the future of human-AI collaboration. 
                From neural synthesis to quantum computing integration.
              </p>
            </motion.div>

            {/* Rotating Feature */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                <span className="text-white font-semibold">Featured Innovation:</span>
              </div>
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-yellow-400"
              >
                {features[currentFeature]}
              </motion.div>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-3 bg-white/5 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white font-medium text-sm">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-4 px-8 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Explore Innovations
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/20">
                <Users className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </motion.div>
          </div>

          {/* Right Content - Interactive Demo Preview */}
          <div className="relative">
            <motion.div
              className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-white/20 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              </div>

              {/* Demo Content */}
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <Brain className="w-8 h-8 text-purple-400 mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI Innovation Dashboard</h3>
                    <p className="text-gray-400">Real-time monitoring and control</p>
                  </div>
                </div>

                {/* Animated Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-lg border border-green-500/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-400 font-semibold">Efficiency</span>
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">95.7%</div>
                    <div className="text-xs text-green-300">+12% from last month</div>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-4 rounded-lg border border-blue-500/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-400 font-semibold">Accuracy</span>
                      <Award className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">98.3%</div>
                    <div className="text-xs text-blue-300">+5% from last month</div>
                  </motion.div>
                </div>

                {/* Innovation Cards Preview */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white mb-3">Active Innovations</h4>
                  {['Neural Synthesis', 'Quantum Networks', 'Autonomous Systems'].map((innovation, index) => (
                    <motion.div
                      key={innovation}
                      className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    >
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
                        <span className="text-white font-medium">{innovation}</span>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 mr-1" />
                        <span className="text-sm font-semibold">Active</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>System Optimization</span>
                    <span>87%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "87%" }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10 rounded-2xl pointer-events-none" />
            </motion.div>

            {/* Floating Icons */}
            <motion.div
              className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Rocket className="w-6 h-6 text-black" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-gray-300">AI Innovations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-2">10K+</div>
            <div className="text-gray-300">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-300">Support</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AI2025_2026UltimateInnovationPromotionBanner;