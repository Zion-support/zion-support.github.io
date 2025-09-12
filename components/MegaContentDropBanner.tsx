import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource';
  featured: boolean;
  stats?: string;
}

const MegaContentDropBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const megaContent: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025 Breakthrough Innovations',
      description: 'Revolutionary AI technologies reshaping industries with quantum computing, neural interfaces, and autonomous systems.',
      href: '/blog/ai-2025-breakthrough-innovations',
      type: 'blog',
      featured: true,
      stats: '2.3k views'
    },
    {
      id: '2',
      title: 'AI Financial Services Transformation',
      description: 'Complete case study: How a major bank achieved 300% ROI and $2.3B in savings through strategic AI implementation.',
      href: '/case-studies/ai-financial-services-transformation-2025',
      type: 'case-study',
      featured: true,
      stats: '3.2k views'
    },
    {
      id: '3',
      title: 'AI Implementation Master Guide 2026',
      description: 'Complete 200+ page resource with frameworks, templates, and step-by-step strategies for successful AI adoption.',
      href: '/resources/ai-implementation-master-guide-2026',
      type: 'resource',
      featured: true,
      stats: '15k downloads'
    },
    {
      id: '4',
      title: 'AI Sustainability & Green Tech 2025',
      description: 'How AI is revolutionizing sustainability efforts and building a greener future for businesses and communities.',
      href: '/blog/ai-sustainability-green-tech-2025',
      type: 'blog',
      featured: true,
      stats: '1.8k views'
    },
    {
      id: '5',
      title: 'AI Robotics & Automation 2025',
      description: 'The future of intelligent machines and how advanced robotics are revolutionizing industries worldwide.',
      href: '/blog/ai-robotics-automation-2025',
      type: 'blog',
      featured: true,
      stats: '2.1k views'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % megaContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [megaContent.length]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
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
      case 'resource':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  if (!isVisible) return null;

  const currentContent = megaContent[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1 pr-8">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">{getTypeIcon(currentContent.type)}</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  {currentContent.type === 'case-study' ? 'CASE STUDY' : 
                   currentContent.type === 'resource' ? 'RESOURCE' : 'NEW ARTICLE'}
                </span>
                <span className="ml-3 text-sm opacity-75">{currentContent.stats}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {currentContent.title}
              </h3>
              <p className="text-lg text-indigo-100 mb-4">
                {currentContent.description}
              </p>
              <div className="flex items-center space-x-4">
                <Link 
                  href={currentContent.href}
                  className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                >
                  {currentContent.type === 'resource' ? 'Download Now' : 'Read More'}
                </Link>
                <Link 
                  href="/content-showcase"
                  className="text-white hover:text-indigo-200 transition-colors"
                >
                  View All Content →
                </Link>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex flex-col space-y-2">
              {megaContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
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
          className="h-full bg-white transition-all duration-4000 ease-linear"
          style={{ width: `${((currentIndex + 1) / megaContent.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default MegaContentDropBanner;