<<<<<<< HEAD
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp
  Brain
  Zap
  Rocket
  ArrowRight
  X,
  BarChart3,
  Target,
  Calendar,
  Star,
  Users,
  Clock,
  CheckCircle
} from 'lucide-react';

const AITrends2026PredictionsPromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentPredictionsetCurrentPrediction] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate predictions
    const interval = setInterval(() => {
      setCurrentPrediction((prev) => (prev + 1) % predictions.length);
    }4000);

    return () => clearInterval(interval);
  }[]);

  const predictions = [
    {
      title: 'AGI Breakthrough',
      probability: 85,
      timeline: 'Q3 2026',
      impact: 'Revolutionary',
      icon: Brain,
      color: 'from-purple-500 to-blue-500'
    },
    {
      title: 'Quantum Supremacy 2.0',
      probability: 95,
      timeline: 'Q1 2026',
      impact: 'Revolutionary',
      icon: Zap,
      color: 'from-cyan-500 to-teal-500'
    },
    {
      title: 'Neural Interfaces',
      probability: 90,
      timeline: 'Q2 2026',
      impact: 'Transformative',
      icon: Rocket,
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const stats = [
    { label: ''Predictions', 'value: '50+'icon: Target },
    { label: 'Expert 'Analysts', 'value: '200+'icon: Users },
    { label: 'Updated 'Weekly', 'value: '24/7'icon: Clock }
  ];

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6ease: "easeOut" }}
          className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/200')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-indigo-900/80"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0-30],
                  opacity: [0.40.80.4],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
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
                  initial={{ opacity: 0x: -30 }}
                  animate={{ opacity: 1x: 0 }}
                  transition={{ duration: 0.6delay: 0.2 }}
                  className="mb-6"
                >
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold mb-4">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    AI TRENDS & PREDICTIONS 2026
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Future Technology
                    <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      Predictions
                    </span>
                  </h2>
                  
                  <p className="text-lg text-gray-300 max-w-2xl">
                    Expert predictions and probability assessments for the most significant 
                    technological breakthroughs expected in 2026.
                  </p>
                </motion.div>

                {/* Rotating Predictions */}
                <motion.div
                  key={currentPrediction}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center lg:justify-start mb-6"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${predictions[currentPrediction].color} flex items-center justify-center mr-4`}>
                    <predictions[currentPrediction].icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {predictions[currentPrediction].title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <span className="flex items-center">
                        <Target className="w-4 h-4 mr-1" />
                        {predictions[currentPrediction].probability}% likely
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {predictions[currentPrediction].timeline}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8">
                  {stats.map((statindex) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0scale: 0.8 }}
                      animate={{ opacity: 1scale: 1 }}
                      transition={{ duration: 0.6delay: 0.4 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-2">
                        <stat.icon className="w-6 h-6 text-indigo-400" />
                      </div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/ai-trends-2026"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 group"
                  >
                    <BarChart3 className="w-5 h-5 mr-2" />
                    View Predictions
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link
                    href="/newsletter-signup"
                    className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Get Updates
                  </Link>
                </div>
              </div>

              {/* Right Content - Prediction Cards */}
              <motion.div
                initial={{ opacity: 0x: 30 }}
                animate={{ opacity: 1x: 0 }}
                transition={{ duration: 0.6delay: 0.4 }}
                className="flex-shrink-0 w-full lg:w-96"
              >
                <div className="grid grid-cols-1 gap-4">
                  {predictions.map((predictionindex) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6delay: 0.6 + index * 0.1 }}
                      className={`p-4 rounded-xl bg-gradient-to-r ${prediction.color} bg-opacity-20 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-300 ${
                        currentPrediction === index ? 'ring-2 ring-indigo-400 ring-opacity-50' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${prediction.color} flex items-center justify-center mr-3`}>
                            <prediction.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white text-sm">{prediction.title}</h4>
                            <p className="text-gray-300 text-xs">{prediction.timeline}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-white">{prediction.probability}%</div>
                          <div className="text-xs text-gray-300">probability</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {prediction.impact}
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

export default AITrends2026PredictionsPromotionBanner;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
