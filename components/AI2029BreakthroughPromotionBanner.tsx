import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AI2029BreakthroughPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "🚀 AI 2029 Singularity Breakthrough",
      subtitle: "The Future of Human-AI Integration",
      description: "Discover revolutionary breakthrough predictions including quantum-AI fusion and 10,000% ROI opportunities",
      cta: "Explore Singularity",
      link: "/blog/ai-2029-singularity-breakthrough",
      bgColor: "from-purple-600 to-pink-600"
    },
    {
      title: "🌌 Space Exploration Success",
      subtitle: "5000% ROI Achievement",
      description: "How quantum-AI fusion revolutionized space missions with 99.8% success rates",
      cta: "View Case Study",
      link: "/case-studies/ai-2029-space-exploration-breakthrough",
      bgColor: "from-blue-600 to-purple-600"
    },
    {
      title: "📚 Implementation Master Guide",
      subtitle: "Complete Roadmap to Success",
      description: "Master the complete implementation roadmap for AI 2029 breakthrough technologies",
      cta: "Get Master Guide",
      link: "/resources/ai-2029-implementation-master-guide",
      bgColor: "from-green-600 to-teal-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  if (!isVisible) return null;

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 opacity-90"></div>
      <div className="relative z-10">
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-4 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between flex-wrap gap-4">
              {/* Animated Badge */}
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2 animate-pulse">
                  <span className="text-2xl">🚀</span>
                  <span className="font-bold text-sm">REVOLUTIONARY BREAKTHROUGH</span>
                </div>
                <div className="hidden md:block bg-green-500 rounded-full px-3 py-1 text-xs font-bold animate-bounce">
                  NEW 2029
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 text-center min-w-0">
                <div className="flex items-center justify-center space-x-4 flex-wrap">
                  <h2 className="text-lg md:text-xl font-bold truncate">
                    {currentSlideData.title}
                  </h2>
                  <div className="hidden sm:block text-sm opacity-90">
                    {currentSlideData.subtitle}
                  </div>
                </div>
                <p className="text-sm opacity-80 mt-1 hidden lg:block">
                  {currentSlideData.description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center space-x-3">
                <Link
                  to={currentSlideData.link}
                  className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  {currentSlideData.cta}
                </Link>
                <Link
                  to="/ai-2029-breakthrough-showcase"
                  className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-white/30 transition-colors whitespace-nowrap border border-white/30"
                >
                  View All
                </Link>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Close banner"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center space-x-2 py-2 bg-black/20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-2 left-4 text-white/60 animate-bounce">
        <span className="text-2xl">⚛️</span>
      </div>
      <div className="absolute top-2 right-4 text-white/60 animate-pulse">
        <span className="text-2xl">🧠</span>
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white/40 animate-ping">
        <span className="text-lg">🌌</span>
      </div>
    </div>
  );
};

export default AI2029BreakthroughPromotionBanner;