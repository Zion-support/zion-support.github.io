import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  readTime?: string;
  category?: string;
  isNew?: boolean;
  isTrending?: boolean;
}

interface ContentShowcaseProps {
  title: string;
  subtitle: string;
  items: ContentItem[];
  variant?: 'default' | 'gradient' | 'dark';
  showViewAll?: boolean;
  viewAllHref?: string;
  columns?: 2 | 3 | 4;
}

export default function ContentShowcase({
  title,
  subtitle,
  items,
  variant = 'default',
  showViewAll = true,
  viewAllHref = '/blog',
  columns = 3
}: ContentShowcaseProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white';
      case 'dark':
        return 'bg-gray-900 text-white';
      default:
        return 'bg-gray-50';
    }
  };

  const getCardClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 border border-white border-opacity-20';
      case 'dark':
        return 'bg-gray-800 hover:bg-gray-700 border border-gray-700';
      default:
        return 'bg-white hover:bg-gray-50 border border-gray-200';
    }
  };

  const getTextClasses = () => {
    switch (variant) {
      case 'gradient':
      case 'dark':
        return 'text-white';
      default:
        return 'text-gray-900';
    }
  };

  const getSubtextClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'text-white opacity-90';
      case 'dark':
        return 'text-gray-300';
      default:
        return 'text-gray-600';
    }
  };

  const getGridClasses = () => {
    switch (columns) {
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 4:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <section className={`py-16 ${getVariantClasses()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${getTextClasses()}`}>
            {title}
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${getSubtextClasses()}`}>
            {subtitle}
          </p>
        </div>

        <div className={`grid ${getGridClasses()} gap-6 mb-8`}>
          {items.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className={`p-6 rounded-xl transition-all duration-300 ${getCardClasses()}`}>
                <div className="flex items-start gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {item.isNew && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                      {item.isTrending && (
                        <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                          TRENDING
                        </span>
                      )}
                      {item.category && (
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          variant === 'gradient' || variant === 'dark' 
                            ? 'bg-white bg-opacity-20' 
                            : 'bg-gray-100'
                        }`}>
                          {item.category}
                        </span>
                      )}
                    </div>
                    <h3 className={`text-lg font-semibold mb-2 group-hover:underline ${getTextClasses()}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm mb-3 ${getSubtextClasses()}`}>
                      {item.description}
                    </p>
                    {item.readTime && (
                      <div className={`flex items-center text-xs ${getSubtextClasses()}`}>
                        <span>{item.readTime}</span>
                        {item.isNew && (
                          <>
                            <span className="mx-2">•</span>
                            <span>New</span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center">
            <Link
              href={viewAllHref}
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-colors ${
                variant === 'gradient' || variant === 'dark'
                  ? 'bg-white text-indigo-600 hover:bg-gray-100'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              View All Content
              <span>→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}