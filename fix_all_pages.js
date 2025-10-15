import React from 'react';

interface fix_all_pagesProps {
  className?: string;
  children?: React.ReactNode;
}

const fix_all_pages: React.FC<fix_all_pagesProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`fix_all_pages ${className}`}>
      {children}
    </div>
  );
};

export default fix_all_pages;