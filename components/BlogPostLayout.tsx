import React from 'react';

interface BlogPostLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  author?: string;
}

export default function BlogPostLayout({ 
  children, 
  title, 
  description, 
  date, 
  author 
}: BlogPostLayoutProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {title && (
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          {description && (
            <p className="text-xl text-gray-600 mb-4">{description}</p>
          )}
          {(date || author) && (
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              {author && <span>By {author}</span>}
              {date && <span>{date}</span>}
            </div>
          )}
        </header>
      )}
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </article>
  );
}