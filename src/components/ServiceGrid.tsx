import React, { memo, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, CheckCircle, Users, Zap } from 'lucide-react';
import { Service } from '../data/services';

interface ServiceGridProps {
  services: Service[];
  title: string;
  description?: string;
  showPricing?: boolean;
  maxItems?: number;
}

const ServiceCard = memo(({ service, showPricing = true }: { service: Service; showPricing?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl mb-2">{service.icon}</div>
          {service.popular && (
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
              Popular
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {service.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {service.description}
        </p>

        {showPricing && (
          <div className="mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">{service.price}</span>
              {service.originalPrice && (
                <span className="text-sm text-gray-500 line-through">{service.originalPrice}</span>
              )}
            </div>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1">{service.rating}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="ml-1">{service.users}</span>
              </div>
            </div>
          </div>
        )}

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
          <div className="space-y-1">
            {service.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </div>
            ))}
            {service.features.length > 3 && (
              <div className="text-xs text-gray-500">
                +{service.features.length - 3} more features
              </div>
            )}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
          <div className="flex flex-wrap gap-1">
            {service.benefits.slice(0, 2).map((benefit, index) => (
              <span
                key={index}
                className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Link
            to={service.link}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
          {service.freeTrial && (
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {service.freeTrial} free trial
            </span>
          )}
        </div>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

const ServiceGrid: React.FC<ServiceGridProps> = memo(({ 
  services, 
  title, 
  description, 
  showPricing = true, 
  maxItems 
}) => {
  const displayedServices = useMemo(() => {
    return maxItems ? services.slice(0, maxItems) : services;
  }, [services, maxItems]);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedServices.map((service, index) => (
            <ServiceCard
              key={`${service.link}-${index}`}
              service={service}
              showPricing={showPricing}
            />
          ))}
        </div>

        {maxItems && services.length > maxItems && (
          <div className="text-center mt-8">
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              <Zap className="w-5 h-5 mr-2" />
              View All {services.length} Services
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

ServiceGrid.displayName = 'ServiceGrid';

export default ServiceGrid;