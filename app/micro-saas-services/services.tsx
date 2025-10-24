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
    <div className={'services ' + className}>
      {children || <p>services component</p>}
    </div>
  );
};

export default services;
