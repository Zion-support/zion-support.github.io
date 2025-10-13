import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PricingPage() {
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing Plans</title>
        <meta name="description" content="Transparent pricing plans for our AI and IT solutions." />
      </Helmet>

      <div className="min-h-screen bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Pricing</h1>
            <p className="text-xl text-gray-300 mb-12">Transparent pricing for all our solutions</p>
          </div>
        </div>
      </div>
    </>
  );
}