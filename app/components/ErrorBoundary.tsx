import React from 'react';

interface ErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function ErrorBoundary({ className = '', children }: ErrorBoundaryProps) {
  return (
    <div className={`${className}`}>
=======
export default function ErrorBoundary({ className = '', children, ...props }: ErrorBoundaryProps) {
  return (
    <div className={`error-boundary-component ${className}`} {...props}>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
      {children}
    </div>
  );
}