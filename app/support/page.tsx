import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Get support for our services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Support</h1>
        <p className="text-gray-300">Coming soon...</p>
      </div>
    </div>
  );
}