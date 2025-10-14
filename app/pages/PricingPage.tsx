import React from 'react';
import { Helmet } from 'react-helmet-async';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Pricing for our AI and IT solutions." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Pricing
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Choose the plan that's right for your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;