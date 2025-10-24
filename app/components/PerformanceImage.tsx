import React from 'react';

interface PerformanceImageProps {
  className?: string;
  children?: React.ReactNode;
}

export const PerformanceImage: React.FC<PerformanceImageProps> = ({ className = '', children }) => {
  return (
    <div className={`performanceimage ${className}`}>
      {children}
    </div>
  );
};

export default PerformanceImage;