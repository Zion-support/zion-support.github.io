'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Star, Clock, Users, TrendingUp } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: 'blog' | 'case-study' | 'resource' | 'guide';
  readTime: string;
  publishDate: string;
  featured: boolean;
  tags: string[];
  href: string;
  image?: string;
}

const featuredContent: ContentItem[] = [
  {
    id: '1',
    title: 'AI Automation Trends 2025: The Future of Business Intelligence',
    description: 'Explore the latest AI automation trends that are reshaping industries in 2025. From intelligent process automation to predictive analytics.',
    category: 'blog',
    readTime: '12 min',
    publishDate: '2025-01-17',
    featured: true,
    tags: ['AI', 'Automation', 'Business Intelligence', '2025 Trends'],
    href: '/blog/ai-automation-trends-2025'
  },
  {
    id: '2',
    title: 'Sustainability & Green Tech Solutions 2025',
    description: 'Discover revolutionary green tech solutions transforming industries and helping organizations achieve environmental goals.',
    category: 'resource',
    readTime: '15 min',
    publishDate: '2025-01-17',
    featured: true,
    tags: ['Sustainability', 'Green Technology', 'Carbon Neutrality', 'ESG'],
    href: '/blog/sustainability-green-tech-2025'
  },
  {
    id: '3',
    title: 'AI Transformation in Manufacturing: 40% Efficiency Gains',
    description: 'Case study of how a Fortune 500 manufacturer achieved unprecedented efficiency gains through comprehensive AI implementation.',
    category: 'case-study',
    readTime: '10 min',
    publishDate: '2025-01-17',
    featured: true,
    tags: ['Manufacturing', 'AI Transformation', 'Case Study', 'Efficiency'],
    href: '/case-studies/ai-transformation-manufacturing'
  },
  {
    id: '4',
    title: 'Complete AI Implementation Guide 2025',
    description: 'Comprehensive guide covering everything from strategy development to full-scale deployment of AI solutions.',
    category: 'guide',
    readTime: '25 min',
    publishDate: '2025-01-17',
    featured: true,
    tags: ['AI Implementation', 'Strategy', 'Best Practices', 'Guide'],
    href: '/resources/ai-implementation-guide-2025'
  }
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'blog': return '📝';
    case 'case-study': return '📊';
    case 'resource': return '📚';
    case 'guide': return '📖';
    default: return '📄';
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'blog': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'case-study': return 'bg-green-100 text-green-800 border-green-200';
    case 'resource': return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'guide': return 'bg-orange-100 text-orange-800 border-orange-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export default function EnhancedContentPromotionBanner2025() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredContent.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? featuredContent.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === featuredContent.length - 1 ? 0 : currentIndex + 1);
  };

  const currentContent = featuredContent[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-white opacity-10 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4 backdrop-blur-sm">
            <Star className="w-4 h-4 mr-2 text-yellow-300" />
            <span className="text-sm font-medium">🌟 MASSIVE CONTENT DROP - JANUARY 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            🎉 50+ New AI Resources Just Released!
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-6 max-w-4xl mx-auto leading-relaxed">
            Discover groundbreaking content: AI Breakthrough Innovations 2025, Sustainability & Green Tech Solutions, 
            Robotics & Automation Guides, plus exclusive case studies and implementation blueprints.
          </p>
        </div>

        {/* Featured Content Carousel */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <h3 className="text-2xl font-bold">Featured Content</h3>
              <div className="flex space-x-1">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-yellow-300' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={goToPrevious}
                className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{getCategoryIcon(currentContent.category)}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(currentContent.category)}`}>
                  {currentContent.category.replace('-', ' ').toUpperCase()}
                </span>
                {currentContent.featured && (
                  <span className="px-2 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-semibold">
                    ⭐ FEATURED
                  </span>
                )}
              </div>
              
              <h4 className="text-2xl font-bold text-white">
                {currentContent.title}
              </h4>
              
              <p className="text-gray-200 leading-relaxed">
                {currentContent.description}
              </p>

              <div className="flex items-center space-x-4 text-sm text-gray-300">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{currentContent.readTime} read</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>Published {currentContent.publishDate}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {currentContent.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-white bg-opacity-20 rounded-full text-xs text-white"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <Link
                href={currentContent.href}
                className="inline-block bg-gradient-to-r from-yellow-400 to-pink-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-pink-300 transition-all transform hover:scale-105 shadow-lg"
              >
                Read Now →
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl p-8 text-center">
                <TrendingUp className="w-16 h-16 mx-auto mb-4 text-white" />
                <h5 className="text-xl font-bold mb-2">Content Statistics</h5>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yellow-300">50+</div>
                    <div className="text-sm text-gray-200">New Articles</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-300">15</div>
                    <div className="text-sm text-gray-200">Case Studies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-300">25</div>
                    <div className="text-sm text-gray-200">Resources</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-300">10</div>
                    <div className="text-sm text-gray-200">Guides</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content-showcase"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              🚀 Explore All New Content
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all text-lg"
            >
              📖 Browse Latest Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all text-lg"
            >
              📚 Download Resources
            </Link>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-300 mb-4">
              Join 10,000+ professionals who are transforming their businesses with AI
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-300 hover:to-blue-400 transition-all"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}