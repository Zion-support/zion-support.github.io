'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Zap, 
  Brain, 
  Cloud, 
  Shield,
  TrendingUp,
  Users,
  Star,
  ChevronRight,
  Play
} from 'lucide-react';

const NewContentShowcase2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Rotate features every 3 seconds
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Brain, text: 'AI Innovations', color: 'from-purple-500 to-pink-500' },
    { icon: Zap, text: 'Automation Solutions', color: 'from-blue-500 to-cyan-500' },
    { icon: Cloud, text: 'Cloud Infrastructure', color: 'from-green-500 to-emerald-500' },
    { icon: Shield, text: 'Security Innovation', color: 'from-red-500 to-orange-500' }
  ];

  const stats = [
    { number: '50+', label: 'New Articles', icon: BookOpen },
    { number: '25+', label: 'Case Studies', icon: TrendingUp },
    { number: '15+', label: 'Tutorials', icon: Play },
    { number: '10K+', label: 'Readers', icon: Users }
  ];

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
              New Content Collection 2025
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Discover Our Latest
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Content Showcase
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-blue-100 mb-8 leading-relaxed"
            >
              Explore cutting-edge insights, tutorials, and case studies covering the latest in AI, automation, cloud computing, and security innovation. Stay ahead with our comprehensive content library.
            </motion.p>

            {/* Rotating Feature */}
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex items-center mb-8"
            >
              <div className={`p-3 rounded-xl bg-gradient-to-r ${features[currentFeature].color} bg-opacity-20 mr-4`}>
                <features[currentFeature].icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-blue-200">Featured Category</p>
                <p className="text-lg font-semibold text-white">{features[currentFeature].text}</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Content
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20">
                <Star className="w-8 h-8 text-green-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Expert Authored</h3>
            <p className="text-blue-200">Content written by industry experts and thought leaders</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20">
                <TrendingUp className="w-8 h-8 text-yellow-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Always Updated</h3>
            <p className="text-blue-200">Fresh content published weekly with latest trends</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20">
                <Users className="w-8 h-8 text-pink-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Community Driven</h3>
            <p className="text-blue-200">Join thousands of professionals learning together</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewContentShowcase2025PromotionBanner;