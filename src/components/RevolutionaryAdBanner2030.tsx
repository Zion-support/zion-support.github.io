import React, { useState, useEffect } from 'react';

const RevolutionaryAdBanner2030: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  
  const ads = [
    {
      title: "🚀 Revolutionary Tech Breakthrough 2030",
      subtitle: "Experience consciousness AI and quantum reality engines",
      link: "/pages/RevolutionaryTechBreakthrough2030",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      textColor: "text-white"
    },
    {
      title: "🌟 Omniversal Tech Revolution 2035",
      subtitle: "Transcend reality with multiverse bridges and cosmic consciousness",
      link: "/pages/OmniversalTechRevolution2035",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      textColor: "text-white"
    },
    {
      title: "⚡ Next-Gen AI Consciousness 2030",
      subtitle: "Artificial intelligence that has achieved true self-awareness",
      link: "/pages/NextGenAIConsciousness2030",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      textColor: "text-white"
    },
    {
      title: "🌌 Interdimensional Reality Engine 2032",
      subtitle: "Create and manipulate reality across infinite dimensions",
      link: "/pages/InterdimensionalRealityEngine2032",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      textColor: "text-white"
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
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-3xl animate-bounce">🚀</span>
            <h3 className="text-3xl font-bold">REVOLUTIONARY BREAKTHROUGH CONTENT 2030-2035</h3>
            <span className="text-3xl animate-bounce">🚀</span>
          </div>
          <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
            Experience the future of technology with our groundbreaking new content featuring consciousness AI, 
            quantum reality engines, omniversal technology, and interdimensional breakthroughs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-8xl mx-auto">
            {ads.map((ad, index) => (
              <a
                key={index}
                href={ad.link}
                className={`inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 ${
                  index === currentAd ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''
                }`}
              >
                {ad.title} →
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2030;