import React, { useState, useEffect } from 'react';

const UltimateContentBanner2035: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const banners = [
    {
      title: "🌟 ULTIMATE TECH BREAKTHROUGH 2035",
      subtitle: "Experience the most revolutionary technological advances that will reshape our world",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"],
      link: "/pages/UltimateTechBreakthrough2035",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "⚡ REVOLUTIONARY TECH SHOWCASE 2035",
      subtitle: "Interactive showcase of cutting-edge technologies that will define the future",
      features: ["Interactive Demos", "Real-time Processing", "Multi-dimensional Tech"],
      link: "/pages/RevolutionaryTechShowcase2035",
      color: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      title: "🌌 NEXT-GEN INNOVATION HUB 2035",
      subtitle: "Discover and explore the most revolutionary technologies shaping humanity's future",
      features: ["50+ Active Innovations", "99.9% Success Rate", "Infinite Possibilities"],
      link: "/pages/NextGenInnovationHub2035",
      color: "from-emerald-600 to-teal-600",
      icon: "🌌"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const currentBannerData = banners[currentBanner];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Banner Content */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2035
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {currentBannerData.icon} {currentBannerData.title}
            </h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto text-white mb-8">
              {currentBannerData.subtitle}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {currentBannerData.features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white font-semibold">{feature}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href={currentBannerData.link}
              className={`bg-gradient-to-r ${currentBannerData.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
            >
              Explore {currentBannerData.title.split(' ')[0]} →
            </a>
            <a
              href="/pages/RevolutionaryTechShowcase2035"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg"
            >
              View All Technologies
            </a>
            <a
              href="/pages/NextGenInnovationHub2035"
              className="bg-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-lg"
            >
              Enter Innovation Hub
            </a>
          </div>

          {/* Banner Indicators */}
          <div className="flex justify-center space-x-2">
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
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce">
        🚀
      </div>
      <div className="absolute top-20 right-20 text-4xl opacity-20 animate-pulse">
        ⚡
      </div>
      <div className="absolute bottom-10 left-20 text-5xl opacity-20 animate-bounce delay-1000">
        🌌
      </div>
      <div className="absolute bottom-20 right-10 text-3xl opacity-20 animate-pulse delay-500">
        🧠
      </div>
    </div>
  );
};

export default UltimateContentBanner2035;