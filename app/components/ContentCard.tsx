import React from 'react';
import Link from 'next/link';

interface ContentCardProps {
  title: string;
  description: string;
  href: string;
  category: string;
  date?: string;
  featured?: boolean;
  image?: string;
  tags?: string[];
}

export default function ContentCard({
  title,
  description,
  href,
  category,
  date,
  featured = false,
  image,
  tags = []
}: ContentCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${featured ? 'ring-2 ring-purple-500' : ''}`}>
      {image && (
        <div className="aspect-video bg-gradient-to-r from-purple-500 to-blue-500 rounded-t-xl flex items-center justify-center">
          <div className="text-white text-4xl">📄</div>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
            {category}
          </span>
          {featured && (
            <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between">
          <Link
            href={href}
            className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
          >
            Read More →
          </Link>
          {date && (
            <span className="text-sm text-gray-500">
              {new Date(date).toLocaleDateString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}