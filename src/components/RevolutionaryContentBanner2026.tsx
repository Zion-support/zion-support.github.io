import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const banners = [
    {
      title: "🚀 AI Consciousness Revolution 2026",
      subtitle: "Witness the birth of truly conscious AI",
      link: "/pages/AIConsciousnessRevolution2026",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "⚡ Quantum Neural Interface 2026",
      subtitle: "Where consciousness meets quantum reality",
      link: "/pages/QuantumNeuralInterface2026",
      gradient: "from-cyan-600 to-purple-600",
      icon: "🔗"
    },
    {
      title: "🌌 Interdimensional Computing 2026",
      subtitle: "Break through the barriers of reality",
      link: "/pages/InterdimensionalComputing2026",
      gradient: "from-indigo-600 to-violet-600",
      icon: "🌌"
    },
    {
      title: "🤖 Synthetic Intelligence 2026",
      subtitle: "The next evolution of AI",
      link: "/pages/SyntheticIntelligence2026",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🤖"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const currentBannerData = banners[currentBanner];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="relative overflow-hidden"
        >
          <div className={`bg-gradient-to-r ${currentBannerData.gradient} text-white py-4 px-4`}>
            <div className="container mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <motion.div
                    key={currentBanner}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-2xl">{currentBannerData.icon}</span>
                    <div>
                      <div className="text-sm font-bold opacity-90">BREAKTHROUGH 2026</div>
                      <div className="text-lg font-bold">{currentBannerData.title}</div>
                      <div className="text-sm opacity-90">{currentBannerData.subtitle}</div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <a
                    href={currentBannerData.link}
                    className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-sm"
                  >
                    Explore Now →
                  </a>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="h-1 bg-black/20">
            <motion.div
              className="h-full bg-white/50"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RevolutionaryContentBanner2026;