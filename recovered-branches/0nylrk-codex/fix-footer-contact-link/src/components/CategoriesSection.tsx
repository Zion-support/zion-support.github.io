import React from 'react';

interface CategoriesSectionProps {
  className?: string;
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CategoriesSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CategoriesSection;