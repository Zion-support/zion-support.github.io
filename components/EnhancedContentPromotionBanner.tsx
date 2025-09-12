import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource' | 'webinar';
  url: string;
  image?: string;
  publishedDate: string;
  readTime?: string;
  featured?: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-transformation-2025',
    title: 'AI Transformation in 2025: The Complete Guide',
    description: 'Discover the latest AI transformation trends, strategies, and implementation guides for 2025.',
    type: 'blog',
    url: '/blog/ai-transformation-2025',
    publishedDate: '2025-01-15',
    readTime: '10 min read',
    featured: true
  },
  {
    id: 'edge-computing-future',
    title: 'Edge Computing: The Future of Distributed Intelligence',
    description: 'Explore the revolutionary potential of edge computing in 2025 and how it\'s transforming industries.',
    type: 'blog',
    url: '/blog/edge-computing-future',
    publishedDate: '2025-01-12',
    readTime: '8 min read',
    featured: true
  },
  {
    id: 'ai-automation-manufacturing',
    title: 'AI Automation Success: 40% Efficiency Gain',
    description: 'Real case study showing how AI automation delivered 40% efficiency gains in manufacturing.',
    type: 'case-study',
    url: '/case-studies/ai-automation-manufacturing',
    publishedDate: '2025-01-10',
    readTime: '12 min read',
    featured: true
  },
  {
    id: 'ai-implementation-guide',
    title: 'Complete AI Implementation Guide 2025',
    description: 'Master AI implementation with our comprehensive step-by-step guide and best practices.',
    type: 'resource',
    url: '/resources/ai-implementation-guide',
    publishedDate: '2025-01-08',
    readTime: '25 min read',
    featured: true
  }
];

const typeColors = {
  blog: 'bg-blue-100 text-blue-800 border-blue-200',
  'case-study': 'bg-green-100 text-green-800 border-green-200',
  resource: 'bg-purple-100 text-purple-800 border-purple-200',
  webinar: 'bg-orange-100 text-orange-800 border-orange-200'
};

const typeIcons = {
  blog: '📝',
  'case-study': '📊',
  resource: '📚',
  webinar: '🎥'
};

export default function EnhancedContentPromotionBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentItem = contentItems[currentIndex];

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-6">
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-2xl">✨</span>
              <span className="text-sm font-semibold uppercase tracking-wide opacity-90">
                New Content Available
              </span>
            </div>
            
            <h3 className="text-xl font-bold mb-2 line-clamp-2">
              {currentItem.title}
            </h3>
            
            <p className="text-blue-100 text-sm mb-3 line-clamp-2">
              {currentItem.description}
            </p>
            
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-lg">{typeIcons[currentItem.type]}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${typeColors[currentItem.type]}`}>
                  {currentItem.type.replace('-', ' ').toUpperCase()}
                </span>
              </div>
              <span className="opacity-75">{currentItem.readTime}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <Link
              href={currentItem.url}
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center whitespace-nowrap"
            >
              Read Now
            </Link>
            <Link
              href="/content-showcase"
              className="border border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center whitespace-nowrap"
            >
              View All
            </Link>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 text-white hover:text-blue-200 transition-colors"
            aria-label="Close banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex space-x-2 mt-4">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to content ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 right-4 opacity-20">
        <div className="w-16 h-16 border-2 border-white rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-4 left-4 opacity-20">
        <div className="w-8 h-8 border-2 border-white rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}