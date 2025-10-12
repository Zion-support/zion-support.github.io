import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function CookiesPage() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Our cookie usage and preferences." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Cookie Policy</h1>
          <p className="text-lg text-gray-300 mb-8">How we use cookies on our website.</p>
        </div>
      </div>
    </>
  );
}