import React from 'react';

interface _PerformanceImageProps {
  className?: string;
  children?: React.ReactNode;
}


const PerformanceImage: React.FC<_PerformanceImageProps> = ({ className = '', children }) => {
  return (
    <div className={`erformanceimage ${className}`}>
      {children}
    </div>
  );
};

PerformanceImage.displayName = 'PerformanceImage';

export default PerformanceImage;