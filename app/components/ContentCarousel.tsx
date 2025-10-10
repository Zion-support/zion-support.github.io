'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: 'AI-Powered Business Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence technology',
      image: '/images/ai-solutions.jpg',
      cta: 'Learn More',
      ctaLink: '/ai-services'
    },
    {
      id: 2,
      title: 'Cloud Migration Services',
      description: 'Seamlessly migrate to the cloud with our expert guidance and support',
      image: '/images/cloud-migration.jpg',
      cta: 'Get Started',
      ctaLink: '/cloud-migration-services'
    },
    {
      id: 3,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with enterprise-grade security solutions',
      image: '/images/cybersecurity.jpg',
      cta: 'Secure Now',
      ctaLink: '/cybersecurity'
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg md:text-xl mb-6 max-w-2xl">{slide.description}</p>
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentCarousel;