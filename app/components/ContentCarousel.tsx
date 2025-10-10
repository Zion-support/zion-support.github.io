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
      description: 'Transform your business with our cutting-edge AI technology. Increase efficiency, reduce costs, and drive growth.',
      image: '/api/placeholder/800/400',
      cta: 'Learn More',
      ctaLink: '/services'
    },
    {
      id: 2,
      title: 'Quantum Computing Innovation',
      description: 'Stay ahead of the competition with our quantum computing solutions. Solve complex problems faster than ever before.',
      image: '/api/placeholder/800/400',
      cta: 'Explore Quantum',
      ctaLink: '/quantum-computing'
    },
    {
      id: 3,
      title: 'Micro SaaS Solutions',
      description: 'Powerful, affordable business tools designed to streamline your operations. Start small, scale big.',
      image: '/api/placeholder/800/400',
      cta: 'View Products',
      ctaLink: '/micro-saas'
    },
    {
      id: 4,
      title: 'Enterprise Security',
      description: 'Protect your business with our comprehensive cybersecurity solutions. Bank-level security for your critical data.',
      image: '/api/placeholder/800/400',
      cta: 'Secure Now',
      ctaLink: '/cybersecurity'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [isPlaying]);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
                    {/* Content */}
                    <div className="text-white">
                      <h2 className="text-3xl lg:text-4xl font-bold mb-4 neon-text">
                        {slide.title}
                      </h2>
                      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        {slide.description}
                      </p>
                      <a
                        href={slide.ctaLink}
                        className="inline-flex items-center cyber-button px-6 py-3 text-lg"
                      >
                        {slide.cta}
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </a>
                    </div>
                    
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-64 lg:h-80 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-sm"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors duration-200 backdrop-blur-sm"
              aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide 
                    ? 'bg-cyan-500' 
                    : 'bg-gray-400 hover:bg-gray-300'
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