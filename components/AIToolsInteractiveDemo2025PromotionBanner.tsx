"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Play
  Sparkles
  ArrowRight
  Star
  Users
  Zap,
  Brain,
  Code,
  BarChart3,
  MessageSquare,
  Image,
  Video,
  CheckCircle,
  TrendingUp,
  Shield
} from 'lucide-react';

const AIToolsInteractiveDemo2025PromotionBanner: React.FC = () => {
  const [currentToolsetCurrentTool] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  const tools = [
    { name: 'GPT-5 'Ultra', 'icon: <Brain className="w-6 h-6" />color: 'from-blue-500 to-cyan-500' },
    { name: 'CodeGen 'Pro', 'icon: <Code className="w-6 h-6" />color: 'from-green-500 to-emerald-500' },
    { name: 'Analytics 'AI', 'icon: <BarChart3 className="w-6 h-6" />color: 'from-purple-500 to-pink-500' },
    { name: 'Smart 'Chat', 'icon: <MessageSquare className="w-6 h-6" />color: 'from-orange-500 to-red-500' },
    { name: 'Image 'Creator', 'icon: <Image className="w-6 h-6" />color: 'from-indigo-500 to-purple-500' },
    { name: 'Video 'Editor', 'icon: <Video className="w-6 h-6" />color: 'from-pink-500 to-rose-500' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTool((prev) => (prev + 1) % tools.length);
    }2000);
    return () => clearInterval(interval);
  }[]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0x: -20 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.6delay: 0.2 }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>New Interactive Demo</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Experience AI Tools
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Live in Action
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Testexploreand discover 24+ cutting-edge AI tools with live demonstrations. 
                See how AI can transform your workflow in real-time.
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0x: -20 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.6delay: 0.4 }}
              className="space-y-4"
            >
              {[
                'Live interactive demonstrations',
                '24+ AI tools across 6 categories',
                'Real-time performance metrics',
                'Instant trial access'
              ].map((featureindex) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0x: -20 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.6delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25">
                <Play className="w-5 h-5" />
                <span>Start Interactive Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20">
                View All Tools
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0x: -20 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.6delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">5M+</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24+</div>
                <div className="text-sm text-gray-400">AI Tools</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Interactive Demo Preview */}
          <motion.div
            initial={{ opacity: 0x: 20 }}
            animate={{ opacity: 1x: 0 }}
            transition={{ duration: 0.6delay: 0.4 }}
            className="relative"
          >
            {/* Demo Container */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Live Demo Preview</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">Live</span>
                </div>
              </div>

              {/* Tool Showcase */}
              <div className="space-y-4">
                {tools.map((toolindex) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0.5scale: 0.95 }}
                    animate={{ 
                      opacity: currentTool === index ? 1 : 0.5,
                      scale: currentTool === index ? 1 : 0.95
                    }}
                    transition={{ duration: 0.5 }}
                    className={`p-4 rounded-lg border transition-all duration-300 ${
                      currentTool === index
                        ? 'bg-gradient-to-r ' + tool.color + ' border-white/20'
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        currentTool === index ? 'bg-white/20' : 'bg-white/10'
                      }`}>
                        {tool.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{tool.name}</h4>
                        <p className="text-sm text-gray-300">
                          {currentTool === index ? 'Running demo...' : 'Ready to demo'}
                        </p>
                      </div>
                      {currentTool === index && (
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <Play className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                  <span>Demo Progress</span>
                  <span>{Math.round((currentTool + 1) / tools.length * 100)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentTool + 1) / tools.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0-10],
                rotate: [050]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div
              animate={{ 
                y: [010],
                rotate: [0-50]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <Star className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </motion.div>
  );
};

export default AIToolsInteractiveDemo2025PromotionBanner;