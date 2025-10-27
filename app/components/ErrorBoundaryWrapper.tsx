import React from 'react';

interface _ErrorBoundaryWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ErrorBoundaryWrapper({ 
  className = '', 
  children 
}: ErrorBoundaryWrapperProps) {
  return (
    <div className={'errorboundarywrapper ' + className}>
      {children || <p>ErrorBoundaryWrapper component</p>}
    </div>
  );
}
