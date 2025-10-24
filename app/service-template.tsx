import React from 'react';

interface ServiceTemplateProps {
  title: string;
  description: string;
  features: string[];
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ 
  title, 
  description, 
  features 
}) => {
  return (
    <div className="service-template">
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceTemplate;
