import React from 'react';

interface PricingTierProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
  buttonHref?: string;
  color?: 'blue' | 'purple' | 'green' | 'red' | 'yellow' | 'indigo';
}

export default function PricingTier({
  name,
  price,
  period = '/mo',
  description,
  features,
  isPopular = false,
  buttonText = 'Get Started',
  buttonHref = '#',
  color = 'blue',
}: PricingTierProps) {
  const colorClasses: Record<NonNullable<PricingTierProps['color']>, { bg: string; hover: string; border: string }> = {
    blue: { bg: 'bg-blue-600', hover: 'hover:bg-blue-700', border: 'border-blue-300' },
    purple: { bg: 'bg-purple-600', hover: 'hover:bg-purple-700', border: 'border-purple-300' },
    green: { bg: 'bg-green-600', hover: 'hover:bg-green-700', border: 'border-green-300' },
    red: { bg: 'bg-red-600', hover: 'hover:bg-red-700', border: 'border-red-300' },
    yellow: { bg: 'bg-yellow-500', hover: 'hover:bg-yellow-600', border: 'border-yellow-300' },
    indigo: { bg: 'bg-indigo-600', hover: 'hover:bg-indigo-700', border: 'border-indigo-300' },
  };

  const classes = colorClasses[color];

  return (
    <div className={`relative bg-white rounded-lg shadow-lg border-2 ${isPopular ? classes.border : 'border-gray-200'} p-8`}>
      {isPopular && (
        <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${classes.bg} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
          Most Popular
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600 ml-1">{period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <a href={buttonHref} className={`w-full ${classes.bg} ${classes.hover} text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center block`}>
        {buttonText}
      </a>
    </div>
  );
}
