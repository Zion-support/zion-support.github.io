
import React from 'react';

interface ServicePageTemplateProps {
  className?: string;
  children?: React.ReactNode;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ className = '', children }) => {
  return (
    <div className={`service-page-template ${className}`}>
      {children || <p>ServicePageTemplate component</p>}
    </div>
  );
};

export default ServicePageTemplate;