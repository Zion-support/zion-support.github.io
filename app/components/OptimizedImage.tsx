'use client';
import React from 'react';

interface OptimizedImageProps {
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>OptimizedImage</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default OptimizedImage;
