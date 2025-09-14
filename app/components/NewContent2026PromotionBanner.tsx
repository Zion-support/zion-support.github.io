'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, TrendingUp, Calculator, FileText, Users, Star, Target, Award, Rocket } from 'lucide-react';

const NewContent2026PromotionBanner = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const newContent = [
    {
      title: "AI 2026: Enterprise Automation Breakthrough",
      description: "400% ROI in 90 Days - Revolutionary automation systems transforming Fortune 500 companies",
      type: "blog",
      url: "/blog/ai-2026-enterprise-automation-breakthrough",
      icon: Zap,
      color: "from-blue-600 to-purple-600",
      highlight: "400% ROI",
      category: "Enterprise AI"
    },
    {
      title: "Fortune 500 AI Transformation: $5.2B Success",
      description: "Complete case study of how a Fortune 500 company achieved unprecedented revenue growth",
      type: "case-study",
      url: "/case-studies/fortune-500-ai-transformation-2026",
      icon: Users,
      color: "from-green-600 to-teal-600",
      highlight: "$5.2B Revenue",
      category: "Success Story"
    },
    {
      title: "AI Implementation Master Guide 2026",
      description: "Complete roadmap to 400% ROI with step-by-step implementation strategies",
      type: "resource",
      url: "/resources/ai-implementation-master-guide-2026",
      icon: FileText,
      color: "from-purple-600 to-pink-600",
      highlight: "Master Guide",
      category: "Implementation"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % newContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentData = newContent[currentContent];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          {/* Background */}
          <div className={`bg-gradient-to-r ${currentData.color} py-20 relative`}>
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"
              />
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/4 right-1/4 w-20 h-20 bg-white/5 rounded-full"
              />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8"
                >
                  <Star className="w-5 h-5 text-yellow-300 mr-2" />
                  <span className="text-white text-sm font-bold">NEW 2026 CONTENT</span>
                </motion.div>

                {/* Main Headline */}
                <motion.div
                  key={currentContent}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Revolutionary AI Content
                    <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                      2026 Edition
                    </span>
                  </h1>
                  <p className="text-xl text-white/90 max-w-4xl mx-auto mb-6">
                    Discover breakthrough insights, proven strategies, and real-world success stories that will transform your AI journey
                  </p>
                </motion.div>

                {/* Featured Content Card */}
                <motion.div
                  key={`content-${currentContent}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="max-w-4xl mx-auto mb-12"
                >
                  <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center justify-center mb-6">
                      <div className="p-4 bg-white/20 rounded-2xl mr-4">
                        <currentData.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-left">
                        <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-2">
                          {currentData.category}
                        </span>
                        <div className="text-2xl font-bold text-yellow-300">
                          {currentData.highlight}
                        </div>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {currentData.title}
                    </h2>
                    <p className="text-lg text-white/90 mb-6">
                      {currentData.description}
                    </p>
                    
                    <Link 
                      href={currentData.url}
                      className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {currentData.type === 'case-study' ? 'View Success Story' : 
                       currentData.type === 'resource' ? 'Download Guide' : 'Read Article'}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </motion.div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {newContent.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 ${
                          index === currentContent ? 'bg-white/20 scale-105' : ''
                        }`}
                      >
                        <div className="flex items-center mb-4">
                          <IconComponent className="w-6 h-6 text-white mr-3" />
                          <span className="text-white text-sm font-medium">{item.category}</span>
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-sm mb-4">
                          {item.description}
                        </p>
                        <div className="text-yellow-300 font-bold text-sm mb-4">
                          {item.highlight}
                        </div>
                        <Link 
                          href={item.url}
                          className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-medium text-sm group"
                        >
                          {item.type === 'case-study' ? 'View Case Study' : 
                           item.type === 'resource' ? 'Download Guide' : 'Read Article'}
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center space-x-3 mb-8">
                  {newContent.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentContent(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentContent
                          ? 'bg-white scale-125'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href="/blog"
                      className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                    >
                      Explore All Content
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
                    >
                      Get Expert Consultation
                    </Link>
                  </motion.div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-2">400%</div>
                    <div className="text-white/80 text-sm">Average ROI</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-2">$5.2B</div>
                    <div className="text-white/80 text-sm">Revenue Increase</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-2">90</div>
                    <div className="text-white/80 text-sm">Days to ROI</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-2">500+</div>
                    <div className="text-white/80 text-sm">Success Stories</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <motion.button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-300 z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewContent2026PromotionBanner;