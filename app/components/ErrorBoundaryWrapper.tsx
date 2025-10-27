import React from 'react';
export type ErrorBoundaryWrapperProps = {
  // Add your props here
};

interface ErrorBoundaryWrapperProps {
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
