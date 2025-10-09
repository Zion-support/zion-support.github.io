import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface DynamicContentShowcaseProps {
  items: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    video?: string;
    category: string;
    tags: string[];
  }>;
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  items,
  autoPlay = true,
  interval = 4000,
  showControls = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, interval, items.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="relative w-full">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Main Content */}
        <div className="relative h-64 md:h-80 lg:h-96">
          {currentItem.video ? (
            <video
              className="w-full h-full object-cover"
              autoPlay={isPlaying}
              muted
              loop
              playsInline
            >
              <source src={currentItem.video} type="video/mp4" />
            </video>
          ) : (
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${currentItem.image})` }}
            />
          )}
          
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white p-6 max-w-2xl">
              <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                {currentItem.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{currentItem.title}</h3>
              <p className="text-lg mb-6">{currentItem.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {currentItem.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        {showControls && (
          <div className="absolute top-4 right-4 flex space-x-2">
            <button
              onClick={togglePlayPause}
              className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          </div>
        )}

        {/* Navigation */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <button
            onClick={goToPrevious}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <button
            onClick={goToNext}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            aria-label="Next item"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;