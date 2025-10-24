'use client';
import React from 'react';

interface LazyImageProps {
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>LazyImage</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default LazyImage;
