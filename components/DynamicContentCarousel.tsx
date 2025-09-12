import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  readTime: string;
  image: string;
  featured: boolean;
  isNew: boolean;
  stats?: {
    views?: number;
    likes?: number;
    shares?: number;
  };
}

const DynamicContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'neural-architecture-optimization',
      title: 'Neural Architecture Optimization: The Next Frontier',
      description: 'Explore how neural architecture search is revolutionizing AI efficiency, reducing costs by 90% while improving performance.',
      href: '/blog/ai-2025-neural-architecture-optimization',
      category: 'AI Optimization',
      readTime: '15 min read',
      image: '🧠',
      featured: true,
      isNew: true,
      stats: { views: 12500, likes: 890, shares: 234 }
    },
    {
      id: 'space-exploration-breakthrough',
      title: 'AI-Powered Space Exploration: The Next Giant Leap',
      description: 'Discover how AI is revolutionizing space exploration, from autonomous spacecraft to Mars colonization and beyond.',
      href: '/blog/ai-2025-space-exploration-breakthrough',
      category: 'Space Technology',
      readTime: '18 min read',
      image: '🚀',
      featured: true,
      isNew: true,
      stats: { views: 18900, likes: 1200, shares: 456 }
    },
    {
      id: 'global-logistics-transformation',
      title: 'Global Logistics Transformation: 40% Cost Reduction',
      description: 'Fortune 500 case study showing how AI revolutionized supply chain operations with $2.3B annual savings.',
      href: '/case-studies/ai-2025-global-logistics-transformation',
      category: 'Case Study',
      readTime: '12 min read',
      image: '📦',
      featured: true,
      isNew: true,
      stats: { views: 15600, likes: 1100, shares: 312 }
    },
    {
      id: 'ai-implementation-masterclass',
      title: 'AI Implementation Masterclass: Complete Guide',
      description: 'Master enterprise AI implementation with our comprehensive guide covering strategy, technology, and ROI optimization.',
      href: '/resources/ai-2025-comprehensive-implementation-masterclass',
      category: 'Masterclass',
      readTime: '45 min read',
      image: '🎓',
      featured: true,
      isNew: true,
      stats: { views: 22100, likes: 1500, shares: 678 }
    },
    {
      id: 'enterprise-ai-transformation',
      title: 'Enterprise AI Transformation 2025',
      description: 'Complete implementation guide with real-world case studies and proven strategies for enterprise AI adoption.',
      href: '/blog/ai-2025-enterprise-ai-transformation',
      category: 'Enterprise AI',
      readTime: '12 min read',
      image: '🏢',
      featured: true,
      isNew: false,
      stats: { views: 18900, likes: 1200, shares: 456 }
    },
    {
      id: 'healthcare-diagnosis-revolution',
      title: 'AI Healthcare Diagnosis Revolution',
      description: 'Discover how AI is transforming medical diagnosis with 67% reduction in errors and 40-60% accuracy improvements.',
      href: '/blog/ai-healthcare-diagnosis-revolution-2025',
      category: 'Healthcare AI',
      readTime: '15 min read',
      image: '🏥',
      featured: true,
      isNew: false,
      stats: { views: 25600, likes: 1800, shares: 789 }
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, contentItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI Optimization': 'from-blue-500 to-blue-600',
      'Space Technology': 'from-purple-500 to-purple-600',
      'Case Study': 'from-green-500 to-green-600',
      'Masterclass': 'from-orange-500 to-orange-600',
      'Enterprise AI': 'from-indigo-500 to-indigo-600',
      'Healthcare AI': 'from-pink-500 to-pink-600'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Featured Content</h2>
            <p className="text-gray-600">Discover our most popular and trending AI resources</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                isAutoPlaying
                  ? 'bg-green-100 text-green-800 hover:bg-green-200'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {isAutoPlaying ? 'Pause' : 'Play'}
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Main Content */}
        <div className="relative h-96 overflow-hidden">
          {contentItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentSlide
                  ? 'translate-x-0'
                  : index < currentSlide
                  ? '-translate-x-full'
                  : 'translate-x-full'
              }`}
            >
              <div className="h-full flex">
                {/* Content */}
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(item.category)} text-white`}>
                        {item.category}
                      </span>
                      {item.isNew && (
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                          NEW
                        </span>
                      )}
                      {item.featured && (
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                          FEATURED
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 mb-6">
                      {item.description}
                    </p>

                    {/* Stats */}
                    {item.stats && (
                      <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
                        <div className="flex items-center">
                          <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          {formatNumber(item.stats.views)} views
                        </div>
                        <div className="flex items-center">
                          <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          {formatNumber(item.stats.likes)} likes
                        </div>
                        <div className="flex items-center">
                          <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                          </svg>
                          {formatNumber(item.stats.shares)} shares
                        </div>
                      </div>
                    )}

                    <div className="flex items-center space-x-4">
                      <Link
                        href={item.href}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Read Article
                      </Link>
                      <span className="text-gray-500">{item.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className="w-80 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="text-8xl">{item.image}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
        >
          <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
        >
          <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="p-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Access</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {contentItems.slice(0, 4).map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              className={`p-4 rounded-lg border-2 transition-all ${
                index === currentSlide
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="text-2xl mb-2">{item.image}</div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
                {item.title}
              </h4>
              <p className="text-xs text-gray-500">{item.readTime}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentCarousel;