import React from 'react';

interface ServicePageTemplateProps {
  className?: string;
  children?: React.ReactNode;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = (_{ className = '', children }) => {
  return (
<div className={`service-page-template ${className}`}>
      {children || <h2>ServicePageTemplate</h2>}
    </div>
  );
};

export default ServicePageTemplate;