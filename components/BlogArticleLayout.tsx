import React from 'react';
import { Helmet } from 'react-helmet-async';

interface BlogArticleLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  author?: string;
  publishDate?: string;
  tags?: string[];
}

const BlogArticleLayout: React.FC<BlogArticleLayoutProps> = ({
  title,
  description,
  children,
  author = "Zion Tech Group
  publishDate,
  tags = []
}) => {
  return (
    <>
      <Helmet>
        <title>{title} | Zion Tech Group</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {tags.map(tag => (
          <meta key={tag} name="keywords" content={tag} />
        ))}
      </Helmet>
      
      <article className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-8">
            {author && (
              <span className="flex items-center gap-2">
                <span>By {author}</span>
              </span>
            )}
            {publishDate && (
              <span className="flex items-center gap-2">
                <span>{new Date(publishDate).toLocaleDateString()}</span>
              </span>
            )}
          </div>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <p className="text-xl text-gray-300 leading-relaxed">
            {description}
          </p>
        </header>
        
        <div className="prose prose-lg prose-invert max-w-none">
          {children}
        </div>
      </article>
    </>
  );
};

export default BlogArticleLayout;