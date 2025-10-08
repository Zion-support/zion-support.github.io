import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

/**
 * Reusable ServiceCard component with accessibility features
 */
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, className = '' }) => {
  return (
    <article
      className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group ${className}`}
      role="article"
    >
      {icon && (
        <div className="mb-4 text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-indigo-900 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </article>
  );
};

export default ServiceCard;
