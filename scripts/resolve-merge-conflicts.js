import React from 'react';

interface resolve-merge-conflictsProps {
  className?: string;
  children?: React.ReactNode;
}

const resolve-merge-conflicts: React.FC<resolve-merge-conflictsProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`resolve-merge-conflicts ${className}`}>
      {children}
    </div>
  );
};

export default resolve-merge-conflicts;