import React, { useState, useEffect } from 'react';

const InteractiveTechCarousel2030: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 'ultimate-tech-2030',
      title: 'Ultimate Tech Revolution 2030',
      description: 'Experience the convergence of AI consciousness, quantum reality, and interdimensional computing',
      image: '🚀',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/UltimateTechRevolution2030',
      features: ['AI Consciousness', 'Quantum Reality', 'Interdimensional Computing']
    },
    {
      id: 'consciousness-2035',
      title: 'Consciousness Computing Revolution 2035',
      description: 'The ultimate fusion of human consciousness and artificial intelligence',
      image: '🧠',
      gradient: 'from-indigo-600 to-purple-600',
      link: '/pages/ConsciousnessComputingRevolution2035',
      features: ['Neural Interface', 'AI Merger', 'Collective Consciousness']
    },
    {
      id: 'interdimensional-2040',
      title: 'Interdimensional Tech Revolution 2040',
      description: 'Break through the barriers of reality with multiverse technology',
      image: '🌌',
      gradient: 'from-purple-600 to-cyan-600',
      link: '/pages/InterdimensionalTechRevolution2040',
      features: ['Dimensional Gateway', 'Reality Manipulation', 'Universal Computing']
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

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
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm"></div>
      
      {/* Header */}
      <div className="relative z-10 text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          🌟 Interactive Tech Showcase 2030-2040
        </h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Explore our revolutionary technologies through an interactive experience
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative z-10">
        <div className="relative overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={slide.id} className="w-full flex-shrink-0">
                <div className={`bg-gradient-to-br ${slide.gradient} rounded-xl p-8 min-h-[400px] flex items-center`}>
                  <div className="grid md:grid-cols-2 gap-8 w-full">
                    {/* Content */}
                    <div className="flex flex-col justify-center">
                      <div className="text-6xl mb-4">{slide.image}</div>
                      <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-lg opacity-90 mb-6">{slide.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {slide.features.map((feature, idx) => (
                            <span key={idx} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <a 
                        href={slide.link}
                        className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                      >
                        Explore Now →
                      </a>
                    </div>
                    
                    {/* Visual Element */}
                    <div className="flex items-center justify-center">
                      <div className="text-9xl opacity-20 animate-pulse">
                        {slide.image}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-6">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-all duration-300"
            >
              →
            </button>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-gray-600 hover:bg-gray-700'
              }`}
            >
              {isAutoPlaying ? '⏸️' : '▶️'}
            </button>
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="relative z-10 mt-8 grid md:grid-cols-3 gap-4">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`bg-gradient-to-r ${slide.gradient} rounded-lg p-4 cursor-pointer transition-all duration-300 hover:scale-105 ${
              currentSlide === index ? 'ring-2 ring-white' : ''
            }`}
            onClick={() => goToSlide(index)}
          >
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{slide.image}</div>
              <div>
                <h4 className="font-semibold text-sm">{slide.title}</h4>
                <p className="text-xs opacity-90">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTechCarousel2030;