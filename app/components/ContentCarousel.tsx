import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "AI-Powered Automation",
      description: "Transform your business processes with intelligent automation that learns and adapts.",
      image: "🤖",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Harness the power of quantum computing for complex problem solving and optimization.",
      image: "⚛️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security and compliance for your critical data and infrastructure.",
      image: "🔒",
      color: "from-green-500 to-emerald-500"
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
    <section className="mb-16" aria-labelledby="carousel-heading">
      <h2 id="carousel-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
        Featured Solutions
      </h2>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className={`bg-gradient-to-br ${slide.color} p-8 md:p-12 text-center text-white`}>
                  <div className="text-6xl md:text-8xl mb-6">{slide.image}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{slide.title}</h3>
                  <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCarousel;