import React from 'react';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readingTime: string;
  featured: boolean;
}

interface BlogPostLayoutProps {
  post: BlogPost;
  content: string;
}

export default function BlogPostLayout({ postcontent }: BlogPostLayoutProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="mb-4">
          <span className="inline-block bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
            {post.category}
          </span>
          {post.featured && (
            <span className="ml-2 inline-block bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h1>
        
        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
          {post.description}
        </p>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
          <span>By {post.author}</span>
          <span>•</span>
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Content */}
      <div 
        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-purple-600 prose-strong:text-gray-900"
        dangerouslySetInnerHTML={{ __html: content.replace(/\n/g'<br />') }}
      />
    </article>
  );
}