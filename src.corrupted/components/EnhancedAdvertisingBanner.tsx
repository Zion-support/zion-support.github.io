import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedAdvertisingBanner: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const advertisements = [
    {
      id: 1,
      title: "🚀 NEW: Ultimate Tech Showcase 2026",
      subtitle: "Experience Revolutionary Technologies",
      description: "Discover cutting-edge AI, quantum computing, neural interfaces, and blockchain innovations that are reshaping our world.",
      cta: "Explore Now",
      link: "/pages/UltimateTechShowcase2026",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🌟",
      features: ["Interactive Demos", "Live Analytics", "Future Predictions"]
    },
    {
      id: 2,
      title: "🧠 AI Innovation Showcase 2026",
      subtitle: "The Future of Artificial Intelligence",
      description: "Experience autonomous AI agents, quantum-enhanced processing, neural interfaces, and synthetic intelligence.",
      cta: "Try AI Demo",
      link: "/pages/AIInnovationShowcase2026",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      icon: "🤖",
      features: ["Autonomous Agents", "Quantum AI", "Neural Interfaces"]
    },
    {
      id: 3,
      title: "⚡ Quantum Computing Revolution",
      subtitle: "Exponential Computing Power",
      description: "Unlock quantum supremacy with 1000+ qubit processors, molecular simulation, and unbreakable encryption.",
      cta: "Go Quantum",
      link: "/pages/QuantumComputingRevolution2026",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: "⚛️",
      features: ["Quantum Supremacy", "Molecular Simulation", "Instant Transactions"]
    },
    {
      id: 4,
      title: "🧬 Neural Interface Technology",
      subtitle: "Mind-Machine Fusion",
      description: "Direct brain-computer interfaces enabling thought control, memory enhancement, and telepathic communication.",
      cta: "Connect Mind",
      link: "/pages/NeuralInterfaceRevolution2026",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      icon: "🧬",
      features: ["Thought Control", "Memory Enhancement", "Neural Networking"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % advertisements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [advertisements.length]);

  const currentAdvertisement = advertisements[currentAd];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentAd}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-r ${currentAdvertisement.gradient} text-white relative overflow-hidden`}
        >
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
          
          <div className="relative z-10 container mx-auto px-4 py-8">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-4xl animate-bounce">{currentAdvertisement.icon}</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-1">
                      {currentAdvertisement.title}
                    </h2>
                    <p className="text-lg opacity-90">
                      {currentAdvertisement.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-base md:text-lg opacity-95 mb-4 max-w-3xl">
                  {currentAdvertisement.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={currentAdvertisement.link}
                    className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
                  >
                    {currentAdvertisement.cta} →
                  </a>
                  
                  <div className="flex space-x-2">
                    {currentAdvertisement.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block ml-8">
                <div className="text-6xl opacity-20">
                  {currentAdvertisement.icon}
                </div>
              </div>
            </div>
          </div>
          
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Progress Indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
            <motion.div
              className="h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Ad Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {advertisements.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentAd(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentAd ? 'bg-purple-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EnhancedAdvertisingBanner;