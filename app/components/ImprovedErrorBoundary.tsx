import React from 'react';

<<<<<<< HEAD
interface ImprovedErrorBoundaryProps {
=======
interface ImprovederrorboundaryProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedErrorBoundary({ className = '', children }: ImprovedErrorBoundaryProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}