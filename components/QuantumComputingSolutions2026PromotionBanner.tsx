<<<<<<< HEAD
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom
  Zap
  Shield
  Lock,
  ArrowRight,
  Star,
  Sparkles,
  Target,
  Brain,
  X
} from 'lucide-react';

const QuantumComputingSolutions2026PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)3000);
    return () => clearTimeout(timer);
  }[]);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  const solutions = [
    { icon: Targetlabel: ''Optimization', 'color: 'text-purple-400' },
    { icon: Locklabel: ''Encryption', 'color: 'text-green-400' },
    { icon: Atomlabel: ''Simulation', 'color: 'text-cyan-400' },
    { icon: Brainlabel: 'AI/'ML', 'color: 'text-red-400' }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6ease: "easeOut" }}
          className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-cyan-900 text-white overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-indigo-600/20" />
            <div className="absolute inset-0">
              {[...Array(25)].map((_i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0-40],
                    x: [0Math.random() * 10 - 50],
                    opacity: [0.40.80.4],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0x: -20 }}
                  animate={{ opacity: 1x: 0 }}
                  transition={{ duration: 0.6delay: 0.2 }}
                  className="flex items-center justify-center lg:justify-start mb-3"
                >
                  <div className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full text-sm font-semibold mr-4">
                    <Atom className="w-4 h-4 mr-2" />
                    QUANTUM 2026
                  </div>
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0x: -20 }}
                  animate={{ opacity: 1x: 0 }}
                  transition={{ duration: 0.6delay: 0.3 }}
                  className="text-2xl lg:text-3xl font-bold mb-2"
                >
                  ⚛️ Quantum Computing Solutions 2026
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0x: -20 }}
                  animate={{ opacity: 1x: 0 }}
                  transition={{ duration: 0.6delay: 0.4 }}
                  className="text-lg text-cyan-100 mb-4 max-w-2xl"
                >
                  Harness quantum power: OptimizationEncryptionSimulationand AI/ML solutions
                </motion.p>

                {/* Solution Icons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6delay: 0.5 }}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4"
                >
                  {solutions.map((solutionindex) => (
                    <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                      <solution.icon className={`w-4 h-4 ${solution.color} mr-2`} />
                      <span className="text-sm font-medium">{solution.label}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Content - CTA */}
              <motion.div
                initial={{ opacity: 0x: 20 }}
                animate={{ opacity: 1x: 0 }}
                transition={{ duration: 0.6delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <div className="text-center sm:text-right">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">10,000x</div>
                  <div className="text-sm text-cyan-200">Faster Processing</div>
                </div>
                
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-indigo-900 rounded-full font-bold hover:shadow-lg transition-all duration-300 flex items-center group">
                  <Zap className="w-5 h-5 mr-2" />
                  Explore Quantum
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              {/* Dismiss Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6delay: 0.8 }}
                onClick={handleDismiss}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Progress Bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 5ease: "easeOut" }}
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 origin-left"
            style={{ width: '100%' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuantumComputingSolutions2026PromotionBanner;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
