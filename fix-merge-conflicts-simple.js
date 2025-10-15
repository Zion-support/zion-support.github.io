import React from 'react';

interface fix-merge-conflicts-simpleProps {
  className?: string;
  children?: React.ReactNode;
}

const fix-merge-conflicts-simple: React.FC<fix-merge-conflicts-simpleProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`fix-merge-conflicts-simple ${className}`}>
      {children}
    </div>
  );
};

export default fix-merge-conflicts-simple;