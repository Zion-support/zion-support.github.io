'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  TrendingUp, 
  Users, 
  Award,
  ChevronRight,
  Play,
  Star,
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  Target,
  X
} from 'lucide-react';

const UltimateContentShowcase2025Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate features
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Neural AI Revolution',
      description: 'Direct brain-computer interfaces',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Quantum Computing',
      description: '1000x faster processing power',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Rocket,
      title: 'Autonomous Systems',
      description: 'Self-managing business processes',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Unbreakable encryption technology',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const stats = [
    { label: 'AI Models', value: '10,000+', icon: Brain },
    { label: 'Businesses', value: '5,000+', icon: Users },
    { label: 'Savings', value: '$2.5B+', icon: TrendingUp },
    { label: 'Success Rate', value: '99.8%', icon: Award }
  ];

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 animate-pulse"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between">
              {/* Left Content */}
              <div className="flex-1">
                <div className="flex items-center space-x-4">
                  {/* Feature Rotator */}
                  <div className="relative w-16 h-16">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentFeature}
                        initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
                        transition={{ duration: 0.5 }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${features[currentFeature].color} flex items-center justify-center`}
                      >
                        <features[currentFeature].icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-400 text-sm font-medium">NEW</span>
                      <span className="text-gray-400 text-sm">•</span>
                      <span className="text-gray-300 text-sm">2025 Technology Showcase</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      {features[currentFeature].title}
                    </h2>
                    <p className="text-gray-300 text-sm">
                      {features[currentFeature].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Center Stats */}
              <div className="hidden lg:flex items-center space-x-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-gray-400 text-xs">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Right Actions */}
              <div className="flex items-center space-x-4">
                <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </button>
                <button className="px-6 py-2 bg-transparent border border-purple-400 text-purple-400 rounded-full font-medium hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button
                  onClick={() => setIsDismissed(true)}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mobile Stats */}
            <div className="lg:hidden mt-4 grid grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UltimateContentShowcase2025Banner;