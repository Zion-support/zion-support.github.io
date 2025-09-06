import React from 'react';

interface BlogProps {
  className?: string;
}

const Blog: React.FC<BlogProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Blog</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Blog;