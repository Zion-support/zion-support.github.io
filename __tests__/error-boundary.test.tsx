import React from 'react';

interface error-boundary.testProps {
  className?: string;
  children?: React.ReactNode;
}

const error-boundary.test: React.FC<error-boundary.testProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`error-boundary.test ${className}`}>
      {children}
    </div>
  );
};

export default error-boundary.test;