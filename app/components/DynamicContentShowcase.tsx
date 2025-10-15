import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
}

interface DynamicContentShowcaseProps {
  items: ShowcaseItem[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  items,
  autoPlay = true,
  interval = 5000,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, interval, items.length]);

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % items.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div className={`relative ${className}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <button
              onClick={togglePlayPause}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all"
            >
              {isPlaying ? (
                <div className="w-6 h-6 border-2 border-white border-l-transparent rounded-full animate-spin" />
              ) : (
                <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
              )}
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-blue-600 font-medium">
              {currentItem.category}
            </span>
            <span className="text-sm text-gray-500">
              {currentIndex + 1} of {items.length}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold mb-2">{currentItem.title}</h3>
          <p className="text-gray-600 mb-4">{currentItem.description}</p>
          
          {currentItem.link && (
            <a
              href={currentItem.link}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Learn More →
            </a>
          )}
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
        aria-label="Previous item"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
        aria-label="Next item"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-blue-600'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
