import React from 'react';

const ServiceLandingTemplate = ({ title, description, features = [], ctaText = "Get Started", onCtaClick }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
      </div>
      
      {features.length > 0 && (
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      )}
      
      {ctaText && (
        <div className="text-center">
          <button 
            onClick={onCtaClick}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {ctaText}
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceLandingTemplate;
export { ServiceLandingTemplate };