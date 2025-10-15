import React from 'react';

interface mainProps {
  className?: string;
  children?: React.ReactNode;
}

const main: React.FC<mainProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`main ${className}`}>
      {children}
    </div>
  );
};

export default main;