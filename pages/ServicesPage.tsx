import React from 'react';

interface ServicesPageProps {
  className?: string;
  children?: React.ReactNode;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`servicespage ${className}`}>
      {children}
    </div>
  );
};

export default ServicesPage;