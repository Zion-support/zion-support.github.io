import React from 'react';

interface MobileOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({ className = '', children }) => {
  return (
    <div className={`mobileoptimizer ${className}`}>
      {children}
    </div>
  );
};

export default MobileOptimizer;