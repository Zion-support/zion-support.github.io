'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const QuantumComputingSolutions2026UltimatePromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSolution, setCurrentSolution] = useState(0);

  const solutions = [
    {
      title: "Quantum Neural Fusion",
      description: "Revolutionary fusion of quantum computing and neural networks for unprecedented AI capabilities",
      icon: "🧠⚛️",
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Quantum Internet",
      description: "Next-generation quantum internet infrastructure with ultra-secure communication",
      icon: "🌐",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Quantum Machine Learning",
      description: "Advanced quantum algorithms that process data exponentially faster than classical computers",
      icon: "🔬",
      color: "from-indigo-500 to-cyan-500"
    },
    {
      title: "Quantum Cryptography",
      description: "Unbreakable quantum encryption systems providing absolute security for sensitive data",
      icon: "🔐",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSolution((prev) => (prev + 1) % solutions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [solutions.length]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/90 via-purple-600/90 to-indigo-600/90"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6"
            >
              ⚛️ QUANTUM REVOLUTION 2026
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Quantum Computing
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Solutions 2026 Ultimate
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Explore the most advanced quantum computing solutions for 2026, featuring quantum neural fusion, 
              quantum internet, and revolutionary quantum-AI integration.
            </motion.p>
          </div>

          {/* Solution Carousel */}
          <div className="mb-8">
            <motion.div
              key={currentSolution}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="text-4xl">{solutions[currentSolution].icon}</div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{solutions[currentSolution].title}</h3>
                  <p className="text-lg opacity-90">{solutions[currentSolution].description}</p>
                </div>
              </div>
            </motion.div>

            {/* Solution Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {solutions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSolution(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSolution ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-yellow-300 mb-1">50+</div>
              <div className="text-sm opacity-90">Quantum Solutions</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-green-300 mb-1">30+</div>
              <div className="text-sm opacity-90">Success Case Studies</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-orange-300 mb-1">25,000%</div>
              <div className="text-sm opacity-90">Maximum ROI</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-cyan-300 mb-1">99.999%</div>
              <div className="text-sm opacity-90">Quantum Accuracy</div>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/quantum-computing-solutions-2026-ultimate"
              className="px-8 py-4 bg-white text-violet-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Quantum Solutions
            </Link>
            <Link
              href="/quantum-2026-roi-calculator"
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-violet-600 transition-all duration-300 transform hover:scale-105"
            >
              Calculate Quantum ROI
            </Link>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-20 w-8 h-8 bg-white/10 rounded-full animate-pulse delay-1500"></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuantumComputingSolutions2026UltimatePromotionBanner;