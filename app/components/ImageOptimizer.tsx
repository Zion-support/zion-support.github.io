<<<<<<< HEAD
interface ImageOptimizerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
=======
import React from 'react';

interface ImageoptimizerProps {
>>>>>>> cursor/fix-errors-and-merge-to-main-b6b8
  className?: string;
  children?: React.ReactNode;
}

export default function Imageoptimizer({ className = '', children, ...props }: ImageoptimizerProps) {
  return (
    <div className={`imageoptimizer-component ${className}`} {...props}>
      {children}
    </div>
  );
};
