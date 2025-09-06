import React from 'react';

interface CategoryCardProps {
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CategoryCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CategoryCard;