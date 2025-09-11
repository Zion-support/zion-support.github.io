import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  readTime: string;
  category: string;
  isNew?: boolean;
  isTrending?: boolean;
}

interface ContentShowcaseProps {
  title: string;
  subtitle: string;
  items: ContentItem[];
  className?: string;
}

const ContentShowcase: React.FC<ContentShowcaseProps> = ({ 
  title, 
  subtitle, 
  items, 
  className = "" 
}) => {
  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                  <div className="text-6xl">{item.icon}</div>
                  {item.isNew && (
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      NEW
                    </div>
                  )}
                  {item.isTrending && (
                    <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      🔥 TRENDING
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-sm">{item.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            View All Content
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;