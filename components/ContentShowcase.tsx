import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  readTime?: string;
  type: 'article' | 'case-study' | 'resource' | 'guide';
  status: 'new' | 'popular' | 'trending' | 'featured';
}

interface ContentShowcaseProps {
  title: string;
  subtitle: string;
  items: ContentItem[];
  className?: string;
  showViewAll?: boolean;
  viewAllHref?: string;
}

const ContentShowcase: React.FC<ContentShowcaseProps> = ({
  title,
  subtitle,
  items,
  className = '',
  showViewAll = true,
  viewAllHref = '/blog'
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-green-100 text-green-800';
      case 'popular':
        return 'bg-blue-100 text-blue-800';
      case 'trending':
        return 'bg-purple-100 text-purple-800';
      case 'featured':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article':
        return '📚';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📋';
      case 'guide':
        return '📖';
      default:
        return '📄';
    }
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {items.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{getTypeIcon(item.type)}</span>
                    <span className="capitalize">{item.type.replace('-', ' ')}</span>
                    {item.readTime && (
                      <>
                        <span>•</span>
                        <span>{item.readTime}</span>
                      </>
                    )}
                  </div>
                  <span className="text-blue-600 font-medium group-hover:underline text-sm">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center">
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
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