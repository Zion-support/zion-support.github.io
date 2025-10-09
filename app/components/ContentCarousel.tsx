'use client';

import React, { useState, useEffect } from 'react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence',
      image: '🤖',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      image: '☁️',
      color: 'from-green-500 to-blue-600'
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services for enterprise growth',
      image: '🚀',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Featured Solutions
        </h2>
        <div className="relative overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className={`bg-gradient-to-r ${slide.color} p-12 rounded-xl`}>
                  <div className="text-center">
                    <div className="text-6xl mb-6">{slide.image}</div>
                    <h3 className="text-3xl font-bold text-white mb-4">{slide.title}</h3>
                    <p className="text-xl text-white opacity-90 mb-8">{slide.description}</p>
                    <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-cyan-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCarousel;