import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function MicroSAASPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SAAS solutions for modern businesses" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Micro SAAS Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with our comprehensive micro SAAS solutions designed for modern enterprises.
          </p>
        </div>

        <div className="text-center">
          <p className="text-gray-300 text-lg">
            Coming soon - Micro SAAS solutions for your business needs.
          </p>
        </div>
      </div>
    </div>
  );
}