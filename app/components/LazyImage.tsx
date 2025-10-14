import React from 'react';

interface LazyImageProps {
  className?: string;
  children?: React.ReactNode;
}

const LazyImage: React.FC<LazyImageProps> = ({ className = '', children }) => {
  return (
    <div className={`lazyimage-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">LazyImage</h3>
          <p className="text-gray-600">This is the LazyImage component.</p>
        </div>
      )}
    </div>
  );
};

export default LazyImage;