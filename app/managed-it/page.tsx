import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ManagedIt() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Managed It - Zion Tech Group</title>
        <meta name="description" content="Advanced managed it solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Managed It
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced managed it solutions by Zion Tech Group.
          </p>
        </div>
      </div>
    </div>
  );
}