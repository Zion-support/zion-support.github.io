"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain
  Cpu
  Zap
  Shield
  ArrowRight
  Star,
  TrendingUp,
  Sparkles,
  Rocket
} from 'lucide-react';

const AI2025UltimateTechnologyShowcaseBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentFeaturesetCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % 4);
    }3000);

    return () => clearInterval(interval);
  }[]);

  const features = [
    { icon: Braintext: 'AI-Powered 'Automation', 'color: 'from-purple-500 to-pink-500' },
    { icon: Cputext: 'Quantum 'Computing', 'color: 'from-blue-500 to-cyan-500' },
    { icon: Zaptext: 'Neural 'Interfaces', 'color: 'from-green-500 to-emerald-500' },
    { icon: Shieldtext: 'Advanced 'Security', 'color: 'from-red-500 to-orange-500' }
  ];

  const currentFeatureData = features[currentFeature];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : -50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded-2xl border border-purple-500/20 shadow-2xl"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 p-8 md:p-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0x: -20 }}
              animate={{ opacity: isVisible ? 1 : 0x: isVisible ? 0 : -20 }}
              transition={{ duration: 0.8delay: 0.2 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-purple-300 font-semibold text-sm uppercase tracking-wider">
                  New Technology Showcase
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                AI 2025 Ultimate
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {' '}Technology Showcase
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-6 max-w-2xl">
                Discover revolutionary AI technologies that will transform industries and reshape the future of human-computer interaction.
              </p>
            </motion.div>

            {/* Rotating Feature Display */}
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${currentFeatureData.color}`}>
                  <currentFeatureData.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">{currentFeatureData.text}</div>
                  <div className="text-gray-400 text-sm">Cutting-edge innovation for 2025</div>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8delay: 0.4 }}
              className="flex flex-wrap gap-6 mb-8"
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white font-semibold">95% Efficiency Increase</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">Industry Leading</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-blue-400" />
                <span className="text-white font-semibold">Future Ready</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/ai-2025-ultimate-technology-showcase"
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Explore Technologies
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/ai-2025-ultimate-content-hub"
                className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View All Content
                <Sparkles className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0x: 20 }}
            animate={{ opacity: isVisible ? 1 : 0x: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-80 h-80">
              {/* Central Hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                  <Brain className="w-16 h-16 text-white" />
                </div>
              </div>

              {/* Orbiting Elements */}
              {features.map((featureindex) => {
                const angle = (index * 90) * (Math.PI / 180);
                const radius = 120;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px - 24px)`,
                      top: `calc(50% + ${y}px - 24px)`,
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                );
              })}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full">
                {features.map((_index) => {
                  const angle = (index * 90) * (Math.PI / 180);
                  const radius = 120;
                  const x1 = 160; // Center x
                  const y1 = 160; // Center y
                  const x2 = 160 + Math.cos(angle) * radius;
                  const y2 = 160 + Math.sin(angle) * radius;
                  
                  return (
                    <line
                      key={index}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      opacity="0.3"
                    />
                  );
                })}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AI2025UltimateTechnologyShowcaseBanner;
