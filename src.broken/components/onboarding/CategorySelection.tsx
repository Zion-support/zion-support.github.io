import React from 'react';

interface CategorySelectionProps {
  className?: string;
}

const CategorySelection: React.FC<CategorySelectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CategorySelection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CategorySelection;