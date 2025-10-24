import React from 'react';

interface LazyImageProps {
  className?: string;
  children?: React.ReactNode;
}

export const LazyImage: React.FC<LazyImageProps> = ({ className = '', children }) => {
  return (
    <div className={`lazyimage ${className}`}>
      {children}
    </div>
  );
};

export default LazyImage;