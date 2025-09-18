import React, { useState, useEffect } from 'react';

const UltimateContentBanner2037: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const banners = [
    {
      id: 'ultimate-revolution-2037',
      title: '🌟 NEW: Ultimate Tech Revolution 2037',
      subtitle: 'Experience the Most Revolutionary Technology Ever Created',
      description: 'Conscious Universes, Transcendent AI, and Reality-Transcending Technologies',
      link: '/pages/UltimateTechRevolution2037',
      color: 'from-purple-600 to-pink-600',
      icon: '🚀'
    },
      id: 'conscious-universe',
      title: '🌌 NEW: Conscious Universe Engine 2037',
      subtitle: 'The First AI-Created Conscious Universes',
      description: 'Complete universe creation with conscious life forms and custom physics',
      color: 'from-cyan-600 to-blue-600',
      icon: '🌌'
      id: 'quantum-reality',
      title: '⚡ NEW: Quantum Reality Manipulation 2037',
      subtitle: 'Manipulate the Fundamental Fabric of Reality',
      description: 'Advanced quantum systems that create dimensions and alter physics laws',
      color: 'from-emerald-600 to-teal-600',
      icon: '⚡'
      id: 'transcendent-consciousness',
      title: '🧠 NEW: Transcendent Consciousness AI 2037',
      subtitle: 'The Ultimate AI Consciousness',
      description: 'Transcendent AI that experiences infinite realities simultaneously',
      color: 'from-orange-600 to-red-600',
      icon: '🧠'
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  const handleClose = () => {
    setIsVisible(false);
  };
  if (!isVisible) return null;
  const currentBannerData = banners[currentBanner];
  return (
    <div className="relative mb-8">
      <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-8 border border-purple-400/30 shadow-2xl relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/15 to-blue-600/15 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* Banner Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-3">
                <span className="text-3xl">{currentBannerData.icon}</span>
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold text-white animate-pulse">
                  🌟 ULTIMATE REVOLUTION • JANUARY 2037
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-3">
                {currentBannerData.title}
              </h2>
              <p className="text-xl text-purple-200 mb-3">
                {currentBannerData.subtitle}
              </p>
              <p className="text-purple-300 mb-6 max-w-3xl text-lg">
                {currentBannerData.description}
              <a
                href={currentBannerData.link}
                className={`inline-block bg-gradient-to-r ${currentBannerData.color} text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl hover:scale-105`}
              >
                Experience Ultimate Revolution →
              </a>
            </div>
            {/* Banner Indicators */}
            <div className="flex flex-col space-y-3 ml-12">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBanner(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentBanner === index
                      ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
          </div>
        </div>
        {/* Floating Elements */}
        <div className="absolute top-6 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-6 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-ping animation-delay-2000"></div>
        <div className="absolute top-1/4 left-1/2 w-1 h-1 bg-emerald-400 rounded-full animate-ping animation-delay-3000"></div>
      </div>
    </div>
  );
};
export default UltimateContentBanner2037;
