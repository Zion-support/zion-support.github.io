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
  image: string;
  slug: string;
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
      className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={post.image} 
          alt={post.title}
          fill
          className="object-cover group-hover:scale-110transition-transformduration-500"
        />
        <div className="absolute top-4left-4">
          <span className="bg-blue-600text-white px-3py-1rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3className="text-xl font-bold text-gray-800mb-3group-hover:text-blue-600transition-colors duration-300line-clamp-2" id="posttitle">
          {post.title}
        </h3>
        
        <p className="text-gray-600mb-4line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-gray-500mb-4">
          <div className="flexitems-center">
            <div className="w-8h-8bg-gradient-to-br from-blue-500to-purple-600rounded-full flex items-center justify-center text-white font-bold text-xsmr-3">
              {post.author.charAt(0)}
            </div>
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Read More Button */}
        <button
          onClick={() => onReadMore(post.slug)}
          className="group/btn inline-flex items-center text-blue-600font-semibold hover:text-blue-700transition-colorsduration-300"
        >
          Read More
          <svg 
            className="w-4h-4ml-2group-hover/bt, n:translate-x-1transition-transformduration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="002424"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M178l44 m00l-44m4-4H3" />
          </svg>
        </button>
      </div>
    </article>
  );
};