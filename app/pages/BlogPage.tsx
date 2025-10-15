import React from 'react';

interface BlogPageProps {
  className?: string;
  children?: React.ReactNode;
}

const BlogPage: React.FC<BlogPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`blogpage ${className}`}>
      {children}
    </div>
  );
};

export default BlogPage;