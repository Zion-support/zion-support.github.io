import React from 'react';
import { Star } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: string;
  price: string;
  originalPrice?: string;
  features: string[];
  benefits: string[];
  link: string;
  popular: boolean;
  category: string;
  rating: number;
  users: string;
  freeTrial: string;
}

interface ServicesGridProps {
  services: Service[];
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  buttonColor: string;
  buttonHoverColor: string;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({
  services,
  title,
  description,
  bgColor,
  borderColor,
  textColor,
  buttonColor,
  buttonHoverColor
}) => {
  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-slate-900/80 backdrop-blur-sm border ${borderColor} rounded-xl p-4 md:p-6 hover:${borderColor.replace('/20', '/40')} transition-all duration-300 group h-full flex flex-col`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{service.icon}</div>
                {service.popular && (
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </div>
              
              <h3 className={`text-lg md:text-xl font-bold text-white mb-2 group-hover:${textColor} transition-colors line-clamp-2`}>
                {service.title}
              </h3>
              
              <p className="text-gray-300 text-xs md:text-sm mb-4 leading-relaxed flex-grow line-clamp-3">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className={`text-lg md:text-2xl font-bold ${textColor}`}>{service.price}</span>
                  {service.originalPrice && (
                    <span className="text-gray-400 line-through text-xs md:text-sm">{service.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
                  <span className="text-xs md:text-sm text-gray-300">{service.rating}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs md:text-sm text-gray-400 mb-2">
                  <span>{service.users} users</span>
                  <span>{service.freeTrial} free trial</span>
                </div>
              </div>
              
              <a
                href={service.link}
                className={`block w-full ${buttonColor} text-white text-center py-2 md:py-3 rounded-lg ${buttonHoverColor} transition-all duration-300 font-medium text-sm md:text-base mt-auto`}
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;