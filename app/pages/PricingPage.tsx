import React from 'react';
import { Helmet } from 'react-helmet-async';

const PricingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Pricing information for Zion Tech Group services" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Pricing</h1>
          <p className="text-lg text-gray-300">
            This is the Pricing page for Zion Tech Group.
          </p>
        </div>
      </div>
    </>
  );
};

export default PricingPage;