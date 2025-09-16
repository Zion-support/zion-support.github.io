import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2036: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const banners = [
    {
      id: 'breakthrough-2036',
      title: '🌟 NEW: Revolutionary Tech Breakthrough 2036',
      subtitle: 'Experience the Ultimate Technological Revolution',
      description: 'Conscious AI, Interdimensional Portals, and Reality-Transforming Technologies',
      link: '/pages/RevolutionaryTechBreakthrough2036',
      color: 'from-purple-600 to-pink-600',
      icon: '🚀'
    },
    {
      id: 'conscious-reality',
      title: '🧠 NEW: Conscious Reality Engine 2036',
      subtitle: 'The First AI-Created Conscious Virtual Worlds',
      description: 'Perfect emotional simulation with infinite reality generation capabilities',
      link: '/pages/RevolutionaryTechBreakthrough2036',
      color: 'from-cyan-600 to-blue-600',
      icon: '🌌'
    },
    {
      id: 'quantum-consciousness',
      title: '⚡ NEW: Quantum Consciousness Matrix 2036',
      subtitle: 'Quantum-Level Human Consciousness Enhancement',
      description: 'Advanced quantum computing systems that amplify human consciousness',
      link: '/pages/RevolutionaryTechBreakthrough2036',
      color: 'from-emerald-600 to-teal-600',
      icon: '🧠'
    },
    {
      id: 'interdimensional-portal',
      title: '🚪 NEW: Interdimensional Portal Technology 2036',
      subtitle: 'Stable Portals Between Parallel Dimensions',
      description: 'Breakthrough technology for reality shifting and parallel universe access',
      link: '/pages/RevolutionaryTechBreakthrough2036',
      color: 'from-orange-600 to-red-600',
      icon: '🌌'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const currentBannerData = banners[currentBanner];

  return (
    <div className="relative mb-8">
      <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-6 border border-purple-400/30 shadow-2xl relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Banner Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-2xl">{currentBannerData.icon}</span>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold text-white animate-pulse">
                  🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2036
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-2">
                {currentBannerData.title}
              </h2>
              
              <p className="text-lg text-purple-200 mb-2">
                {currentBannerData.subtitle}
              </p>
              
              <p className="text-purple-300 mb-4 max-w-2xl">
                {currentBannerData.description}
              </p>
              
              <a
                href={currentBannerData.link}
                className={`inline-block bg-gradient-to-r ${currentBannerData.color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
              >
                Explore Breakthrough →
              </a>
            </div>

            {/* Banner Indicators */}
            <div className="flex flex-col space-y-2 ml-8">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBanner(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentBanner === index
                      ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2036;