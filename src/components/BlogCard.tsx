import React from 'react';
import Image from 'next/image';

interface BlogPost {id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

interface BlogCardProps {post: BlogPost;
  isVisible: boolean;
  onReadMore: (slug: string) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({post, 
  isVisible, onReadMore 
}) => {return (<article className ={`gro, u, p, bg-whi, t, e, round, e, d-2, x, l, shad, o, w-lg, hov, e, r:shad, o, w-2, x, l, transiti, o, n-a, l, l, durati, o, n-5, 0, 0, overfl, o, w-hidd, e, n, hov, er-lift ${isVisible?'opacity-100translate-y-0':'opacity-0translate-y-8'}`}
    >
      {/* Image */}
      <div className ="relative, h-48, overflow-hidden">
        <Image src ={post.image} 
          alt={post.title}
          fill, className ="object-cover, group-hover:scale-1, 1, 0, transition-transform, duration-5, 0, 0"
        />
        <div className ="absolute, top-4, left-4">
          <span className ="bg-blue-6, 0, 0, text-white, px-3, py-1, rounded-full, text-sm, font-medium">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className ="p-6">
        <h3 className ="text-xl, font-bold, text-gray-8, 0, 0, mb-3, group-hover:text-blue-6, 0, 0, transition-colors, duration-300, line-clamp-2" id="posttitle">
          {post.title}
        </h3>
        
        <p className ="text-gray-600, mb-4, line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className ="flex, items-center, justify-between, text-sm, text-gray-5, 0, 0, mb-4">
          <div className ="flex, items-center">
            <div className ="w-8, h-8, bg-gradient-to-br, from-blue-5, 0, 0, to-purple-6, 0, 0, rounded-full, flex items-center, justify-center, text-white, font-bold, text-xs, mr-3">
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

        {/* Read, More Button */}
        <button
          onClick={() => onReadMore(post.slug)}
          className="group/btn inline-flex items-center text-blue-6, 0, 0 font-semibold hover:text-blue-7, 0, 0 transition-colors duration-300"
        >
          Read More
          <svg 
            className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8, l, 4 4, m, 0 0l-4 4, m, 4-4, H, 3" />
          </svg>
        </button>
      </div>
    </article>
  );
};