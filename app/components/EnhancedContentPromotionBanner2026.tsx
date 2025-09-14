'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, TrendingUp, BarChart3, FileText, Users, Star, Award, Award as TargetIcon, Zap as RocketIcon } from 'lucide-react';

const EnhancedContentPromotionBanner2026: React.FC = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentPieces = [
    {
      title: "AI 2026: Enterprise Automation Breakthrough",
      description: "400% ROI in 90 Days - Revolutionary automation strategies",
      type: "blog",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-600 to-purple-600",
      url: "/blog/ai-2026-enterprise-automation-breakthrough",
      metrics: "400% ROI",
      category: "Enterprise AI"
    },
    {
      title: "Fortune 500 AI Transformation",
      description: "$50M Annual Savings in 6 Months - Real success story",
      type: "case-study",
      icon: <Award className="w-8 h-8" />,
      color: "from-green-600 to-teal-600",
      url: "/case-studies/fortune-500-ai-transformation-2026",
      metrics: "$50M Savings",
      category: "Case Study"
    },
    {
      title: "AI Implementation Master Guide 2026",
      description: "Complete framework from strategy to 400% ROI",
      type: "resource",
      icon: <FileText className="w-8 h-8" />,
      color: "from-orange-600 to-red-600",
      url: "/resources/ai-implementation-master-guide-2026",
      metrics: "25,000 Words",
      category: "Implementation Guide"
    },
    {
      title: "AI 2025: Autonomous Systems Revolution",
      description: "Next-generation autonomous systems transforming business",
      type: "blog",
      icon: <RocketIcon className="w-8 h-8" />,
      color: "from-purple-600 to-indigo-600",
      url: "/blog/ai-2025-next-generation-autonomous-systems-revolution",
      metrics: "300% Productivity",
      category: "Autonomous AI"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentPieces.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentData = contentPieces[currentContent];

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
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/5 rounded-full"
              />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
                >
                  <Zap className="w-5 h-5 text-yellow-300 mr-2" />
                  <span className="text-white text-sm font-medium">NEW CONTENT JANUARY 2026</span>
                </motion.div>

                {/* Main Content */}
                <motion.div
                  key={currentContent}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <div className="flex justify-center mb-6">
                    <div className="text-6xl text-white/90">
                      {currentData.icon}
                    </div>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Revolutionary AI Content
                    <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                      Just Released
                    </span>
                  </h1>
                  
                  <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">
                    {currentData.title}
                  </h2>
                  
                  <p className="text-xl text-white/80 max-w-3xl mx-auto mb-6">
                    {currentData.description}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-4 mb-8">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                      {currentData.metrics}
                    </div>
                    <div className="px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium">
                      {currentData.category}
                    </div>
                  </div>
                </motion.div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {contentPieces.map((content, index) => (
                    <motion.div
                      key={content.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer ${
                        index === currentContent ? 'bg-white/20 scale-105 shadow-xl' : ''
                      }`}
                      onClick={() => setCurrentContent(index)}
                    >
                      <div className="flex items-center mb-4">
                        <div className="text-white/90 mr-3">
                          {content.icon}
                        </div>
                        <h3 className="text-white font-semibold text-lg">{content.title}</h3>
                      </div>
                      <p className="text-white/70 text-sm mb-4">
                        {content.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-yellow-300 font-bold text-sm">
                          {content.metrics}
                        </span>
                        <span className="px-2 py-1 bg-white/20 rounded text-white text-xs">
                          {content.category}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={currentData.url}
                      className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Read {currentData.type === 'case-study' ? 'Case Study' : currentData.type === 'resource' ? 'Guide' : 'Article'}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/blog"
                      className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
                    >
                      Explore All Content
                    </Link>
                  </motion.div>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center space-x-2 mb-8">
                  {contentPieces.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentContent(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentContent
                          ? 'bg-white scale-125'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
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
                    <div className="text-3xl font-bold text-white mb-2">6</div>
                    <div className="text-white/80 text-sm">New Content Pieces</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-2">25K+</div>
                    <div className="text-white/80 text-sm">Words of Content</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-2">400%</div>
                    <div className="text-white/80 text-sm">Average ROI</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-2">$50M+</div>
                    <div className="text-white/80 text-sm">Proven Savings</div>
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

export default EnhancedContentPromotionBanner2026;