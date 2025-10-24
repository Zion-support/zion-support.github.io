<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Home } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
interface EnhancederrorboundaryProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Enhancederrorboundary({ className = '', children, ...props }: EnhancederrorboundaryProps) {
  return (
    <div className={`enhancederrorboundary-component ${className}`} {...props}>
      {children}
    </div>
  );
}
=======
import React from 'react';

const EnhancedErrorBoundary: React.FC = () => {
  return (
    <div className="enhancederrorboundary">
      <h2>EnhancedErrorBoundary</h2>
      <p>EnhancedErrorBoundary component.</p>
    </div>
  );
};

export default EnhancedErrorBoundary;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
