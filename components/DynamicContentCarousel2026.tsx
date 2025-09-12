'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  badge: string;
  badgeColor: string;
  link: string;
  image: string;
  stats?: {
    value: string;
    label: string;
  };
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI 2026 Breakthrough Content Showcase',
    description: 'Discover revolutionary AI breakthroughs, case studies, and implementation guides that are transforming businesses worldwide.',
    category: 'Showcase',
    badge: 'BREAKTHROUGH',
    badgeColor: 'bg-gradient-to-r from-blue-500 to-purple-500',
    link: '/ai-2026-breakthrough-content-showcase',
    image: '🧠',
    stats: {
      value: '5000%',
      label: 'Average ROI'
    }
  },
  {
    id: '2',
    title: 'Global Enterprise Transformation Success',
    description: 'Learn how Fortune 500 companies achieved 5000% ROI through our revolutionary AI implementation strategies.',
    category: 'Case Study',
    badge: '5000% ROI',
    badgeColor: 'bg-gradient-to-r from-green-500 to-emerald-500',
    link: '/case-studies/ai-2026-global-enterprise-transformation-breakthrough',
    image: '🏢',
    stats: {
      value: '$2.5B',
      label: 'Revenue Increase'
    }
  },
  {
    id: '3',
    title: 'Ultimate Implementation Master Guide',
    description: 'Complete step-by-step guide to implementing AI solutions in 2026 with templates, checklists, and proven strategies.',
    category: 'Resource',
    badge: 'ESSENTIAL',
    badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
    link: '/resources/ai-2026-ultimate-implementation-master-guide',
    image: '📚',
    stats: {
      value: '150+',
      label: 'Templates'
    }
  },
  {
    id: '4',
    title: 'Neural Interface Revolution',
    description: 'Explore cutting-edge brain-computer interfaces and neural augmentation technologies changing human-AI interaction.',
    category: 'Innovation',
    badge: 'REVOLUTIONARY',
    badgeColor: 'bg-gradient-to-r from-indigo-500 to-blue-500',
    link: '/blog/ai-2026-neural-interface-revolution',
    image: '⚡',
    stats: {
      value: '99.7%',
      label: 'Accuracy'
    }
  },
  {
    id: '5',
    title: 'Quantum AI Fusion Breakthrough',
    description: 'Discover how quantum computing is revolutionizing AI capabilities and enabling breakthrough performance improvements.',
    category: 'Technology',
    badge: 'QUANTUM',
    badgeColor: 'bg-gradient-to-r from-cyan-500 to-teal-500',
    link: '/blog/ai-2026-quantum-ai-fusion',
    image: '⚛️',
    stats: {
      value: '8000%',
      label: 'Performance Gain'
    }
  },
  {
    id: '6',
    title: 'AI ROI Calculator 2026',
    description: 'Calculate your potential ROI from AI implementation with our advanced calculator based on real-world success data.',
    category: 'Tool',
    badge: 'FREE TOOL',
    badgeColor: 'bg-gradient-to-r from-orange-500 to-red-500',
    link: '/tools/ai-2026-roi-calculator',
    image: '💰',
    stats: {
      value: '24/7',
      label: 'Available'
    }
  }
];

export default function DynamicContentCarousel2026() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold mb-4 animate-pulse">
            🚀 NEW CONTENT 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest breakthroughs, case studies, and implementation guides that are transforming businesses worldwide.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Content Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-4xl">{currentItem.image}</span>
                  <div>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-semibold ${currentItem.badgeColor}`}>
                      {currentItem.badge}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{currentItem.category}</div>
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {currentItem.title}
                </h3>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {currentItem.description}
                </p>

                {currentItem.stats && (
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {currentItem.stats.value}
                    </div>
                    <div className="text-gray-600 font-semibold">
                      {currentItem.stats.label}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href={currentItem.link}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Explore Content
                  </Link>
                  <button 
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
                  >
                    {isAutoPlaying ? 'Pause' : 'Play'} Auto
                  </button>
                </div>
              </div>

              {/* Visual Element */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-6">{currentItem.image}</div>
                  <div className="text-2xl font-bold mb-4">AI 2026</div>
                  <div className="text-lg opacity-90">Breakthrough Content</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Quick Access to All Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentItems.slice(0, 6).map((item, index) => (
              <Link
                key={item.id}
                href={item.link}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 ${
                  index === currentIndex ? 'border-blue-500' : 'border-gray-100'
                }`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">{item.image}</span>
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-white text-xs font-semibold ${item.badgeColor}`}>
                    {item.badge}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with AI Breakthroughs</h3>
            <p className="text-xl mb-8 opacity-90">
              Get the latest AI innovations, case studies, and implementation guides delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}