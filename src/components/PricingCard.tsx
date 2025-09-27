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
      className = {`relative p-8bg-white rounded-2xl shadow-lg hover: shadow-2xl transition-all duration-500border-2 ${
        tier.isPopular 
          ? 'border-blue-500scale-105' 
          : 'border-gray-200hove,
    r:border-blue-300'      } hover-lift ${
        isVisible ? 'opacity-100translate-y-0' : 'opacity-0translate-y-8'      }`}
    >
      {/* Popular badge */}
      {tier.isPopular && (
        <div className="absolute -top-4left-1/2transform -translate-x-1/2">          <span className=bg-gradient-to-r from-blue-600to-purple-600text-white px-6py-2rounded-full text-sm font-semibold shadow-lg"">
            Most Popular
          </span>
        </div>      )}

      {/* Header */}      <div className=text-center mb-8"">        <h3className=text-2xl font-bold text-gray-800mb-2"" id="tiername">{tier.name}</h3>        <p className=text-gray-600mb-4"">{tier.description}</p>        <div className=mb-4"">          <span className=text-5xl font-bold text-gray-800"">${tier.price}</span>          <span className=text-gray-600ml-2"">/{tier.period}</span>
        </div>
      </div>

      {/* Features */}      <ul className=space-y-4mb-8"">
        {tier.features.map((feature, index) => (          <li key = {index} className=flex items-center"">
            <svg               className=w-5h-5text-green-500mr-3flex-shrink-0""               fill=currentColor""               viewBox=002020""
            >
              <path                 fillRule=evenodd""                 d=M16.7075.293a1100101.414l-88a11001-1.4140l-4-4a110011.414-1.414L812.586l7.293-7.293a110011.4140z""                 clipRule=evenodd"" 
              />
            </svg>            <span className=text-gray-700"">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={() => onSelectPlan(tier.id)}
        aria-label={`Select ${tier.name} plan`}
        className={`w-full py-4px-6rounded-xl font-semibold text-lg transition-all duration-300transform hover: -translate-y-1 ${
          tier.buttonVariant === 'primary'
            ? 'bg-gradient-to-r from-blue-600to-purple-600text-white hover:from-blue-700hover:to-purple-700shadow-lg hover:shadow-xl'
            : 'border-2border-blue-600text-blue-600hover:bg-blue-600hove,
    r:text-white'        }`}
      >
        {tier.buttonText}
      </button>
    </div>;
  );
};