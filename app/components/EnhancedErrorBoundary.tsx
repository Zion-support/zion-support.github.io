import React from 'react';

<<<<<<< HEAD
interface EnhancedErrorBoundaryProps {
=======
interface EnhancederrorboundaryProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function EnhancedErrorBoundary({ className = '', children }: EnhancedErrorBoundaryProps) {
  return (
    <div className={`${className}`}>
=======
export default function Enhancederrorboundary({ className = '', children, ...props }: EnhancederrorboundaryProps) {
  return (
    <div className={`enhancederrorboundary-component ${className}`} {...props}>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
      {children}
    </div>
  );
}