import React from 'react';

interface ServiceLandingTemplateProps {
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  onCtaClick: () => void;
}

const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({
  title,
  description,
  features,
  ctaText,
  onCtaClick
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Feature {index + 1}
              </h3>
              <p className="text-gray-600">{feature}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button
            onClick={onCtaClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
          >
            {ctaText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceLandingTemplate;