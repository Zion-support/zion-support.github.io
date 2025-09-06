import React from 'react';

interface CategoryPageProps {
  className?: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CategoryPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CategoryPage;