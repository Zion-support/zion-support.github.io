import React from 'react';

interface OptimizedimageProps {
  children?: React.ReactNode;
}

const Optimizedimage: React.FC<OptimizedimageProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Optimizedimage;
