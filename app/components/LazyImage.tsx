import React from 'react';

interface LazyImageProps {
  className?: string;
  children?: React.ReactNode;
}

const LazyImage: React.FC<LazyImageProps> = ({ className = '', children }) => {
  return (
    <div className={`lazyimage-component ${className}`}>
      {children}
    </div>
  );
};

LazyImage.displayName = 'LazyImage';

export default LazyImage;
