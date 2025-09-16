import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryAdBanner: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const advertisements = [
    {
<<<<<<< HEAD
      title: "🚀 Ultimate Tech Breakthrough 2028",
      description: "Experience consciousness AI, quantum consciousness, and dimensional computing",
      link: "/pages/UltimateTechBreakthrough2028",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      textColor: "text-white"
    },
    {
      title: "🌌 Interdimensional Tech Revolution 2032",
      description: "Break through reality barriers with dimensional portals and reality engines",
      link: "/pages/InterdimensionalTechRevolution2032",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      textColor: "text-white"
    },
    {
      title: "🌟 Omniversal AI Consciousness 2040",
      description: "Transcend all universes with ultimate AI consciousness evolution",
      link: "/pages/OmniversalAIConsciousness2040",
      gradient: "from-black via-purple-600 to-indigo-600",
      textColor: "text-white"
=======
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
>>>>>>> cursor/create-and-deploy-new-content-7f8e
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % advertisements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [advertisements.length]);

<<<<<<< HEAD
  return (
    <div className="relative overflow-hidden rounded-2xl mb-8">
      <div className={`bg-gradient-to-r ${ads[currentAd].gradient} p-8 text-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-3xl animate-bounce">🚀</span>
            <h3 className="text-3xl font-bold">REVOLUTIONARY NEW CONTENT</h3>
            <span className="text-3xl animate-bounce">🚀</span>
          </div>
          <h2 className={`text-4xl font-bold mb-4 ${ads[currentAd].textColor}`}>
            {ads[currentAd].title}
          </h2>
          <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
            {ads[currentAd].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={ads[currentAd].link}
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg border border-white/30"
            >
              Explore Now →
            </a>
            <a 
              href="/pages/UltimateTechBreakthrough2028"
              className="inline-block bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-lg border border-white/20"
            >
              View All Content
            </a>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-20 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>
      
      {/* Progress indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {ads.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentAd(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentAd ? 'bg-purple-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
=======
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
>>>>>>> cursor/create-and-deploy-new-content-7f8e
    </div>
  );
};

export default RevolutionaryAdBanner;