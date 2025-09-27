import React from 'react';

interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary';
}

interface PricingCardProps {
  tier: PricingTier;
  isVisible: boolean;
  onSelectPlan: (tierId: string) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ 
  tier, 
  isVisible, 
  onSelectPlan 
}) => {
  return (
    <div 
      className={`relative p-8bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
        tier.isPopular 
          ? 'border-blue-500 scale-105' 
          : 'border-gray-200 hover:border-blue-300'
      } hover-lift ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0translate-y-8'
      }`}
    >
      {/* Popular badge */}
      {tier.isPopular && (
        <div className="absolute -top-4left-1/2transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6py-2rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2" id="tiername">{tier.name}</h3>
        <p className="text-gray-600 mb-4">{tier.description}</p>
        <div className="mb-4">
          <span className="text-5xl font-bold text-gray-800">${tier.price}</span>
          <span className="text-gray-600 ml-2">/{tier.period}</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4mb-8">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg 
              className="w-5h-5text-green-500 mr-3flex-shrink-0" 
              fill="currentColor" 
              viewBox="002020"
            >
              <path 
                fillRule="evenodd" 
                d="M 16.7075.293a1100101.414 l-88 a11001-1.4140 l-4-4a 110011.414-1.414 L812.586 l7.293-7.293a 110011.4140 z" 
                clipRule="evenodd" 
              />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={() => onSelectPlan(tier.id)}
        aria-label={`Select ${tier.name} plan`}
        className={`w-full py-4px-6rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 ${
          tier.buttonVariant === 'primary'
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
            : 'border-2border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
        }`}
      >
        {tier.buttonText}
      </button>
    </div>
  );
};