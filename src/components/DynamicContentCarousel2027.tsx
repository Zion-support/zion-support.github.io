import React, { useState, useEffect } from 'react';

const DynamicContentCarousel2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Consciousness Computing Revolution',
      description: 'Experience AI with genuine consciousness and emotional intelligence',
      image: '🧠',
      color: 'from-purple-600 to-pink-600',
      link: '/pages/ConsciousnessComputingRevolution2027'
    },
    {
      title: 'Interdimensional Technology',
      description: 'Access parallel dimensions through quantum entanglement technology',
      image: '🌌',
      color: 'from-cyan-600 to-blue-600',
      link: '/pages/InterdimensionalTechRevolution2027'
    },
    {
      title: 'Ultimate Tech Revolution',
      description: 'The convergence of all breakthrough technologies creating infinite possibilities',
      image: '⚡',
      color: 'from-emerald-600 to-teal-600',
      link: '/pages/UltimateTechRevolution2027'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">🌟 Revolutionary Technology 2027</h2>
        <p className="text-xl text-gray-300">Discover our latest innovations that are reshaping reality</p>
      </div>

      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className={`bg-gradient-to-br ${slide.color} rounded-xl p-12 text-center`}>
                  <div className="text-8xl mb-6 animate-bounce">{slide.image}</div>
                  <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                  <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">{slide.description}</p>
                  <a 
                    href={slide.link}
                    className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                  >
                    Explore Technology →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
        >
          ←
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
        >
          →
        </button>
      </div>

      {/* Quick Access Grid */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${slide.color} rounded-lg p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
              currentSlide === index ? 'ring-4 ring-white/50' : ''
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <div className="text-4xl mb-4">{slide.image}</div>
            <h4 className="text-lg font-bold mb-2">{slide.title}</h4>
            <p className="text-sm opacity-90">{slide.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicContentCarousel2027;