import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryAdBanner: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const advertisements = [
    {
      title: '🚀 Revolutionary Tech Breakthrough 2025',
      description: 'Experience the most advanced technological innovations reshaping our world',
      link: '/pages/RevolutionaryTechBreakthrough2025',
      color: 'from-purple-600 via-pink-600 to-red-600',
      icon: '🧠'
    },
    {
      title: '🌟 Ultimate Tech Showcase 2025',
      description: 'Interactive exploration of cutting-edge AI, quantum computing, and neural interfaces',
      link: '/pages/UltimateTechShowcase2025',
      color: 'from-cyan-600 via-blue-600 to-indigo-600',
      icon: '⚡'
    },
    {
      title: '🔬 Next-Gen Innovation Hub 2025',
      description: 'Where impossible becomes possible through revolutionary innovation',
      link: '/pages/NextGenInnovationHub2025',
      color: 'from-emerald-600 via-teal-600 to-cyan-600',
      icon: '🌌'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % advertisements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [advertisements.length]);

  if (!isVisible) return null;

  return (
    <div className="relative mb-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentAd}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-r ${advertisements[currentAd].color} rounded-2xl p-6 text-white relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-4xl animate-bounce">{advertisements[currentAd].icon}</div>
              <div>
                <h3 className="text-2xl font-bold mb-1">{advertisements[currentAd].title}</h3>
                <p className="text-lg opacity-90">{advertisements[currentAd].description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href={advertisements[currentAd].link}
                className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30"
              >
                Explore Now →
              </a>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RevolutionaryAdBanner;