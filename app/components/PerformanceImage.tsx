'use client';
import React from 'react';
<<<<<<< HEAD
interface PerformanceImageProps {
  className?: string;
  children?: React.ReactNode;
}
const PerformanceImage: React.FC<PerformanceImageProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
=======

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

>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
export default PerformanceImage;