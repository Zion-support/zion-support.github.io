import React from 'react';

interface service-templateProps {
  className?: string;
  children?: React.ReactNode;
}

const service-template: React.FC<service-templateProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`service-template ${className}`}>
      {children}
    </div>
  );
};

export default service-template;