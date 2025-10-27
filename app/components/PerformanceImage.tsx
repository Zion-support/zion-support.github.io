import React from 'react';

interface PerformanceImageProps {
  className?: string;
  children?: React.ReactNode;
}

const PerformanceImage: React.FC<PerformanceImageProps> = ({ className, children }) => {
  return (
    <div className={className} role="region" aria-label="Performance Image">
      {children || <p>Performance Image</p>}
    </div>
  );
};

export default PerformanceImage;