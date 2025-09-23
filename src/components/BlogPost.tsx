import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  featured?: boolean;
  category?: string;
}

export const BlogPost: React.FC<BlogPostProps> = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  image,
  slug,
  featured = false,
  category = "Technology"
}) => {
  return (
    <article className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
      <div className="relative">
        <img
          src={image}
          alt={title}
          className={`w-full object-cover ${featured ? 'h-80' : 'h-48'} transition-transform duration-300 hover:scale-105`}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className={`p-6 ${featured ? 'lg:p-8' : ''}`}>
        <h3 className={`font-bold text-gray-900 mb-3 ${featured ? 'text-2xl lg:text-3xl' : 'text-xl'} line-clamp-2`}>
          <Link to={`/blog/${slug}`} className="hover:text-blue-600 transition-colors">
            {title}
          </Link>
        </h3>
        
        <p className={`text-gray-600 mb-4 ${featured ? 'text-lg lg:text-xl' : 'text-base'} line-clamp-3`}>
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
        
        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          <span>Read More</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
};

export default BlogPost;