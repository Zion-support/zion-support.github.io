import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource' | 'service';
  featured: boolean;
  category: string;
  readTime?: string;
  icon: string;
}

const EnhancedContentPromotionBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025 Quantum Computing Breakthrough',
      description: 'Revolutionary quantum AI applications achieving unprecedented results in drug discovery, finance, and climate modeling.',
      href: '/blog/ai-2025-quantum-computing-breakthrough',
      type: 'blog',
      featured: true,
      category: 'AI & Technology',
      readTime: '15 min read',
      icon: '⚡'
    },
    {
      id: '2',
      title: 'AI Workforce Transformation 2025',
      description: 'Complete reskilling guide with proven strategies for thriving in the AI-powered economy. 85M jobs displaced, 97M created.',
      href: '/blog/ai-workforce-transformation-2025',
      type: 'blog',
      featured: true,
      category: 'Career & Strategy',
      readTime: '18 min read',
      icon: '👥'
    },
    {
      id: '3',
      title: 'AI Manufacturing Success: $200M Savings',
      description: 'Fortune 500 case study showing how autonomous AI systems achieved 60% faster processing and 40% cost reduction.',
      href: '/case-studies/ai-autonomous-manufacturing-success-2025',
      type: 'case-study',
      featured: true,
      category: 'Case Study',
      readTime: '12 min read',
      icon: '🏭'
    },
    {
      id: '4',
      title: 'AI Implementation Master Guide 2026',
      description: '200+ page comprehensive resource with frameworks, templates, and step-by-step implementation instructions.',
      href: '/resources/ai-implementation-master-guide-2026',
      type: 'resource',
      featured: true,
      category: 'Free Resource',
      readTime: '200+ pages',
      icon: '📚'
    },
    {
      id: '5',
      title: 'AI Enterprise Automation Services',
      description: 'Transform your business with cutting-edge AI automation. 90% faster processing, 60% cost reduction guaranteed.',
      href: '/services/ai-automation',
      type: 'service',
      featured: true,
      category: 'Service',
      readTime: 'Get Quote',
      icon: '🚀'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredContent.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [featuredContent.length]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'from-blue-500 to-cyan-500';
      case 'case-study':
        return 'from-green-500 to-emerald-500';
      case 'resource':
        return 'from-purple-500 to-pink-500';
      case 'service':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog':
        return 'New Article';
      case 'case-study':
        return 'Case Study';
      case 'resource':
        return 'Free Resource';
      case 'service':
        return 'Service';
      default:
        return 'Content';
    }
  };

  if (!isVisible) return null;

  const currentContent = featuredContent[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1 pr-8">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">{currentContent.icon}</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  {getTypeLabel(currentContent.type)}
                </span>
                <span className="ml-3 text-sm opacity-75">{currentContent.category}</span>
              </div>
              <h3 className="text-3xl font-bold mb-3">
                {currentContent.title}
              </h3>
              <p className="text-lg text-indigo-100 mb-6 max-w-2xl">
                {currentContent.description}
              </p>
              <div className="flex items-center space-x-4">
                <Link 
                  href={currentContent.href}
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors text-lg"
                >
                  {currentContent.type === 'resource' ? 'Download Free' : 
                   currentContent.type === 'service' ? 'Get Started' : 'Read More'}
                </Link>
                <Link 
                  href="/content-showcase"
                  className="text-white hover:text-indigo-200 transition-colors font-medium"
                >
                  View All Content →
                </Link>
              </div>
              <div className="mt-4 text-sm opacity-75">
                {currentContent.readTime} • Featured Content
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex flex-col space-y-3">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/75 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
        <div 
          className="h-full bg-white transition-all duration-6000 ease-linear"
          style={{ width: `${((currentIndex + 1) / featuredContent.length) * 100}%` }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-white/5 rounded-full animate-pulse delay-2000"></div>
    </div>
  );
};

export default EnhancedContentPromotionBanner;