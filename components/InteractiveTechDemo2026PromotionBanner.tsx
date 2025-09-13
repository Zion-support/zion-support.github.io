'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Settings, 
  Zap, 
  Brain, 
  Cpu, 
  ArrowRight, 
  Star,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  X,
  Eye,
  MousePointer,
  Keyboard,
  Monitor
} from 'lucide-react';

const InteractiveTechDemo2026PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate demos
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const demos = [
    {
      icon: Brain,
      title: 'Neural Interface',
      description: 'Direct brain-computer interaction',
      color: 'from-purple-500 to-blue-500',
      stats: '95% efficiency boost'
    },
    {
      icon: Zap,
      title: 'Quantum Computing',
      description: 'Quantum supremacy in action',
      color: 'from-cyan-500 to-teal-500',
      stats: '10^15 ops/second'
    },
    {
      icon: Cpu,
      title: 'AI Automation',
      description: 'Autonomous business systems',
      color: 'from-orange-500 to-red-500',
      stats: '99.9% uptime'
    }
  ];

  const features = [
    { icon: Play, label: 'Interactive Demos', value: '1,000+' },
    { icon: MousePointer, label: 'User Interactions', value: '50M+' },
    { icon: CheckCircle, label: 'Success Rate', value: '99.9%' },
    { icon: Users, label: 'Global Users', value: '10M+' }
  ];

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20" />
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-30"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -50, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-4"
                  >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-4">
                      <Play className="w-4 h-4 text-blue-400 mr-2" />
                      <span className="text-blue-300 font-medium text-sm">NEW: Interactive Tech Demo 2026</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                      Experience the
                      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {' '}Future in Real-Time
                      </span>
                    </h2>
                    
                    <p className="text-lg text-gray-300 mb-6 max-w-2xl">
                      Interact with cutting-edge AI, quantum computing, and neural interface technologies. 
                      See the future of technology in action with our interactive demos.
                    </p>

                    {/* Rotating Demo Preview */}
                    <div className="mb-6">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentDemo}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.5 }}
                          className="flex items-center justify-center lg:justify-start"
                        >
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${demos[currentDemo].color} flex items-center justify-center mr-4`}>
                            <demos[currentDemo].icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">{demos[currentDemo].title}</h3>
                            <p className="text-sm text-gray-400">{demos[currentDemo].description}</p>
                            <div className="text-sm text-blue-400 font-semibold">{demos[currentDemo].stats}</div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                      {features.map((feature, index) => (
                        <motion.div
                          key={feature.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                          className="flex items-center px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
                        >
                          <feature.icon className="w-4 h-4 text-blue-400 mr-2" />
                          <div>
                            <div className="text-sm font-bold text-white">{feature.value}</div>
                            <div className="text-xs text-gray-300">{feature.label}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Right Content - Interactive Preview */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex-shrink-0"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    {/* Demo Preview */}
                    <div className="bg-black/50 rounded-xl p-4 mb-4 min-h-[200px] flex flex-col justify-center">
                      <div className="text-center">
                        <motion.div
                          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                          transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
                          className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center"
                        >
                          <demos[currentDemo].icon className="w-6 h-6 text-white" />
                        </motion.div>
                        
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {demos[currentDemo].title} Demo
                        </h3>
                        
                        <p className="text-sm text-gray-400 mb-3">
                          {demos[currentDemo].description}
                        </p>
                        
                        <div className="flex justify-center space-x-4 text-xs">
                          <div className="text-center">
                            <div className="text-blue-400 font-bold">{demos[currentDemo].stats}</div>
                            <div className="text-gray-500">Performance</div>
                          </div>
                          <div className="text-center">
                            <div className="text-green-400 font-bold">99.9%</div>
                            <div className="text-gray-500">Accuracy</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </motion.button>
                    </div>
                    
                    <div className="space-y-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Try Interactive Demo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/20"
                      >
                        <Clock className="w-4 h-4 mr-2" />
                        Schedule Full Demo
                      </motion.button>
                    </div>
                    
                    <div className="flex items-center justify-center mt-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-300">4.9/5 rating</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Dismiss Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={() => setIsDismissed(true)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            >
              <X className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InteractiveTechDemo2026PromotionBanner;