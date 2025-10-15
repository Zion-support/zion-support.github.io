import React from 'react';

interface not-foundProps {
  className?: string;
  children?: React.ReactNode;
}

const not-found: React.FC<not-foundProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`not-found ${className}`}>
      {children}
    </div>
  );
};

export default not-found;