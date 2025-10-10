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
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({
  items,
  autoPlay = true,
  interval = 5000,
  showControls = true,
  showIndicators = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (isPlaying && items.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isPlaying, interval, items.length]);

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

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-96 bg-slate-800 rounded-2xl overflow-hidden">
      {/* Carousel Content */}
      <div className="relative h-full">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="relative z-10 flex items-center justify-center h-full p-8">
                <div className="text-center text-white max-w-2xl">
                  <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                  <p className="text-lg mb-6">{item.description}</p>
                  <a
                    href={item.link}
                    className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      {showControls && items.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Play/Pause Button */}
      {items.length > 1 && (
        <button
          onClick={togglePlayPause}
          className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-colors"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
      )}

      {/* Indicators */}
      {showIndicators && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-cyan-500' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentCarousel;
