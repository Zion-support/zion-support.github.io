import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TrendingUp, Star, Clock, Calendar, ArrowRight, X, Play, BookOpen, Download } from 'lucide-react';

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
  isPopular?: boolean;
  featured?: boolean;
}

interface UltraContentPromotionBannerProps {
  title: string;
  subtitle: string;
  description: string;
  content: ContentItem[];
  variant?: 'featured' | 'trending' | 'new' | 'popular';
  maxItems?: number;
  className?: string;
  autoRotate?: boolean;
  rotationInterval?: number;
}

const UltraContentPromotionBanner: React.FC<UltraContentPromotionBannerProps> = ({
  title,
  subtitle,
  description,
  content,
  variant = 'featured',
  maxItems = 6,
  className = '',
  autoRotate = true,
  rotationInterval = 6000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const displayedContent = content.slice(0, maxItems);

  useEffect(() => {
    if (!autoRotate || displayedContent.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % displayedContent.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [displayedContent.length, autoRotate, rotationInterval]);

  const getVariantStyles = () => {
    switch (variant) {
      case 'featured':
        return {
          gradient: 'from-purple-600 via-pink-600 to-red-600',
          accent: 'purple',
          icon: '⭐'
        };
      case 'trending':
        return {
          gradient: 'from-orange-600 via-red-600 to-pink-600',
          accent: 'orange',
          icon: '🔥'
        };
      case 'new':
        return {
          gradient: 'from-blue-600 via-indigo-600 to-purple-600',
          accent: 'blue',
          icon: '✨'
        };
      case 'popular':
        return {
          gradient: 'from-green-600 via-teal-600 to-cyan-600',
          accent: 'green',
          icon: '📈'
        };
      default:
        return {
          gradient: 'from-gray-600 via-gray-700 to-gray-800',
          accent: 'gray',
          icon: '📚'
        };
    }
  };

  const getStatusBadge = (item: ContentItem) => {
    if (item.isNew) return { text: 'New', color: 'bg-green-500' };
    if (item.isTrending) return { text: 'Trending', color: 'bg-orange-500' };
    if (item.isPopular) return { text: 'Popular', color: 'bg-blue-500' };
    if (item.featured) return { text: 'Featured', color: 'bg-purple-500' };
    return null;
  };

  const getTypeIcon = (type?: string) => {
    switch (type) {
      case 'Case Study':
        return <BookOpen className="w-4 h-4" />;
      case 'Free Download':
        return <Download className="w-4 h-4" />;
      default:
        return <Play className="w-4 h-4" />;
    }
  };

  if (!isVisible) return null;

  const styles = getVariantStyles();

  return (
    <div className={`relative bg-gradient-to-r ${styles.gradient} text-white overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4">
              <span className="text-2xl mr-2">{styles.icon}</span>
              <span className="text-sm font-medium">{subtitle}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {title}
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedContent.map((item, index) => {
              const statusBadge = getStatusBadge(item);
              
              return (
                <Link 
                  key={item.id} 
                  href={item.href} 
                  className="group"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 relative overflow-hidden">
                    {/* Status Badge */}
                    {statusBadge && (
                      <div className={`absolute top-4 right-4 ${statusBadge.color} text-white px-2 py-1 rounded-full text-xs font-medium`}>
                        {statusBadge.text}
                      </div>
                    )}

                    {/* Icon */}
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>

                    {/* Category */}
                    <div className="text-sm font-medium text-white/80 mb-2">
                      {item.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-yellow-300 transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/90 mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-white/75">
                      <div className="flex items-center gap-3">
                        {item.readTime && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {item.readTime}
                          </span>
                        )}
                        {item.type && (
                          <span className="flex items-center gap-1">
                            {getTypeIcon(item.type)}
                            {item.type}
                          </span>
                        )}
                      </div>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${hoveredItem === index ? 'opacity-100' : ''}`}></div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/content-showcase"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg inline-flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                Explore All Content
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-lg inline-flex items-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                View Latest Articles
              </Link>
            </div>
          </div>

          {/* Navigation Dots (if auto-rotating) */}
          {autoRotate && displayedContent.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
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
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/75 hover:text-white transition-colors z-20"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Progress Bar */}
        {autoRotate && displayedContent.length > 1 && (
          <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
            <div 
              className="h-full bg-white transition-all duration-1000 ease-linear"
              style={{ width: `${((currentIndex + 1) / displayedContent.length) * 100}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UltraContentPromotionBanner;