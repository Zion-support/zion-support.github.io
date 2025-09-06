import React from 'react';

interface CategoryDetailProps {
  className?: string;
}

const CategoryDetail: React.FC<CategoryDetailProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CategoryDetail</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CategoryDetail;