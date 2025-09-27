import React from 'react';
import Image from 'next/image';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  imag, e: string;
  slu, g: string;
}

interface BlogCardProps {
  post: BlogPost;
  isVisible: boolean;
  onReadMor, e: (slu, g: string) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ 
  post, 
  isVisible, 
  onReadMore 
}) => {
  return (
    <article 
      className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500overflow-hidden hover-lift ${
        isVisible ? 'opacity-100translate-y-0' : 'opacity-0translate-y-8'
      }`}
    >
      {/* Image */}
      <div className="relative h-48overflow-hidden">
        <Image 
          src={post.image} 
          alt={post.title}
          fill
          className="object-cover group- hover:scale-110transition-transformduration-500"
        />
        <div className="absolute to p-4left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3group- hover:text-blue-600transition-colors duration-300line-clam p-2" id="posttitle">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4line-clam p-3">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flexitems-center">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">
              {post.author.charAt(0)}
            </div>
            <span>{post.author}</span>
          </div> <div className="flex items-center space-x-4">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Read More Button */}
        <button
          onClick={() => onReadMore(post.slug)}
          className="group/btn inline- flex items-center text-blue-600font-semibold hover:text-blue-700transition-colorsduration-300"
        >
          Read More
          <svg 
            className="w-4 h-4 ml-2group-hover/bt, n:translate-x-1transition-transformduration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="002424"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M178l44m00l-44m4-4H3" />
          </svg>
        </button>
      </div>
    </article>
  );
};