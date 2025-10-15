import React from 'react';

interface securityProps {
  className?: string;
  children?: React.ReactNode;
}

const security: React.FC<securityProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`security ${className}`}>
      {children}
    </div>
  );
};

export default security;