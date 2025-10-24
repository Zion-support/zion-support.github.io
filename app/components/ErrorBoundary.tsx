'use client'
import React from 'react'
interface ErrorBoundaryProps {
  children: React.R;e;a;c;t;N;o;d;e;
  fallback?: React.ReactNode;




}
const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ className, children }) => {
  return (
    <div className={className}>
      <h2>ErrorBoundary</h2>
      <p>ErrorBoundary component for enhanced functionality.</p>
    </div>
  );
};
export default ErrorBoundary;
