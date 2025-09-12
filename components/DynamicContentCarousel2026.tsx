'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  url: string;
  featured: boolean;
  publishDate: string;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI 2026 Technology Showcase',
    description: 'Explore revolutionary AI technologies including neural interfaces, quantum computing, and autonomous systems.',
    category: 'Technology',
    image: '🧠',
    url: '/ai-2026-technology-showcase',
    featured: true,
    publishDate: '2026-01-15'
  },
  {
    id: '2',
    title: 'Global Manufacturing AI Transformation',
    description: 'How a Fortune 500 company achieved 300% efficiency gains and $2.3B in cost savings through AI.',
    category: 'Case Study',
    image: '🏭',
    url: '/case-studies/ai-2026-global-manufacturing-transformation-success',
    featured: true,
    publishDate: '2026-01-12'
  },
  {
    id: '3',
    title: 'AI 2026 Implementation Toolkit',
    description: 'Complete implementation guide with checklists, templates, and best practices for AI success.',
    category: 'Resource',
    image: '🛠️',
    url: '/resources/ai-2026-implementation-toolkit',
    featured: true,
    publishDate: '2026-01-10'
  },
  {
    id: '4',
    title: 'Neural Interface Breakthrough',
    description: 'Direct brain-computer interfaces enabling seamless human-AI collaboration with unprecedented speed.',
    category: 'Blog',
    image: '⚡',
    url: '/blog/ai-2026-neural-interface-breakthrough',
    featured: false,
    publishDate: '2026-01-08'
  },
  {
    id: '5',
    title: 'Quantum Machine Learning Revolution',
    description: 'Quantum computing meets AI to solve previously impossible problems with exponential speed improvements.',
    category: 'Blog',
    image: '⚛️',
    url: '/blog/ai-2026-quantum-machine-learning-revolution',
    featured: false,
    publishDate: '2026-01-05'
  },
  {
    id: '6',
    title: 'AI Ethics & Governance Framework',
    description: 'Comprehensive frameworks ensuring responsible AI development and deployment across all industries.',
    category: 'Resource',
    image: '⚖️',
    url: '/resources/ai-2025-ethical-governance-framework',
    featured: false,
    publishDate: '2026-01-03'
  }
];

export default function DynamicContentCarousel2026() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === contentItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === contentItems.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? contentItems.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technology': return 'bg-blue-100 text-blue-800';
      case 'Case Study': return 'bg-green-100 text-green-800';
      case 'Resource': return 'bg-purple-100 text-purple-800';
      case 'Blog': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest AI 2026 Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our newest articles, case studies, and resources featuring cutting-edge AI technologies and real-world implementations.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main carousel */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {contentItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    {/* Content */}
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(item.category)}`}>
                          {item.category}
                        </span>
                        {item.featured && (
                          <span className="ml-3 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-sm font-semibold">
                            ⭐ Featured
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {item.title}
                      </h3>
                      
                      <p className="text-lg text-gray-600 mb-6">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-6">
                        <span>📅 Published: {new Date(item.publishDate).toLocaleDateString()}</span>
                      </div>
                      
                      <Link 
                        href={item.url}
                        className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        Read More
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>

                    {/* Visual */}
                    <div className="flex items-center justify-center">
                      <div className="text-9xl opacity-20">
                        {item.image}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'} Auto-advance
            </button>
          </div>
        </div>

        {/* Quick access grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Quick Access to All Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentItems.slice(0, 6).map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                  <div className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity">
                    {item.image}
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center text-xs text-gray-500">
                  <span>📅 {new Date(item.publishDate).toLocaleDateString()}</span>
                  {item.featured && (
                    <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                      Featured
                    </span>
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