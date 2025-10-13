import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Pricing for our AI and IT solutions." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Pricing</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Flexible pricing options for our AI and IT solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
