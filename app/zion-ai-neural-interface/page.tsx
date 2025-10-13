import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ZionAiNeuralInterface() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Zion Ai Neural Interface - Zion Tech Group</title>
        <meta name="description" content="Advanced zion ai neural interface solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Zion Ai Neural Interface
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced zion ai neural interface solutions by Zion Tech Group.
          </p>
        </div>
      </div>
    </div>
  );
}