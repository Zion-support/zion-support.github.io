'use client';
import React, { useState, useEffect } from 'react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "AI-Powered Business Transformation",
      description: "Transform your business with our cutting-edge AI solutions",
      image: "🚀",
      cta: "Learn More"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Next-generation quantum algorithms for enterprise applications",
      image: "⚛️",
      cta: "Explore"
    },
    {
      title: "Autonomous Systems",
      description: "Self-managing systems that optimize your operations",
      image: "🤖",
      cta: "Discover"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 p-8 text-center">
            <div className="text-6xl mb-4">{slide.image}</div>
            <h3 className="text-2xl font-bold text-white mb-4">{slide.title}</h3>
            <p className="text-gray-300 mb-6">{slide.description}</p>
            <button className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
              {slide.cta}
            </button>
          </div>
        ))}
      </div>
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-cyan-400' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentCarousel;