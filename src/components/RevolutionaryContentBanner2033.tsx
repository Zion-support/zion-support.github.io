import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentBanner2033: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  
  const banners = [
    {
      title: "🌟 ULTIMATE TECH BREAKTHROUGH 2033",
      subtitle: "Transcendent AI Consciousness • Quantum Reality Engine • Interdimensional Networks",
      cta: "Explore Breakthrough",
      link: "/pages/UltimateTechBreakthrough2033",
      gradient: "from-purple-600 to-pink-600",
      icon: "🌟"
    },
    {
      title: "🚀 REVOLUTIONARY TECH SHOWCASE 2033",
      subtitle: "Consciousness Transfer • Reality Manipulation • Cosmic AI Networks",
      cta: "View Showcase",
      link: "/pages/RevolutionaryTechShowcase2033",
      gradient: "from-indigo-600 to-purple-600",
      icon: "🚀"
    },
    {
      title: "🧠 NEXT-GEN INNOVATION HUB 2033",
      subtitle: "50+ Active Innovations • 99.9% Success Rate • Infinite Possibilities",
      cta: "Enter Innovation Hub",
      link: "/pages/NextGenInnovationHub2033",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🧠"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden mb-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBanner}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-r ${banners[currentBanner].gradient} text-white rounded-2xl p-8 relative overflow-hidden`}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl animate-pulse">{banners[currentBanner].icon}</div>
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold">
                    NEW • JANUARY 2033
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  {banners[currentBanner].title}
                </h2>
                <p className="text-lg md:text-xl opacity-90 mb-6 max-w-3xl">
                  {banners[currentBanner].subtitle}
                </p>
                <a
                  href={banners[currentBanner].link}
                  className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  {banners[currentBanner].cta} →
                </a>
              </div>
              
              <div className="hidden md:block">
                <div className="text-8xl opacity-20 animate-pulse">
                  {banners[currentBanner].icon}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Banner Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentBanner === index ? 'bg-purple-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2033;