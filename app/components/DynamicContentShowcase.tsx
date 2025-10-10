'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Star, CheckCircle, ArrowRight } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  features: string[];
  link: string;
}

interface DynamicContentShowcaseProps {
  items: ShowcaseItem[];
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  showRating?: boolean;
  showFeatures?: boolean;
  title?: string;
  description?: string;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  items,
  autoPlay = true,
  interval = 5000,
  showControls = true,
  showIndicators = true,
  showRating = true,
  showFeatures = true,
  title = 'Featured Content',
  description = 'Discover our latest and most popular content'
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

  const currentItem = items[currentIndex];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-gray-300">{description}</p>
        </div>

        {/* Showcase */}
        <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div>
                <span className="bg-cyan-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  {currentItem.category}
                </span>
                <h3 className="text-3xl font-bold text-white mt-4 mb-4">{currentItem.title}</h3>
                <p className="text-gray-300 text-lg">{currentItem.description}</p>
              </div>

              {/* Rating */}
              {showRating && (
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`w-5 h-5 ${
                          index < Math.floor(currentItem.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white font-semibold">{currentItem.rating}</span>
                </div>
              )}

              {/* Features */}
              {showFeatures && currentItem.features.length > 0 && (
                <div className="space-y-2">
                  {currentItem.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA */}
              <a
                href={currentItem.link}
                className="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
            </div>
          </div>

          {/* Controls */}
          {showControls && items.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-colors"
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
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
