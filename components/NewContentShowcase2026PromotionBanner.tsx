'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Brain, 
  Zap, 
  Rocket, 
  ArrowRight, 
  X,
  Play,
  Star,
  TrendingUp,
  Users,
  Clock
} from 'lucide-react';

const NewContentShowcase2026PromotionBanner = () => {
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
      title: 'Quantum Neural Networks',
      description: 'Breakthrough AI processing technology',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Neural Interfaces',
      description: 'Direct brain-computer communication',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Rocket,
      title: 'Future Technology',
      description: '2030+ vision and predictions',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { label: 'New Articles', value: '150+', icon: TrendingUp },
    { label: 'Active Readers', value: '50K+', icon: Users },
    { label: 'Updated Daily', value: '24/7', icon: Clock }
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
          className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/200')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-blue-900/80 to-purple-900/80"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6"
                >
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-bold mb-4">
                    <Sparkles className="w-4 h-4 mr-2" />
                    NEW CONTENT SHOWCASE 2026
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Revolutionary Technology
                    <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Content Hub
                    </span>
                  </h2>
                  
                  <p className="text-lg text-gray-300 max-w-2xl">
                    Discover the most advanced AI innovations, quantum computing breakthroughs, 
                    and future technology visions that will reshape our world.
                  </p>
                </motion.div>

                {/* Rotating Features */}
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center lg:justify-start mb-6"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${features[currentFeature].color} flex items-center justify-center mr-4`}>
                    <features[currentFeature].icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {features[currentFeature].title}
                    </h3>
                    <p className="text-gray-300">
                      {features[currentFeature].description}
                    </p>
                  </div>
                </motion.div>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-2">
                        <stat.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/content-showcase-2026"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 group"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Explore Content
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link
                    href="/newsletter-signup"
                    className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Join Community
                  </Link>
                </div>
              </div>

              {/* Right Content - Preview Cards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex-shrink-0 w-full lg:w-96"
              >
                <div className="grid grid-cols-1 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className={`p-4 rounded-xl bg-gradient-to-r ${feature.color} bg-opacity-20 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-300 ${
                        currentFeature === index ? 'ring-2 ring-purple-400 ring-opacity-50' : ''
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mr-3`}>
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white text-sm">{feature.title}</h4>
                          <p className="text-gray-300 text-xs">{feature.description}</p>
                        </div>
                        <Star className="w-4 h-4 text-yellow-400" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewContentShowcase2026PromotionBanner;