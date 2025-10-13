import React, { ReactNode } from 'react';

interface SEOOptimizerProps {
  children: ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ children }) => {
  return <>{children}</>;
};

export default SEOOptimizer;