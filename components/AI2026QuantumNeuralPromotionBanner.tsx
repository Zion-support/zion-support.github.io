import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2026QuantumNeuralPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "🚀 AI 2025 Ultimate Breakthrough",
      subtitle: "5000% ROI - Revolutionary Technology",
      link: "/blog/ai-2025-ultimate-breakthrough-announcement",
      bgColor: "from-red-500 to-pink-500",
      textColor: "text-white"
    },
    {
      title: "🏆 Fortune 500 Success Story",
      subtitle: "5000% ROI Case Study - Real Results",
      link: "/case-studies/ai-2025-global-enterprise-transformation-5000-roi",
      bgColor: "from-green-500 to-emerald-500",
      textColor: "text-white"
    },
    {
      title: "🔮 AI 2026 Quantum-Neural Revolution",
      subtitle: "Future Predictions - Consciousness AI",
      link: "/blog/ai-2026-quantum-neural-revolution-predictions",
      bgColor: "from-purple-500 to-indigo-500",
      textColor: "text-white"
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="relative h-16 overflow-hidden">
                <div 
                  className="absolute inset-0 flex items-center transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-1">{slide.title}</h3>
                        <p className="text-lg opacity-90">{slide.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 ml-8">
              <Link 
                href={slides[currentSlide].link}
                className={`bg-gradient-to-r ${slides[currentSlide].bgColor} px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform`}
              >
                Learn More →
              </Link>
              
              <button 
                onClick={() => setIsVisible(false)}
                className="text-white hover:text-gray-300 transition-colors duration-200 p-2"
                aria-label="Close banner"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Progress indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        <div className="absolute top-2 left-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute top-4 right-8 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-2 left-12 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default AI2026QuantumNeuralPromotionBanner;