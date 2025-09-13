'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain,
  Play,
  X,
  Code,
  Image,
  FileText,
  Video,
  Music,
  BarChart3
} from 'lucide-react';

const InteractiveAIToolsShowcase2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentTool, setCurrentTool] = useState(0);

  const tools = [
    { icon: FileText, name: "AI Writer", color: "from-blue-500 to-cyan-500" },
    { icon: Image, name: "AI Images", color: "from-purple-500 to-pink-500" },
    { icon: Video, name: "AI Video", color: "from-red-500 to-orange-500" },
    { icon: Music, name: "AI Music", color: "from-green-500 to-teal-500" },
    { icon: Code, name: "AI Code", color: "from-indigo-500 to-purple-500" },
    { icon: BarChart3, name: "AI Analytics", color: "from-yellow-500 to-red-500" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTool((prev) => (prev + 1) % tools.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (isDismissed) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -100 
      }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut" 
      }}
      className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-pink-600/90"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/200')] bg-cover bg-center opacity-15"></div>
        
        {/* Floating Tool Icons */}
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            className="absolute w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
            style={{
              left: `${10 + (index * 15)}%`,
              top: `${20 + (index % 2) * 30}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          >
            <tool.icon className="w-4 h-4 text-white" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="flex-shrink-0"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
            </motion.div>
            
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-3 mb-1"
              >
                <span className="text-white font-bold text-lg">
                  🚀 INTERACTIVE AI TOOLS SHOWCASE
                </span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="flex items-center space-x-1"
                >
                  <Star className="w-4 h-4 text-yellow-300" />
                  <Star className="w-4 h-4 text-yellow-300" />
                  <Star className="w-4 h-4 text-yellow-300" />
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center space-x-4"
              >
                <p className="text-white/90 text-sm md:text-base">
                  Try AI tools live: Writer, Images, Video, Music, Code & Analytics
                </p>
                
                {/* Rotating Tool Display */}
                <div className="hidden md:flex items-center space-x-2">
                  <span className="text-white/70 text-sm">Now featuring:</span>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTool}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r ${tools[currentTool].color} bg-opacity-20`}
                    >
                      <tools[currentTool].icon className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-medium">
                        {tools[currentTool].name}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all duration-300"
            >
              <Play className="w-4 h-4" />
              <span className="text-sm font-medium">Live Demo</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-white text-purple-600 hover:bg-gray-100 px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg"
            >
              <Zap className="w-4 h-4" />
              <span>Try Now</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDismissed(true)}
              className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all duration-300"
            >
              <Play className="w-4 h-4" />
              <span className="text-sm font-medium">Live Demo</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-white text-purple-600 hover:bg-gray-100 px-4 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg"
            >
              <Zap className="w-4 h-4" />
              <span>Try Now</span>
            </motion.button>
          </div>
          
          {/* Mobile Tool Display */}
          <div className="flex items-center space-x-2">
            <span className="text-white/70 text-sm">Featuring:</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTool}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={`flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r ${tools[currentTool].color} bg-opacity-20`}
              >
                <tools[currentTool].icon className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">
                  {tools[currentTool].name}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-white/30"
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: 25, ease: "linear" }}
      />
    </motion.div>
  );
};

export default InteractiveAIToolsShowcase2025PromotionBanner;