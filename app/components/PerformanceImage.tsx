<<<<<<< HEAD
'use client';
import React from 'react';
=======
import React from 'react';

>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
interface PerformanceImageProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
const PerformanceImage: React.FC<PerformanceImageProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
export default PerformanceImage;
=======

const PerformanceImage: React.FC<PerformanceImageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'performanceimage ' + className}>
      {children || <p>PerformanceImage component</p>}
    </div>
  );
};

export default PerformanceImage;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
