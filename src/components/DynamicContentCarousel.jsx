import React, { useState, useEffect } from 'react';

const DynamicContentCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "AI Innovation",
      description: "Cutting-edge artificial intelligence solutions",
      image: "/api/placeholder/800/400",
      link: "/ai-solutions"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum computing technology",
      image: "/api/placeholder/800/400",
      link: "/quantum-computing"
    },
    {
      title: "Cybersecurity",
      description: "Advanced security solutions for your business",
      image: "/api/placeholder/800/400",
      link: "/cybersecurity"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-96 flex-shrink-0 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900 opacity-80"></div>
            <div className="relative z-10 flex items-center justify-center h-full text-center text-white p-8">
              <div>
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl mb-6">{slide.description}</p>
                <a 
                  href={slide.link}
                  className="inline-block bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default DynamicContentCarousel;