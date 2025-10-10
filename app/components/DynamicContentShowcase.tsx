'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
}

interface DynamicContentShowcaseProps {
  items: ShowcaseItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showControls?: boolean;
  className?: string;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  items,
  autoPlay = true,
  autoPlayInterval = 4000,
  showControls = true,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (isPlaying && items.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [isPlaying, autoPlayInterval, items.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (!items || items.length === 0) {
    return null;
  }

  const currentItem = items[currentIndex];

  return (
    <div className={`relative w-full ${className}`}>
      {/* Main Showcase */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="aspect-video relative">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-4xl">
              <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                {currentItem.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {currentItem.title}
              </h3>
              <p className="text-xl text-gray-200 mb-6 max-w-2xl">
                {currentItem.description}
              </p>
              <button className="bg-white text-purple-600 hover:bg-purple-50 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        {showControls && items.length > 1 && (
          <div className="absolute top-4 right-4 flex space-x-2">
            <button
              onClick={goToPrevious}
              className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={togglePlayPause}
              className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <button
              onClick={goToNext}
              className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {items.length > 1 && (
        <div className="mt-4 flex space-x-2 overflow-x-auto">
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex 
                  ? 'ring-2 ring-purple-500 scale-105' 
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Progress Indicator */}
      {isPlaying && items.length > 1 && (
        <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
          <div 
            className="bg-purple-600 h-1 rounded-full transition-all duration-100"
            style={{ 
              width: `${((currentIndex + 1) / items.length) * 100}%` 
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DynamicContentShowcase;