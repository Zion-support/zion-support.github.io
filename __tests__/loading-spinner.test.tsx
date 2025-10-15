import React from 'react';

interface loading-spinner.testProps {
  className?: string;
  children?: React.ReactNode;
}

const loading-spinner.test: React.FC<loading-spinner.testProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`loading-spinner.test ${className}`}>
      {children}
    </div>
  );
};

export default loading-spinner.test;