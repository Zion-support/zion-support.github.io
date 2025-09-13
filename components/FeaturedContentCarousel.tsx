import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface FeaturedItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'service' | 'resource';
  category: string;
  readTime: string;
  isNew: boolean;
  image: string;
  featured: boolean;
}

const FeaturedContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredItems: FeaturedItem[] = [
    {
      id: '1',
      title: 'AI Neural Architecture Revolution 2025',
      description: 'Discover how revolutionary neural architectures are transforming AI capabilities with 40% improvement in long-context understanding and exponential speedup potential.',
      href: '/blog/ai-2025-neural-architecture-revolution',
      type: 'blog',
      category: 'AI Architecture',
      readTime: '25 min',
      isNew: true,
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: '2',
      title: 'AI Manufacturing Transformation: $200M Success',
      description: 'Complete case study: How a Fortune 500 manufacturer achieved 300% ROI and $200M savings through comprehensive AI transformation.',
      href: '/case-studies/ai-manufacturing-transformation-2025',
      type: 'case-study',
      category: 'Case Study',
      readTime: '35 min',
      isNew: true,
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: '3',
      title: 'Quantum Machine Learning 2025',
      description: 'Explore how quantum computing is revolutionizing machine learning with exponential speedup potential, quantum neural networks, and breakthrough applications.',
      href: '/blog/ai-2025-quantum-machine-learning',
      type: 'blog',
      category: 'Quantum AI',
      readTime: '28 min',
      isNew: true,
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: '4',
      title: 'AI Ethical Governance Framework 2025',
      description: 'Comprehensive guide to building trustworthy AI systems with bias mitigation, transparency, regulatory compliance, and responsible AI development.',
      href: '/blog/ai-2025-ethical-governance-framework',
      type: 'blog',
      category: 'AI Ethics',
      readTime: '32 min',
      isNew: true,
      image: '/api/placeholder/600/400',
      featured: true
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredItems.length, isAutoPlaying]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'service':
        return '🚀';
      case 'resource':
        return '📚';
      default:
        return '✨';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'from-blue-500 to-cyan-500';
      case 'case-study':
        return 'from-green-500 to-emerald-500';
      case 'service':
        return 'from-purple-500 to-pink-500';
      case 'resource':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Architecture':
        return 'bg-blue-100 text-blue-800';
      case 'Quantum AI':
        return 'bg-purple-100 text-purple-800';
      case 'AI Ethics':
        return 'bg-green-100 text-green-800';
      case 'Case Study':
        return 'bg-emerald-100 text-emerald-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredItems.length) % featuredItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = featuredItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl">⭐</span>
              <h2 className="text-3xl md:text-4xl font-bold">Featured Content</h2>
              <span className="text-4xl">⭐</span>
            </div>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Discover our most popular and impactful AI resources, carefully curated to help you stay ahead of the curve.
            </p>
          </div>

          <div className="relative">
            {/* Main Content */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{getTypeIcon(currentItem.type)}</span>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(currentItem.category)}`}>
                        {currentItem.category}
                      </span>
                      {currentItem.isNew && (
                        <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                          NEW
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    {currentItem.title}
                  </h3>
                  
                  <p className="text-lg text-indigo-100 mb-6 leading-relaxed">
                    {currentItem.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm opacity-75">⏱️ {currentItem.readTime} read</span>
                    <span className="text-sm opacity-75">•</span>
                    <span className="text-sm opacity-75">📅 Just Published</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href={currentItem.href}
                      className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                    >
                      {currentItem.type === 'resource' ? 'Download Now' : 'Read More'}
                    </Link>
                    <Link 
                      href="/content-showcase"
                      className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-indigo-600 transition-all duration-300 text-center"
                    >
                      View All Content
                    </Link>
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className="flex-shrink-0">
                  <div className="w-80 h-48 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-6xl opacity-50">{getTypeIcon(currentItem.type)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevSlide}
                className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {featuredItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Auto-play Toggle */}
            <div className="flex items-center justify-center mt-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  isAutoPlaying 
                    ? 'bg-white/20 text-white' 
                    : 'bg-white/10 text-white/75'
                }`}
              >
                {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContentCarousel;