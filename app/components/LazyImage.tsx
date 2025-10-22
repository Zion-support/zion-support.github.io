import React from 'react';

interface LazyImageProps {
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>LazyImage</h2>
      <p>This is a clean, functional component.</p>
    </div>
  );
};

export default LazyImage;