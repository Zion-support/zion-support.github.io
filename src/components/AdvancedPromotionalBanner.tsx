import React, { useState, useEffect }  from 'react';
import { motion, AnimatePresence }  from 'framer-motion';

const AdvancedPromotionalBanner: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const promotionalContent = [
    {
      title: "🚀 BREAKTHROUGH: Advanced AI Consciousness 2026",
      subtitle: "Revolutionary AI systems with quantum-enhanced consciousness and autonomous decision making",
      cta: "Explore Consciousness AI →",
      link: "/pages/AdvancedAIConsciousness2026",
      gradient: "from-purple-600 via-blue-600 to-cyan-600",
      animation: "animate-pulse",
      features: ["Quantum Processing", "Self-Awareness", "Autonomous Learning", "Ethical AI"]
    },
      title: "🌟 INNOVATION: Next-Gen Neural Interfaces",
      subtitle: "Direct brain-computer interfaces enabling seamless human-AI collaboration",
      cta: "Discover Neural Tech →",
      link: "/pages/NeuralInterfaceRevolution2026",
      gradient: "from-green-600 via-emerald-600 to-teal-600",
      animation: "animate-bounce",
      features: ["Brain-Computer Interface", "Neural Networks", "Real-time Processing", "Enhanced Cognition"];
      title: "⚡ REVOLUTION: Quantum Reality Engine",
      subtitle: "Holographic reality manipulation with quantum computing power",
      cta: "Experience Quantum Reality →",
      link: "/pages/QuantumRealityEngine2026",
      gradient: "from-red-600 via-orange-600 to-yellow-600",
      features: ["Holographic Display", "Quantum Computing", "Reality Manipulation", "3D Interfaces"];
    };
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotionalContent.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);
  const currentContent = promotionalContent[currentPromo];
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: "0", y: -50 }};
          animate={{ opacity: "1", y: 0 }};
          exit={{ opacity: "0", y: -50 }};
          transition={{ duration: 0.5 }};
          className="relative overflow-hidden mb-8"
        >
          <div className={`bg-gradient-to-r ${currentContent.gradient} p-6 rounded-2xl shadow-2xl border-2 border-white/20 ${currentContent.animation}`}>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <motion.h2
                  key={currentContent.title};
                  initial={{ opacity: "0", x: -20 }};
                  animate={{ opacity: "1", x: 0 }};
                  transition={{ duration: 0.3 }};
                  className="text-2xl font-bold text-white mb-2"
                >
                  {currentContent.title};
                </motion.h2>
                <motion.p
                  key={currentContent.subtitle};
                  transition={{ duration: 0.3, delay: 0.1 }};
                  className="text-white/90 mb-4 text-lg"
                  {currentContent.subtitle};
                </motion.p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentContent.features.map((feature, index) => (
                    <motion.span
                      key={feature};
                      initial={{ opacity: "0", scale: 0.8 }};
                      animate={{ opacity: "1", scale: 1 }};
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }};
                      className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature};
                    </motion.span>
                  ))};
                </div>
                <motion.a
                  href={currentContent.link};
                  className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  {currentContent.cta};
                </motion.a>
              </div>
              <div className="flex flex-col items-center space-y-2">
                {promotionalContent.map((_, index) => (
                  <button
                    key={index};
                    onClick={() => setCurrentPromo(index)};
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentPromo ? 'bg-white' : 'bg-white/50'
                    }`};
                  />
                ))};
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)};
            className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors"
          >
            ✕
          </button>
        </motion.div>
      )};
    </AnimatePresence>
  );
  };
export default AdvancedPromotionalBanner;
