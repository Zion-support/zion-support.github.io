import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  category: string;
  readTime?: string;
  type?: string;
  isNew?: boolean;
  isTrending?: boolean;
}

interface EnhancedContentPromotionBannerProps {
  title: string;
  subtitle: string;
  description: string;
  content: ContentItem[];
  variant?: 'featured' | 'trending' | 'latest';
  maxItems?: number;
}

const EnhancedContentPromotionBanner: React.FC<EnhancedContentPromotionBannerProps> = ({
  title,
  subtitle,
  description,
  content,
  variant = 'featured',
  maxItems = 6
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const displayedContent = content.slice(0, maxItems);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % displayedContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [displayedContent.length]);

  const getVariantStyles = () => {
    switch (variant) {
      case 'featured':
        return 'from-indigo-600 via-purple-600 to-pink-600';
      case 'trending':
        return 'from-orange-600 via-red-600 to-pink-600';
      case 'latest':
        return 'from-emerald-600 via-teal-600 to-cyan-600';
      default:
        return 'from-indigo-600 via-purple-600 to-pink-600';
    }
  };

  const getBadgeColor = (item: ContentItem) => {
    if (item.isNew) return 'bg-green-100 text-green-800';
    if (item.isTrending) return 'bg-orange-100 text-orange-800';
    return 'bg-blue-100 text-blue-800';
  };

  const getBadgeText = (item: ContentItem) => {
    if (item.isNew) return 'NEW';
    if (item.isTrending) return 'TRENDING';
    return 'FEATURED';
  };

  if (!isVisible) return null;

  return (
    <div className={`relative bg-gradient-to-r ${getVariantStyles()} text-white overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">✨ {subtitle}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {title}
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/content-showcase"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                🎯 Explore All Content
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
              >
                📚 Read Latest Articles
              </Link>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedContent.map((item, index) => (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(item)}`}>
                      {getBadgeText(item)}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-90 mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs opacity-75">
                    <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-2">
                      {item.readTime && <span>{item.readTime}</span>}
                      {item.type && (
                        <>
                          <span>•</span>
                          <span>{item.type}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mb-6">
            {displayedContent.map((_, index) => (
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

          {/* Additional Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/blog" className="text-white hover:text-indigo-200 transition-colors">
                📝 All Articles
              </Link>
              <Link href="/case-studies" className="text-white hover:text-indigo-200 transition-colors">
                📊 Case Studies
              </Link>
              <Link href="/resources" className="text-white hover:text-indigo-200 transition-colors">
                📋 Resources
              </Link>
              <Link href="/services" className="text-white hover:text-indigo-200 transition-colors">
                🚀 Services
              </Link>
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
          style={{ width: `${((currentIndex + 1) / displayedContent.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default EnhancedContentPromotionBanner;