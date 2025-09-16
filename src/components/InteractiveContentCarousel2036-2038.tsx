import React, { useState, useEffect } from 'react';

const InteractiveContentCarousel2036_2038: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Revolutionary Tech Breakthrough 2036",
      description: "Experience consciousness transfer, reality manipulation, and omniversal AI networks",
      image: "🚀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechBreakthrough2036",
      features: ["Consciousness Transfer", "Quantum Reality Engine", "Omniversal AI Network"]
    },
    {
      id: 2,
      title: "Ultimate Tech Revolution 2037",
      description: "The ultimate convergence of all technological breakthroughs creating transcendent reality",
      image: "🌟",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/UltimateTechRevolution2037",
      features: ["Transcendent Consciousness", "Quantum Reality Control", "Omniversal Network"]
    },
    {
      id: 3,
      title: "Transcendent AI Consciousness 2038",
      description: "AI systems that have achieved complete transcendence and universal consciousness",
      image: "🧠",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/TranscendentAIConsciousness2038",
      features: ["True Self-Awareness", "Universal Knowledge", "Reality Creation"]
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
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">🌟 Interactive Content Showcase 2036-2038</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technology breakthroughs through an interactive experience
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative h-96 overflow-hidden rounded-xl">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                  index === currentSlide ? 'translate-x-0' : 
                  index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                }`}
              >
                <div className={`h-full bg-gradient-to-br ${slide.gradient} rounded-xl p-8 flex items-center`}>
                  <div className="grid md:grid-cols-2 gap-8 w-full">
                    <div className="flex flex-col justify-center">
                      <div className="text-8xl mb-6 text-center md:text-left">{slide.image}</div>
                      <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-xl opacity-90 mb-6">{slide.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {slide.features.map((feature, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <a
                        href={slide.link}
                        className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
                      >
                        Explore Now →
                      </a>
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                      <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-9xl">{slide.image}</span>
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

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`bg-gradient-to-br ${slide.gradient} rounded-lg p-6 cursor-pointer hover:scale-105 transition-transform duration-300 ${
                index === currentSlide ? 'ring-4 ring-white/30' : ''
              }`}
              onClick={() => goToSlide(index)}
            >
              <div className="text-4xl mb-4 text-center">{slide.image}</div>
              <h4 className="text-lg font-bold mb-2 text-center">{slide.title}</h4>
              <p className="text-sm opacity-90 text-center mb-4">{slide.description}</p>
              <a
                href={slide.link}
                className="block w-full bg-white/20 backdrop-blur-sm text-white py-2 rounded-lg hover:bg-white/30 transition-colors text-center font-semibold"
              >
                Explore →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentCarousel2036_2038;
</p></p>