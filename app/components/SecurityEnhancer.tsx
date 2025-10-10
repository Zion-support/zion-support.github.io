import React from 'react';

interface SecurityEnhancerProps {
  children: React.ReactNode;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ children }) => {
  return <>{children}</>;
};

export default SecurityEnhancer;
