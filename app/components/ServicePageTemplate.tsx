'use client';

import React, { memo } from 'react';

interface ServicePageTemplateProps {
  title: string;
  description: string;
  className?: string;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = memo(({ 
  title, 
  description, 
  className = '' 
}) => {
  return (
    <div className={`service-page-template ${className}`}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
});

ServicePageTemplate.displayName = 'ServicePageTemplate';

export default ServicePageTemplate;