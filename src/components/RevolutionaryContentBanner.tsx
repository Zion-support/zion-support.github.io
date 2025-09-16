import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      id: 1,
      title: "Revolutionary Tech Breakthrough 2028",
      subtitle: "Conscious AI • Quantum Consciousness • Interdimensional Computing",
      description: "Experience the most advanced technological revolution featuring conscious AI, quantum consciousness, and interdimensional computing",
      link: "/pages/RevolutionaryTechBreakthrough2028",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 via-indigo-900 to-blue-900",
      icon: "🚀"
    },
    {
      id: 2,
      title: "Ultimate Tech Revolution 2029",
      subtitle: "Synthetic Intelligence • Quantum Reality • Interdimensional AI",
      description: "The most advanced technological revolution featuring synthetic intelligence, quantum consciousness, and reality manipulation",
      link: "/pages/UltimateTechRevolution2029",
      color: "from-indigo-600 to-pink-600",
      bgColor: "from-indigo-900 via-purple-900 to-pink-900",
      icon: "🌟"
    },
    {
      id: 3,
      title: "Consciousness Technology Revolution",
      subtitle: "Neural Enhancement • Synthetic Intelligence • Mind-Machine Integration",
      description: "Revolutionary technology that enhances human consciousness and creates synthetic intelligence",
      link: "/pages/RevolutionaryTechBreakthrough2028",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900 via-teal-900 to-cyan-900",
      icon: "🧠"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const currentBannerData = banners[currentBanner];

  return (
    <div className={`bg-gradient-to-r ${currentBannerData.bgColor} text-white py-8 mb-8 relative overflow-hidden transition-all duration-500`}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🌟 REVOLUTIONARY BREAKTHROUGH • JANUARY 2028
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {currentBannerData.icon} {currentBannerData.title}
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-6">
            {currentBannerData.description}
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href={currentBannerData.link}
              className={`bg-gradient-to-r ${currentBannerData.color} px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
            >
              Explore Breakthrough →
            </a>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Banner Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentBanner ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner;