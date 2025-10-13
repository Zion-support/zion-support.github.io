<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b6b8

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

export default function Errorboundary({ className = '', children, ...props }: ErrorboundaryProps) {
  return (
    <div className={`errorboundary-component ${className}`} {...props}>
      {children}
    </div>
  );
}
