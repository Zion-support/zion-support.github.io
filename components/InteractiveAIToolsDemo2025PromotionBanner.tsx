<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Play
  Zap
  Brain
  Code
  Image
  FileText
  BarChart3,
  Video,
  Music,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Sparkles,
  TrendingUp
} from 'lucide-react';

const InteractiveAIToolsDemo2025PromotionBanner: React.FC = () => {
  const [currentToolsetCurrentTool] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  const tools = [
    { name: 'Text 'Generator', 'icon: <FileText className="w-6 h-6" />color: 'from-blue-500 to-cyan-500' },
    { name: 'Image 'Creator', 'icon: <Image className="w-6 h-6" />color: 'from-purple-500 to-pink-500' },
    { name: 'Code 'Assistant', 'icon: <Code className="w-6 h-6" />color: 'from-green-500 to-emerald-500' },
    { name: 'Data 'Analyzer', 'icon: <BarChart3 className="w-6 h-6" />color: 'from-orange-500 to-red-500' },
    { name: 'Video 'Creator', 'icon: <Video className="w-6 h-6" />color: 'from-indigo-500 to-purple-500' },
    { name: 'Music 'Composer', 'icon: <Music className="w-6 h-6" />color: 'from-pink-500 to-rose-500' }
  ];

  const benefits = [
    "Real-time AI processing",
    "Multiple tool categories",
    "Instant results",
    "Professional quality output"
  ];

  const stats = [
    { value: "50+"label: "AI Tools" },
    { value: "98%"label: "Accuracy" },
    { value: "2.3s"label: "Avg. Speed" },
    { value: "10K+"label: "Users" }
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
      className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20 animate-pulse" />
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
              initial={{ opacity: 0scale: 0.8 }}
              animate={{ opacity: 1scale: 1 }}
              transition={{ duration: 0.6delay: 0.2 }}
            >
              <Zap className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-semibold">Interactive AI Demo</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Try AI Tools{' '}
                <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Live
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Experience the power of AI firsthand. Generate contentcreate visualswrite codeand analyze data with our interactive demo. 
                No signup required - just click and create!
              </p>
            </motion.div>

            {/* Rotating Tool Showcase */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              initial={{ opacity: 0x: -20 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.8delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <Brain className="w-6 h-6 text-yellow-400 mr-3" />
                <span className="text-white font-semibold">Featured Tool:</span>
              </div>
              <motion.div
                key={currentTool}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <div className={`p-3 rounded-lg bg-gradient-to-r ${tools[currentTool].color} mr-4`}>
                  {tools[currentTool].icon}
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">
                    {tools[currentTool].name}
                  </div>
                  <div className="text-gray-300 text-sm">
                    Click to try it now
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8delay: 0.5 }}
            >
              {benefits.map((benefitindex) => (
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
              transition={{ duration: 0.8delay: 0.6 }}
            >
              <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-4 px-8 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Try Demo Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/20">
                <Users className="w-5 h-5 mr-2" />
                View All Tools
              </button>
            </motion.div>
          </div>

          {/* Right Content - Interactive Preview */}
          <div className="relative">
            <motion.div
              className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-white/20 shadow-2xl"
              initial={{ opacity: 0scale: 0.9 }}
              animate={{ opacity: 1scale: 1 }}
              transition={{ duration: 0.8delay: 0.4 }}
            >
              {/* Demo Interface */}
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="text-sm text-gray-400">AI Tools Demo</div>
                </div>

                {/* Tool Selection */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">Select AI Tool</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {tools.slice(06).map((toolindex) => (
                      <motion.div
                        key={index}
                        className={`p-3 rounded-lg text-center cursor-pointer transition-all duration-300 ${
                          index === currentTool
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                            : 'bg-white/5 text-gray-300 hover:bg-white/10'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="flex justify-center mb-1">
                          {tool.icon}
                        </div>
                        <div className="text-xs font-medium">{tool.name}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Input/Output Preview */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Input</label>
                    <div className="bg-slate-700 rounded-lg p-3 text-gray-300 text-sm">
                      "Create a professional email about our new AI product launch..."
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Output</label>
                    <div className="bg-slate-700 rounded-lg p-3 text-gray-300 text-sm">
                      <div className="flex items-center mb-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                        <span className="text-green-400 text-xs">Processing...</span>
                      </div>
                      <div className="text-xs opacity-75">
                        Subject: Exciting News - Introducing Our Revolutionary AI Platform...
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-4 rounded-lg text-sm font-semibold flex items-center justify-center">
                    <Play className="w-4 h-4 mr-1" />
                    Process
                  </button>
                  <button className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-semibold hover:bg-white/20 transition-colors">
                    Reset
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">2.3s</div>
                    <div className="text-xs text-gray-400">Avg. Speed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">98%</div>
                    <div className="text-xs text-gray-400">Accuracy</div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10 rounded-2xl pointer-events-none" />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                y: [0-10],
                rotate: [050]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Zap className="w-6 h-6 text-black" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                y: [010],
                rotate: [0-50]
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
          transition={{ duration: 0.8delay: 0.8 }}
        >
          {stats.map((statindex) => (
            <div key={index}>
              <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InteractiveAIToolsDemo2025PromotionBanner;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
