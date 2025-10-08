import React, { useState, useEffect } from 'react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "AI-Powered Automation",
      description: "Transform your business processes with intelligent automation",
      image: "🤖",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Harness the power of quantum computing for complex problems",
      image: "⚛️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Enterprise Cloud Services",
      description: "Scalable, secure, and reliable cloud infrastructure",
      image: "☁️",
      color: "from-green-500 to-emerald-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="mb-16" aria-labelledby="carousel-heading">
      <h2 id="carousel-heading" className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
        Featured Solutions
      </h2>
      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className={`bg-gradient-to-r ${slide.color} p-8 sm:p-12 text-center`}>
                <div className="text-6xl sm:text-8xl mb-6">{slide.image}</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{slide.title}</h3>
                <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">{slide.description}</p>
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
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCarousel;