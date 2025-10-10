'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      title: 'AI-Powered Business Solutions',
      description: 'Transform your business with our cutting-edge AI technology',
      image: '🤖',
      cta: 'Learn More'
    },
    {
      title: 'Cloud Infrastructure Excellence',
      description: 'Scalable, secure, and reliable cloud solutions for your business',
      image: '☁️',
      cta: 'Get Started'
    },
    {
      title: 'Cybersecurity Protection',
      description: 'Advanced security solutions to protect your digital assets',
      image: '🔒',
      cta: 'Secure Now'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
          <div className="relative h-96">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="text-center">
                  <div className="text-8xl mb-6">{slide.image}</div>
                  <h2 className="text-4xl font-bold text-white mb-4">{slide.title}</h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                    {slide.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={togglePlayPause}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 text-white" />
              )}
            </button>
            
            <button
              onClick={nextSlide}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
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