import React from 'react';

interface IconsProps {
  className?: string;
  children?: React.ReactNode;
}

const Icons: React.FC<IconsProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`icons ${className}`}>
      {children}
    </div>
  );
};

export default Icons;