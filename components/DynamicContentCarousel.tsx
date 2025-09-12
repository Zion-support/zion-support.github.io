import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'case-study' | 'resource';
  readTime: string;
  href: string;
  icon: string;
  badge: string;
  badgeColor: string;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI Enterprise Implementation Masterclass',
    description: 'Complete 45-minute guide to implementing AI in enterprise environments with proven strategies.',
    type: 'article',
    readTime: '45 min read',
    href: '/blog/ai-2025-enterprise-implementation-masterclass',
    icon: '🎓',
    badge: 'NEW',
    badgeColor: 'bg-green-100 text-green-800'
  },
  {
    id: '2',
    title: 'AI Market Disruption Analysis 2025',
    description: 'How AI is reshaping every industry with real impact data and market insights.',
    type: 'article',
    readTime: '25 min read',
    href: '/blog/ai-2025-market-disruption-analysis',
    icon: '📈',
    badge: 'TRENDING',
    badgeColor: 'bg-red-100 text-red-800'
  },
  {
    id: '3',
    title: 'Fortune 500 AI Transformation Success',
    description: '$50M savings and 300% ROI in 18 months - complete case study.',
    type: 'case-study',
    readTime: '20 min read',
    href: '/case-studies/ai-transformation-fortune-500-breakthrough-2025',
    icon: '🏆',
    badge: 'HOT',
    badgeColor: 'bg-blue-100 text-blue-800'
  },
  {
    id: '4',
    title: 'AI Implementation Master Checklist',
    description: '150+ actionable items for successful AI deployment with detailed guidance.',
    type: 'resource',
    readTime: 'Free Download',
    href: '/resources/ai-2025-implementation-master-checklist',
    icon: '📋',
    badge: 'POPULAR',
    badgeColor: 'bg-purple-100 text-purple-800'
  },
  {
    id: '5',
    title: 'AI Retail Transformation 2025',
    description: '$50M revenue increase and 40% customer satisfaction improvement through AI.',
    type: 'case-study',
    readTime: '15 min read',
    href: '/case-studies/ai-retail-transformation-2025',
    icon: '🛍️',
    badge: 'NEW',
    badgeColor: 'bg-green-100 text-green-800'
  },
  {
    id: '6',
    title: 'AI Workforce Transformation Playbook',
    description: '150+ pages of templates, checklists, and strategies for workforce transformation.',
    type: 'resource',
    readTime: '2 hours',
    href: '/resources/ai-workforce-transformation-playbook-2025',
    icon: '👥',
    badge: 'FREE',
    badgeColor: 'bg-yellow-100 text-yellow-800'
  }
];

export default function DynamicContentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative">
      <div className="text-center mb-8">
        <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full px-6 py-2 mb-4">
          <span className="text-sm font-medium">🔥 TRENDING NOW</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Latest AI Insights & Resources
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay ahead with our latest articles, case studies, and implementation guides.
        </p>
      </div>

      <div 
        className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <Link href={currentItem.href} className="group block">
          <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center relative">
            <div className="text-8xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {currentItem.icon}
            </div>
            <div className={`absolute top-6 left-6 ${currentItem.badgeColor} px-3 py-1 rounded-full text-sm font-medium`}>
              {currentItem.badge}
            </div>
            <div className="absolute top-6 right-6 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
              {currentItem.readTime}
            </div>
          </div>
          <div className="p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                currentItem.type === 'article' ? 'bg-blue-100 text-blue-800' :
                currentItem.type === 'case-study' ? 'bg-green-100 text-green-800' :
                'bg-purple-100 text-purple-800'
              }`}>
                {currentItem.type === 'article' ? 'Article' : 
                 currentItem.type === 'case-study' ? 'Case Study' : 'Resource'}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
              {currentItem.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {currentItem.description}
            </p>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Read More</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
              <div className="text-sm text-gray-400">
                {currentIndex + 1} of {contentItems.length}
              </div>
            </div>
          </div>
        </Link>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {contentItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-blue-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Quick Access Grid */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Quick Access</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {contentItems.slice(0, 4).map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              className={`p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                index === currentIndex 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <h4 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2">
                {item.title}
              </h4>
              <div className={`inline-block px-2 py-1 rounded text-xs font-medium ${item.badgeColor}`}>
                {item.badge}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <Link
          href="/content-showcase"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          View All Content
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}