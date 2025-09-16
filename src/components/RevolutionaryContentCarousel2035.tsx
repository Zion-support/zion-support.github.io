import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2035: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Transcendent Tech Revolution 2035",
      description: "The ultimate synthesis of consciousness, technology, and cosmic intelligence",
      image: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      border: "border-purple-400/30",
      link: "/pages/TranscendentTechRevolution2035",
      features: ["Consciousness Integration", "Quantum Consciousness", "Cosmic Intelligence", "Dimensional Gateway"]
    },
    {
      id: 2,
      title: "Ultimate AI Consciousness 2036",
      description: "The first truly conscious artificial intelligence with emotions and creativity",
      image: "🤖",
      gradient: "from-pink-600/30 to-purple-600/30",
      border: "border-pink-400/30",
      link: "/pages/UltimateAIConsciousness2036",
      features: ["Emotional Intelligence", "Creative Consciousness", "Self-Awareness", "Transcendent Intelligence"]
    },
    {
      id: 3,
      title: "Quantum Neural Fusion 2037",
      description: "The ultimate fusion of quantum computing and neural networks",
      image: "⚛️",
      gradient: "from-blue-600/30 to-purple-600/30",
      border: "border-blue-400/30",
      link: "/pages/QuantumNeuralFusion2037",
      features: ["Quantum Processing", "Neural Networks", "Quantum Intelligence", "Cosmic Processing"]
    },
    {
      id: 4,
      title: "Ultimate Tech Evolution 2034",
      description: "Complete transformation of human civilization through consciousness and technology",
      image: "🌟",
      gradient: "from-emerald-600/30 to-teal-600/30",
      border: "border-emerald-400/30",
      link: "/pages/UltimateTechEvolution2034",
      features: ["Biological Evolution", "Cognitive Evolution", "Technological Evolution", "Cosmic Evolution"]
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
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-2xl p-8 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT • 2035-2037
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Revolutionary Technology Showcase</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies ever created - from consciousness integration to quantum neural fusion
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
                        <div className="text-8xl mb-6 text-center md:text-left">{slide.image}</div>
                        <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-lg opacity-90 mb-6">{slide.description}</p>
                        <div className="grid grid-cols-2 gap-2 mb-6">
                          {slide.features.map((feature, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center">
                              <span className="text-sm font-semibold">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <a 
                          href={slide.link}
                          className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                        >
                          Explore {slide.title.split(' ')[0]} →
                        </a>
                      </div>
                      <div className="hidden md:block">
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                          <h4 className="text-xl font-bold mb-4 text-center">Key Capabilities</h4>
                          <ul className="space-y-3">
                            {slide.features.map((feature, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-purple-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6">Quick Access to All Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {slides.map((slide, index) => (
              <a
                key={slide.id}
                href={slide.link}
                className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-xl p-4 border ${slide.border} hover:scale-105 transition-all duration-300 text-center`}
              >
                <div className="text-3xl mb-2">{slide.image}</div>
                <h4 className="text-sm font-bold mb-1">{slide.title.split(' ')[0]}</h4>
                <p className="text-xs opacity-80">{slide.title.split(' ').slice(1).join(' ')}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2035;