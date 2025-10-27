import React from 'react';
export type ErrorBoundaryProps = {
  // Add your props here
};

interface ErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'errorboundary ' + className}>
      {children || <p>ErrorBoundary component</p>}
    </div>
  );
};

export default ErrorBoundary;
