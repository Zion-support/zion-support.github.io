import React from 'react';

interface PerformanceImageProps {
  className?: string;
}

const PerformanceImage: React.FC<PerformanceImageProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>PerformanceImage</h2>
      <p>This is a clean, functional component.
              </p>
            </div>
  );
};

export default PerformanceImage;