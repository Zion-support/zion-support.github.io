'use client';

import React from 'react';

interface servicesProps {
  className?: string;
  children?: React.ReactNode;
}

const services: React.FC<servicesProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`services-component ${className}`}>
      {children}
    </div>
  );
};

export default services;
