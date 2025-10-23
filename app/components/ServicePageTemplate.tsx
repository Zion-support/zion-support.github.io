"use client";
import React from 'react';

interface ServicePageTemplateProps {
  className?: string;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        ServicePageTemplate
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default ServicePageTemplate;