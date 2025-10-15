import React from 'react';

interface SolutionsPageProps {
  className?: string;
  children?: React.ReactNode;
}

const SolutionsPage: React.FC<SolutionsPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`solutionspage ${className}`}>
      {children}
    </div>
  );
};

export default SolutionsPage;