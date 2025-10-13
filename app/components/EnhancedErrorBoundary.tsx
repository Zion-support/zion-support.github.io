import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
interface EnhancedErrorBoundaryProps {
=======
interface EnhancederrorboundaryProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
interface EnhancedErrorBoundaryProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
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
=======
export default function EnhancedErrorBoundary({ className = '', children, ...props }: EnhancedErrorBoundaryProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
