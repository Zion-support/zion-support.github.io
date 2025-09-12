import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource';
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
  variant?: 'default' | 'featured' | 'compact';
  showViewAll?: boolean;
  viewAllHref?: string;
}

const ContentShowcase: React.FC<ContentShowcaseProps> = ({
  title,
  subtitle,
  items,
  variant = 'default',
  showViewAll = true,
  viewAllHref = '/blog'
}) => {
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

  const getVariantClasses = () => {
    switch (variant) {
      case 'featured':
        return 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white';
      case 'compact':
        return 'bg-gray-50';
      default:
        return 'bg-white';
    }
  };

  const getItemClasses = () => {
    switch (variant) {
      case 'featured':
        return 'bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20';
      case 'compact':
        return 'bg-white border border-gray-200';
      default:
        return 'bg-white border border-gray-200';
    }
  };

  return (
    <section className={`py-16 ${getVariantClasses()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {variant === 'featured' && (
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🔥 HOT THIS WEEK</span>
            </div>
          )}
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            variant === 'featured' ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h2>
          <p className={`text-xl mb-8 max-w-3xl mx-auto leading-relaxed ${
            variant === 'featured' ? 'text-white opacity-90' : 'text-gray-600'
          }`}>
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {items.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className={`${getItemClasses()} p-6 rounded-xl hover:shadow-lg transition-all duration-300 ${
                variant === 'featured' ? 'hover:bg-opacity-20' : 'hover:shadow-xl'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex gap-2">
                    {item.isNew && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        variant === 'featured' 
                          ? 'bg-white bg-opacity-20 text-white' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        New
                      </span>
                    )}
                    {item.isTrending && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        variant === 'featured' 
                          ? 'bg-white bg-opacity-20 text-white' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        Trending
                      </span>
                    )}
                  </div>
                </div>
                
                <div className={`text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block ${
                  getTypeColor(item.type)
                }`}>
                  {item.category}
                </div>
                
                <h3 className={`text-lg font-semibold mb-2 group-hover:underline ${
                  variant === 'featured' ? 'text-white' : 'text-gray-900'
                }`}>
                  {item.title}
                </h3>
                
                <p className={`text-sm mb-4 leading-relaxed ${
                  variant === 'featured' ? 'text-white opacity-90' : 'text-gray-600'
                }`}>
                  {item.description}
                </p>
                
                <div className={`flex items-center text-xs ${
                  variant === 'featured' ? 'text-white opacity-75' : 'text-gray-500'
                }`}>
                  {item.readTime && (
                    <>
                      <span>{item.readTime}</span>
                      <span className="mx-2">•</span>
                    </>
                  )}
                  <span className="capitalize">{item.type.replace('-', ' ')}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center">
            <Link
              href={viewAllHref}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-colors text-lg ${
                variant === 'featured'
                  ? 'bg-white text-indigo-600 hover:bg-gray-100'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
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
};

export default ContentShowcase;