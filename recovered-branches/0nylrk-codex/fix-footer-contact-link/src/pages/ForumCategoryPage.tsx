import React from 'react';

interface ForumCategoryPageProps {
  className?: string;
}

const ForumCategoryPage: React.FC<ForumCategoryPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ForumCategoryPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ForumCategoryPage;