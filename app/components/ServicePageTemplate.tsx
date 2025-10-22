import React from 'react';

interface ServicePageTemplateProps {
  className?: string;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>ServicePageTemplate</h2>
      <p>This is a clean, functional component.</p>
    </div>
  );
};

export default ServicePageTemplate;