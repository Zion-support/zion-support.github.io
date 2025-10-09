import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, Eye, Heart, MessageCircle } from 'lucide-react';

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
  stats
}) => {
  return (
    <article className={`group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
      featured ? 'ring-2 ring-blue-500' : ''
    }`}>
      {featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </span>
        </div>
      )}
      
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {date}
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            {readTime}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        
        {stats && (
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {stats.views.toLocaleString()} views
            </div>
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-1" />
              {stats.engagement}% engagement
            </div>
          </div>
        )}
        
        <Link
          href={path}
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
        >
          Read More
          <MessageCircle className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </article>
  );
};

export default ContentPreviewCard;