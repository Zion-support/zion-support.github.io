import React from 'react';

interface PerformanceImageProps {
  className?: string;
  children?: React.ReactNode;
}

const PerformanceImage: React.FC<PerformanceImageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`performanceimage ${className}`}>
      {children || <p>PerformanceImage component</p>}
    </div>
  );
};

export default PerformanceImage;