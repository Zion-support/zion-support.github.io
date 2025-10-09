'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Users, TrendingUp } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "AI-Powered Business Transformation",
      description: "Transform your enterprise with our cutting-edge AI solutions, achieving unprecedented growth and efficiency.",
      stats: "300% ROI",
      icon: TrendingUp,
      color: "text-blue-400"
    },
    {
      title: "Enterprise-Grade Security",
      description: "Bank-level security and compliance for your critical data and infrastructure with 99.9% uptime.",
      stats: "99.9% Uptime",
      icon: Users,
      color: "text-green-400"
    },
    {
      title: "24/7 Expert Support",
      description: "Round-the-clock support from world-class engineers and data scientists with proven track records.",
      stats: "24/7 Support",
      icon: Star,
      color: "text-purple-400"
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
    <div className="relative bg-slate-800/50 rounded-2xl p-8 mb-16 overflow-hidden">
      <div className="relative h-64 flex items-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="text-center">
              <slide.icon className={`w-16 h-16 ${slide.color} mx-auto mb-4`} />
              <h3 className="text-2xl font-bold text-white mb-4">{slide.title}</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">{slide.description}</p>
              <div className="text-3xl font-bold text-cyan-400">{slide.stats}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-700/50 hover:bg-slate-700 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-700/50 hover:bg-slate-700 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-cyan-400' : 'bg-slate-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentCarousel;