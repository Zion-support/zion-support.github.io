import React from 'react';

interface fix-all-pagesProps {
  className?: string;
  children?: React.ReactNode;
}

const fix-all-pages: React.FC<fix-all-pagesProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`fix-all-pages ${className}`}>
      {children}
    </div>
  );
};

export default fix-all-pages;