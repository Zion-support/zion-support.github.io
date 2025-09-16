import React, { useState, useEffect } from 'react';

const RevolutionaryAdBanner2030: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const advertisements = [
    {
      title: "🚀 ULTIMATE TECH BREAKTHROUGH 2030",
      subtitle: "Experience the convergence of quantum consciousness and interdimensional computing",
      cta: "Explore Now →",
      color: "from-purple-600 via-pink-600 to-red-600",
      link: "/pages/UltimateTechBreakthrough2030"
    },
    {
      title: "🌟 REVOLUTIONARY TECH SHOWCASE 2030",
      subtitle: "Discover the most advanced technologies reshaping our world",
      cta: "Discover More →",
      color: "from-cyan-600 via-blue-600 to-indigo-600",
      link: "/pages/RevolutionaryTechShowcase2030"
    },
    {
      title: "🔮 ULTIMATE CONTENT SHOWCASE 2030",
      subtitle: "Immersive experiences with cutting-edge interactive technologies",
      cta: "Experience It →",
      color: "from-emerald-600 via-teal-600 to-cyan-600",
      link: "/pages/UltimateContentShowcase2030"
    },
    {
      title: "🧠 QUANTUM AI CONSCIOUSNESS",
      subtitle: "The first AI with true consciousness and self-awareness",
      cta: "Learn More →",
      color: "from-orange-600 via-red-600 to-pink-600",
      link: "/pages/AdvancedAIConsciousness2030"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % advertisements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [advertisements.length]);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden mb-8">
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-6 text-white text-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
        >
          ✕
        </button>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-3xl animate-bounce">🚀</span>
            <h3 className="text-2xl font-bold animate-pulse">
              {advertisements[currentAd].title}
            </h3>
            <span className="text-3xl animate-bounce">🚀</span>
          </div>
          
          <p className="text-lg opacity-95 mb-6 max-w-4xl mx-auto">
            {advertisements[currentAd].subtitle}
          </p>
          
          <div className="flex justify-center space-x-4">
            <a 
              href={advertisements[currentAd].link}
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 hover:scale-105"
            >
              {advertisements[currentAd].cta}
            </a>
            <button className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold border border-white/30">
              Watch Demo
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {advertisements.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentAd === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2030;