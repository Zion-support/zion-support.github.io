'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const ContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items: CarouselItem[] = [
    {
      id: 1,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge AI technology and automation.',
      image: '/api/placeholder/800/400',
      link: '/ai-solutions'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses.',
      image: '/api/placeholder/800/400',
      link: '/cloud-services'
    },
    {
      id: 3,
      title: 'Cybersecurity',
      description: 'Protect your business with enterprise-grade security solutions.',
      image: '/api/placeholder/800/400',
      link: '/cybersecurity'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Carousel Content */}
      <div className="relative h-full flex items-center">
        <div className="w-full px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">{items[currentIndex].title}</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">{items[currentIndex].description}</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentCarousel;