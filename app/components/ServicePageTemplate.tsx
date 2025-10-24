'use client'
import React from 'react';

interface ServicePageTemplateProps {
  className?: string;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Service Page Template</h2>
      <p className="text-gray-600">This is a placeholder component for Service Page Template.</p>
    </div>
  );
};

export default ServicePageTemplate;
