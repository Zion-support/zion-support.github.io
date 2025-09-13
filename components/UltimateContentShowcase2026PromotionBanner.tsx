'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Brain, 
  Zap, 
  Rocket, 
  ArrowRight, 
  Star,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  X
} from 'lucide-react';

const UltimateContentShowcase2026PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate features
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Neural Interface Technology',
      description: 'Direct brain-computer interfaces for seamless human-AI collaboration',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Quantum AI Processing',
      description: 'Quantum-powered AI that processes data at unprecedented speeds',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: Rocket,
      title: 'Autonomous Business Systems',
      description: 'Self-managing AI systems that run your business operations',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { label: 'AI Models', value: '10,000+', icon: Brain },
    { label: 'Quantum Qubits', value: '1M+', icon: Zap },
    { label: 'Global Users', value: '50M+', icon: Users },
    { label: 'Success Rate', value: '99.9%', icon: CheckCircle }
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
              {[...Array(20)].map((_, i) => (
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
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
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
                      <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
                      <span className="text-blue-300 font-medium text-sm">NEW: 2026 Ultimate Technology Showcase</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                      Experience the
                      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {' '}Future of Technology
                      </span>
                    </h2>
                    
                    <p className="text-lg text-gray-300 mb-6 max-w-2xl">
                      Discover revolutionary AI, quantum computing, and future technology solutions 
                      that will transform your business and reshape the world.
                    </p>

                    {/* Rotating Features */}
                    <div className="mb-6">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentFeature}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.5 }}
                          className="flex items-center justify-center lg:justify-start"
                        >
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${features[currentFeature].color} flex items-center justify-center mr-4`}>
                            <features[currentFeature].icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">{features[currentFeature].title}</h3>
                            <p className="text-sm text-gray-400">{features[currentFeature].description}</p>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                          className="flex items-center px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
                        >
                          <stat.icon className="w-4 h-4 text-blue-400 mr-2" />
                          <div>
                            <div className="text-sm font-bold text-white">{stat.value}</div>
                            <div className="text-xs text-gray-300">{stat.label}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Right Content - CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex-shrink-0"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-300">4.9/5 rating</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">Limited Time Offer</h3>
                    <p className="text-gray-300 mb-4">Get early access to our 2026 technology showcase</p>
                    
                    <div className="space-y-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center"
                      >
                        Explore Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/20"
                      >
                        <Clock className="w-4 h-4 mr-2" />
                        Schedule Demo
                      </motion.button>
                    </div>
                    
                    <p className="text-xs text-gray-400 mt-3">
                      Join 50M+ users worldwide
                    </p>
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

export default UltimateContentShowcase2026PromotionBanner;