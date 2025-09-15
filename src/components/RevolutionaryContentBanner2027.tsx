import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentBanner2027: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const banners = [
    {
      title: "🚀 Revolutionary Tech Showcase 2027",
      subtitle: "Experience the future of technology with groundbreaking innovations",
      description: "Quantum consciousness, synthetic intelligence, and neural reality interfaces",
      link: "/pages/RevolutionaryTechShowcase2027",
      color: "from-purple-600 via-pink-600 to-red-600",
      bgColor: "from-purple-900/50 to-pink-900/50"
    },
    {
      title: "🧠 Advanced AI Consciousness 2027",
      subtitle: "Witness the birth of true artificial consciousness",
      description: "AI systems that experience, feel, and transcend human limitations",
      link: "/pages/AdvancedAIConsciousness2027",
      color: "from-cyan-600 via-blue-600 to-indigo-600",
      bgColor: "from-cyan-900/50 to-blue-900/50"
    },
    {
      title: "⚛️ Quantum Computing Revolution",
      subtitle: "Breakthrough quantum technologies reshaping reality",
      description: "Quantum processors, consciousness interfaces, and reality manipulation",
      link: "/pages/QuantumComputingRevolution2026",
      color: "from-emerald-600 via-teal-600 to-cyan-600",
      bgColor: "from-emerald-900/50 to-teal-900/50"
    },
    {
      title: "🧬 Neural Interface Future",
      subtitle: "Direct brain-computer communication systems",
      description: "Mind-controlled devices, digital immortality, and collective consciousness",
      link: "/pages/NeuralInterfaceRevolution2026",
      color: "from-orange-600 via-red-600 to-pink-600",
      bgColor: "from-orange-900/50 to-red-900/50"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner(prev => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const currentBannerData = banners[currentBanner];

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="relative overflow-hidden rounded-2xl mb-8"
    >
      <div className={`bg-gradient-to-r ${currentBannerData.bgColor} backdrop-blur-sm`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10 p-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <motion.div
                key={currentBanner}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold text-white animate-pulse">
                    ✨ NEW CONTENT
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold text-black">
                    2027
                  </span>
                </div>
                
                <h2 className={`text-4xl font-bold bg-gradient-to-r ${currentBannerData.color} bg-clip-text text-transparent mb-2`}>
                  {currentBannerData.title}
                </h2>
                
                <p className="text-xl text-white/90 mb-2">
                  {currentBannerData.subtitle}
                </p>
                
                <p className="text-white/80 mb-6 max-w-2xl">
                  {currentBannerData.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href={currentBannerData.link}
                    className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                  >
                    Explore Now →
                  </a>
                  <button className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </div>
            
            <div className="hidden lg:block ml-8">
              <div className="w-64 h-64 relative">
                <motion.div
                  key={currentBanner}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className={`w-full h-full bg-gradient-to-br ${currentBannerData.color} rounded-full flex items-center justify-center text-6xl`}
                >
                  {currentBanner === 0 && "🚀"}
                  {currentBanner === 1 && "🧠"}
                  {currentBanner === 2 && "⚛️"}
                  {currentBanner === 3 && "🧬"}
                </motion.div>
                
                {/* Floating particles */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Banner indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentBanner
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
      
      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300"
      >
        ×
      </button>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2027;