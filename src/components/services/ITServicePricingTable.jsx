import React from 'react';

export const ITServicePricingTable = () => {
  const pricingTiers = [
    {
      name: 'Basic',
      price: '$99',
      features: ['Onsite Support', 'Basic Troubleshooting', '4-hour Response']
    },
    {
      name: 'Professional',
      price: '$199',
      features: ['Priority Support', 'Advanced Troubleshooting', '2-hour Response', 'Preventive Maintenance']
    },
    {
      name: 'Enterprise',
      price: '$399',
      features: ['24/7 Support', 'Full IT Management', '1-hour Response', 'Strategic Planning', 'Custom Solutions']
    }
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          IT Service Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-center mb-4">{tier.name}</h3>
              <div className="text-4xl font-bold text-center text-blue-600 mb-6">{tier.price}</div>
              <ul className="space-y-3">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};