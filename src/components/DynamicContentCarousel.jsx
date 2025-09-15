import React, { useState, useEffect } from 'react';

const DynamicContentCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'AI Revolution 2025',
      description: 'Discover how artificial intelligence is reshaping industries',
      image: '/api/placeholder/600/400',
      link: '/pages/AIRevolution2025'
    },
    {
      title: 'Quantum Computing',
      description: 'Experience exponential processing power with quantum technology',
      image: '/api/placeholder/600/400',
      link: '/pages/AdvancedQuantumComputing2026'
    },
    {
      title: 'Neural Interfaces',
      description: 'Bridge mind and machine with direct neural communication',
      image: '/api/placeholder/600/400',
      link: '/pages/AdvancedNeuralInterface2026'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                  <p className="text-xl mb-6">{slide.description}</p>
                  <a href={slide.link} className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                    Learn More →
                  </a>
                </div>
                <div className="text-center">
                  <div className="w-full h-64 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-6xl">🚀</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-purple-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default DynamicContentCarousel;