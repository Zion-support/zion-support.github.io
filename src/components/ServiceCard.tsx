import React, { memo, useState } from 'react';
import { CheckCircle, Star } from 'lucide-react';

interface ServiceCardProps {
  service: {
    name: string;
    description: string;
    price: string;
    features: string[];
    popular?: boolean;
    icon?: React.ComponentType<any>;
    link?: string;
  };
  category: 'micro-saas' | 'ai' | 'it';
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = memo(({ service, category, index }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = async () => {
    if (service.link) {
      setIsLoading(true);
      try {
        window.open(service.link, '_blank');
      } catch (error) {
        console.error('Error opening link:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const getCategoryStyles = () => {
    switch (category) {
      case 'micro-saas':
        return {
          border: 'border-cyan-400/20 hover:border-cyan-400/40',
          iconBg: 'from-cyan-400 to-purple-600',
          textColor: 'text-cyan-400',
          checkColor: 'text-cyan-400'
        };
      case 'ai':
        return {
          border: 'border-purple-400/20 hover:border-purple-400/40',
          iconBg: 'from-purple-400 to-pink-600',
          textColor: 'text-purple-400',
          checkColor: 'text-purple-400'
        };
      case 'it':
        return {
          border: 'border-green-400/20 hover:border-green-400/40',
          iconBg: 'from-green-400 to-blue-600',
          textColor: 'text-green-400',
          checkColor: 'text-green-400'
        };
      default:
        return {
          border: 'border-gray-400/20 hover:border-gray-400/40',
          iconBg: 'from-gray-400 to-gray-600',
          textColor: 'text-gray-400',
          checkColor: 'text-gray-400'
        };
    }
  };

  const styles = getCategoryStyles();

  return (
    <div
      className={`cyber-card p-6 hover:scale-105 transition-all duration-300 relative group cursor-pointer ${styles.border}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`Learn more about ${service.name}`}
    >
      {service.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
            <Star className="w-3 h-3 mr-1" />
            Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-4">
        <div className={`w-12 h-12 bg-gradient-to-r ${styles.iconBg} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
          {service.icon ? (
            <service.icon className="w-6 h-6 text-white" />
          ) : (
            <div className="text-2xl">🤖</div>
          )}
        </div>
        
        <h3 className={`text-lg font-bold text-white mb-3 group-hover:${styles.textColor} transition-colors`}>
          {service.name}
        </h3>
        
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          {service.description}
        </p>
        
        <div className="space-y-2 mb-6">
          {service.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center text-sm text-gray-300">
              <CheckCircle className={`w-4 h-4 ${styles.checkColor} mr-2 flex-shrink-0`} />
              {feature}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className={`text-2xl font-bold ${styles.textColor} mb-2`}>
            {service.price}
          </div>
          <button 
            className={`${styles.textColor} hover:opacity-80 font-medium text-sm transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Learn More →'}
          </button>
        </div>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;