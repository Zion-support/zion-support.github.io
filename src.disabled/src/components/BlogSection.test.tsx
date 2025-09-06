import React from 'react';

interface BlogSection.testProps {
  className?: string;
}

const BlogSection.test: React.FC<BlogSection.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BlogSection.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BlogSection.test;