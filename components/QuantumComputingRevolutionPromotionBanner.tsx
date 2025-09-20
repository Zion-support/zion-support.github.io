<<<<<<< HEAD
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
CpuAtomZapClockShieldGlobeTrendingUp
import Link from 'next/link';

const QuantumComputingRevolutionPromotionBanner: React.FC = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentHighlightsetCurrentHighlight] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentHighlight(prev => (prev + 1) % 3);
    }3000);
    return () => clearInterval(interval);
  }[]);

  const highlights = [
    { icon: Cpuvalue: "99.99%"label: "Quantum Fidelity"color: "from-blue-500 to-cyan-500" },
    { icon: Zapvalue: "10^18"label: "Ops/Second"color: "from-purple-500 to-pink-500" },
    { icon: Shieldvalue: "Unbreakable"label: "Encryption"color: "from-green-500 to-emerald-500" }
  ];

  const features = [
    "Error-Corrected Quantum Computers",
    "Quantum Supremacy Achievement",
    "Quantum Internet Infrastructure",
    "Quantum-AI Fusion Technology"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 py-12"
    >
      {/* Quantum Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-cyan-500/30 rounded-full blur-xl animate-spin" style={{ animationDuration: '15s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0x: -30 }}
              animate={{ opacity: isVisible ? 1 : 0x: isVisible ? 0 : -30 }}
              transition={{ delay: 0.2duration: 0.6 }}
              className="mb-4"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Atom className="w-4 h-4" />
                Quantum Revolution 2025
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-4">
                Quantum Supremacy Achieved
              </h2>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl">
                Experience the dawn of the quantum era with revolutionary quantum computing breakthroughs 
                that are reshaping the boundaries of computational possibility.
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.4duration: 0.6 }}
              className="grid grid-cols-2 gap-2 mb-6"
            >
              {features.map((featureindex) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.6duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/quantum-computing-2025"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Quantum
                <Cpu className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-400 text-white px-6 py-3 rounded-full font-semibold hover:border-gray-300 hover:bg-gray-800/50 transition-all duration-300"
              >
                Get Quantum Access
              </Link>
            </motion.div>
          </div>

          {/* Right Quantum Stats */}
          <motion.div
            initial={{ opacity: 0x: 30 }}
            animate={{ opacity: isVisible ? 1 : 0x: isVisible ? 0 : 30 }}
            transition={{ delay: 0.3duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 min-w-[300px]">
              <h3 className="text-xl font-bold text-white text-center mb-6">Quantum Capabilities</h3>
              
              {/* Animated Highlight */}
              <motion.div
                key={currentHighlight}
                initial={{ opacity: 0scale: 0.8 }}
                animate={{ opacity: 1scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-6"
              >
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${highlights[currentHighlight].color} mb-4`}>
                  <highlights[currentHighlight].icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{highlights[currentHighlight].value}</div>
                <div className="text-gray-400 text-sm">{highlights[currentHighlight].label}</div>
              </motion.div>

              {/* Quantum Metrics */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Global Quantum Network
                  </span>
                  <span className="text-white font-semibold">Active</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Processing Speed
                  </span>
                  <span className="text-green-400 font-semibold">Exponential</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Security Level
                  </span>
                  <span className="text-blue-400 font-semibold">Unbreakable</span>
                </div>
              </div>

              {/* Urgency Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1duration: 0.5 }}
                className="mt-6 flex items-center justify-center gap-2 text-cyan-400 text-sm"
              >
                <Clock className="w-4 h-4" />
                <span>Limited quantum access - Apply now!</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuantumComputingRevolutionPromotionBanner;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
