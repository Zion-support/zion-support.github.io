'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Cpu,
  TrendingUp,
  Users,
  Globe,
  CheckCircle
} from 'lucide-react';

const UltimateContentShowcase2026PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    'Revolutionary AI Technologies',
    'Quantum Computing Breakthroughs',
    'Advanced Automation Solutions',
    'Future Technology Trends'
  ];

  const stats = [
    { value: '10,000+', label: 'AI Models' },
    { value: '1M+', label: 'Quantum Qubits' },
    { value: '50,000+', label: 'Processes' },
    { value: '99%', label: 'Global Impact' }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
              <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-medium">2026 Technology Showcase</span>
            </div>

            {/* Main Heading */}
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ultimate Content
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Showcase</span>
                <br />
                <span className="text-3xl md:text-5xl">2026 Edition</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover the most advanced AI, quantum computing, and automation solutions 
                that are reshaping industries and creating unprecedented opportunities for growth.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center text-gray-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center"
              >
                Explore Showcase
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Stats and Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Technology Icons */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                Featured Technologies
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-3">
                    <Brain className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-white font-medium">AI Innovations</div>
                  <div className="text-gray-400 text-sm">Neural Networks</div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-3">
                    <Cpu className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-white font-medium">Quantum Computing</div>
                  <div className="text-gray-400 text-sm">Quantum Supremacy</div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-3">
                    <Zap className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-white font-medium">Automation</div>
                  <div className="text-gray-400 text-sm">Smart Workflows</div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-3">
                    <Globe className="w-8 h-8 text-orange-400" />
                  </div>
                  <div className="text-white font-medium">Future Tech</div>
                  <div className="text-gray-400 text-sm">XR & Edge AI</div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span className="text-sm">10,000+ Users</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span className="text-sm">99% Success</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026PromotionBanner;