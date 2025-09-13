'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  ArrowRight, 
  Play, 
  Sparkles,
  TrendingUp,
  Award,
  ChevronRight,
  Code,
  Database,
  Shield,
  BarChart3,
  Users,
  Lightbulb,
  Rocket
} from 'lucide-react';

const InteractiveAIToolsShowcase2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTool, setCurrentTool] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Rotate through tools every 3 seconds
    const interval = setInterval(() => {
      setCurrentTool(prev => (prev + 1) % 6);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const tools = [
    { icon: Brain, name: 'Neural Interface Pro', color: 'from-purple-500 to-blue-500' },
    { icon: Zap, name: 'Quantum AI Engine', color: 'from-green-500 to-emerald-500' },
    { icon: Lightbulb, name: 'Consciousness AI', color: 'from-orange-500 to-red-500' },
    { icon: Rocket, name: 'Automation Master', color: 'from-blue-500 to-indigo-500' },
    { icon: Shield, name: 'AI Security Suite', color: 'from-red-500 to-pink-500' },
    { icon: BarChart3, name: 'Data Insights AI', color: 'from-teal-500 to-cyan-500' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded-3xl p-8 md:p-12 my-8"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-4 py-2 rounded-full font-bold text-sm mb-6"
            >
              <Code className="w-4 h-4" />
              INTERACTIVE AI TOOLS
              <Sparkles className="w-4 h-4" />
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Interactive AI Tools
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Showcase 2025
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Experience the most advanced AI tools and technologies that will transform 
              how you work, create, and innovate in 2025.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {[
                { icon: Brain, text: 'Neural Interface Pro' },
                { icon: Zap, text: 'Quantum AI Engine' },
                { icon: Lightbulb, text: 'Consciousness AI' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <feature.icon className="w-4 h-4 text-cyan-400" />
                  <span className="text-white text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
                <Play className="w-6 h-6" />
                Try Interactive Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                <ChevronRight className="w-5 h-5" />
                View All Tools
              </button>
            </motion.div>
          </div>

          {/* Right Visual - Rotating Tools */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-80 h-80">
              {/* Main Circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              
              {/* Rotating Tools Ring */}
              <div className="absolute inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-30 animate-spin" style={{ animationDuration: '15s' }}></div>
              
              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  key={currentTool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${tools[currentTool].color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                    <tools[currentTool].icon className="w-10 h-10 text-black" />
                  </div>
                  <div className="text-white font-bold text-lg">{tools[currentTool].name}</div>
                  <div className="text-gray-300 text-sm">AI Tool</div>
                </motion.div>
              </div>

              {/* Floating Tool Icons */}
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: index === currentTool ? 1 : 0.3, 
                    scale: index === currentTool ? 1 : 0.8 
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute ${
                    index === 0 ? 'top-4 left-1/2' :
                    index === 1 ? 'top-1/2 right-4' :
                    index === 2 ? 'bottom-4 left-1/2' :
                    index === 3 ? 'top-1/2 left-4' :
                    index === 4 ? 'top-1/4 right-1/4' :
                    'bottom-1/4 left-1/4'
                  } transform -translate-x-1/2 -translate-y-1/2`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default InteractiveAIToolsShowcase2025PromotionBanner;