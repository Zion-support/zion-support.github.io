'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

const ContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const items: CarouselItem[] = [
    {
      id: '1',
      title: 'AI-Powered Business Solutions',
      description: 'Transform your business with cutting-edge AI technology and machine learning algorithms.',
      image: '/images/carousel/ai-solutions.jpg',
      category: 'AI & Machine Learning',
      link: '/ai-solutions'
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Excellence',
      description: 'Scalable, secure, and reliable cloud solutions for modern businesses.',
      image: '/images/carousel/cloud-infrastructure.jpg',
      category: 'Cloud Services',
      link: '/cloud-services'
    },
    {
      id: '3',
      title: 'Quantum Computing Innovation',
      description: 'Revolutionary quantum computing solutions for complex problem solving.',
      image: '/images/carousel/quantum-computing.jpg',
      category: 'Quantum Computing',
      link: '/quantum-computing'
    },
    {
      id: '4',
      title: 'Cybersecurity Solutions',
      description: 'Advanced security measures to protect your digital assets and data.',
      image: '/images/carousel/cybersecurity.jpg',
      category: 'Cybersecurity',
      link: '/cybersecurity'
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

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-2xl">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex items-center h-full px-8 md:px-16">
                <div className="max-w-2xl">
                  <span className="inline-block px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-medium mb-4">
                    {item.category}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    {item.title}
                  </h2>
                  <p className="text-lg text-gray-200 mb-6">
                    {item.description}
                  </p>
                  <button className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-cyan-400' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentCarousel;
