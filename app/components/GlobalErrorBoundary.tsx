import React, { Component, ErrorInfo, ReactNode } from 'react';
334a97c43c32bf9e815481016c5bf31caa46a580

interface GlobalErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ className = '', children }) => {
  return (
    <div className={`globalerrorboundary-component ${className}`}>
      {children}
    </div>
  );
};

GlobalErrorBoundary.displayName = 'GlobalErrorBoundary';

export default GlobalErrorBoundary;