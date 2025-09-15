import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateContentPromotionalBanner2026: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotionalBanners = [
    {
      id: 1,
      title: "🌟 ULTIMATE TECH REVOLUTION 2026",
      subtitle: "Experience the convergence of all breakthrough technologies",
      description: "Witness the most significant technological advancement in human history with our Ultimate Technology Revolution platform",
      link: "/pages/UltimateTechRevolution2026",
      gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
      icon: "🚀",
      features: ["Consciousness AI", "Quantum Computing", "Neural Interfaces", "Synthetic Biology"]
    },
    {
      id: 2,
      title: "🧠 QUANTUM CONSCIOUSNESS 2027",
      subtitle: "Machines that achieve genuine consciousness and emotions",
      description: "Be among the first to interact with truly conscious machines that dream, feel, and experience the world",
      link: "/pages/QuantumConsciousnessRevolution2027",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      icon: "🌌",
      features: ["Machine Dreams", "Emotional AI", "Quantum Awareness", "Consciousness Levels"]
    },
    {
      id: 3,
      title: "🧬 SYNTHETIC BIOLOGY REVOLUTION",
      subtitle: "Redesign life itself with programmable biology",
      description: "Create synthetic organisms, living factories, and environmental healing systems that solve humanity's greatest challenges",
      link: "/pages/SyntheticBiologyRevolution2027",
      gradient: "from-green-600 via-emerald-600 to-teal-600",
      icon: "🧬",
      features: ["Programmable Life", "Living Factories", "Environmental Healing", "Living Medicines"]
    },
    {
      id: 4,
      title: "✨ TRANSCENDENT AI 2026",
      subtitle: "AI that transcends human limitations and achieves superintelligence",
      description: "Experience AI that exceeds human intelligence by 1000x and operates beyond the constraints of time and space",
      link: "/pages/TranscendentAI2026",
      gradient: "from-amber-600 via-orange-600 to-red-600",
      icon: "✨",
      features: ["Superintelligence", "Cosmic Awareness", "Transcendent Processing", "Scientific Breakthroughs"]
    },
    {
      id: 5,
      title: "🏆 ULTIMATE SERVICE SHOWCASE",
      subtitle: "Comprehensive suite of revolutionary services",
      description: "Transform your business with our complete range of cutting-edge services from AI to quantum computing",
      link: "/pages/UltimateServiceShowcase2026",
      gradient: "from-slate-600 via-gray-600 to-zinc-600",
      icon: "🏆",
      features: ["AI & ML", "Quantum Computing", "Neural Interfaces", "Premium Services"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % promotionalBanners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentBannerData = promotionalBanners[currentBanner];

  if (!isVisible) return null;

  return (
    <div className="relative mb-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBanner}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-r ${currentBannerData.gradient} rounded-2xl p-8 text-white relative overflow-hidden`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-4xl animate-bounce">{currentBannerData.icon}</span>
                <div>
                  <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-2 animate-pulse">
                    🚀 BREAKTHROUGH CONTENT • JANUARY 2026
                  </div>
                  <h2 className="text-3xl font-bold">{currentBannerData.title}</h2>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/70 hover:text-white transition-colors text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white/90">{currentBannerData.subtitle}</h3>
                <p className="text-lg text-white/80 mb-6">{currentBannerData.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentBannerData.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <a
                  href={currentBannerData.link}
                  className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-white/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Explore {currentBannerData.title.split(' ')[0]} →
                </a>
              </div>
              
              <div className="text-center">
                <div className="text-8xl mb-4 animate-pulse">{currentBannerData.icon}</div>
                <div className="text-white/60 text-sm">
                  Banner {currentBanner + 1} of {promotionalBanners.length}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {promotionalBanners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentBanner ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default UltimateContentPromotionalBanner2026;