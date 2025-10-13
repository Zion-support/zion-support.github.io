import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Our AI and IT services at Zion Tech Group." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions for your business needs.
          </p>
        </div>
      </div>
    </div>
  );
}
