import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGiotsolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Iot Solutions | Zion Tech Group</title>
        <meta name="description" content="5g iot solutions solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">5G Iot Solutions</h1>
        <p className="text-gray-300">Coming soon...</p>
      </div>
    </div>
  );
}