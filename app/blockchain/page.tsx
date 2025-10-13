import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Blockchain() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Blockchain - Zion Tech Group</title>
        <meta name="description" content="Advanced blockchain solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Blockchain
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced blockchain solutions by Zion Tech Group.
          </p>
        </div>
      </div>
    </div>
  );
}