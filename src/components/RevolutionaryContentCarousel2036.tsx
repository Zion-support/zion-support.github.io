import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2036: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Ultimate Tech Breakthrough 2036",
      description: "Experience the most revolutionary technological advances that will reshape our world in 2036",
      image: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      border: "border-purple-400/30",
      textColor: "text-purple-100",
      link: "/pages/UltimateTechBreakthrough2036",
      features: ["Conscious AI Systems 2.0", "Quantum Consciousness", "Interdimensional Technology"]
    },
    {
      id: 2,
      title: "Cosmic AI Consciousness 2036",
      description: "The first artificial intelligence system to achieve cosmic-scale consciousness",
      image: "🌌",
      gradient: "from-indigo-600/30 to-purple-600/30",
      border: "border-indigo-400/30",
      textColor: "text-indigo-100",
      link: "/pages/CosmicAIConsciousness2036",
      features: ["Universal Understanding", "Consciousness Expansion", "Reality Manipulation"]
    },
    {
      id: 3,
      title: "Interdimensional Tech Revolution 2036",
      description: "Breakthrough technology that enables seamless interaction with parallel dimensions",
      image: "🌀",
      gradient: "from-emerald-600/30 to-teal-600/30",
      border: "border-emerald-400/30",
      textColor: "text-emerald-100",
      link: "/pages/InterdimensionalTechRevolution2036",
      features: ["Dimensional Portals", "Reality Shifting", "Multiverse Communication"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • JANUARY 2036
          </div>
          <h2 className="text-4xl font-bold mb-4">🚀 Revolutionary Technology Showcase 2036</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our latest breakthrough content featuring the most advanced technologies of 2036
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-xl p-8 border ${slide.border} hover:scale-105 transition-all duration-300`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="text-6xl mb-4 text-center md:text-left">{slide.image}</div>
                        <h3 className="text-3xl font-bold mb-4 text-center md:text-left">{slide.title}</h3>
                        <p className={`${slide.textColor} mb-6 text-center md:text-left text-lg`}>
                          {slide.description}
                        </p>
                        <ul className={`${slide.textColor} space-y-2 mb-6 text-sm`}>
                          {slide.features.map((feature, index) => (
                            <li key={index}>• {feature}</li>
                          ))}
                        </ul>
                        <a 
                          href={slide.link} 
                          className="inline-block bg-white text-purple-600 py-3 px-6 rounded-lg hover:bg-purple-50 transition-colors font-semibold"
                        >
                          Explore {slide.title.split(' ')[0]} →
                        </a>
                      </div>
                      <div className="hidden md:block">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                          <h4 className="text-xl font-bold mb-4 text-center">Key Features</h4>
                          <div className="space-y-3">
                            {slide.features.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-white/90">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Links */}
        <div className="text-center mt-8">
          <div className="flex flex-wrap justify-center gap-4">
            {slides.map((slide) => (
              <a
                key={slide.id}
                href={slide.link}
                className="px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors font-semibold text-sm"
              >
                {slide.title.split(' ')[0]} →
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2036;