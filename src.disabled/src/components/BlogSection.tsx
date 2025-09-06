import React from 'react';

interface BlogSectionProps {
  className?: string;
}

const BlogSection: React.FC<BlogSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BlogSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BlogSection;