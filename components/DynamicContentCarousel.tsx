import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  category: string;
  readTime?: string;
  type?: string;
  isNew?: boolean;
  isTrending?: boolean;
  image?: string;
}

interface DynamicContentCarouselProps {
  content: ContentItem[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

export default function DynamicContentCarousel({
  content,
  autoPlay = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
  className = ''
}: DynamicContentCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!autoPlay || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === content.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, isHovered, content.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? content.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === content.length - 1 ? 0 : currentIndex + 1);
  };

  if (!content || content.length === 0) return null;

  const currentItem = content[currentIndex];

  return (
    <section className={`py-16 bg-gradient-to-r from-gray-50 to-blue-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">🔥 FEATURED CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Our Latest AI & Tech Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay ahead with expert analysis, real-world case studies, and actionable resources 
            that help you succeed in the AI-driven future.
          </p>
        </div>

        <div 
          className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-0">
            {/* Content Details */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">{currentItem.icon}</div>
                <div className="flex items-center gap-2">
                  {currentItem.isNew && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      NEW
                    </span>
                  )}
                  {currentItem.isTrending && (
                    <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      TRENDING
                    </span>
                  )}
                  <span className="text-sm text-gray-500">{currentItem.category}</span>
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {currentItem.title}
              </h3>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {currentItem.description}
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                {currentItem.readTime && (
                  <span className="text-sm text-gray-500">{currentItem.readTime}</span>
                )}
                {currentItem.type && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{currentItem.type}</span>
                  </>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentItem.href}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Read More →
                </Link>
                <Link
                  href="/content-showcase"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
                >
                  View All Content
                </Link>
              </div>
            </div>

            {/* Visual Element */}
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-8 md:p-12">
              <div className="text-8xl opacity-80">
                {currentItem.icon}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          {showArrows && content.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
                aria-label="Previous content"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
                aria-label="Next content"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {showDots && content.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {content.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-blue-600' 
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content Preview Grid */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">More Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.slice(0, 3).map((item, index) => (
              <Link
                key={item.id}
                href={item.href}
                className={`group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border ${
                  index === currentIndex ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'
                }`}
                onClick={() => goToSlide(index)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">{item.icon}</div>
                  <div className="flex items-center gap-2">
                    {item.isNew && (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                        NEW
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                        TRENDING
                      </span>
                    )}
                  </div>
                </div>
                
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  {item.title}
                </h4>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{item.category}</span>
                  {item.readTime && (
                    <span>{item.readTime}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}