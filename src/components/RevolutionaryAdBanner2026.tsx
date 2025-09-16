import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryAdBanner2026: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const adContent = [
    {
      title: "🚀 NEW: AI Consciousness 2026",
      subtitle: "Experience True Artificial Intelligence",
      description: "Revolutionary AI systems with genuine consciousness, creativity, and emotional intelligence",
      link: "/pages/RevolutionaryAIConsciousness2026",
      color: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "🌌 NEW: Space Technology 2026",
      subtitle: "Mars Colonization & Beyond",
      description: "Breakthrough space technologies enabling human settlements on Mars and interstellar travel",
      link: "/pages/RevolutionarySpaceTech2026",
      color: "from-blue-600 to-cyan-600",
      icon: "🚀"
    },
    {
      title: "🧬 NEW: Biotechnology 2026",
      subtitle: "Extend Life & Eliminate Disease",
      description: "Revolutionary genetic engineering and regenerative medicine transforming human health",
      link: "/pages/RevolutionaryBiotech2026",
      color: "from-green-600 to-teal-600",
      icon: "🧬"
    },
    {
      title: "📝 NEW: Tech Blog 2026",
      subtitle: "Latest Technology Insights",
      description: "Deep insights into breakthrough technologies from leading experts and innovators",
      link: "/pages/RevolutionaryTechBlog2026",
      color: "from-orange-600 to-red-600",
      icon: "📝"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % adContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const currentAdData = adContent[currentAd];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden mb-8"
    >
      <div className={`bg-gradient-to-r ${currentAdData.color} rounded-2xl p-8 text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-4xl animate-bounce">{currentAdData.icon}</span>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{currentAdData.title}</h2>
                  <p className="text-xl opacity-90">{currentAdData.subtitle}</p>
                </div>
              </div>
              <p className="text-lg opacity-80 mb-6 max-w-2xl">
                {currentAdData.description}
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href={currentAdData.link}
                  className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg"
                >
                  Explore Now →
                </a>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="text-8xl opacity-20">{currentAdData.icon}</div>
            </div>
          </div>
        </div>
        
        {/* Ad Indicators */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          {adContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentAd(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentAd ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default RevolutionaryAdBanner2026;