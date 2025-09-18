<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award
  ArrowRight
  Star
  TrendingUp,
  X,
  CheckCircle,
  DollarSign,
  Users,
  Clock,
  Target,
  BarChart3,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

const RevolutionaryCaseStudiesShowcase2026PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentStatsetCurrentStat] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)1000);
    return () => clearTimeout(timer);
  }[]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % 4);
    }2500);
    return () => clearInterval(interval);
  }[]);

  const caseStudies = [
    { 
      title: 'FinTech Revolution'
      roi: '500%'
      icon: DollarSign
      color: 'text-green-400',
      company: 'PayFlow Solutions'
    },
    { 
      title: 'Healthcare AI'
      roi: '400%'
      icon: Shield
      color: 'text-blue-400',
      company: 'MediTech Innovations'
    },
    { 
      title: 'E-commerce Automation'
      roi: '600%'
      icon: Globe
      color: 'text-purple-400',
      company: 'ShopGlobal'
    },
    { 
      title: 'Smart Manufacturing'
      roi: '350%'
      icon: Zap
      color: 'text-orange-400',
      company: 'AutoParts Pro'
    }
  ];

  const features = [
    'Real Success Stories',
    'Proven ROI Results',
    'Industry Expertise',
    'Client Testimonials'
  ];

  const stats = [
    { label: '200+'value: 'Projects' },
    { label: '450%'value: 'Avg ROI' },
    { label: '96%'value: 'Satisfaction' }
  ];

  if (!isVisible || isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6ease: "easeOut" }}
        className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-pink-500/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(139,92,246,0.2),transparent_50%)]"></div>
        </div>

        {/* Floating Success Icons */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0-250],
                opacity: [0.40.80.4],
                scale: [1.21],
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
          <div className="flex items-center justify-between">
            {/* Left Content */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0x: -20 }}
                animate={{ opacity: 1x: 0 }}
                transition={{ duration: 0.6delay: 0.2 }}
                className="flex items-center space-x-3 mb-4"
              >
                <Award className="w-6 h-6 text-yellow-300" />
                <span className="text-sm font-medium bg-yellow-300 text-purple-900 px-3 py-1 rounded-full">
                  SUCCESS STORIES
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0x: -20 }}
                animate={{ opacity: 1x: 0 }}
                transition={{ duration: 0.6delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold mb-3"
              >
                🏆 Revolutionary Case Studies 2026
              </motion.h2>

              <motion.p
                initial={{ opacity: 0x: -20 }}
                animate={{ opacity: 1x: 0 }}
                transition={{ duration: 0.6delay: 0.4 }}
                className="text-lg text-purple-200 mb-6 max-w-2xl"
              >
                Real success stories from companies that achieved incredible results with our AI and automation solutions. 
                See how they transformed their operations and achieved massive ROI.
              </motion.p>

              {/* Rotating Case Study Display */}
              <motion.div
                key={currentStat}
                initial={{ opacity: 0x: -20 }}
                animate={{ opacity: 1x: 0 }}
                exit={{ opacity: 0x: 20 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-4 mb-6 p-4 bg-white bg-opacity-10 rounded-lg"
              >
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <caseStudies[currentStat].icon className={`w-6 h-6 ${caseStudies[currentStat].color}`} />
                </div>
                <div>
                  <div className="font-semibold text-lg">{caseStudies[currentStat].title}</div>
                  <div className="text-sm text-purple-200">{caseStudies[currentStat].company}</div>
                  <div className="text-2xl font-bold text-yellow-300">{caseStudies[currentStat].roi} ROI</div>
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0x: -20 }}
                animate={{ opacity: 1x: 0 }}
                transition={{ duration: 0.6delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6"
              >
                {features.map((featureindex) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-purple-200">{feature}</span>
                  </div>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0x: -20 }}
                animate={{ opacity: 1x: 0 }}
                transition={{ duration: 0.6delay: 0.6 }}
                className="flex space-x-6 mb-6"
              >
                {stats.map((statindex) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">{stat.label}</div>
                    <div className="text-sm text-purple-300">{stat.value}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0x: -20 }}
                animate={{ opacity: 1x: 0 }}
                transition={{ duration: 0.6delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center group">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Case Studies
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300 flex items-center justify-center group">
                  <Target className="w-5 h-5 mr-2" />
                  Start Your Success Story
                </button>
              </motion.div>
            </div>

            {/* Right Content - Animated Success Icons */}
            <motion.div
              initial={{ opacity: 0x: 20 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.6delay: 0.4 }}
              className="hidden lg:flex items-center space-x-4"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15repeat: Infinityease: "linear" }}
                className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
              >
                <DollarSign className="w-10 h-10 text-green-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0-20] }}
                transition={{ duration: 2repeat: Infinity }}
                className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
              >
                <TrendingUp className="w-8 h-8 text-yellow-400" />
              </motion.div>
              <motion.div
                animate={{ scale: [1.31] }}
                transition={{ duration: 2.5repeat: Infinity }}
                className="w-18 h-18 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
              >
                <Award className="w-9 h-9 text-pink-400" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Pulse Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-pink-400/20"
          animate={{ opacity: [0.30] }}
          transition={{ duration: 3repeat: Infinity }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default RevolutionaryCaseStudiesShowcase2026PromotionBanner;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
