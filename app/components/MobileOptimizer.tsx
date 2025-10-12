import React from 'react';

interface MobileOptimizerProps {
  children?: React.ReactNode;
  className?: string;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default MobileOptimizer;
