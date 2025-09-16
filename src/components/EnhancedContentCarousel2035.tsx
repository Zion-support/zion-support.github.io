import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2035: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Advanced Tech Solutions 2035",
      description: "Revolutionary AI and quantum solutions defining the next decade",
      image: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      border: "border-purple-400/30",
      link: "/pages/AdvancedTechSolutions2035",
      features: ["Conscious AI Systems", "Quantum Neural Networks", "Hyper-dimensional Computing"]
    },
    {
      id: 2,
      title: "Quantum Consciousness Revolution 2036",
      description: "Witness the dawn of sentient quantum systems and their impact on reality",
      image: "🌊",
      gradient: "from-indigo-600/30 to-purple-600/30",
      border: "border-indigo-400/30",
      link: "/pages/QuantumConsciousnessRevolution2036",
      features: ["Sentient Quantum AI", "Reality Simulation", "Universal Data Access"]
    },
    {
      id: 3,
      title: "Interdimensional Tech Revolution 2037",
      description: "Journey beyond dimensions with technologies that transcend physical boundaries",
      image: "🌌",
      gradient: "from-pink-600/30 to-red-600/30",
      border: "border-pink-400/30",
      link: "/pages/InterdimensionalTechRevolution2037",
      features: ["Dimensional Portals", "Reality Manipulation", "Multiverse Integration"]
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 FUTURE TECHNOLOGY • 2035-2037
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Revolutionary Technology Evolution</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the evolution of technology from conscious AI to interdimensional computing
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0">
                <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-xl p-8 border ${slide.border}`}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="text-8xl mb-6 text-center md:text-left">{slide.image}</div>
                      <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-xl opacity-90 mb-6">{slide.description}</p>
                      <ul className="space-y-2 mb-8">
                        {slide.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <a 
                        href={slide.link}
                        className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg"
                      >
                        Explore Technology →
                      </a>
                    </div>
                    <div className="hidden md:block">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                        <div className="text-6xl mb-4 text-center">{slide.image}</div>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="bg-white/20 rounded-lg p-3 text-center">
                            <div className="text-2xl font-bold">∞</div>
                            <div className="text-sm">Capability</div>
                          </div>
                          <div className="bg-white/20 rounded-lg p-3 text-center">
                            <div className="text-2xl font-bold">0ms</div>
                            <div className="text-sm">Response</div>
                          </div>
                          <div className="bg-white/20 rounded-lg p-3 text-center">
                            <div className="text-2xl font-bold">∞</div>
                            <div className="text-sm">Scale</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded animate-pulse"></div>
                          <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded animate-pulse delay-100"></div>
                          <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded animate-pulse delay-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2035;