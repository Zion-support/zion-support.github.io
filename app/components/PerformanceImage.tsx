import React from 'react';

interface PerformanceImageProps {
  className?: string;
  children?: React.ReactNode;
}

const PerformanceImage: React.FC<PerformanceImageProps> = ({ className = '', children }) => {
  return (
    <div className={`performance-image ${className}`}>
      {children}
    </div>
  );
};

export default PerformanceImage;
