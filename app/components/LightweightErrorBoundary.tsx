import React from 'react';

interface LightweightErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const LightweightErrorBoundary: React.FC<LightweightErrorBoundaryProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`lightweighterrorboundary ${className}`}>
      {children}
    </div>
  );
};

export default LightweightErrorBoundary;