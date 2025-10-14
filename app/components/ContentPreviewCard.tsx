import React from 'react';
import Link from 'next/link';

interface ContentPreviewCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  imageUrl?: string;
  slug: string;
}

const ContentPreviewCard: React.FC<ContentPreviewCardProps> = ({
  id,
  title,
  excerpt,
  author,
  publishedAt,
  readTime,
  category,
  imageUrl,
  slug
}) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {imageUrl && (
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {category}
          </span>
          <span className="text-sm text-gray-500">{readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          <Link href={`/blog/${slug}`} className="hover:text-blue-600 transition-colors">
            {title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
              <span className="text-sm font-medium text-gray-700">
                {author.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{author}</p>
              <p className="text-sm text-gray-500">{publishedAt}</p>
            </div>
          </div>
          
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            Read more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ContentPreviewCard;