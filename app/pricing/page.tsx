import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PricingPage() {
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Pricing</h1>
          <p className="text-lg text-gray-300 mb-8">Contact us for custom pricing based on your needs.</p>
        </div>
      </div>
    </>
  );
}