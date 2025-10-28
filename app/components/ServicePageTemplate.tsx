'use client';

import React from 'react';

interface ServicePageTemplateProps {
  className?: string;
  children?: React.ReactNode;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ 
  className = '',
  children 
}) => {
  return (
    <div className={`servicepagetemplate-component ${className}`}>
      {children}
    </div>
  );
};

ServicePageTemplate.displayName = 'ServicePageTemplate';

export default ServicePageTemplate;
