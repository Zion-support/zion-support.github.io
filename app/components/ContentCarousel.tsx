'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Star, ArrowRight } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      title: 'AI-Powered Business Transformation',
      description: 'Discover how our AI solutions can revolutionize your business operations and drive unprecedented growth.',
      image: '🤖',
      cta: 'Learn More',
      link: '/ai-services'
    },
    {
      title: 'Cloud Migration Excellence',
      description: 'Seamless cloud migration with zero downtime guarantee. Transform your infrastructure with our expert team.',
      image: '☁️',
      cta: 'Get Started',
      link: '/cloud-migration'
    },
    {
      title: 'Micro SAAS Solutions',
      description: '50+ AI-powered tools designed to streamline your business processes and boost productivity.',
      image: '⚡',
      cta: 'Explore Tools',
      link: '/micro-saas'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance solutions to protect your most valuable assets.',
      image: '🔒',
      cta: 'Secure Now',
      link: '/cybersecurity'
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
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our most popular AI and IT solutions that are transforming businesses worldwide.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-12 md:p-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <div>
                        <div className="text-6xl mb-6">{slide.image}</div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                          {slide.title}
                        </h3>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                          {slide.description}
                        </p>
                        <div className="flex items-center gap-4">
                          <a
                            href={slide.link}
                            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                          >
                            {slide.cta}
                            <ArrowRight className="w-5 h-5" />
                          </a>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                            <span className="text-gray-300 ml-2">4.9/5</span>
                          </div>
                        </div>
                      </div>

                      {/* Visual Element */}
                      <div className="hidden lg:block">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                          <div className="text-center">
                            <div className="text-8xl mb-4">{slide.image}</div>
                            <div className="space-y-4">
                              <div className="h-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"></div>
                              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
                              <div className="h-2 bg-gradient-to-r from-pink-500 to-red-600 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={togglePlayPause}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
            
            <button
              onClick={nextSlide}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-cyan-400' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;