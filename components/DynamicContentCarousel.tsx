import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  category: string;
  readTime?: string;
  pages?: string;
  icon: string;
  href: string;
  featured?: boolean;
  new?: boolean;
  trending?: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-2025-predictions',
    title: 'AI 2025: Year Ahead Predictions',
    description: 'Comprehensive predictions for breakthrough technologies and market trends in 2025',
    type: 'blog',
    category: 'AI Predictions',
    readTime: '25 min read',
    icon: '🔮',
    href: '/blog/ai-2025-year-ahead-predictions',
    featured: true,
    new: true
  },
  {
    id: 'ai-workforce-transformation',
    title: 'AI Workforce Transformation 2025',
    description: 'Complete reskilling strategies and workforce development guide for the AI era',
    type: 'blog',
    category: 'Workforce Development',
    readTime: '18 min read',
    icon: '👥',
    href: '/blog/ai-workforce-transformation-2025',
    featured: true,
    new: true
  },
  {
    id: 'ai-sustainability-case-study',
    title: 'AI Sustainability Transformation',
    description: '60% energy reduction and carbon neutrality achieved through AI-powered solutions',
    type: 'case-study',
    category: 'Sustainability Success',
    icon: '🌱',
    href: '/case-studies/ai-sustainability-transformation-2025',
    featured: true,
    new: true
  },
  {
    id: 'ai-workforce-playbook',
    title: 'AI Workforce Transformation Playbook',
    description: '150+ page complete implementation guide with templates and strategies',
    type: 'resource',
    category: 'Free Download',
    pages: '150+ pages',
    icon: '📚',
    href: '/resources/ai-workforce-transformation-playbook-2025',
    featured: true,
    new: true
  },
  {
    id: 'ai-innovation-trends',
    title: 'AI Innovation Trends 2025',
    description: 'Quantum AI, neuromorphic computing, and breakthrough technologies',
    type: 'blog',
    category: 'AI Innovation',
    readTime: '25 min read',
    icon: '🚀',
    href: '/blog/ai-innovation-trends-2025',
    trending: true
  },
  {
    id: 'ai-cybersecurity-2025',
    title: 'AI Cybersecurity Trends 2025',
    description: 'Protect your digital assets with cutting-edge AI security strategies',
    type: 'blog',
    category: 'Cybersecurity',
    readTime: '28 min read',
    icon: '🛡️',
    href: '/blog/ai-cybersecurity-2025',
    new: true
  },
  {
    id: 'ai-multimodal-applications',
    title: 'AI Multimodal Applications 2025',
    description: 'Beyond text to vision, audio, and beyond - the future of AI',
    type: 'blog',
    category: 'AI Technology',
    readTime: '15 min read',
    icon: '🎭',
    href: '/blog/ai-multimodal-applications-2025',
    new: true
  },
  {
    id: 'ai-implementation-master-guide',
    title: 'AI Implementation Master Guide',
    description: '150-page complete blueprint for AI success in your organization',
    type: 'resource',
    category: 'Free Download',
    pages: '150+ pages',
    icon: '📋',
    href: '/resources/ai-implementation-master-guide-2025',
    trending: true
  }
];

export default function DynamicContentCarousel() {
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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === contentItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? contentItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog':
        return 'Article';
      case 'case-study':
        return 'Case Study';
      case 'resource':
        return 'Resource';
      default:
        return 'Content';
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      
      <div className="relative p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">✨ FRESH CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest AI & Tech Insights
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover our newest articles, case studies, and resources. 
            Fresh content published weekly to keep you ahead of the curve.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Content Display */}
          <div className="relative h-96 overflow-hidden rounded-xl">
            {contentItems.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0'
                    : index < currentIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="h-full bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 flex flex-col md:flex-row items-center gap-8">
                  {/* Content Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                        {getTypeLabel(item.type)}
                      </div>
                      {item.new && (
                        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          NEW
                        </div>
                      )}
                      {item.trending && (
                        <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          TRENDING
                        </div>
                      )}
                      {item.featured && (
                        <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          FEATURED
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                    <p className="text-lg opacity-90 mb-6 leading-relaxed">{item.description}</p>
                    
                    <div className="flex items-center gap-4 mb-6">
                      {item.readTime && (
                        <span className="text-sm opacity-75">{item.readTime}</span>
                      )}
                      {item.pages && (
                        <span className="text-sm opacity-75">{item.pages}</span>
                      )}
                      <span className="text-sm opacity-75">•</span>
                      <span className="text-sm opacity-75">{item.category}</span>
                    </div>
                    
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      {item.type === 'resource' ? 'Download' : 'Read More'}
                      <span>→</span>
                    </Link>
                  </div>
                  
                  {/* Icon Display */}
                  <div className="text-8xl opacity-80">
                    {item.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-white'
                      : 'bg-white bg-opacity-40 hover:bg-opacity-60'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="mt-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View All Articles
            </Link>
            <Link
              href="/case-studies"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Case Studies
            </Link>
            <Link
              href="/resources"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Download Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}