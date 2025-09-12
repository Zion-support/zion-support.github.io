import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource';
  readTime: string;
  value?: string;
  icon: string;
  gradient: string;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-agents',
    title: 'Advanced AI Agents Revolution',
    description: 'Autonomous intelligence systems with 300-500% efficiency improvements',
    href: '/blog/ai-2025-advanced-ai-agents',
    type: 'blog',
    readTime: '15 min',
    icon: '🤖',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing Revolution',
    description: '10,000x speedups with breakthrough quantum algorithms',
    href: '/blog/quantum-computing-business-revolution-2025',
    type: 'blog',
    readTime: '18 min',
    icon: '⚡',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'fortune-500-success',
    title: '$3.2B Quantum AI Success',
    description: 'Fortune 500 transformation with 45% efficiency gains',
    href: '/case-studies/ai-2025-fortune-500-quantum-transformation',
    type: 'case-study',
    readTime: '12 min',
    value: '$3.2B',
    icon: '🏆',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'ai-governance',
    title: 'Enterprise AI Governance',
    description: 'Complete ethical AI framework with 340% ROI',
    href: '/blog/ai-2025-enterprise-ai-governance',
    type: 'blog',
    readTime: '25 min',
    icon: '🏛️',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'multimodal-ai',
    title: 'Multimodal AI Revolution',
    description: '300% accuracy boost with vision, audio & sensor fusion',
    href: '/blog/ai-2025-multimodal-revolution',
    type: 'blog',
    readTime: '28 min',
    icon: '👁️',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 'retail-transformation',
    title: '$2.8B Retail Transformation',
    description: 'Fortune 100 success story with global scale',
    href: '/case-studies/ai-2025-global-retail-transformation-success',
    type: 'case-study',
    readTime: '20 min',
    value: '$2.8B',
    icon: '🛒',
    gradient: 'from-orange-500 to-red-500'
  }
];

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

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Article';
      case 'case-study': return 'Case Study';
      case 'resource': return 'Resource';
      default: return 'Content';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium text-white">🚀 FEATURED CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Latest AI Insights & Success Stories
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover cutting-edge AI technologies, implementation strategies, and real-world transformations 
            that are reshaping industries in 2025.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(currentItem.type)}`}>
                  {getTypeLabel(currentItem.type)}
                </div>
                <div className="text-white/70 text-sm">{currentItem.readTime} read</div>
                {currentItem.value && (
                  <div className="text-green-400 text-sm font-semibold">{currentItem.value} Value</div>
                )}
              </div>

              <div className="text-6xl mb-4">{currentItem.icon}</div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {currentItem.title}
              </h3>
              
              <p className="text-lg text-white/90 mb-6">
                {currentItem.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentItem.href}
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Read Full {getTypeLabel(currentItem.type)}
                </Link>
                <Link
                  href="/content-showcase"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
                >
                  Explore All Content
                </Link>
              </div>
            </div>

            {/* Content Grid Preview */}
            <div className="grid grid-cols-2 gap-4">
              {contentItems.slice(0, 4).map((item, index) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`group relative overflow-hidden rounded-xl p-4 transition-all duration-300 ${
                    index === currentIndex ? 'ring-2 ring-white/50' : 'hover:ring-2 hover:ring-white/30'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                  <div className="relative z-10">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h4 className="text-sm font-semibold text-white mb-1 line-clamp-2">
                      {item.title}
                    </h4>
                    <div className="text-xs text-white/80">
                      {item.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Content Indicators */}
        <div className="flex justify-center space-x-2 mb-6">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-white/80 text-sm">Articles</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-white">25+</div>
            <div className="text-white/80 text-sm">Case Studies</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-white">$6B+</div>
            <div className="text-white/80 text-sm">Value Created</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-white">10K+</div>
            <div className="text-white/80 text-sm">Readers</div>
          </div>
        </div>

        {/* Close Button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Close banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}