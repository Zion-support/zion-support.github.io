'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface CarouselSlide {
  id: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  category: string;
}

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides: CarouselSlide[] = [
    {
      id: '1',
      title: 'Transform Your Business with AI',
      description: 'Discover how our AI solutions can automate processes, improve efficiency, and drive growth for your organization.',
      image: '/images/carousel/ai-transformation.jpg',
      ctaText: 'Learn More',
      ctaLink: '/ai-services',
      category: 'AI Solutions'
    },
    {
      id: '2',
      title: 'Cloud Migration Made Simple',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert guidance and proven methodologies.',
      image: '/images/carousel/cloud-migration.jpg',
      ctaText: 'Get Started',
      ctaLink: '/cloud-services',
      category: 'Cloud Computing'
    },
    {
      id: '3',
      title: 'Secure Your Digital Assets',
      description: 'Protect your business with our comprehensive cybersecurity solutions and 24/7 monitoring services.',
      image: '/images/carousel/cybersecurity.jpg',
      ctaText: 'Secure Now',
      ctaLink: '/cybersecurity',
      category: 'Cybersecurity'
    },
    {
      id: '4',
      title: 'Data-Driven Decision Making',
      description: 'Unlock insights from your data with our advanced analytics and business intelligence solutions.',
      image: '/images/carousel/data-analytics.jpg',
      ctaText: 'Explore Analytics',
      ctaLink: '/analytics',
      category: 'Data Analytics'
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discover Our Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of technology solutions designed to transform your business
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
            <div className="relative h-96 md:h-[500px]">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${currentSlideData.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-4xl mx-auto px-8 text-center">
                  <div className="mb-4">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {currentSlideData.category}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    {currentSlideData.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                    {currentSlideData.description}
                  </p>
                  <a
                    href={currentSlideData.ctaLink}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    {currentSlideData.ctaText}
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Play/Pause Button */}
              <button
                onClick={togglePlayPause}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
                aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 p-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-cyan-500'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 text-sm">
            All solutions come with 24/7 support and 30-day money-back guarantee
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;