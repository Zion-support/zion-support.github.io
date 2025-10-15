import React from 'react';

interface lazyLoadingProps {
  className?: string;
  children?: React.ReactNode;
}

const lazyLoading: React.FC<lazyLoadingProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`lazyloading ${className}`}>
      {children}
    </div>
  );
};

export default lazyLoading;