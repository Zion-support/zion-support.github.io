'use client';
import React, { memo } from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'cyan';
  href?: string;
  features?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = memo(({
  title,
  description,
  icon: Icon,
  color = 'blue',
  href,
  features = []
}) => {
  const bgColorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
    red: 'bg-red-500',
    cyan: 'bg-cyan-500'
  };

  const textColorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
    red: 'text-red-600',
    cyan: 'text-cyan-600'
  };

  const borderColorClasses = {
    blue: 'border-blue-200',
    green: 'border-green-200',
    purple: 'border-purple-200',
    orange: 'border-orange-200',
    red: 'border-red-200',
    cyan: 'border-cyan-200'
  };

  const currentBgColor = bgColorClasses[color];
  const currentTextColor = textColorClasses[color];
  const currentBorderColor = borderColorClasses[color];

  const CardContent = () => (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 overflow-hidden">
      {/* Header */}
      <div className="p-6">
        <div className={`w-12 h-12 ${currentBgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Features */}
      {features.length > 0 && (
        <div className="px-6 pb-4">
          <ul className="space-y-2">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <div className={`w-1.5 h-1.5 ${currentBgColor} rounded-full mr-3 flex-shrink-0`}></div>
                {feature}
              </li>
            ))}
            {features.length > 3 && (
              <li className="text-sm text-gray-500 ml-4">
                +{features.length - 3} more features
              </li>
            )}
          </ul>
        </div>
      )}

      {/* Footer */}
      <div className="px-6 pb-6">
        <div className={`inline-flex items-center ${currentTextColor} font-medium group-hover:gap-2 transition-all duration-300`}>
          Learn More
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>

      {/* Hover Effect */}
      <div className={`absolute inset-0 ${currentBgColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;