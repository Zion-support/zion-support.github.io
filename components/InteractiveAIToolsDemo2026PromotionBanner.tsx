'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Play, 
  Zap, 
  Brain, 
  Code, 
  TrendingUp, 
  Shield,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Users,
  Star,
  Globe,
  Target,
  Rocket
} from 'lucide-react';

const InteractiveAIToolsDemo2026PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);

  const demos = [
    {
      title: 'AI Business Automation',
      description: 'Watch AI handle complex workflows automatically',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      stats: ['340% Efficiency', '2,500 hrs saved', '99.7% Accuracy']
    },
    {
      title: 'Predictive Analytics',
      description: 'See AI predict future trends and outcomes',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      stats: ['94.2% Accuracy', '10K+ Predictions', '50+ Insights']
    },
    {
      title: 'AI Code Generation',
      description: 'Experience AI writing production-ready code',
      icon: Code,
      color: 'from-green-500 to-teal-500',
      stats: ['2,500+ Lines', '95% Test Coverage', '0 Bugs']
    },
    {
      title: 'AI Security Analysis',
      description: 'Watch AI detect and prevent security threats',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      stats: ['47 Threats Detected', '89% Risk Reduction', '99.9% Uptime']
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate demos
    const interval = setInterval(() => {
      setCurrentDemo(prev => (prev + 1) % demos.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const currentDemoData = demos[currentDemo];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 rounded-full blur-xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-6"
            >
              <Play className="w-4 h-4" />
              Interactive AI Demo 2026
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Experience AI
              <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                In Real-Time
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Try our interactive demonstrations and see how AI transforms your business 
              processes in real-time. No signup required - experience the power of AI instantly.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="space-y-4 mb-8"
            >
              {[
                'Live AI Process Visualization',
                'Real-time Performance Metrics',
                'Interactive Step-by-Step Guides',
                'Instant Results & Insights'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 hover:shadow-2xl transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                Try Interactive Demo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View All Demos
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Demo Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Demo Carousel */}
            <motion.div
              key={currentDemo}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${currentDemoData.color} rounded-full flex items-center justify-center`}>
                  <currentDemoData.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{currentDemoData.title}</h3>
                  <p className="text-gray-300 text-sm">{currentDemoData.description}</p>
                </div>
              </div>

              {/* Demo Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                {currentDemoData.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-lg font-bold text-white">{stat}</div>
                    <div className="text-xs text-gray-400">Performance</div>
                  </motion.div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                <motion.div
                  className={`h-2 bg-gradient-to-r ${currentDemoData.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                />
              </div>

              <div className="text-center text-sm text-gray-300">
                Demo in progress...
              </div>
            </motion.div>

            {/* Demo Navigation */}
            <div className="flex justify-center gap-2">
              {demos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentDemo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentDemo === index ? 'bg-yellow-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <Users className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <div className="text-white font-bold">50K+</div>
                <div className="text-gray-300 text-sm">Users</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <Star className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                <div className="text-white font-bold">4.9/5</div>
                <div className="text-gray-300 text-sm">Rating</div>
              </div>
            </motion.div>

            {/* Floating Action */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 text-yellow-400 text-sm font-medium"
              >
                <Rocket className="w-4 h-4" />
                Scroll down to try the demo
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </motion.section>
  );
};

export default InteractiveAIToolsDemo2026PromotionBanner;