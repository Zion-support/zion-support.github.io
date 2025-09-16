import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UltimatePromotionalBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const promotionalContent = [
    {
      id: 1,
      title: "🌟 NEW: Revolutionary AI Consciousness 2026",
      subtitle: "Experience the future of conscious artificial intelligence",
      description: "Breakthrough AI systems with emergent consciousness capabilities",
      link: "/pages/UltimateTechBreakthrough2026",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      id: 2,
      title: "⚡ BREAKTHROUGH: Quantum Computing Revolution",
      subtitle: "1000x faster processing with quantum algorithms",
      description: "Solve impossible problems with next-generation quantum technology",
      link: "/pages/QuantumComputingRevolution2026",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚛️"
    },
    {
      id: 3,
      title: "🚀 ULTIMATE: Interdimensional Technology 2026",
      subtitle: "Beyond reality - explore multidimensional computing",
      description: "Revolutionary technology that transcends traditional boundaries",
      link: "/pages/InterdimensionalTechRevolution2026",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🌌"
    },
    {
      id: 4,
      title: "🧬 NEURAL: Brain-Computer Interface 2026",
      subtitle: "Direct neural connection to digital systems",
      description: "Seamless integration between human consciousness and technology",
      link: "/pages/NeuralInterfaceRevolution2026",
      gradient: "from-orange-600 to-red-600",
      icon: "🧬"
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
    <div className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className={`bg-gradient-to-r ${currentContent.gradient} text-white py-6 px-4 relative`}>
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Content */}
            <div className="flex items-center space-x-4 flex-1 min-w-0">
              <div className="text-4xl animate-bounce">
                {currentContent.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    NEW 2026
                  </span>
                  <span className="text-sm opacity-90">
                    {currentSlide + 1} of {promotionalContent.length}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-1 truncate">
                  {currentContent.title}
                </h3>
                <p className="text-sm md:text-base opacity-90 truncate">
                  {currentContent.description}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <Link
                to={currentContent.link}
                className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Explore Now →
              </Link>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % promotionalContent.length)}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div 
            className="h-full bg-white/60 transition-all duration-500 ease-out"
            style={{ width: `${((currentSlide + 1) / promotionalContent.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-2 right-4 flex space-x-2">
        {promotionalContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default UltimatePromotionalBanner2026;