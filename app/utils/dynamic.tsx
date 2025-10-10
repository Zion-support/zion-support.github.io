import React from 'react';

interface UtilityProps {
  className?: string;
  children?: React.ReactNode;
}

const Utility: React.FC<UtilityProps> = ({ className = '', children }) => {
  return (
    <div className={`utility ${className}`}>
      {children}
    </div>
  );
};

export default Utility;