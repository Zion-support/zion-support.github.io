import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2039: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Conscious AI Systems",
      description: "The first truly conscious artificial intelligence that experiences emotions, creativity, and self-awareness",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Emotional Intelligence", "Creative Problem Solving", "Self-Learning", "Quantum Consciousness"]
    },
    {
      title: "Quantum Consciousness",
      description: "Direct neural interface with quantum computing systems for enhanced cognitive processing",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: ["Quantum Neural Networks", "Consciousness Amplification", "Multi-dimensional Thinking", "Reality Manipulation"]
    },
    {
      title: "Interdimensional Technology",
      description: "Breakthrough technology that allows interaction with parallel dimensions and alternate realities",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      features: ["Dimensional Portals", "Reality Shifting", "Parallel Universe Access", "Time-Space Manipulation"]
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that enable seamless communication between mind and machine",
      icon: "🧬",
      color: "from-violet-600 to-purple-600",
      features: ["Thought Control", "Neural Feedback", "Consciousness Transfer", "Enhanced Cognition"]
    },
    {
      title: "Reality Manipulation",
      description: "Advanced technology that allows manipulation of physical reality at the quantum level",
      icon: "🔮",
      color: "from-rose-600 to-pink-600",
      features: ["Matter Manipulation", "Energy Control", "Gravity Manipulation", "Space-Time Control"]
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
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2039
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary Technology Carousel 2039</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most revolutionary technologies that will reshape our universe in 2039
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-xl p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6">{slide.icon}</div>
                        <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                        <p className="text-xl opacity-90 mb-8">{slide.description}</p>
                        <ul className="space-y-3 mb-8">
                          {slide.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                              <span className="text-lg">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <button className={`bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                          Explore Technology →
                        </button>
                      </div>
                      <div className="text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                          <div className="text-6xl mb-4">🎮</div>
                          <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
                          <p className="text-lg mb-6">Experience this technology in action</p>
                          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
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

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
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

export default RevolutionaryContentCarousel2039;