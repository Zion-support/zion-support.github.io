<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sparkles
  ArrowRight
  Star
  Zap
  Brain
  TrendingUp,
  X,
  Play,
  BookOpen,
  Rocket,
  Shield,
  Users,
  Target
} from 'lucide-react';

const RevolutionaryAIInnovations2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentInnovationsetCurrentInnovation] = useState(0);

  const innovations = [
    { icon: Braintitle: "Quantum-Neural Fusion"impact: "10,000x Faster" },
    { icon: Targetitle: "Autonomous Intelligence"impact: "99.9% Accuracy" },
    { icon: TrendingUptitle: "Predictive Analytics"impact: "6 Month Forecast" },
    { icon: Userstitle: "Neural Interfaces"impact: "Direct Interface" },
    { icon: Shieldtitle: "Quantum Security"impact: "Unbreakable" },
    { icon: Rocketitle: "Space Technology"impact: "Space-Ready" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)1500);
    return () => clearTimeout(timer);
  }[]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInnovation((prev) => (prev + 1) % innovations.length);
    }3000);
    return () => clearInterval(interval);
  }[]);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  const currentInnovationData = innovations[currentInnovation];

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ 
        opacity: isVisible ? 1 : 0
        y: isVisible ? 0 : -100 
      }}
      transition={{ duration: 1ease: "easeOut" }}
      className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0100],
            y: [0-50],
            rotate: [0180360]
          }}
          transition={{ 
            duration: 20
            repeat: Infinity
            ease: "linear" 
          }}
          className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0-100],
            y: [050],
            rotate: [360180]
          }}
          transition={{ 
            duration: 25
            repeat: Infinity
            ease: "linear" 
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 blur-3xl"
        />
      </div>

      {/* Floating Innovation Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {innovations.map((innovationindex) => (
          <motion.div
            key={index}
            animate={{ 
              x: [0Math.random() * 100 - 50],
              y: [0Math.random() * 100 - 50],
              rotate: [0360],
              opacity: [0.10.30.1]
            }}
            transition={{ 
              duration: 15 + index * 2
              repeat: Infinity
              ease: "easeInOut",
              delay: index * 2
            }}
            className="absolute top-1/4 left-1/4 w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center"
            style={{
              left: `${20 + index * 15}%`,
              top: `${30 + (index % 3) * 20}%`
            }}
          >
            <innovation.icon className="w-8 h-8 text-white opacity-50" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0x: -30 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ delay: 0.3duration: 0.8 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-medium mb-6"
            >
              <Sparkles className="w-6 h-6 mr-3 animate-pulse" />
              Revolutionary AI Innovations 2025
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              The Future is Here
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl"
            >
              Experience breakthrough AI innovations that are transforming industries and reshaping the future of technology
            </motion.p>

            {/* Current Innovation Highlight */}
            <motion.div
              key={currentInnovation}
              initial={{ opacity: 0scale: 0.9 }}
              animate={{ opacity: 1scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white border-opacity-20"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  <currentInnovationData.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {currentInnovationData.title}
                  </h3>
                  <p className="text-purple-200">
                    {currentInnovationData.impact}
                  </p>
                </div>
              </div>
              <p className="text-gray-300">
                Revolutionary breakthrough transforming how we approach complex problems and decision-making
              </p>
            </motion.div>

            {/* Innovation Dots */}
            <div className="flex justify-center lg:justify-start space-x-2 mb-8">
              {innovations.map((_index) => (
                <button
                  key={index}
                  onClick={() => setCurrentInnovation(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentInnovation 
                      ? 'bg-white scale-125' 
                      : 'bg-white bg-opacity-30 hover:bg-opacity-50'
                  }`}
                />
              ))}
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#revolutionary-innovations"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 group"
              >
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Explore Innovations
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/ai-innovations"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-purple-900 transition-all duration-300 group"
              >
                <BookOpen className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Visual Showcase */}
          <motion.div
            initial={{ opacity: 0x: 50 }}
            animate={{ opacity: 1x: 0 }}
            transition={{ delay: 0.4duration: 1 }}
            className="flex-shrink-0 lg:ml-8"
          >
            <div className="relative">
              {/* Main Visual Container */}
              <div className="w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
                {/* Animated Background Elements */}
                <motion.div
                  animate={{ 
                    scale: [1.21],
                    rotate: [0180360],
                    opacity: [0.30.60.3]
                  }}
                  transition={{ 
                    duration: 8
                    repeat: Infinity
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-4 bg-white bg-opacity-20 rounded-2xl"
                />
                
                <motion.div
                  animate={{ 
                    scale: [1.1],
                    rotate: [05-50]
                  }}
                  transition={{ 
                    duration: 4
                    repeat: Infinity
                    ease: "easeInOut" 
                  }}
                  className="w-32 h-32 bg-white bg-opacity-30 rounded-full flex items-center justify-center relative z-10"
                >
                  <currentInnovationData.icon className="w-16 h-16 text-white" />
                </motion.div>

                {/* Innovation Stats */}
                <motion.div
                  key={currentInnovation}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 rounded-xl p-4"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {currentInnovationData.impact}
                    </div>
                    <div className="text-sm text-gray-600">
                      {currentInnovationData.title}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating Innovation Icons */}
              {innovations.slice(04).map((innovationindex) => (
                <motion.div
                  key={index}
                  animate={{ 
                    y: [0-20],
                    rotate: [010],
                    opacity: [0.710.7]
                  }}
                  transition={{ 
                    duration: 3 + index * 0.5
                    repeat: Infinity
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  className={`absolute w-12 h-12 bg-gradient-to-r ${
                    index % 2 === 0 ? 'from-yellow-400 to-orange-500' : 'from-cyan-400 to-blue-500'
                  } rounded-full flex items-center justify-center`}
                  style={{
                    top: `${20 + index * 20}%`,
                    left: index % 2 === 0 ? '-6' : 'auto',
                    right: index % 2 === 1 ? '-6' : 'auto'
                  }}
                >
                  <innovation.icon className="w-6 h-6 text-white" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors backdrop-blur-sm"
        aria-label="Dismiss banner"
      >
        <X className="w-6 h-6" />
      </button>
    </motion.div>
  );
};

export default RevolutionaryAIInnovations2025PromotionBanner;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
