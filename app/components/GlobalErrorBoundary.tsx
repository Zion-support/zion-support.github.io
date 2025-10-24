'use client';
import React from 'react';
<<<<<<< HEAD
interface GlobalErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}
const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
=======

interface GlobalErrorBoundaryProps {
  className?: string;
}

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>GlobalErrorBoundary</h2>
      <p>GlobalErrorBoundary component for enhanced functionality.</p>
    </div>
  );
};

>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
export default GlobalErrorBoundary;