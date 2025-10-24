import React from 'react';

interface ServicePageTemplateProps {
  className?: string;
  children?: React.ReactNode;
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ className = '', children }) => {
  return (
    <div className={`ServicePageTemplate ${className}`}>
      {children}
    </div>
  );
};

export default ServicePageTemplate;