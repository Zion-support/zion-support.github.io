import React from 'react';

interface _ErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ErrorBoundary({ 
  className = '', 
  children 
}: ErrorBoundaryProps) {
  return (
    <div className={'errorboundary ' + className}>
      {children || <p>ErrorBoundary component</p>}
    </div>
  );
}
