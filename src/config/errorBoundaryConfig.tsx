import React from 'react';

interface errorBoundaryConfigProps {
  className?: string;
  children?: React.ReactNode;
}

const errorBoundaryConfig: React.FC<errorBoundaryConfigProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`errorboundaryconfig ${className}`}>
      {children}
    </div>
  );
};

export default errorBoundaryConfig;