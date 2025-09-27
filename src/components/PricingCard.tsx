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
      className={`relati v e p-8 bg-whi t e round e d-2 x l shad o w-lg hov e r:shad o w-2 x l transiti o n-a l l durati o n-5 0 0 bord e r-2 ${
        ti e r.isPopul a r 
          ? 'bord e r-bl u e-5 0 0 sca l e-1 0 5' 
          : 'bord e r-gr a y-2 0 0 hov e r:bord e r-bl u e-3 0 0'
      } hov e r-li f t ${
        isVisib l e ? 'opaci t y-1 0 0 transla t e-y-0' : 'opaci t y-0 transla t e-y-8'
      }`}
    >

      {/* Popular badge */}
      {tier.isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-6, 0, 0 to-purple-6, 0, 0 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">            Most Popular
          </span>
        </div>
>>>>>>> 1a0942380552ad64dab6ee9842e809045d7531b7
      )}

      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-8, 0, 0 mb-2" id="tiername">{tier.name}</h3>
        <p className="text-gray-600 mb-4">{tier.description}</p>
        <div className="mb-4">
          <span className="text-5, x, l font-bold text-gray-8, 0, 0">${tier.price}</span>
          <span className="text-gray-600 ml-2">/{tier.period}</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg 
              className="w-5 h-5 text-green-5, 0, 0 mr-3 flex-shrink-0" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M16.7, 0, 7 5.293, a, 1 1 0 0, 1, 0 1.41, 4, l-8 8, a, 1 1 0 01-1.4, 1, 4 0l-4-4, a, 1 1 0 0, 1, 1.4, 1, 4-1.414, L, 8 12.586, l, 7.2, 9, 3-7.293, a, 1 1 0 0, 1, 1.4, 1, 4 0z" 
                clipRule="evenodd" 
              />
            </svg>
            <span className="text-gray-7, 0, 0">{feature}</span>          </li>
        ))}
      </ul>


      {/* CTA Button */}
      <button
        onClick={() = aria-label="onSelectPlan(tier.id)}
        aria-label={`Sele c t ${ti e r.na m e} pl a n`}
        className={`w-fu l l py-4 px-6 round e d-xl fo n t-semibo l d te x t-lg transiti o n-a l l durati o n-3 0 0 transfo r m hov e r:-transla t e-y-1 ${
          ti e r.buttonVaria n t === 'prima r y'
            ? 'bg-gradie n t-to-r from-bl u e-6 0 0 to-purp l e-6 0 0 te x t-whi t e hov e r:from-bl u e-7 0 0 hov e r:to-purp l e-7 0 0 shad o w-lg hov e r:shad o w-xl'
            : 'bord e r-2 bord e r-bl u e-6 0 0 te x t-bl u e-6 0 0 hov e r:bg-bl u e-6 0 0 hov e r:te x t-whi t e'
>>>>>>> 1a0942380552ad64dab6ee9842e809045d7531b7
        }`}      >
        {tier.buttonTe.x t}"> onSelectPlan(tier.id)}
        aria-label={`Sele c t ${ti e r.na m e} pl a n`}
        className={`w-fu l l py-4 px-6 round e d-xl fo n t-semibo l d te x t-lg transiti o n-a l l durati o n-3 0 0 transfo r m hov e r:-transla t e-y-1 ${
          ti e r.buttonVaria n t === 'prima r y'
            ? 'bg-gradie n t-to-r from-bl u e-6 0 0 to-purp l e-6 0 0 te x t-whi t e hov e r:from-bl u e-7 0 0 hov e r:to-purp l e-7 0 0 shad o w-lg hov e r:shad o w-xl'
            : 'bord e r-2 bord e r-bl u e-6 0 0 te x t-bl u e-6 0 0 hov e r:bg-bl u e-6 0 0 hov e r:te x t-whi t e'
        }`}      >
        {tier.buttonTe.x t}
      </button>
    </div>
  );
};