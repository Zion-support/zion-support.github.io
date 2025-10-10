'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ArrowRight, Zap, Shield, Cloud } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'AI-Powered Business Transformation',
      description: 'Transform your business with our comprehensive AI solutions. From predictive analytics to intelligent automation, we help you stay ahead of the competition.',
      image: '🤖',
      stats: '500+ Successful Implementations',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Excellence',
      description: 'Scale your business with our enterprise-grade cloud solutions. Seamless migration, 99.9% uptime, and 24/7 expert support.',
      image: '☁️',
      stats: '99.9% Uptime Guarantee',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Advanced Cybersecurity Protection',
      description: 'Protect your business with our comprehensive security solutions. Real-time threat detection, compliance management, and incident response.',
      image: '🔒',
      stats: 'Zero Security Breaches',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      title: 'Micro SAAS Solutions',
      description: 'Discover our collection of 50+ micro SAAS tools designed for modern businesses. Affordable, powerful, and ready to use.',
      image: '⚡',
      stats: '50+ Ready-to-Use Tools',
      color: 'from-orange-500 to-red-500'
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-2xl">
      {/* Slides */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full flex-shrink-0 relative"
          >
            <div className={`w-full h-full bg-gradient-to-br ${slide.color} p-8 flex items-center`}>
              <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="text-white">
                  <div className="text-6xl mb-4">{slide.image}</div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-6 opacity-90">
                    {slide.description}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-semibold">{slide.stats}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/services/enhanced"
                      className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <Zap className="w-5 h-5" />
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
                
                {/* Visual Element */}
                <div className="hidden lg:block">
                  <div className="relative">
                    <div className="w-64 h-64 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <div className="text-8xl">{slide.image}</div>
                    </div>
                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/30 rounded-full animate-bounce"></div>
                    <div className="absolute top-1/2 -right-8 w-4 h-4 bg-white/25 rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentCarousel;