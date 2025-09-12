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
  maxItems = 4,
  className = ''
}: EnhancedContentPromotionBannerProps) {
  const displayedContent = content.slice(0, maxItems);
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'featured':
        return {
          container: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600',
          badge: 'bg-white bg-opacity-20',
          badgeText: 'text-white',
          title: 'text-white',
          subtitle: 'text-white',
          description: 'text-white opacity-90',
          button: 'bg-white text-indigo-600 hover:bg-gray-100',
          buttonOutline: 'border-2 border-white text-white hover:bg-white hover:text-indigo-600',
          card: 'bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20',
          cardText: 'text-white',
          cardSubtext: 'text-white opacity-75'
        };
      case 'trending':
        return {
          container: 'bg-gradient-to-r from-orange-600 via-red-600 to-pink-600',
          badge: 'bg-white bg-opacity-20',
          badgeText: 'text-white',
          title: 'text-white',
          subtitle: 'text-white',
          description: 'text-white opacity-90',
          button: 'bg-white text-orange-600 hover:bg-gray-100',
          buttonOutline: 'border-2 border-white text-white hover:bg-white hover:text-orange-600',
          card: 'bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20',
          cardText: 'text-white',
          cardSubtext: 'text-white opacity-75'
        };
      default:
        return {
          container: 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600',
          badge: 'bg-white bg-opacity-20',
          badgeText: 'text-white',
          title: 'text-white',
          subtitle: 'text-white',
          description: 'text-white opacity-90',
          button: 'bg-white text-blue-600 hover:bg-gray-100',
          buttonOutline: 'border-2 border-white text-white hover:bg-white hover:text-blue-600',
          card: 'bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20',
          cardText: 'text-white',
          cardSubtext: 'text-white opacity-75'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <section className={`py-20 ${styles.container} text-white relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center ${styles.badge} rounded-full px-6 py-2 mb-6`}>
            <span className={`text-sm font-medium ${styles.badgeText}`}>{subtitle}</span>
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${styles.title}`}>
            {title}
          </h2>
          
          <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed ${styles.description}`}>
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content-showcase"
              className={`px-10 py-4 rounded-lg font-semibold transition-colors text-lg shadow-lg ${styles.button}`}
            >
              🎯 Explore All Content
            </Link>
            <Link
              href="/blog"
              className={`px-10 py-4 rounded-lg font-semibold transition-colors text-lg ${styles.buttonOutline}`}
            >
              📚 Read Latest Articles
            </Link>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className={`${styles.card} p-6 rounded-xl transition-all duration-300 border border-white border-opacity-20`}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${styles.cardText}`}>
                  {item.title}
                </h3>
                <p className={`text-sm mb-3 ${styles.cardSubtext}`}>
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    {item.isNew && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        NEW
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        TRENDING
                      </span>
                    )}
                    <span className={styles.cardSubtext}>{item.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.readTime && (
                      <span className={styles.cardSubtext}>{item.readTime}</span>
                    )}
                    {item.type && (
                      <>
                        <span className={styles.cardSubtext}>•</span>
                        <span className={styles.cardSubtext}>{item.type}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <Link
            href="/resources"
            className={`px-8 py-3 rounded-lg font-semibold transition-colors inline-block mr-4 ${styles.button}`}
          >
            📋 Download Free Resources
          </Link>
          <Link
            href="/case-studies"
            className={`px-8 py-3 rounded-lg font-semibold transition-colors inline-block ${styles.buttonOutline}`}
          >
            📊 View Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}