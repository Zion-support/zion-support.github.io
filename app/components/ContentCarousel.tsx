'use client';
import React, { useState, useEffect } from 'react';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
  stats?: {
    value: string;
    label: string;
  }[];
}

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides: Slide[] = [
    {
      id: 1,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge AI technology',
      image: '/images/ai-solutions.jpg',
      color: 'bg-blue-600',
      stats: [
        { value: '95%', label: 'Accuracy' },
        { value: '50%', label: 'Cost Reduction' },
        { value: '24/7', label: 'Availability' }
      ]
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      image: '/images/cloud-infrastructure.jpg',
      color: 'bg-green-600',
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: 'Global', label: 'Reach' },
        { value: 'Secure', label: 'Data Protection' }
      ]
    },
    {
      id: 3,
      title: 'Digital Transformation',
      description: 'Modernize your business processes with digital solutions',
      image: '/images/digital-transformation.jpg',
      color: 'bg-purple-600',
      stats: [
        { value: '300%', label: 'Efficiency' },
        { value: 'Real-time', label: 'Analytics' },
        { value: 'Mobile', label: 'First' }
      ]
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
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`w-full h-full ${slide.color} flex items-center justify-center`}>
              <div className="text-center text-white p-8">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl mb-6">{slide.description}</p>
                {slide.stats && (
                  <div className="flex justify-center space-x-8">
                    {slide.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-3xl font-bold">{stat.value}</div>
                        <div className="text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentCarousel;