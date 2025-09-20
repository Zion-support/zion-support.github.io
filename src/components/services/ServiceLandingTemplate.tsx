import React from "react";

export interface ServiceLandingTemplateProps {
  title: string;
  subtitle: string;
  description: string;
}

export const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({
  title,
  subtitle,
  description
}) => {
  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <h2 className="text-2xl text-white mb-6">{subtitle}</h2>
        <p className="text-white text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ServiceLandingTemplate;