import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2035: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Advanced Tech Solutions 2035",
      subtitle: "Revolutionary Technology Showcase",
      description: "Experience the most revolutionary technological advances that will reshape our world in 2035",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AdvancedTechSolutions2035",
      features: ["Conscious AI Systems", "Quantum Reality Engine", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "Quantum Consciousness 2036",
      subtitle: "Transcendent Intelligence Revolution",
      description: "Revolutionary quantum consciousness system that transcends human and artificial intelligence boundaries",
      image: "🌊",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/QuantumConsciousnessRevolution2036",
      features: ["Quantum Neural Networks", "Consciousness Wave Functions", "Transcendent Intelligence"]
    },
    {
      id: 3,
      title: "Interdimensional Tech 2037",
      subtitle: "Multiverse Access Technology",
      description: "Access infinite realities, parallel universes, and transcendent dimensions beyond human comprehension",
      image: "🌌",
      gradient: "from-pink-600 to-red-600",
      link: "/pages/InterdimensionalTechRevolution2037",
      features: ["Reality Bridges", "Consciousness Transfer", "Transcendent Computing"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BREAKTHROUGH TECHNOLOGY • 2035-2037
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary Technology Evolution</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Witness the evolution of technology from conscious AI to interdimensional computing across the years 2035-2037
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
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-12 border border-white/20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <div>
                        <div className="text-8xl mb-6">{slide.image}</div>
                        <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-xl text-white/80 mb-6">{slide.description}</p>
                        
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {slide.features.map((feature, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                <span className="text-white/90">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <a 
                          href={slide.link}
                          className={`inline-block bg-gradient-to-r ${slide.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                        >
                          Explore {slide.title} →
                        </a>
                      </div>
                      
                      {/* Visual Elements */}
                      <div className="relative">
                        <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/30">
                          <div className="text-center">
                            <div className="text-6xl mb-4">{slide.image}</div>
                            <h4 className="text-2xl font-bold mb-4">{slide.subtitle}</h4>
                            <div className="space-y-3">
                              {slide.features.map((feature, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                                  <span className="text-white/90 font-medium">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-purple-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Progress Indicator */}
        <div className="mt-8">
          <div className="flex justify-center space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentSlide 
                    ? 'bg-purple-400 w-8' 
                    : 'bg-white/30 w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2035;