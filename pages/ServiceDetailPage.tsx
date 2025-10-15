import React from 'react';

interface ServiceDetailPageProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`servicedetailpage ${className}`}>
      {children}
    </div>
  );
};

export default ServiceDetailPage;