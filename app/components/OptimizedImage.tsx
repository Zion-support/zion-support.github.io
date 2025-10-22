import React from 'react';

interface OptimizedImageProps {
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>OptimizedImage</h2>
      <p>This is a clean, functional component.</p>
    </div>
  );
};

export default OptimizedImage;