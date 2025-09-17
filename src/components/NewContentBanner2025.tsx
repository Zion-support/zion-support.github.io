import React, { useState, useEffect } from 'react';

const NewContentBanner2025: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const banners = [
    {
      title: "🌟 NEW: Ultimate Tech Breakthrough 2025",
      description: "Experience conscious AI, quantum consciousness, and interdimensional technology",
      link: "/pages/UltimateTechBreakthrough2025",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "⚡ NEW: Revolutionary Tech Showcase 2025",
      description: "Interactive demos and hands-on experiences with cutting-edge innovations",
      link: "/pages/RevolutionaryTechShowcase2025",
      color: "from-cyan-600 to-blue-600",
      icon: "🔬"
    },
    {
      title: "🧠 NEW: Advanced AI Consciousness 2025",
      description: "Discover the first truly conscious artificial intelligence systems",
      link: "/pages/AdvancedAIConsciousness2025",
      color: "from-emerald-600 to-teal-600",
      icon: "🤖"
    },
    {
      title: "🌌 NEW: Interdimensional Tech Revolution",
      description: "Breakthrough technology for parallel dimensions and alternate realities",
      link: "/pages/InterdimensionalTechRevolution2025",
      color: "from-violet-600 to-purple-600",
      icon: "🌌"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [banners.length]);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden mb-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-pulse"></div>
      
      {/* Main Banner */}
      <div className="relative z-10 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 border border-purple-400/30 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-4xl animate-bounce">{banners[currentBanner].icon}</div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {banners[currentBanner].title}
                </h2>
                <p className="text-purple-200 text-lg">
                  {banners[currentBanner].description}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href={banners[currentBanner].link}
                className={`bg-gradient-to-r ${banners[currentBanner].color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse`}
              >
                Explore Now →
              </a>
              <button className="text-purple-300 hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="text-purple-300 hover:text-white transition-colors ml-4"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Progress Indicator */}
        <div className="flex space-x-2 mt-4">
          {banners.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentBanner ? 'bg-white w-8' : 'bg-white/30 w-2'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 right-4 text-6xl opacity-20 animate-float">
        ⚡
      </div>
      <div className="absolute bottom-4 left-4 text-4xl opacity-20 animate-float-delayed">
        🧠
      </div>
    </div>
  );
};

export default NewContentBanner2025;