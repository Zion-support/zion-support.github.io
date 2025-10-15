import React from 'react';

interface clean-merge-conflictsProps {
  className?: string;
  children?: React.ReactNode;
}

const clean-merge-conflicts: React.FC<clean-merge-conflictsProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`clean-merge-conflicts ${className}`}>
      {children}
    </div>
  );
};

export default clean-merge-conflicts;