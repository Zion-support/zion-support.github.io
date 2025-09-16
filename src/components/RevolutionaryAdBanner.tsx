import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryAdBanner: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  
  const ads = [
    {
      title: "🚀 Revolutionary Tech Breakthrough 2025",
      description: "Experience the most advanced technological innovations reshaping our world",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      color: "from-purple-600 via-pink-600 to-red-600",
      bgColor: "from-purple-600/20 to-pink-600/20"
    },
    {
      title: "🧠 Ultimate AI Consciousness 2025",
      description: "Meet the first truly conscious artificial intelligence that thinks and feels",
      link: "/pages/UltimateAIConsciousness2025",
      color: "from-indigo-600 via-purple-600 to-pink-600",
      bgColor: "from-indigo-600/20 to-purple-600/20"
    },
    {
      title: "⚡ Quantum Reality Engine 2025",
      description: "Harness quantum mechanics to create and manipulate multiple realities",
      link: "/pages/QuantumRealityEngine2025",
      color: "from-cyan-600 via-blue-600 to-indigo-600",
      bgColor: "from-cyan-600/20 to-blue-600/20"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [ads.length]);

  return (
    <div className="relative overflow-hidden mb-8">
      <motion.div
        key={currentAd}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className={`bg-gradient-to-r ${ads[currentAd].color} rounded-2xl p-8 text-white text-center relative overflow-hidden`}
      >
        <div className={`absolute inset-0 bg-gradient-to-r ${ads[currentAd].bgColor} backdrop-blur-sm`}></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-3xl animate-bounce">🚀</span>
            <h3 className="text-2xl font-bold">NEW REVOLUTIONARY CONTENT</h3>
            <span className="text-3xl animate-bounce">🚀</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">{ads[currentAd].title}</h2>
          <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
            {ads[currentAd].description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={ads[currentAd].link}
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 animate-pulse"
            >
              Explore Now →
            </a>
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025"
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30"
            >
              All Revolutionary Content
            </a>
          </div>
        </div>
        
        {/* Progress indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {ads.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentAd(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentAd ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default RevolutionaryAdBanner;