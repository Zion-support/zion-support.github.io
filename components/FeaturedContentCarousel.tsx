import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
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

interface FeaturedContentCarouselProps {
  content: ContentItem[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export default function FeaturedContentCarousel({
  content,
  autoPlay = true,
  interval = 5000,
  className = ''
}: FeaturedContentCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || content.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, content.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  if (content.length === 0) return null;

  const currentItem = content[currentIndex];

  return (
    <div className={`relative ${className}`}>
      {/* Main Content Display */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">✨ FEATURED CONTENT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🚀 Fresh AI & Tech Insights
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover our latest expert insights, case studies, and resources. 
              From AI enterprise transformation to startup funding strategies.
            </p>
          </div>

          {/* Featured Item */}
          <Link href={currentItem.href} className="group block">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="text-8xl mb-4 group-hover:scale-110 transition-transform">
                    {currentItem.icon}
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                      {currentItem.category}
                    </span>
                    {currentItem.isNew && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                        New
                      </span>
                    )}
                    {currentItem.isTrending && (
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                        Trending
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:underline">
                    {currentItem.title}
                  </h3>
                  <p className="text-lg opacity-90 mb-6 leading-relaxed">
                    {currentItem.description}
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-4 text-sm opacity-75">
                    {currentItem.readTime && <span>{currentItem.readTime}</span>}
                    {currentItem.type && (
                      <>
                        <span>•</span>
                        <span>{currentItem.type}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Navigation Arrows */}
          {content.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
                aria-label="Previous content"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
                aria-label="Next content"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Dots Indicator */}
      {content.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-indigo-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Action Buttons */}
      <div className="text-center mt-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/content-showcase"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            🎯 Explore All Content
          </Link>
          <Link
            href="/blog"
            className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
          >
            📚 Read Latest Articles
          </Link>
          <Link
            href="/resources"
            className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
          >
            📋 Download Resources
          </Link>
        </div>
      </div>
    </div>
  );
}