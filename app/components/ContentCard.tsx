import React from 'react';
import Link from 'next/link';

interface ContentCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  image?: string;
  href: string;
  featured?: boolean;
  badge?: string;
}

export default function ContentCard({ 
  title, 
  description, 
  category, 
  date, 
  image, 
  href, 
  featured = false,
  badge 
}: ContentCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${featured ? 'ring-2 ring-purple-500' : ''}`}>
      {image && (
        <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
          <div className="text-6xl text-white opacity-80">📊</div>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
              {category}
            </span>
            {badge && (
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                badge === 'NEW' ? 'bg-green-100 text-green-800' :
                badge === 'FEATURED' ? 'bg-orange-100 text-orange-800' :
                badge === 'GUIDE' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {badge}
              </span>
            )}
          </div>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        <Link 
          href={href}
          className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}