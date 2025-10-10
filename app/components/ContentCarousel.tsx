'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ContentCarouselProps {
  items?: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({
  items = [],
  autoPlay = true,
  interval = 5000,
  showControls = true,
  showIndicators = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const defaultItems: CarouselItem[] = [
    {
      id: '1',
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence technology.',
      image: '/images/carousel/ai-solutions.jpg',
      link: '/ai-solutions'
    },
    {
      id: '2',
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses.',
      image: '/images/carousel/cloud-infrastructure.jpg',
      link: '/cloud-services'
    },
    {
      id: '3',
      title: 'Cybersecurity',
      description: 'Protect your business with enterprise-grade security solutions.',
      image: '/images/carousel/cybersecurity.jpg',
      link: '/cybersecurity'
    }
  ];

  const carouselItems = items.length > 0 ? items : defaultItems;

  useEffect(() => {
    if (isPlaying && carouselItems.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isPlaying, carouselItems.length, interval]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (carouselItems.length === 0) {
    return null;
  }

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl">
          {/* Carousel Container */}
          <div className="relative h-96 md:h-[500px]">
            {carouselItems.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="relative h-full bg-gradient-to-r from-slate-800 to-purple-800 rounded-2xl overflow-hidden">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/50" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-3xl px-8 md:px-12">
                      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {item.title}
                      </h2>
                      <p className="text-xl text-gray-300 mb-8">
                        {item.description}
                      </p>
                      <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Controls */}
            {showControls && carouselItems.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Play/Pause Button */}
            {carouselItems.length > 1 && (
              <button
                onClick={togglePlayPause}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
            )}
          </div>

          {/* Indicators */}
          {showIndicators && carouselItems.length > 1 && (
            <div className="flex justify-center space-x-2 mt-6">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-cyan-400' 
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