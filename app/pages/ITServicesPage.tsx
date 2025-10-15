import React from 'react';

interface ITServicesPageProps {
  className?: string;
  children?: React.ReactNode;
}

const ITServicesPage: React.FC<ITServicesPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`itservicespage ${className}`}>
      {children}
    </div>
  );
};

export default ITServicesPage;