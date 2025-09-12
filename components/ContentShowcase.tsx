import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'resource' | 'case-study';
  readTime?: string;
  isNew?: boolean;
  isTrending?: boolean;
  icon: string;
  category: string;
}

interface ContentShowcaseProps {
  title: string;
  subtitle: string;
  items: ContentItem[];
  showViewAll?: boolean;
  viewAllHref?: string;
  variant?: 'default' | 'featured' | 'compact';
}

const ContentShowcase: React.FC<ContentShowcaseProps> = ({
  title,
  subtitle,
  items,
  showViewAll = true,
  viewAllHref = '/blog',
  variant = 'default'
}) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'resource': return 'bg-green-100 text-green-800';
      case 'case-study': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Article';
      case 'resource': return 'Resource';
      case 'case-study': return 'Case Study';
      default: return 'Content';
    }
  };

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {showViewAll && (
            <Link
              href={viewAllHref}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              View All →
            </Link>
          )}
        </div>
        <div className="space-y-3">
          {items.slice(0, 3).map((item, index) => (
            <Link key={index} href={item.href} className="group block">
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-2xl">{item.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </span>
                    {item.isNew && (
                      <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                        Trending
                      </span>
                    )}
                  </div>
                  <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">✨ FEATURED CONTENT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">{subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.slice(0, 6).map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium bg-white bg-opacity-20 px-2 py-1 rounded-full">
                      {getTypeLabel(item.type)}
                    </span>
                    {item.isNew && (
                      <span className="text-xs font-medium bg-green-500 bg-opacity-20 px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="text-xs font-medium bg-orange-500 bg-opacity-20 px-2 py-1 rounded-full">
                        Trending
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:underline">{item.title}</h3>
                  <p className="text-sm opacity-90 mb-3 line-clamp-2">{item.description}</p>
                  <div className="flex items-center text-xs opacity-75">
                    {item.readTime && <span>{item.readTime}</span>}
                    <span className="mx-2">•</span>
                    <span>{item.category}</span>
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
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                  <div className="text-6xl">{item.icon}</div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </span>
                    {item.isNew && (
                      <span className="text-xs font-medium text-white bg-green-600 px-3 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="text-xs font-medium text-white bg-orange-600 px-3 py-1 rounded-full">
                        TRENDING
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm text-gray-500">{item.category}</span>
                    {item.readTime && (
                      <>
                        <span className="text-gray-300">•</span>
                        <span className="text-sm text-gray-500">{item.readTime}</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-12">
            <Link
              href={viewAllHref}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              View All Content
              <span>→</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentShowcase;