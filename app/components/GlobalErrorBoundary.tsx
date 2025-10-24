import React from 'react';

interface GlobalErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'globalerrorboundary ' + className}>
      {children || <p>GlobalErrorBoundary component</p>}
    </div>
  );
};

export default GlobalErrorBoundary;
