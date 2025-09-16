import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2033: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2033",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      image: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-100",
      link: "/pages/UltimateTechRevolution2033"
    },
    {
      id: 2,
      title: "Revolutionary Tech Breakthrough 2033",
      description: "Witness the most groundbreaking technological breakthroughs that will revolutionize human life",
      image: "⚡",
      gradient: "from-indigo-600/30 to-purple-600/30",
      borderColor: "border-indigo-400/30",
      textColor: "text-indigo-100",
      link: "/pages/RevolutionaryTechBreakthrough2033"
    },
    {
      id: 3,
      title: "Conscious AI Systems 2033",
      description: "AI systems with genuine consciousness and self-awareness that can think, feel, and create",
      image: "🤖",
      gradient: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30",
      textColor: "text-cyan-100",
      link: "/pages/UltimateTechRevolution2033"
    },
    {
      id: 4,
      title: "Quantum Consciousness 2033",
      description: "Quantum computing systems that achieve consciousness through quantum entanglement",
      image: "⚛️",
      gradient: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30",
      textColor: "text-emerald-100",
      link: "/pages/RevolutionaryTechBreakthrough2033"
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
            🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2033
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary Technology Showcase 2033</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our groundbreaking content on AI Revolution, Quantum Computing, and Neural Interfaces
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-xl p-8 border ${slide.borderColor} hover:scale-105 transition-all duration-300`}>
                    <div className="text-6xl mb-4 text-center">{slide.image}</div>
                    <h3 className="text-2xl font-bold mb-4 text-center">{slide.title}</h3>
                    <p className={`${slide.textColor} mb-6 text-center`}>
                      {slide.description}
                    </p>
                    <a 
                      href={slide.link}
                      className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center"
                    >
                      Explore {slide.title} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-purple-500 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2033;