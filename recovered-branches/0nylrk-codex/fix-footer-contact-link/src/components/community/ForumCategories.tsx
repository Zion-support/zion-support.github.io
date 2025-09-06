import React from 'react';

interface ForumCategoriesProps {
  className?: string;
}

const ForumCategories: React.FC<ForumCategoriesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ForumCategories</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ForumCategories;