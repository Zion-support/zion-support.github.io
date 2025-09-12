import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource' | 'tool';
  category: string;
  readTime: string;
  icon: string;
  featured: boolean;
}

const EnhancedContentPromotionBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'Advanced AI Architecture 2025',
      description: 'Master the latest AI architecture patterns for 2025. Learn about microservices, MLOps, vector databases, and production deployment strategies that scale.',
      href: '/blog/ai-2025-advanced-ai-architecture',
      type: 'blog',
      category: 'Architecture',
      readTime: '25 min read',
      icon: '🏗️',
      featured: true
    },
    {
      id: '2',
      title: 'AI Cybersecurity Revolution 2025',
      description: 'Discover the latest AI cybersecurity threats and defense strategies for 2025. Learn about adversarial attacks, AI-powered security tools, and enterprise protection frameworks.',
      href: '/blog/ai-2025-cybersecurity-revolution',
      type: 'blog',
      category: 'Security',
      readTime: '22 min read',
      icon: '🛡️',
      featured: true
    },
    {
      id: '3',
      title: '$200M Manufacturing Success Case Study',
      description: 'How a Fortune 500 manufacturing giant transformed their operations with autonomous AI systems, achieving unprecedented cost savings and efficiency gains.',
      href: '/case-studies/ai-autonomous-manufacturing-success-2025',
      type: 'case-study',
      category: 'Manufacturing',
      readTime: '18 min read',
      icon: '💰',
      featured: true
    },
    {
      id: '4',
      title: 'AI Implementation Master Guide 2026',
      description: 'The most comprehensive AI implementation guide available. 200+ pages of proven frameworks, checklists, templates, and step-by-step strategies.',
      href: '/resources/ai-implementation-master-guide-2026',
      type: 'resource',
      category: 'Implementation',
      readTime: '200+ pages',
      icon: '📚',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'from-blue-500 to-cyan-500';
      case 'case-study':
        return 'from-green-500 to-emerald-500';
      case 'resource':
        return 'from-purple-500 to-pink-500';
      case 'tool':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Architecture':
        return 'bg-blue-100 text-blue-800';
      case 'Security':
        return 'bg-red-100 text-red-800';
      case 'Manufacturing':
        return 'bg-green-100 text-green-800';
      case 'Implementation':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isVisible) return null;

  const currentItem = contentItems[currentIndex];

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
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{currentItem.icon}</span>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(currentItem.category)}`}>
                    {currentItem.category}
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    {currentItem.type === 'case-study' ? 'Case Study' : 
                     currentItem.type === 'resource' ? 'Resource' : 'Article'}
                  </span>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold mb-4 group-hover:underline">
                {currentItem.title}
              </h3>
              
              <p className="text-xl text-indigo-100 mb-6 leading-relaxed">
                {currentItem.description}
              </p>
              
              <div className="flex items-center space-x-6">
                <Link 
                  href={currentItem.href}
                  className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all duration-300 text-lg shadow-lg transform hover:scale-105"
                >
                  Read More
                </Link>
                <Link 
                  href="/content-showcase"
                  className="text-white hover:text-indigo-200 transition-colors font-medium text-lg"
                >
                  View All Content →
                </Link>
              </div>
              
              <div className="mt-6 flex items-center text-sm opacity-75">
                <span>{currentItem.readTime}</span>
                <span className="mx-2">•</span>
                <span>Featured Content</span>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex flex-col space-y-3">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white scale-125 shadow-lg' 
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
          className="absolute top-6 right-6 text-white/75 hover:text-white transition-colors p-2"
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
          style={{ width: `${((currentIndex + 1) / contentItems.length) * 100}%` }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
    </div>
  );
};

export default EnhancedContentPromotionBanner;