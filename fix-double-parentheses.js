import React from 'react';

interface fix-double-parenthesesProps {
  className?: string;
  children?: React.ReactNode;
}

const fix-double-parentheses: React.FC<fix-double-parenthesesProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`fix-double-parentheses ${className}`}>
      {children}
    </div>
  );
};

export default fix-double-parentheses;