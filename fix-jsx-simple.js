import React from 'react';

interface fix-jsx-simpleProps {
  className?: string;
  children?: React.ReactNode;
}

const fix-jsx-simple: React.FC<fix-jsx-simpleProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`fix-jsx-simple ${className}`}>
      {children}
    </div>
  );
};

export default fix-jsx-simple;