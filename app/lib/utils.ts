import React from 'react';

interface utilsProps {
  className?: string;
  children?: React.ReactNode;
}

const utils: React.FC<utilsProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`utils ${className}`}>
      {children}
    </div>
  );
};

export default utils;