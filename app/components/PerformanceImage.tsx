'use client';
import React from 'react';

interface PerformanceImageProps {
  className?: string;
}

const PerformanceImage: React.FC<PerformanceImageProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>PerformanceImage</h2>
      <p>PerformanceImage component for enhanced functionality.</p>
    </div>
  );
};

export default PerformanceImage;