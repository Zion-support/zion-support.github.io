import React from 'react';

interface GlobalErrorBoundaryProps {
  className?: string;
}

export const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({
  className = ''
}) => {
  return (
    <div className={`globalerrorboundary ${className}`}>
      <h2>GlobalErrorBoundary</h2>
      <p>Component placeholder - needs implementation</p>
    </div>
  );
};

export default GlobalErrorBoundary;
