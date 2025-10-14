'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  price?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

interface DynamicContentShowcaseProps {
  items?: ContentItem[];
  title?: string;
  subtitle?: string;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  items = [],
  title = "Our Solutions",
  subtitle = "Discover our comprehensive range of services",
  autoPlay = true,
  interval = 5000,
  className = ""
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
  }, [isPlaying, items.length, interval]);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToItem = (index: number) => {
    setCurrentIndex(index);
  };

  if (items.length === 0) {
    return (
      <div className={`text-center py-16 ${className}`}>
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-300">{subtitle}</p>
        <p className="text-gray-400 mt-4">No content available at the moment.</p>
      </div>
    );
  }

  const currentItem = items[currentIndex];

  return (
    <div className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-gray-300">{subtitle}</p>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <currentItem.icon className="w-12 h-12 text-cyan-400" />
                <div>
                  <h3 className="text-2xl font-bold text-white">{currentItem.title}</h3>
                  {currentItem.price && (
                    <p className="text-cyan-400 text-lg font-semibold">{currentItem.price}</p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? '⏸️' : '▶️'}
                </button>
              </div>
            </div>

            <p className="text-gray-300 mb-6">{currentItem.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {currentItem.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {currentItem.buttonText && (
              <button
                onClick={currentItem.onButtonClick}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center"
              >
                {currentItem.buttonText}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prevItem}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Previous item"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <div className="flex space-x-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToItem(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to item ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextItem}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Next item"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
