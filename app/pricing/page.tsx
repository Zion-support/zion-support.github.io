import React from 'react';
import { Helmet } from 'react-helmet-async';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group pricing page." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Pricing</h1>
          <p className="text-xl text-gray-600">
            Welcome to our pricing page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
