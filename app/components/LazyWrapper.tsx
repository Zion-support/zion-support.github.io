import React from 'react';

interface LazyWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

const LazyWrapper: React.FC<LazyWrapperProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`lazywrapper ${className}`}>
      {children}
    </div>
  );
};

export default LazyWrapper;