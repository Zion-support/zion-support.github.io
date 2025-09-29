import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Eye, Clock, Star, ArrowRight, Flame, BookOpen, Zap } from 'lucide-react';

interface TrendingContentBannerProps {
  className?: string;
  autoRotate?: boolean;
  rotationInterval?: number;
}

interface TrendingItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  views: string;
  link: string;
  isNew?: boolean;
  isHot?: boolean;
}

export const TrendingContentBanner: React.FC<TrendingContentBannerProps> = ({
  className = '',
  autoRotate = true,
  rotationInterval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const trendingContent: TrendingItem[] = [
    {
      id: 'ai-ethics-implementation',
      title: 'AI Ethics Implementation Framework: From Principles to Practice',
      category: 'AI Ethics',
      readTime: '4 min read',
      views: '2.3K views',
      link: '/blog/ai-ethics-business-implementation-guide',
      isNew: true,
      isHot: true
    },
    {
      id: 'iot-security-best-practices',
      title: 'IoT Security: Comprehensive Best Practices for 2025',
      category: 'IoT Security',
      readTime: '16 min read',
      views: '1.8K views',
      link: '/blog/iot-security-best-practices-2025',
      isNew: true,
      isHot: true
    },
    {
      id: 'quantum-computing-business',
      title: 'Quantum Computing in Business: Real Applications Beyond the Hype',
      category: 'Quantum Computing',
      readTime: '11 min read',
      views: '3.1K views',
      link: '/blog/quantum-computing-business-applications-2025',
      isHot: true
    },
    {
      id: 'edge-ai-revolution',
      title: 'Edge AI: The Computing Revolution Happening at the Edge',
      category: 'Edge Computing',
      readTime: '13 min read',
      views: '2.7K views',
      link: '/blog/edge-computing-ai-revolution-2025',
      isNew: true
    },
    {
      id: 'zero-trust-security',
      title: 'Zero Trust Security: The New Standard for Enterprise Protection',
      category: 'Cybersecurity',
      readTime: '14 min read',
      views: '4.2K views',
      link: '/blog/cybersecurity-zero-trust-2025',
      isHot: true
    }
  ];

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % trendingContent.length
      );
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotationInterval, trendingContent.length]);

  const currentItem = trendingContent[currentIndex];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI Ethics': 'bg-blue-100 text-blue-800',
      'IoT Security': 'bg-green-100 text-green-800',
      'Quantum Computing': 'bg-purple-100 text-purple-800',
      'Edge Computing': 'bg-orange-100 text-orange-800',
      'Cybersecurity': 'bg-red-100 text-red-800',
      'AI & Automation': 'bg-indigo-100 text-indigo-800',
      'Data Analytics': 'bg-teal-100 text-teal-800',
      'Platform Engineering': 'bg-yellow-100 text-yellow-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className={`bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded-lg">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">🔥 Trending Now</h3>
            <p className="text-sm text-gray-600">Most popular content this week</p>
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="flex gap-1">
          {trendingContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-red-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative overflow-hidden">
        <div className="transition-all duration-500 ease-in-out">
          <div className="flex items-start gap-4">
            {/* Content info */}
            <div className="flex-1">
              {/* Badges */}
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(currentItem.category)}`}>
                  {currentItem.category}
                </span>
                {currentItem.isNew && (
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    NEW
                  </span>
                )}
                {currentItem.isHot && (
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 flex items-center gap-1">
                  <Flame className="w-3 h-3" />
                    HOT
                  </span>
                )}
              </div>

              {/* Title */}
              <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                {currentItem.title}
              </h4>

              {/* Meta info */}
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{currentItem.views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{currentItem.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span>4.8</span>
                </div>
              </div>

              {/* CTA */}
              <Link
                to={currentItem.link}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <BookOpen className="w-4 h-4" />
                Read Article
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trending indicator */}
            <div className="flex flex-col items-center gap-2">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-full">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-red-600">#{currentIndex + 1}</div>
                <div className="text-xs text-gray-500">Trending</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section - Quick access to all trending */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">More trending content:</span>
          </div>
          <Link
            to="/trending"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1"
          >
            View All Trending
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        
        {/* Quick preview of other trending items */}
        <div className="flex gap-2 mt-3 overflow-x-auto">
          {trendingContent.slice(0, 3).map((item, index) => (
            <Link
              key={item.id}
              to={item.link}
              className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                index === currentIndex 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {item.category}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingContentBanner;