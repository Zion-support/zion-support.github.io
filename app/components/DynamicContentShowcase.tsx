import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
}

interface DynamicContentShowcaseProps {
  items?: ContentItem[];
  autoPlay?: boolean;
  interval?: number;
  showCategories?: boolean;
}

const defaultItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI-Powered Analytics',
    description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
    image: '/api/placeholder/400/300',
    category: 'AI Solutions',
    tags: ['Machine Learning', 'Data Analytics', 'Business Intelligence']
  },
  {
    id: '2',
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions designed for modern businesses.',
    image: '/api/placeholder/400/300',
    category: 'Cloud Services',
    tags: ['AWS', 'Azure', 'DevOps']
  },
  {
    id: '3',
    title: 'Cybersecurity Suite',
    description: 'Comprehensive security solutions to protect your digital assets.',
    image: '/api/placeholder/400/300',
    category: 'Security',
    tags: ['Threat Detection', 'Compliance', 'Risk Management']
  }
];

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  items = defaultItems,
  autoPlay = true,
  interval = 5000,
  showCategories = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(items.map(item => item.category)))];

  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  useEffect(() => {
    if (isPlaying && filteredItems.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [isPlaying, filteredItems.length, interval]);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToItem = (index: number) => {
    setCurrentIndex(index);
  };

  if (filteredItems.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No items found for the selected category.</p>
      </div>
    );
  }

  const currentItem = filteredItems[currentIndex];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Category Filter */}
      {showCategories && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category === 'all' ? 'All' : category}
            </button>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Image */}
          <div className="relative">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="w-full h-64 lg:h-80 object-cover rounded-lg"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentItem.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {currentItem.title}
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              {currentItem.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {currentItem.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={prevItem}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                aria-label="Previous item"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={togglePlayPause}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              
              <button
                onClick={nextItem}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                aria-label="Next item"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center pb-6">
          <div className="flex space-x-2">
            {filteredItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToItem(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to item ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;