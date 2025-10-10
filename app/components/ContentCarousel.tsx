'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      image: '/images/ai-analytics.jpg',
      cta: 'Learn More',
      href: '/ai-services'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Solutions',
      description: 'Scalable, secure, and reliable cloud infrastructure tailored to your business needs.',
      image: '/images/cloud-infrastructure.jpg',
      cta: 'Get Started',
      href: '/it-services'
    },
    {
      id: 3,
      title: 'Micro SaaS Applications',
      description: 'Ready-to-use business tools that solve specific problems with AI and automation.',
      image: '/images/micro-saas.jpg',
      cta: 'Explore',
      href: '/micro-saas'
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

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative bg-slate-900 rounded-lg overflow-hidden">
      <div className="relative h-96">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="h-full bg-gradient-to-r from-slate-800 to-slate-900 flex items-center">
              <div className="w-full px-8 md:px-16">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                    {slide.description}
                  </p>
                  <a
                    href={slide.href}
                    className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    {slide.cta}
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <button
          onClick={prevSlide}
          className="p-2 bg-slate-800/50 hover:bg-slate-800 text-white rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={togglePlayPause}
          className="p-2 bg-slate-800/50 hover:bg-slate-800 text-white rounded-full transition-colors"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
        
        <button
          onClick={nextSlide}
          className="p-2 bg-slate-800/50 hover:bg-slate-800 text-white rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
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
  );
};

export default ContentCarousel;