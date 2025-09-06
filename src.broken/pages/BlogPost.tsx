import React from 'react';

interface BlogPostProps {
  className?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BlogPost</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BlogPost;