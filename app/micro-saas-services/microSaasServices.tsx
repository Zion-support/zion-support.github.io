'use client';

import React from 'react';

interface microSaasServicesProps {
  className?: string;
  children?: React.ReactNode;
}

const microSaasServices: React.FC<microSaasServicesProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`microsaasservices-component ${className}`}>
      {children}
    </div>
  );
};

export default microSaasServices;
