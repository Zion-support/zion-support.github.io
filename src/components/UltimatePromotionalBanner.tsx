import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimatePromotionalBanner: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotionalContent = [
    {
      title: "🚀 NEW: Ultimate Tech Breakthrough 2025",
      subtitle: "Experience revolutionary quantum consciousness AI and holographic reality matrix",
      cta: "Explore Breakthrough →",
      link: "/pages/UltimateTechBreakthrough2025",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      animation: "animate-pulse"
    },
    {
      title: "🌟 BREAKTHROUGH: Next-Gen Innovation Hub",
      subtitle: "Pioneering the future with cutting-edge technologies that revolutionize industries",
      cta: "Discover Innovations →",
      link: "/pages/NextGenInnovationHub2025",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      animation: "animate-bounce"
    },
    {
      title: "⚡ REVOLUTIONARY: AI Consciousness 2030",
      subtitle: "Advanced AI systems with self-awareness and consciousness capabilities",
      cta: "Experience Future →",
      link: "/pages/UltimateAIConsciousness2030",
      gradient: "from-green-600 via-emerald-600 to-teal-600",
      animation: "animate-pulse"
    },
    {
      title: "🌌 BREAKTHROUGH: Interdimensional Tech 2035",
      subtitle: "Computing power from parallel dimensions for unlimited processing capacity",
      cta: "Go Interdimensional →",
      link: "/pages/InterdimensionalTechRevolution2035",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      animation: "animate-bounce"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotionalContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [promotionalContent.length]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPromo}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-r ${promotionalContent[currentPromo].gradient} rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden ${promotionalContent[currentPromo].animation}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-4xl">🚀</span>
              <h3 className="text-3xl font-bold">BREAKTHROUGH ALERT</h3>
              <span className="text-4xl">🚀</span>
            </div>
            <h4 className="text-2xl font-bold mb-3">{promotionalContent[currentPromo].title}</h4>
            <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
              {promotionalContent[currentPromo].subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href={promotionalContent[currentPromo].link}
                whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold text-lg border-2 border-white/30"
              >
                {promotionalContent[currentPromo].cta}
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVisible(false)}
                className="bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold border border-white/30"
              >
                ✕ Close
              </motion.button>
            </div>
          </div>
          
          {/* Animated background elements */}
          <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-ping"></div>
          <div className="absolute top-8 right-8 w-6 h-6 bg-white/20 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-4 left-8 w-4 h-4 bg-white/20 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-8 right-4 w-10 h-10 bg-white/20 rounded-full animate-ping delay-1500"></div>
        </motion.div>
      </AnimatePresence>
      
      {/* Progress indicator */}
      <div className="flex justify-center space-x-2 mb-4">
        {promotionalContent.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentPromo ? 'bg-purple-500 scale-125' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default UltimatePromotionalBanner;