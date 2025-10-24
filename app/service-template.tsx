import React from 'react';

interface ServiceTemplateProps {
  className?: string;
  children?: React.ReactNode;
}

export const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ className = '', children }) => {
  return (
    <div className={`servicetemplate ${className}`}>
      {children}
    </div>
  );
};

export default ServiceTemplate;