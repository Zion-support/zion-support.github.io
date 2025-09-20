import React from 'react';

interface ServiceLandingTemplateProps {
  title: string;
  description: string;
  benefits: string[];
  // Add other props as needed
}

export const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({
  title,
  description,
  benefits,
  // Destructure other props
}) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-8">{description}</p>
      <h2 className="text-2xl font-semibold mb-4">Benefits:</h2>
      <ul className="list-disc list-inside mb-8">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      {/* Add other sections like features, stats, CTA */}
    </div>
  );
};
  