import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, features }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">{icon}</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
