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
}

export default function ContentCard({ 
  title, 
  description, 
  category, 
  date, 
  image, 
  href, 
  featured = false 
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
          <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
            {category}
          </span>
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