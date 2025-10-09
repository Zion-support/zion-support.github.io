'use client';
import React, { memo } from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  technologies: Array<{ name: string; color: string }>;
  price: string;
  category: string;
  href: string;
  color: 'primary' | 'secondary' | 'accent';
  Icon?: LucideIcon | string;
}

const ServiceCard: React.FC<ServiceCardProps> = memo(({
  title,
  description,
  features,
  technologies,
  price,
  category,
  href,
  color,
  Icon
}) => {
  const bgColorClasses = {
    primary: 'bg-gradient-to-br from-blue-500 to-purple-600',
    secondary: 'bg-gradient-to-br from-green-500 to-teal-600',
    accent: 'bg-gradient-to-br from-orange-500 to-red-600'
  };

  const colorClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700',
    secondary: 'bg-green-600 hover:bg-green-700',
    accent: 'bg-orange-600 hover:bg-orange-700'
  };

  return (
    <article
      className="quantum-card p-4 sm:p-6 energy-pulse group relative"
      role="article"
      aria-labelledby={`${title.toLowerCase().replace(/\s+/g, '-')}-title`}
    >
      <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line" aria-hidden="true">
        {typeof Icon === 'string' ? Icon : <Icon className="w-12 h-12 mx-auto" />}
      </div>
      
      <h3
        id={`${title.toLowerCase().replace(/\s+/g, '-')}-title`}
        className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text"
      >
        {title}
      </h3>
      
      <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
        {description}
      </p>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
        <ul className="text-sm text-gray-300 space-y-1">
          {features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
          {features.length > 3 && (
            <li className="text-cyan-300">
              +{features.length - 3} more features
            </li>
          )}
        </ul>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-1">
          {technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className={`px-2 py-1 ${bgColorClasses[color as keyof typeof bgColorClasses]} text-cyan-300 text-xs rounded`}
            >
              {tech.name}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded">
              +{technologies.length - 4}
            </span>
          )}
        </div>
      </div>
      
      <div className="text-center mb-4">
        <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2 neon-text" aria-label="Starting price">
          {price}
        </div>
        <div className="text-xs text-gray-400">Category: {category}</div>
      </div>
      
      <a
        href={href}
        className={`${colorClasses[color as keyof typeof colorClasses]} font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded inline-flex items-center justify-center w-full py-2`}
        aria-label={`Learn more about ${title}`}
      >
        Learn More
        <ArrowRight className="w-4 h-4 ml-1" />
      </a>
    </article>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;