import React from 'react';

interface OptimizedImageProps {
  className?: string;
  children?: React.ReactNode;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ className = '', children }) => {
  return (
    <div className={`optimizedimage-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">OptimizedImage</h3>
          <p className="text-gray-600">This is the OptimizedImage component.</p>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;