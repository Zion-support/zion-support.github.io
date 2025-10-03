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
      
      <article className="text-left">
        <header className="text-left">
          <h1 className="text-left">
            {title}
          </h1>
          <div className="text-left">
            {author && (
              <span className="text-left">
                <span>By {author}<
              <
            )}
            {publishDate && (
              <span className="text-left">
                <span>{new Date(publishDate).toLocaleDateString()}<
              <
            )}
          </div>
          {tags.length > 0 && (
            <div className="text-left">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="text-left"
                >
                  {tag}
                <
              ))}
            </div>
          )}
          <p className="text-left">
            {description}
          </p>
        </header>
        
        <div className="text-left">
          {children}
        </div>
      </article>
    </>
  );
};

export default BlogArticleLayout;