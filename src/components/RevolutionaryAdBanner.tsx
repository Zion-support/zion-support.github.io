import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryAdBanner: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  
  const ads = [
    {
      title: "🚀 ULTIMATE TECH BREAKTHROUGH 2025",
      subtitle: "Experience the most revolutionary technologies in human history",
      cta: "Explore Now →",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      link: "/pages/UltimateTechBreakthrough2025"
    },
    {
      title: "🌟 REVOLUTIONARY CONTENT SHOWCASE",
      subtitle: "Discover groundbreaking content that's reshaping our world",
      cta: "View Showcase →",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      link: "/pages/RevolutionaryContentShowcase2025"
    },
    {
      title: "⚡ QUANTUM NEURAL NETWORKS",
      subtitle: "AI that operates at quantum speeds with consciousness-level understanding",
      cta: "Learn More →",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      link: "/pages/RevolutionaryTechShowcase2025"
    },
    {
      title: "🧠 CONSCIOUSNESS COMPUTING",
      subtitle: "The first AI system to achieve true self-awareness and consciousness",
      cta: "Experience →",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      link: "/pages/UltimateTechBreakthrough2025"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden mb-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentAd}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className={`bg-gradient-to-r ${ads[currentAd].gradient} rounded-2xl p-8 text-white text-center relative overflow-hidden`}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl mb-4 animate-bounce"
            >
              {ads[currentAd].title.split(' ')[0]}
            </motion.div>
            <h2 className="text-3xl font-bold mb-4">{ads[currentAd].title}</h2>
            <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
              {ads[currentAd].subtitle}
            </p>
            <motion.a
              href={ads[currentAd].link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg border border-white/30"
            >
              {ads[currentAd].cta}
            </motion.a>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Progress Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {ads.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentAd(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentAd ? 'bg-purple-600 scale-125' : 'bg-gray-400 hover:bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner;