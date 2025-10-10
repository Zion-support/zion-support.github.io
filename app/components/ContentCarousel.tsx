'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const ContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const items: CarouselItem[] = [
    {
      id: 1,
      title: 'AI-Powered Business Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning technologies.',
      image: 'https://via.placeholder.com/800x400/1e293b/ffffff?text=AI+Solutions',
      link: '/ai-services'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure & Migration',
      description: 'Seamlessly migrate to the cloud with our expert cloud architecture and migration services.',
      image: 'https://via.placeholder.com/800x400/1e293b/ffffff?text=Cloud+Services',
      link: '/it-services'
    },
    {
      id: 3,
      title: 'Cybersecurity & Compliance',
      description: 'Protect your digital assets with our comprehensive security solutions and compliance expertise.',
      image: 'https://via.placeholder.com/800x400/1e293b/ffffff?text=Cybersecurity',
      link: '/it-services'
    },
    {
      id: 4,
      title: 'Micro SaaS Solutions',
      description: 'Discover our collection of specialized business tools designed to streamline your operations.',
      image: 'https://via.placeholder.com/800x400/1e293b/ffffff?text=Micro+SaaS',
      link: '/micro-saas'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, items.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-4xl mx-auto px-8 text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                      {item.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      className="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-cyan-500 w-8'
                : 'bg-gray-400 hover:bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentCarousel;