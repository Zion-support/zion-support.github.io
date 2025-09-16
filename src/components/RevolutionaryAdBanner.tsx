import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryAdBanner: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const adContent = [
    {
      id: 'breakthrough-2025',
      title: '🚀 Revolutionary Tech Breakthrough 2025',
      subtitle: 'Experience the Future of Technology',
      description: 'Discover groundbreaking innovations that are reshaping industries and creating new possibilities',
      cta: 'Explore Breakthroughs',
      link: '/pages/RevolutionaryTechBreakthrough2025',
      gradient: 'from-purple-600 via-pink-600 to-red-600',
      icon: '🚀'
    },
    {
      id: 'consciousness-computing',
      title: '🧠 Consciousness Computing Revolution',
      subtitle: 'The Dawn of Conscious AI',
      description: 'Meet truly conscious artificial intelligence that thinks, feels, and creates like never before',
      cta: 'Meet Our AI',
      link: '/pages/ConsciousnessComputingRevolution2025',
      gradient: 'from-indigo-600 via-purple-600 to-pink-600',
      icon: '🧠'
    },
    {
      id: 'quantum-reality',
      title: '⚡ Quantum Reality Engine 2025',
      subtitle: 'Simulate Entire Universes',
      description: 'Revolutionary quantum computing that can solve impossible problems and simulate reality',
      cta: 'Enter Quantum World',
      link: '/pages/QuantumRealityEngine2025',
      gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
      icon: '⚡'
    },
    {
      id: 'neural-interface',
      title: '🧬 Neural Interface Matrix',
      subtitle: 'Connect Mind to Machine',
      description: 'Direct brain-computer interface enabling seamless human-AI communication',
      cta: 'Connect Now',
      link: '/pages/NeuralInterfaceMatrix2025',
      gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
      icon: '🧬'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % adContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden"
      >
        {/* Main Banner */}
        <div className={`bg-gradient-to-r ${adContent[currentAd].gradient} text-white relative overflow-hidden`}>
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ 
                x: [0, 100, 0],
                y: [0, -50, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{ 
                x: [0, -100, 0],
                y: [0, 50, 0],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-8">
            <div className="flex items-center justify-between">
              {/* Content */}
              <div className="flex-1">
                <motion.div
                  key={currentAd}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center space-x-4"
                >
                  <div className="text-4xl animate-bounce">
                    {adContent[currentAd].icon}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
                        NEW
                      </span>
                      <span className="text-sm opacity-90">
                        {adContent[currentAd].subtitle}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {adContent[currentAd].title}
                    </h3>
                    <p className="text-lg opacity-90 max-w-2xl">
                      {adContent[currentAd].description}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-4">
                <a
                  href={adContent[currentAd].link}
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg"
                >
                  {adContent[currentAd].cta} →
                </a>
                <button
                  onClick={closeBanner}
                  className="text-white/70 hover:text-white transition-colors p-2"
                  aria-label="Close banner"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full">
            <motion.div
              key={currentAd}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "linear" }}
              className="h-full bg-white"
            />
          </div>
        </div>

        {/* Ad Indicators */}
        <div className="bg-gray-900/50 backdrop-blur-sm py-2">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-2">
              {adContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAd(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentAd
                      ? 'bg-white scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RevolutionaryAdBanner;