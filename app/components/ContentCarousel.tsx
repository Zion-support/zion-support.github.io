'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Users, TrendingUp, Award } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "AI-Powered Business Transformation",
      description: "Transform your business with our cutting-edge AI solutions that deliver measurable results and competitive advantage.",
      stats: "300% ROI",
      icon: TrendingUp,
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 2,
      title: "Enterprise-Grade Security",
      description: "Bank-level security and compliance for your critical data and infrastructure with 99.9% uptime guarantee.",
      stats: "99.9% Uptime",
      icon: Award,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "Global Client Success",
      description: "Trusted by 100+ enterprises worldwide with proven track record of successful AI implementations.",
      stats: "100+ Clients",
      icon: Users,
      color: "from-green-500 to-emerald-600"
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
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover what makes us the leading choice for AI and IT solutions
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-400/20">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => {
                const IconComponent = slide.icon;
                return (
                  <div key={slide.id} className="w-full flex-shrink-0">
                    <div className="p-8 md:p-12">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                          <div className="flex items-center space-x-3">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${slide.color}`}>
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-2xl font-bold text-white">{slide.stats}</div>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            {slide.title}
                          </h3>
                          <p className="text-lg text-gray-300 leading-relaxed">
                            {slide.description}
                          </p>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <span className="text-gray-300">5.0/5.0 Rating</span>
                          </div>
                        </div>
                        <div className="relative">
                          <div className={`w-full h-64 bg-gradient-to-br ${slide.color} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-black/20"></div>
                            <div className="relative z-10 text-center text-white">
                              <IconComponent className="w-24 h-24 mx-auto mb-4 opacity-80" />
                              <div className="text-4xl font-bold">{slide.stats}</div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCarousel;