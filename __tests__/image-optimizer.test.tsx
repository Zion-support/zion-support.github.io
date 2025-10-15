import React from 'react';

interface image-optimizer.testProps {
  className?: string;
  children?: React.ReactNode;
}

const image-optimizer.test: React.FC<image-optimizer.testProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`image-optimizer.test ${className}`}>
      {children}
    </div>
  );
};

export default image-optimizer.test;