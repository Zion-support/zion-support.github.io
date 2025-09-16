import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2028: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Revolutionary Tech Breakthrough 2028",
      description: "Experience the most advanced technological innovations that will reshape humanity's future",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechBreakthrough2028",
      features: ["Quantum Consciousness", "Interdimensional Reality", "Neural Interface"]
    },
    {
      id: 2,
      title: "Ultimate Tech Revolution 2028",
      description: "The most comprehensive technological revolution that will transform every aspect of human existence",
      image: "🚀",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/UltimateTechRevolution2028",
      features: ["Autonomous AI", "Quantum Reality", "Neural Evolution"]
    },
    {
      id: 3,
      title: "Next-Gen Innovation Hub 2028",
      description: "The world's most advanced innovation hub where cutting-edge technologies are born and perfected",
      image: "🧬",
      gradient: "from-emerald-600 to-cyan-600",
      link: "/pages/NextGenInnovationHub2028",
      features: ["AI Research Lab", "Quantum Lab", "Neural Interface Lab"]
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
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 mb-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • JANUARY 2028
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Content Showcase 2028
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the most groundbreaking technologies and innovations that will define the future
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} p-12 rounded-2xl`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6">{slide.image}</div>
                        <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                        <p className="text-xl opacity-90 mb-8">{slide.description}</p>
                        <div className="space-y-3 mb-8">
                          {slide.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <span className="text-lg">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <a 
                          href={slide.link}
                          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                        >
                          Explore Now →
                        </a>
                      </div>
                      <div className="text-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 border border-white/30">
                          <div className="text-6xl mb-4">{slide.image}</div>
                          <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
                          <p className="text-white/80 mb-6">
                            Experience this revolutionary technology through our interactive demonstration
                          </p>
                          <button className="bg-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-colors font-semibold">
                            Launch Demo
                          </button>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Quick Access to All Content</h3>
            <p className="text-xl opacity-90">Explore all our revolutionary technologies and innovations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {slides.map((slide) => (
              <a
                key={slide.id}
                href={slide.link}
                className={`bg-gradient-to-br ${slide.gradient} p-6 rounded-xl hover:scale-105 transition-all duration-300 text-center`}
              >
                <div className="text-4xl mb-4">{slide.image}</div>
                <h4 className="text-xl font-bold mb-3">{slide.title}</h4>
                <p className="text-white/80 text-sm mb-4">{slide.description}</p>
                <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                  Explore →
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2028;