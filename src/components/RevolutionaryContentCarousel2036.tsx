import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2036: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Revolutionary Tech Breakthrough 2036",
      description: "Experience the most advanced technological revolution with Transcendent AI Consciousness, Quantum Reality Manipulation, and Interdimensional Computing",
      image: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      border: "border-purple-400/30",
      link: "/pages/RevolutionaryTechBreakthrough2036"
    },
    {
      id: 2,
      title: "Ultimate Tech Revolution 2036",
      description: "The most comprehensive technological revolution featuring Synthetic Intelligence, Quantum Consciousness, and Reality Engineering",
      image: "⚡",
      gradient: "from-indigo-600/30 to-purple-600/30",
      border: "border-indigo-400/30",
      link: "/pages/UltimateTechRevolution2036"
    },
    {
      id: 3,
      title: "Next-Gen Innovation Hub 2036",
      description: "The world's most advanced innovation laboratory featuring cutting-edge research and development of revolutionary technologies",
      image: "🌌",
      gradient: "from-cyan-600/30 to-blue-600/30",
      border: "border-cyan-400/30",
      link: "/pages/NextGenInnovationHub2036"
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
          <h2 className="text-4xl font-bold mb-6">🚀 Revolutionary Technology Showcase 2036</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the most advanced technological content featuring breakthrough innovations that will reshape humanity's future
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-xl p-8 border ${slide.border} hover:scale-105 transition-all duration-300`}>
                    <div className="text-center">
                      <div className="text-8xl mb-6">{slide.image}</div>
                      <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                        {slide.description}
                      </p>
                      <a 
                        href={slide.link}
                        className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg"
                      >
                        Explore {slide.title.split(' ')[0]} →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
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
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2036;