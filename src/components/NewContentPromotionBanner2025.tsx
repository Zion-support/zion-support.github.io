import React, { useState, useEffect } from 'react';

const NewContentPromotionBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotions = [
    {
      id: 1,
      title: "🚀 NEW: Revolutionary Tech Breakthrough 2025",
      description: "Experience the most advanced conscious AI, quantum computing, and interdimensional technology",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      color: "from-purple-600 to-pink-600",
      badge: "BREAKTHROUGH"
    },
    {
      id: 2,
      title: "🧠 NEW: Interactive Tech Showcase 2025",
      description: "Try our interactive demonstrations of conscious AI, quantum computing, and neural interfaces",
      link: "/pages/InteractiveTechShowcase2025",
      color: "from-cyan-600 to-blue-600",
      badge: "INTERACTIVE"
    },
    {
      id: 3,
      title: "⚡ NEW: Ultimate AI Solutions 2025",
      description: "Discover comprehensive AI solutions that transform businesses and accelerate innovation",
      link: "/pages/UltimateAISolutions2025",
      color: "from-emerald-600 to-teal-600",
      badge: "COMPREHENSIVE"
    },
    {
      id: 4,
      title: "🌌 NEW: Quantum Reality Engine 2025",
      description: "Explore quantum computing that simulates reality and enables interdimensional processing",
      link: "/pages/QuantumRealityEngine2025",
      color: "from-violet-600 to-purple-600",
      badge: "QUANTUM"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-500/10 to-purple-500/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Main Content */}
            <div className="flex-1 flex items-center space-x-6">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="Close banner"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Promotion Content */}
              <div className="flex-1">
                <div className="flex items-center space-x-4">
                  {/* Badge */}
                  <span className={`px-3 py-1 bg-gradient-to-r ${promotions[currentSlide].color} rounded-full text-xs font-bold animate-pulse`}>
                    {promotions[currentSlide].badge}
                  </span>
                  
                  {/* Title and Description */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">
                      {promotions[currentSlide].title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {promotions[currentSlide].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                <a
                  href={promotions[currentSlide].link}
                  className={`px-6 py-2 bg-gradient-to-r ${promotions[currentSlide].color} rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm`}
                >
                  Explore Now →
                </a>
                <button className="text-gray-400 hover:text-white transition-colors text-sm">
                  Learn More
                </button>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex space-x-2 ml-6">
              {promotions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 animate-pulse"></div>
    </div>
  );
};

export default NewContentPromotionBanner2025;