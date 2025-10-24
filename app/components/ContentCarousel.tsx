'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ContentCarouselProps {
  items: Array<{
    id: string;
    title: string;
    description: string;
    image?: string;
    link?: string;
  }>;
  autoPlay?: boolean;
  interval?: number;
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({
  items,
  autoPlay = true,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  if (!items || items.length === 0) {
    return <div>No items to display</div>;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, _index) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative z-10 flex items-center justify-center h-full p-8">
                  <div className="text-center max-w-2xl">
                    <h3 className="text-2xl md:text-4xl font-bold mb-4">
                      {item.title}
                    </h3>
                    <p className="text-lg md:text-xl mb-6 opacity-90">
                      {item.description}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        Learn More
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
          {items.map((_, _index) => (
          <button
            key={_index}
            onClick={() => goToSlide(_index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              _index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${_index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentCarousel;