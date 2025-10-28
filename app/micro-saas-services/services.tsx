import React from 'react';

interface ServicesProps {
  className?: string;
  children?: React.ReactNode;
}

const Services: React.FC<ServicesProps> = (_{ className = '', children }) => {
  return <div className={`services ${className}`}>{children}</div>;
};

export default Services;