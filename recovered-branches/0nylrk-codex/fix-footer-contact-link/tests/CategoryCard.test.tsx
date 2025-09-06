import React from 'react';

interface CategoryCard.testProps {
  className?: string;
}

const CategoryCard.test: React.FC<CategoryCard.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CategoryCard.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CategoryCard.test;