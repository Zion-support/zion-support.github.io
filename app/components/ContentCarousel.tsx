'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface Slide {
  id: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  features: string[];
}

interface ContentCarouselProps {
  slides?: Slide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({
  slides = [
    {
      id: '1',
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      image: '/images/carousel/ai-analytics.jpg',
      ctaText: 'Learn More',
      ctaLink: '/solutions/ai-analytics',
      features: ['Real-time insights', 'Predictive analytics', 'Custom dashboards', 'API integration']
    },
    {
      id: '2',
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions designed for modern businesses.',
      image: '/images/carousel/cloud-infrastructure.jpg',
      ctaText: 'Explore Solutions',
      ctaLink: '/solutions/cloud',
      features: ['Auto-scaling', '99.9% uptime', 'Global deployment', 'Security compliance']
    },
    {
      id: '3',
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with enterprise-grade security solutions.',
      image: '/images/carousel/cybersecurity.jpg',
      ctaText: 'Get Protected',
      ctaLink: '/solutions/security',
      features: ['Threat detection', '24/7 monitoring', 'Compliance support', 'Incident response']
    }
  ],
  autoPlay = true,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (isPlaying && autoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [isPlaying, autoPlay, autoPlayInterval, slides.length]);

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
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI and IT solutions designed to transform your business.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  {currentSlideData.title}
                </h3>
                <p className="text-xl text-gray-300 mb-8">
                  {currentSlideData.description}
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {currentSlideData.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  {currentSlideData.ctaText}
                </button>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img
                    src={currentSlideData.image}
                    alt={currentSlideData.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Controls */}
          {showControls && (
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={prevSlide}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={togglePlayPause}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              
              <button
                onClick={nextSlide}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}

          {/* Indicators */}
          {showIndicators && (
            <div className="flex justify-center mt-6 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;