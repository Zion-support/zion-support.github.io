import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bannerContent = [
    {
      id: 'breakthrough-2027',
      title: '🚀 Revolutionary Tech Breakthrough 2027',
      subtitle: 'Experience the most groundbreaking technological advances reshaping our world',
      link: '/pages/RevolutionaryTechBreakthrough2027',
      gradient: 'from-purple-600 to-pink-600',
      bgGradient: 'from-purple-900/90 to-pink-900/90'
    },
    {
      id: 'ai-consciousness',
      title: '🧠 Advanced AI Consciousness 2027',
      subtitle: 'Witness the birth of truly conscious artificial intelligence that thinks and feels',
      link: '/pages/AdvancedAIConsciousness2027',
      gradient: 'from-indigo-600 to-purple-600',
      bgGradient: 'from-indigo-900/90 to-purple-900/90'
    },
    {
      id: 'quantum-neural',
      title: '⚡ Quantum Neural Fusion 2027',
      subtitle: 'Revolutionary fusion of quantum computing and neural networks solving impossible problems',
      link: '/pages/QuantumNeuralFusion2027',
      gradient: 'from-cyan-600 to-blue-600',
      bgGradient: 'from-cyan-900/90 to-blue-900/90'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const currentBanner = bannerContent[currentSlide];

  return (
    <div className="relative overflow-hidden mb-8">
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentBanner.bgGradient} opacity-90`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <div className="px-3 py-1 bg-white/20 rounded-full text-sm font-bold text-white animate-pulse">
                  🌟 NEW CONTENT
                </div>
                <div className="px-3 py-1 bg-white/20 rounded-full text-sm font-bold text-white">
                  JANUARY 2027
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {currentBanner.title}
              </h2>
              
              <p className="text-lg text-white/90 mb-6 max-w-2xl">
                {currentBanner.subtitle}
              </p>
              
              <div className="flex items-center space-x-4">
                <a
                  href={currentBanner.link}
                  className={`bg-gradient-to-r ${currentBanner.gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg transform hover:scale-105`}
                >
                  Explore Now →
                </a>
                <a
                  href="/pages/RevolutionaryTechBreakthrough2027"
                  className="text-white/80 hover:text-white transition-colors underline"
                >
                  View All Breakthroughs
                </a>
              </div>
            </div>
            
            {/* Slide Indicators */}
            <div className="hidden md:flex flex-col space-y-2 ml-8">
              {bannerContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ width: `${((currentSlide + 1) / bannerContent.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2027;