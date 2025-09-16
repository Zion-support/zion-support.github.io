import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const banners = [
    {
      id: 1,
      title: "🚀 NEW: Next-Gen Tech Revolution 2025",
      subtitle: "Experience the most revolutionary technological advances",
      description: "Discover AI Consciousness, Quantum Computing, and Interdimensional Computing",
      link: "/pages/NextGenTechRevolution2025",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900 to-pink-900"
    },
    {
      id: 2,
      title: "🌟 NEW: Ultimate Tech Breakthrough 2027",
      subtitle: "The most advanced technological innovations ever created",
      description: "Conscious AI Systems, Quantum Consciousness, and Cosmic Computing",
      link: "/pages/UltimateTechBreakthrough2027",
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-900 to-purple-900"
    },
    {
      id: 3,
      title: "🤖 NEW: Revolutionary AI Solutions",
      subtitle: "Cutting-edge artificial intelligence transforming industries",
      description: "Autonomous Systems, Machine Learning, and Predictive Analytics",
      link: "/pages/AIRevolution2025",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900 to-blue-900"
    },
    {
      id: 4,
      title: "⚡ NEW: Quantum Computing Revolution",
      subtitle: "Revolutionary quantum technology solving impossible problems",
      description: "Quantum Processing, Cryptography, and Molecular Simulation",
      link: "/pages/QuantumComputingBreakthrough",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900 to-teal-900"
    }
  ];

  const currentBannerData = banners[currentBanner];

  return (
    <div className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentBannerData.bgGradient} transition-all duration-1000`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-white/10 to-transparent"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/25 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/15 rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {currentBannerData.title}
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-white/90 mb-6 font-semibold">
            {currentBannerData.subtitle}
          </h2>
          
          <p className="text-xl text-white/80 mb-8 max-w-4xl mx-auto">
            {currentBannerData.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href={currentBannerData.link}
              className={`bg-gradient-to-r ${currentBannerData.gradient} text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg transform hover:scale-105`}
            >
              Explore Technology →
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              Watch Demo
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentBanner 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;