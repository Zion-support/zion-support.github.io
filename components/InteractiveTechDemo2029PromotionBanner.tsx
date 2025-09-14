'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Settings, 
  ArrowRight, 
  X, 
  Zap,
  Brain,
  Rocket,
  Users,
  Cpu,
  Network,
  Shield,
  Activity,
  BarChart3,
  Globe,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

const InteractiveTechDemo2029PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
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
      icon: Cpu,
      title: 'Quantum AI Processing',
      description: '1000x processing power',
      color: 'from-blue-500 to-cyan-500',
      status: 'success'
    },
    {
      icon: Brain,
      title: 'Neural Interface',
      description: 'Direct brain-computer interaction',
      color: 'from-purple-500 to-pink-500',
      status: 'success'
    },
    {
      icon: Rocket,
      title: 'Space Technology',
      description: 'Mars colonization ready',
      color: 'from-orange-500 to-red-500',
      status: 'warning'
    },
    {
      icon: Users,
      title: 'Conscious AI',
      description: 'Self-aware AI systems',
      color: 'from-green-500 to-emerald-500',
      status: 'success'
    }
  ];

  const features = [
    'Real-time interaction',
    'Immersive experience',
    'Live metrics',
    'Multiple demos'
  ];

  const stats = [
    { label: 'Active Users', value: '10K+' },
    { label: 'Demos Available', value: '4' },
    { label: 'Success Rate', value: '99.9%' },
    { label: 'Satisfaction', value: '5.0★' }
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
          className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-cyan-900"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"
              animate={{
                background: [
                  'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.2))',
                  'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))',
                  'linear-gradient(225deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
                  'linear-gradient(315deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.2))'
                ]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center justify-center lg:justify-start gap-3 mb-4"
                >
                  <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    <Settings className="w-4 h-4" />
                    NEW: Interactive Tech Demo 2029
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                >
                  Experience the{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Future
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-gray-200 mb-6 max-w-2xl"
                >
                  Interact with cutting-edge technologies through our immersive demo platform
                </motion.p>

                {/* Rotating Demo Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-center gap-4 mb-6"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentDemo}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${demos[currentDemo].color}`}>
                        <demos[currentDemo].icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">{demos[currentDemo].title}</div>
                        <div className="text-gray-300 text-sm">{demos[currentDemo].description}</div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        demos[currentDemo].status === 'success' ? 'bg-green-500/20 text-green-400' :
                        demos[currentDemo].status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {demos[currentDemo].status}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6"
                >
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm text-gray-200">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
                    </div>
                  ))}
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex flex-wrap gap-6 justify-center lg:justify-start mb-6"
                >
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2 group">
                    <Play className="w-5 h-5" />
                    Start Demo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Customize
                  </button>
                </motion.div>
              </div>

              {/* Right Content - Demo Visualization */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Central Demo Circle */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 opacity-20"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                  
                  {/* Demo Icons */}
                  {demos.map((demo, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center"
                      style={{
                        top: '50%',
                        left: '50%',
                        transformOrigin: '0 0'
                      }}
                      animate={{
                        rotate: [0, 360],
                        x: [0, Math.cos(index * Math.PI / 2) * 120],
                        y: [0, Math.sin(index * Math.PI / 2) * 120],
                        scale: currentDemo === index ? [1, 1.2, 1] : 1
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      <demo.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  ))}

                  {/* Center Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-10 h-10 text-white ml-1" />
                    </motion.button>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    animate={{
                      y: [0, -8, 0],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 0.5
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-4 w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
                    animate={{
                      x: [0, 10, 0],
                      opacity: [0.4, 0.9, 0.4]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 1
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InteractiveTechDemo2029PromotionBanner;