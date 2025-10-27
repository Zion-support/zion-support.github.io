import React from 'react';

interface _ServicePageTemplateProps {
  className?: string;
  children?: React.ReactNode;
}


const ServicePageTemplate: React.FC<_ServicePageTemplateProps> = ({ className = '', children }) => {
  return (
    <div className={`ervicepagetemplate ${className}`}>
      {children}
    </div>
  );
};

ServicePageTemplate.displayName = 'ServicePageTemplate';

export default ServicePageTemplate;