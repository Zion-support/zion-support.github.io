'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  path: string;
  image: string;
  featured: boolean;
  stats?: {
    views: number;
    engagement: number;
  };
}

const ContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-enterprise-transformation-2025',
      title: 'AI Enterprise Transformation: $50M Annual Savings Blueprint',
      description: 'Discover how Fortune 500 companies achieve $50M annual savings, 95% process automation, and 300% ROI through comprehensive AI transformation strategies.',
      category: 'Success Story',
      readTime: '50 min read',
      date: '2025-01-28',
      path: '/blog/ai-enterprise-transformation-2025',
      image: '💰',
      featured: true,
      stats: { views: 18750, engagement: 97 }
    },
    {
      id: 'ai-2025-2026-mega-trends-breakthrough',
      title: 'AI 2025-2026 Mega Trends Breakthrough: Revolutionary Enterprise Transformation',
      description: 'Discover the groundbreaking AI trends and breakthroughs that will revolutionize enterprise operations in 2025-2026.',
      category: 'Mega Trends',
      readTime: '15 min read',
      date: '2025-01-15',
      path: '/blog/ai-2025-2026-mega-trends-breakthrough',
      image: '🚀',
      featured: true,
      stats: { views: 12500, engagement: 94 }
    },
    {
      id: 'ai-2026-autonomous-enterprise-architecture',
      title: 'AI 2026: Autonomous Enterprise Architecture Revolution',
      description: 'Revolutionary autonomous enterprise architecture transforming business operations with self-healing systems and predictive infrastructure.',
      category: 'Architecture',
      readTime: '12 min read',
      date: '2026-01-15',
      path: '/blog/ai-2026-autonomous-enterprise-architecture',
      image: '🏗️',
      featured: true,
      stats: { views: 8900, engagement: 91 }
    },
    {
      id: 'ai-2026-autonomous-agent-factories',
      title: 'AI 2026: Autonomous Agent Factories Revolution',
      description: 'Revolutionary autonomous agent factories transforming business operations with self-managing AI systems.',
      category: 'AI Agents',
      readTime: '18 min read',
      date: '2026-02-01',
      path: '/blog/ai-2026-autonomous-agent-factories',
      image: '🤖',
      featured: true,
      stats: { views: 7200, engagement: 88 }
    },
    {
      id: 'ai-cost-optimization-breakthrough-2026',
      title: 'AI Cost Optimization Breakthrough 2026',
      description: 'Revolutionary cost optimization strategies delivering 90% reduction in operational expenses through intelligent AI systems.',
      category: 'Cost Optimization',
      readTime: '20 min read',
      date: '2026-03-01',
      path: '/blog/ai-cost-optimization-breakthrough-2026',
      image: '💡',
      featured: true,
      stats: { views: 9800, engagement: 92 }
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [contentItems.length, isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-playing after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const _currentItem = contentItems[currentIndex];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Content Spotlight
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our most popular and impactful content that's transforming enterprises worldwide
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main carousel content */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image/Visual section */}
              <div className="relative h-64 lg:h-96 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">{currentItem.image}</div>
                  <div className="text-2xl font-bold mb-2">{currentItem.category}</div>
                  <div className="text-lg opacity-90">{currentItem.readTime}</div>
                </div>
                
                {/* Stats overlay */}
                {currentItem.stats && (
                  <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        {formatNumber(currentItem.stats.views)}
                      </div>
                      <div className="text-sm text-white opacity-90">views</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Content section */}
              <div className="p-8 lg:p-12">
                <div className="h-full flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                      {currentItem.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {currentItem.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {currentItem.description}
                  </p>

                  {/* Stats */}
                  {currentItem.stats && (
                    <div className="flex space-x-6 mb-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600">
                          {formatNumber(currentItem.stats.views)}
                        </div>
                        <div className="text-sm text-gray-500">Views</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                          {currentItem.stats.engagement}%
                        </div>
                        <div className="text-sm text-gray-500">Engagement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">
                          {currentItem.readTime}
                        </div>
                        <div className="text-sm text-gray-500">Read Time</div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center space-x-4">
                    <Link
                      href={currentItem.path}
                      className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
                    >
                      Read Full Article
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    
                    <Link
                      href="/blog"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      View All Articles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous content"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next content"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-indigo-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center text-sm text-gray-500">
            <div className={`w-2 h-2 rounded-full mr-2 ${isAutoPlaying ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            {isAutoPlaying ? 'Auto-playing' : 'Paused'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;