import React, { useState, useEffect } from 'react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "AI-Powered Business Transformation",
      description: "Revolutionize your operations with our advanced AI solutions",
      image: "🤖",
      link: "/ai-services"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Unlock unprecedented computational power for complex problems",
      image: "⚛️",
      link: "/quantum-computing"
    },
    {
      title: "Autonomous Systems Integration",
      description: "Self-managing systems that optimize your business processes",
      image: "🔄",
      link: "/autonomous-systems"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-r from-slate-800 to-purple-900 py-16 rounded-2xl cyber-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
          Featured Solutions
        </h2>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="text-center">
                  <div className="text-8xl mb-6">{slide.image}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {slide.title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                  <a
                    href={slide.link}
                    className="cyber-button"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-cyan-400' : 'bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;