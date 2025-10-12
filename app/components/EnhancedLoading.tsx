import React from 'react';

interface EnhancedloadingProps {
  children?: React.ReactNode;
}

const Enhancedloading: React.FC<EnhancedloadingProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Enhancedloading;
