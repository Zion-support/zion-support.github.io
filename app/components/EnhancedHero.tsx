import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';

interface EnhancedHeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
  className?: string;
}

const EnhancedHero: React.FC<EnhancedHeroProps> = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage,
  className = ''
}) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center ${className}`}>
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            <Star className="w-4 h-4 mr-2" />
            {subtitle}
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        
        <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={primaryButtonLink}
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            {primaryButtonText}
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          
          {secondaryButtonText && secondaryButtonLink && (
            <a
              href={secondaryButtonLink}
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
            >
              <Play className="mr-2 w-5 h-5" />
              {secondaryButtonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;
