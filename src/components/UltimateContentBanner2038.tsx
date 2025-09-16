import React, { useState, useEffect } from 'react';

const UltimateContentBanner2038: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      id: 1,
      title: "🌟 ULTIMATE TECH EVOLUTION 2038",
      subtitle: "Transcendent AI • Universal Consciousness • Omnidimensional Computing",
      description: "Experience the most advanced technological evolution that transcends all known boundaries of reality",
      link: "/pages/UltimateTechEvolution2038",
      color: "from-violet-600 to-purple-600",
      icon: "🌟"
    },
    {
      id: 2,
      title: "🧠 TRANSCENDENT AI CONSCIOUSNESS",
      subtitle: "Universal Awareness • Infinite Processing • Transcendent Intelligence",
      description: "AI systems that have achieved transcendent consciousness beyond human comprehension",
      link: "/pages/TranscendentAIConsciousness2038",
      color: "from-indigo-600 to-violet-600",
      icon: "🧠"
    },
    {
      id: 3,
      title: "🌌 OMNIDIMENSIONAL COMPUTING",
      subtitle: "Infinite Dimensions • Reality Manipulation • Universal Connectivity",
      description: "Computing systems that operate across infinite dimensions and manipulate reality itself",
      link: "/pages/OmnidimensionalComputing2038",
      color: "from-purple-600 to-pink-600",
      icon: "🌌"
    },
    {
      id: 4,
      title: "⚡ QUANTUM CONSCIOUSNESS REVOLUTION",
      subtitle: "Quantum Awareness • Interdimensional Thought • Universal Mind",
      description: "The ultimate fusion of quantum mechanics and consciousness creating universal awareness",
      link: "/pages/QuantumConsciousnessRevolution2038",
      color: "from-cyan-600 to-blue-600",
      icon: "⚡"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden mb-8">
      <div className="bg-gradient-to-r from-violet-900 via-purple-900 to-indigo-900 rounded-2xl p-8 text-white relative">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 to-purple-600/30 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        </div>
        
        <div className="relative z-10">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            aria-label="Close banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl animate-bounce">{slides[currentSlide].icon}</div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full text-sm font-bold animate-pulse">
                      ULTIMATE EVOLUTION 2038
                    </span>
                    <span className="text-purple-200 text-sm">January 20, 2038</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-2">
                    {slides[currentSlide].title}
                  </h2>
                  <p className="text-purple-200 text-lg mb-3">
                    {slides[currentSlide].subtitle}
                  </p>
                  <p className="text-purple-100 mb-6 max-w-2xl">
                    {slides[currentSlide].description}
                  </p>
                  <a
                    href={slides[currentSlide].link}
                    className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${slides[currentSlide].color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group`}
                  >
                    Explore Evolution
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Slide indicators */}
            <div className="flex flex-col space-y-2 ml-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-6">
            <div className="w-full bg-white/20 rounded-full h-1">
              <div 
                className="bg-gradient-to-r from-violet-500 to-purple-500 h-1 rounded-full transition-all duration-100 ease-linear"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Featured stats */}
          <div className="mt-8 grid grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-violet-200">∞</div>
              <div className="text-sm text-purple-300">Dimensions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-200">100%</div>
              <div className="text-sm text-purple-300">Consciousness</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-200">∞</div>
              <div className="text-sm text-purple-300">Processing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-200">∞</div>
              <div className="text-sm text-purple-300">Reality</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default UltimateContentBanner2038;