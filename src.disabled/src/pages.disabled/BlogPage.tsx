import React from 'react';

interface BlogPageProps {
  className?: string;
}

const BlogPage: React.FC<BlogPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BlogPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BlogPage;