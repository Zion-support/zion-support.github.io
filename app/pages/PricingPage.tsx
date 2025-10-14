import React from 'react';
import { Helmet } from 'react-helmet-async';

const PricingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT solutions" />
        <meta name="keywords" content="pricing, plans, cost, subscription" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Pricing</h1>
            <p className="text-xl text-gray-300 mb-8">
              Transparent pricing for our AI and IT solutions
            </p>
            <div className="text-gray-400">
              <p>Pricing information coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;