import React, { useState, useEffect } from 'react';

const UltimateContentBanner2035: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2035",
      subtitle: "Synthetic Consciousness • Quantum Reality • Interdimensional AI",
      description: "Experience the most advanced technological revolution featuring synthetic consciousness, quantum reality manipulation, and interdimensional AI",
      link: "/pages/UltimateTechRevolution2035",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 via-indigo-900 to-blue-900",
      icon: "🚀"
    },
    {
      id: 2,
      title: "Revolutionary Tech Showcase 2035",
      subtitle: "Interactive Demos • Quantum Simulation • Reality Manipulation",
      description: "The most advanced technological showcase featuring interactive demos, quantum simulation, and reality manipulation",
      link: "/pages/RevolutionaryTechShowcase2035",
      color: "from-indigo-600 to-pink-600",
      bgColor: "from-indigo-900 via-purple-900 to-pink-900",
      icon: "🌟"
    },
    {
      id: 3,
      title: "Consciousness Technology 2035",
      subtitle: "Synthetic Intelligence • Quantum Computing • Mind-Machine Fusion",
      description: "Revolutionary technology that enhances human consciousness and creates synthetic intelligence",
      link: "/pages/UltimateTechRevolution2035",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900 via-teal-900 to-cyan-900",
      icon: "🧠"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const currentBannerData = banners[currentBanner];

  return (
    <div className={`bg-gradient-to-r ${currentBannerData.bgColor} text-white py-12 mb-8 relative overflow-hidden transition-all duration-500`}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🌟 ULTIMATE BREAKTHROUGH • JANUARY 2035
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {currentBannerData.icon} {currentBannerData.title}
          </h2>
          <p className="text-2xl opacity-90 max-w-5xl mx-auto mb-8">
            {currentBannerData.description}
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href={currentBannerData.link}
              className={`bg-gradient-to-r ${currentBannerData.color} px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl`}
            >
              Explore Revolution →
            </a>
            <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-xl">
              Interactive Demo
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
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentBanner ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default UltimateContentBanner2035;