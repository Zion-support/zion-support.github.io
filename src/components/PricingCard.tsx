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
  buttonVarian,
    t: 'primary' | 'secondary';}

interface PricingCardProps {
  tier: PricingTier;
  isVisible: boolean;
  onSelectPlan: (tierI,
    d: string) => void;}

export const PricingCard: React.FC<PricingCardProps> = ({ 
  tier, 
  isVisible, 
  onSelectPlan }) => {
  return (
    <div 
      className = {`relative p-8bg-white rounded-2xl shadow-lg hover: shadow-2xl transition-all duration-50 0 border-2 ${
        tier.isPopular 
          ? 'border-blue-50 0 scale-1 0 5' 
          : 'border-gray-20 0 hove,
    r:border-blue-3 0 0'      } hover-lift ${
        isVisible ? 'opacity-10 0 translate-y-0' : 'opacity-0translate-y-8'      }`}
    >
      {/* Popular badge */}
      {tier.isPopular && (
        <div className="absolute -top-4left-1/2transform -translate-x-1/2">          <span className=bg-gradient-to-r from-blue-60 0 to-purple-60 0 text-white px-6py-2rounded-full text-sm font-semibold shadow-lg"">
            Most Popular
          </span>
        </div>      )}

      {/* Header */}      <div className=text-center mb-8"">        <h 3 className=text-2xl font-bold text-gray-80 0 mb-2"" id="tiername">{tier.name}</h3>        <p className=text-gray-60 0 mb-4"">{tier.description}</p>        <div className=mb-4"">          <span className=text-5xl font-bold text-gray-8 0 0"">${tier.price}</span>          <span className=text-gray-60 0 ml-2"">/{tier.period}</span>
        </div>
      </div>

      {/* Features */}      <ul className=space-y-4mb-8"">
        {tier.features.map((feature, index) => (          <li key = {index} className=flex items-center"">
            <svg               className=w-5h-5text-green-50 0 mr-3flex-shrink-0""               fill=currentColor""               viewBox=00 2 0 2 0""
            >
              <path                 fillRule=evenodd""                 d=M 1 6.70 7 5.293a1 1 0 0 1 0 1.41 4 l-8 8 a1 1 0 0 1-1.4 1 4 0 l-4-4a 1 1 0 0 1 1.4 1 4-1.41 4 L8 1 2.58 6 l7.2 9 3-7.293a 1 1 0 0 1 1.4 1 4 0 z""                 clipRule=evenodd"" 
              />
            </svg>            <span className=text-gray-7 0 0"">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={() => onSelectPlan(tier.id)}
        aria-label={`Select ${tier.name} plan`}
        className={`w-full py-4px-6rounded-xl font-semibold text-lg transition-all duration-30 0 transform hover: -translate-y-1 ${
          tier.buttonVariant === 'primary'
            ? 'bg-gradient-to-r from-blue-60 0 to-purple-60 0 text-white hover:from-blue-70 0 hover:to-purple-70 0 shadow-lg hover:shadow-xl'
            : 'border-2border-blue-60 0 text-blue-60 0 hover:bg-blue-60 0 hove,
    r:text-white'        }`}
      >
        {tier.buttonText}
      </button>
    </div>;
  );
};