import React from 'react'

export const EmergingTechServices = () => {;
  const emergingTechServices = [;
    {;
      id: 1,
      name: 'Quantum Computing Platform',
      description: 'Next-generation quantum computing solutions',
      pricing: '$10,000/month',;
      category: 'Quantum Computing'
    },;
    {;
      id: 2,
      name: 'Blockchain Enterprise Solutions',
      description: 'Enterprise-grade blockchain infrastructure',
      pricing: '$5,000/month',;
      category: 'Blockchain'
    };
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-green-900 to-blue-900">;
      <div className="max-w-7xl mx-auto px-4">;
        <h2 className="text-4xl font-bold text-white mb-4">;
          Emerging Technology Services;
        </[^>]*>
        <div className="grid md:grid-cols-2 gap-8">;
          {emergingTechServices.map((service) => (;
            <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">;
              <h3 className="text-2xl font-bold mb-2 text-white">{service.name}</[^>]*>
              <p className="text-gray-300 mb-4">{service.description}</[^>]*>
              <div className="text-2xl font-bold text-green-400 mb-2">{service.pricing}</[^>]*>
              <div className="text-sm text-gray-400">{service.category}</[^>]*>
            </[^>]*>
          ))};
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};

export default EmergingTechServices;