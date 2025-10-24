import React from 'react';

interface LazyImageProps {
  className?: string;
  children?: React.ReactNode;
}

const LazyImage: React.FC<LazyImageProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default LazyImage;
