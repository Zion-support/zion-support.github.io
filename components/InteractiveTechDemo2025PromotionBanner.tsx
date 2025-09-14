'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Code, 
  Cpu, 
  Brain, 
  Zap,
  ArrowRight, 
  X,
  Rocket,
  Settings,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const InteractiveTechDemo2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);

  const demos = [
    { name: 'AI Processing', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { name: 'Quantum Computing', icon: Cpu, color: 'from-blue-500 to-cyan-500' },
    { name: 'Neural Networks', icon: Code, color: 'from-green-500 to-emerald-500' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentDemo((prev) => (prev + 1) % demos.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible, demos.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: -100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    },
    exit: {
      opacity: 0,
      y: -100,
      scale: 0.9,
      transition: {
        duration: 0.5
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.6
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6,
        duration: 0.4
      }
    }
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white shadow-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              {/* Left Content */}
              <motion.div 
                className="flex items-center space-x-4 flex-1"
                variants={textVariants}
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Rocket className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">
                      🚀 Interactive Tech Demo 2025
                    </h3>
                    <p className="text-sm opacity-90 hidden sm:block">
                      Experience cutting-edge technology in real-time
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Center Demo Rotator */}
              <motion.div 
                className="hidden md:flex items-center space-x-4"
                variants={textVariants}
              >
                <div className="text-center">
                  <div className="text-sm opacity-80 mb-1">Live Demo</div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentDemo}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center space-x-2"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${demos[currentDemo].color} flex items-center justify-center`}>
                        {React.createElement(demos[currentDemo].icon, { className: "w-4 h-4 text-white" })}
                      </div>
                      <span className="font-semibold">{demos[currentDemo].name}</span>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="w-px h-8 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">99.2%</div>
                  <div className="text-xs opacity-80">Accuracy</div>
                </div>
                <div className="w-px h-8 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2.3ms</div>
                  <div className="text-xs opacity-80">Response</div>
                </div>
              </motion.div>

              {/* Right Actions */}
              <motion.div 
                className="flex items-center space-x-3"
                variants={buttonVariants}
              >
                <button className="hidden sm:flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-200 backdrop-blur-sm">
                  <Settings className="w-4 h-4" />
                  <span className="text-sm font-medium">Configure</span>
                </button>
                
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-6 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 shadow-lg">
                  <Play className="w-4 h-4" />
                  <span>Try Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button 
                  onClick={handleDismiss}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            </div>

            {/* Mobile Demo Rotator */}
            <motion.div 
              className="md:hidden flex items-center justify-center space-x-4 py-2 border-t border-white/20"
              variants={textVariants}
            >
              <div className="flex items-center space-x-2">
                <motion.div
                  className={`w-6 h-6 rounded-lg bg-gradient-to-r ${demos[currentDemo].color} flex items-center justify-center`}
                  key={currentDemo}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {React.createElement(demos[currentDemo].icon, { className: "w-3 h-3 text-white" })}
                </motion.div>
                <span className="text-sm font-medium">{demos[currentDemo].name}</span>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">99.2% Accuracy</span>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="flex items-center space-x-1">
                <Zap className="w-4 h-4" />
                <span className="text-sm">2.3ms Response</span>
              </div>
            </motion.div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/10 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-16 h-16 bg-cyan-500/15 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InteractiveTechDemo2025PromotionBanner;