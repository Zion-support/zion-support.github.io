import React from 'react';

interface accessibilityEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const accessibilityEnhancer: React.FC<accessibilityEnhancerProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`accessibilityenhancer ${className}`}>
      {children}
    </div>
  );
};

export default accessibilityEnhancer;