import React from 'react';

interface PageOriginalProps {
  className?: string;
  children?: React.ReactNode;
}

export const PageOriginal: React.FC<PageOriginalProps> = ({ className = '', children }) => {
  return (
    <div className={`pageoriginal ${className}`}>
      {children}
    </div>
  );
};

export default PageOriginal;