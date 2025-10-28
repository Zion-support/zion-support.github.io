
import React from 'react';

interface ServicePageTemplateProps {
  className?: string;
  children?: React.ReactNode;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ className = '', children }) => {
  return (
<div className={`service-page-template ${className}`}>
      {children || <h2>ServicePageTemplate</h2>}
334a97c43c32bf9e815481016c5bf31caa46a580
    </div>
  );
};

export default ServicePageTemplate;