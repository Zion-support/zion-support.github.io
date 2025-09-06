import React from 'react';

interface CategoriesSection.testProps {
  className?: string;
}

const CategoriesSection.test: React.FC<CategoriesSection.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CategoriesSection.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CategoriesSection.test;