'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Cloud,
  TrendingUp,
  Users,
  CheckCircle,
  X,
  Play,
  Rocket
} from 'lucide-react';

const UltimateContentShowcase2026PromotionBanner = () => {
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
      title: 'AI Solutions',
      description: 'Revolutionary AI that learns and adapts',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Intelligent workflow automation',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Military-grade security protection',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const stats = [
    { value: '300%', label: 'Average ROI' },
    { value: '99.8%', label: 'Satisfaction' },
    { value: '10K+', label: 'Projects' },
    { value: '50+', label: 'Countries' }
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
          className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/30"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 animate-pulse"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <div className="flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                    <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-purple-300 font-medium text-sm">NEW 2026 SHOWCASE</span>
                  </div>
                  
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="ml-2 text-sm font-medium">5.0 Rating</span>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                  🚀 Revolutionary Technology Solutions
                  <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    for 2026 & Beyond
                  </span>
                </h2>

                <p className="text-lg text-gray-300 mb-6 max-w-2xl">
                  Experience the future of AI, automation, cybersecurity, and cloud solutions. 
                  Transform your business with cutting-edge technology that delivers 
                  <span className="text-yellow-400 font-bold"> 300% ROI guaranteed</span>.
                </p>

                {/* Feature Rotation */}
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
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
                        <features[currentFeature].icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white">{features[currentFeature].title}</div>
                        <div className="text-sm text-gray-300">{features[currentFeature].description}</div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-purple-500/25">
                    <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Explore 2026 Solutions
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </button>
                </div>
              </div>

              {/* Right Content - Interactive Preview */}
              <div className="flex-shrink-0">
                <div className="relative">
                  {/* Main Card */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 w-80 shadow-2xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">Live Dashboard</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-400">Live</span>
                      </div>
                    </div>

                    {/* Mini Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-2xl font-bold text-white">$2.4M</div>
                        <div className="text-xs text-gray-400">Revenue Saved</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-2xl font-bold text-green-400">+340%</div>
                        <div className="text-xs text-gray-400">Efficiency</div>
                      </div>
                    </div>

                    {/* Progress Bars */}
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm text-gray-300 mb-1">
                          <span>AI Processing</span>
                          <span>99.7%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full w-[99.7%]"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm text-gray-300 mb-1">
                          <span>Automation</span>
                          <span>87%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full w-[87%]"></div>
                        </div>
                      </div>
                    </div>

                    {/* Feature Icons */}
                    <div className="flex justify-center gap-4 mt-4">
                      {features.map((feature, index) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <div
                            key={index}
                            className={`p-2 rounded-lg bg-gradient-to-r ${feature.color} ${
                              index === currentFeature ? 'scale-110 shadow-lg' : 'opacity-70'
                            } transition-all duration-300`}
                          >
                            <FeatureIcon className="w-4 h-4 text-white" />
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                  >
                    NEW!
                  </motion.div>

                  <motion.div
                    animate={{ 
                      y: [0, 10, 0],
                      x: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-emerald-400 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                  >
                    300% ROI
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UltimateContentShowcase2026PromotionBanner;