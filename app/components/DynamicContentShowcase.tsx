'use client';
import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Settings, Eye, EyeOff } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  featured: boolean;
}

interface DynamicContentShowcaseProps {
  items: ContentItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showControls?: boolean;
  showFilters?: boolean;
  className?: string;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  items,
  autoPlay = true,
  autoPlayInterval = 3000,
  showControls = true,
  showFilters = true,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [filteredItems, setFilteredItems] = useState<ContentItem[]>(items);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showSettings, setShowSettings] = useState(false);

  const categories = ['all', ...Array.from(new Set(items.map(item => item.category)))];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory, items]);

  useEffect(() => {
    if (isPlaying && filteredItems.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [isPlaying, filteredItems.length, autoPlayInterval]);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetShowcase = () => {
    setCurrentIndex(0);
    setIsPlaying(false);
  };

  const currentItem = filteredItems[currentIndex];

  if (filteredItems.length === 0) {
    return (
      <div className={`flex items-center justify-center h-64 bg-gray-100 rounded-lg ${className}`}>
        <p className="text-gray-500">No content available</p>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Controls */}
      {showControls && (
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={togglePlayPause}
              className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
            
            <button
              onClick={resetShowcase}
              className="flex items-center space-x-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>

            <button
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center space-x-2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200"
            >
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>
          </div>

          <div className="text-sm text-gray-500">
            {currentIndex + 1} of {filteredItems.length}
          </div>
        </div>
      )}

      {/* Filters */}
      {showFilters && showSettings && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Content</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative overflow-hidden rounded-lg bg-white shadow-lg">
        {/* Content Image */}
        <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Featured Badge */}
          {currentItem.featured && (
            <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </div>
          )}
        </div>

        {/* Content Info */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {currentItem.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {currentItem.description}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {currentItem.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Navigation */}
          {filteredItems.length > 1 && (
            <div className="flex items-center justify-between">
              <button
                onClick={prevItem}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <span>Previous</span>
              </button>
              
              <div className="flex space-x-2">
                {filteredItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentIndex
                        ? 'bg-blue-500'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextItem}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <span>Next</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;