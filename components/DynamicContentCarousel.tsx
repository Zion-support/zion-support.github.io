'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  badge: string;
  category: string;
  roi?: string;
  gradient: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 'breakthrough-announcement',
    title: 'AI 2025 Revolutionary Breakthrough',
    description: 'The most significant AI advancement of our generation is here. Transform your business with unprecedented ROI.',
    image: '/images/ai-breakthrough-2025.jpg',
    href: '/blog/ai-2025-revolutionary-breakthrough-announcement',
    badge: 'BREAKTHROUGH',
    category: 'AI 2025',
    roi: '2000%',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    id: 'breakthrough-success',
    title: 'Revolutionary Success Story',
    description: 'Fortune 500 company achieves 2000% ROI with our revolutionary AI breakthrough technology.',
    image: '/images/success-story-2025.jpg',
    href: '/case-studies/ai-2025-revolutionary-breakthrough-success',
    badge: 'SUCCESS',
    category: 'Case Study',
    roi: '2000%',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'quantum-neural-fusion',
    title: 'AI 2026 Quantum-Neural Fusion',
    description: 'Breakthrough quantum computing integration that solves complex problems in seconds, not hours.',
    image: '/images/quantum-neural-2026.jpg',
    href: '/blog/ai-2026-quantum-neural-fusion-breakthrough',
    badge: 'REVOLUTIONARY',
    category: 'AI 2026',
    roi: '15000%',
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'implementation-guide',
    title: 'Revolutionary Implementation Guide',
    description: 'Complete guide to implementing breakthrough AI in your organization with proven methodologies.',
    image: '/images/implementation-guide.jpg',
    href: '/resources/ai-2025-revolutionary-implementation-guide',
    badge: 'ESSENTIAL',
    category: 'Implementation',
    roi: 'Guaranteed',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'fortune-500-transformation',
    title: 'Fortune 500 Transformation',
    description: 'Global enterprise achieves 1500% ROI breakthrough with autonomous AI decision systems.',
    image: '/images/fortune-500-transformation.jpg',
    href: '/case-studies/ai-2025-fortune-500-transformation-breakthrough',
    badge: 'TRANSFORMATION',
    category: 'Enterprise',
    roi: '1500%',
    gradient: 'from-orange-500 to-red-500'
  }
];

export default function DynamicContentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentItem = carouselItems[currentIndex];

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg shadow-xl">
      {/* Main Carousel Content */}
      <div className="relative h-full">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item) => (
            <div
              key={item.id}
              className="w-full h-full flex-shrink-0 relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-90`} />
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${item.image})`
                }}
              />
              
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-4xl mx-auto px-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                    <span className={`bg-gradient-to-r ${item.gradient} px-3 py-1 rounded-full text-sm font-bold`}>
                      {item.badge}
                    </span>
                    {item.roi && (
                      <span className="bg-green-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
                        {item.roi} ROI
                      </span>
                    )}
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                    {item.title}
                  </h2>
                  
                  <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={item.href}
                      className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      Explore Now
                    </Link>
                    <Link
                      href="/contact"
                      className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 text-center"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-20"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-20"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{
            width: isAutoPlaying ? `${((currentIndex + 1) / carouselItems.length) * 100}%` : '100%'
          }}
        />
      </div>

      {/* Auto-play Indicator */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
            isAutoPlaying 
              ? 'bg-green-500/80 hover:bg-green-500' 
              : 'bg-gray-500/80 hover:bg-gray-500'
          } text-white`}
          aria-label={isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
        >
          {isAutoPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}