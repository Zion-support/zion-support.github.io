'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ContentCarouselProps {
  items?: Array<{
    id: number;
    title: string;
    description: string;
    image?: string;
    category?: string;
  }>;
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({ 
  items = [
    {
      id: 1,
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge AI technology',
      category: 'AI'
    },
    {
      id: 2,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure for modern businesses',
      category: 'Cloud'
    },
    {
      id: 3,
      title: 'Cybersecurity',
      description: 'Protect your business from evolving cyber threats',
      category: 'Security'
    },
    {
      id: 4,
      title: 'Data Analytics',
      description: 'Unlock insights from your data with advanced analytics',
      category: 'Analytics'
    },
    {
      id: 5,
      title: 'Mobile Development',
      description: 'Create powerful mobile applications for any platform',
      category: 'Mobile'
    },
    {
      id: 6,
      title: 'Automation',
      description: 'Streamline processes with intelligent automation',
      category: 'Automation'
    }
  ]
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Featured Solutions</h2>
          
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="bg-white/10 rounded-lg p-8 mx-2">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-cyan-400">
                          {item.title.charAt(0)}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      {item.category && (
                        <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-cyan-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;