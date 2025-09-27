import React from 'react';

interface BlogCardProps {
  className?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  className = ''
}) => {
  return (
    <div className={`blogcard ${className}`}>
      <h2>BlogCard</h2>
      <p>Component placeholder - needs implementation</p>
    </div>
  );
};

export default BlogCard;
