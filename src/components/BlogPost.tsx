import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  slug: string;
  featured?: boolean;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  image,
  category,
  slug,
  featured = false
}) => {
  return (
    <article className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${featured ? 'md:col-span-2' : ''}`}>
      <div className="relative">
        <img
          src={image}
          alt={title}
          className={`w-full object-cover ${featured ? 'h-64' : 'h-48'}`}
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
            <Tag className="w-3 h-3 mr-1" />
            {category}
          </span>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-3 py-1 bg-red-600 text-white rounded-full text-sm font-medium">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className={`font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors ${featured ? 'text-2xl' : 'text-xl'}`}>
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">{excerpt}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              <span>{author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
        
        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          Read More
          <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </article>
  );
};

export default BlogPost;