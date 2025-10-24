'use client';
import React from 'react';

interface ServicePageTemplateProps {
  className?: string;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>ServicePageTemplate</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default ServicePageTemplate;
