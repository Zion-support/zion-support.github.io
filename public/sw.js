import React from 'react';

interface swProps {
  className?: string;
  children?: React.ReactNode;
}

const sw: React.FC<swProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`sw ${className}`}>
      {children}
    </div>
  );
};

export default sw;