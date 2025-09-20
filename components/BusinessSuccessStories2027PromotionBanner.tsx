"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp
  Users
  Award
  DollarSign
  Clock
  Target,
  ArrowRight,
  X,
  ChevronRight,
  Star,
  Quote,
  BarChart3,
  Zap,
  Brain,
  Rocket,
  CheckCircle,
  Play
} from 'lucide-react';

const BusinessSuccessStories2027PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentStorysetCurrentStory] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const stories = [
    {
      company: 'TechCorp Global',
      industry: 'Technology',
      logo: 'TC',
      color: 'from-blue-500 to-purple-500',
      roi: '850%',
      savings: '$2.3M'
    },
    {
      company: 'InnovateLabs',
      industry: 'R&D',
      logo: 'IL',
      color: 'from-green-500 to-teal-500',
      roi: '720%',
      savings: '$1.8M'
    },
    {
      company: 'FutureTech Industries',
      industry: 'Manufacturing',
      logo: 'FT',
      color: 'from-orange-500 to-red-500',
      roi: '920%',
      savings: '$3.1M'
    }
  ];

  const features = [
    'Real Success Stories',
    'Proven ROI Results',
    'Industry Leaders',
    'Detailed Case Studies'
  ];

  const stats = [
    { value: '850%'label: 'Avg ROI' },
    { value: '$2.4'M', 'label: 'Avg Savings' },
    { value: '99.8%'label: 'Success Rate' },
    { value: '15k+'label: 'Hours Saved' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % stories.length);
    }3000);
    return () => clearInterval(interval);
  }[]);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6ease: "easeOut" }}
          className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/30"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 50%rgba(12011980.3) 0%transparent 50%)',
                  'radial-gradient(circle at 80% 20%rgba(25511980.3) 0%transparent 50%)',
                  'radial-gradient(circle at 40% 80%rgba(1202192550.3) 0%transparent 50%)',
                  'radial-gradient(circle at 20% 50%rgba(12011980.3) 0%transparent 50%)',
                ]
              }}
              transition={{ duration: 8repeat: Infinity }}
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-300 text-sm font-medium">SUCCESS STORIES</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  🏆 <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Business Success Stories 2027
                  </span>
                </h2>
                
                <p className="text-gray-300 text-sm lg:text-base mb-4 max-w-2xl">
                  Discover how leading companies achieved extraordinary results with our AI solutions. 
                  Real storiesproven ROIand detailed case studies from industry leaders.
                </p>

                {/* Rotating Success Stories */}
                <div className="flex items-center gap-4 mb-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStory}
                      initial={{ opacity: 0x: 20 }}
                      animate={{ opacity: 1x: 0 }}
                      exit={{ opacity: 0x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stories[currentStory].color} flex items-center justify-center text-white font-bold text-sm`}>
                        {stories[currentStory].logo}
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">
                          {stories[currentStory].company}
                        </div>
                        <div className="text-gray-400 text-xs">
                          {stories[currentStory].industry} • {stories[currentStory].roi} ROI • {stories[currentStory].savings} saved
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Features */}
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  {features.map((featureindex) => (
                    <div key={index} className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/10">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Center - Success Stats */}
              <div className="hidden lg:flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">850%</div>
                  <div className="text-xs text-gray-400">Avg ROI</div>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">$2.4M</div>
                  <div className="text-xs text-gray-400">Avg Savings</div>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">99.8%</div>
                  <div className="text-xs text-gray-400">Success Rate</div>
                </div>
              </div>

              {/* Right Content - CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button className="group px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  <span>View Stories</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  <span>See ROI Calculator</span>
                </button>
              </div>

              {/* Dismiss Button */}
              <button
                onClick={() => setIsDismissed(true)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4 text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Mobile Stats */}
            <div className="lg:hidden mt-4 grid grid-cols-4 gap-4">
              {stats.map((statindex) => (
                <div key={index} className="text-center p-2 rounded-lg bg-white/5">
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 animate-pulse" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BusinessSuccessStories2027PromotionBanner;
