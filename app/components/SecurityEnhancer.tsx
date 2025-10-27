
import React from 'react';

interface SecurityEnhancerProps {
  children: React.ReactNode;
  level?: 'low' | 'medium' | 'high';
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ children, level = 'medium' }) => {
  return <div className={`security-enhancer security-${level}`}>{children}</div>;
};

export default SecurityEnhancer;
