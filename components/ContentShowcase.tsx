import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  readTime?: string;
  type: 'blog' | 'case-study' | 'resource';
  isNew?: boolean;
  isTrending?: boolean;
}

interface ContentShowcaseProps {
  title: string;
  subtitle: string;
  items: ContentItem[];
  variant?: 'default' | 'featured' | 'compact';
  showViewAll?: boolean;
  viewAllHref?: string;
}

export default function ContentShowcase({
  title,
  subtitle,
  items,
  variant = 'default',
  showViewAll = true,
  viewAllHref = '/blog'
}: ContentShowcaseProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog':
        return 'Article';
      case 'case-study':
        return 'Case Study';
      case 'resource':
        return 'Resource';
      default:
        return 'Content';
    }
  };

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{subtitle}</p>
        <div className="space-y-4">
          {items.slice(0, 3).map((item, index) => (
            <Link key={index} href={item.href} className="group block">
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-2xl">{item.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </span>
                    {item.isNew && (
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-red-100 text-red-800">
                        New
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-orange-100 text-orange-800">
                        Trending
                      </span>
                    )}
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  {item.readTime && (
                    <div className="text-xs text-gray-500 mt-1">{item.readTime}</div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
        {showViewAll && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <Link
              href={viewAllHref}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              View All →
            </Link>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">✨ FEATURED CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90 mb-3">{item.description}</p>
                <div className="flex items-center justify-between text-xs opacity-75">
                  <span>{getTypeLabel(item.type)}</span>
                  <div className="flex items-center gap-2">
                    {item.readTime && <span>{item.readTime}</span>}
                    {item.isNew && <span className="bg-red-500 text-white px-2 py-1 rounded">New</span>}
                    {item.isTrending && <span className="bg-orange-500 text-white px-2 py-1 rounded">Trending</span>}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {showViewAll && (
          <div className="text-center mt-8">
            <Link
              href={viewAllHref}
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              View All Content
            </Link>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Link key={index} href={item.href} className="group">
            <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">{item.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </span>
                    {item.isNew && (
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-red-100 text-red-800">
                        New
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-orange-100 text-orange-800">
                        Trending
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{item.description}</p>
              {item.readTime && (
                <div className="text-xs text-gray-500">{item.readTime}</div>
              )}
            </div>
          </Link>
        ))}
      </div>
      
      {showViewAll && (
        <div className="text-center mt-8">
          <Link
            href={viewAllHref}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            View All Content
          </Link>
        </div>
      )}
    </div>
  );
}