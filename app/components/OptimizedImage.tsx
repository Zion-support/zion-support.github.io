import React from 'react';

interface OptimizedImageProps {
  className?: string;
  children?: React.ReactNode;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ className = '', children }) => {
  return (
    <div className={`optimizedimage-component ${className}`}>
      {children}
    </div>
  );
};

export default OptimizedImage;