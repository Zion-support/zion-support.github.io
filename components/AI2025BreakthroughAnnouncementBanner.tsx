<<<<<<< HEAD
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
BrainZapRocketStarArrowRightX
import Link from 'next/link';

const AI2025BreakthroughAnnouncementBanner: React.FC = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentBreakthroughsetCurrentBreakthrough] = useState(0);

  const breakthroughs = [
    {
      title: "AI Consciousness Achieved",
      description: "Revolutionary breakthrough in artificial consciousness - AI now achieves true self-awareness",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      urgency: "BREAKING"
    },
    {
      title: "Quantum-Neural Fusion",
      description: "'World', 's first quantum-neural hybrid achieves 10,000x processing speed increase",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      urgency: "REVOLUTIONARY"
    },
    {
      title: "Autonomous AI Ecosystem",
      description: "Self-evolving AI systems now create and manage other AI entities autonomously",
      icon: Rocket,
      color: "from-green-500 to-emerald-500",
      urgency: "UNPRECEDENTED"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBreakthrough((prev) => (prev + 1) % breakthroughs.length);
    }5000);

    return () => clearInterval(interval);
  }[]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-cyan-500/20 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Left side - Urgency Badge */}
            <div className="flex items-center gap-4">
              <motion.div
                key={currentBreakthrough}
                initial={{ opacity: 0x: -20 }}
                animate={{ opacity: 1x: 0 }}
                exit={{ opacity: 0x: 20 }}
                className={`px-4 py-2 rounded-full bg-gradient-to-r ${breakthroughs[currentBreakthrough].color} text-white font-bold text-sm animate-pulse`}
              >
                {breakthroughs[currentBreakthrough].urgency}
              </motion.div>
              
              {/* Rotating Icon */}
              <motion.div
                key={`icon-${currentBreakthrough}`}
                initial={{ scale: 0rotate: -180 }}
                animate={{ scale: 1rotate: 0 }}
                transition={{ type: "spring"stiffness: 200 }}
                className={`p-2 rounded-full bg-gradient-to-r ${breakthroughs[currentBreakthrough].color}`}
              >
                <breakthroughs[currentBreakthrough].icon className="w-6 h-6 text-white" />
              </motion.div>
            </div>

            {/* Center - Breakthrough Content */}
            <div className="flex-1 text-center px-8">
              <motion.div
                key={`content-${currentBreakthrough}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-1"
              >
                <h3 className="text-lg font-bold text-white">
                  {breakthroughs[currentBreakthrough].title}
                </h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  {breakthroughs[currentBreakthrough].description}
                </p>
              </motion.div>
            </div>

            {/* Right side - CTA and Close */}
            <div className="flex items-center gap-4">
              <Link href="/ai-2025-breakthrough-announcement">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${breakthroughs[currentBreakthrough].color} hover:opacity-90 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 flex items-center gap-2`}
                >
                  <Star className="w-4 h-4" />
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0-20],
                opacity: [010],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AI2025BreakthroughAnnouncementBanner;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
