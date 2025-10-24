'use client';
import React from 'react';

interface PerformanceImageProps {
  className?: string;
}

const PerformanceImage: React.FC<PerformanceImageProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>PerformanceImage</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default PerformanceImage;
