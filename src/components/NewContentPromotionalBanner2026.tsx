import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NewContentPromotionalBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotionalContent = [
    {
      id: 1,
      title: "🚀 New AI Automation Suite 2026",
      description: "Transform your business with 300% efficiency gains and 60% cost reduction",
      link: "/pages/NewContentShowcase2026",
      color: "from-purple-500 to-pink-500",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "⚡ Quantum Computing Breakthrough",
      description: "Solve complex optimization problems with unprecedented speed and accuracy",
      link: "/pages/NewContentShowcase2026",
      color: "from-blue-500 to-cyan-500",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "🧠 Neural Interface Technology",
      description: "Enable direct brain-computer communication for revolutionary applications",
      link: "/pages/NewContentShowcase2026",
      color: "from-green-500 to-teal-500",
      textColor: "text-white"
    },
    {
      id: 4,
      title: "🤖 Autonomous AI Systems",
      description: "Build self-managing AI systems that adapt and evolve independently",
      link: "/pages/NewContentShowcase2026",
      color: "from-orange-500 to-red-500",
      textColor: "text-white"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white shadow-2xl">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 opacity-90"></div>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-400 rounded-full opacity-20 animate-pulse delay-2000"></div>
          <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-blue-400 rounded-full opacity-20 animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-1">
                    {promotionalContent[currentSlide].title}
                  </h3>
                  <p className="text-sm md:text-base text-blue-100 mb-2">
                    {promotionalContent[currentSlide].description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <Link
                      to={promotionalContent[currentSlide].link}
                      className="inline-flex items-center px-4 py-2 bg-yellow-400 text-purple-900 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-sm"
                    >
                      Explore Now
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <span className="text-xs text-blue-200">
                      {currentSlide + 1} of {promotionalContent.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="flex-shrink-0 ml-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {promotionalContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-400 w-8' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-4 right-4 animate-bounce">
        <span className="text-2xl">🎉</span>
      </div>
      <div className="absolute bottom-4 left-4 animate-pulse">
        <span className="text-xl">🚀</span>
      </div>
    </div>
  );
};

export default NewContentPromotionalBanner2026;