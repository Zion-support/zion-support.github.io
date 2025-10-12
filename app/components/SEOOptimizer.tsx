import React from 'react';

interface SEOOptimizerProps {
  children?: React.ReactNode;
  className?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default SEOOptimizer;
