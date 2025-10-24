'use client';
import React from 'react';
interface ErrorBoundaryProps {
  className?: string;
}
<<<<<<< HEAD
const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ className, children }) => {
=======

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ className }) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
  return (
    <div className={className}>
      <h2>ErrorBoundary</h2>
      <p>ErrorBoundary component for enhanced functionality.</p>
    </div>
  );
};
<<<<<<< HEAD
export default ErrorBoundary;
=======

export default ErrorBoundary;
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
