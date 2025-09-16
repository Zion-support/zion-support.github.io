import React, { useState, useEffect } from 'react';

const UltimateContentBanner2030: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const banners = [
    {
      title: "🚀 ULTIMATE TECH BREAKTHROUGH 2030",
      subtitle: "Experience the most revolutionary technologies that will reshape humanity",
      link: "/pages/UltimateTechBreakthrough2030",
      color: "from-purple-600 via-pink-600 to-red-600",
      bgColor: "from-purple-900/90 via-pink-900/90 to-red-900/90"
    },
    {
      title: "🌟 REVOLUTIONARY TECH SHOWCASE 2030",
      subtitle: "Interactive demonstrations of cutting-edge AI, quantum, and neural technologies",
      link: "/pages/RevolutionaryTechShowcase2030",
      color: "from-cyan-600 via-blue-600 to-indigo-600",
      bgColor: "from-cyan-900/90 via-blue-900/90 to-indigo-900/90"
    },
    {
      title: "🧠 NEXT-GEN INNOVATION HUB 2030",
      subtitle: "The world's most advanced research center for revolutionary technologies",
      link: "/pages/NextGenInnovationHub2030",
      color: "from-emerald-600 via-teal-600 to-cyan-600",
      bgColor: "from-emerald-900/90 via-teal-900/90 to-cyan-900/90"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden mb-8">
      <div className={`bg-gradient-to-r ${banners[currentBanner].bgColor} backdrop-blur-sm rounded-2xl p-8 text-white relative overflow-hidden`}>
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm animate-pulse"></div>
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-4xl animate-bounce">🚀</span>
                <h2 className={`text-3xl font-bold bg-gradient-to-r ${banners[currentBanner].color} bg-clip-text text-transparent`}>
                  {banners[currentBanner].title}
                </h2>
                <span className="text-4xl animate-bounce">🚀</span>
              </div>
              <p className="text-xl opacity-95 mb-6 max-w-4xl">
                {banners[currentBanner].subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={banners[currentBanner].link}
                  className={`inline-block bg-gradient-to-r ${banners[currentBanner].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse`}
                >
                  Explore Now →
                </a>
                <a 
                  href="/pages/ComprehensiveServices2025"
                  className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg border border-white/30"
                >
                  View All Services
                </a>
              </div>
            </div>
            
            {/* Animated Tech Icons */}
            <div className="hidden lg:flex items-center space-x-4 ml-8">
              <div className="text-6xl animate-spin" style={{animationDuration: '3s'}}>⚛️</div>
              <div className="text-6xl animate-bounce" style={{animationDelay: '0.5s'}}>🧠</div>
              <div className="text-6xl animate-pulse" style={{animationDelay: '1s'}}>🌟</div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentBanner ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2030;