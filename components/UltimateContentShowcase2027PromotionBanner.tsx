'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  Star, 
  TrendingUp, 
  ArrowRight,
  Play,
  BookOpen,
  Lightbulb,
  Target,
  Award,
  ChevronRight,
  X,
  Clock,
  Users,
  Globe
} from 'lucide-react';

const UltimateContentShowcase2027PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: Brain,
      title: "AI Consciousness Evolution",
      description: "Revolutionary AI achieving near-human consciousness",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Zap,
      title: "Quantum Neural Fusion",
      description: "Quantum computing meets neural networks",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Rocket,
      title: "Autonomous Operations",
      description: "Complete business automation without human intervention",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Star,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interface technology",
      color: "from-orange-600 to-red-600"
    }
  ];

  const stats = [
    { label: "Content Pieces", value: "500+", icon: BookOpen },
    { label: "Active Users", value: "2.3M+", icon: Users },
    { label: "Countries", value: "150+", icon: Globe },
    { label: "Success Rate", value: "99.7%", icon: Target }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/400')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-transparent to-blue-900/80"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-40"
            animate={{
              x: [0, Math.random() * 400],
              y: [0, Math.random() * 200],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              ULTIMATE CONTENT SHOWCASE 2027
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Revolutionary
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}Content
                </span>
                <br />
                <span className="text-3xl md:text-5xl">Showcase 2027</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Discover the most groundbreaking content, innovations, and technologies 
                that are reshaping our world in 2027 and beyond. Join the revolution!
              </p>
            </motion.div>

            {/* Rotating Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${features[currentFeature].color}`}>
                  {React.createElement(features[currentFeature].icon, { className: "w-6 h-6 text-white" })}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {features[currentFeature].title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {features[currentFeature].description}
                  </p>
                </div>
              </div>
              
              {/* Feature Indicators */}
              <div className="flex gap-2">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentFeature ? 'w-8 bg-purple-400' : 'w-2 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <Play className="w-5 h-5" />
                Explore Content Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                <BookOpen className="w-5 h-5" />
                View All Content
              </button>
            </motion.div>
          </div>

          {/* Right Content - Visual Showcase */}
          <div className="relative">
            {/* Main Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[url('/api/placeholder/600/400')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/50"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI Consciousness Evolution</h3>
                    <p className="text-purple-100">Revolutionary breakthrough in 2027</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Neural Architecture Advanced</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Emotional Intelligence Integrated</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Consciousness Level: 94.7%</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-white">
                    <Clock className="w-4 h-4" />
                    <span>8 min read</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Users className="w-4 h-4" />
                    <span>2.3M views</span>
                  </div>
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.9</span>
                  </div>
                </div>
              </div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </motion.button>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-2xl"
            >
              <Award className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl flex items-center justify-center shadow-2xl"
            >
              <TrendingUp className="w-6 h-6 text-white" />
            </motion.div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

export default UltimateContentShowcase2027PromotionBanner;