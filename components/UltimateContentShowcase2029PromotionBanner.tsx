'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  X, 
  Play,
  Star,
  Zap,
  Brain,
  Rocket,
  TrendingUp,
  Clock,
  Users,
  Award
} from 'lucide-react';

const UltimateContentShowcase2029PromotionBanner = () => {
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
      title: 'Conscious AI Systems',
      description: 'Revolutionary AI with self-awareness',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Quantum Computing',
      description: '1000x processing power',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Neural Interfaces',
      description: 'Direct brain-computer integration',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Rocket,
      title: 'Space Technology',
      description: 'Mars colonization ready',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { label: 'Breakthroughs', value: '500+' },
    { label: 'Innovations', value: '100+' },
    { label: 'Interfaces', value: '50+' },
    { label: 'Missions', value: '25+' }
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
          className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-pink-900 to-blue-900"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20"
              animate={{
                background: [
                  'linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))',
                  'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
                  'linear-gradient(225deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))',
                  'linear-gradient(315deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))'
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
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
                  <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    NEW: Ultimate Content Showcase 2029
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
                  The Future is{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Here
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-gray-200 mb-6 max-w-2xl"
                >
                  Explore groundbreaking technologies and innovations that will reshape our world in 2029 and beyond
                </motion.p>

                {/* Rotating Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-center gap-4 mb-6"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentFeature}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${features[currentFeature].color}`}>
                        <features[currentFeature].icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">{features[currentFeature].title}</div>
                        <div className="text-gray-300 text-sm">{features[currentFeature].description}</div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
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
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 group">
                    <Play className="w-5 h-5" />
                    Explore Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Limited Time
                  </button>
                </motion.div>
              </div>

              {/* Right Content - Visual */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Central Circle */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-20"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                  
                  {/* Orbiting Elements */}
                  {features.map((feature, index) => (
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
                        y: [0, Math.sin(index * Math.PI / 2) * 120]
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  ))}

                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Award className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>
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

export default UltimateContentShowcase2029PromotionBanner;