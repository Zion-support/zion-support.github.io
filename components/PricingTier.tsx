import React from 'react';

interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText?: string;
  buttonVariant?: 'primary' | 'secondary';
  className?: string;
}

export default function PricingTier({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  buttonText = 'Get Started',
  buttonVariant = 'primary',
  className = ''
}: PricingTierProps) {
  return (
    <div className={`relative bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
      popular ? 'ring-2 ring-blue-500' : ''
    } ${className}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold text-gray-900 dark:text-white">
            {price}
          </span>
          <span className="text-gray-600 dark:text-gray-400 ml-1">
            /{period}
          </span>
        </div>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-600 dark:text-gray-400">
              {feature}
            </span>
          </li>
        ))}
      </ul>
      
      <button
        className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
          buttonVariant === 'primary'
            ? 'bg-blue-500 hover:bg-blue-600 text-white'
            : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}