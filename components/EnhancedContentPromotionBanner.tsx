import React from 'react';
import Link from 'next/link';

interface ContentItem {
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
  variant?: 'default' | 'featured' | 'trending';
  maxItems?: number;
  className?: string;
}

export default function EnhancedContentPromotionBanner({
  title,
  subtitle,
  description,
  content,
  variant = 'default',
  maxItems = 6,
  className = ''
}: EnhancedContentPromotionBannerProps) {
  const displayedContent = content.slice(0, maxItems);
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'featured':
        return 'bg-gradient-to-r from-purple-600 via-pink-600 to-red-600';
      case 'trending':
        return 'bg-gradient-to-r from-orange-600 via-red-600 to-pink-600';
      default:
        return 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600';
    }
  };

  const getBadgeStyles = () => {
    switch (variant) {
      case 'featured':
        return 'bg-white bg-opacity-20 text-white';
      case 'trending':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-white bg-opacity-20 text-white';
    }
  };

  return (
    <section className={`py-20 ${getVariantStyles()} text-white relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center rounded-full px-6 py-2 mb-6 ${getBadgeStyles()}`}>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:underline">
                  {item.title}
                </h3>
                <p className="text-sm opacity-90 mb-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-xs opacity-75">
                  <div className="flex items-center gap-2">
                    <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
                      {item.category}
                    </span>
                    {item.isNew && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                        New
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs">
                        Trending
                      </span>
                    )}
                  </div>
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

        {/* Action Buttons */}
        <div className="text-center">
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
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              📋 Download Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}