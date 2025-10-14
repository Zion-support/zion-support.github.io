import React from 'react';

interface ServiceTemplateProps {
  title: string;
  description: string;
  features: string[];
  className?: string;
}

export default function ServiceTemplate({ 
  title, 
  description, 
  features, 
  className = '' 
}: ServiceTemplateProps) {
  return (
    <div className={`bg-gray-800 p-6 rounded-lg ${className}`}>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-300 flex items-center">
            <span className="text-blue-400 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}