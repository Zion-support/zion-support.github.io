import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PricingPage() {
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="View our pricing plans for AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">Pricing</h1>
            <p className="text-xl text-gray-300">
              Choose the perfect plan for your business needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}