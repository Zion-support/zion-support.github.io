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
      description: "Interactive demos, real-time simulations, and hands-on experiments with cutting-edge AI, quantum computing, and neural interfaces.",
      cta: "Explore Now",
      link: "/pages/UltimateTechShowcase2026",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🌟",
      urgency: "LIMITED TIME",
      discount: "FREE ACCESS"
    },
    {
      id: 2,
      title: "🧠 AI Innovation Showcase 2026",
      subtitle: "Revolutionary AI Technologies",
      description: "Discover autonomous AI agents, quantum-enhanced processing, neural interfaces, and synthetic intelligence that's reshaping industries.",
      cta: "Try Interactive Demo",
      link: "/pages/AIInnovationShowcase2026",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      icon: "⚡",
      urgency: "BREAKTHROUGH",
      discount: "EXCLUSIVE"
    },
    {
      id: 3,
      title: "⚡ Quantum Computing Revolution",
      subtitle: "Exponential Computing Power",
      description: "Unlock quantum supremacy with 1000+ qubit processors, molecular simulation, and unbreakable encryption that solves impossible problems.",
      cta: "Go Quantum",
      link: "/pages/QuantumComputingRevolution2026",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: "🔬",
      urgency: "REVOLUTIONARY",
      discount: "FIRST ACCESS"
    },
    {
      id: 4,
      title: "🧬 Neural Interface Technology",
      subtitle: "Mind-Machine Connection",
      description: "Direct brain-computer interfaces enabling thought control, memory enhancement, and telepathic communication with 95% accuracy.",
      cta: "Connect Mind & Machine",
      link: "/pages/NeuralInterfaceRevolution2026",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      icon: "🎮",
      urgency: "FUTURE TECH",
      discount: "BETA ACCESS"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % advertisements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [advertisements.length]);

  const nextAd = () => {
    setCurrentAd((prev) => (prev + 1) % advertisements.length);
  };

  const prevAd = () => {
    setCurrentAd((prev) => (prev - 1 + advertisements.length) % advertisements.length);
  };

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const currentAdvertisement = advertisements[currentAd];

  return (
    <div className="relative overflow-hidden">
      {/* Main Banner */}
      <motion.div
        key={currentAd}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className={`bg-gradient-to-r ${currentAdvertisement.gradient} text-white relative overflow-hidden`}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
            <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-3xl animate-bounce">{currentAdvertisement.icon}</span>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold animate-pulse">
                      {currentAdvertisement.urgency}
                    </span>
                    <span className="px-3 py-1 bg-white/30 backdrop-blur-sm rounded-full text-xs font-bold">
                      {currentAdvertisement.discount}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-1">
                    {currentAdvertisement.title}
                  </h2>
                  <p className="text-lg opacity-90 mb-2">
                    {currentAdvertisement.subtitle}
                  </p>
                  <p className="text-sm opacity-80 max-w-2xl">
                    {currentAdvertisement.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href={currentAdvertisement.link}
                className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold hover:scale-105 transform"
              >
                {currentAdvertisement.cta} →
              </a>
              
              {/* Navigation Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevAd}
                  className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextAd}
                  className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={closeBanner}
                className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <motion.div
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Quick Access Pills */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {advertisements.map((ad, index) => (
              <button
                key={ad.id}
                onClick={() => setCurrentAd(index)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  index === currentAd
                    ? 'bg-white text-gray-900'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                {ad.icon} {ad.title.split(':')[1]?.trim() || ad.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAdvertisingBanner;