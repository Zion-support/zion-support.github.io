import React from 'react';
export type ErrorBoundaryWrapperProps = {
  // Add your props here
};

interface ErrorBoundaryWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

const ErrorBoundaryWrapper: React.FC<ErrorBoundaryWrapperProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'errorboundarywrapper ' + className}>
      {children || <p>ErrorBoundaryWrapper component</p>}
    </div>
  );
};

export default ErrorBoundaryWrapper;
