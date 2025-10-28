
cursor/fix-errors-and-merge-to-main-7271
import React from 'react';

interface ServicePageTemplateProps {
  className?: string;
  children?: React.ReactNode;
}
cursor/fix-errors-and-merge-to-main-7271

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ className = '', children }) => {
  return (
    <div className={`servicepagetemplate-component ${className}`}>
      {children}
    </div>
  );
};

ServicePageTemplate.displayName = 'ServicePageTemplate';

export default ServicePageTemplate;