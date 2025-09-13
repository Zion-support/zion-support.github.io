'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Rocket, 
  Target,
  TrendingUp,
  Users,
  Shield,
  Globe,
  X,
  Play,
  Download,
  Share2,
  Heart,
  MessageCircle,
  Award,
  CheckCircle,
  Sparkles,
  Crown,
  Gem
} from 'lucide-react';

const UltimateContentShowcase2025PromotionBanner = () => {
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
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interfaces',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Quantum AI Fusion',
      description: '1000x faster processing',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Rocket,
      title: 'Autonomous Systems',
      description: 'Self-managing AI operations',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Enterprise Solutions',
      description: 'Complete business transformation',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { number: '500%', label: 'Efficiency Boost', icon: TrendingUp },
    { number: '10,000+', label: 'Active Users', icon: Users },
    { number: '99.9%', label: 'Uptime', icon: Shield },
    { number: '50+', label: 'Countries', icon: Globe }
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
          className="relative overflow-hidden"
        >
          {/* Main Banner */}
          <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 animate-pulse" />
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6"
                  >
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-sm font-semibold mb-4">
                      <Crown className="w-4 h-4 mr-2" />
                      🚀 NEW: Ultimate Content Showcase 2025
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                      Revolutionary AI
                      <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        Technologies
                      </span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-6 max-w-2xl">
                      Discover the most advanced AI innovations, business solutions, and future technologies 
                      that are reshaping the world in 2025 and beyond.
                    </p>
                  </motion.div>

                  {/* Rotating Features */}
                  <motion.div
                    key={currentFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                  >
                    <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${features[currentFeature].color} rounded-full text-white`}>
                      <features[currentFeature].icon className="w-5 h-5 mr-3" />
                      <div>
                        <div className="font-semibold">{features[currentFeature].title}</div>
                        <div className="text-sm opacity-90">{features[currentFeature].description}</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                        <div className="text-sm text-gray-300">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  >
                    <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group">
                      <Play className="w-5 h-5 mr-2" />
                      Explore Now
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Download Guide
                    </button>
                  </motion.div>
                </div>

                {/* Right Content - Visual */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex-1 max-w-lg"
                >
                  <div className="relative">
                    {/* Main Visual Card */}
                    <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6">
                          <Gem className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          Ultimate Content Showcase
                        </h3>
                        <p className="text-gray-300 mb-6">
                          Experience the future of AI technology with our comprehensive showcase
                        </p>
                        
                        {/* Feature Highlights */}
                        <div className="space-y-3">
                          {[
                            'Neural Interface Technology',
                            'Quantum AI Fusion',
                            'Autonomous Business Systems',
                            'Predictive Analytics Engine'
                          ].map((feature, index) => (
                            <div key={index} className="flex items-center text-left">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
                    >
                      <Star className="w-8 h-8 text-white fill-current" />
                    </motion.div>
                    
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center"
                    >
                      <Sparkles className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Gradient */}
          <div className="h-2 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UltimateContentShowcase2025PromotionBanner;