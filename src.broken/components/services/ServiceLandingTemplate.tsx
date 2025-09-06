import React from 'react';

interface ServiceLandingTemplateProps {
  className?: string;
}

const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServiceLandingTemplate</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServiceLandingTemplate;