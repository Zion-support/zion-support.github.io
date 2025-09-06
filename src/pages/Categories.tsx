import React from 'react';

interface CategoriesProps {
  className?: string;
}

const Categories: React.FC<CategoriesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Categories</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Categories;