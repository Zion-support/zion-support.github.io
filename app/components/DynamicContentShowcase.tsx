'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Pause, RotateCcw, Star, Users, Award, Zap } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  featured: boolean;
  stats?: {
    value: string;
    label: string;
  }[];
  tags: string[];
}

interface DynamicContentShowcaseProps {
  title?: string;
  description?: string;
  items: ContentItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showControls?: boolean;
  variant?: 'carousel' | 'grid' | 'masonry';
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  title = 'Featured Content',
  description = 'Discover our latest innovations and success stories',
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
  showControls = true,
  variant = 'carousel'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, items.length, autoPlayInterval]);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetToFirst = () => {
    setCurrentIndex(0);
    setIsPlaying(true);
  };

  const renderCarousel = () => (
    <div className="relative">
      <div
        className="relative overflow-hidden rounded-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8 max-w-4xl">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                      {item.featured && (
                        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold mb-6">{item.title}</h3>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">{item.description}</p>
                    
                    {item.stats && (
                      <div className="flex justify-center gap-8 mb-8">
                        {item.stats.map((stat, index) => (
                          <div key={index} className="text-center">
                            <div className="text-3xl font-bold">{stat.value}</div>
                            <div className="text-sm text-gray-300">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-white/20 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      {showControls && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevItem}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ArrowRight className="w-5 h-5 text-white rotate-180" />
          </button>
          
          <button
            onClick={togglePlayPause}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white" />
            )}
          </button>

          <button
            onClick={resetToFirst}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <RotateCcw className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={nextItem}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>
      )}

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );

  const renderGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
        >
          <div className="relative h-48 bg-gradient-to-br from-purple-500 to-blue-600">
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium text-white">
                {item.category}
              </span>
              {item.featured && (
                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                  Featured
                </span>
              )}
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-300 mb-4">{item.description}</p>
            
            {item.stats && (
              <div className="flex gap-4 mb-4">
                {item.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {variant === 'carousel' ? renderCarousel() : renderGrid()}
      </div>
    </section>
  );
};

export default DynamicContentShowcase;