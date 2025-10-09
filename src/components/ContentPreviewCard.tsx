import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Eye, Heart } from 'lucide-react';

interface ContentPreviewCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  path: string;
  image: string;
  featured?: boolean;
  stats?: {
    views: number;
    engagement: number;
  };
  excerpt?: string;
}

const ContentPreviewCard: React.FC<ContentPreviewCardProps> = ({
  id,
  title,
  description,
  category,
  readTime,
  date,
  path,
  image,
  featured = false,
  stats,
  excerpt,
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
      featured ? 'ring-2 ring-blue-500' : ''
    }`}>
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {featured && (
          <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs">
          {category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt || description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {date}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {readTime}
            </div>
          </div>
          
          {stats && (
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                {stats.views}
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-1" />
                {stats.engagement}
              </div>
            </div>
          )}
        </div>
        
        <Link
          to={path}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          Read More
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ContentPreviewCard;