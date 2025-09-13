'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  ArrowRight, 
  X, 
  Play, 
  Code, 
  Image,
  FileText,
  BarChart3,
  MessageSquare,
  CheckCircle,
  Sparkles,
  Zap
} from 'lucide-react';

const InteractiveAIToolsShowcase2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentTool, setCurrentTool] = useState(0);

  const tools = [
    { icon: Code, name: 'Code Generator', color: 'text-blue-400' },
    { icon: Image, name: 'Image Creator', color: 'text-purple-400' },
    { icon: FileText, name: 'Content Writer', color: 'text-green-400' },
    { icon: BarChart3, name: 'Data Analyzer', color: 'text-orange-400' },
    { icon: MessageSquare, name: 'Chat Assistant', color: 'text-pink-400' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTool(prev => (prev + 1) % tools.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ 
                x: [0, 100, 0],
                y: [0, -30, 0],
                rotate: [0, 360, 0]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute top-4 right-20 w-8 h-8 bg-white/20 rounded-full"
            />
            <motion.div
              animate={{ 
                x: [0, -80, 0],
                y: [0, 40, 0],
                rotate: [0, -180, 0]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute bottom-4 left-16 w-6 h-6 bg-white/20 rounded-full"
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center justify-center lg:justify-start gap-2 mb-3"
                >
                  <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                    <Bot className="w-4 h-4" />
                    <span className="text-sm font-medium">INTERACTIVE DEMO</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Play className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-medium">LIVE NOW</span>
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-2xl lg:text-3xl font-bold mb-2"
                >
                  🤖 Interactive AI Tools Showcase 2025
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-purple-100 text-lg mb-4"
                >
                  Try AI Tools in Real-Time • Code Generator • Image Creator • Content Writer
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm"
                >
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>5 AI Tools</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Real-time Demo</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Free Trial</span>
                  </div>
                </motion.div>
              </div>

              {/* Center - Rotating Tool Icons */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="relative w-20 h-20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTool}
                      initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-white/20 rounded-2xl flex items-center justify-center"
                    >
                      <tools[currentTool].icon className={`w-10 h-10 ${tools[currentTool].color}`} />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <motion.div
                  key={currentTool}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className="text-sm font-medium">{tools[currentTool].name}</div>
                  <div className="text-xs text-purple-200">Try it now!</div>
                </motion.div>
              </motion.div>

              {/* Right Content - CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col gap-4"
              >
                <div className="text-center lg:text-right">
                  <div className="text-3xl font-bold mb-1">Try Now</div>
                  <div className="text-purple-200 text-sm">Experience AI in action</div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <Play className="w-4 h-4" />
                    Start Demo
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                    Learn More
                  </button>
                </div>

                {/* Dismiss Button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  onClick={handleDismiss}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors duration-300 self-center"
                  aria-label="Dismiss banner"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InteractiveAIToolsShowcase2025PromotionBanner;