interface GlobalErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

import React from 'react';





const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ className = '', children }) => {
  return (
    <div className={`globalerrorboundary-component ${className}`}>
      {children}
    </div>
  );
}


export default GlobalErrorBoundary;