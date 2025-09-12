import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
      <div className="text-center">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {service.description}
        </p>
        <div className="space-y-2">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </div>
          ))}
        </div>
        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;