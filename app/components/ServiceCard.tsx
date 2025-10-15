import React, { memo } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = memo(({ title, description, link, icon }) => {
  return (
    <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-3xl mb-4" role="img" aria-label={`${title} icon`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>
      <a 
        href={link} 
        className="text-blue-600 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-1 py-1 inline-block transition-colors"
        aria-label={`Learn more about ${title}`}
      >
        Learn More →
      </a>
    </article>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;