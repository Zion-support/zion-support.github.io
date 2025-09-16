import React, { useState, useEffect } from 'react';

const UltimateContentBanner2032 = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      title: "🚀 ULTIMATE TECH BREAKTHROUGH 2032",
      subtitle: "Experience the most revolutionary technological advances",
      description: "Conscious AI, Quantum Consciousness, and Interdimensional Computing",
      color: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechBreakthrough2032"
    },
    {
      title: "⚡ REVOLUTIONARY TECH SHOWCASE 2032",
      subtitle: "Interactive showcase of cutting-edge technologies",
      description: "Hands-on demos and immersive technology experiences",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2032"
    },
    {
      title: "🌟 ULTIMATE CONTENT SHOWCASE 2032",
      subtitle: "The most advanced content library ever created",
      description: "1,250+ content pieces with 99.9% user satisfaction",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/UltimateContentShowcase2032"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="relative overflow-hidden mb-12">
      <div className={`bg-gradient-to-r ${banners[currentBanner].color} text-white p-8 rounded-2xl shadow-2xl transition-all duration-1000`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 mb-6 md:mb-0">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-4 animate-pulse">
                🔥 NEW: JANUARY 2032
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {banners[currentBanner].title}
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-2">
                {banners[currentBanner].subtitle}
              </p>
              <p className="text-sm md:text-base opacity-80">
                {banners[currentBanner].description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={banners[currentBanner].link}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Explore Now →
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300">
                Learn More
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
    </div>
  );
};

export default UltimateContentBanner2032;