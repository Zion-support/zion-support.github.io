'use client';
import React from 'react';

interface OptimizedImageProps {
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>OptimizedImage</h2>
      <p>OptimizedImage component for enhanced functionality.</p>
    </div>
  );
};

export default OptimizedImage;