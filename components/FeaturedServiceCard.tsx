// import React from 'react';
import { Link } from 'react-router-dom';

interface FeaturedServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  features: string[];
}

const FeaturedServiceCard: React.FC<FeaturedServiceCardProps> = ({
  title,
  description,
  icon,
  href,
  features
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
      <div className="text-center mb-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      
      <Link
        to={href}
        className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
      >
        Learn More
      </Link>
    </div>
  );
};

export default FeaturedServiceCard;