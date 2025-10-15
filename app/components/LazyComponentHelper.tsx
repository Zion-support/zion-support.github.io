import React from 'react';

interface LazyComponentHelperProps {
  className?: string;
  children?: React.ReactNode;
}

const LazyComponentHelper: React.FC<LazyComponentHelperProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`lazycomponenthelper ${className}`}>
      {children}
    </div>
  );
};

export default LazyComponentHelper;