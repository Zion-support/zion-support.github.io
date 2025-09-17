import React, { useState, useEffect } from 'react';

const UltimateContentPromotionBanner: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotionalContent = [
    {
      title: "🚀 Revolutionary Tech Breakthrough 2026",
      subtitle: "Experience the most groundbreaking technological innovations",
      link: "/pages/RevolutionaryTechBreakthrough2026",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      features: ["AI Consciousness", "Quantum Supremacy", "Neural Interfaces"]
    },
    {
      title: "🌟 Ultimate Tech Showcase 2026",
      subtitle: "The convergence of AI consciousness and quantum computing",
      link: "/pages/UltimateTechShowcase2026",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      features: ["Quantum Reality", "Synthetic Intelligence", "Space Technology"]
    },
    {
      title: "🔮 Advanced Tech Trends 2027",
      subtitle: "Explore cutting-edge technology trends shaping the future",
      link: "/pages/AdvancedTechTrends2027",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      features: ["Interdimensional Computing", "Neural Reality", "Quantum Consciousness"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotionalContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [promotionalContent.length]);

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const current = promotionalContent[currentPromo];

  return (
    <div className="relative mb-12 overflow-hidden">
      <div className={`bg-gradient-to-r ${current.gradient} rounded-2xl p-8 text-white text-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        
        {/* Close Button */}
        <button
          onClick={closeBanner}
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300 z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative z-10">
          {/* Animated Title */}
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
              {current.title}
            </h2>
            <p className="text-xl md:text-2xl opacity-95 max-w-4xl mx-auto">
              {current.subtitle}
            </p>
          </div>

          {/* Features */}
          <div className="flex justify-center space-x-4 mb-8 flex-wrap">
            {current.features.map((feature, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Call to Action */}
          <div className="flex justify-center space-x-4 flex-wrap">
            <a 
              href={current.link}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg hover:scale-105"
            >
              Explore Now →
            </a>
            <a 
              href="/pages/ComprehensiveTechInsights2026"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold text-lg"
            >
              View All Content →
            </a>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {promotionalContent.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentPromo 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentPromotionBanner;