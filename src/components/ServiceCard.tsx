'use client';
import React, { memo } from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon | string;
  price: string;
  features: string[];
  technologies: string[];
  category: string;
  href: string;
  color?: string;
  popular?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = memo(({
  title,
  description,
  icon: Icon,
  price,
  features,
  technologies,
  category,
  href,
  color = 'cyan',
  popular = false
}) => {
  const colorClasses = {
    cyan: 'text-cyan-400 hover:text-cyan-300',
    pink: 'text-pink-400 hover:text-pink-300',
    blue: 'text-blue-400 hover:text-blue-300',
    green: 'text-green-400 hover:text-green-300',
    purple: 'text-purple-400 hover:text-purple-300',
    indigo: 'text-indigo-400 hover:text-indigo-300',
    red: 'text-red-400 hover:text-red-300',
    teal: 'text-teal-400 hover:text-teal-300',
    orange: 'text-orange-400 hover:text-orange-300',
    yellow: 'text-yellow-400 hover:text-yellow-300'
  };

  const bgColorClasses = {
    cyan: 'bg-cyan-400/20',
    pink: 'bg-pink-400/20',
    blue: 'bg-blue-400/20',
    green: 'bg-green-400/20',
    purple: 'bg-purple-400/20',
    indigo: 'bg-indigo-400/20',
    red: 'bg-red-400/20',
    teal: 'bg-teal-400/20',
    orange: 'bg-orange-400/20',
    yellow: 'bg-yellow-400/20'
  };

  return (
    <article 
      className="quantum-card p-4 sm:p-6 energy-pulse group relative"
      role="article"
      aria-labelledby={`${title.toLowerCase().replace(/\s+/g, '-')}-title`}
    >
      {popular && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
          Popular
        </div>
      )}
      
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
            <li className="text-cyan-400 text-xs">
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
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="text-cyan-400 text-xs px-2 py-1">
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