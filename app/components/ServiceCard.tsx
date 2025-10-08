import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  features?: string[];
  price?: string;
  popular?: boolean;
}

/**
 * Enhanced ServiceCard component with accessibility features and modern design
 */
const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  href,
  external = false,
  className = '',
  onClick,
  features = [],
  price,
  popular = false
}) => {
  const CardContent = () => (
    <>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      {icon && (
        <div className="mb-4 text-indigo-600 text-4xl" aria-hidden="true">
          {icon}
        </div>
      )}
      
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      
      {features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 flex-shrink-0"></div>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      {price && (
        <div className="mb-4">
          <span className="text-3xl font-bold text-indigo-600">{price}</span>
          <span className="text-gray-500 ml-1">/month</span>
        </div>
      )}
      
      <div className="flex items-center text-indigo-600 font-medium group">
        {external ? (
          <>
            Learn More
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </>
        ) : (
          <>
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </div>
    </>
  );

  const cardClasses = `
    relative bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 
    hover:scale-105 border border-gray-100 group cursor-pointer
    ${popular ? 'ring-2 ring-indigo-200' : ''}
    ${className}
  `;

  if (href) {
    return (
      <article className={cardClasses} role="article">
        {external ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            aria-label={`Learn more about ${title}`}
          >
            <CardContent />
          </a>
        ) : (
          <a
            href={href}
            className="block"
            aria-label={`Learn more about ${title}`}
          >
            <CardContent />
          </a>
        )}
      </article>
    );
  }

  if (onClick) {
    return (
      <article 
        className={cardClasses} 
        role="article"
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        }}
        tabIndex={0}
        aria-label={`Learn more about ${title}`}
      >
        <CardContent />
      </article>
    );
  }

  return (
    <article className={cardClasses} role="article">
      <CardContent />
    </article>
  );
};

export default ServiceCard;