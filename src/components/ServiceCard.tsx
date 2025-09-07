import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors duration-300"
      >
        Learn More
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;