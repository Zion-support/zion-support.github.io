import React from 'react';

interface ServicesProps {
  className?: string;
  children?: React.ReactNode;
}

const Services = ({ className = '', children }) => {
  return <div className={`services ${className}`}>{children}</div>;
};

export default Services;
