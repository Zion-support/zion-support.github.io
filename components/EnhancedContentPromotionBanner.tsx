import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  featured: boolean;
  publishDate: string;
  readTime: string;
  category: string;
}

const EnhancedContentPromotionBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent: ContentItem[] = [
    {
      id: 'quantum-ai-breakthrough',
      title: 'Quantum AI Breakthrough: Revolutionary Computing Meets AI',
      description: 'Explore the groundbreaking convergence of quantum computing and AI, unlocking unprecedented computational power.',
      type: 'blog',
      url: '/blog/ai-2025-quantum-ai-breakthrough',
      featured: true,
      publishDate: '2025-01-17',
      readTime: '8 min read',
      category: 'Quantum Technology'
    },
    {
      id: 'advanced-ai-agents',
      title: 'Advanced AI Agents: The Future of Autonomous Operations',
      description: 'Discover how advanced AI agents are revolutionizing business operations with autonomous decision-making.',
      type: 'blog',
      url: '/blog/ai-2025-advanced-ai-agents',
      featured: true,
      publishDate: '2025-01-17',
      readTime: '10 min read',
      category: 'AI Technology'
    },
    {
      id: 'fintech-unicorn',
      title: 'Fintech Unicorn: $3.2B Valuation Through AI Innovation',
      description: 'How a fintech startup achieved unicorn status through strategic AI implementation across their platform.',
      type: 'case-study',
      url: '/case-studies/ai-2025-fintech-unicorn-transformation',
      featured: true,
      publishDate: '2025-01-17',
      readTime: '12 min read',
      category: 'Success Story'
    },
    {
      id: 'implementation-checklist',
      title: 'AI Implementation Master Checklist 2025',
      description: 'The definitive step-by-step checklist for successfully implementing AI solutions in 2025.',
      type: 'resource',
      url: '/resources/ai-2025-implementation-master-checklist',
      featured: true,
      publishDate: '2025-01-17',
      readTime: '15 min read',
      category: 'Implementation Guide'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
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

  const currentContent = featuredContent[currentIndex];

  return (
    <div className="relative overflow-hidden">
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${getTypeColor(currentContent.type)} text-white py-8 relative`}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-1">
                  <span className="text-sm font-medium">🚀 FRESH CONTENT</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-1">
                  <span className="text-sm font-medium">{getTypeIcon(currentContent.type)} {currentContent.category}</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-1">
                  <span className="text-sm font-medium">⏱️ {currentContent.readTime}</span>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                {currentContent.title}
              </h2>
              
              <p className="text-lg opacity-90 mb-6 max-w-3xl">
                {currentContent.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Read Now
                </Link>
                <Link
                  href="/content-showcase"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center"
                >
                  Explore All Content
                </Link>
              </div>
            </div>
            
            {/* Content Preview Cards */}
            <div className="hidden lg:block ml-8">
              <div className="grid grid-cols-2 gap-3">
                {featuredContent.slice(0, 4).map((item, index) => (
                  <div
                    key={item.id}
                    className={`bg-white bg-opacity-20 rounded-lg p-3 cursor-pointer transition-all ${
                      index === currentIndex ? 'bg-white bg-opacity-30 scale-105' : 'hover:bg-white hover:bg-opacity-25'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm">{getTypeIcon(item.type)}</span>
                      <span className="text-xs font-medium">{item.category}</span>
                    </div>
                    <h4 className="text-sm font-semibold line-clamp-2">{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Progress Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {featuredContent.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Trending Topics Bar */}
      <div className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <span className="text-sm font-medium text-gray-300">🔥 Trending Now:</span>
              <div className="flex space-x-4 text-sm">
                <span className="bg-red-600 px-3 py-1 rounded-full">Quantum AI</span>
                <span className="bg-blue-600 px-3 py-1 rounded-full">AI Agents</span>
                <span className="bg-green-600 px-3 py-1 rounded-full">Fintech AI</span>
                <span className="bg-purple-600 px-3 py-1 rounded-full">Implementation</span>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentPromotionBanner;