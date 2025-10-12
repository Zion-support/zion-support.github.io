import React from 'react';

interface OptimizedloadingProps {
  children?: React.ReactNode;
}

const Optimizedloading: React.FC<OptimizedloadingProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Optimizedloading;
