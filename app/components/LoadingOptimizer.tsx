import React from 'react';

interface LoadingoptimizerProps {
  children?: React.ReactNode;
}

const Loadingoptimizer: React.FC<LoadingoptimizerProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Loadingoptimizer;
