import React from 'react';

interface MobileoptimizerProps {
  children?: React.ReactNode;
}

const Mobileoptimizer: React.FC<MobileoptimizerProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Mobileoptimizer;
