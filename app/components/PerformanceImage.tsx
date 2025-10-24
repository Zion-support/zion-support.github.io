'use client'
import React from 'react';

interface PerformanceImageProps {
  className?: string;
}

const PerformanceImage: React.FC<PerformanceImageProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Performance Image</h2>
      <p className="text-gray-600">This is a placeholder component for Performance Image.</p>
    </div>
  );
};

export default PerformanceImage;
