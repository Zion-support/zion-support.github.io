<<<<<<< HEAD
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
AtomZapCpuArrowRightXStar
import Link from 'next/link';

const QuantumComputingPromotionBanner2025: React.FC = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentFeaturesetCurrentFeature] = useState(0);

  const features = [
    {
      title: "10,000x Faster Processing",
      description: "Quantum-neural fusion achieves unprecedented computational speed",
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Unbreakable Security",
      description: "Quantum cryptography provides theoretically perfect encryption",
      icon: Atom,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Infinite Possibilities",
      description: "Quantum computing opens new frontiers in AI and optimization",
      icon: Cpu,
      color: "from-purple-500 to-pink-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }4000);

    return () => clearInterval(interval);
  }[]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-b border-cyan-500/20 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Left side - Quantum Badge */}
            <div className="flex items-center gap-4">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0x: -20 }}
                animate={{ opacity: 1x: 0 }}
                exit={{ opacity: 0x: 20 }}
                className={`px-4 py-2 rounded-full bg-gradient-to-r ${features[currentFeature].color} text-white font-bold text-sm animate-pulse`}
              >
                QUANTUM REVOLUTION
              </motion.div>
              
              {/* Rotating Icon */}
              <motion.div
                key={`icon-${currentFeature}`}
                initial={{ scale: 0rotate: -180 }}
                animate={{ scale: 1rotate: 0 }}
                transition={{ type: "spring"stiffness: 200 }}
                className={`p-2 rounded-full bg-gradient-to-r ${features[currentFeature].color}`}
              >
                <features[currentFeature].icon className="w-6 h-6 text-white" />
              </motion.div>
            </div>

            {/* Center - Feature Content */}
            <div className="flex-1 text-center px-8">
              <motion.div
                key={`content-${currentFeature}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-1"
              >
                <h3 className="text-lg font-bold text-white">
                  {features[currentFeature].title}
                </h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  {features[currentFeature].description}
                </p>
              </motion.div>
            </div>

            {/* Right side - CTA and Close */}
            <div className="flex items-center gap-4">
              <Link href="/quantum-computing-showcase-2025">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${features[currentFeature].color} hover:opacity-90 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 flex items-center gap-2`}
                >
                  <Star className="w-4 h-4" />
                  Explore Quantum
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-purple-500/5 animate-pulse"></div>
        
        {/* Quantum Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_i) => (
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
                scale: [0.51.50.5],
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

export default QuantumComputingPromotionBanner2025;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
