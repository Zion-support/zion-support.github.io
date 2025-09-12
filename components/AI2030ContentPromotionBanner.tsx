import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2030ContentPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotionalContent = [
    {
      id: 'ai-2030-quantum',
      title: 'AI 2030: Quantum Computing Revolution',
      subtitle: '10,000x Processing Power Breakthrough',
      description: 'Discover how quantum AI will transform every industry',
      cta: 'Explore Quantum AI',
      link: '/blog/ai-2030-quantum-computing-revolution',
      color: 'from-purple-600 to-blue-600',
      icon: '⚛️'
    },
    {
      id: 'ai-2030-space',
      title: 'AI-Powered Space Exploration',
      subtitle: '15,000% ROI Space Mining Success',
      description: 'Revolutionary space colonization with AI automation',
      cta: 'View Space Case Study',
      link: '/case-studies/ai-2030-space-mining-breakthrough',
      color: 'from-indigo-600 to-purple-600',
      icon: '🚀'
    },
    {
      id: 'ai-2030-neural',
      title: 'Neural Interface Integration',
      subtitle: 'Direct Brain-Computer Connection',
      description: 'The future of human-AI interaction is here',
      cta: 'Learn About Neural AI',
      link: '/blog/ai-2030-neural-interface-breakthrough',
      color: 'from-pink-600 to-red-600',
      icon: '🧠'
    },
    {
      id: 'ai-2030-climate',
      title: 'AI Climate Solutions',
      subtitle: '18,000% ROI Environmental Restoration',
      description: 'Save our planet with AI-powered climate technology',
      cta: 'Explore Climate AI',
      link: '/resources/ai-2030-climate-solutions-guide',
      color: 'from-green-600 to-teal-600',
      icon: '🌍'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentContent = promotionalContent[currentSlide];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-500 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className={`bg-gradient-to-r ${currentContent.color} text-white shadow-2xl`}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left side - Content */}
            <div className="flex items-center space-x-4 flex-1">
              <div className="text-3xl animate-pulse">
                {currentContent.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                    BREAKTHROUGH 2030
                  </span>
                  <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                    NEW
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {currentContent.title}
                </h3>
                <p className="text-sm text-gray-200">
                  {currentContent.subtitle} • {currentContent.description}
                </p>
              </div>
            </div>

            {/* Right side - CTA and Close */}
            <div className="flex items-center space-x-4">
              <Link
                href={currentContent.link}
                className="bg-white text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                {currentContent.cta}
              </Link>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white hover:text-gray-300 transition-colors duration-300 p-1"
                aria-label="Close banner"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center space-x-2 mt-2">
            {promotionalContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2030ContentPromotionBanner;