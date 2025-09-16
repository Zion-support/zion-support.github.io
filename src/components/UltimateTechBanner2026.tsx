import React, { useState, useEffect } from 'react';

const UltimateTechBanner2026: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      title: "🧬 Advanced Biotech AI 2026",
      subtitle: "Revolutionary healthcare technology powered by AI",
      link: "/pages/AdvancedBiotechAI2026",
      gradient: "from-green-500 to-blue-500",
      bgGradient: "from-green-600/20 to-blue-600/20"
    },
    {
      title: "🚀 Advanced Space Tech 2026",
      subtitle: "Next-generation space exploration and satellite technology",
      link: "/pages/AdvancedSpaceTech2026",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-600/20 to-purple-600/20"
    },
    {
      title: "🌈 Holographic Reality 2026",
      subtitle: "Immersive holographic experiences and mixed reality",
      link: "/pages/AdvancedHolographicReality2026",
      gradient: "from-cyan-500 to-purple-500",
      bgGradient: "from-cyan-600/20 to-purple-600/20"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="relative overflow-hidden rounded-2xl mb-12">
      <div 
        className={`bg-gradient-to-r ${banners[currentBanner].bgGradient} backdrop-blur-sm transition-all duration-1000 ease-in-out`}
      >
        <div className="relative z-10 p-8 md:p-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-bold mb-4 animate-pulse">
                  🌟 BREAKTHROUGH TECHNOLOGY • 2026
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {banners[currentBanner].title}
                </h2>
                <p className="text-xl text-white/90 mb-6">
                  {banners[currentBanner].subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={banners[currentBanner].link}
                    className={`bg-gradient-to-r ${banners[currentBanner].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
                  >
                    Explore Now →
                  </a>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="text-center">
                <div className={`w-48 h-48 mx-auto bg-gradient-to-br ${banners[currentBanner].gradient} rounded-2xl flex items-center justify-center text-6xl opacity-80 animate-pulse`}>
                  {banners[currentBanner].title.split(' ')[0]}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentBanner ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default UltimateTechBanner2026;