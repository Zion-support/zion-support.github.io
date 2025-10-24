import React from 'react';

interface LazyWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

const LazyWrapper: React.FC<LazyWrapperProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default LazyWrapper;
