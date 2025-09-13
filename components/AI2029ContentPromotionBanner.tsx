import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2029ContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotionalContent = [
    {
      title: "AI 2029 Breakthrough Showcase",
      subtitle: "Revolutionary Technologies with 8000% ROI",
      link: "/ai-2029-breakthrough-showcase",
      color: "from-purple-600 to-pink-600",
      icon: "🚀",
      badge: "REVOLUTIONARY"
    },
    {
      title: "AI 2030 Future Predictions",
      subtitle: "Discover the Future of AI Technology",
      link: "/blog/ai-2030-future-predictions",
      color: "from-blue-600 to-cyan-600",
      icon: "🔮",
      badge: "BREAKTHROUGH"
    },
    {
      title: "10,000% ROI Success Story",
      subtitle: "Fortune 500 Enterprise Transformation",
      link: "/case-studies/ai-2030-enterprise-transformation-breakthrough",
      color: "from-green-600 to-teal-600",
      icon: "💰",
      badge: "SUCCESS"
    },
    {
      title: "Quantum-AI Fusion Revolution",
      subtitle: "8000% ROI Through Quantum Computing",
      link: "/blog/ai-2029-quantum-ai-fusion-revolution",
      color: "from-indigo-600 to-purple-600",
      icon: "⚛️",
      badge: "QUANTUM"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const currentContent = promotionalContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 animate-pulse"></div>
      
      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors"
        aria-label="Close banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              <div className="text-4xl animate-bounce">
                {currentContent.icon}
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-1">
                  <span className={`px-3 py-1 bg-gradient-to-r ${currentContent.color} text-white text-xs font-bold rounded-full animate-pulse`}>
                    {currentContent.badge}
                  </span>
                  <span className="text-sm text-gray-300">NEW CONTENT</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {currentContent.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {currentContent.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href={currentContent.link}
              className={`bg-gradient-to-r ${currentContent.color} text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}
            >
              Explore Now
            </Link>
            <Link
              href="/ai-2029-breakthrough-showcase"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              View All Content →
            </Link>
          </div>

          {/* Slide indicators */}
          <div className="flex space-x-2 ml-6">
            {promotionalContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse"></div>
    </div>
  );
};

export default AI2029ContentPromotionBanner;