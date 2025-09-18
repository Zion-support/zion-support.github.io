<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
RocketSparklesTargetAwardChevronRightPlayDownload

const RevolutionaryTechBanner2026 = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentFeaturesetCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3);
    }3000);
    return () => clearInterval(interval);
  }[]);

  const features = [
    {
      title: "Quantum AI Processing",
      description: "Revolutionary quantum computing meets artificial intelligence",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Neural Interface Technology",
      description: "Direct brain-computer interaction for unprecedented control",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Autonomous Business Systems",
      description: "Self-managing AI that evolves with your business needs",
      icon: <Target className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const achievements = [
    { number: "2026"label: "Revolutionary Year" },
    { number: "99.9%"label: "Accuracy Rate" },
    { number: "10x"label: "Performance Boost" },
    { number: "24/7"label: "AI Monitoring" }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={isVisible ? { scale: 1 } : {}}
            transition={{ delay: 0.2duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold mb-8 shadow-lg"
          >
            <Award className="w-5 h-5 mr-2" />
            Revolutionary Technology 2026
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              The Future is
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Here Today
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4duration: 0.6 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Experience the most advanced AI technology ever created. Our 2026 platform 
            combines quantum computingneural interfacesand autonomous systems to 
            revolutionize how businesses operate.
          </motion.p>
        </div>

        {/* Rotating Feature Showcase */}
        <motion.div
          initial={{ opacity: 0scale: 0.9 }}
          animate={isVisible ? { opacity: 1scale: 1 } : {}}
          transition={{ delay: 0.5duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="text-center mb-8">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${features[currentFeature].color} text-white font-semibold mb-6`}
              >
                {features[currentFeature].icon}
                <span className="ml-2">{features[currentFeature].title}</span>
              </motion.div>
              
              <motion.h3
                key={`title-${currentFeature}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                {features[currentFeature].title}
              </motion.h3>
              
              <motion.p
                key={`desc-${currentFeature}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
                {features[currentFeature].description}
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {achievements.map((achievementindex) => (
            <motion.div
              key={index}
              initial={{ opacity: 0scale: 0.8 }}
              animate={isVisible ? { opacity: 1scale: 1 } : {}}
              transition={{ delay: 0.7 + index * 0.1duration: 0.6 }}
              className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-300 font-medium">
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Be Among the First to Experience 2026
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our exclusive beta program and get early access to revolutionary 
              technology that will transform your business forever.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/beta-signup"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group shadow-lg"
              >
                Join Beta Program
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/tech-demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300 group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Tech Demo
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-400">
              <div className="flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Download Whitepaper
              </div>
              <div className="hidden sm:block">•</div>
              <div>Free Consultation Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RevolutionaryTechBanner2026;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
